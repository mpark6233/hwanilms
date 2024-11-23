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

// loading chgmedialurl.js code
function chgmediaurl_script() {
    wp_enqueue_script( 'chgmediaurl', get_template_directory_uri() . '/js/chgmediaurl.js', array( 'jquery' ), false, true );
}
add_action( 'wp_enqueue_scripts', 'chgmediaurl_script' );

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
// add_filter( 'post_type_labels_portfolio', 'pm_rename_labels' );
// function pm_rename_labels( $labels )
// {
//     # Labels
//     $labels->name = '글';
//     $labels->singular_name = '글';
//     $labels->add_new = '글 쓰기';
//     $labels->add_new_item = '글 쓰기';
//     $labels->edit_item = '글 수정하기';
//     $labels->new_item = '새로운 글';
//     $labels->view_item = '글 보기';
//     $labels->view_items = '글 보기';
//     $labels->search_items = '글 검색하기';
//     $labels->not_found = '찾는 글이 없습니다.';
//     $labels->not_found_in_trash = '찾는 글이 휴지통에 없습니다.';
//     $labels->parent_item_colon = 'Parent news'; // Not for "post"
//     $labels->archives = 'News Archives';
//     $labels->attributes = 'News Attributes';
//     $labels->insert_into_item = 'Insert into news';
//     $labels->uploaded_to_this_item = 'Uploaded to this news';
//     $labels->featured_image = 'Featured Image';
//     $labels->set_featured_image = 'Set featured image';
//     $labels->remove_featured_image = 'Remove featured image';
//     $labels->use_featured_image = 'Use as featured image';
//     $labels->filter_items_list = 'Filter news list';
//     $labels->items_list_navigation = 'News list navigation';
//     $labels->items_list = 'News list';

//     # Menu
//     $labels->menu_name = '명품환일 글';
//     $labels->all_items = '전체 글';
//     $labels->name_admin_bar = '명품환일 글';

//     return $labels;
// }