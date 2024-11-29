<?php

function theme_enqueue_styles() {
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( 'avada-stylesheet' ) );
}
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

function avada_lang_setup() {
	$lang = get_stylesheet_directory() . '/languages';
	load_child_theme_textdomain( 'Avada', $lang );
}
add_action( 'after_setup_theme', 'avada_lang_setup' );

/**
 * Customize Post Types
 */
// Change Default Post Labels
add_action( 'admin_menu', 'pm_change_post_label' );
add_action( 'init', 'pm_change_post_object' );
function pm_change_post_label() {
    global $menu;
    global $submenu;
    $menu[5][0] = '환일생활 글';
    $submenu['edit.php'][5][0] = '모든 글'; // All Items
	$submenu['edit.php'][10][0] = '새로 추가'; // Add New
	$submenu['edit.php'][15][0] = '카테고리'; // Categories
    $submenu['edit.php'][16][0] = '태그'; // Tags
}
function pm_change_post_object() {
    global $wp_post_types;
    $labels = &$wp_post_types['post']->labels;
    $labels->name = '글';
    $labels->singular_name = '글';
    $labels->add_new = '글 쓰기';
    $labels->add_new_item = '글 쓰기';
    $labels->edit_item = '글 수정하기';
    $labels->new_item = '새로운 글';
    $labels->view_item = '글 보기';
    $labels->search_items = '글 검색하기';
    $labels->not_found = '찾는 글이 없습니다.';
    $labels->not_found_in_trash = '찾는 글이 휴지통에 없습니다.';
    $labels->all_items = '전체 글';
    $labels->menu_name = '환일생활 글';
    $labels->name_admin_bar = '환일생활 글';
}

// Change Portfolio Post Labels
add_action( 'admin_menu', 'pm_change_post_label2' );
add_action( 'init', 'pm_change_post_object2' );
function pm_change_post_label2() {
    global $menu;
    global $submenu;
    // print_r($menu);
    // print_r($submenu);
    $menu[26][0] = '명품환일 글';
    $submenu['edit.php?post_type=avada_portfolio'][5][0] = '모든 글'; // All Items
	$submenu['edit.php?post_type=avada_portfolio'][10][0] = '새로 추가'; // Add New
	$submenu['edit.php?post_type=avada_portfolio'][15][0] = '카테고리'; // Categories
    $submenu['edit.php?post_type=avada_portfolio'][17][0] = '태그'; // Tags
}
function pm_change_post_object2() {
    global $wp_post_types;

    // Check if 'avada_portfolio' exists in $wp_post_types and ensure it's not null
    if (isset($wp_post_types['avada_portfolio']) && !is_null($wp_post_types['avada_portfolio']->labels)) {
        $labels = &$wp_post_types['avada_portfolio']->labels;
        $labels->name = '글';
        $labels->singular_name = '글';
        $labels->add_new = '글 쓰기';
        $labels->add_new_item = '글 쓰기';
        $labels->edit_item = '글 수정하기';
        $labels->new_item = '새로운 글';
        $labels->view_item = '글 보기';
        $labels->search_items = '글 검색하기';
        $labels->not_found = '찾는 글이 없습니다.';
        $labels->not_found_in_trash = '찾는 글이 휴지통에 없습니다.';
        $labels->all_items = '전체 글';
        $labels->menu_name = '명품환일 글';
        $labels->name_admin_bar = '명품환일 글';
    }
}

/**
 * Setup AWS S3 Integration
 */
require_once '/var/www/html/vendor/autoload.php';
use Aws\S3\S3Client;

// Configure AWS S3 Client
function get_s3_client() {
    return new S3Client([
        'version'     => 'latest',
        'region'      => 'ap-northeast-2', // Replace with your bucket's region
        'credentials' => [
            'key'    => AWS_ACCESS_KEY_ID,
            'secret' => AWS_SECRET_ACCESS_KEY,
        ],
    ]);
}

// Upload Files to S3
add_filter('wp_handle_upload', 'upload_to_s3');
function upload_to_s3($file) {
    $s3 = get_s3_client();
    $upload = fopen($file['file'], 'rb');
    
    // Format the key to include the year and month dynamically
    $time = current_time('mysql');
    $year = substr($time, 0, 4);
    $month = substr($time, 5, 2);
    $key = "wp-content/uploads/$year/$month/" . basename($file['file']);

    $s3->putObject([
        'Bucket' => 'hwanilms',
        'Key'    => $key,
        'Body'   => $upload
    ]);

    fclose($upload);
    if (file_exists($file['file'])) {
        unlink($file['file']);
    }

    return $file;
}

// Rewrite Media URLs to Point to S3
add_filter('wp_get_attachment_url', 'get_attachment_url_from_s3', 10, 2);
function get_attachment_url_from_s3($url, $postID) {
    $filepath = get_post_meta($postID, '_wp_attached_file', true);
    return 'https://hwanilms.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/' . $filepath;
}

// Modify image srcset URLs to point to S3
add_filter('wp_calculate_image_srcset', 'modify_image_srcset_urls');
function modify_image_srcset_urls($sources) {
    foreach ($sources as $key => $source) {
        $sources[$key]['url'] = str_replace('https://www.hwanil.ms.kr/wp-content/uploads', 'https://hwanilms.s3.ap-northeast-2.amazonaws.com/wp-content/uploads', $source['url']);
    }
    return $sources;
}
