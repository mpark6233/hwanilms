<?php
/*
* @package: Booking Form Builder Page
* @category: Booking Form Builder Times
* @description: Define
* Plugin URI: wpbookingcalendar.com
* Author URI: https://wpbookingcalendar.com
* Author: wpdevelop, oplugins
* Version: 0.0.1
* @modified 2025-07-09
*/
if ( ! defined( 'ABSPATH' ) ) {
	exit;  // Exit if accessed directly.
}


/** Show Content
 *  Update Content
 *  Define Slug
 *  Define where to show
 */
class WPBC_Page_Builder_Booking_Form extends WPBC_Page_Structure {

	public function in_page() {
		return 'wpbc-settings';
	}


    public function tabs() {

		$tabs = array();
		$tabs['builder_booking_form'] = array(
			'is_default_full_screen'                    => true,                             // true | false.  By default value is: false.
			'is_show_top_path'                          => true,                             // true | false.  By default value is: false.
			'is_show_top_navigation'                    => false,                            // true | false.  By default value is: false.
			'right_vertical_sidebar__is_show'           => true,                             // true | false.  By default value is: false.
			'right_vertical_sidebar__default_view_mode' => '',                               // '' | 'min' | 'compact' | 'max' | 'none'.  By default value is: ''.
			'left_navigation__default_view_mode'        => 'max',                            // '' | 'min' | 'compact' | 'max' | 'none'.  By default value is: ''.
			'right_vertical_sidebar_compact__is_show'   => true,                             // true | false.  By default value is: false.

			'title'                                     => __( 'Booking Form Builder', 'booking' ),                            // Title of TAB //FixIn: 9.8.15.2.2.
			'hint'                                      => __( 'Define available and unavailable days for your calendar(s).', 'booking' ),                            // Hint.
			'page_title'                                => __( 'Booking Form Builder', 'booking' ),                            // Title of Page.
			'link'                                      => '',                            // Can be skiped,  then generated link based on Page and Tab tags. Or can  be extenral link.
			'position'                                  => '',                            // 'left'  /  'right'  /  ''.
			'css_classes'                               => '',                            // CSS c l a s s(es).
			'icon'                                      => '',                            // Icon - link to the real PNG img.
			'font_icon'                                 => 'wpbc_icn_flip_x0 wpbc-bi-input-cursor-text  0layout-text-window-reverse',                            // 'wpbc_icn_free_cancellation' // CSS definition  of forn Icon.
			'font_icon_right'                           => 'wpbc-bi-asterisk',
			'default'                                   => false,                            // Is this tab activated by default or not: true || false.
			'disabled'                                  => false,                            // Is this tab disbaled: true || false.
			'hided'                                     => false,                            // Is this tab hided: true || false.
			'subtabs'                                   => array(),
			'folder_style'                              => 'order:11;',
		);
        return $tabs;
    }


		/**
		 * Show custom tabs for Toolbar at . - . R i g h t . s i d e.
		 *
		 * @param string $menu_in_page_tag - active page
		 */
	public function wpbc_toolbar_toolbar_tabs( $menu_in_page_tag ) {

		// phpcs:ignore WordPress.Security.NonceVerification.Recommended, WordPress.Security.NonceVerification.Missing
		if ( ( $this->in_page() === $menu_in_page_tag ) && ( ( empty( $_GET['tab'] ) ) || ( 'builder_booking_form' === $_GET['tab'] ) ) ) {  // FixIn: 9.8.15.2.2.

			wpbc_bs_toolbar_tabs_html_container_start();

			$escaped_search_request_params = $this->get_cleaned_params__saved_requestvalue_default();

			// Check if by  some reason, user was saved request without this parameter, then get  default value.
			if ( ! empty( $escaped_search_request_params['ui_usr__builder_booking_form_selected_toolbar'] ) ) {
				$selected_tab = $escaped_search_request_params['ui_usr__builder_booking_form_selected_toolbar'];
			} else {
				$default_search_request_params = WPBC_AJX__Builder_Booking_Form::request_rules_structure();
				$selected_tab                  = $default_search_request_params ['ui_usr__builder_booking_form_selected_toolbar']['default'];
			}

				wpbc_bs_display_tab(   array(
													'title'         => __( 'Set Booking Form', 'booking' )
													, 'hint' => array( 'title' => __('Booking Form' ,'booking') , 'position' => 'top' )
													, 'onclick'     =>  "jQuery('.ui_container_toolbar').hide();"
																		. "jQuery('.ui_container_info').show();"
																		. "jQuery('.wpbc_builder_booking_form_support_tabs').removeClass('nav-tab-active');"
																		. "jQuery(this).addClass('nav-tab-active');"
																		. "jQuery('.nav-tab i.icon-white').removeClass('icon-white');"
																		. "jQuery('.nav-tab-active i').addClass('icon-white');"
																		/**
																		 * It will save such changes, and if we have selected bookings, then deselect them
																		 */
																		//		. "wpbc_ajx_booking_send_search_request_with_params( { 'ui_usr__builder_booking_form_selected_toolbar': 'filters' });"
																		/**
																		 * It will save changes with NEXT search request, but not immediately
																		 * it is handy, in case if we have selected bookings,
																		 * we will not lose selection.
																		 */
																		. "wpbc_builder_booking_form.search_set_param( 'ui_usr__builder_booking_form_selected_toolbar', 'info' );"
													, 'font_icon'   => 'wpbc-bi-calendar2-check' //'wpbc_icn_info_outline'
													, 'default'     => ( 'info' == $selected_tab ) ? true : false
													//, 'position' 	=> 'right'
													, 'css_classes' => 'wpbc_builder_booking_form_support_tabs'
									) );

				wpbc_bs_display_tab(   array(
													'title'         => __('Options', 'booking')
													, 'hint' => array( 'title' => __('User Options' ,'booking') , 'position' => 'top' )
													, 'onclick'     =>  "jQuery('.ui_container_toolbar').hide();"
																		. "jQuery('.ui_container_options').show();"
																		. "jQuery('.wpbc_builder_booking_form_support_tabs').removeClass('nav-tab-active');"
																		. "jQuery(this).addClass('nav-tab-active');"
																		. "jQuery('.nav-tab i.icon-white').removeClass('icon-white');"
																		. "jQuery('.nav-tab-active i').addClass('icon-white');"
																		/**
																		 * It will save such changes, and if we have selected bookings, then deselect them
																		 */
																		// 		. "wpbc_ajx_booking_send_search_request_with_params( { 'ui_usr__builder_booking_form_selected_toolbar': 'options' });"
																		/**
																		 * It will save changes with NEXT search request, but not immediately
																		 * it is handy, in case if we have selected bookings,
																		 * we will not lose selection.
																		 */
																		. "wpbc_builder_booking_form.search_set_param( 'ui_usr__builder_booking_form_selected_toolbar', 'calendar_settings' );"
													, 'font_icon'   => 'wpbc_icn_tune'
													, 'default'     => ( 'calendar_settings' == $selected_tab ) ? true : false
													//, 'position' 	=> 'right'
													, 'css_classes' => 'wpbc_builder_booking_form_support_tabs'

									) );

				wpbc_bs_toolbar_tabs_html_container_end();

			}
		}


		/**
		 * Get sanitised request parameters.	:: Firstly  check  if user  saved it. :: Otherwise, check $_REQUEST. :: Otherwise get  default.
		 *
		 * @return array|false
		 */
		public function get_cleaned_params__saved_requestvalue_default(){

			$user_request = new WPBC_AJX__REQUEST( array(
													   'db_option_name'          => 'booking_builder_booking_form_request_params',
													   'user_id'                 => wpbc_get_current_user_id(),
													   'request_rules_structure' => WPBC_AJX__Builder_Booking_Form::request_rules_structure()
													)
							);
			$escaped_request_params_arr = $user_request->get_sanitized__saved__user_request_params();		// Get Saved

//Fix Calendar cell heights in versions older than // FixIn: 9.7.3.2.
if ( 	( false !== $escaped_request_params_arr )
	 && ( '' === $escaped_request_params_arr['calendar__view__cell_height'] )
) {
	$user_request->user_request_params__db_delete();    // Delete from DB.
}

			if ( false === $escaped_request_params_arr ) {			// This request was not saved before, then get sanitized direct parameters, like: 	$_REQUEST['resource_id']

				$request_prefix = false;
				$escaped_request_params_arr = $user_request->get_sanitized__in_request__value_or_default( $request_prefix  );		 		// Direct: 	$_REQUEST['resource_id']
			}


			//MU
			if ( class_exists( 'wpdev_bk_multiuser' ) ) {

				// Check if this MU user activated or superadmin,  otherwise show warning
				if ( ! wpbc_is_mu_user_can_be_here('activated_user') )
					return  false;

				// Check if this MU user owner of this resource or superadmin,  otherwise show warning
				if ( ! wpbc_is_mu_user_can_be_here( 'resource_owner', $escaped_request_params_arr['resource_id'] ) ) {
					$default_values = $user_request->get_request_rules__default();
					$escaped_request_params_arr['resource_id'] = $default_values['resource_id'];
				}

			}



		    return $escaped_request_params_arr;
		}


    public function content() {



        do_action( 'wpbc_hook_settings_page_header', 'page_booking_builder_booking_form');							// Define Notices Section and show some static messages, if needed.

	    if ( ! wpbc_is_mu_user_can_be_here( 'activated_user' ) ) {  return false;  }  						// Check if MU user activated, otherwise show Warning message.

 		// if ( ! wpbc_set_default_resource_to__get() ) return false;                  						// Define default booking resources for $_GET  and  check if booking resource belong to user.


		// Get and escape request parameters	////////////////////////////////////////////////////////////////////////
//       	$escaped_request_params_arr = $this->get_cleaned_params__saved_requestvalue_default();
$escaped_request_params_arr = array();
		// During initial load of the page,  we need to  reset  'dates_selection' value in our saved parameter
		 $escaped_request_params_arr['dates_selection'] = '';
		 $escaped_request_params_arr['calendar__start_week_day'] = intval(get_bk_option( 'booking_start_day_weeek' ));


        // Submit  /////////////////////////////////////////////////////////////
        $submit_form_name = 'wpbc_builder_booking_form_form';                             	// Define form name

		?><span class="wpdevelop"><?php                                         		// BS UI CSS Class

			wpbc_js_for_bookings_page();                                            	// JavaScript functions

//			$this->wpbc_toolbar_toolbar_tabs( $this->in_page() );
//		    wpbc_builder_booking_form__toolbar( $escaped_request_params_arr );

		?></span><?php

		$this->show_warning__no_mobile_mode();

		?><div id="wpbc_log_screen" class="wpbc_log_screen"></div><?php

        // Content  ////////////////////////////////////////////////////////////
        ?>
        <div class="clear" style="margin-bottom:10px;"></div>
        <span class="metabox-holder">
            <form  name="<?php echo esc_attr( $submit_form_name ); ?>" id="<?php echo esc_attr( $submit_form_name ); ?>" action="" method="post" >
                <?php
                   // N o n c e   field, and key for checking   S u b m i t
                   wp_nonce_field( 'wpbc_settings_page_' . $submit_form_name );
                ?><input type="hidden" name="is_form_sbmitted_<?php echo esc_attr( $submit_form_name ); ?>" id="is_form_sbmitted_<?php echo esc_attr( $submit_form_name ); ?>" value="1" /><?php

				//wpbc_ajx_booking_modify_container_show();					// Container for showing Edit ajx_booking and define Edit and Delete ajx_booking JavaScript vars.

				wpbc_clear_div();

				$this->add_columns_controll();

				$this->builder_booking_form__creation_area();

				wpbc_clear_div();

				$this->load_calendar();

				// $this->builder_booking_form_container__show( $escaped_request_params_arr );

		  ?></form>
        </span>
        <?php

		//wpbc_show_wpbc_footer();			// Rating

        do_action( 'wpbc_hook_settings_page_footer', 'wpbc-ajx_booking_builder_booking_form' );
    }

		private function load_calendar(){
			$resource_id = 4;
			if (0){
			?>
			<style type="text/css"
				   rel="stylesheet"> .hasDatepick .datepick-inline .datepick-title-row th, .hasDatepick .datepick-inline .datepick-days-cell {
					max-height: 50px;
				} </style>
			<div class="wpbc_calendar_wraper wpbc_change_over_triangle">
				<div class="bk_calendar_frame months_num_in_row_4 cal_month_num_4 wpbc_no_custom_width   " style="width:100%;max-width:100%;">
					<div id="calendar_booking<?php echo esc_attr( $resource_id ); ?>"><?php esc_html_e( 'Calendar is loading...', 'booking' ); ?></div>
				</div>
			</div>
			<textarea rows="3" cols="50" id="date_booking<?php echo esc_attr( $resource_id ); ?>" name="date_booking<?php echo esc_attr( $resource_id ); ?>" autocomplete="off" style="display:none;"></textarea>
			<?php
			}
			?> <script type="text/javascript">
				function wpbc_load_calendar_example(){ <?php echo wpbc__calendar__set_js_params__before_show( array( 'resource_id' => $resource_id, 'calendar_number_of_months' => 1 ) ); ?>
					wpbc_calendar_show( '<?php echo $resource_id; ?>' );
					_wpbc.set_secure_param( 'nonce', '<?php echo esc_attr( wp_create_nonce( 'wpbc_calendar_load_ajx' . '_wpbcnonce' ) ); ?>' );
					_wpbc.set_secure_param( 'user_id', '<?php echo esc_attr( wpbc_get_current_user_id() ); ?>' );
					_wpbc.set_secure_param( 'locale', '<?php echo esc_attr( get_user_locale() ); ?>' );
					wpbc_calendar__load_data__ajx( {
						"resource_id"              : 4,
						"booking_hash"             : "",
						"request_uri"              : "\/admin.php?page=wpbc-settings&tab=builder_booking_form",
						"custom_form"              : "standard",
						"aggregate_resource_id_str": "",
						"aggregate_type"           : "all"
					} );
				}
			</script> <?php
		}


		private function builder_booking_form_container__show( $escaped_request_params_arr ) {

			?>
			<div id="ajx_nonce_calendar_section"></div>
			<div class="wpbc_builder_booking_form_container wpbc_selectable_table wpdevelop" wpbc_loaded="first_time">
				<style type="text/css">
					.wpbc_calendar_loading .wpbc_icn_autorenew::before{
						font-size: 1.2em;
					}
					.wpbc_calendar_loading {
						width:95%;
						text-align: center;
						margin:2em 0;
						font-size: 1.2em;
						font-weight: 600;
					}
				</style>
				<div class="wpbc_calendar_loading"><span class="wpbc_icn_autorenew wpbc_spin"></span>&nbsp;&nbsp;<span><?php esc_html_e( 'Loading', 'booking' ); ?>...</span>
				</div>
			</div>
			<script type="text/javascript">
				jQuery( document ).ready( function (){

					// Set Security - Nonce for Ajax  - Listing
					wpbc_builder_booking_form.set_secure_param( 'nonce',   '<?php echo esc_js( wp_create_nonce( 'wpbc_builder_booking_form_ajx' . '_wpbcnonce' ) ); ?>' );
					wpbc_builder_booking_form.set_secure_param( 'user_id', '<?php echo esc_js( wpbc_get_current_user_id() ); ?>' );
					wpbc_builder_booking_form.set_secure_param( 'locale',  '<?php echo esc_js( get_user_locale() ); ?>' );

					// Set other parameters
					wpbc_builder_booking_form.set_other_param( 'listing_container',    '.wpbc_builder_booking_form_container' );

					// Send Ajax request and show listing after this.
					wpbc_builder_booking_form__send_request_with_params( <?php echo wp_json_encode( $escaped_request_params_arr ); ?> );
				} );
			</script>
			<?php
// FixIn: 10.0.0.5.
if ( 1 ) {
			$resource_id = 4;
			// phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedStylesheet  // FixIn: 10.12.4.2.
			?><style type="text/css" rel="stylesheet"> .hasDatepick .datepick-inline .datepick-title-row th, .hasDatepick .datepick-inline .datepick-days-cell { max-height: 50px; } </style><?php

			?>
			<div class="wpbc_calendar_wraper wpbc_change_over_triangle">
				<div class="bk_calendar_frame months_num_in_row_4 cal_month_num_4 wpbc_no_custom_width" style="width:100%;max-width:100%;">
					<div id="calendar_booking<?php echo esc_attr( $resource_id ); ?>"><?php esc_html_e('Calendar is loading...', 'booking'); ?></div>
				</div>
			</div><?php

			$selected_dates_if_no_calendar = '';
			echo '<textarea rows="3" cols="50" id="date_booking' . esc_attr( $resource_id ) . '" name="date_booking' . esc_attr( $resource_id ) . '"  autocomplete="off" style="display:none;">' .
				 esc_textarea( $selected_dates_if_no_calendar ) . '</textarea>';
	if(1){
			$start_script_code = wpbc__calendar__load( array(

														'resource_id'                     => $resource_id,
														'aggregate_resource_id_arr'       => array(),               // It is array  of booking resources from aggregate parameter()
														'selected_dates_without_calendar' => $selected_dates_if_no_calendar,                    // $selected_dates_if_no_calendar
														'calendar_number_of_months'       => 12,                     // $my_boook_count
														'start_month_calendar'            => false,                  // $start_month_calendar
														'shortcode_options'               => '',                     // options from the Booking Calendar shortcode. Usually  it's conditional dates selection parameters
														'custom_form'                     => 'standard'

													));
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			echo $start_script_code;
	} else {
				?>
				<script type='text/javascript'> jQuery( document ).ready( function (){
						_wpbc.balancer__set_max_threads( 1 );
						_wpbc.calendar__set_param_value( 4, 'calendar_scroll_to', false );
						_wpbc.calendar__set_param_value( 4, 'booking_max_monthes_in_calendar', '2y' );
						_wpbc.calendar__set_param_value( 4, 'booking_start_day_weeek', '1' );
						_wpbc.calendar__set_param_value( 4, 'calendar_number_of_months', '1' );
						_wpbc.calendar__set_param_value( 4, 'days_select_mode', 'dynamic' );
						_wpbc.calendar__set_param_value( 4, 'fixed__days_num', 7 );
						_wpbc.calendar__set_param_value( 4, 'fixed__week_days__start', [-1] );
						_wpbc.calendar__set_param_value( 4, 'dynamic__days_min', 1 );
						_wpbc.calendar__set_param_value( 4, 'dynamic__days_max', 30 );
						_wpbc.calendar__set_param_value( 4, 'dynamic__days_specific', [] );
						_wpbc.calendar__set_param_value( 4, 'dynamic__week_days__start', [-1] );
						_wpbc.calendar__set_param_value( 4, 'booking_date_format', 'j M Y' );
						_wpbc.calendar__set_param_value( 4, 'booking_time_format', 'g:i A' );
						_wpbc.set_message( 'message_dates_times_unavailable', 'These dates and times in this calendar are already booked or unavailable.' );
						_wpbc.set_message( 'message_choose_alternative_dates', 'Please choose alternative date(s), times, or adjust the number of slots booked.' );
						_wpbc.set_message( 'message_cannot_save_in_one_resource', 'It is not possible to store this sequence of the dates into the one same resource.' );
						_wpbc.calendar__set_param_value( 4, 'is_parent_resource', 0 );
						_wpbc.calendar__set_param_value( 4, 'booking_capacity_field', 'visitors' );
						_wpbc.calendar__set_param_value( 4, 'booking_is_dissbale_booking_for_different_sub_resources', 'Off' );
						_wpbc.calendar__set_param_value( 4, 'booking_recurrent_time', 'Off' );
						if ( 'function' === typeof (wpbc__conditions__SAVE_INITIAL__days_selection_params__bm) ){  wpbc__conditions__SAVE_INITIAL__days_selection_params__bm( 4 );  }
						_wpbc.calendar__set_param_value( 4, 'conditions', {
							"select-day": {
											"weekday": [{
															"for"  : "0",
															"value": "7,14"
														}]
										}
						} );
						_wpbc.seasons__set( 4, [] );
						wpbc_calendar_show( '4' );
						_wpbc.set_secure_param( 'nonce',  '<?php echo esc_attr( wp_create_nonce( 'wpbc_calendar_load_ajx' . '_wpbcnonce' ) ); ?>' );
						_wpbc.set_secure_param( 'user_id','<?php echo esc_attr( wpbc_get_current_user_id() ); ?>' );
						_wpbc.set_secure_param( 'locale', '<?php echo esc_attr( get_user_locale() ); ?>' );
						wpbc_calendar__load_data__ajx( {
							"resource_id"              : 4,
							"booking_hash"             : "",
							"request_uri"              : "\/2024-03-221132\/",
							"custom_form"              : "standard",
							"aggregate_resource_id_str": "",
							"aggregate_type"           : "all"
						} );
					} );
				</script>
				<?php
	}
}


		}

	function builder_booking_form__creation_area() {
		?>
		<div class="wpbc_bfb__container">
			<!-- LEFT SIDE: Pages (Wizard Form) -->
			<div id="wpbc_bfb__pages_panel" class="wpbc_bfb__pages_panel">
				<div id="wpbc_bfb__pages_container"></div>
				<div style="margin-top:20px;">
					<button class="button" id="wpbc_bfb__add_page_btn" aria-label="<?php esc_attr_e( 'Add Page', 'booking' ); ?>">+ <?php esc_html_e( 'Add Page', 'booking' ); ?></button>
					<button class="button" id="wpbc_bfb__save_btn" aria-label="Save the form"><?php esc_html_e( 'Save Form', 'booking' ); ?></button>
				</div>
			</div>
		</div>
		<div style="width: 100%;height: 25vh;clear: both;"></div>
		<?php
	}


	public function right_sidebar_content() {
		?>
			<!-- RIGHT SIDE: Field Library -->
			<div class="wpbc_bfb__panel--library">
				<div id="wpbc_bfb__inspector" class="wpbc_bfb__inspector"></div>
				<h3><?php esc_html_e( 'Available Fields', 'booking' ); ?></h3>
				<label><input type="checkbox" id="wpbc_bfb__toggle_preview" checked/> <?php esc_html_e( 'Preview Mode', 'booking' ); ?></label>
				<ul class="wpbc_bfb__panel_field_types__ul">
					<li class="wpbc_bfb__field"
						data-usagenumber="1"
						data-id="calendar"
						data-type="calendar"
						data-label="Calendar"
						data-min_width="250px"
					>
						<span class="wpbc_bfb__field-label"><?php esc_html_e( 'Calendar', 'booking' ); ?></span><span class="wpbc_bfb__field-type">calendar</span>
					</li>
					<li class="wpbc_bfb__field" data-id="input-text" data-type="text" data-min_width="8em">
						<span class="wpbc_bfb__field-label"><?php esc_html_e( 'Text', 'booking' ); ?></span><span class="wpbc_bfb__field-type">text</span>
					</li>
					<li class="wpbc_bfb__field" data-id="selectbox" data-type="selectbox" data-label="Select Item"
						data-placeholder="Please select" data-options='["One", "Two", "Three"]' data-required="true">
						<span class="wpbc_bfb__field-label"><?php esc_html_e( 'Select', 'booking' ); ?></span><span
							class="wpbc_bfb__field-type">selectbox</span>
					</li>
					<li class="wpbc_bfb__field" data-id="checkbox" data-type="checkbox" data-label="Choose Item"
						data-placeholder="Please choose" data-options='["1", "2", "3"]' data-required="true">
						<span class="wpbc_bfb__field-label"><?php esc_html_e( 'Checkbox', 'booking' ); ?></span><span
							class="wpbc_bfb__field-type">checkbox</span>
					</li>
					<li class="wpbc_bfb__field" data-id="textarea" data-type="textarea">
						<span class="wpbc_bfb__field-label"><?php esc_html_e( 'Textarea', 'booking' ); ?></span><span class="wpbc_bfb__field-type">textarea</span>
					</li>
				</ul>
				<ul class="wpbc_bfb__panel_field_types__ul">
					<li class="wpbc_bfb__field" data-id="input-email" data-type="email"  data-usagenumber="1">
						<span class="wpbc_bfb__field-label"><?php esc_html_e( 'Email', 'booking' ); ?></span><span class="wpbc_bfb__field-type">email</span>
					</li>
					<li class="wpbc_bfb__field" data-id="rangetime" data-type="timeslots" data-usagenumber="1">
						<span class="wpbc_bfb__field-label"><?php esc_html_e( 'Time Slots', 'booking' ); ?></span><span class="wpbc_bfb__field-type">time-slots</span>
					</li>
				</ul>
			</div>
		<?php
	}


	public function right_sidebar_compact_content() {

		// TEST:.
		for( $i = 0; $i < 1 ; $i++) {
		?>
			<div class="wpbc_ui_el__level__folder" style="order:10;">
				<div class="wpbc_ui_el__vert_nav_item wpbc_ui_el__vert_nav_item__builder_booking_form active">
					<a href="javascript:void(0);" class="wpbc_ui_el__vert_nav_item__a wpbc_ui_el__vert_nav_item__single">
						<i class="wpbc_ui_el__vert_nav_icon tooltip_right_offset  menu_icon icon-1x wpbc_icn_add_circle_outline" data-original-title="Booking Form Builder - Add New Fields."></i>
					</a>
				</div>
			</div>
			<div class="wpbc_ui_el__level__folder" style="order:10;">
				<div class="wpbc_ui_el__vert_nav_item wpbc_ui_el__vert_nav_item__builder_booking_form">
					<a href="javascript:void(0);" class="wpbc_ui_el__vert_nav_item__a wpbc_ui_el__vert_nav_item__single">
						<i class="wpbc_ui_el__vert_nav_icon tooltip_right_offset  menu_icon icon-1x wpbc_icn_tune" data-original-title="Booking Form Builder - Preferences."></i>
					</a>
				</div>
			</div>
			<?php
		}

	}


	public function show_warning__no_mobile_mode() {
		?>
		<div id="wpbc-builder-mobile-notice" class="wpbc-fullscreen-notice">
			<div class="wpbc-fullscreen-big-logo">
				<?php
				echo wpbc_get_svg_logo_for_html(
					array(
						'svg_color'     => '#fff',
						'svg_color_alt' => '#bbb',
						'opacity'       => '0.35',
						'style_default' => 'background-repeat: no-repeat; background-position: center; display: inline-block; vertical-align: middle;',
						'style_adjust'  => 'background-size: 40px auto; width: 40px; height: 40px; margin-top: 0px;',  // This parameters, the adjust size of the logo and position.
						'css_class'     => '',
					)
				);
				?>
				<span class="wpbc-fullscreen-big-logo-title"><span class="wpbc-fullscreen-big-logo-title-wp">WP</span>Booking Calendar</span>
			</div>
			<h3><?php esc_html_e('Our booking form builder is optimized for desktop computers.','booking'); ?></h3>
			<p><?php esc_html_e('We recommend that you edit your forms on a bigger screen. If you\'d like to proceed, please understand that some functionality might not behave as expected.','booking'); ?></p>
			<div class=" ">
				<button type="button" class="button-secondary" onclick="javascript: jQuery( '.wpbc-fullscreen-notice').hide();"><?php esc_html_e('Continue','booking'); ?></button>
				<button type="button" class="wpbc_bfb__button-close" onclick="javascript: jQuery( '.wpbc-fullscreen-notice').hide();" title="<?php esc_attr_e('Close','booking'); ?>" aria-label="<?php esc_attr_e('Close','booking'); ?>"><i class="menu_icon icon-1x wpbc_icn_close"></i></button>
			</div>
		</div>
		<style type="text/css">
			@media (min-width: 1024px) {
				#wpbc-builder-mobile-notice {
					display: none;
				}
				.wpbc_settings_page_wrapper.max .wpbc_settings_page_content .wpbc_page {
					display: block;
				}
			}
			.wpbc-fullscreen-notice {
				background: #f5f6f7;
				cursor: default;
				height: 100%;
				min-width: 0;
				padding: 0 20px;
				overflow: scroll;
				position: fixed;
				z-index: 100110;
				text-align: center;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background: #374655;
				scrollbar-width: thin;
			}
			.wpbc-fullscreen-notice * {
				color: #fff;
			}
				.wpbc-fullscreen-big-logo {
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					justify-content: flex-start;
					gap: 10px;
					position: absolute;
					top: 20px;
					left: 20px;
				}
				.wpbc-fullscreen-big-logo-title {
					margin: -15px 0 0 0;
					font-size: 25px;
					padding: 0;
					font-weight: 600;
				}
				.wpbc-fullscreen-big-logo-title-wp {
					position: absolute;
					font-size: 10px;
					margin-top: 18px;
					margin-left: 1px;
					font-weight: 501;
				}
			.wpbc-fullscreen-notice h3{
				line-height: 1.74em;
  				font-size: 24px;
			}
			.wpbc-fullscreen-notice .wpbc_bfb__button-close {
				position: absolute;
				top: 20px;
				right:20px;
				margin: 0;
				border: 0;
				padding: 0;
				vertical-align: middle;
				background: 0 0;
				height: auto;
				box-sizing: border-box;
				cursor: pointer;
			}
			.wpbc-fullscreen-notice .wpbc_bfb__button-close .wpbc_icn_close::before {
				font-size: 22px;
			}
		</style>
		<?php

	}


	public function add_columns_controll() {
		?>
		<div id="wpbc_bfb__add_columns_template" class="add_columns_controll_template" hidden >
		<?php
		$el_arr = array(
			'font_icon'       => 'wpbc_icn_add_circle',
			'title'           => '<span class="nav-tab-text hide_in_mobile">' . __( 'Add columns', 'booking' ) . ' </span><span class="selected_value"></span>',
			'hint'            => array(
				'title'    => __( 'Select to add columns', 'booking' ),
				'position' => 'top',
			),
			'position'        => 'left',
			'has_down_arrow'  => true,
			'has_border'      => true,
			'container_class' => 'ul_dropdown_menu__' . 'add_sections',
			'items'           => array(
				array( 'type' => 'header', 'title' => __( 'Add section with', 'booking' ) . '...', 'class' => 'hide_button_if_no_selection' ),
				array( 'html' => $this->add_columns__get_option( 1 ) ),
				array( 'html' => $this->add_columns__get_option( 2 ) ),
				array( 'type' => 'divider' ),
				array( 'html' => $this->add_columns__get_option( 3 ) ),
				array( 'html' => $this->add_columns__get_option( 4 ) ),
			),
		);

		wpbc_ui_el__dropdown_menu( $el_arr );
		?></div><?php
	}

	public function add_columns__get_option( $column_number ){
		$css_class  = 'ul_dropdown_menu_li_action ul_dropdown_menu_li_action_add_sections';
		// Option Title.
		$html = "<a href=\"javascript:void(0)\"  
					class=\"" . esc_attr( $css_class ) . "\" 
		 			data-cols=\"" . intval( $column_number ) . "\"
					title=\"" . esc_attr( __( 'Add columns', 'booking' ) ) . "\"
				 >" . esc_html($column_number) . ' ' . esc_js( ( $column_number < 2 ) ? __( 'Column', 'booking' ) : __( 'Columns', 'booking' ) ) . ' <i class="menu_icon icon-1x wpbc_icn_done_all"></i>' . '</a>';

		return $html;
	}

}
add_action('wpbc_menu_created', array( new WPBC_Page_Builder_Booking_Form() , '__construct') );    // Executed after creation of Menu
