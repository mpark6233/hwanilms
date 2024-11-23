<?php /**
 * @version 1.0
 * @description Template   for Setup pages
 * @category    Setup Templates
 * @author wpdevelop
 *
 * @web-site http://oplugins.com/
 * @email info@oplugins.com
 *
 * @modified 2024-09-09
 */

if ( ! defined( 'ABSPATH' ) ) exit;                                             // Exit if accessed directly


// -------------------------------------------------------------------------------------------------------------
// == Main - Booking Types ==
// -------------------------------------------------------------------------------------------------------------
/**
 * Template - General Info - Step 01
 *
 * 	Help Tips:
 *
 *		<script type="text/html" id="tmpl-template_name_a">
 * 			Escaped:  	 {{data.test_key}}
 * 			HTML:  		{{{data.test_key}}}
 * 			JS: 	  	<# if (true) { alert( 1 ); } #>
 * 		</script>
 *
 * 		var template__var = wp.template( 'template_name_a' );
 *
 * 		jQuery( '.content' ).html( template__var( { 'test_key' => '<strong>Data</strong>' } ) );
 *
 * @return void
 */
function wpbc_template__stp_wiz__main_section__bookings_types(){

	?><script type="text/html" id="tmpl-wpbc_template__stp_wiz__main_section__bookings_types">
	<div class="wpbc_page_main_section    wpbc_container    wpbc_form    wpbc_container_booking_form">
		<div class="wpbc__form__div wpbc_swp_section wpbc_swp_section__bookings_types">
			<div class="wpbc__row">
				<div class="wpbc__field">
					<h1 class="wpbc_swp_section_header" ><?php _e( 'Select Your Booking Type', 'booking' ); ?></h1>
					<p class="wpbc_swp_section_header_description"><?php _e('This will help customize your experience.','booking'); ?></p>
				</div>
			</div>
			<div class="wpbc__row">
				<div class="wpbc__field">

					<div class="wpbc_ui_radio_section wpbc_ui_radio_section_as_row">
						<?php /* ?>
						<div class="wpbc_ui_radio_container" data-selected="true"  >
							<div class="wpbc_ui_radio_choice">
								<input class="wpbc_ui_radio_choice_input"
									   type="radio"
									   checked="checked"
									   name="wpbc_swp_booking_types"
									     id="wpbc_swp_booking_types__full_days_bookings"
									   						  value="full_days_bookings"
								/>
								<label  for="wpbc_swp_booking_types__full_days_bookings" class="wpbc_ui_radio_choice_title"><?php _e('Full Day Bookings','booking'); ?></label>
								<p class="wpbc_ui_radio_choice_description"><?php _e('Receive and manage full dates bookings for single or multiple days. No times selection.','booking') ?></p>
							</div>
						</div>
						<div class="wpbc_ui_radio_container"  >
							<div class="wpbc_ui_radio_choice">
								<input  class="wpbc_ui_radio_choice_input"
									   type="radio"
									   name="wpbc_swp_booking_types"
									     id="wpbc_swp_booking_types__time_slots_appointments"
									   						  value="time_slots_appointments"
								/>
								<label for="wpbc_swp_booking_types__time_slots_appointments" class="wpbc_ui_radio_choice_title"><?php _e('Times Appointments','booking'); ?></label>
								<p class="wpbc_ui_radio_choice_description"><?php _e('Receive and manage bookings for chosen times on selected date(s). Time-slots selection in booking form.','booking'); ?></p>
							</div>
						</div>
						<div class="wpbc_ui_radio_container"   >
							<div class="wpbc_ui_radio_choice">
								<input 	class="wpbc_ui_radio_choice_input"
									   type="radio"
									   disabled="disabled"
									   name="wpbc_swp_booking_types"
									     id="wpbc_swp_booking_types__changeover_multi_dates_bookings"
									   						  value="changeover_multi_dates_bookings"
								/>
								<label for="wpbc_swp_booking_types__changeover_multi_dates_bookings" class="wpbc_ui_radio_choice_title"><?php _e('Changeover multi dates bookings','booking'); ?></label>
								<a tabindex="-1" href="https://wpbookingcalendar.com/features/#change-over-days" target="_blank"><strong class="wpbc_ui_radio_text_right">Pro</strong></a>
								<p class="wpbc_ui_radio_choice_description"><?php _e('Manage multidays bookings with changeover days for check in/out dates, marked with diagonal or vertical lines. Split days bookings.','booking'); ?></p>
							</div>
							<div class="wpbc_ui_radio_choice wpbc_ui_radio_footer">
								<p class="wpbc_ui_radio_choice_description"><?php printf(__('Find more information about this feature on %sthis page%s.','booking'),
									'<a tabindex="-1" href="https://wpbookingcalendar.com/features/#change-over-days" target="_blank">','</a>') ; ?></p>
							</div>
						</div>
						<?php
						*/

							$params_radio = array(
								  'id'       => 'wpbc_swp_booking_types__full_days_bookings' 				// HTML ID  of element
								, 'name'     => 'wpbc_swp_booking_types'
								, 'value'    => 						'full_days_bookings' 				// Some Value from options array that selected by default
								, 'label'    => array( 'title' => __('Full-Day Bookings','booking') )
								, 'text_description'  => __('Manage bookings for entire days, whether it\'s for a single day or multiple days. No time selection is required.','booking')
								, 'label_after_right' => ''
								, 'footer_text' 	  => ''
								, 'style'    => '' 																		// CSS of select element
								, 'class'    => '' 																		// CSS Class of select element
								, 'disabled' => false
								, 'attr'     => array() 																// Any  additional attributes, if this radio | checkbox element
								, 'legend'   => ''																		// aria-label parameter
								, 'selected' => true 																	// Selected or not
								, 'onfocus' =>  "console.log( 'ON FOCUS:',  jQuery( this ).is(':checked') , 'in element:' , jQuery( this ) );"					// JavaScript code
								, 'onchange' => "console.log( 'ON CHANGE:', jQuery( this ).val() , 'in element:' , jQuery( this ) );"							// JavaScript code
							);
							wpbc_flex_radio_container( $params_radio );

							$params_radio = array(
								  'id'       => 'wpbc_swp_booking_types__time_slots_appointments' 				// HTML ID  of element
								, 'name'     => 'wpbc_swp_booking_types'
								, 'value'    => 						'time_slots_appointments' 				// Some Value from options array that selected by default
								, 'label'    => array( 'title' => __('Time-Based Appointments','booking') )
								, 'text_description'  => __('Manage bookings for specific times on selected dates. Allow clients to choose from available time slots in the booking form.','booking')
								, 'label_after_right' => ''
								, 'footer_text' 	  => ''
								, 'style'    => '' 																		// CSS of select element
								, 'class'    => '' 																		// CSS Class of select element
								, 'disabled' => false
								, 'attr'     => array() 																// Any  additional attributes, if this radio | checkbox element
								, 'legend'   => ''																		// aria-label parameter
								, 'selected' => false 																	// Selected or not
								, 'onfocus' =>  "console.log( 'ON FOCUS:',  jQuery( this ).is(':checked') , 'in element:' , jQuery( this ) );"					// JavaScript code
								, 'onchange' => "console.log( 'ON CHANGE:', jQuery( this ).val() , 'in element:' , jQuery( this ) );"							// JavaScript code
							);
							wpbc_flex_radio_container( $params_radio );

							$params_radio = array(
								  'id'       => 'wpbc_swp_booking_types__changeover_multi_dates_bookings' 				// HTML ID  of element
								, 'name'     => 'wpbc_swp_booking_types'
								, 'value'    => 						'changeover_multi_dates_bookings' 				// Some Value from options array that selected by default
								, 'label'    => array( 'title' => __('Changeover Multi-Date Bookings','booking') )
								, 'text_description'  => __('Manage multi-day bookings with specific check-in and check-out days, clearly marked with diagonal or vertical lines. Ideal for bookings that require split days.','booking')
								, 'label_after_right' => '<a tabindex="-1" href="https://wpbookingcalendar.com/features/#change-over-days" target="_blank"><strong class="wpbc_ui_radio_text_right">Pro</strong></a>'
								, 'footer_text' 	  => sprintf(__('Find more information about this feature on %sthis page%s.','booking'), '<a tabindex="-1" href="https://wpbookingcalendar.com/features/#change-over-days" target="_blank">','</a>')
								, 'style'    => '' 																		// CSS of select element
								, 'class'    => '' 																		// CSS Class of select element
								, 'disabled' => ( ! class_exists( 'wpdev_bk_biz_s' ) )
								, 'attr'     => array() 																// Any  additional attributes, if this radio | checkbox element
								, 'legend'   => ''																		// aria-label parameter
								, 'selected' => false 																	// Selected or not
								, 'onfocus' =>  "console.log( 'ON FOCUS:',  jQuery( this ).is(':checked') , 'in element:' , jQuery( this ) );"					// JavaScript code
								, 'onchange' => "console.log( 'ON CHANGE:', jQuery( this ).val() , 'in element:' , jQuery( this ) );"							// JavaScript code
							);
							wpbc_flex_radio_container( $params_radio );

						?>
					</div>

				</div>
			</div>
		</div>
	</div>
	<?php
	// -----------------------------------------------------------------------------------------------------------------
	// Buttons
	// -----------------------------------------------------------------------------------------------------------------
	?>
	<div class="wpbc_ajx_page__section wpbc_setup_wizard_page__section_footer		wpbc_ajx_page__section_footer wpbc_ajx_page__section_footer__internal">
		<div class="wpbc__container_place__footer_buttons 		wpbc_container    wpbc_form    wpbc_container_booking_form">

			<div class="wpbc__form__div">
				<hr>
				<div class="wpbc__row">
					<?php /* ?>
					<div class="wpbc__field">
						<input type="button" value="<?php esc_attr_e('Reset Wizard and Start from Beginning','booking'); ?>"
							   class="wpbc_button_light wpbc_button_danger tooltip_top "  style=""
							   onclick=" wpbc_ajx__setup_wizard_page__send_request_with_params(  { 'do_action': 'make_reset' }  ); ">
					</div>
					<?php */ ?>
					<div class="wpbc__field">
						<#  if ( '' != data['steps'][ data['current_step'] ]['prior'] ) { #>
						<a     class="wpbc_button_light"  style="margin-left:auto;margin-right:10px;" tabindex="0"
							   id="btn__toolbar__buttons_prior"
							   onclick=" wpbc_ajx__setup_wizard_page__send_request_with_params( {
																									'current_step': '{{data.steps[ data.current_step ].prior}}',
																									'do_action': 'none',
																									'ui_clicked_element_id': 'btn__toolbar__buttons_prior'
																								} );
										wpbc_button_enable_loading_icon( this );
										wpbc_admin_show_message_processing( '' );" ><i class="menu_icon icon-1x wpbc_icn_arrow_back_ios"></i><span>&nbsp;&nbsp;&nbsp;<?php _e('Go Back','booking'); ?></span></a>

						<# } else { #>
							<span style="margin-left:auto;"></span>
						<# } #>
						<a	   class="wpbc_button_light button-primary" tabindex="0"
							   id="btn__toolbar__buttons_next"
							   onclick=" wpbc_ajx__setup_wizard_page__send_request_with_params( {
																									'current_step': '{{data.steps[ data.current_step ].next}}',
																									   'do_action': '{{data.steps[ data.current_step ].do_action}}',
																									'ui_clicked_element_id': 'btn__toolbar__buttons_next',
																									   'step_data':{
																												'wpbc_swp_booking_types': jQuery( '[name=\'wpbc_swp_booking_types\']:checked').val()
																											}

																								} );

										wpbc_button_enable_loading_icon( this );
										wpbc_admin_show_message_processing( '' );" ><span><?php _e('Save and Continue','booking'); ?>&nbsp;&nbsp;&nbsp;</span><i class="menu_icon icon-1x wpbc_icn_arrow_forward_ios"></i></a>
					</div>
				</div>
				<div class="wpbc__row">
					<div class="wpbc__field">
						<p class="wpbc_exit_link_small">
							<a href="javascript:void(0)" tabindex="-1"
							   onclick=" wpbc_ajx__setup_wizard_page__send_request_with_params( { 'do_action': 'skip_wizard' } ); "
							   title="<?php esc_attr_e('Exit and skip the setup wizard','booking'); ?>"
							><?php
								_e('Exit and skip the setup wizard','booking');
							?></a>
							<?php  ?>
							<a href="javascript:void(0)" class="wpbc_button_danger" style="margin: 25px 0 0;  font-size: 12px;" tabindex="-1"
							   onclick=" wpbc_ajx__setup_wizard_page__send_request_with_params( { 'do_action': 'make_reset' } ); "
							   title="<?php esc_attr_e('Start Setup from Beginning','booking'); ?>"
							><?php
								_e('Reset Wizard','booking');
							?></a>
							<?php /**/ ?>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<?php
	// -----------------------------------------------------------------------------------------------------------------
	// End Buttons
	// -----------------------------------------------------------------------------------------------------------------
	?>
	<style type="text/css">
		.wpbc_setup_wizard_page_container .wpbc_swp_section__bookings_types {max-width: 440px}
		.wpbc_ajx_page__container .wpbc_ajx_page__section_footer:not(.wpbc_ajx_page__section_footer__internal){ display: none;}
	</style>
	</script><?php
}
