"use strict";

/**
 * =====================================================================================================================
 * JavaScript Util Functions		../includes/__js/utils/wpbc_utils.js
 * =====================================================================================================================
 */

/**
 * Trim  strings and array joined with  (,)
 *
 * @param string_to_trim   string / array
 * @returns string
 */
function wpbc_trim(string_to_trim) {
  if (Array.isArray(string_to_trim)) {
    string_to_trim = string_to_trim.join(',');
  }
  if ('string' == typeof string_to_trim) {
    string_to_trim = string_to_trim.trim();
  }
  return string_to_trim;
}

/**
 * Check if element in array
 *
 * @param array_here		array
 * @param p_val				element to  check
 * @returns {boolean}
 */
function wpbc_in_array(array_here, p_val) {
  for (var i = 0, l = array_here.length; i < l; i++) {
    if (array_here[i] == p_val) {
      return true;
    }
  }
  return false;
}

/**
 * Prevent opening blank windows on WordPress playground for pseudo links like this: <a href="javascript:void(0)"> or # to stay in the same tab.
 */
(function () {
  'use strict';

  function is_playground_origin() {
    return location.origin === 'https://playground.wordpress.net';
  }
  function is_pseudo_link(a) {
    if (!a || !a.getAttribute) return true;
    var href = (a.getAttribute('href') || '').trim().toLowerCase();
    return !href || href === '#' || href.indexOf('#') === 0 || href.indexOf('javascript:') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0;
  }
  function fix_target(a) {
    if (!a) return;
    if (is_pseudo_link(a) || a.hasAttribute('data-wp-no-blank')) {
      a.target = '_self';
    }
  }
  function init_fix() {
    // Optional: clean up current DOM (harmless—affects only pseudo/datamarked links).
    var nodes = document.querySelectorAll('a[href]');
    for (var i = 0; i < nodes.length; i++) fix_target(nodes[i]);

    // Late bubble-phase listeners (run after Playground's handlers)
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (a) fix_target(a);
    }, false);
    document.addEventListener('focusin', function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
      if (a) fix_target(a);
    });
  }
  function schedule_init() {
    if (!is_playground_origin()) return;
    setTimeout(init_fix, 1000); // ensure we attach after Playground's script.
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', schedule_init);
  } else {
    schedule_init();
  }
})();
"use strict";
/**
 * =====================================================================================================================
 *	includes/__js/wpbc/wpbc.js
 * =====================================================================================================================
 */

/**
 * Deep Clone of object or array
 *
 * @param obj
 * @returns {any}
 */
function wpbc_clone_obj(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Main _wpbc JS object
 */

var _wpbc = function (obj, $) {
  // Secure parameters for Ajax	------------------------------------------------------------------------------------
  var p_secure = obj.security_obj = obj.security_obj || {
    user_id: 0,
    nonce: '',
    locale: ''
  };
  obj.set_secure_param = function (param_key, param_val) {
    p_secure[param_key] = param_val;
  };
  obj.get_secure_param = function (param_key) {
    return p_secure[param_key];
  };

  // Calendars 	----------------------------------------------------------------------------------------------------
  var p_calendars = obj.calendars_obj = obj.calendars_obj || {
    // sort            : "booking_id",
    // sort_type       : "DESC",
    // page_num        : 1,
    // page_items_count: 10,
    // create_date     : "",
    // keyword         : "",
    // source          : ""
  };

  /**
   *  Check if calendar for specific booking resource defined   ::   true | false
   *
   * @param {string|int} resource_id
   * @returns {boolean}
   */
  obj.calendar__is_defined = function (resource_id) {
    return 'undefined' !== typeof p_calendars['calendar_' + resource_id];
  };

  /**
   *  Create Calendar initializing
   *
   * @param {string|int} resource_id
   */
  obj.calendar__init = function (resource_id) {
    p_calendars['calendar_' + resource_id] = {};
    p_calendars['calendar_' + resource_id]['id'] = resource_id;
    p_calendars['calendar_' + resource_id]['pending_days_selectable'] = false;
  };

  /**
   * Check  if the type of this property  is INT
   * @param property_name
   * @returns {boolean}
   */
  obj.calendar__is_prop_int = function (property_name) {
    // FixIn: 9.9.0.29.

    var p_calendar_int_properties = ['dynamic__days_min', 'dynamic__days_max', 'fixed__days_num'];
    var is_include = p_calendar_int_properties.includes(property_name);
    return is_include;
  };

  /**
   * Set params for all  calendars
   *
   * @param {object} calendars_obj		Object { calendar_1: {} }
   * 												 calendar_3: {}, ... }
   */
  obj.calendars_all__set = function (calendars_obj) {
    p_calendars = calendars_obj;
  };

  /**
   * Get bookings in all calendars
   *
   * @returns {object|{}}
   */
  obj.calendars_all__get = function () {
    return p_calendars;
  };

  /**
   * Get calendar object   ::   { id: 1, … }
   *
   * @param {string|int} resource_id				  '2'
   * @returns {object|boolean}					{ id: 2 ,… }
   */
  obj.calendar__get_parameters = function (resource_id) {
    if (obj.calendar__is_defined(resource_id)) {
      return p_calendars['calendar_' + resource_id];
    } else {
      return false;
    }
  };

  /**
   * Set calendar object   ::   { dates:  Object { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, … }
   *
   * if calendar object  not defined, then  it's will be defined and ID set
   * if calendar exist, then  system set  as new or overwrite only properties from calendar_property_obj parameter,  but other properties will be existed and not overwrite, like 'id'
   *
   * @param {string|int} resource_id				  '2'
   * @param {object} calendar_property_obj					  {  dates:  Object { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, … }  }
   * @param {boolean} is_complete_overwrite		  if 'true' (default: 'false'),  then  only overwrite or add  new properties in  calendar_property_obj
   * @returns {*}
   *
   * Examples:
   *
   * Common usage in PHP:
   *   			echo "  _wpbc.calendar__set(  " .intval( $resource_id ) . ", { 'dates': " . wp_json_encode( $availability_per_days_arr ) . " } );";
   */
  obj.calendar__set_parameters = function (resource_id, calendar_property_obj, is_complete_overwrite = false) {
    if (!obj.calendar__is_defined(resource_id) || true === is_complete_overwrite) {
      obj.calendar__init(resource_id);
    }
    for (var prop_name in calendar_property_obj) {
      p_calendars['calendar_' + resource_id][prop_name] = calendar_property_obj[prop_name];
    }
    return p_calendars['calendar_' + resource_id];
  };

  /**
   * Set property  to  calendar
   * @param resource_id	"1"
   * @param prop_name		name of property
   * @param prop_value	value of property
   * @returns {*}			calendar object
   */
  obj.calendar__set_param_value = function (resource_id, prop_name, prop_value) {
    if (!obj.calendar__is_defined(resource_id)) {
      obj.calendar__init(resource_id);
    }
    p_calendars['calendar_' + resource_id][prop_name] = prop_value;
    return p_calendars['calendar_' + resource_id];
  };

  /**
   *  Get calendar property value   	::   mixed | null
   *
   * @param {string|int}  resource_id		'1'
   * @param {string} prop_name			'selection_mode'
   * @returns {*|null}					mixed | null
   */
  obj.calendar__get_param_value = function (resource_id, prop_name) {
    if (obj.calendar__is_defined(resource_id) && 'undefined' !== typeof p_calendars['calendar_' + resource_id][prop_name]) {
      // FixIn: 9.9.0.29.
      if (obj.calendar__is_prop_int(prop_name)) {
        p_calendars['calendar_' + resource_id][prop_name] = parseInt(p_calendars['calendar_' + resource_id][prop_name]);
      }
      return p_calendars['calendar_' + resource_id][prop_name];
    }
    return null; // If some property not defined, then null;
  };
  // -----------------------------------------------------------------------------------------------------------------

  // Bookings 	----------------------------------------------------------------------------------------------------
  var p_bookings = obj.bookings_obj = obj.bookings_obj || {
    // calendar_1: Object {
    //						   id:     1
    //						 , dates:  Object { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, …
    // }
  };

  /**
   *  Check if bookings for specific booking resource defined   ::   true | false
   *
   * @param {string|int} resource_id
   * @returns {boolean}
   */
  obj.bookings_in_calendar__is_defined = function (resource_id) {
    return 'undefined' !== typeof p_bookings['calendar_' + resource_id];
  };

  /**
   * Get bookings calendar object   ::   { id: 1 , dates:  Object { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, … }
   *
   * @param {string|int} resource_id				  '2'
   * @returns {object|boolean}					{ id: 2 , dates:  Object { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, … }
   */
  obj.bookings_in_calendar__get = function (resource_id) {
    if (obj.bookings_in_calendar__is_defined(resource_id)) {
      return p_bookings['calendar_' + resource_id];
    } else {
      return false;
    }
  };

  /**
   * Set bookings calendar object   ::   { dates:  Object { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, … }
   *
   * if calendar object  not defined, then  it's will be defined and ID set
   * if calendar exist, then  system set  as new or overwrite only properties from calendar_obj parameter,  but other properties will be existed and not overwrite, like 'id'
   *
   * @param {string|int} resource_id				  '2'
   * @param {object} calendar_obj					  {  dates:  Object { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, … }  }
   * @returns {*}
   *
   * Examples:
   *
   * Common usage in PHP:
   *   			echo "  _wpbc.bookings_in_calendar__set(  " .intval( $resource_id ) . ", { 'dates': " . wp_json_encode( $availability_per_days_arr ) . " } );";
   */
  obj.bookings_in_calendar__set = function (resource_id, calendar_obj) {
    if (!obj.bookings_in_calendar__is_defined(resource_id)) {
      p_bookings['calendar_' + resource_id] = {};
      p_bookings['calendar_' + resource_id]['id'] = resource_id;
    }
    for (var prop_name in calendar_obj) {
      p_bookings['calendar_' + resource_id][prop_name] = calendar_obj[prop_name];
    }
    return p_bookings['calendar_' + resource_id];
  };

  // Dates

  /**
   *  Get bookings data for ALL Dates in calendar   ::   false | { "2023-07-22": {…}, "2023-07-23": {…}, … }
   *
   * @param {string|int} resource_id			'1'
   * @returns {object|boolean}				false | Object {
  															"2023-07-24": Object { ['summary']['status_for_day']: "available", day_availability: 1, max_capacity: 1, … }
  															"2023-07-26": Object { ['summary']['status_for_day']: "full_day_booking", ['summary']['status_for_bookings']: "pending", day_availability: 0, … }
  															"2023-07-29": Object { ['summary']['status_for_day']: "resource_availability", day_availability: 0, max_capacity: 1, … }
  															"2023-07-30": {…}, "2023-07-31": {…}, …
  														}
   */
  obj.bookings_in_calendar__get_dates = function (resource_id) {
    if (obj.bookings_in_calendar__is_defined(resource_id) && 'undefined' !== typeof p_bookings['calendar_' + resource_id]['dates']) {
      return p_bookings['calendar_' + resource_id]['dates'];
    }
    return false; // If some property not defined, then false;
  };

  /**
   * Set bookings dates in calendar object   ::    { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, … }
   *
   * if calendar object  not defined, then  it's will be defined and 'id', 'dates' set
   * if calendar exist, then system add a  new or overwrite only dates from dates_obj parameter,
   * but other dates not from parameter dates_obj will be existed and not overwrite.
   *
   * @param {string|int} resource_id				  '2'
   * @param {object} dates_obj					  { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, … }
   * @param {boolean} is_complete_overwrite		  if false,  then  only overwrite or add  dates from 	dates_obj
   * @returns {*}
   *
   * Examples:
   *   			_wpbc.bookings_in_calendar__set_dates( resource_id, { "2023-07-21": {…}, "2023-07-22": {…}, … }  );		<-   overwrite ALL dates
   *   			_wpbc.bookings_in_calendar__set_dates( resource_id, { "2023-07-22": {…} },  false  );					<-   add or overwrite only  	"2023-07-22": {}
   *
   * Common usage in PHP:
   *   			echo "  _wpbc.bookings_in_calendar__set_dates(  " . intval( $resource_id ) . ",  " . wp_json_encode( $availability_per_days_arr ) . "  );  ";
   */
  obj.bookings_in_calendar__set_dates = function (resource_id, dates_obj, is_complete_overwrite = true) {
    if (!obj.bookings_in_calendar__is_defined(resource_id)) {
      obj.bookings_in_calendar__set(resource_id, {
        'dates': {}
      });
    }
    if ('undefined' === typeof p_bookings['calendar_' + resource_id]['dates']) {
      p_bookings['calendar_' + resource_id]['dates'] = {};
    }
    if (is_complete_overwrite) {
      // Complete overwrite all  booking dates
      p_bookings['calendar_' + resource_id]['dates'] = dates_obj;
    } else {
      // Add only  new or overwrite exist booking dates from  parameter. Booking dates not from  parameter  will  be without chnanges
      for (var prop_name in dates_obj) {
        p_bookings['calendar_' + resource_id]['dates'][prop_name] = dates_obj[prop_name];
      }
    }
    return p_bookings['calendar_' + resource_id];
  };

  /**
   *  Get bookings data for specific date in calendar   ::   false | { day_availability: 1, ... }
   *
   * @param {string|int} resource_id			'1'
   * @param {string} sql_class_day			'2023-07-21'
   * @returns {object|boolean}				false | {
  														day_availability: 4
  														max_capacity: 4															//  >= Business Large
  														2: Object { is_day_unavailable: false, _day_status: "available" }
  														10: Object { is_day_unavailable: false, _day_status: "available" }		//  >= Business Large ...
  														11: Object { is_day_unavailable: false, _day_status: "available" }
  														12: Object { is_day_unavailable: false, _day_status: "available" }
  													}
   */
  obj.bookings_in_calendar__get_for_date = function (resource_id, sql_class_day) {
    if (obj.bookings_in_calendar__is_defined(resource_id) && 'undefined' !== typeof p_bookings['calendar_' + resource_id]['dates'] && 'undefined' !== typeof p_bookings['calendar_' + resource_id]['dates'][sql_class_day]) {
      return p_bookings['calendar_' + resource_id]['dates'][sql_class_day];
    }
    return false; // If some property not defined, then false;
  };

  // Any  PARAMS   in bookings

  /**
   * Set property  to  booking
   * @param resource_id	"1"
   * @param prop_name		name of property
   * @param prop_value	value of property
   * @returns {*}			booking object
   */
  obj.booking__set_param_value = function (resource_id, prop_name, prop_value) {
    if (!obj.bookings_in_calendar__is_defined(resource_id)) {
      p_bookings['calendar_' + resource_id] = {};
      p_bookings['calendar_' + resource_id]['id'] = resource_id;
    }
    p_bookings['calendar_' + resource_id][prop_name] = prop_value;
    return p_bookings['calendar_' + resource_id];
  };

  /**
   *  Get booking property value   	::   mixed | null
   *
   * @param {string|int}  resource_id		'1'
   * @param {string} prop_name			'selection_mode'
   * @returns {*|null}					mixed | null
   */
  obj.booking__get_param_value = function (resource_id, prop_name) {
    if (obj.bookings_in_calendar__is_defined(resource_id) && 'undefined' !== typeof p_bookings['calendar_' + resource_id][prop_name]) {
      return p_bookings['calendar_' + resource_id][prop_name];
    }
    return null; // If some property not defined, then null;
  };

  /**
   * Set bookings for all  calendars
   *
   * @param {object} calendars_obj		Object { calendar_1: { id: 1, dates: Object { "2023-07-22": {…}, "2023-07-23": {…}, "2023-07-24": {…}, … } }
   * 												 calendar_3: {}, ... }
   */
  obj.bookings_in_calendars__set_all = function (calendars_obj) {
    p_bookings = calendars_obj;
  };

  /**
   * Get bookings in all calendars
   *
   * @returns {object|{}}
   */
  obj.bookings_in_calendars__get_all = function () {
    return p_bookings;
  };
  // -----------------------------------------------------------------------------------------------------------------

  // Seasons 	----------------------------------------------------------------------------------------------------
  var p_seasons = obj.seasons_obj = obj.seasons_obj || {
    // calendar_1: Object {
    //						   id:     1
    //						 , dates:  Object { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, …
    // }
  };

  /**
   * Add season names for dates in calendar object   ::    { "2023-07-21": [ 'wpbc_season_september_2023', 'wpbc_season_september_2024' ], "2023-07-22": [...], ... }
   *
   *
   * @param {string|int} resource_id				  '2'
   * @param {object} dates_obj					  { "2023-07-21": {…}, "2023-07-22": {…}, "2023-07-23": {…}, … }
   * @param {boolean} is_complete_overwrite		  if false,  then  only  add  dates from 	dates_obj
   * @returns {*}
   *
   * Examples:
   *   			_wpbc.seasons__set( resource_id, { "2023-07-21": [ 'wpbc_season_september_2023', 'wpbc_season_september_2024' ], "2023-07-22": [...], ... }  );
   */
  obj.seasons__set = function (resource_id, dates_obj, is_complete_overwrite = false) {
    if ('undefined' === typeof p_seasons['calendar_' + resource_id]) {
      p_seasons['calendar_' + resource_id] = {};
    }
    if (is_complete_overwrite) {
      // Complete overwrite all  season dates
      p_seasons['calendar_' + resource_id] = dates_obj;
    } else {
      // Add only  new or overwrite exist booking dates from  parameter. Booking dates not from  parameter  will  be without chnanges
      for (var prop_name in dates_obj) {
        if ('undefined' === typeof p_seasons['calendar_' + resource_id][prop_name]) {
          p_seasons['calendar_' + resource_id][prop_name] = [];
        }
        for (var season_name_key in dates_obj[prop_name]) {
          p_seasons['calendar_' + resource_id][prop_name].push(dates_obj[prop_name][season_name_key]);
        }
      }
    }
    return p_seasons['calendar_' + resource_id];
  };

  /**
   *  Get bookings data for specific date in calendar   ::   [] | [ 'wpbc_season_september_2023', 'wpbc_season_september_2024' ]
   *
   * @param {string|int} resource_id			'1'
   * @param {string} sql_class_day			'2023-07-21'
   * @returns {object|boolean}				[]  |  [ 'wpbc_season_september_2023', 'wpbc_season_september_2024' ]
   */
  obj.seasons__get_for_date = function (resource_id, sql_class_day) {
    if ('undefined' !== typeof p_seasons['calendar_' + resource_id] && 'undefined' !== typeof p_seasons['calendar_' + resource_id][sql_class_day]) {
      return p_seasons['calendar_' + resource_id][sql_class_day];
    }
    return []; // If not defined, then [];
  };

  // Other parameters 			------------------------------------------------------------------------------------
  var p_other = obj.other_obj = obj.other_obj || {};
  obj.set_other_param = function (param_key, param_val) {
    p_other[param_key] = param_val;
  };
  obj.get_other_param = function (param_key) {
    return p_other[param_key];
  };

  /**
   * Get all other params
   *
   * @returns {object|{}}
   */
  obj.get_other_param__all = function () {
    return p_other;
  };

  // Messages 			        ------------------------------------------------------------------------------------
  var p_messages = obj.messages_obj = obj.messages_obj || {};
  obj.set_message = function (param_key, param_val) {
    p_messages[param_key] = param_val;
  };
  obj.get_message = function (param_key) {
    return p_messages[param_key];
  };

  /**
   * Get all other params
   *
   * @returns {object|{}}
   */
  obj.get_messages__all = function () {
    return p_messages;
  };

  // -----------------------------------------------------------------------------------------------------------------

  return obj;
}(_wpbc || {}, jQuery);

/**
 * Extend _wpbc with  new methods        // FixIn: 9.8.6.2.
 *
 * @type {*|{}}
 * @private
 */
_wpbc = function (obj, $) {
  // Load Balancer 	-----------------------------------------------------------------------------------------------

  var p_balancer = obj.balancer_obj = obj.balancer_obj || {
    'max_threads': 2,
    'in_process': [],
    'wait': []
  };

  /**
   * Set  max parallel request  to  load
   *
   * @param max_threads
   */
  obj.balancer__set_max_threads = function (max_threads) {
    p_balancer['max_threads'] = max_threads;
  };

  /**
   *  Check if balancer for specific booking resource defined   ::   true | false
   *
   * @param {string|int} resource_id
   * @returns {boolean}
   */
  obj.balancer__is_defined = function (resource_id) {
    return 'undefined' !== typeof p_balancer['balancer_' + resource_id];
  };

  /**
   *  Create balancer initializing
   *
   * @param {string|int} resource_id
   */
  obj.balancer__init = function (resource_id, function_name, params = {}) {
    var balance_obj = {};
    balance_obj['resource_id'] = resource_id;
    balance_obj['priority'] = 1;
    balance_obj['function_name'] = function_name;
    balance_obj['params'] = wpbc_clone_obj(params);
    if (obj.balancer__is_already_run(resource_id, function_name)) {
      return 'run';
    }
    if (obj.balancer__is_already_wait(resource_id, function_name)) {
      return 'wait';
    }
    if (obj.balancer__can_i_run()) {
      obj.balancer__add_to__run(balance_obj);
      return 'run';
    } else {
      obj.balancer__add_to__wait(balance_obj);
      return 'wait';
    }
  };

  /**
   * Can I Run ?
   * @returns {boolean}
   */
  obj.balancer__can_i_run = function () {
    return p_balancer['in_process'].length < p_balancer['max_threads'];
  };

  /**
   * Add to WAIT
   * @param balance_obj
   */
  obj.balancer__add_to__wait = function (balance_obj) {
    p_balancer['wait'].push(balance_obj);
  };

  /**
   * Remove from Wait
   *
   * @param resource_id
   * @param function_name
   * @returns {*|boolean}
   */
  obj.balancer__remove_from__wait_list = function (resource_id, function_name) {
    var removed_el = false;
    if (p_balancer['wait'].length) {
      // FixIn: 9.8.10.1.
      for (var i in p_balancer['wait']) {
        if (resource_id === p_balancer['wait'][i]['resource_id'] && function_name === p_balancer['wait'][i]['function_name']) {
          removed_el = p_balancer['wait'].splice(i, 1);
          removed_el = removed_el.pop();
          p_balancer['wait'] = p_balancer['wait'].filter(function (v) {
            return v;
          }); // Reindex array
          return removed_el;
        }
      }
    }
    return removed_el;
  };

  /**
  * Is already WAIT
  *
  * @param resource_id
  * @param function_name
  * @returns {boolean}
  */
  obj.balancer__is_already_wait = function (resource_id, function_name) {
    if (p_balancer['wait'].length) {
      // FixIn: 9.8.10.1.
      for (var i in p_balancer['wait']) {
        if (resource_id === p_balancer['wait'][i]['resource_id'] && function_name === p_balancer['wait'][i]['function_name']) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * Add to RUN
   * @param balance_obj
   */
  obj.balancer__add_to__run = function (balance_obj) {
    p_balancer['in_process'].push(balance_obj);
  };

  /**
  * Remove from RUN list
  *
  * @param resource_id
  * @param function_name
  * @returns {*|boolean}
  */
  obj.balancer__remove_from__run_list = function (resource_id, function_name) {
    var removed_el = false;
    if (p_balancer['in_process'].length) {
      // FixIn: 9.8.10.1.
      for (var i in p_balancer['in_process']) {
        if (resource_id === p_balancer['in_process'][i]['resource_id'] && function_name === p_balancer['in_process'][i]['function_name']) {
          removed_el = p_balancer['in_process'].splice(i, 1);
          removed_el = removed_el.pop();
          p_balancer['in_process'] = p_balancer['in_process'].filter(function (v) {
            return v;
          }); // Reindex array
          return removed_el;
        }
      }
    }
    return removed_el;
  };

  /**
  * Is already RUN
  *
  * @param resource_id
  * @param function_name
  * @returns {boolean}
  */
  obj.balancer__is_already_run = function (resource_id, function_name) {
    if (p_balancer['in_process'].length) {
      // FixIn: 9.8.10.1.
      for (var i in p_balancer['in_process']) {
        if (resource_id === p_balancer['in_process'][i]['resource_id'] && function_name === p_balancer['in_process'][i]['function_name']) {
          return true;
        }
      }
    }
    return false;
  };
  obj.balancer__run_next = function () {
    // Get 1st from  Wait list
    var removed_el = false;
    if (p_balancer['wait'].length) {
      // FixIn: 9.8.10.1.
      for (var i in p_balancer['wait']) {
        removed_el = obj.balancer__remove_from__wait_list(p_balancer['wait'][i]['resource_id'], p_balancer['wait'][i]['function_name']);
        break;
      }
    }
    if (false !== removed_el) {
      // Run
      obj.balancer__run(removed_el);
    }
  };

  /**
   * Run
   * @param balance_obj
   */
  obj.balancer__run = function (balance_obj) {
    switch (balance_obj['function_name']) {
      case 'wpbc_calendar__load_data__ajx':
        // Add to run list
        obj.balancer__add_to__run(balance_obj);
        wpbc_calendar__load_data__ajx(balance_obj['params']);
        break;
      default:
    }
  };
  return obj;
}(_wpbc || {}, jQuery);

/**
 * -- Help functions ----------------------------------------------------------------------------------------------
*/

function wpbc_balancer__is_wait(params, function_name) {
  //console.log('::wpbc_balancer__is_wait',params , function_name );
  if ('undefined' !== typeof params['resource_id']) {
    var balancer_status = _wpbc.balancer__init(params['resource_id'], function_name, params);
    return 'wait' === balancer_status;
  }
  return false;
}
function wpbc_balancer__completed(resource_id, function_name) {
  //console.log('::wpbc_balancer__completed',resource_id , function_name );
  _wpbc.balancer__remove_from__run_list(resource_id, function_name);
  _wpbc.balancer__run_next();
}
/**
 * =====================================================================================================================
 *	includes/__js/cal/wpbc_cal.js
 * =====================================================================================================================
 */

/**
 * Order or child booking resources saved here:  	_wpbc.booking__get_param_value( resource_id, 'resources_id_arr__in_dates' )		[2,10,12,11]
 */

/**
 * How to check  booked times on  specific date: ?
 *
			_wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21');

			console.log(
						_wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[2].booked_time_slots.merged_seconds,
						_wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[10].booked_time_slots.merged_seconds,
						_wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[11].booked_time_slots.merged_seconds,
						_wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[12].booked_time_slots.merged_seconds
					);
 *  OR
			console.log(
						_wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[2].booked_time_slots.merged_readable,
						_wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[10].booked_time_slots.merged_readable,
						_wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[11].booked_time_slots.merged_readable,
						_wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[12].booked_time_slots.merged_readable
					);
 *
 */

/**
 * Days selection:
 * 					wpbc_calendar__unselect_all_dates( resource_id );
 *
 *					var resource_id = 1;
 * 	Example 1:		var num_selected_days = wpbc_auto_select_dates_in_calendar( resource_id, '2024-05-15', '2024-05-25' );
 * 	Example 2:		var num_selected_days = wpbc_auto_select_dates_in_calendar( resource_id, ['2024-05-09','2024-05-19','2024-05-25'] );
 *
 */

/**
 * C A L E N D A R  ---------------------------------------------------------------------------------------------------
 */

/**
 *  Show WPBC Calendar
 *
 * @param resource_id			- resource ID
 * @returns {boolean}
 */
function wpbc_calendar_show(resource_id) {
  // If no calendar HTML tag,  then  exit
  if (0 === jQuery('#calendar_booking' + resource_id).length) {
    return false;
  }

  // If the calendar with the same Booking resource is activated already, then exit.
  if (true === jQuery('#calendar_booking' + resource_id).hasClass('hasDatepick')) {
    return false;
  }

  // -----------------------------------------------------------------------------------------------------------------
  // Days selection
  // -----------------------------------------------------------------------------------------------------------------
  var local__is_range_select = false;
  var local__multi_days_select_num = 365; // multiple | fixed
  if ('dynamic' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode')) {
    local__is_range_select = true;
    local__multi_days_select_num = 0;
  }
  if ('single' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode')) {
    local__multi_days_select_num = 0;
  }

  // -----------------------------------------------------------------------------------------------------------------
  // Min - Max days to scroll/show
  // -----------------------------------------------------------------------------------------------------------------
  var local__min_date = 0;
  local__min_date = new Date(_wpbc.get_other_param('today_arr')[0], parseInt(_wpbc.get_other_param('today_arr')[1]) - 1, _wpbc.get_other_param('today_arr')[2], 0, 0, 0); // FixIn: 9.9.0.17.
  //console.log( local__min_date );
  var local__max_date = _wpbc.calendar__get_param_value(resource_id, 'booking_max_monthes_in_calendar');
  //local__max_date = new Date(2024, 5, 28);  It is here issue of not selectable dates, but some dates showing in calendar as available, but we can not select it.

  //// Define last day in calendar (as a last day of month (and not date, which is related to actual 'Today' date).
  //// E.g. if today is 2023-09-25, and we set 'Number of months to scroll' as 5 months, then last day will be 2024-02-29 and not the 2024-02-25.
  // var cal_last_day_in_month = jQuery.datepick._determineDate( null, local__max_date, new Date() );
  // cal_last_day_in_month = new Date( cal_last_day_in_month.getFullYear(), cal_last_day_in_month.getMonth() + 1, 0 );
  // local__max_date = cal_last_day_in_month;			// FixIn: 10.0.0.26.

  // Get start / end dates from  the Booking Calendar shortcode. Example: [booking calendar_dates_start='2026-01-01' calendar_dates_end='2026-12-31'  resource_id=1] // FixIn: 10.13.1.4.
  if (false !== wpbc_calendar__get_dates_start(resource_id)) {
    local__min_date = wpbc_calendar__get_dates_start(resource_id); // E.g. - local__min_date = new Date( 2025, 0, 1 );
  }
  if (false !== wpbc_calendar__get_dates_end(resource_id)) {
    local__max_date = wpbc_calendar__get_dates_end(resource_id); // E.g. - local__max_date = new Date( 2025, 11, 31 );
  }

  // In case we edit booking in past or have specific parameter in URL.
  if (location.href.indexOf('page=wpbc-new') != -1 && (location.href.indexOf('booking_hash') != -1 // Comment this line for ability to add  booking in past days at  Booking > Add booking page.
  || location.href.indexOf('allow_past') != -1 // FixIn: 10.7.1.2.
  )) {
    // local__min_date = null;
    // FixIn: 10.14.1.4.
    local__min_date = new Date(_wpbc.get_other_param('time_local_arr')[0], parseInt(_wpbc.get_other_param('time_local_arr')[1]) - 1, _wpbc.get_other_param('time_local_arr')[2], _wpbc.get_other_param('time_local_arr')[3], _wpbc.get_other_param('time_local_arr')[4], 0);
    local__max_date = null;
  }
  var local__start_weekday = _wpbc.calendar__get_param_value(resource_id, 'booking_start_day_weeek');
  var local__number_of_months = parseInt(_wpbc.calendar__get_param_value(resource_id, 'calendar_number_of_months'));
  jQuery('#calendar_booking' + resource_id).text(''); // Remove all HTML in calendar tag
  // -----------------------------------------------------------------------------------------------------------------
  // Show calendar
  // -----------------------------------------------------------------------------------------------------------------
  jQuery('#calendar_booking' + resource_id).datepick({
    beforeShowDay: function (js_date) {
      return wpbc__calendar__apply_css_to_days(js_date, {
        'resource_id': resource_id
      }, this);
    },
    onSelect: function (string_dates, js_dates_arr) {
      /**
      *	string_dates   =   '23.08.2023 - 26.08.2023'    |    '23.08.2023 - 23.08.2023'    |    '19.09.2023, 24.08.2023, 30.09.2023'
      *  js_dates_arr   =   range: [ Date (Aug 23 2023), Date (Aug 25 2023)]     |     multiple: [ Date(Oct 24 2023), Date(Oct 20 2023), Date(Oct 16 2023) ]
      */
      return wpbc__calendar__on_select_days(string_dates, {
        'resource_id': resource_id
      }, this);
    },
    onHover: function (string_date, js_date) {
      return wpbc__calendar__on_hover_days(string_date, js_date, {
        'resource_id': resource_id
      }, this);
    },
    onChangeMonthYear: function (year, real_month, js_date__1st_day_in_month) {},
    showOn: 'both',
    numberOfMonths: local__number_of_months,
    stepMonths: 1,
    // prevText      : '&laquo;',
    // nextText      : '&raquo;',
    prevText: '&lsaquo;',
    nextText: '&rsaquo;',
    dateFormat: 'dd.mm.yy',
    changeMonth: false,
    changeYear: false,
    minDate: local__min_date,
    maxDate: local__max_date,
    // '1Y',
    // minDate: new Date(2020, 2, 1), maxDate: new Date(2020, 9, 31),             	// Ability to set any  start and end date in calendar
    showStatus: false,
    multiSeparator: ', ',
    closeAtTop: false,
    firstDay: local__start_weekday,
    gotoCurrent: false,
    hideIfNoPrevNext: true,
    multiSelect: local__multi_days_select_num,
    rangeSelect: local__is_range_select,
    // showWeeks: true,
    useThemeRoller: false
  });

  // -----------------------------------------------------------------------------------------------------------------
  // Clear today date highlighting
  // -----------------------------------------------------------------------------------------------------------------
  setTimeout(function () {
    wpbc_calendars__clear_days_highlighting(resource_id);
  }, 500); // FixIn: 7.1.2.8.

  // -----------------------------------------------------------------------------------------------------------------
  // Scroll calendar to  specific month
  // -----------------------------------------------------------------------------------------------------------------
  var start_bk_month = _wpbc.calendar__get_param_value(resource_id, 'calendar_scroll_to');
  if (false !== start_bk_month) {
    wpbc_calendar__scroll_to(resource_id, start_bk_month[0], start_bk_month[1]);
  }
}

/**
 * Apply CSS to calendar date cells
 *
 * @param date										-  JavaScript Date Obj:  		Mon Dec 11 2023 00:00:00 GMT+0200 (Eastern European Standard Time)
 * @param calendar_params_arr						-  Calendar Settings Object:  	{
 *																  						"resource_id": 4
 *																					}
 * @param datepick_this								- this of datepick Obj
 * @returns {(*|string)[]|(boolean|string)[]}		- [ {true -available | false - unavailable}, 'CSS classes for calendar day cell' ]
 */
function wpbc__calendar__apply_css_to_days(date, calendar_params_arr, datepick_this) {
  var today_date = new Date(_wpbc.get_other_param('today_arr')[0], parseInt(_wpbc.get_other_param('today_arr')[1]) - 1, _wpbc.get_other_param('today_arr')[2], 0, 0, 0); // Today JS_Date_Obj.
  var class_day = wpbc__get__td_class_date(date); // '1-9-2023'
  var sql_class_day = wpbc__get__sql_class_date(date); // '2023-01-09'
  var resource_id = 'undefined' !== typeof calendar_params_arr['resource_id'] ? calendar_params_arr['resource_id'] : '1'; // '1'

  // Get Selected dates in calendar
  var selected_dates_sql = wpbc_get__selected_dates_sql__as_arr(resource_id);

  // Get Data --------------------------------------------------------------------------------------------------------
  var date_bookings_obj = _wpbc.bookings_in_calendar__get_for_date(resource_id, sql_class_day);

  // Array with CSS classes for date ---------------------------------------------------------------------------------
  var css_classes__for_date = [];
  css_classes__for_date.push('sql_date_' + sql_class_day); //  'sql_date_2023-07-21'
  css_classes__for_date.push('cal4date-' + class_day); //  'cal4date-7-21-2023'
  css_classes__for_date.push('wpbc_weekday_' + date.getDay()); //  'wpbc_weekday_4'

  // Define Selected Check In/Out dates in TD  -----------------------------------------------------------------------
  if (selected_dates_sql.length
  //&&  ( selected_dates_sql[ 0 ] !== selected_dates_sql[ (selected_dates_sql.length - 1) ] )
  ) {
    if (sql_class_day === selected_dates_sql[0]) {
      css_classes__for_date.push('selected_check_in');
      css_classes__for_date.push('selected_check_in_out');
    }
    if (selected_dates_sql.length > 1 && sql_class_day === selected_dates_sql[selected_dates_sql.length - 1]) {
      css_classes__for_date.push('selected_check_out');
      css_classes__for_date.push('selected_check_in_out');
    }
  }
  var is_day_selectable = false;

  // If something not defined,  then  this date closed --------------------------------------------------------------- // FixIn: 10.12.4.6.
  if (false === date_bookings_obj || 'undefined' === typeof date_bookings_obj[resource_id]) {
    css_classes__for_date.push('date_user_unavailable');
    return [is_day_selectable, css_classes__for_date.join(' ')];
  }

  // -----------------------------------------------------------------------------------------------------------------
  //   date_bookings_obj  - Defined.            Dates can be selectable.
  // -----------------------------------------------------------------------------------------------------------------

  // -----------------------------------------------------------------------------------------------------------------
  // Add season names to the day CSS classes -- it is required for correct  work  of conditional fields --------------
  var season_names_arr = _wpbc.seasons__get_for_date(resource_id, sql_class_day);
  for (var season_key in season_names_arr) {
    css_classes__for_date.push(season_names_arr[season_key]); //  'wpdevbk_season_september_2023'
  }
  // -----------------------------------------------------------------------------------------------------------------

  // Cost Rate -------------------------------------------------------------------------------------------------------
  css_classes__for_date.push('rate_' + date_bookings_obj[resource_id]['date_cost_rate'].toString().replace(/[\.\s]/g, '_')); //  'rate_99_00' -> 99.00

  if (parseInt(date_bookings_obj['day_availability']) > 0) {
    is_day_selectable = true;
    css_classes__for_date.push('date_available');
    css_classes__for_date.push('reserved_days_count' + parseInt(date_bookings_obj['max_capacity'] - date_bookings_obj['day_availability']));
  } else {
    is_day_selectable = false;
    css_classes__for_date.push('date_user_unavailable');
  }
  switch (date_bookings_obj['summary']['status_for_day']) {
    case 'available':
      break;
    case 'time_slots_booking':
      css_classes__for_date.push('timespartly', 'times_clock');
      break;
    case 'full_day_booking':
      css_classes__for_date.push('full_day_booking');
      break;
    case 'season_filter':
      css_classes__for_date.push('date_user_unavailable', 'season_unavailable');
      date_bookings_obj['summary']['status_for_bookings'] = ''; // Reset booking status color for possible old bookings on this date
      break;
    case 'resource_availability':
      css_classes__for_date.push('date_user_unavailable', 'resource_unavailable');
      date_bookings_obj['summary']['status_for_bookings'] = ''; // Reset booking status color for possible old bookings on this date
      break;
    case 'weekday_unavailable':
      css_classes__for_date.push('date_user_unavailable', 'weekday_unavailable');
      date_bookings_obj['summary']['status_for_bookings'] = ''; // Reset booking status color for possible old bookings on this date
      break;
    case 'from_today_unavailable':
      css_classes__for_date.push('date_user_unavailable', 'from_today_unavailable');
      date_bookings_obj['summary']['status_for_bookings'] = ''; // Reset booking status color for possible old bookings on this date
      break;
    case 'limit_available_from_today':
      css_classes__for_date.push('date_user_unavailable', 'limit_available_from_today');
      date_bookings_obj['summary']['status_for_bookings'] = ''; // Reset booking status color for possible old bookings on this date
      break;
    case 'change_over':
      /*
       *
      //  check_out_time_date2approve 	 	check_in_time_date2approve
      //  check_out_time_date2approve 	 	check_in_time_date_approved
      //  check_in_time_date2approve 		 	check_out_time_date_approved
      //  check_out_time_date_approved 	 	check_in_time_date_approved
       */

      css_classes__for_date.push('timespartly', 'check_in_time', 'check_out_time');
      // FixIn: 10.0.0.2.
      if (date_bookings_obj['summary']['status_for_bookings'].indexOf('approved_pending') > -1) {
        css_classes__for_date.push('check_out_time_date_approved', 'check_in_time_date2approve');
      }
      if (date_bookings_obj['summary']['status_for_bookings'].indexOf('pending_approved') > -1) {
        css_classes__for_date.push('check_out_time_date2approve', 'check_in_time_date_approved');
      }
      break;
    case 'check_in':
      css_classes__for_date.push('timespartly', 'check_in_time');

      // FixIn: 9.9.0.33.
      if (date_bookings_obj['summary']['status_for_bookings'].indexOf('pending') > -1) {
        css_classes__for_date.push('check_in_time_date2approve');
      } else if (date_bookings_obj['summary']['status_for_bookings'].indexOf('approved') > -1) {
        css_classes__for_date.push('check_in_time_date_approved');
      }
      break;
    case 'check_out':
      css_classes__for_date.push('timespartly', 'check_out_time');

      // FixIn: 9.9.0.33.
      if (date_bookings_obj['summary']['status_for_bookings'].indexOf('pending') > -1) {
        css_classes__for_date.push('check_out_time_date2approve');
      } else if (date_bookings_obj['summary']['status_for_bookings'].indexOf('approved') > -1) {
        css_classes__for_date.push('check_out_time_date_approved');
      }
      break;
    default:
      // mixed statuses: 'change_over check_out' .... variations.... check more in 		function wpbc_get_availability_per_days_arr()
      date_bookings_obj['summary']['status_for_day'] = 'available';
  }
  if ('available' != date_bookings_obj['summary']['status_for_day']) {
    var is_set_pending_days_selectable = _wpbc.calendar__get_param_value(resource_id, 'pending_days_selectable'); // set pending days selectable          // FixIn: 8.6.1.18.

    switch (date_bookings_obj['summary']['status_for_bookings']) {
      case '':
        // Usually  it's means that day  is available or unavailable without the bookings
        break;
      case 'pending':
        css_classes__for_date.push('date2approve');
        is_day_selectable = is_day_selectable ? true : is_set_pending_days_selectable;
        break;
      case 'approved':
        css_classes__for_date.push('date_approved');
        break;

      // Situations for "change-over" days: ----------------------------------------------------------------------
      case 'pending_pending':
        css_classes__for_date.push('check_out_time_date2approve', 'check_in_time_date2approve');
        is_day_selectable = is_day_selectable ? true : is_set_pending_days_selectable;
        break;
      case 'pending_approved':
        css_classes__for_date.push('check_out_time_date2approve', 'check_in_time_date_approved');
        is_day_selectable = is_day_selectable ? true : is_set_pending_days_selectable;
        break;
      case 'approved_pending':
        css_classes__for_date.push('check_out_time_date_approved', 'check_in_time_date2approve');
        is_day_selectable = is_day_selectable ? true : is_set_pending_days_selectable;
        break;
      case 'approved_approved':
        css_classes__for_date.push('check_out_time_date_approved', 'check_in_time_date_approved');
        break;
      default:
    }
  }
  return [is_day_selectable, css_classes__for_date.join(' ')];
}

/**
 * Mouseover calendar date cells
 *
 * @param string_date
 * @param date										-  JavaScript Date Obj:  		Mon Dec 11 2023 00:00:00 GMT+0200 (Eastern European Standard Time)
 * @param calendar_params_arr						-  Calendar Settings Object:  	{
 *																  						"resource_id": 4
 *																					}
 * @param datepick_this								- this of datepick Obj
 * @returns {boolean}
 */
function wpbc__calendar__on_hover_days(string_date, date, calendar_params_arr, datepick_this) {
  if (null === date) {
    wpbc_calendars__clear_days_highlighting('undefined' !== typeof calendar_params_arr['resource_id'] ? calendar_params_arr['resource_id'] : '1'); // FixIn: 10.5.2.4.
    return false;
  }
  var class_day = wpbc__get__td_class_date(date); // '1-9-2023'
  var sql_class_day = wpbc__get__sql_class_date(date); // '2023-01-09'
  var resource_id = 'undefined' !== typeof calendar_params_arr['resource_id'] ? calendar_params_arr['resource_id'] : '1'; // '1'

  // Get Data --------------------------------------------------------------------------------------------------------
  var date_booking_obj = _wpbc.bookings_in_calendar__get_for_date(resource_id, sql_class_day); // {...}

  if (!date_booking_obj) {
    return false;
  }

  // T o o l t i p s -------------------------------------------------------------------------------------------------
  var tooltip_text = '';
  if (date_booking_obj['summary']['tooltip_availability'].length > 0) {
    tooltip_text += date_booking_obj['summary']['tooltip_availability'];
  }
  if (date_booking_obj['summary']['tooltip_day_cost'].length > 0) {
    tooltip_text += date_booking_obj['summary']['tooltip_day_cost'];
  }
  if (date_booking_obj['summary']['tooltip_times'].length > 0) {
    tooltip_text += date_booking_obj['summary']['tooltip_times'];
  }
  if (date_booking_obj['summary']['tooltip_booking_details'].length > 0) {
    tooltip_text += date_booking_obj['summary']['tooltip_booking_details'];
  }
  wpbc_set_tooltip___for__calendar_date(tooltip_text, resource_id, class_day);

  //  U n h o v e r i n g    in    UNSELECTABLE_CALENDAR  ------------------------------------------------------------
  var is_unselectable_calendar = jQuery('#calendar_booking_unselectable' + resource_id).length > 0; // FixIn: 8.0.1.2.
  var is_booking_form_exist = jQuery('#booking_form_div' + resource_id).length > 0;
  if (is_unselectable_calendar && !is_booking_form_exist) {
    /**
     *  Un Hover all dates in calendar (without the booking form), if only Availability Calendar here and we do not insert Booking form by mistake.
     */

    wpbc_calendars__clear_days_highlighting(resource_id); // Clear days highlighting

    var css_of_calendar = '.wpbc_only_calendar #calendar_booking' + resource_id;
    jQuery(css_of_calendar + ' .datepick-days-cell, ' + css_of_calendar + ' .datepick-days-cell a').css('cursor', 'default'); // Set cursor to Default
    return false;
  }

  //  D a y s    H o v e r i n g  ------------------------------------------------------------------------------------
  if (location.href.indexOf('page=wpbc') == -1 || location.href.indexOf('page=wpbc-new') > 0 || location.href.indexOf('page=wpbc-setup') > 0 || location.href.indexOf('page=wpbc-availability') > 0 || location.href.indexOf('page=wpbc-settings') > 0 && location.href.indexOf('&tab=form') > 0) {
    // The same as dates selection,  but for days hovering

    if ('function' == typeof wpbc__calendar__do_days_highlight__bs) {
      wpbc__calendar__do_days_highlight__bs(sql_class_day, date, resource_id);
    }
  }
}

/**
 * Select calendar date cells
 *
 * @param date										-  JavaScript Date Obj:  		Mon Dec 11 2023 00:00:00 GMT+0200 (Eastern European Standard Time)
 * @param calendar_params_arr						-  Calendar Settings Object:  	{
 *																  						"resource_id": 4
 *																					}
 * @param datepick_this								- this of datepick Obj
 *
 */
function wpbc__calendar__on_select_days(date, calendar_params_arr, datepick_this) {
  var resource_id = 'undefined' !== typeof calendar_params_arr['resource_id'] ? calendar_params_arr['resource_id'] : '1'; // '1'

  // Set unselectable,  if only Availability Calendar  here (and we do not insert Booking form by mistake).
  var is_unselectable_calendar = jQuery('#calendar_booking_unselectable' + resource_id).length > 0; // FixIn: 8.0.1.2.
  var is_booking_form_exist = jQuery('#booking_form_div' + resource_id).length > 0;
  if (is_unselectable_calendar && !is_booking_form_exist) {
    wpbc_calendar__unselect_all_dates(resource_id); // Unselect Dates
    jQuery('.wpbc_only_calendar .popover_calendar_hover').remove(); // Hide all opened popovers
    return false;
  }
  jQuery('#date_booking' + resource_id).val(date); // Add selected dates to  hidden textarea

  if ('function' === typeof wpbc__calendar__do_days_select__bs) {
    wpbc__calendar__do_days_select__bs(date, resource_id);
  }
  wpbc_disable_time_fields_in_booking_form(resource_id);

  // Hook -- trigger day selection -----------------------------------------------------------------------------------
  var mouse_clicked_dates = date; // Can be: "05.10.2023 - 07.10.2023"  |  "10.10.2023 - 10.10.2023"  |
  var all_selected_dates_arr = wpbc_get__selected_dates_sql__as_arr(resource_id); // Can be: [ "2023-10-05", "2023-10-06", "2023-10-07", … ]
  jQuery(".booking_form_div").trigger("date_selected", [resource_id, mouse_clicked_dates, all_selected_dates_arr]);
}

// Mark middle selected dates with 0.5 opacity		// FixIn: 10.3.0.9.
jQuery(document).ready(function () {
  jQuery(".booking_form_div").on('date_selected', function (event, resource_id, date) {
    if ('fixed' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode') || 'dynamic' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode')) {
      var closed_timer = setTimeout(function () {
        var middle_days_opacity = _wpbc.get_other_param('calendars__days_selection__middle_days_opacity');
        jQuery('#calendar_booking' + resource_id + ' .datepick-current-day').not(".selected_check_in_out").css('opacity', middle_days_opacity);
      }, 10);
    }
  });
});

/**
 * --  T i m e    F i e l d s     start  --------------------------------------------------------------------------
 */

/**
 * Disable time slots in booking form depend on selected dates and booked dates/times
 *
 * @param resource_id
 */
function wpbc_disable_time_fields_in_booking_form(resource_id) {
  /**
   * 	1. Get all time fields in the booking form as array  of objects
   * 					[
   * 					 	   {	jquery_option:      jQuery_Object {}
   * 								name:               'rangetime2[]'
   * 								times_as_seconds:   [ 21600, 23400 ]
   * 								value_option_24h:   '06:00 - 06:30'
   * 					     }
   * 					  ...
   * 						   {	jquery_option:      jQuery_Object {}
   * 								name:               'starttime2[]'
   * 								times_as_seconds:   [ 21600 ]
   * 								value_option_24h:   '06:00'
   *  					    }
   * 					 ]
   */
  var time_fields_obj_arr = wpbc_get__time_fields__in_booking_form__as_arr(resource_id);

  // 2. Get all selected dates in  SQL format  like this [ "2023-08-23", "2023-08-24", "2023-08-25", ... ]
  var selected_dates_arr = wpbc_get__selected_dates_sql__as_arr(resource_id);

  // 3. Get child booking resources  or single booking resource  that  exist  in dates
  var child_resources_arr = wpbc_clone_obj(_wpbc.booking__get_param_value(resource_id, 'resources_id_arr__in_dates'));
  var sql_date;
  var child_resource_id;
  var merged_seconds;
  var time_fields_obj;
  var is_intersect;
  var is_check_in;
  var today_time__real = new Date(_wpbc.get_other_param('time_local_arr')[0], parseInt(_wpbc.get_other_param('time_local_arr')[1]) - 1, _wpbc.get_other_param('time_local_arr')[2], _wpbc.get_other_param('time_local_arr')[3], _wpbc.get_other_param('time_local_arr')[4], 0);
  var today_time__shift = new Date(_wpbc.get_other_param('today_arr')[0], parseInt(_wpbc.get_other_param('today_arr')[1]) - 1, _wpbc.get_other_param('today_arr')[2], _wpbc.get_other_param('today_arr')[3], _wpbc.get_other_param('today_arr')[4], 0);

  // 4. Loop  all  time Fields options		// FixIn: 10.3.0.2.
  for (let field_key = 0; field_key < time_fields_obj_arr.length; field_key++) {
    time_fields_obj_arr[field_key].disabled = 0; // By default, this time field is not disabled.

    time_fields_obj = time_fields_obj_arr[field_key]; // { times_as_seconds: [ 21600, 23400 ], value_option_24h: '06:00 - 06:30', name: 'rangetime2[]', jquery_option: jQuery_Object {}}

    // Loop  all  selected dates.
    for (var i = 0; i < selected_dates_arr.length; i++) {
      // Get Date: '2023-08-18'.
      sql_date = selected_dates_arr[i];
      var is_time_in_past = wpbc_check_is_time_in_past(today_time__shift, sql_date, time_fields_obj);
      // Exception  for 'End Time' field,  when  selected several dates. // FixIn: 10.14.1.5.
      if ('On' !== _wpbc.calendar__get_param_value(resource_id, 'booking_recurrent_time') && -1 !== time_fields_obj.name.indexOf('endtime') && selected_dates_arr.length > 1) {
        is_time_in_past = wpbc_check_is_time_in_past(today_time__shift, selected_dates_arr[selected_dates_arr.length - 1], time_fields_obj);
      }
      if (is_time_in_past) {
        // This time for selected date already  in the past.
        time_fields_obj_arr[field_key].disabled = 1;
        break; // exist  from   Dates LOOP.
      }
      // FixIn: 9.9.0.31.
      if ('Off' === _wpbc.calendar__get_param_value(resource_id, 'booking_recurrent_time') && selected_dates_arr.length > 1) {
        //TODO: skip some fields checking if it's start / end time for mulple dates  selection  mode.
        //TODO: we need to fix situation  for entimes,  when  user  select  several  dates,  and in start  time booked 00:00 - 15:00 , but systsme block untill 15:00 the end time as well,  which  is wrong,  because it 2 or 3 dates selection  and end date can be fullu  available

        if (0 == i && time_fields_obj['name'].indexOf('endtime') >= 0) {
          break;
        }
        if (selected_dates_arr.length - 1 == i && time_fields_obj['name'].indexOf('starttime') >= 0) {
          break;
        }
      }
      var how_many_resources_intersected = 0;
      // Loop all resources ID
      // for ( var res_key in child_resources_arr ){	 						// FixIn: 10.3.0.2.
      for (let res_key = 0; res_key < child_resources_arr.length; res_key++) {
        child_resource_id = child_resources_arr[res_key];

        // _wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[12].booked_time_slots.merged_seconds		= [ "07:00:11 - 07:30:02", "10:00:11 - 00:00:00" ]
        // _wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[2].booked_time_slots.merged_seconds			= [  [ 25211, 27002 ], [ 36011, 86400 ]  ]

        if (false !== _wpbc.bookings_in_calendar__get_for_date(resource_id, sql_date)) {
          merged_seconds = _wpbc.bookings_in_calendar__get_for_date(resource_id, sql_date)[child_resource_id].booked_time_slots.merged_seconds; // [  [ 25211, 27002 ], [ 36011, 86400 ]  ]
        } else {
          merged_seconds = [];
        }
        if (time_fields_obj.times_as_seconds.length > 1) {
          is_intersect = wpbc_is_intersect__range_time_interval([[parseInt(time_fields_obj.times_as_seconds[0]) + 20, parseInt(time_fields_obj.times_as_seconds[1]) - 20]], merged_seconds);
        } else {
          is_check_in = -1 !== time_fields_obj.name.indexOf('start');
          is_intersect = wpbc_is_intersect__one_time_interval(is_check_in ? parseInt(time_fields_obj.times_as_seconds) + 20 : parseInt(time_fields_obj.times_as_seconds) - 20, merged_seconds);
        }
        if (is_intersect) {
          how_many_resources_intersected++; // Increase
        }
      }
      if (child_resources_arr.length == how_many_resources_intersected) {
        // All resources intersected,  then  it's means that this time-slot or time must  be  Disabled, and we can  exist  from   selected_dates_arr LOOP

        time_fields_obj_arr[field_key].disabled = 1;
        break; // exist  from   Dates LOOP
      }
    }
  }

  // 5. Now we can disable time slot in HTML by  using  ( field.disabled == 1 ) property
  wpbc__html__time_field_options__set_disabled(time_fields_obj_arr);
  jQuery(".booking_form_div").trigger('wpbc_hook_timeslots_disabled', [resource_id, selected_dates_arr]); // Trigger hook on disabling timeslots.		Usage: 	jQuery( ".booking_form_div" ).on( 'wpbc_hook_timeslots_disabled', function ( event, bk_type, all_dates ){ ... } );		// FixIn: 8.7.11.9.
}

/**
 * Check if specific time(-slot) already  in the past for selected date
 *
 * @param js_current_time_to_check		- JS Date
 * @param sql_date						- '2025-01-26'
 * @param time_fields_obj				- Object
 * @returns {boolean}
 */
function wpbc_check_is_time_in_past(js_current_time_to_check, sql_date, time_fields_obj) {
  // FixIn: 10.9.6.4
  var sql_date_arr = sql_date.split('-');
  var sql_date__midnight = new Date(parseInt(sql_date_arr[0]), parseInt(sql_date_arr[1]) - 1, parseInt(sql_date_arr[2]), 0, 0, 0);
  var sql_date__midnight_miliseconds = sql_date__midnight.getTime();
  var is_intersect = false;
  if (time_fields_obj.times_as_seconds.length > 1) {
    if (js_current_time_to_check.getTime() > sql_date__midnight_miliseconds + (parseInt(time_fields_obj.times_as_seconds[0]) + 20) * 1000) {
      is_intersect = true;
    }
    if (js_current_time_to_check.getTime() > sql_date__midnight_miliseconds + (parseInt(time_fields_obj.times_as_seconds[1]) - 20) * 1000) {
      is_intersect = true;
    }
  } else {
    var is_check_in = -1 !== time_fields_obj.name.indexOf('start');
    var times_as_seconds_check = is_check_in ? parseInt(time_fields_obj.times_as_seconds) + 20 : parseInt(time_fields_obj.times_as_seconds) - 20;
    times_as_seconds_check = sql_date__midnight_miliseconds + times_as_seconds_check * 1000;
    if (js_current_time_to_check.getTime() > times_as_seconds_check) {
      is_intersect = true;
    }
  }
  return is_intersect;
}

/**
 * Is number inside /intersect  of array of intervals ?
 *
 * @param time_A		     	- 25800
 * @param time_interval_B		- [  [ 25211, 27002 ], [ 36011, 86400 ]  ]
 * @returns {boolean}
 */
function wpbc_is_intersect__one_time_interval(time_A, time_interval_B) {
  for (var j = 0; j < time_interval_B.length; j++) {
    if (parseInt(time_A) > parseInt(time_interval_B[j][0]) && parseInt(time_A) < parseInt(time_interval_B[j][1])) {
      return true;
    }

    // if ( ( parseInt( time_A ) == parseInt( time_interval_B[ j ][ 0 ] ) ) || ( parseInt( time_A ) == parseInt( time_interval_B[ j ][ 1 ] ) ) ) {
    // 			// Time A just  at  the border of interval
    // }
  }
  return false;
}

/**
 * Is these array of intervals intersected ?
 *
 * @param time_interval_A		- [ [ 21600, 23400 ] ]
 * @param time_interval_B		- [  [ 25211, 27002 ], [ 36011, 86400 ]  ]
 * @returns {boolean}
 */
function wpbc_is_intersect__range_time_interval(time_interval_A, time_interval_B) {
  var is_intersect;
  for (var i = 0; i < time_interval_A.length; i++) {
    for (var j = 0; j < time_interval_B.length; j++) {
      is_intersect = wpbc_intervals__is_intersected(time_interval_A[i], time_interval_B[j]);
      if (is_intersect) {
        return true;
      }
    }
  }
  return false;
}

/**
 * Get all time fields in the booking form as array  of objects
 *
 * @param resource_id
 * @returns []
 *
 * 		Example:
 * 					[
 * 					 	   {
 * 								value_option_24h:   '06:00 - 06:30'
 * 								times_as_seconds:   [ 21600, 23400 ]
 * 					 	   		jquery_option:      jQuery_Object {}
 * 								name:               'rangetime2[]'
 * 					     }
 * 					  ...
 * 						   {
 * 								value_option_24h:   '06:00'
 * 								times_as_seconds:   [ 21600 ]
 * 						   		jquery_option:      jQuery_Object {}
 * 								name:               'starttime2[]'
 *  					    }
 * 					 ]
 */
function wpbc_get__time_fields__in_booking_form__as_arr(resource_id) {
  /**
  * Fields with  []  like this   select[name="rangetime1[]"]
  * it's when we have 'multiple' in shortcode:   [select* rangetime multiple  "06:00 - 06:30" ... ]
  */
  var time_fields_arr = ['select[name="rangetime' + resource_id + '"]', 'select[name="rangetime' + resource_id + '[]"]', 'select[name="starttime' + resource_id + '"]', 'select[name="starttime' + resource_id + '[]"]', 'select[name="endtime' + resource_id + '"]', 'select[name="endtime' + resource_id + '[]"]'];
  var time_fields_obj_arr = [];

  // Loop all Time Fields
  for (var ctf = 0; ctf < time_fields_arr.length; ctf++) {
    var time_field = time_fields_arr[ctf];
    var time_option = jQuery(time_field + ' option');

    // Loop all options in time field
    for (var j = 0; j < time_option.length; j++) {
      var jquery_option = jQuery(time_field + ' option:eq(' + j + ')');
      var value_option_seconds_arr = jquery_option.val().split('-');
      var times_as_seconds = [];

      // Get time as seconds
      if (value_option_seconds_arr.length) {
        // FixIn: 9.8.10.1.
        for (let i = 0; i < value_option_seconds_arr.length; i++) {
          // FixIn: 10.0.0.56.
          // value_option_seconds_arr[i] = '14:00 '  | ' 16:00'   (if from 'rangetime') and '16:00'  if (start/end time)

          var start_end_times_arr = value_option_seconds_arr[i].trim().split(':');
          var time_in_seconds = parseInt(start_end_times_arr[0]) * 60 * 60 + parseInt(start_end_times_arr[1]) * 60;
          times_as_seconds.push(time_in_seconds);
        }
      }
      time_fields_obj_arr.push({
        'name': jQuery(time_field).attr('name'),
        'value_option_24h': jquery_option.val(),
        'jquery_option': jquery_option,
        'times_as_seconds': times_as_seconds
      });
    }
  }
  return time_fields_obj_arr;
}

/**
 * Disable HTML options and add booked CSS class
 *
 * @param time_fields_obj_arr      - this value is from  the func:  	wpbc_get__time_fields__in_booking_form__as_arr( resource_id )
 * 					[
 * 					 	   {	jquery_option:      jQuery_Object {}
 * 								name:               'rangetime2[]'
 * 								times_as_seconds:   [ 21600, 23400 ]
 * 								value_option_24h:   '06:00 - 06:30'
 * 	  						    disabled = 1
 * 					     }
 * 					  ...
 * 						   {	jquery_option:      jQuery_Object {}
 * 								name:               'starttime2[]'
 * 								times_as_seconds:   [ 21600 ]
 * 								value_option_24h:   '06:00'
 *   							disabled = 0
 *  					    }
 * 					 ]
 *
 */
function wpbc__html__time_field_options__set_disabled(time_fields_obj_arr) {
  var jquery_option;
  for (var i = 0; i < time_fields_obj_arr.length; i++) {
    var jquery_option = time_fields_obj_arr[i].jquery_option;
    if (1 == time_fields_obj_arr[i].disabled) {
      jquery_option.prop('disabled', true); // Make disable some options
      jquery_option.addClass('booked'); // Add "booked" CSS class

      // if this booked element selected --> then deselect  it
      if (jquery_option.prop('selected')) {
        jquery_option.prop('selected', false);
        jquery_option.parent().find('option:not([disabled]):first').prop('selected', true).trigger("change");
      }
    } else {
      jquery_option.prop('disabled', false); // Make active all times
      jquery_option.removeClass('booked'); // Remove class "booked"
    }
  }
}

/**
 * Check if this time_range | Time_Slot is Full Day  booked
 *
 * @param timeslot_arr_in_seconds		- [ 36011, 86400 ]
 * @returns {boolean}
 */
function wpbc_is_this_timeslot__full_day_booked(timeslot_arr_in_seconds) {
  if (timeslot_arr_in_seconds.length > 1 && parseInt(timeslot_arr_in_seconds[0]) < 30 && parseInt(timeslot_arr_in_seconds[1]) > 24 * 60 * 60 - 30) {
    return true;
  }
  return false;
}

// -----------------------------------------------------------------------------------------------------------------
/*  ==  S e l e c t e d    D a t e s  /  T i m e - F i e l d s  ==
// ----------------------------------------------------------------------------------------------------------------- */

/**
 *  Get all selected dates in SQL format like this [ "2023-08-23", "2023-08-24" , ... ]
 *
 * @param resource_id
 * @returns {[]}			[ "2023-08-23", "2023-08-24", "2023-08-25", "2023-08-26", "2023-08-27", "2023-08-28", "2023-08-29" ]
 */
function wpbc_get__selected_dates_sql__as_arr(resource_id) {
  var selected_dates_arr = [];
  selected_dates_arr = jQuery('#date_booking' + resource_id).val().split(',');
  if (selected_dates_arr.length) {
    // FixIn: 9.8.10.1.
    for (let i = 0; i < selected_dates_arr.length; i++) {
      // FixIn: 10.0.0.56.
      selected_dates_arr[i] = selected_dates_arr[i].trim();
      selected_dates_arr[i] = selected_dates_arr[i].split('.');
      if (selected_dates_arr[i].length > 1) {
        selected_dates_arr[i] = selected_dates_arr[i][2] + '-' + selected_dates_arr[i][1] + '-' + selected_dates_arr[i][0];
      }
    }
  }

  // Remove empty elements from an array
  selected_dates_arr = selected_dates_arr.filter(function (n) {
    return parseInt(n);
  });
  selected_dates_arr.sort();
  return selected_dates_arr;
}

/**
 * Get all time fields in the booking form as array  of objects
 *
 * @param resource_id
 * @param is_only_selected_time
 * @returns []
 *
 * 		Example:
 * 					[
 * 					 	   {
 * 								value_option_24h:   '06:00 - 06:30'
 * 								times_as_seconds:   [ 21600, 23400 ]
 * 					 	   		jquery_option:      jQuery_Object {}
 * 								name:               'rangetime2[]'
 * 					     }
 * 					  ...
 * 						   {
 * 								value_option_24h:   '06:00'
 * 								times_as_seconds:   [ 21600 ]
 * 						   		jquery_option:      jQuery_Object {}
 * 								name:               'starttime2[]'
 *  					    }
 * 					 ]
 */
function wpbc_get__selected_time_fields__in_booking_form__as_arr(resource_id, is_only_selected_time = true) {
  /**
   * Fields with  []  like this   select[name="rangetime1[]"]
   * it's when we have 'multiple' in shortcode:   [select* rangetime multiple  "06:00 - 06:30" ... ]
   */
  var time_fields_arr = ['select[name="rangetime' + resource_id + '"]', 'select[name="rangetime' + resource_id + '[]"]', 'select[name="starttime' + resource_id + '"]', 'select[name="starttime' + resource_id + '[]"]', 'select[name="endtime' + resource_id + '"]', 'select[name="endtime' + resource_id + '[]"]', 'select[name="durationtime' + resource_id + '"]', 'select[name="durationtime' + resource_id + '[]"]'];
  var time_fields_obj_arr = [];

  // Loop all Time Fields
  for (var ctf = 0; ctf < time_fields_arr.length; ctf++) {
    var time_field = time_fields_arr[ctf];
    var time_option;
    if (is_only_selected_time) {
      time_option = jQuery('#booking_form' + resource_id + ' ' + time_field + ' option:selected'); // Exclude conditional  fields,  because of using '#booking_form3 ...'
    } else {
      time_option = jQuery('#booking_form' + resource_id + ' ' + time_field + ' option'); // All  time fields
    }

    // Loop all options in time field
    for (var j = 0; j < time_option.length; j++) {
      var jquery_option = jQuery(time_option[j]); // Get only  selected options 	//jQuery( time_field + ' option:eq(' + j + ')' );
      var value_option_seconds_arr = jquery_option.val().split('-');
      var times_as_seconds = [];

      // Get time as seconds
      if (value_option_seconds_arr.length) {
        // FixIn: 9.8.10.1.
        for (let i = 0; i < value_option_seconds_arr.length; i++) {
          // FixIn: 10.0.0.56.
          // value_option_seconds_arr[i] = '14:00 '  | ' 16:00'   (if from 'rangetime') and '16:00'  if (start/end time)

          var start_end_times_arr = value_option_seconds_arr[i].trim().split(':');
          var time_in_seconds = parseInt(start_end_times_arr[0]) * 60 * 60 + parseInt(start_end_times_arr[1]) * 60;
          times_as_seconds.push(time_in_seconds);
        }
      }
      time_fields_obj_arr.push({
        'name': jQuery('#booking_form' + resource_id + ' ' + time_field).attr('name'),
        'value_option_24h': jquery_option.val(),
        'jquery_option': jquery_option,
        'times_as_seconds': times_as_seconds
      });
    }
  }

  // Text:   [starttime] - [endtime] -----------------------------------------------------------------------------

  var text_time_fields_arr = ['input[name="starttime' + resource_id + '"]', 'input[name="endtime' + resource_id + '"]'];
  for (var tf = 0; tf < text_time_fields_arr.length; tf++) {
    var text_jquery = jQuery('#booking_form' + resource_id + ' ' + text_time_fields_arr[tf]); // Exclude conditional  fields,  because of using '#booking_form3 ...'
    if (text_jquery.length > 0) {
      var time__h_m__arr = text_jquery.val().trim().split(':'); // '14:00'
      if (0 == time__h_m__arr.length) {
        continue; // Not entered time value in a field
      }
      if (1 == time__h_m__arr.length) {
        if ('' === time__h_m__arr[0]) {
          continue; // Not entered time value in a field
        }
        time__h_m__arr[1] = 0;
      }
      var text_time_in_seconds = parseInt(time__h_m__arr[0]) * 60 * 60 + parseInt(time__h_m__arr[1]) * 60;
      var text_times_as_seconds = [];
      text_times_as_seconds.push(text_time_in_seconds);
      time_fields_obj_arr.push({
        'name': text_jquery.attr('name'),
        'value_option_24h': text_jquery.val(),
        'jquery_option': text_jquery,
        'times_as_seconds': text_times_as_seconds
      });
    }
  }
  return time_fields_obj_arr;
}

// ---------------------------------------------------------------------------------------------------------------------
/*  ==  S U P P O R T    for    C A L E N D A R  ==
// --------------------------------------------------------------------------------------------------------------------- */

/**
 * Get Calendar datepick  Instance
 * @param resource_id  of booking resource
 * @returns {*|null}
 */
function wpbc_calendar__get_inst(resource_id) {
  if ('undefined' === typeof resource_id) {
    resource_id = '1';
  }
  if (jQuery('#calendar_booking' + resource_id).length > 0) {
    return jQuery.datepick._getInst(jQuery('#calendar_booking' + resource_id).get(0));
  }
  return null;
}

/**
 * Unselect  all dates in calendar and visually update this calendar
 *
 * @param resource_id		ID of booking resource
 * @returns {boolean}		true on success | false,  if no such  calendar
 */
function wpbc_calendar__unselect_all_dates(resource_id) {
  if ('undefined' === typeof resource_id) {
    resource_id = '1';
  }
  var inst = wpbc_calendar__get_inst(resource_id);
  if (null !== inst) {
    // Unselect all dates and set  properties of Datepick
    jQuery('#date_booking' + resource_id).val(''); //FixIn: 5.4.3
    inst.stayOpen = false;
    inst.dates = [];
    jQuery.datepick._updateDatepick(inst);
    return true;
  }
  return false;
}

/**
 * Clear days highlighting in All or specific Calendars
 *
    * @param resource_id  - can be skiped to  clear highlighting in all calendars
    */
function wpbc_calendars__clear_days_highlighting(resource_id) {
  if ('undefined' !== typeof resource_id) {
    jQuery('#calendar_booking' + resource_id + ' .datepick-days-cell-over').removeClass('datepick-days-cell-over'); // Clear in specific calendar
  } else {
    jQuery('.datepick-days-cell-over').removeClass('datepick-days-cell-over'); // Clear in all calendars
  }
}

/**
 * Scroll to specific month in calendar
 *
 * @param resource_id		ID of resource
 * @param year				- real year  - 2023
 * @param month				- real month - 12
 * @returns {boolean}
 */
function wpbc_calendar__scroll_to(resource_id, year, month) {
  if ('undefined' === typeof resource_id) {
    resource_id = '1';
  }
  var inst = wpbc_calendar__get_inst(resource_id);
  if (null !== inst) {
    year = parseInt(year);
    month = parseInt(month) - 1; // In JS date,  month -1

    inst.cursorDate = new Date();
    // In some cases,  the setFullYear can  set  only Year,  and not the Month and day      // FixIn: 6.2.3.5.
    inst.cursorDate.setFullYear(year, month, 1);
    inst.cursorDate.setMonth(month);
    inst.cursorDate.setDate(1);
    inst.drawMonth = inst.cursorDate.getMonth();
    inst.drawYear = inst.cursorDate.getFullYear();
    jQuery.datepick._notifyChange(inst);
    jQuery.datepick._adjustInstDate(inst);
    jQuery.datepick._showDate(inst);
    jQuery.datepick._updateDatepick(inst);
    return true;
  }
  return false;
}

/**
 * Is this date selectable in calendar (mainly it's means AVAILABLE date)
 *
 * @param {int|string} resource_id		1
 * @param {string} sql_class_day		'2023-08-11'
 * @returns {boolean}					true | false
 */
function wpbc_is_this_day_selectable(resource_id, sql_class_day) {
  // Get Data --------------------------------------------------------------------------------------------------------
  var date_bookings_obj = _wpbc.bookings_in_calendar__get_for_date(resource_id, sql_class_day);
  var is_day_selectable = parseInt(date_bookings_obj['day_availability']) > 0;
  if (typeof date_bookings_obj['summary'] === 'undefined') {
    return is_day_selectable;
  }
  if ('available' != date_bookings_obj['summary']['status_for_day']) {
    var is_set_pending_days_selectable = _wpbc.calendar__get_param_value(resource_id, 'pending_days_selectable'); // set pending days selectable          // FixIn: 8.6.1.18.

    switch (date_bookings_obj['summary']['status_for_bookings']) {
      case 'pending':
      // Situations for "change-over" days:
      case 'pending_pending':
      case 'pending_approved':
      case 'approved_pending':
        is_day_selectable = is_day_selectable ? true : is_set_pending_days_selectable;
        break;
      default:
    }
  }
  return is_day_selectable;
}

/**
 * Is date to check IN array of selected dates
 *
 * @param {date}js_date_to_check		- JS Date			- simple  JavaScript Date object
 * @param {[]} js_dates_arr			- [ JSDate, ... ]   - array  of JS dates
 * @returns {boolean}
 */
function wpbc_is_this_day_among_selected_days(js_date_to_check, js_dates_arr) {
  for (var date_index = 0; date_index < js_dates_arr.length; date_index++) {
    // FixIn: 8.4.5.16.
    if (js_dates_arr[date_index].getFullYear() === js_date_to_check.getFullYear() && js_dates_arr[date_index].getMonth() === js_date_to_check.getMonth() && js_dates_arr[date_index].getDate() === js_date_to_check.getDate()) {
      return true;
    }
  }
  return false;
}

/**
 * Get SQL Class Date '2023-08-01' from  JS Date
 *
 * @param date				JS Date
 * @returns {string}		'2023-08-12'
 */
function wpbc__get__sql_class_date(date) {
  var sql_class_day = date.getFullYear() + '-';
  sql_class_day += date.getMonth() + 1 < 10 ? '0' : '';
  sql_class_day += date.getMonth() + 1 + '-';
  sql_class_day += date.getDate() < 10 ? '0' : '';
  sql_class_day += date.getDate();
  return sql_class_day;
}

/**
 * Get JS Date from  the SQL date format '2024-05-14'
 * @param sql_class_date
 * @returns {Date}
 */
function wpbc__get__js_date(sql_class_date) {
  var sql_class_date_arr = sql_class_date.split('-');
  var date_js = new Date();
  date_js.setFullYear(parseInt(sql_class_date_arr[0]), parseInt(sql_class_date_arr[1]) - 1, parseInt(sql_class_date_arr[2])); // year, month, date

  // Without this time adjust Dates selection  in Datepicker can not work!!!
  date_js.setHours(0);
  date_js.setMinutes(0);
  date_js.setSeconds(0);
  date_js.setMilliseconds(0);
  return date_js;
}

/**
 * Get TD Class Date '1-31-2023' from  JS Date
 *
 * @param date				JS Date
 * @returns {string}		'1-31-2023'
 */
function wpbc__get__td_class_date(date) {
  var td_class_day = date.getMonth() + 1 + '-' + date.getDate() + '-' + date.getFullYear(); // '1-9-2023'

  return td_class_day;
}

/**
 * Get date params from  string date
 *
 * @param date			string date like '31.5.2023'
 * @param separator		default '.'  can be skipped.
 * @returns {  {date: number, month: number, year: number}  }
 */
function wpbc__get__date_params__from_string_date(date, separator) {
  separator = 'undefined' !== typeof separator ? separator : '.';
  var date_arr = date.split(separator);
  var date_obj = {
    'year': parseInt(date_arr[2]),
    'month': parseInt(date_arr[1]) - 1,
    'date': parseInt(date_arr[0])
  };
  return date_obj; // for 		 = new Date( date_obj.year , date_obj.month , date_obj.date );
}

/**
 * Add Spin Loader to  calendar
 * @param resource_id
 */
function wpbc_calendar__loading__start(resource_id) {
  if (!jQuery('#calendar_booking' + resource_id).next().hasClass('wpbc_spins_loader_wrapper')) {
    jQuery('#calendar_booking' + resource_id).after('<div class="wpbc_spins_loader_wrapper"><div class="wpbc_spins_loader"></div></div>');
  }
  if (!jQuery('#calendar_booking' + resource_id).hasClass('wpbc_calendar_blur_small')) {
    jQuery('#calendar_booking' + resource_id).addClass('wpbc_calendar_blur_small');
  }
  wpbc_calendar__blur__start(resource_id);
}

/**
 * Remove Spin Loader to  calendar
 * @param resource_id
 */
function wpbc_calendar__loading__stop(resource_id) {
  jQuery('#calendar_booking' + resource_id + ' + .wpbc_spins_loader_wrapper').remove();
  jQuery('#calendar_booking' + resource_id).removeClass('wpbc_calendar_blur_small');
  wpbc_calendar__blur__stop(resource_id);
}

/**
 * Add Blur to  calendar
 * @param resource_id
 */
function wpbc_calendar__blur__start(resource_id) {
  if (!jQuery('#calendar_booking' + resource_id).hasClass('wpbc_calendar_blur')) {
    jQuery('#calendar_booking' + resource_id).addClass('wpbc_calendar_blur');
  }
}

/**
 * Remove Blur in  calendar
 * @param resource_id
 */
function wpbc_calendar__blur__stop(resource_id) {
  jQuery('#calendar_booking' + resource_id).removeClass('wpbc_calendar_blur');
}

// .................................................................................................................
/*  ==  Calendar Update  - View  ==
// ................................................................................................................. */

/**
 * Update Look  of calendar
 *
 * @param resource_id
 */
function wpbc_calendar__update_look(resource_id) {
  var inst = wpbc_calendar__get_inst(resource_id);
  jQuery.datepick._updateDatepick(inst);
}

/**
 * Update dynamically Number of Months in calendar
 *
 * @param resource_id int
 * @param months_number int
 */
function wpbc_calendar__update_months_number(resource_id, months_number) {
  var inst = wpbc_calendar__get_inst(resource_id);
  if (null !== inst) {
    inst.settings['numberOfMonths'] = months_number;
    //_wpbc.calendar__set_param_value( resource_id, 'calendar_number_of_months', months_number );
    wpbc_calendar__update_look(resource_id);
  }
}

/**
 * Show calendar in  different Skin
 *
 * @param selected_skin_url
 */
function wpbc__calendar__change_skin(selected_skin_url) {
  //console.log( 'SKIN SELECTION ::', selected_skin_url );

  // Remove CSS skin
  var stylesheet = document.getElementById('wpbc-calendar-skin-css');
  stylesheet.parentNode.removeChild(stylesheet);

  // Add new CSS skin
  var headID = document.getElementsByTagName("head")[0];
  var cssNode = document.createElement('link');
  cssNode.type = 'text/css';
  cssNode.setAttribute("id", "wpbc-calendar-skin-css");
  cssNode.rel = 'stylesheet';
  cssNode.media = 'screen';
  cssNode.href = selected_skin_url; //"http://beta/wp-content/plugins/booking/css/skins/green-01.css";
  headID.appendChild(cssNode);
}
function wpbc__css__change_skin(selected_skin_url, stylesheet_id = 'wpbc-time_picker-skin-css') {
  // Remove CSS skin
  var stylesheet = document.getElementById(stylesheet_id);
  stylesheet.parentNode.removeChild(stylesheet);

  // Add new CSS skin
  var headID = document.getElementsByTagName("head")[0];
  var cssNode = document.createElement('link');
  cssNode.type = 'text/css';
  cssNode.setAttribute("id", stylesheet_id);
  cssNode.rel = 'stylesheet';
  cssNode.media = 'screen';
  cssNode.href = selected_skin_url; //"http://beta/wp-content/plugins/booking/css/skins/green-01.css";
  headID.appendChild(cssNode);
}

// ---------------------------------------------------------------------------------------------------------------------
/*  ==  S U P P O R T    M A T H  ==
// --------------------------------------------------------------------------------------------------------------------- */

/**
 * Merge several  intersected intervals or return not intersected:                        [[1,3],[2,6],[8,10],[15,18]]  ->   [[1,6],[8,10],[15,18]]
 *
 * @param [] intervals			 [ [1,3],[2,4],[6,8],[9,10],[3,7] ]
 * @returns []					 [ [1,8],[9,10] ]
 *
 * Exmample: wpbc_intervals__merge_inersected(  [ [1,3],[2,4],[6,8],[9,10],[3,7] ]  );
 */
function wpbc_intervals__merge_inersected(intervals) {
  if (!intervals || intervals.length === 0) {
    return [];
  }
  var merged = [];
  intervals.sort(function (a, b) {
    return a[0] - b[0];
  });
  var mergedInterval = intervals[0];
  for (var i = 1; i < intervals.length; i++) {
    var interval = intervals[i];
    if (interval[0] <= mergedInterval[1]) {
      mergedInterval[1] = Math.max(mergedInterval[1], interval[1]);
    } else {
      merged.push(mergedInterval);
      mergedInterval = interval;
    }
  }
  merged.push(mergedInterval);
  return merged;
}

/**
 * Is 2 intervals intersected:       [36011, 86392]    <=>    [1, 43192]  =>  true      ( intersected )
 *
 * Good explanation  here https://stackoverflow.com/questions/3269434/whats-the-most-efficient-way-to-test-if-two-ranges-overlap
 *
 * @param  interval_A   - [ 36011, 86392 ]
 * @param  interval_B   - [     1, 43192 ]
 *
 * @return bool
 */
function wpbc_intervals__is_intersected(interval_A, interval_B) {
  if (0 == interval_A.length || 0 == interval_B.length) {
    return false;
  }
  interval_A[0] = parseInt(interval_A[0]);
  interval_A[1] = parseInt(interval_A[1]);
  interval_B[0] = parseInt(interval_B[0]);
  interval_B[1] = parseInt(interval_B[1]);
  var is_intersected = Math.max(interval_A[0], interval_B[0]) - Math.min(interval_A[1], interval_B[1]);

  // if ( 0 == is_intersected ) {
  //	                                 // Such ranges going one after other, e.g.: [ 12, 15 ] and [ 15, 21 ]
  // }

  if (is_intersected < 0) {
    return true; // INTERSECTED
  }
  return false; // Not intersected
}

/**
 * Get the closets ABS value of element in array to the current myValue
 *
 * @param myValue 	- int element to search closet 			4
 * @param myArray	- array of elements where to search 	[5,8,1,7]
 * @returns int												5
 */
function wpbc_get_abs_closest_value_in_arr(myValue, myArray) {
  if (myArray.length == 0) {
    // If the array is empty -> return  the myValue
    return myValue;
  }
  var obj = myArray[0];
  var diff = Math.abs(myValue - obj); // Get distance between  1st element
  var closetValue = myArray[0]; // Save 1st element

  for (var i = 1; i < myArray.length; i++) {
    obj = myArray[i];
    if (Math.abs(myValue - obj) < diff) {
      // we found closer value -> save it
      diff = Math.abs(myValue - obj);
      closetValue = obj;
    }
  }
  return closetValue;
}

// ---------------------------------------------------------------------------------------------------------------------
/*  ==  T O O L T I P S  ==
// --------------------------------------------------------------------------------------------------------------------- */

/**
 * Define tooltip to show,  when  mouse over Date in Calendar
 *
 * @param  tooltip_text			- Text to show				'Booked time: 12:00 - 13:00<br>Cost: $20.00'
 * @param  resource_id			- ID of booking resource	'1'
 * @param  td_class				- SQL class					'1-9-2023'
 * @returns {boolean}					- defined to show or not
 */
function wpbc_set_tooltip___for__calendar_date(tooltip_text, resource_id, td_class) {
  //TODO: make escaping of text for quot symbols,  and JS/HTML...

  jQuery('#calendar_booking' + resource_id + ' td.cal4date-' + td_class).attr('data-content', tooltip_text);
  var td_el = jQuery('#calendar_booking' + resource_id + ' td.cal4date-' + td_class).get(0); // FixIn: 9.0.1.1.

  if ('undefined' !== typeof td_el && undefined == td_el._tippy && '' !== tooltip_text) {
    wpbc_tippy(td_el, {
      content(reference) {
        var popover_content = reference.getAttribute('data-content');
        return '<div class="popover popover_tippy">' + '<div class="popover-content">' + popover_content + '</div>' + '</div>';
      },
      allowHTML: true,
      trigger: 'mouseenter focus',
      interactive: false,
      hideOnClick: true,
      interactiveBorder: 10,
      maxWidth: 550,
      theme: 'wpbc-tippy-times',
      placement: 'top',
      delay: [400, 0],
      // FixIn: 9.4.2.2.
      //delay			 : [0, 9999999999],						// Debuge  tooltip
      ignoreAttributes: true,
      touch: true,
      //['hold', 500], // 500ms delay				// FixIn: 9.2.1.5.
      appendTo: () => document.body
    });
    return true;
  }
  return false;
}

// ---------------------------------------------------------------------------------------------------------------------
/*  ==  Dates Functions  ==
// --------------------------------------------------------------------------------------------------------------------- */

/**
 * Get number of dates between 2 JS Dates
 *
 * @param date1		JS Date
 * @param date2		JS Date
 * @returns {number}
 */
function wpbc_dates__days_between(date1, date2) {
  // The number of milliseconds in one day
  var ONE_DAY = 1000 * 60 * 60 * 24;

  // Convert both dates to milliseconds
  var date1_ms = date1.getTime();
  var date2_ms = date2.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date1_ms - date2_ms;

  // Convert back to days and return
  return Math.round(difference_ms / ONE_DAY);
}

/**
 * Check  if this array  of dates is consecutive array  of dates or not.
 * 		e.g.  ['2024-05-09','2024-05-19','2024-05-30'] -> false
 * 		e.g.  ['2024-05-09','2024-05-10','2024-05-11'] -> true
 * @param sql_dates_arr	 array		e.g.: ['2024-05-09','2024-05-19','2024-05-30']
 * @returns {boolean}
 */
function wpbc_dates__is_consecutive_dates_arr_range(sql_dates_arr) {
  // FixIn: 10.0.0.50.

  if (sql_dates_arr.length > 1) {
    var previos_date = wpbc__get__js_date(sql_dates_arr[0]);
    var current_date;
    for (var i = 1; i < sql_dates_arr.length; i++) {
      current_date = wpbc__get__js_date(sql_dates_arr[i]);
      if (wpbc_dates__days_between(current_date, previos_date) != 1) {
        return false;
      }
      previos_date = current_date;
    }
  }
  return true;
}

// ---------------------------------------------------------------------------------------------------------------------
/*  ==  Auto Dates Selection  ==
// --------------------------------------------------------------------------------------------------------------------- */

/**
 *  == How to  use ? ==
 *
 *  For Dates selection, we need to use this logic!     We need select the dates only after booking data loaded!
 *
 *  Check example bellow.
 *
 *	// Fire on all booking dates loaded
 *	jQuery( 'body' ).on( 'wpbc_calendar_ajx__loaded_data', function ( event, loaded_resource_id ){
 *
 *		if ( loaded_resource_id == select_dates_in_calendar_id ){
 *			wpbc_auto_select_dates_in_calendar( select_dates_in_calendar_id, '2024-05-15', '2024-05-25' );
 *		}
 *	} );
 *
 */

/**
 * Try to Auto select dates in specific calendar by simulated clicks in datepicker
 *
 * @param resource_id		1
 * @param check_in_ymd		'2024-05-09'		OR  	['2024-05-09','2024-05-19','2024-05-20']
 * @param check_out_ymd		'2024-05-15'		Optional
 *
 * @returns {number}		number of selected dates
 *
 * 	Example 1:				var num_selected_days = wpbc_auto_select_dates_in_calendar( 1, '2024-05-15', '2024-05-25' );
 * 	Example 2:				var num_selected_days = wpbc_auto_select_dates_in_calendar( 1, ['2024-05-09','2024-05-19','2024-05-20'] );
 */
function wpbc_auto_select_dates_in_calendar(resource_id, check_in_ymd, check_out_ymd = '') {
  // FixIn: 10.0.0.47.

  console.log('WPBC_AUTO_SELECT_DATES_IN_CALENDAR( RESOURCE_ID, CHECK_IN_YMD, CHECK_OUT_YMD )', resource_id, check_in_ymd, check_out_ymd);
  if ('2100-01-01' == check_in_ymd || '2100-01-01' == check_out_ymd || '' == check_in_ymd && '' == check_out_ymd) {
    return 0;
  }

  // -----------------------------------------------------------------------------------------------------------------
  // If 	check_in_ymd  =  [ '2024-05-09','2024-05-19','2024-05-30' ]				ARRAY of DATES						// FixIn: 10.0.0.50.
  // -----------------------------------------------------------------------------------------------------------------
  var dates_to_select_arr = [];
  if (Array.isArray(check_in_ymd)) {
    dates_to_select_arr = wpbc_clone_obj(check_in_ymd);

    // -------------------------------------------------------------------------------------------------------------
    // Exceptions to  set  	MULTIPLE DAYS 	mode
    // -------------------------------------------------------------------------------------------------------------
    // if dates as NOT CONSECUTIVE: ['2024-05-09','2024-05-19','2024-05-30'], -> set MULTIPLE DAYS mode
    if (dates_to_select_arr.length > 0 && '' == check_out_ymd && !wpbc_dates__is_consecutive_dates_arr_range(dates_to_select_arr)) {
      wpbc_cal_days_select__multiple(resource_id);
    }
    // if multiple days to select, but enabled SINGLE day mode, -> set MULTIPLE DAYS mode
    if (dates_to_select_arr.length > 1 && '' == check_out_ymd && 'single' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode')) {
      wpbc_cal_days_select__multiple(resource_id);
    }
    // -------------------------------------------------------------------------------------------------------------
    check_in_ymd = dates_to_select_arr[0];
    if ('' == check_out_ymd) {
      check_out_ymd = dates_to_select_arr[dates_to_select_arr.length - 1];
    }
  }
  // -----------------------------------------------------------------------------------------------------------------

  if ('' == check_in_ymd) {
    check_in_ymd = check_out_ymd;
  }
  if ('' == check_out_ymd) {
    check_out_ymd = check_in_ymd;
  }
  if ('undefined' === typeof resource_id) {
    resource_id = '1';
  }
  var inst = wpbc_calendar__get_inst(resource_id);
  if (null !== inst) {
    // Unselect all dates and set  properties of Datepick
    jQuery('#date_booking' + resource_id).val(''); //FixIn: 5.4.3
    inst.stayOpen = false;
    inst.dates = [];
    var check_in_js = wpbc__get__js_date(check_in_ymd);
    var td_cell = wpbc_get_clicked_td(inst.id, check_in_js);

    // Is ome type of error, then select multiple days selection  mode.
    if ('' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode')) {
      _wpbc.calendar__set_param_value(resource_id, 'days_select_mode', 'multiple');
    }

    // ---------------------------------------------------------------------------------------------------------
    //  == DYNAMIC ==
    if ('dynamic' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode')) {
      // 1-st click
      inst.stayOpen = false;
      jQuery.datepick._selectDay(td_cell, '#' + inst.id, check_in_js.getTime());
      if (0 === inst.dates.length) {
        return 0; // First click  was unsuccessful, so we must not make other click
      }

      // 2-nd click
      var check_out_js = wpbc__get__js_date(check_out_ymd);
      var td_cell_out = wpbc_get_clicked_td(inst.id, check_out_js);
      inst.stayOpen = true;
      jQuery.datepick._selectDay(td_cell_out, '#' + inst.id, check_out_js.getTime());
    }

    // ---------------------------------------------------------------------------------------------------------
    //  == FIXED ==
    if ('fixed' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode')) {
      jQuery.datepick._selectDay(td_cell, '#' + inst.id, check_in_js.getTime());
    }

    // ---------------------------------------------------------------------------------------------------------
    //  == SINGLE ==
    if ('single' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode')) {
      //jQuery.datepick._restrictMinMax( inst, jQuery.datepick._determineDate( inst, check_in_js, null ) );		// Do we need to run  this ? Please note, check_in_js must  have time,  min, sec defined to 0!
      jQuery.datepick._selectDay(td_cell, '#' + inst.id, check_in_js.getTime());
    }

    // ---------------------------------------------------------------------------------------------------------
    //  == MULTIPLE ==
    if ('multiple' === _wpbc.calendar__get_param_value(resource_id, 'days_select_mode')) {
      var dates_arr;
      if (dates_to_select_arr.length > 0) {
        // Situation, when we have dates array: ['2024-05-09','2024-05-19','2024-05-30'].  and not the Check In / Check  out dates as parameter in this function
        dates_arr = wpbc_get_selection_dates_js_str_arr__from_arr(dates_to_select_arr);
      } else {
        dates_arr = wpbc_get_selection_dates_js_str_arr__from_check_in_out(check_in_ymd, check_out_ymd, inst);
      }
      if (0 === dates_arr.dates_js.length) {
        return 0;
      }

      // For Calendar Days selection
      for (var j = 0; j < dates_arr.dates_js.length; j++) {
        // Loop array of dates

        var str_date = wpbc__get__sql_class_date(dates_arr.dates_js[j]);

        // Date unavailable !
        if (0 == _wpbc.bookings_in_calendar__get_for_date(resource_id, str_date).day_availability) {
          return 0;
        }
        if (dates_arr.dates_js[j] != -1) {
          inst.dates.push(dates_arr.dates_js[j]);
        }
      }
      var check_out_date = dates_arr.dates_js[dates_arr.dates_js.length - 1];
      inst.dates.push(check_out_date); // Need add one additional SAME date for correct  works of dates selection !!!!!

      var checkout_timestamp = check_out_date.getTime();
      var td_cell = wpbc_get_clicked_td(inst.id, check_out_date);
      jQuery.datepick._selectDay(td_cell, '#' + inst.id, checkout_timestamp);
    }
    if (0 !== inst.dates.length) {
      // Scroll to specific month, if we set dates in some future months
      wpbc_calendar__scroll_to(resource_id, inst.dates[0].getFullYear(), inst.dates[0].getMonth() + 1);
    }
    return inst.dates.length;
  }
  return 0;
}

/**
 * Get HTML td element (where was click in calendar  day  cell)
 *
 * @param calendar_html_id			'calendar_booking1'
 * @param date_js					JS Date
 * @returns {*|jQuery}				Dom HTML td element
 */
function wpbc_get_clicked_td(calendar_html_id, date_js) {
  var td_cell = jQuery('#' + calendar_html_id + ' .sql_date_' + wpbc__get__sql_class_date(date_js)).get(0);
  return td_cell;
}

/**
 * Get arrays of JS and SQL dates as dates array
 *
 * @param check_in_ymd							'2024-05-15'
 * @param check_out_ymd							'2024-05-25'
 * @param inst									Datepick Inst. Use wpbc_calendar__get_inst( resource_id );
 * @returns {{dates_js: *[], dates_str: *[]}}
 */
function wpbc_get_selection_dates_js_str_arr__from_check_in_out(check_in_ymd, check_out_ymd, inst) {
  var original_array = [];
  var date;
  var bk_distinct_dates = [];
  var check_in_date = check_in_ymd.split('-');
  var check_out_date = check_out_ymd.split('-');
  date = new Date();
  date.setFullYear(check_in_date[0], check_in_date[1] - 1, check_in_date[2]); // year, month, date
  var original_check_in_date = date;
  original_array.push(jQuery.datepick._restrictMinMax(inst, jQuery.datepick._determineDate(inst, date, null))); //add date
  if (!wpbc_in_array(bk_distinct_dates, check_in_date[2] + '.' + check_in_date[1] + '.' + check_in_date[0])) {
    bk_distinct_dates.push(parseInt(check_in_date[2]) + '.' + parseInt(check_in_date[1]) + '.' + check_in_date[0]);
  }
  var date_out = new Date();
  date_out.setFullYear(check_out_date[0], check_out_date[1] - 1, check_out_date[2]); // year, month, date
  var original_check_out_date = date_out;
  var mewDate = new Date(original_check_in_date.getFullYear(), original_check_in_date.getMonth(), original_check_in_date.getDate());
  mewDate.setDate(original_check_in_date.getDate() + 1);
  while (original_check_out_date > date && original_check_in_date != original_check_out_date) {
    date = new Date(mewDate.getFullYear(), mewDate.getMonth(), mewDate.getDate());
    original_array.push(jQuery.datepick._restrictMinMax(inst, jQuery.datepick._determineDate(inst, date, null))); //add date
    if (!wpbc_in_array(bk_distinct_dates, date.getDate() + '.' + parseInt(date.getMonth() + 1) + '.' + date.getFullYear())) {
      bk_distinct_dates.push(parseInt(date.getDate()) + '.' + parseInt(date.getMonth() + 1) + '.' + date.getFullYear());
    }
    mewDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    mewDate.setDate(mewDate.getDate() + 1);
  }
  original_array.pop();
  bk_distinct_dates.pop();
  return {
    'dates_js': original_array,
    'dates_str': bk_distinct_dates
  };
}

/**
 * Get arrays of JS and SQL dates as dates array
 *
 * @param dates_to_select_arr	= ['2024-05-09','2024-05-19','2024-05-30']
 *
 * @returns {{dates_js: *[], dates_str: *[]}}
 */
function wpbc_get_selection_dates_js_str_arr__from_arr(dates_to_select_arr) {
  // FixIn: 10.0.0.50.

  var original_array = [];
  var bk_distinct_dates = [];
  var one_date_str;
  for (var d = 0; d < dates_to_select_arr.length; d++) {
    original_array.push(wpbc__get__js_date(dates_to_select_arr[d]));
    one_date_str = dates_to_select_arr[d].split('-');
    if (!wpbc_in_array(bk_distinct_dates, one_date_str[2] + '.' + one_date_str[1] + '.' + one_date_str[0])) {
      bk_distinct_dates.push(parseInt(one_date_str[2]) + '.' + parseInt(one_date_str[1]) + '.' + one_date_str[0]);
    }
  }
  return {
    'dates_js': original_array,
    'dates_str': original_array
  };
}

// =====================================================================================================================
/*  ==  Auto Fill Fields / Auto Select Dates  ==
// ===================================================================================================================== */

jQuery(document).ready(function () {
  var url_params = new URLSearchParams(window.location.search);

  // Disable days selection  in calendar,  after  redirection  from  the "Search results page,  after  search  availability" 			// FixIn: 8.8.2.3.
  if ('On' != _wpbc.get_other_param('is_enabled_booking_search_results_days_select')) {
    if (url_params.has('wpbc_select_check_in') && url_params.has('wpbc_select_check_out') && url_params.has('wpbc_select_calendar_id')) {
      var select_dates_in_calendar_id = parseInt(url_params.get('wpbc_select_calendar_id'));

      // Fire on all booking dates loaded
      jQuery('body').on('wpbc_calendar_ajx__loaded_data', function (event, loaded_resource_id) {
        if (loaded_resource_id == select_dates_in_calendar_id) {
          wpbc_auto_select_dates_in_calendar(select_dates_in_calendar_id, url_params.get('wpbc_select_check_in'), url_params.get('wpbc_select_check_out'));
        }
      });
    }
  }
  if (url_params.has('wpbc_auto_fill')) {
    var wpbc_auto_fill_value = url_params.get('wpbc_auto_fill');

    // Convert back.     Some systems do not like symbol '~' in URL, so  we need to replace to  some other symbols
    wpbc_auto_fill_value = wpbc_auto_fill_value.replaceAll('_^_', '~');
    wpbc_auto_fill_booking_fields(wpbc_auto_fill_value);
  }
});

/**
 * Autofill / select booking form  fields by  values from  the GET request  parameter: ?wpbc_auto_fill=
 *
 * @param auto_fill_str
 */
function wpbc_auto_fill_booking_fields(auto_fill_str) {
  // FixIn: 10.0.0.48.

  if ('' == auto_fill_str) {
    return;
  }

  // console.log( 'WPBC_AUTO_FILL_BOOKING_FIELDS( AUTO_FILL_STR )', auto_fill_str);

  var fields_arr = wpbc_auto_fill_booking_fields__parse(auto_fill_str);
  for (let i = 0; i < fields_arr.length; i++) {
    jQuery('[name="' + fields_arr[i]['name'] + '"]').val(fields_arr[i]['value']);
  }
}

/**
 * Parse data from  get parameter:	?wpbc_auto_fill=visitors231^2~max_capacity231^2
 *
 * @param data_str      =   'visitors231^2~max_capacity231^2';
 * @returns {*}
 */
function wpbc_auto_fill_booking_fields__parse(data_str) {
  var filter_options_arr = [];
  var data_arr = data_str.split('~');
  for (var j = 0; j < data_arr.length; j++) {
    var my_form_field = data_arr[j].split('^');
    var filter_name = 'undefined' !== typeof my_form_field[0] ? my_form_field[0] : '';
    var filter_value = 'undefined' !== typeof my_form_field[1] ? my_form_field[1] : '';
    filter_options_arr.push({
      'name': filter_name,
      'value': filter_value
    });
  }
  return filter_options_arr;
}

/**
 * Parse data from  get parameter:	?search_get__custom_params=...
 *
 * @param data_str      =   'text^search_field__display_check_in^23.05.2024~text^search_field__display_check_out^26.05.2024~selectbox-one^search_quantity^2~selectbox-one^location^Spain~selectbox-one^max_capacity^2~selectbox-one^amenity^parking~checkbox^search_field__extend_search_days^5~submit^^Search~hidden^search_get__check_in_ymd^2024-05-23~hidden^search_get__check_out_ymd^2024-05-26~hidden^search_get__time^~hidden^search_get__quantity^2~hidden^search_get__extend^5~hidden^search_get__users_id^~hidden^search_get__custom_params^~';
 * @returns {*}
 */
function wpbc_auto_fill_search_fields__parse(data_str) {
  var filter_options_arr = [];
  var data_arr = data_str.split('~');
  for (var j = 0; j < data_arr.length; j++) {
    var my_form_field = data_arr[j].split('^');
    var filter_type = 'undefined' !== typeof my_form_field[0] ? my_form_field[0] : '';
    var filter_name = 'undefined' !== typeof my_form_field[1] ? my_form_field[1] : '';
    var filter_value = 'undefined' !== typeof my_form_field[2] ? my_form_field[2] : '';
    filter_options_arr.push({
      'type': filter_type,
      'name': filter_name,
      'value': filter_value
    });
  }
  return filter_options_arr;
}

// ---------------------------------------------------------------------------------------------------------------------
/*  ==  Auto Update number of months in calendars ON screen size changed  ==
// --------------------------------------------------------------------------------------------------------------------- */

/**
 * Auto Update Number of Months in Calendar, e.g.:  		if    ( WINDOW_WIDTH <= 782px )   >>> 	MONTHS_NUMBER = 1
 *   ELSE:  number of months defined in shortcode.
 * @param resource_id int
 *
 */
function wpbc_calendar__auto_update_months_number__on_resize(resource_id) {
  if (true === _wpbc.get_other_param('is_allow_several_months_on_mobile')) {
    return false;
  }
  var local__number_of_months = parseInt(_wpbc.calendar__get_param_value(resource_id, 'calendar_number_of_months'));
  if (local__number_of_months > 1) {
    if (jQuery(window).width() <= 782) {
      wpbc_calendar__update_months_number(resource_id, 1);
    } else {
      wpbc_calendar__update_months_number(resource_id, local__number_of_months);
    }
  }
}

/**
 * Auto Update Number of Months in   ALL   Calendars
 *
 */
function wpbc_calendars__auto_update_months_number() {
  var all_calendars_arr = _wpbc.calendars_all__get();

  // This LOOP "for in" is GOOD, because we check  here keys    'calendar_' === calendar_id.slice( 0, 9 )
  for (var calendar_id in all_calendars_arr) {
    if ('calendar_' === calendar_id.slice(0, 9)) {
      var resource_id = parseInt(calendar_id.slice(9)); //  'calendar_3' -> 3
      if (resource_id > 0) {
        wpbc_calendar__auto_update_months_number__on_resize(resource_id);
      }
    }
  }
}

/**
 * If browser window changed,  then  update number of months.
 */
jQuery(window).on('resize', function () {
  wpbc_calendars__auto_update_months_number();
});

/**
 * Auto update calendar number of months on initial page load
 */
jQuery(document).ready(function () {
  var closed_timer = setTimeout(function () {
    wpbc_calendars__auto_update_months_number();
  }, 100);
});

// ---------------------------------------------------------------------------------------------------------------------
/*  ==  Check: calendar_dates_start: "2026-01-01", calendar_dates_end: "2026-12-31" ==  // FixIn: 10.13.1.4.
// --------------------------------------------------------------------------------------------------------------------- */
/**
 * Get Start JS Date of starting dates in calendar, from the _wpbc object.
 *
 * @param integer resource_id - resource ID, e.g.: 1.
 */
function wpbc_calendar__get_dates_start(resource_id) {
  return wpbc_calendar__get_date_parameter(resource_id, 'calendar_dates_start');
}

/**
 * Get End JS Date of ending dates in calendar, from the _wpbc object.
 *
 * @param integer resource_id - resource ID, e.g.: 1.
 */
function wpbc_calendar__get_dates_end(resource_id) {
  return wpbc_calendar__get_date_parameter(resource_id, 'calendar_dates_end');
}

/**
 * Get validates date parameter.
 *
 * @param resource_id   - 1
 * @param parameter_str - 'calendar_dates_start' | 'calendar_dates_end' | ...
 */
function wpbc_calendar__get_date_parameter(resource_id, parameter_str) {
  var date_expected_ymd = _wpbc.calendar__get_param_value(resource_id, parameter_str);
  if (!date_expected_ymd) {
    return false; // '' | 0 | null | undefined  -> false.
  }
  if (-1 !== date_expected_ymd.indexOf('-')) {
    var date_expected_ymd_arr = date_expected_ymd.split('-'); // '2025-07-26' -> ['2025', '07', '26']

    if (date_expected_ymd_arr.length > 0) {
      var year = date_expected_ymd_arr.length > 0 ? parseInt(date_expected_ymd_arr[0]) : new Date().getFullYear(); // Year.
      var month = date_expected_ymd_arr.length > 1 ? parseInt(date_expected_ymd_arr[1]) - 1 : 0; // (month - 1) or 0 - Jan.
      var day = date_expected_ymd_arr.length > 2 ? parseInt(date_expected_ymd_arr[2]) : 1; // date or Otherwise 1st of month

      var date_js = new Date(year, month, day, 0, 0, 0, 0);
      return date_js;
    }
  }
  return false; // Fallback,  if we not parsed this parameter  'calendar_dates_start' = '2025-07-26',  for example because of 'calendar_dates_start' = 'sfsdf'.
}
/**
 * ====================================================================================================================
 *	includes/__js/cal/days_select_custom.js
 * ====================================================================================================================
 */

// FixIn: 9.8.9.2.

/**
 * Re-Init Calendar and Re-Render it.
 *
 * @param resource_id
 */
function wpbc_cal__re_init(resource_id) {
  // Remove CLASS  for ability to re-render and reinit calendar.
  jQuery('#calendar_booking' + resource_id).removeClass('hasDatepick');
  wpbc_calendar_show(resource_id);
}

/**
 * Re-Init previously  saved days selection  variables.
 *
 * @param resource_id
 */
function wpbc_cal_days_select__re_init(resource_id) {
  _wpbc.calendar__set_param_value(resource_id, 'saved_variable___days_select_initial', {
    'dynamic__days_min': _wpbc.calendar__get_param_value(resource_id, 'dynamic__days_min'),
    'dynamic__days_max': _wpbc.calendar__get_param_value(resource_id, 'dynamic__days_max'),
    'dynamic__days_specific': _wpbc.calendar__get_param_value(resource_id, 'dynamic__days_specific'),
    'dynamic__week_days__start': _wpbc.calendar__get_param_value(resource_id, 'dynamic__week_days__start'),
    'fixed__days_num': _wpbc.calendar__get_param_value(resource_id, 'fixed__days_num'),
    'fixed__week_days__start': _wpbc.calendar__get_param_value(resource_id, 'fixed__week_days__start')
  });
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Set Single Day selection - after page load
 *
 * @param resource_id		ID of booking resource
 */
function wpbc_cal_ready_days_select__single(resource_id) {
  // Re-define selection, only after page loaded with all init vars
  jQuery(document).ready(function () {
    // Wait 1 second, just to  be sure, that all init vars defined
    setTimeout(function () {
      wpbc_cal_days_select__single(resource_id);
    }, 1000);
  });
}

/**
 * Set Single Day selection
 * Can be run at any  time,  when  calendar defined - useful for console run.
 *
 * @param resource_id		ID of booking resource
 */
function wpbc_cal_days_select__single(resource_id) {
  _wpbc.calendar__set_parameters(resource_id, {
    'days_select_mode': 'single'
  });
  wpbc_cal_days_select__re_init(resource_id);
  wpbc_cal__re_init(resource_id);
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Set Multiple Days selection  - after page load
 *
 * @param resource_id		ID of booking resource
 */
function wpbc_cal_ready_days_select__multiple(resource_id) {
  // Re-define selection, only after page loaded with all init vars
  jQuery(document).ready(function () {
    // Wait 1 second, just to  be sure, that all init vars defined
    setTimeout(function () {
      wpbc_cal_days_select__multiple(resource_id);
    }, 1000);
  });
}

/**
 * Set Multiple Days selection
 * Can be run at any  time,  when  calendar defined - useful for console run.
 *
 * @param resource_id		ID of booking resource
 */
function wpbc_cal_days_select__multiple(resource_id) {
  _wpbc.calendar__set_parameters(resource_id, {
    'days_select_mode': 'multiple'
  });
  wpbc_cal_days_select__re_init(resource_id);
  wpbc_cal__re_init(resource_id);
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Set Fixed Days selection with  1 mouse click  - after page load
 *
 * @integer resource_id			- 1				   -- ID of booking resource (calendar) -
 * @integer days_number			- 3				   -- number of days to  select	-
 * @array week_days__start	- [-1] | [ 1, 5]   --  { -1 - Any | 0 - Su,  1 - Mo,  2 - Tu, 3 - We, 4 - Th, 5 - Fr, 6 - Sat }
 */
function wpbc_cal_ready_days_select__fixed(resource_id, days_number, week_days__start = [-1]) {
  // Re-define selection, only after page loaded with all init vars
  jQuery(document).ready(function () {
    // Wait 1 second, just to  be sure, that all init vars defined
    setTimeout(function () {
      wpbc_cal_days_select__fixed(resource_id, days_number, week_days__start);
    }, 1000);
  });
}

/**
 * Set Fixed Days selection with  1 mouse click
 * Can be run at any  time,  when  calendar defined - useful for console run.
 *
 * @integer resource_id			- 1				   -- ID of booking resource (calendar) -
 * @integer days_number			- 3				   -- number of days to  select	-
 * @array week_days__start	- [-1] | [ 1, 5]   --  { -1 - Any | 0 - Su,  1 - Mo,  2 - Tu, 3 - We, 4 - Th, 5 - Fr, 6 - Sat }
 */
function wpbc_cal_days_select__fixed(resource_id, days_number, week_days__start = [-1]) {
  _wpbc.calendar__set_parameters(resource_id, {
    'days_select_mode': 'fixed'
  });
  _wpbc.calendar__set_parameters(resource_id, {
    'fixed__days_num': parseInt(days_number)
  }); // Number of days selection with 1 mouse click
  _wpbc.calendar__set_parameters(resource_id, {
    'fixed__week_days__start': week_days__start
  }); // { -1 - Any | 0 - Su,  1 - Mo,  2 - Tu, 3 - We, 4 - Th, 5 - Fr, 6 - Sat }

  wpbc_cal_days_select__re_init(resource_id);
  wpbc_cal__re_init(resource_id);
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Set Range Days selection  with  2 mouse clicks  - after page load
 *
 * @integer resource_id			- 1				   		-- ID of booking resource (calendar)
 * @integer days_min			- 7				   		-- Min number of days to select
 * @integer days_max			- 30			   		-- Max number of days to select
 * @array days_specific			- [] | [7,14,21,28]		-- Restriction for Specific number of days selection
 * @array week_days__start		- [-1] | [ 1, 5]   		--  { -1 - Any | 0 - Su,  1 - Mo,  2 - Tu, 3 - We, 4 - Th, 5 - Fr, 6 - Sat }
 */
function wpbc_cal_ready_days_select__range(resource_id, days_min, days_max, days_specific = [], week_days__start = [-1]) {
  // Re-define selection, only after page loaded with all init vars
  jQuery(document).ready(function () {
    // Wait 1 second, just to  be sure, that all init vars defined
    setTimeout(function () {
      wpbc_cal_days_select__range(resource_id, days_min, days_max, days_specific, week_days__start);
    }, 1000);
  });
}

/**
 * Set Range Days selection  with  2 mouse clicks
 * Can be run at any  time,  when  calendar defined - useful for console run.
 *
 * @integer resource_id			- 1				   		-- ID of booking resource (calendar)
 * @integer days_min			- 7				   		-- Min number of days to select
 * @integer days_max			- 30			   		-- Max number of days to select
 * @array days_specific			- [] | [7,14,21,28]		-- Restriction for Specific number of days selection
 * @array week_days__start		- [-1] | [ 1, 5]   		--  { -1 - Any | 0 - Su,  1 - Mo,  2 - Tu, 3 - We, 4 - Th, 5 - Fr, 6 - Sat }
 */
function wpbc_cal_days_select__range(resource_id, days_min, days_max, days_specific = [], week_days__start = [-1]) {
  _wpbc.calendar__set_parameters(resource_id, {
    'days_select_mode': 'dynamic'
  });
  _wpbc.calendar__set_param_value(resource_id, 'dynamic__days_min', parseInt(days_min)); // Min. Number of days selection with 2 mouse clicks
  _wpbc.calendar__set_param_value(resource_id, 'dynamic__days_max', parseInt(days_max)); // Max. Number of days selection with 2 mouse clicks
  _wpbc.calendar__set_param_value(resource_id, 'dynamic__days_specific', days_specific); // Example [5,7]
  _wpbc.calendar__set_param_value(resource_id, 'dynamic__week_days__start', week_days__start); // { -1 - Any | 0 - Su,  1 - Mo,  2 - Tu, 3 - We, 4 - Th, 5 - Fr, 6 - Sat }

  wpbc_cal_days_select__re_init(resource_id);
  wpbc_cal__re_init(resource_id);
}

/**
 * ====================================================================================================================
 *	includes/__js/cal_ajx_load/wpbc_cal_ajx.js
 * ====================================================================================================================
 */

// ---------------------------------------------------------------------------------------------------------------------
//  A j a x    L o a d    C a l e n d a r    D a t a
// ---------------------------------------------------------------------------------------------------------------------

function wpbc_calendar__load_data__ajx(params) {
  // FixIn: 9.8.6.2.
  wpbc_calendar__loading__start(params['resource_id']);

  // Trigger event for calendar before loading Booking data,  but after showing Calendar.
  if (jQuery('#calendar_booking' + params['resource_id']).length > 0) {
    var target_elm = jQuery('body').trigger("wpbc_calendar_ajx__before_loaded_data", [params['resource_id']]);
    //jQuery( 'body' ).on( 'wpbc_calendar_ajx__before_loaded_data', function( event, resource_id ) { ... } );
  }
  if (wpbc_balancer__is_wait(params, 'wpbc_calendar__load_data__ajx')) {
    return false;
  }

  // FixIn: 9.8.6.2.
  wpbc_calendar__blur__stop(params['resource_id']);

  // -----------------------------------------------------------------------------------------------------------------
  // == Get start / end dates from  the Booking Calendar shortcode. ==
  // Example: [booking calendar_dates_start='2026-01-01' calendar_dates_end='2026-12-31'  resource_id=1]              // FixIn: 10.13.1.4.
  // -----------------------------------------------------------------------------------------------------------------
  if (false !== wpbc_calendar__get_dates_start(params['resource_id'])) {
    if (!params['dates_to_check']) {
      params['dates_to_check'] = [];
    }
    var dates_start = wpbc_calendar__get_dates_start(params['resource_id']); // E.g. - local__min_date = new Date( 2025, 0, 1 );
    if (false !== dates_start) {
      params['dates_to_check'][0] = wpbc__get__sql_class_date(dates_start);
    }
  }
  if (false !== wpbc_calendar__get_dates_end(params['resource_id'])) {
    if (!params['dates_to_check']) {
      params['dates_to_check'] = [];
    }
    var dates_end = wpbc_calendar__get_dates_end(params['resource_id']); // E.g. - local__min_date = new Date( 2025, 0, 1 );
    if (false !== dates_end) {
      params['dates_to_check'][1] = wpbc__get__sql_class_date(dates_end);
      if (!params['dates_to_check'][0]) {
        params['dates_to_check'][0] = wpbc__get__sql_class_date(new Date());
      }
    }
  }
  // -----------------------------------------------------------------------------------------------------------------

  // console.groupEnd(); console.time('resource_id_' + params['resource_id']);
  console.groupCollapsed('WPBC_AJX_CALENDAR_LOAD');
  console.log(' == Before Ajax Send - calendars_all__get() == ', _wpbc.calendars_all__get());
  if ('function' === typeof wpbc_hook__init_timeselector) {
    wpbc_hook__init_timeselector();
  }

  // Start Ajax
  jQuery.post(wpbc_url_ajax, {
    action: 'WPBC_AJX_CALENDAR_LOAD',
    wpbc_ajx_user_id: _wpbc.get_secure_param('user_id'),
    nonce: _wpbc.get_secure_param('nonce'),
    wpbc_ajx_locale: _wpbc.get_secure_param('locale'),
    calendar_request_params: params // Usually like: { 'resource_id': 1, 'max_days_count': 365 }
  },
  /**
   * S u c c e s s
   *
   * @param response_data		-	its object returned from  Ajax - class-live-search.php
   * @param textStatus		-	'success'
   * @param jqXHR				-	Object
   */
  function (response_data, textStatus, jqXHR) {
    // console.timeEnd('resource_id_' + response_data['resource_id']);
    console.log(' == Response WPBC_AJX_CALENDAR_LOAD == ', response_data);
    console.groupEnd();

    // FixIn: 9.8.6.2.
    var ajx_post_data__resource_id = wpbc_get_resource_id__from_ajx_post_data_url(this.data);
    wpbc_balancer__completed(ajx_post_data__resource_id, 'wpbc_calendar__load_data__ajx');

    // Probably Error
    if (typeof response_data !== 'object' || response_data === null) {
      var jq_node = wpbc_get_calendar__jq_node__for_messages(this.data);
      var message_type = 'info';
      if ('' === response_data) {
        response_data = 'The server responds with an empty string. The server probably stopped working unexpectedly. <br>Please check your <strong>error.log</strong> in your server configuration for relative errors.';
        message_type = 'warning';
      }

      // Show Message
      wpbc_front_end__show_message(response_data, {
        'type': message_type,
        'show_here': {
          'jq_node': jq_node,
          'where': 'after'
        },
        'is_append': true,
        'style': 'text-align:left;',
        'delay': 0
      });
      return;
    }

    // Show Calendar
    wpbc_calendar__loading__stop(response_data['resource_id']);

    // -------------------------------------------------------------------------------------------------
    // Bookings - Dates
    _wpbc.bookings_in_calendar__set_dates(response_data['resource_id'], response_data['ajx_data']['dates']);

    // Bookings - Child or only single booking resource in dates
    _wpbc.booking__set_param_value(response_data['resource_id'], 'resources_id_arr__in_dates', response_data['ajx_data']['resources_id_arr__in_dates']);

    // Aggregate booking resources,  if any ?
    _wpbc.booking__set_param_value(response_data['resource_id'], 'aggregate_resource_id_arr', response_data['ajx_data']['aggregate_resource_id_arr']);
    // -------------------------------------------------------------------------------------------------

    // Update calendar
    wpbc_calendar__update_look(response_data['resource_id']);
    if ('function' === typeof wpbc_hook__init_timeselector) {
      wpbc_hook__init_timeselector();
    }
    if ('undefined' !== typeof response_data['ajx_data']['ajx_after_action_message'] && '' != response_data['ajx_data']['ajx_after_action_message'].replace(/\n/g, "<br />")) {
      var jq_node = wpbc_get_calendar__jq_node__for_messages(this.data);

      // Show Message
      wpbc_front_end__show_message(response_data['ajx_data']['ajx_after_action_message'].replace(/\n/g, "<br />"), {
        'type': 'undefined' !== typeof response_data['ajx_data']['ajx_after_action_message_status'] ? response_data['ajx_data']['ajx_after_action_message_status'] : 'info',
        'show_here': {
          'jq_node': jq_node,
          'where': 'after'
        },
        'is_append': true,
        'style': 'text-align:left;',
        'delay': 10000
      });
    }

    // Trigger event that calendar has been		 // FixIn: 10.0.0.44.
    if (jQuery('#calendar_booking' + response_data['resource_id']).length > 0) {
      var target_elm = jQuery('body').trigger("wpbc_calendar_ajx__loaded_data", [response_data['resource_id']]);
      //jQuery( 'body' ).on( 'wpbc_calendar_ajx__loaded_data', function( event, resource_id ) { ... } );
    }

    //jQuery( '#ajax_respond' ).html( response_data );		// For ability to show response, add such DIV element to page
  }).fail(function (jqXHR, textStatus, errorThrown) {
    if (window.console && window.console.log) {
      console.log('Ajax_Error', jqXHR, textStatus, errorThrown);
    }
    var ajx_post_data__resource_id = wpbc_get_resource_id__from_ajx_post_data_url(this.data);
    wpbc_balancer__completed(ajx_post_data__resource_id, 'wpbc_calendar__load_data__ajx');

    // Get Content of Error Message
    var error_message = '<strong>' + 'Error!' + '</strong> ' + errorThrown;
    if (jqXHR.status) {
      error_message += ' (<b>' + jqXHR.status + '</b>)';
      if (403 == jqXHR.status) {
        error_message += '<br> Probably nonce for this page has been expired. Please <a href="javascript:void(0)" onclick="javascript:location.reload();">reload the page</a>.';
        error_message += '<br> Otherwise, please check this <a style="font-weight: 600;" href="https://wpbookingcalendar.com/faq/request-do-not-pass-security-check/?after_update=10.1.1">troubleshooting instruction</a>.<br>';
      }
    }
    var message_show_delay = 3000;
    if (jqXHR.responseText) {
      error_message += ' ' + jqXHR.responseText;
      message_show_delay = 10;
    }
    error_message = error_message.replace(/\n/g, "<br />");
    var jq_node = wpbc_get_calendar__jq_node__for_messages(this.data);

    /**
     * If we make fast clicking on different pages,
     * then under calendar will show error message with  empty  text, because ajax was not received.
     * To  not show such warnings we are set delay  in 3 seconds.  var message_show_delay = 3000;
     */
    var closed_timer = setTimeout(function () {
      // Show Message
      wpbc_front_end__show_message(error_message, {
        'type': 'error',
        'show_here': {
          'jq_node': jq_node,
          'where': 'after'
        },
        'is_append': true,
        'style': 'text-align:left;',
        'css_class': 'wpbc_fe_message_alt',
        'delay': 0
      });
    }, parseInt(message_show_delay));
  })
  // .done(   function ( data, textStatus, jqXHR ) {   if ( window.console && window.console.log ){ console.log( 'second success', data, textStatus, jqXHR ); }    })
  // .always( function ( data_jqXHR, textStatus, jqXHR_errorThrown ) {   if ( window.console && window.console.log ){ console.log( 'always finished', data_jqXHR, textStatus, jqXHR_errorThrown ); }     })
  ; // End Ajax
}

// ---------------------------------------------------------------------------------------------------------------------
// Support
// ---------------------------------------------------------------------------------------------------------------------

/**
 * Get Calendar jQuery node for showing messages during Ajax
 * This parameter:   calendar_request_params[resource_id]   parsed from this.data Ajax post  data
 *
 * @param ajx_post_data_url_params		 'action=WPBC_AJX_CALENDAR_LOAD...&calendar_request_params%5Bresource_id%5D=2&calendar_request_params%5Bbooking_hash%5D=&calendar_request_params'
 * @returns {string}	''#calendar_booking1'  |   '.booking_form_div' ...
 *
 * Example    var jq_node  = wpbc_get_calendar__jq_node__for_messages( this.data );
 */
function wpbc_get_calendar__jq_node__for_messages(ajx_post_data_url_params) {
  var jq_node = '.booking_form_div';
  var calendar_resource_id = wpbc_get_resource_id__from_ajx_post_data_url(ajx_post_data_url_params);
  if (calendar_resource_id > 0) {
    jq_node = '#calendar_booking' + calendar_resource_id;
  }
  return jq_node;
}

/**
 * Get resource ID from ajx post data url   usually  from  this.data  = 'action=WPBC_AJX_CALENDAR_LOAD...&calendar_request_params%5Bresource_id%5D=2&calendar_request_params%5Bbooking_hash%5D=&calendar_request_params'
 *
 * @param ajx_post_data_url_params		 'action=WPBC_AJX_CALENDAR_LOAD...&calendar_request_params%5Bresource_id%5D=2&calendar_request_params%5Bbooking_hash%5D=&calendar_request_params'
 * @returns {int}						 1 | 0  (if errror then  0)
 *
 * Example    var jq_node  = wpbc_get_calendar__jq_node__for_messages( this.data );
 */
function wpbc_get_resource_id__from_ajx_post_data_url(ajx_post_data_url_params) {
  // Get booking resource ID from Ajax Post Request  -> this.data = 'action=WPBC_AJX_CALENDAR_LOAD...&calendar_request_params%5Bresource_id%5D=2&calendar_request_params%5Bbooking_hash%5D=&calendar_request_params'
  var calendar_resource_id = wpbc_get_uri_param_by_name('calendar_request_params[resource_id]', ajx_post_data_url_params);
  if (null !== calendar_resource_id && '' !== calendar_resource_id) {
    calendar_resource_id = parseInt(calendar_resource_id);
    if (calendar_resource_id > 0) {
      return calendar_resource_id;
    }
  }
  return 0;
}

/**
 * Get parameter from URL  -  parse URL parameters,  like this: action=WPBC_AJX_CALENDAR_LOAD...&calendar_request_params%5Bresource_id%5D=2&calendar_request_params%5Bbooking_hash%5D=&calendar_request_params
 * @param name  parameter  name,  like 'calendar_request_params[resource_id]'
 * @param url	'parameter  string URL'
 * @returns {string|null}   parameter value
 *
 * Example: 		wpbc_get_uri_param_by_name( 'calendar_request_params[resource_id]', this.data );  -> '2'
 */
function wpbc_get_uri_param_by_name(name, url) {
  url = decodeURIComponent(url);
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * =====================================================================================================================
 *	includes/__js/front_end_messages/wpbc_fe_messages.js
 * =====================================================================================================================
 */

// ---------------------------------------------------------------------------------------------------------------------
// Show Messages at Front-Edn side
// ---------------------------------------------------------------------------------------------------------------------

/**
 * Show message in content
 *
 * @param message				Message HTML
 * @param params = {
 *								'type'     : 'warning',							// 'error' | 'warning' | 'info' | 'success'
 *								'show_here' : {
 *													'jq_node' : '',				// any jQuery node definition
 *													'where'   : 'inside'		// 'inside' | 'before' | 'after' | 'right' | 'left'
 *											  },
 *								'is_append': true,								// Apply  only if 	'where'   : 'inside'
 *								'style'    : 'text-align:left;',				// styles, if needed
 *							    'css_class': '',								// For example can  be: 'wpbc_fe_message_alt'
 *								'delay'    : 0,									// how many microsecond to  show,  if 0  then  show forever
 *								'if_visible_not_show': false					// if true,  then do not show message,  if previos message was not hided (not apply if 'where'   : 'inside' )
 *				};
 * Examples:
 * 			var html_id = wpbc_front_end__show_message( 'You can test days selection in calendar', {} );
 *
 *			var notice_message_id = wpbc_front_end__show_message( _wpbc.get_message( 'message_check_required' ), { 'type': 'warning', 'delay': 10000, 'if_visible_not_show': true,
 *																  'show_here': {'where': 'right', 'jq_node': el,} } );
 *
 *			wpbc_front_end__show_message( response_data[ 'ajx_data' ][ 'ajx_after_action_message' ].replace( /\n/g, "<br />" ),
 *											{   'type'     : ( 'undefined' !== typeof( response_data[ 'ajx_data' ][ 'ajx_after_action_message_status' ] ) )
 *															  ? response_data[ 'ajx_data' ][ 'ajx_after_action_message_status' ] : 'info',
 *												'show_here': {'jq_node': jq_node, 'where': 'after'},
 *												'css_class':'wpbc_fe_message_alt',
 *												'delay'    : 10000
 *											} );
 *
 *
 * @returns string  - HTML ID		or 0 if not showing during this time.
 */
function wpbc_front_end__show_message(message, params = {}) {
  var params_default = {
    'type': 'warning',
    // 'error' | 'warning' | 'info' | 'success'
    'show_here': {
      'jq_node': '',
      // any jQuery node definition
      'where': 'inside' // 'inside' | 'before' | 'after' | 'right' | 'left'
    },
    'is_append': true,
    // Apply  only if 	'where'   : 'inside'
    'style': 'text-align:left;',
    // styles, if needed
    'css_class': '',
    // For example can  be: 'wpbc_fe_message_alt'
    'delay': 0,
    // how many microsecond to  show,  if 0  then  show forever
    'if_visible_not_show': false,
    // if true,  then do not show message,  if previos message was not hided (not apply if 'where'   : 'inside' )
    'is_scroll': true // is scroll  to  this element
  };
  for (var p_key in params) {
    params_default[p_key] = params[p_key];
  }
  params = params_default;
  var unique_div_id = new Date();
  unique_div_id = 'wpbc_notice_' + unique_div_id.getTime();
  params['css_class'] += ' wpbc_fe_message';
  if (params['type'] == 'error') {
    params['css_class'] += ' wpbc_fe_message_error';
    message = '<i class="menu_icon icon-1x wpbc_icn_report_gmailerrorred"></i>' + message;
  }
  if (params['type'] == 'warning') {
    params['css_class'] += ' wpbc_fe_message_warning';
    message = '<i class="menu_icon icon-1x wpbc_icn_warning"></i>' + message;
  }
  if (params['type'] == 'info') {
    params['css_class'] += ' wpbc_fe_message_info';
  }
  if (params['type'] == 'success') {
    params['css_class'] += ' wpbc_fe_message_success';
    message = '<i class="menu_icon icon-1x wpbc_icn_done_outline"></i>' + message;
  }
  var scroll_to_element = '<div id="' + unique_div_id + '_scroll" style="display:none;"></div>';
  message = '<div id="' + unique_div_id + '" class="wpbc_front_end__message ' + params['css_class'] + '" style="' + params['style'] + '">' + message + '</div>';
  var jq_el_message = false;
  var is_show_message = true;
  if ('inside' === params['show_here']['where']) {
    if (params['is_append']) {
      jQuery(params['show_here']['jq_node']).append(scroll_to_element);
      jQuery(params['show_here']['jq_node']).append(message);
    } else {
      jQuery(params['show_here']['jq_node']).html(scroll_to_element + message);
    }
  } else if ('before' === params['show_here']['where']) {
    jq_el_message = jQuery(params['show_here']['jq_node']).siblings('[id^="wpbc_notice_"]');
    if (params['if_visible_not_show'] && jq_el_message.is(':visible')) {
      is_show_message = false;
      unique_div_id = jQuery(jq_el_message.get(0)).attr('id');
    }
    if (is_show_message) {
      jQuery(params['show_here']['jq_node']).before(scroll_to_element);
      jQuery(params['show_here']['jq_node']).before(message);
    }
  } else if ('after' === params['show_here']['where']) {
    jq_el_message = jQuery(params['show_here']['jq_node']).nextAll('[id^="wpbc_notice_"]');
    if (params['if_visible_not_show'] && jq_el_message.is(':visible')) {
      is_show_message = false;
      unique_div_id = jQuery(jq_el_message.get(0)).attr('id');
    }
    if (is_show_message) {
      jQuery(params['show_here']['jq_node']).before(scroll_to_element); // We need to  set  here before(for handy scroll)
      jQuery(params['show_here']['jq_node']).after(message);
    }
  } else if ('right' === params['show_here']['where']) {
    jq_el_message = jQuery(params['show_here']['jq_node']).nextAll('.wpbc_front_end__message_container_right').find('[id^="wpbc_notice_"]');
    if (params['if_visible_not_show'] && jq_el_message.is(':visible')) {
      is_show_message = false;
      unique_div_id = jQuery(jq_el_message.get(0)).attr('id');
    }
    if (is_show_message) {
      jQuery(params['show_here']['jq_node']).before(scroll_to_element); // We need to  set  here before(for handy scroll)
      jQuery(params['show_here']['jq_node']).after('<div class="wpbc_front_end__message_container_right">' + message + '</div>');
    }
  } else if ('left' === params['show_here']['where']) {
    jq_el_message = jQuery(params['show_here']['jq_node']).siblings('.wpbc_front_end__message_container_left').find('[id^="wpbc_notice_"]');
    if (params['if_visible_not_show'] && jq_el_message.is(':visible')) {
      is_show_message = false;
      unique_div_id = jQuery(jq_el_message.get(0)).attr('id');
    }
    if (is_show_message) {
      jQuery(params['show_here']['jq_node']).before(scroll_to_element); // We need to  set  here before(for handy scroll)
      jQuery(params['show_here']['jq_node']).before('<div class="wpbc_front_end__message_container_left">' + message + '</div>');
    }
  }
  if (is_show_message && parseInt(params['delay']) > 0) {
    var closed_timer = setTimeout(function () {
      jQuery('#' + unique_div_id).fadeOut(1500);
    }, parseInt(params['delay']));
    var closed_timer2 = setTimeout(function () {
      jQuery('#' + unique_div_id).trigger('hide');
    }, parseInt(params['delay']) + 1501);
  }

  // Check  if showed message in some hidden parent section and show it. But it must  be lower than '.wpbc_container'
  var parent_els = jQuery('#' + unique_div_id).parents().map(function () {
    if (!jQuery(this).is('visible') && jQuery('.wpbc_container').has(this)) {
      jQuery(this).show();
    }
  });
  if (params['is_scroll']) {
    wpbc_do_scroll('#' + unique_div_id + '_scroll');
  }
  return unique_div_id;
}

/**
 * Error message. 	Preset of parameters for real message function.
 *
 * @param el		- any jQuery node definition
 * @param message	- Message HTML
 * @returns string  - HTML ID		or 0 if not showing during this time.
 */
function wpbc_front_end__show_message__error(jq_node, message) {
  var notice_message_id = wpbc_front_end__show_message(message, {
    'type': 'error',
    'delay': 10000,
    'if_visible_not_show': true,
    'show_here': {
      'where': 'right',
      'jq_node': jq_node
    }
  });
  return notice_message_id;
}

/**
 * Error message UNDER element. 	Preset of parameters for real message function.
 *
 * @param el		- any jQuery node definition
 * @param message	- Message HTML
 * @returns string  - HTML ID		or 0 if not showing during this time.
 */
function wpbc_front_end__show_message__error_under_element(jq_node, message, message_delay) {
  if ('undefined' === typeof message_delay) {
    message_delay = 0;
  }
  var notice_message_id = wpbc_front_end__show_message(message, {
    'type': 'error',
    'delay': message_delay,
    'if_visible_not_show': true,
    'show_here': {
      'where': 'after',
      'jq_node': jq_node
    }
  });
  return notice_message_id;
}

/**
 * Error message UNDER element. 	Preset of parameters for real message function.
 *
 * @param el		- any jQuery node definition
 * @param message	- Message HTML
 * @returns string  - HTML ID		or 0 if not showing during this time.
 */
function wpbc_front_end__show_message__error_above_element(jq_node, message, message_delay) {
  if ('undefined' === typeof message_delay) {
    message_delay = 10000;
  }
  var notice_message_id = wpbc_front_end__show_message(message, {
    'type': 'error',
    'delay': message_delay,
    'if_visible_not_show': true,
    'show_here': {
      'where': 'before',
      'jq_node': jq_node
    }
  });
  return notice_message_id;
}

/**
 * Warning message. 	Preset of parameters for real message function.
 *
 * @param el		- any jQuery node definition
 * @param message	- Message HTML
 * @returns string  - HTML ID		or 0 if not showing during this time.
 */
function wpbc_front_end__show_message__warning(jq_node, message) {
  var notice_message_id = wpbc_front_end__show_message(message, {
    'type': 'warning',
    'delay': 10000,
    'if_visible_not_show': true,
    'show_here': {
      'where': 'right',
      'jq_node': jq_node
    }
  });
  wpbc_highlight_error_on_form_field(jq_node);
  return notice_message_id;
}

/**
 * Warning message UNDER element. 	Preset of parameters for real message function.
 *
 * @param el		- any jQuery node definition
 * @param message	- Message HTML
 * @returns string  - HTML ID		or 0 if not showing during this time.
 */
function wpbc_front_end__show_message__warning_under_element(jq_node, message) {
  var notice_message_id = wpbc_front_end__show_message(message, {
    'type': 'warning',
    'delay': 10000,
    'if_visible_not_show': true,
    'show_here': {
      'where': 'after',
      'jq_node': jq_node
    }
  });
  return notice_message_id;
}

/**
 * Warning message ABOVE element. 	Preset of parameters for real message function.
 *
 * @param el		- any jQuery node definition
 * @param message	- Message HTML
 * @returns string  - HTML ID		or 0 if not showing during this time.
 */
function wpbc_front_end__show_message__warning_above_element(jq_node, message) {
  var notice_message_id = wpbc_front_end__show_message(message, {
    'type': 'warning',
    'delay': 10000,
    'if_visible_not_show': true,
    'show_here': {
      'where': 'before',
      'jq_node': jq_node
    }
  });
  return notice_message_id;
}

/**
 * Highlight Error in specific field
 *
 * @param jq_node					string or jQuery element,  where scroll  to
 */
function wpbc_highlight_error_on_form_field(jq_node) {
  if (!jQuery(jq_node).length) {
    return;
  }
  if (!jQuery(jq_node).is(':input')) {
    // Situation with  checkboxes or radio  buttons
    var jq_node_arr = jQuery(jq_node).find(':input');
    if (!jq_node_arr.length) {
      return;
    }
    jq_node = jq_node_arr.get(0);
  }
  var params = {};
  params['delay'] = 10000;
  if (!jQuery(jq_node).hasClass('wpbc_form_field_error')) {
    jQuery(jq_node).addClass('wpbc_form_field_error');
    if (parseInt(params['delay']) > 0) {
      var closed_timer = setTimeout(function () {
        jQuery(jq_node).removeClass('wpbc_form_field_error');
      }, parseInt(params['delay']));
    }
  }
}

/**
 * Scroll to specific element
 *
 * @param jq_node					string or jQuery element,  where scroll  to
 * @param extra_shift_offset		int shift offset from  jq_node
 */
function wpbc_do_scroll(jq_node, extra_shift_offset = 0) {
  if (!jQuery(jq_node).length) {
    return;
  }
  var targetOffset = jQuery(jq_node).offset().top;
  if (targetOffset <= 0) {
    if (0 != jQuery(jq_node).nextAll(':visible').length) {
      targetOffset = jQuery(jq_node).nextAll(':visible').first().offset().top;
    } else if (0 != jQuery(jq_node).parent().nextAll(':visible').length) {
      targetOffset = jQuery(jq_node).parent().nextAll(':visible').first().offset().top;
    }
  }
  if (jQuery('#wpadminbar').length > 0) {
    targetOffset = targetOffset - 50 - 50;
  } else {
    targetOffset = targetOffset - 20 - 50;
  }
  targetOffset += extra_shift_offset;

  // Scroll only  if we did not scroll before
  if (!jQuery('html,body').is(':animated')) {
    jQuery('html,body').animate({
      scrollTop: targetOffset
    }, 500);
  }
}

// FixIn: 10.2.0.4.
/**
 * Define Popovers for Timelines in WP Booking Calendar
 *
 * @returns {string|boolean}
 */
function wpbc_define_tippy_popover() {
  if ('function' !== typeof wpbc_tippy) {
    console.log('WPBC Error. wpbc_tippy was not defined.');
    return false;
  }
  wpbc_tippy('.popover_bottom.popover_click', {
    content(reference) {
      var popover_title = reference.getAttribute('data-original-title');
      var popover_content = reference.getAttribute('data-content');
      return '<div class="popover popover_tippy">' + '<div class="popover-close"><a href="javascript:void(0)" onclick="javascript:this.parentElement.parentElement.parentElement.parentElement.parentElement._tippy.hide();" >&times;</a></div>' + popover_content + '</div>';
    },
    allowHTML: true,
    trigger: 'manual',
    interactive: true,
    hideOnClick: false,
    interactiveBorder: 10,
    maxWidth: 550,
    theme: 'wpbc-tippy-popover',
    placement: 'bottom-start',
    touch: ['hold', 500]
  });
  jQuery('.popover_bottom.popover_click').on('click', function () {
    if (this._tippy.state.isVisible) {
      this._tippy.hide();
    } else {
      this._tippy.show();
    }
  });
  wpbc_define_hide_tippy_on_scroll();
}
function wpbc_define_hide_tippy_on_scroll() {
  jQuery('.flex_tl__scrolling_section2,.flex_tl__scrolling_sections').on('scroll', function (event) {
    if ('function' === typeof wpbc_tippy) {
      wpbc_tippy.hideAll();
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX2Rpc3QvYWxsL19vdXQvd3BiY19hbGwuanMiLCJuYW1lcyI6WyJ3cGJjX3RyaW0iLCJzdHJpbmdfdG9fdHJpbSIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJ0cmltIiwid3BiY19pbl9hcnJheSIsImFycmF5X2hlcmUiLCJwX3ZhbCIsImkiLCJsIiwibGVuZ3RoIiwiaXNfcGxheWdyb3VuZF9vcmlnaW4iLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzX3BzZXVkb19saW5rIiwiYSIsImdldEF0dHJpYnV0ZSIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJmaXhfdGFyZ2V0IiwiaGFzQXR0cmlidXRlIiwidGFyZ2V0IiwiaW5pdF9maXgiLCJub2RlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xvc2VzdCIsInNjaGVkdWxlX2luaXQiLCJzZXRUaW1lb3V0IiwicmVhZHlTdGF0ZSIsIndwYmNfY2xvbmVfb2JqIiwib2JqIiwiSlNPTiIsInBhcnNlIiwic3RyaW5naWZ5IiwiX3dwYmMiLCIkIiwicF9zZWN1cmUiLCJzZWN1cml0eV9vYmoiLCJ1c2VyX2lkIiwibm9uY2UiLCJsb2NhbGUiLCJzZXRfc2VjdXJlX3BhcmFtIiwicGFyYW1fa2V5IiwicGFyYW1fdmFsIiwiZ2V0X3NlY3VyZV9wYXJhbSIsInBfY2FsZW5kYXJzIiwiY2FsZW5kYXJzX29iaiIsImNhbGVuZGFyX19pc19kZWZpbmVkIiwicmVzb3VyY2VfaWQiLCJjYWxlbmRhcl9faW5pdCIsImNhbGVuZGFyX19pc19wcm9wX2ludCIsInByb3BlcnR5X25hbWUiLCJwX2NhbGVuZGFyX2ludF9wcm9wZXJ0aWVzIiwiaXNfaW5jbHVkZSIsImluY2x1ZGVzIiwiY2FsZW5kYXJzX2FsbF9fc2V0IiwiY2FsZW5kYXJzX2FsbF9fZ2V0IiwiY2FsZW5kYXJfX2dldF9wYXJhbWV0ZXJzIiwiY2FsZW5kYXJfX3NldF9wYXJhbWV0ZXJzIiwiY2FsZW5kYXJfcHJvcGVydHlfb2JqIiwiaXNfY29tcGxldGVfb3ZlcndyaXRlIiwicHJvcF9uYW1lIiwiY2FsZW5kYXJfX3NldF9wYXJhbV92YWx1ZSIsInByb3BfdmFsdWUiLCJjYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlIiwicGFyc2VJbnQiLCJwX2Jvb2tpbmdzIiwiYm9va2luZ3Nfb2JqIiwiYm9va2luZ3NfaW5fY2FsZW5kYXJfX2lzX2RlZmluZWQiLCJib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0IiwiYm9va2luZ3NfaW5fY2FsZW5kYXJfX3NldCIsImNhbGVuZGFyX29iaiIsImJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXRfZGF0ZXMiLCJib29raW5nc19pbl9jYWxlbmRhcl9fc2V0X2RhdGVzIiwiZGF0ZXNfb2JqIiwiYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSIsInNxbF9jbGFzc19kYXkiLCJib29raW5nX19zZXRfcGFyYW1fdmFsdWUiLCJib29raW5nX19nZXRfcGFyYW1fdmFsdWUiLCJib29raW5nc19pbl9jYWxlbmRhcnNfX3NldF9hbGwiLCJib29raW5nc19pbl9jYWxlbmRhcnNfX2dldF9hbGwiLCJwX3NlYXNvbnMiLCJzZWFzb25zX29iaiIsInNlYXNvbnNfX3NldCIsInNlYXNvbl9uYW1lX2tleSIsInB1c2giLCJzZWFzb25zX19nZXRfZm9yX2RhdGUiLCJwX290aGVyIiwib3RoZXJfb2JqIiwic2V0X290aGVyX3BhcmFtIiwiZ2V0X290aGVyX3BhcmFtIiwiZ2V0X290aGVyX3BhcmFtX19hbGwiLCJwX21lc3NhZ2VzIiwibWVzc2FnZXNfb2JqIiwic2V0X21lc3NhZ2UiLCJnZXRfbWVzc2FnZSIsImdldF9tZXNzYWdlc19fYWxsIiwialF1ZXJ5IiwicF9iYWxhbmNlciIsImJhbGFuY2VyX29iaiIsImJhbGFuY2VyX19zZXRfbWF4X3RocmVhZHMiLCJtYXhfdGhyZWFkcyIsImJhbGFuY2VyX19pc19kZWZpbmVkIiwiYmFsYW5jZXJfX2luaXQiLCJmdW5jdGlvbl9uYW1lIiwicGFyYW1zIiwiYmFsYW5jZV9vYmoiLCJiYWxhbmNlcl9faXNfYWxyZWFkeV9ydW4iLCJiYWxhbmNlcl9faXNfYWxyZWFkeV93YWl0IiwiYmFsYW5jZXJfX2Nhbl9pX3J1biIsImJhbGFuY2VyX19hZGRfdG9fX3J1biIsImJhbGFuY2VyX19hZGRfdG9fX3dhaXQiLCJiYWxhbmNlcl9fcmVtb3ZlX2Zyb21fX3dhaXRfbGlzdCIsInJlbW92ZWRfZWwiLCJzcGxpY2UiLCJwb3AiLCJmaWx0ZXIiLCJ2IiwiYmFsYW5jZXJfX3JlbW92ZV9mcm9tX19ydW5fbGlzdCIsImJhbGFuY2VyX19ydW5fbmV4dCIsImJhbGFuY2VyX19ydW4iLCJ3cGJjX2NhbGVuZGFyX19sb2FkX2RhdGFfX2FqeCIsIndwYmNfYmFsYW5jZXJfX2lzX3dhaXQiLCJiYWxhbmNlcl9zdGF0dXMiLCJ3cGJjX2JhbGFuY2VyX19jb21wbGV0ZWQiLCJ3cGJjX2NhbGVuZGFyX3Nob3ciLCJoYXNDbGFzcyIsImxvY2FsX19pc19yYW5nZV9zZWxlY3QiLCJsb2NhbF9fbXVsdGlfZGF5c19zZWxlY3RfbnVtIiwibG9jYWxfX21pbl9kYXRlIiwiRGF0ZSIsImxvY2FsX19tYXhfZGF0ZSIsIndwYmNfY2FsZW5kYXJfX2dldF9kYXRlc19zdGFydCIsIndwYmNfY2FsZW5kYXJfX2dldF9kYXRlc19lbmQiLCJsb2NhbF9fc3RhcnRfd2Vla2RheSIsImxvY2FsX19udW1iZXJfb2ZfbW9udGhzIiwidGV4dCIsImRhdGVwaWNrIiwiYmVmb3JlU2hvd0RheSIsImpzX2RhdGUiLCJ3cGJjX19jYWxlbmRhcl9fYXBwbHlfY3NzX3RvX2RheXMiLCJvblNlbGVjdCIsInN0cmluZ19kYXRlcyIsImpzX2RhdGVzX2FyciIsIndwYmNfX2NhbGVuZGFyX19vbl9zZWxlY3RfZGF5cyIsIm9uSG92ZXIiLCJzdHJpbmdfZGF0ZSIsIndwYmNfX2NhbGVuZGFyX19vbl9ob3Zlcl9kYXlzIiwib25DaGFuZ2VNb250aFllYXIiLCJ5ZWFyIiwicmVhbF9tb250aCIsImpzX2RhdGVfXzFzdF9kYXlfaW5fbW9udGgiLCJzaG93T24iLCJudW1iZXJPZk1vbnRocyIsInN0ZXBNb250aHMiLCJwcmV2VGV4dCIsIm5leHRUZXh0IiwiZGF0ZUZvcm1hdCIsImNoYW5nZU1vbnRoIiwiY2hhbmdlWWVhciIsIm1pbkRhdGUiLCJtYXhEYXRlIiwic2hvd1N0YXR1cyIsIm11bHRpU2VwYXJhdG9yIiwiY2xvc2VBdFRvcCIsImZpcnN0RGF5IiwiZ290b0N1cnJlbnQiLCJoaWRlSWZOb1ByZXZOZXh0IiwibXVsdGlTZWxlY3QiLCJyYW5nZVNlbGVjdCIsInVzZVRoZW1lUm9sbGVyIiwid3BiY19jYWxlbmRhcnNfX2NsZWFyX2RheXNfaGlnaGxpZ2h0aW5nIiwic3RhcnRfYmtfbW9udGgiLCJ3cGJjX2NhbGVuZGFyX19zY3JvbGxfdG8iLCJkYXRlIiwiY2FsZW5kYXJfcGFyYW1zX2FyciIsImRhdGVwaWNrX3RoaXMiLCJ0b2RheV9kYXRlIiwiY2xhc3NfZGF5Iiwid3BiY19fZ2V0X190ZF9jbGFzc19kYXRlIiwid3BiY19fZ2V0X19zcWxfY2xhc3NfZGF0ZSIsInNlbGVjdGVkX2RhdGVzX3NxbCIsIndwYmNfZ2V0X19zZWxlY3RlZF9kYXRlc19zcWxfX2FzX2FyciIsImRhdGVfYm9va2luZ3Nfb2JqIiwiY3NzX2NsYXNzZXNfX2Zvcl9kYXRlIiwiZ2V0RGF5IiwiaXNfZGF5X3NlbGVjdGFibGUiLCJzZWFzb25fbmFtZXNfYXJyIiwic2Vhc29uX2tleSIsInRvU3RyaW5nIiwicmVwbGFjZSIsImlzX3NldF9wZW5kaW5nX2RheXNfc2VsZWN0YWJsZSIsImRhdGVfYm9va2luZ19vYmoiLCJ0b29sdGlwX3RleHQiLCJ3cGJjX3NldF90b29sdGlwX19fZm9yX19jYWxlbmRhcl9kYXRlIiwiaXNfdW5zZWxlY3RhYmxlX2NhbGVuZGFyIiwiaXNfYm9va2luZ19mb3JtX2V4aXN0IiwiY3NzX29mX2NhbGVuZGFyIiwiY3NzIiwid3BiY19fY2FsZW5kYXJfX2RvX2RheXNfaGlnaGxpZ2h0X19icyIsIndwYmNfY2FsZW5kYXJfX3Vuc2VsZWN0X2FsbF9kYXRlcyIsInJlbW92ZSIsInZhbCIsIndwYmNfX2NhbGVuZGFyX19kb19kYXlzX3NlbGVjdF9fYnMiLCJ3cGJjX2Rpc2FibGVfdGltZV9maWVsZHNfaW5fYm9va2luZ19mb3JtIiwibW91c2VfY2xpY2tlZF9kYXRlcyIsImFsbF9zZWxlY3RlZF9kYXRlc19hcnIiLCJ0cmlnZ2VyIiwicmVhZHkiLCJvbiIsImV2ZW50IiwiY2xvc2VkX3RpbWVyIiwibWlkZGxlX2RheXNfb3BhY2l0eSIsIm5vdCIsInRpbWVfZmllbGRzX29ial9hcnIiLCJ3cGJjX2dldF9fdGltZV9maWVsZHNfX2luX2Jvb2tpbmdfZm9ybV9fYXNfYXJyIiwic2VsZWN0ZWRfZGF0ZXNfYXJyIiwiY2hpbGRfcmVzb3VyY2VzX2FyciIsInNxbF9kYXRlIiwiY2hpbGRfcmVzb3VyY2VfaWQiLCJtZXJnZWRfc2Vjb25kcyIsInRpbWVfZmllbGRzX29iaiIsImlzX2ludGVyc2VjdCIsImlzX2NoZWNrX2luIiwidG9kYXlfdGltZV9fcmVhbCIsInRvZGF5X3RpbWVfX3NoaWZ0IiwiZmllbGRfa2V5IiwiZGlzYWJsZWQiLCJpc190aW1lX2luX3Bhc3QiLCJ3cGJjX2NoZWNrX2lzX3RpbWVfaW5fcGFzdCIsIm5hbWUiLCJob3dfbWFueV9yZXNvdXJjZXNfaW50ZXJzZWN0ZWQiLCJyZXNfa2V5IiwiYm9va2VkX3RpbWVfc2xvdHMiLCJ0aW1lc19hc19zZWNvbmRzIiwid3BiY19pc19pbnRlcnNlY3RfX3JhbmdlX3RpbWVfaW50ZXJ2YWwiLCJ3cGJjX2lzX2ludGVyc2VjdF9fb25lX3RpbWVfaW50ZXJ2YWwiLCJ3cGJjX19odG1sX190aW1lX2ZpZWxkX29wdGlvbnNfX3NldF9kaXNhYmxlZCIsImpzX2N1cnJlbnRfdGltZV90b19jaGVjayIsInNxbF9kYXRlX2FyciIsInNwbGl0Iiwic3FsX2RhdGVfX21pZG5pZ2h0Iiwic3FsX2RhdGVfX21pZG5pZ2h0X21pbGlzZWNvbmRzIiwiZ2V0VGltZSIsInRpbWVzX2FzX3NlY29uZHNfY2hlY2siLCJ0aW1lX0EiLCJ0aW1lX2ludGVydmFsX0IiLCJqIiwidGltZV9pbnRlcnZhbF9BIiwid3BiY19pbnRlcnZhbHNfX2lzX2ludGVyc2VjdGVkIiwidGltZV9maWVsZHNfYXJyIiwiY3RmIiwidGltZV9maWVsZCIsInRpbWVfb3B0aW9uIiwianF1ZXJ5X29wdGlvbiIsInZhbHVlX29wdGlvbl9zZWNvbmRzX2FyciIsInN0YXJ0X2VuZF90aW1lc19hcnIiLCJ0aW1lX2luX3NlY29uZHMiLCJhdHRyIiwicHJvcCIsImFkZENsYXNzIiwicGFyZW50IiwiZmluZCIsInJlbW92ZUNsYXNzIiwid3BiY19pc190aGlzX3RpbWVzbG90X19mdWxsX2RheV9ib29rZWQiLCJ0aW1lc2xvdF9hcnJfaW5fc2Vjb25kcyIsIm4iLCJzb3J0Iiwid3BiY19nZXRfX3NlbGVjdGVkX3RpbWVfZmllbGRzX19pbl9ib29raW5nX2Zvcm1fX2FzX2FyciIsImlzX29ubHlfc2VsZWN0ZWRfdGltZSIsInRleHRfdGltZV9maWVsZHNfYXJyIiwidGYiLCJ0ZXh0X2pxdWVyeSIsInRpbWVfX2hfbV9fYXJyIiwidGV4dF90aW1lX2luX3NlY29uZHMiLCJ0ZXh0X3RpbWVzX2FzX3NlY29uZHMiLCJ3cGJjX2NhbGVuZGFyX19nZXRfaW5zdCIsIl9nZXRJbnN0IiwiZ2V0IiwiaW5zdCIsInN0YXlPcGVuIiwiZGF0ZXMiLCJfdXBkYXRlRGF0ZXBpY2siLCJtb250aCIsImN1cnNvckRhdGUiLCJzZXRGdWxsWWVhciIsInNldE1vbnRoIiwic2V0RGF0ZSIsImRyYXdNb250aCIsImdldE1vbnRoIiwiZHJhd1llYXIiLCJnZXRGdWxsWWVhciIsIl9ub3RpZnlDaGFuZ2UiLCJfYWRqdXN0SW5zdERhdGUiLCJfc2hvd0RhdGUiLCJ3cGJjX2lzX3RoaXNfZGF5X3NlbGVjdGFibGUiLCJ3cGJjX2lzX3RoaXNfZGF5X2Ftb25nX3NlbGVjdGVkX2RheXMiLCJqc19kYXRlX3RvX2NoZWNrIiwiZGF0ZV9pbmRleCIsImdldERhdGUiLCJ3cGJjX19nZXRfX2pzX2RhdGUiLCJzcWxfY2xhc3NfZGF0ZSIsInNxbF9jbGFzc19kYXRlX2FyciIsImRhdGVfanMiLCJzZXRIb3VycyIsInNldE1pbnV0ZXMiLCJzZXRTZWNvbmRzIiwic2V0TWlsbGlzZWNvbmRzIiwidGRfY2xhc3NfZGF5Iiwid3BiY19fZ2V0X19kYXRlX3BhcmFtc19fZnJvbV9zdHJpbmdfZGF0ZSIsInNlcGFyYXRvciIsImRhdGVfYXJyIiwiZGF0ZV9vYmoiLCJ3cGJjX2NhbGVuZGFyX19sb2FkaW5nX19zdGFydCIsIm5leHQiLCJhZnRlciIsIndwYmNfY2FsZW5kYXJfX2JsdXJfX3N0YXJ0Iiwid3BiY19jYWxlbmRhcl9fbG9hZGluZ19fc3RvcCIsIndwYmNfY2FsZW5kYXJfX2JsdXJfX3N0b3AiLCJ3cGJjX2NhbGVuZGFyX191cGRhdGVfbG9vayIsIndwYmNfY2FsZW5kYXJfX3VwZGF0ZV9tb250aHNfbnVtYmVyIiwibW9udGhzX251bWJlciIsInNldHRpbmdzIiwid3BiY19fY2FsZW5kYXJfX2NoYW5nZV9za2luIiwic2VsZWN0ZWRfc2tpbl91cmwiLCJzdHlsZXNoZWV0IiwiZ2V0RWxlbWVudEJ5SWQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJoZWFkSUQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNzc05vZGUiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInNldEF0dHJpYnV0ZSIsInJlbCIsIm1lZGlhIiwiYXBwZW5kQ2hpbGQiLCJ3cGJjX19jc3NfX2NoYW5nZV9za2luIiwic3R5bGVzaGVldF9pZCIsIndwYmNfaW50ZXJ2YWxzX19tZXJnZV9pbmVyc2VjdGVkIiwiaW50ZXJ2YWxzIiwibWVyZ2VkIiwiYiIsIm1lcmdlZEludGVydmFsIiwiaW50ZXJ2YWwiLCJNYXRoIiwibWF4IiwiaW50ZXJ2YWxfQSIsImludGVydmFsX0IiLCJpc19pbnRlcnNlY3RlZCIsIm1pbiIsIndwYmNfZ2V0X2Fic19jbG9zZXN0X3ZhbHVlX2luX2FyciIsIm15VmFsdWUiLCJteUFycmF5IiwiZGlmZiIsImFicyIsImNsb3NldFZhbHVlIiwidGRfY2xhc3MiLCJ0ZF9lbCIsInVuZGVmaW5lZCIsIl90aXBweSIsIndwYmNfdGlwcHkiLCJjb250ZW50IiwicmVmZXJlbmNlIiwicG9wb3Zlcl9jb250ZW50IiwiYWxsb3dIVE1MIiwiaW50ZXJhY3RpdmUiLCJoaWRlT25DbGljayIsImludGVyYWN0aXZlQm9yZGVyIiwibWF4V2lkdGgiLCJ0aGVtZSIsInBsYWNlbWVudCIsImRlbGF5IiwiaWdub3JlQXR0cmlidXRlcyIsInRvdWNoIiwiYXBwZW5kVG8iLCJib2R5Iiwid3BiY19kYXRlc19fZGF5c19iZXR3ZWVuIiwiZGF0ZTEiLCJkYXRlMiIsIk9ORV9EQVkiLCJkYXRlMV9tcyIsImRhdGUyX21zIiwiZGlmZmVyZW5jZV9tcyIsInJvdW5kIiwid3BiY19kYXRlc19faXNfY29uc2VjdXRpdmVfZGF0ZXNfYXJyX3JhbmdlIiwic3FsX2RhdGVzX2FyciIsInByZXZpb3NfZGF0ZSIsImN1cnJlbnRfZGF0ZSIsIndwYmNfYXV0b19zZWxlY3RfZGF0ZXNfaW5fY2FsZW5kYXIiLCJjaGVja19pbl95bWQiLCJjaGVja19vdXRfeW1kIiwiY29uc29sZSIsImxvZyIsImRhdGVzX3RvX3NlbGVjdF9hcnIiLCJ3cGJjX2NhbF9kYXlzX3NlbGVjdF9fbXVsdGlwbGUiLCJjaGVja19pbl9qcyIsInRkX2NlbGwiLCJ3cGJjX2dldF9jbGlja2VkX3RkIiwiaWQiLCJfc2VsZWN0RGF5IiwiY2hlY2tfb3V0X2pzIiwidGRfY2VsbF9vdXQiLCJkYXRlc19hcnIiLCJ3cGJjX2dldF9zZWxlY3Rpb25fZGF0ZXNfanNfc3RyX2Fycl9fZnJvbV9hcnIiLCJ3cGJjX2dldF9zZWxlY3Rpb25fZGF0ZXNfanNfc3RyX2Fycl9fZnJvbV9jaGVja19pbl9vdXQiLCJkYXRlc19qcyIsInN0cl9kYXRlIiwiZGF5X2F2YWlsYWJpbGl0eSIsImNoZWNrX291dF9kYXRlIiwiY2hlY2tvdXRfdGltZXN0YW1wIiwiY2FsZW5kYXJfaHRtbF9pZCIsIm9yaWdpbmFsX2FycmF5IiwiYmtfZGlzdGluY3RfZGF0ZXMiLCJjaGVja19pbl9kYXRlIiwib3JpZ2luYWxfY2hlY2tfaW5fZGF0ZSIsIl9yZXN0cmljdE1pbk1heCIsIl9kZXRlcm1pbmVEYXRlIiwiZGF0ZV9vdXQiLCJvcmlnaW5hbF9jaGVja19vdXRfZGF0ZSIsIm1ld0RhdGUiLCJvbmVfZGF0ZV9zdHIiLCJkIiwidXJsX3BhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsInNlYXJjaCIsImhhcyIsInNlbGVjdF9kYXRlc19pbl9jYWxlbmRhcl9pZCIsImxvYWRlZF9yZXNvdXJjZV9pZCIsIndwYmNfYXV0b19maWxsX3ZhbHVlIiwicmVwbGFjZUFsbCIsIndwYmNfYXV0b19maWxsX2Jvb2tpbmdfZmllbGRzIiwiYXV0b19maWxsX3N0ciIsImZpZWxkc19hcnIiLCJ3cGJjX2F1dG9fZmlsbF9ib29raW5nX2ZpZWxkc19fcGFyc2UiLCJkYXRhX3N0ciIsImZpbHRlcl9vcHRpb25zX2FyciIsImRhdGFfYXJyIiwibXlfZm9ybV9maWVsZCIsImZpbHRlcl9uYW1lIiwiZmlsdGVyX3ZhbHVlIiwid3BiY19hdXRvX2ZpbGxfc2VhcmNoX2ZpZWxkc19fcGFyc2UiLCJmaWx0ZXJfdHlwZSIsIndwYmNfY2FsZW5kYXJfX2F1dG9fdXBkYXRlX21vbnRoc19udW1iZXJfX29uX3Jlc2l6ZSIsIndpZHRoIiwid3BiY19jYWxlbmRhcnNfX2F1dG9fdXBkYXRlX21vbnRoc19udW1iZXIiLCJhbGxfY2FsZW5kYXJzX2FyciIsImNhbGVuZGFyX2lkIiwic2xpY2UiLCJ3cGJjX2NhbGVuZGFyX19nZXRfZGF0ZV9wYXJhbWV0ZXIiLCJwYXJhbWV0ZXJfc3RyIiwiZGF0ZV9leHBlY3RlZF95bWQiLCJkYXRlX2V4cGVjdGVkX3ltZF9hcnIiLCJkYXkiLCJ3cGJjX2NhbF9fcmVfaW5pdCIsIndwYmNfY2FsX2RheXNfc2VsZWN0X19yZV9pbml0Iiwid3BiY19jYWxfcmVhZHlfZGF5c19zZWxlY3RfX3NpbmdsZSIsIndwYmNfY2FsX2RheXNfc2VsZWN0X19zaW5nbGUiLCJ3cGJjX2NhbF9yZWFkeV9kYXlzX3NlbGVjdF9fbXVsdGlwbGUiLCJ3cGJjX2NhbF9yZWFkeV9kYXlzX3NlbGVjdF9fZml4ZWQiLCJkYXlzX251bWJlciIsIndlZWtfZGF5c19fc3RhcnQiLCJ3cGJjX2NhbF9kYXlzX3NlbGVjdF9fZml4ZWQiLCJ3cGJjX2NhbF9yZWFkeV9kYXlzX3NlbGVjdF9fcmFuZ2UiLCJkYXlzX21pbiIsImRheXNfbWF4IiwiZGF5c19zcGVjaWZpYyIsIndwYmNfY2FsX2RheXNfc2VsZWN0X19yYW5nZSIsInRhcmdldF9lbG0iLCJkYXRlc19zdGFydCIsImRhdGVzX2VuZCIsImdyb3VwQ29sbGFwc2VkIiwid3BiY19ob29rX19pbml0X3RpbWVzZWxlY3RvciIsInBvc3QiLCJ3cGJjX3VybF9hamF4IiwiYWN0aW9uIiwid3BiY19hanhfdXNlcl9pZCIsIndwYmNfYWp4X2xvY2FsZSIsImNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zIiwicmVzcG9uc2VfZGF0YSIsInRleHRTdGF0dXMiLCJqcVhIUiIsImdyb3VwRW5kIiwiYWp4X3Bvc3RfZGF0YV9fcmVzb3VyY2VfaWQiLCJ3cGJjX2dldF9yZXNvdXJjZV9pZF9fZnJvbV9hanhfcG9zdF9kYXRhX3VybCIsImRhdGEiLCJqcV9ub2RlIiwid3BiY19nZXRfY2FsZW5kYXJfX2pxX25vZGVfX2Zvcl9tZXNzYWdlcyIsIm1lc3NhZ2VfdHlwZSIsIndwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2UiLCJmYWlsIiwiZXJyb3JUaHJvd24iLCJlcnJvcl9tZXNzYWdlIiwic3RhdHVzIiwibWVzc2FnZV9zaG93X2RlbGF5IiwicmVzcG9uc2VUZXh0IiwiYWp4X3Bvc3RfZGF0YV91cmxfcGFyYW1zIiwiY2FsZW5kYXJfcmVzb3VyY2VfaWQiLCJ3cGJjX2dldF91cmlfcGFyYW1fYnlfbmFtZSIsInVybCIsImRlY29kZVVSSUNvbXBvbmVudCIsInJlZ2V4IiwiUmVnRXhwIiwicmVzdWx0cyIsImV4ZWMiLCJtZXNzYWdlIiwicGFyYW1zX2RlZmF1bHQiLCJwX2tleSIsInVuaXF1ZV9kaXZfaWQiLCJzY3JvbGxfdG9fZWxlbWVudCIsImpxX2VsX21lc3NhZ2UiLCJpc19zaG93X21lc3NhZ2UiLCJhcHBlbmQiLCJodG1sIiwic2libGluZ3MiLCJpcyIsImJlZm9yZSIsIm5leHRBbGwiLCJmYWRlT3V0IiwiY2xvc2VkX3RpbWVyMiIsInBhcmVudF9lbHMiLCJwYXJlbnRzIiwibWFwIiwic2hvdyIsIndwYmNfZG9fc2Nyb2xsIiwid3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZV9fZXJyb3IiLCJub3RpY2VfbWVzc2FnZV9pZCIsIndwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX2Vycm9yX3VuZGVyX2VsZW1lbnQiLCJtZXNzYWdlX2RlbGF5Iiwid3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZV9fZXJyb3JfYWJvdmVfZWxlbWVudCIsIndwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX3dhcm5pbmciLCJ3cGJjX2hpZ2hsaWdodF9lcnJvcl9vbl9mb3JtX2ZpZWxkIiwid3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZV9fd2FybmluZ191bmRlcl9lbGVtZW50Iiwid3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZV9fd2FybmluZ19hYm92ZV9lbGVtZW50IiwianFfbm9kZV9hcnIiLCJleHRyYV9zaGlmdF9vZmZzZXQiLCJ0YXJnZXRPZmZzZXQiLCJvZmZzZXQiLCJ0b3AiLCJmaXJzdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ3cGJjX2RlZmluZV90aXBweV9wb3BvdmVyIiwicG9wb3Zlcl90aXRsZSIsInN0YXRlIiwiaXNWaXNpYmxlIiwiaGlkZSIsIndwYmNfZGVmaW5lX2hpZGVfdGlwcHlfb25fc2Nyb2xsIiwiaGlkZUFsbCJdLCJzb3VyY2VzIjpbIndwYmNfdXRpbHMuanMiLCJ3cGJjLmpzIiwiYWp4X2xvYWRfYmFsYW5jZXIuanMiLCJ3cGJjX2NhbC5qcyIsImRheXNfc2VsZWN0X2N1c3RvbS5qcyIsIndwYmNfY2FsX2FqeC5qcyIsIndwYmNfZmVfbWVzc2FnZXMuanMiLCJ0aW1lbGluZV9wb3BvdmVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICogSmF2YVNjcmlwdCBVdGlsIEZ1bmN0aW9uc1x0XHQuLi9pbmNsdWRlcy9fX2pzL3V0aWxzL3dwYmNfdXRpbHMuanNcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFRyaW0gIHN0cmluZ3MgYW5kIGFycmF5IGpvaW5lZCB3aXRoICAoLClcclxuICpcclxuICogQHBhcmFtIHN0cmluZ190b190cmltICAgc3RyaW5nIC8gYXJyYXlcclxuICogQHJldHVybnMgc3RyaW5nXHJcbiAqL1xyXG5mdW5jdGlvbiB3cGJjX3RyaW0oc3RyaW5nX3RvX3RyaW0pIHtcclxuXHJcblx0aWYgKCBBcnJheS5pc0FycmF5KCBzdHJpbmdfdG9fdHJpbSApICkge1xyXG5cdFx0c3RyaW5nX3RvX3RyaW0gPSBzdHJpbmdfdG9fdHJpbS5qb2luKCAnLCcgKTtcclxuXHR9XHJcblxyXG5cdGlmICggJ3N0cmluZycgPT0gdHlwZW9mIChzdHJpbmdfdG9fdHJpbSkgKSB7XHJcblx0XHRzdHJpbmdfdG9fdHJpbSA9IHN0cmluZ190b190cmltLnRyaW0oKTtcclxuXHR9XHJcblxyXG5cdHJldHVybiBzdHJpbmdfdG9fdHJpbTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIGlmIGVsZW1lbnQgaW4gYXJyYXlcclxuICpcclxuICogQHBhcmFtIGFycmF5X2hlcmVcdFx0YXJyYXlcclxuICogQHBhcmFtIHBfdmFsXHRcdFx0XHRlbGVtZW50IHRvICBjaGVja1xyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfaW5fYXJyYXkoYXJyYXlfaGVyZSwgcF92YWwpIHtcclxuXHRmb3IgKCB2YXIgaSA9IDAsIGwgPSBhcnJheV9oZXJlLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcclxuXHRcdGlmICggYXJyYXlfaGVyZVtpXSA9PSBwX3ZhbCApIHtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0fVxyXG5cdHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByZXZlbnQgb3BlbmluZyBibGFuayB3aW5kb3dzIG9uIFdvcmRQcmVzcyBwbGF5Z3JvdW5kIGZvciBwc2V1ZG8gbGlua3MgbGlrZSB0aGlzOiA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+IG9yICMgdG8gc3RheSBpbiB0aGUgc2FtZSB0YWIuXHJcbiAqL1xyXG4oZnVuY3Rpb24gKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0ZnVuY3Rpb24gaXNfcGxheWdyb3VuZF9vcmlnaW4oKSB7XHJcblx0XHRyZXR1cm4gbG9jYXRpb24ub3JpZ2luID09PSAnaHR0cHM6Ly9wbGF5Z3JvdW5kLndvcmRwcmVzcy5uZXQnO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaXNfcHNldWRvX2xpbmsoYSkge1xyXG5cdFx0aWYgKCAhYSB8fCAhYS5nZXRBdHRyaWJ1dGUgKSByZXR1cm4gdHJ1ZTtcclxuXHRcdHZhciBocmVmID0gKGEuZ2V0QXR0cmlidXRlKCAnaHJlZicgKSB8fCAnJykudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQhaHJlZiB8fFxyXG5cdFx0XHRocmVmID09PSAnIycgfHxcclxuXHRcdFx0aHJlZi5pbmRleE9mKCAnIycgKSA9PT0gMCB8fFxyXG5cdFx0XHRocmVmLmluZGV4T2YoICdqYXZhc2NyaXB0OicgKSA9PT0gMCB8fFxyXG5cdFx0XHRocmVmLmluZGV4T2YoICdtYWlsdG86JyApID09PSAwIHx8XHJcblx0XHRcdGhyZWYuaW5kZXhPZiggJ3RlbDonICkgPT09IDBcclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBmaXhfdGFyZ2V0KGEpIHtcclxuXHRcdGlmICggISBhICkgcmV0dXJuO1xyXG5cdFx0aWYgKCBpc19wc2V1ZG9fbGluayggYSApIHx8IGEuaGFzQXR0cmlidXRlKCAnZGF0YS13cC1uby1ibGFuaycgKSApIHtcclxuXHRcdFx0YS50YXJnZXQgPSAnX3NlbGYnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaW5pdF9maXgoKSB7XHJcblx0XHQvLyBPcHRpb25hbDogY2xlYW4gdXAgY3VycmVudCBET00gKGhhcm1sZXNz4oCUYWZmZWN0cyBvbmx5IHBzZXVkby9kYXRhbWFya2VkIGxpbmtzKS5cclxuXHRcdHZhciBub2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoICdhW2hyZWZdJyApO1xyXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKysgKSBmaXhfdGFyZ2V0KCBub2Rlc1tpXSApO1xyXG5cclxuXHRcdC8vIExhdGUgYnViYmxlLXBoYXNlIGxpc3RlbmVycyAocnVuIGFmdGVyIFBsYXlncm91bmQncyBoYW5kbGVycylcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdHZhciBhID0gZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCA/IGUudGFyZ2V0LmNsb3Nlc3QoICdhW2hyZWZdJyApIDogbnVsbDtcclxuXHRcdFx0aWYgKCBhICkgZml4X3RhcmdldCggYSApO1xyXG5cdFx0fSwgZmFsc2UgKTtcclxuXHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCAnZm9jdXNpbicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdHZhciBhID0gZS50YXJnZXQgJiYgZS50YXJnZXQuY2xvc2VzdCA/IGUudGFyZ2V0LmNsb3Nlc3QoICdhW2hyZWZdJyApIDogbnVsbDtcclxuXHRcdFx0aWYgKCBhICkgZml4X3RhcmdldCggYSApO1xyXG5cdFx0fSApO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gc2NoZWR1bGVfaW5pdCgpIHtcclxuXHRcdGlmICggIWlzX3BsYXlncm91bmRfb3JpZ2luKCkgKSByZXR1cm47XHJcblx0XHRzZXRUaW1lb3V0KCBpbml0X2ZpeCwgMTAwMCApOyAvLyBlbnN1cmUgd2UgYXR0YWNoIGFmdGVyIFBsYXlncm91bmQncyBzY3JpcHQuXHJcblx0fVxyXG5cclxuXHRpZiAoIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJyApIHtcclxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoICdET01Db250ZW50TG9hZGVkJywgc2NoZWR1bGVfaW5pdCApO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRzY2hlZHVsZV9pbml0KCk7XHJcblx0fVxyXG59KSgpOyIsIlwidXNlIHN0cmljdFwiO1xyXG4vKipcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqXHRpbmNsdWRlcy9fX2pzL3dwYmMvd3BiYy5qc1xyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICovXHJcblxyXG4vKipcclxuICogRGVlcCBDbG9uZSBvZiBvYmplY3Qgb3IgYXJyYXlcclxuICpcclxuICogQHBhcmFtIG9ialxyXG4gKiBAcmV0dXJucyB7YW55fVxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19jbG9uZV9vYmooIG9iaiApe1xyXG5cclxuXHRyZXR1cm4gSlNPTi5wYXJzZSggSlNPTi5zdHJpbmdpZnkoIG9iaiApICk7XHJcbn1cclxuXHJcblxyXG5cclxuLyoqXHJcbiAqIE1haW4gX3dwYmMgSlMgb2JqZWN0XHJcbiAqL1xyXG5cclxudmFyIF93cGJjID0gKGZ1bmN0aW9uICggb2JqLCAkKSB7XHJcblxyXG5cdC8vIFNlY3VyZSBwYXJhbWV0ZXJzIGZvciBBamF4XHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHR2YXIgcF9zZWN1cmUgPSBvYmouc2VjdXJpdHlfb2JqID0gb2JqLnNlY3VyaXR5X29iaiB8fCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXJfaWQ6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5vbmNlICA6ICcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2NhbGUgOiAnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9O1xyXG5cdG9iai5zZXRfc2VjdXJlX3BhcmFtID0gZnVuY3Rpb24gKCBwYXJhbV9rZXksIHBhcmFtX3ZhbCApIHtcclxuXHRcdHBfc2VjdXJlWyBwYXJhbV9rZXkgXSA9IHBhcmFtX3ZhbDtcclxuXHR9O1xyXG5cclxuXHRvYmouZ2V0X3NlY3VyZV9wYXJhbSA9IGZ1bmN0aW9uICggcGFyYW1fa2V5ICkge1xyXG5cdFx0cmV0dXJuIHBfc2VjdXJlWyBwYXJhbV9rZXkgXTtcclxuXHR9O1xyXG5cclxuXHJcblx0Ly8gQ2FsZW5kYXJzIFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdHZhciBwX2NhbGVuZGFycyA9IG9iai5jYWxlbmRhcnNfb2JqID0gb2JqLmNhbGVuZGFyc19vYmogfHwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzb3J0ICAgICAgICAgICAgOiBcImJvb2tpbmdfaWRcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc29ydF90eXBlICAgICAgIDogXCJERVNDXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHBhZ2VfbnVtICAgICAgICA6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHBhZ2VfaXRlbXNfY291bnQ6IDEwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjcmVhdGVfZGF0ZSAgICAgOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBrZXl3b3JkICAgICAgICAgOiBcIlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzb3VyY2UgICAgICAgICAgOiBcIlwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogIENoZWNrIGlmIGNhbGVuZGFyIGZvciBzcGVjaWZpYyBib29raW5nIHJlc291cmNlIGRlZmluZWQgICA6OiAgIHRydWUgfCBmYWxzZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdG9iai5jYWxlbmRhcl9faXNfZGVmaW5lZCA9IGZ1bmN0aW9uICggcmVzb3VyY2VfaWQgKSB7XHJcblxyXG5cdFx0cmV0dXJuICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mKCBwX2NhbGVuZGFyc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdICkgKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiAgQ3JlYXRlIENhbGVuZGFyIGluaXRpYWxpemluZ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFxyXG5cdCAqL1xyXG5cdG9iai5jYWxlbmRhcl9faW5pdCA9IGZ1bmN0aW9uICggcmVzb3VyY2VfaWQgKSB7XHJcblxyXG5cdFx0cF9jYWxlbmRhcnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXSA9IHt9O1xyXG5cdFx0cF9jYWxlbmRhcnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgJ2lkJyBdID0gcmVzb3VyY2VfaWQ7XHJcblx0XHRwX2NhbGVuZGFyc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyAncGVuZGluZ19kYXlzX3NlbGVjdGFibGUnIF0gPSBmYWxzZTtcclxuXHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgIGlmIHRoZSB0eXBlIG9mIHRoaXMgcHJvcGVydHkgIGlzIElOVFxyXG5cdCAqIEBwYXJhbSBwcm9wZXJ0eV9uYW1lXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0b2JqLmNhbGVuZGFyX19pc19wcm9wX2ludCA9IGZ1bmN0aW9uICggcHJvcGVydHlfbmFtZSApIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpeEluOiA5LjkuMC4yOS5cclxuXHJcblx0XHR2YXIgcF9jYWxlbmRhcl9pbnRfcHJvcGVydGllcyA9IFsnZHluYW1pY19fZGF5c19taW4nLCAnZHluYW1pY19fZGF5c19tYXgnLCAnZml4ZWRfX2RheXNfbnVtJ107XHJcblxyXG5cdFx0dmFyIGlzX2luY2x1ZGUgPSBwX2NhbGVuZGFyX2ludF9wcm9wZXJ0aWVzLmluY2x1ZGVzKCBwcm9wZXJ0eV9uYW1lICk7XHJcblxyXG5cdFx0cmV0dXJuIGlzX2luY2x1ZGU7XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBwYXJhbXMgZm9yIGFsbCAgY2FsZW5kYXJzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2FsZW5kYXJzX29ialx0XHRPYmplY3QgeyBjYWxlbmRhcl8xOiB7fSB9XHJcblx0ICogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNhbGVuZGFyXzM6IHt9LCAuLi4gfVxyXG5cdCAqL1xyXG5cdG9iai5jYWxlbmRhcnNfYWxsX19zZXQgPSBmdW5jdGlvbiAoIGNhbGVuZGFyc19vYmogKSB7XHJcblx0XHRwX2NhbGVuZGFycyA9IGNhbGVuZGFyc19vYmo7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGJvb2tpbmdzIGluIGFsbCBjYWxlbmRhcnNcclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtvYmplY3R8e319XHJcblx0ICovXHJcblx0b2JqLmNhbGVuZGFyc19hbGxfX2dldCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBwX2NhbGVuZGFycztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgY2FsZW5kYXIgb2JqZWN0ICAgOjogICB7IGlkOiAxLCDigKYgfVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFx0XHRcdFx0ICAnMidcclxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fGJvb2xlYW59XHRcdFx0XHRcdHsgaWQ6IDIgLOKApiB9XHJcblx0ICovXHJcblx0b2JqLmNhbGVuZGFyX19nZXRfcGFyYW1ldGVycyA9IGZ1bmN0aW9uICggcmVzb3VyY2VfaWQgKSB7XHJcblxyXG5cdFx0aWYgKCBvYmouY2FsZW5kYXJfX2lzX2RlZmluZWQoIHJlc291cmNlX2lkICkgKXtcclxuXHJcblx0XHRcdHJldHVybiBwX2NhbGVuZGFyc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBjYWxlbmRhciBvYmplY3QgICA6OiAgIHsgZGF0ZXM6ICBPYmplY3QgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKYgfVxyXG5cdCAqXHJcblx0ICogaWYgY2FsZW5kYXIgb2JqZWN0ICBub3QgZGVmaW5lZCwgdGhlbiAgaXQncyB3aWxsIGJlIGRlZmluZWQgYW5kIElEIHNldFxyXG5cdCAqIGlmIGNhbGVuZGFyIGV4aXN0LCB0aGVuICBzeXN0ZW0gc2V0ICBhcyBuZXcgb3Igb3ZlcndyaXRlIG9ubHkgcHJvcGVydGllcyBmcm9tIGNhbGVuZGFyX3Byb3BlcnR5X29iaiBwYXJhbWV0ZXIsICBidXQgb3RoZXIgcHJvcGVydGllcyB3aWxsIGJlIGV4aXN0ZWQgYW5kIG5vdCBvdmVyd3JpdGUsIGxpa2UgJ2lkJ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFx0XHRcdFx0ICAnMidcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2FsZW5kYXJfcHJvcGVydHlfb2JqXHRcdFx0XHRcdCAgeyAgZGF0ZXM6ICBPYmplY3QgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKYgfSAgfVxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNfY29tcGxldGVfb3ZlcndyaXRlXHRcdCAgaWYgJ3RydWUnIChkZWZhdWx0OiAnZmFsc2UnKSwgIHRoZW4gIG9ubHkgb3ZlcndyaXRlIG9yIGFkZCAgbmV3IHByb3BlcnRpZXMgaW4gIGNhbGVuZGFyX3Byb3BlcnR5X29ialxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqXHJcblx0ICogRXhhbXBsZXM6XHJcblx0ICpcclxuXHQgKiBDb21tb24gdXNhZ2UgaW4gUEhQOlxyXG5cdCAqICAgXHRcdFx0ZWNobyBcIiAgX3dwYmMuY2FsZW5kYXJfX3NldCggIFwiIC5pbnR2YWwoICRyZXNvdXJjZV9pZCApIC4gXCIsIHsgJ2RhdGVzJzogXCIgLiB3cF9qc29uX2VuY29kZSggJGF2YWlsYWJpbGl0eV9wZXJfZGF5c19hcnIgKSAuIFwiIH0gKTtcIjtcclxuXHQgKi9cclxuXHRvYmouY2FsZW5kYXJfX3NldF9wYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCByZXNvdXJjZV9pZCwgY2FsZW5kYXJfcHJvcGVydHlfb2JqLCBpc19jb21wbGV0ZV9vdmVyd3JpdGUgPSBmYWxzZSAgKSB7XHJcblxyXG5cdFx0aWYgKCAoIW9iai5jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSkgfHwgKHRydWUgPT09IGlzX2NvbXBsZXRlX292ZXJ3cml0ZSkgKXtcclxuXHRcdFx0b2JqLmNhbGVuZGFyX19pbml0KCByZXNvdXJjZV9pZCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIHZhciBwcm9wX25hbWUgaW4gY2FsZW5kYXJfcHJvcGVydHlfb2JqICl7XHJcblxyXG5cdFx0XHRwX2NhbGVuZGFyc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyBwcm9wX25hbWUgXSA9IGNhbGVuZGFyX3Byb3BlcnR5X29ialsgcHJvcF9uYW1lIF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF07XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2V0IHByb3BlcnR5ICB0byAgY2FsZW5kYXJcclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcdFwiMVwiXHJcblx0ICogQHBhcmFtIHByb3BfbmFtZVx0XHRuYW1lIG9mIHByb3BlcnR5XHJcblx0ICogQHBhcmFtIHByb3BfdmFsdWVcdHZhbHVlIG9mIHByb3BlcnR5XHJcblx0ICogQHJldHVybnMgeyp9XHRcdFx0Y2FsZW5kYXIgb2JqZWN0XHJcblx0ICovXHJcblx0b2JqLmNhbGVuZGFyX19zZXRfcGFyYW1fdmFsdWUgPSBmdW5jdGlvbiAoIHJlc291cmNlX2lkLCBwcm9wX25hbWUsIHByb3BfdmFsdWUgKSB7XHJcblxyXG5cdFx0aWYgKCAoIW9iai5jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSkgKXtcclxuXHRcdFx0b2JqLmNhbGVuZGFyX19pbml0KCByZXNvdXJjZV9pZCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdID0gcHJvcF92YWx1ZTtcclxuXHJcblx0XHRyZXR1cm4gcF9jYWxlbmRhcnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiAgR2V0IGNhbGVuZGFyIHByb3BlcnR5IHZhbHVlICAgXHQ6OiAgIG1peGVkIHwgbnVsbFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSAgcmVzb3VyY2VfaWRcdFx0JzEnXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHByb3BfbmFtZVx0XHRcdCdzZWxlY3Rpb25fbW9kZSdcclxuXHQgKiBAcmV0dXJucyB7KnxudWxsfVx0XHRcdFx0XHRtaXhlZCB8IG51bGxcclxuXHQgKi9cclxuXHRvYmouY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSA9IGZ1bmN0aW9uKCByZXNvdXJjZV9pZCwgcHJvcF9uYW1lICl7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQgICAoIG9iai5jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSApXHJcblx0XHRcdCYmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAoIHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdICkgKVxyXG5cdFx0KXtcclxuXHRcdFx0Ly8gRml4SW46IDkuOS4wLjI5LlxyXG5cdFx0XHRpZiAoIG9iai5jYWxlbmRhcl9faXNfcHJvcF9pbnQoIHByb3BfbmFtZSApICl7XHJcblx0XHRcdFx0cF9jYWxlbmRhcnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgcHJvcF9uYW1lIF0gPSBwYXJzZUludCggcF9jYWxlbmRhcnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgcHJvcF9uYW1lIF0gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gIHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1x0XHQvLyBJZiBzb21lIHByb3BlcnR5IG5vdCBkZWZpbmVkLCB0aGVuIG51bGw7XHJcblx0fTtcclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblx0Ly8gQm9va2luZ3MgXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0dmFyIHBfYm9va2luZ3MgPSBvYmouYm9va2luZ3Nfb2JqID0gb2JqLmJvb2tpbmdzX29iaiB8fCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY2FsZW5kYXJfMTogT2JqZWN0IHtcclxuIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9cdFx0XHRcdFx0XHQgICBpZDogICAgIDFcclxuIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9cdFx0XHRcdFx0XHQgLCBkYXRlczogIE9iamVjdCB7IFwiMjAyMy0wNy0yMVwiOiB74oCmfSwgXCIyMDIzLTA3LTIyXCI6IHvigKZ9LCBcIjIwMjMtMDctMjNcIjoge+KApn0sIOKAplxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogIENoZWNrIGlmIGJvb2tpbmdzIGZvciBzcGVjaWZpYyBib29raW5nIHJlc291cmNlIGRlZmluZWQgICA6OiAgIHRydWUgfCBmYWxzZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9faXNfZGVmaW5lZCA9IGZ1bmN0aW9uICggcmVzb3VyY2VfaWQgKSB7XHJcblxyXG5cdFx0cmV0dXJuICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mKCBwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF0gKSApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBib29raW5ncyBjYWxlbmRhciBvYmplY3QgICA6OiAgIHsgaWQ6IDEgLCBkYXRlczogIE9iamVjdCB7IFwiMjAyMy0wNy0yMVwiOiB74oCmfSwgXCIyMDIzLTA3LTIyXCI6IHvigKZ9LCBcIjIwMjMtMDctMjNcIjoge+KApn0sIOKApiB9XHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xpbnR9IHJlc291cmNlX2lkXHRcdFx0XHQgICcyJ1xyXG5cdCAqIEByZXR1cm5zIHtvYmplY3R8Ym9vbGVhbn1cdFx0XHRcdFx0eyBpZDogMiAsIGRhdGVzOiAgT2JqZWN0IHsgXCIyMDIzLTA3LTIxXCI6IHvigKZ9LCBcIjIwMjMtMDctMjJcIjoge+KApn0sIFwiMjAyMy0wNy0yM1wiOiB74oCmfSwg4oCmIH1cclxuXHQgKi9cclxuXHRvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldCA9IGZ1bmN0aW9uKCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRcdGlmICggb2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyX19pc19kZWZpbmVkKCByZXNvdXJjZV9pZCApICl7XHJcblxyXG5cdFx0XHRyZXR1cm4gcF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBib29raW5ncyBjYWxlbmRhciBvYmplY3QgICA6OiAgIHsgZGF0ZXM6ICBPYmplY3QgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKYgfVxyXG5cdCAqXHJcblx0ICogaWYgY2FsZW5kYXIgb2JqZWN0ICBub3QgZGVmaW5lZCwgdGhlbiAgaXQncyB3aWxsIGJlIGRlZmluZWQgYW5kIElEIHNldFxyXG5cdCAqIGlmIGNhbGVuZGFyIGV4aXN0LCB0aGVuICBzeXN0ZW0gc2V0ICBhcyBuZXcgb3Igb3ZlcndyaXRlIG9ubHkgcHJvcGVydGllcyBmcm9tIGNhbGVuZGFyX29iaiBwYXJhbWV0ZXIsICBidXQgb3RoZXIgcHJvcGVydGllcyB3aWxsIGJlIGV4aXN0ZWQgYW5kIG5vdCBvdmVyd3JpdGUsIGxpa2UgJ2lkJ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFx0XHRcdFx0ICAnMidcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2FsZW5kYXJfb2JqXHRcdFx0XHRcdCAgeyAgZGF0ZXM6ICBPYmplY3QgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKYgfSAgfVxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqXHJcblx0ICogRXhhbXBsZXM6XHJcblx0ICpcclxuXHQgKiBDb21tb24gdXNhZ2UgaW4gUEhQOlxyXG5cdCAqICAgXHRcdFx0ZWNobyBcIiAgX3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX3NldCggIFwiIC5pbnR2YWwoICRyZXNvdXJjZV9pZCApIC4gXCIsIHsgJ2RhdGVzJzogXCIgLiB3cF9qc29uX2VuY29kZSggJGF2YWlsYWJpbGl0eV9wZXJfZGF5c19hcnIgKSAuIFwiIH0gKTtcIjtcclxuXHQgKi9cclxuXHRvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJfX3NldCA9IGZ1bmN0aW9uKCByZXNvdXJjZV9pZCwgY2FsZW5kYXJfb2JqICl7XHJcblxyXG5cdFx0aWYgKCAhIG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSApe1xyXG5cdFx0XHRwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF0gPSB7fTtcclxuXHRcdFx0cF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyAnaWQnIF0gPSByZXNvdXJjZV9pZDtcclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgcHJvcF9uYW1lIGluIGNhbGVuZGFyX29iaiApe1xyXG5cclxuXHRcdFx0cF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyBwcm9wX25hbWUgXSA9IGNhbGVuZGFyX29ialsgcHJvcF9uYW1lIF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXTtcclxuXHR9O1xyXG5cclxuXHQvLyBEYXRlc1xyXG5cclxuXHQvKipcclxuXHQgKiAgR2V0IGJvb2tpbmdzIGRhdGEgZm9yIEFMTCBEYXRlcyBpbiBjYWxlbmRhciAgIDo6ICAgZmFsc2UgfCB7IFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKYgfVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFx0XHRcdCcxJ1xyXG5cdCAqIEByZXR1cm5zIHtvYmplY3R8Ym9vbGVhbn1cdFx0XHRcdGZhbHNlIHwgT2JqZWN0IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIjIwMjMtMDctMjRcIjogT2JqZWN0IHsgWydzdW1tYXJ5J11bJ3N0YXR1c19mb3JfZGF5J106IFwiYXZhaWxhYmxlXCIsIGRheV9hdmFpbGFiaWxpdHk6IDEsIG1heF9jYXBhY2l0eTogMSwg4oCmIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIjIwMjMtMDctMjZcIjogT2JqZWN0IHsgWydzdW1tYXJ5J11bJ3N0YXR1c19mb3JfZGF5J106IFwiZnVsbF9kYXlfYm9va2luZ1wiLCBbJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncyddOiBcInBlbmRpbmdcIiwgZGF5X2F2YWlsYWJpbGl0eTogMCwg4oCmIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIjIwMjMtMDctMjlcIjogT2JqZWN0IHsgWydzdW1tYXJ5J11bJ3N0YXR1c19mb3JfZGF5J106IFwicmVzb3VyY2VfYXZhaWxhYmlsaXR5XCIsIGRheV9hdmFpbGFiaWxpdHk6IDAsIG1heF9jYXBhY2l0eTogMSwg4oCmIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcIjIwMjMtMDctMzBcIjoge+KApn0sIFwiMjAyMy0wNy0zMVwiOiB74oCmfSwg4oCmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHQgKi9cclxuXHRvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9kYXRlcyA9IGZ1bmN0aW9uKCByZXNvdXJjZV9pZCl7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQgICAoIG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSApXHJcblx0XHRcdCYmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAoIHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgJ2RhdGVzJyBdICkgKVxyXG5cdFx0KXtcclxuXHRcdFx0cmV0dXJuICBwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdkYXRlcycgXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHRcdC8vIElmIHNvbWUgcHJvcGVydHkgbm90IGRlZmluZWQsIHRoZW4gZmFsc2U7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2V0IGJvb2tpbmdzIGRhdGVzIGluIGNhbGVuZGFyIG9iamVjdCAgIDo6ICAgIHsgXCIyMDIzLTA3LTIxXCI6IHvigKZ9LCBcIjIwMjMtMDctMjJcIjoge+KApn0sIFwiMjAyMy0wNy0yM1wiOiB74oCmfSwg4oCmIH1cclxuXHQgKlxyXG5cdCAqIGlmIGNhbGVuZGFyIG9iamVjdCAgbm90IGRlZmluZWQsIHRoZW4gIGl0J3Mgd2lsbCBiZSBkZWZpbmVkIGFuZCAnaWQnLCAnZGF0ZXMnIHNldFxyXG5cdCAqIGlmIGNhbGVuZGFyIGV4aXN0LCB0aGVuIHN5c3RlbSBhZGQgYSAgbmV3IG9yIG92ZXJ3cml0ZSBvbmx5IGRhdGVzIGZyb20gZGF0ZXNfb2JqIHBhcmFtZXRlcixcclxuXHQgKiBidXQgb3RoZXIgZGF0ZXMgbm90IGZyb20gcGFyYW1ldGVyIGRhdGVzX29iaiB3aWxsIGJlIGV4aXN0ZWQgYW5kIG5vdCBvdmVyd3JpdGUuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xpbnR9IHJlc291cmNlX2lkXHRcdFx0XHQgICcyJ1xyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRlc19vYmpcdFx0XHRcdFx0ICB7IFwiMjAyMy0wNy0yMVwiOiB74oCmfSwgXCIyMDIzLTA3LTIyXCI6IHvigKZ9LCBcIjIwMjMtMDctMjNcIjoge+KApn0sIOKApiB9XHJcblx0ICogQHBhcmFtIHtib29sZWFufSBpc19jb21wbGV0ZV9vdmVyd3JpdGVcdFx0ICBpZiBmYWxzZSwgIHRoZW4gIG9ubHkgb3ZlcndyaXRlIG9yIGFkZCAgZGF0ZXMgZnJvbSBcdGRhdGVzX29ialxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqXHJcblx0ICogRXhhbXBsZXM6XHJcblx0ICogICBcdFx0XHRfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fc2V0X2RhdGVzKCByZXNvdXJjZV9pZCwgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwg4oCmIH0gICk7XHRcdDwtICAgb3ZlcndyaXRlIEFMTCBkYXRlc1xyXG5cdCAqICAgXHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX3NldF9kYXRlcyggcmVzb3VyY2VfaWQsIHsgXCIyMDIzLTA3LTIyXCI6IHvigKZ9IH0sICBmYWxzZSAgKTtcdFx0XHRcdFx0PC0gICBhZGQgb3Igb3ZlcndyaXRlIG9ubHkgIFx0XCIyMDIzLTA3LTIyXCI6IHt9XHJcblx0ICpcclxuXHQgKiBDb21tb24gdXNhZ2UgaW4gUEhQOlxyXG5cdCAqICAgXHRcdFx0ZWNobyBcIiAgX3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX3NldF9kYXRlcyggIFwiIC4gaW50dmFsKCAkcmVzb3VyY2VfaWQgKSAuIFwiLCAgXCIgLiB3cF9qc29uX2VuY29kZSggJGF2YWlsYWJpbGl0eV9wZXJfZGF5c19hcnIgKSAuIFwiICApOyAgXCI7XHJcblx0ICovXHJcblx0b2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyX19zZXRfZGF0ZXMgPSBmdW5jdGlvbiggcmVzb3VyY2VfaWQsIGRhdGVzX29iaiAsIGlzX2NvbXBsZXRlX292ZXJ3cml0ZSA9IHRydWUgKXtcclxuXHJcblx0XHRpZiAoICFvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJfX2lzX2RlZmluZWQoIHJlc291cmNlX2lkICkgKXtcclxuXHRcdFx0b2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyX19zZXQoIHJlc291cmNlX2lkLCB7ICdkYXRlcyc6IHt9IH0gKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgJ2RhdGVzJyBdKSApe1xyXG5cdFx0XHRwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdkYXRlcycgXSA9IHt9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKGlzX2NvbXBsZXRlX292ZXJ3cml0ZSl7XHJcblxyXG5cdFx0XHQvLyBDb21wbGV0ZSBvdmVyd3JpdGUgYWxsICBib29raW5nIGRhdGVzXHJcblx0XHRcdHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgJ2RhdGVzJyBdID0gZGF0ZXNfb2JqO1xyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdC8vIEFkZCBvbmx5ICBuZXcgb3Igb3ZlcndyaXRlIGV4aXN0IGJvb2tpbmcgZGF0ZXMgZnJvbSAgcGFyYW1ldGVyLiBCb29raW5nIGRhdGVzIG5vdCBmcm9tICBwYXJhbWV0ZXIgIHdpbGwgIGJlIHdpdGhvdXQgY2huYW5nZXNcclxuXHRcdFx0Zm9yICggdmFyIHByb3BfbmFtZSBpbiBkYXRlc19vYmogKXtcclxuXHJcblx0XHRcdFx0cF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWydkYXRlcyddWyBwcm9wX25hbWUgXSA9IGRhdGVzX29ialsgcHJvcF9uYW1lIF07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdO1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiAgR2V0IGJvb2tpbmdzIGRhdGEgZm9yIHNwZWNpZmljIGRhdGUgaW4gY2FsZW5kYXIgICA6OiAgIGZhbHNlIHwgeyBkYXlfYXZhaWxhYmlsaXR5OiAxLCAuLi4gfVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFx0XHRcdCcxJ1xyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcWxfY2xhc3NfZGF5XHRcdFx0JzIwMjMtMDctMjEnXHJcblx0ICogQHJldHVybnMge29iamVjdHxib29sZWFufVx0XHRcdFx0ZmFsc2UgfCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRheV9hdmFpbGFiaWxpdHk6IDRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWF4X2NhcGFjaXR5OiA0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gID49IEJ1c2luZXNzIExhcmdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDI6IE9iamVjdCB7IGlzX2RheV91bmF2YWlsYWJsZTogZmFsc2UsIF9kYXlfc3RhdHVzOiBcImF2YWlsYWJsZVwiIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTA6IE9iamVjdCB7IGlzX2RheV91bmF2YWlsYWJsZTogZmFsc2UsIF9kYXlfc3RhdHVzOiBcImF2YWlsYWJsZVwiIH1cdFx0Ly8gID49IEJ1c2luZXNzIExhcmdlIC4uLlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxMTogT2JqZWN0IHsgaXNfZGF5X3VuYXZhaWxhYmxlOiBmYWxzZSwgX2RheV9zdGF0dXM6IFwiYXZhaWxhYmxlXCIgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQxMjogT2JqZWN0IHsgaXNfZGF5X3VuYXZhaWxhYmxlOiBmYWxzZSwgX2RheV9zdGF0dXM6IFwiYXZhaWxhYmxlXCIgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdCAqL1xyXG5cdG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlID0gZnVuY3Rpb24oIHJlc291cmNlX2lkLCBzcWxfY2xhc3NfZGF5ICl7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQgICAoIG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSApXHJcblx0XHRcdCYmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAoIHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgJ2RhdGVzJyBdICkgKVxyXG5cdFx0XHQmJiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgKCBwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdkYXRlcycgXVsgc3FsX2NsYXNzX2RheSBdICkgKVxyXG5cdFx0KXtcclxuXHRcdFx0cmV0dXJuICBwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdkYXRlcycgXVsgc3FsX2NsYXNzX2RheSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcdFx0Ly8gSWYgc29tZSBwcm9wZXJ0eSBub3QgZGVmaW5lZCwgdGhlbiBmYWxzZTtcclxuXHR9O1xyXG5cclxuXHJcblx0Ly8gQW55ICBQQVJBTVMgICBpbiBib29raW5nc1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgcHJvcGVydHkgIHRvICBib29raW5nXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHRcIjFcIlxyXG5cdCAqIEBwYXJhbSBwcm9wX25hbWVcdFx0bmFtZSBvZiBwcm9wZXJ0eVxyXG5cdCAqIEBwYXJhbSBwcm9wX3ZhbHVlXHR2YWx1ZSBvZiBwcm9wZXJ0eVxyXG5cdCAqIEByZXR1cm5zIHsqfVx0XHRcdGJvb2tpbmcgb2JqZWN0XHJcblx0ICovXHJcblx0b2JqLmJvb2tpbmdfX3NldF9wYXJhbV92YWx1ZSA9IGZ1bmN0aW9uICggcmVzb3VyY2VfaWQsIHByb3BfbmFtZSwgcHJvcF92YWx1ZSApIHtcclxuXHJcblx0XHRpZiAoICEgb2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyX19pc19kZWZpbmVkKCByZXNvdXJjZV9pZCApICl7XHJcblx0XHRcdHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXSA9IHt9O1xyXG5cdFx0XHRwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdpZCcgXSA9IHJlc291cmNlX2lkO1xyXG5cdFx0fVxyXG5cclxuXHRcdHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgcHJvcF9uYW1lIF0gPSBwcm9wX3ZhbHVlO1xyXG5cclxuXHRcdHJldHVybiBwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF07XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogIEdldCBib29raW5nIHByb3BlcnR5IHZhbHVlICAgXHQ6OiAgIG1peGVkIHwgbnVsbFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSAgcmVzb3VyY2VfaWRcdFx0JzEnXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHByb3BfbmFtZVx0XHRcdCdzZWxlY3Rpb25fbW9kZSdcclxuXHQgKiBAcmV0dXJucyB7KnxudWxsfVx0XHRcdFx0XHRtaXhlZCB8IG51bGxcclxuXHQgKi9cclxuXHRvYmouYm9va2luZ19fZ2V0X3BhcmFtX3ZhbHVlID0gZnVuY3Rpb24oIHJlc291cmNlX2lkLCBwcm9wX25hbWUgKXtcclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdCAgICggb2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyX19pc19kZWZpbmVkKCByZXNvdXJjZV9pZCApIClcclxuXHRcdFx0JiYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mICggcF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyBwcm9wX25hbWUgXSApIClcclxuXHRcdCl7XHJcblx0XHRcdHJldHVybiAgcF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyBwcm9wX25hbWUgXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcdFx0Ly8gSWYgc29tZSBwcm9wZXJ0eSBub3QgZGVmaW5lZCwgdGhlbiBudWxsO1xyXG5cdH07XHJcblxyXG5cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBib29raW5ncyBmb3IgYWxsICBjYWxlbmRhcnNcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBjYWxlbmRhcnNfb2JqXHRcdE9iamVjdCB7IGNhbGVuZGFyXzE6IHsgaWQ6IDEsIGRhdGVzOiBPYmplY3QgeyBcIjIwMjMtMDctMjJcIjoge+KApn0sIFwiMjAyMy0wNy0yM1wiOiB74oCmfSwgXCIyMDIzLTA3LTI0XCI6IHvigKZ9LCDigKYgfSB9XHJcblx0ICogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNhbGVuZGFyXzM6IHt9LCAuLi4gfVxyXG5cdCAqL1xyXG5cdG9iai5ib29raW5nc19pbl9jYWxlbmRhcnNfX3NldF9hbGwgPSBmdW5jdGlvbiAoIGNhbGVuZGFyc19vYmogKSB7XHJcblx0XHRwX2Jvb2tpbmdzID0gY2FsZW5kYXJzX29iajtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYm9va2luZ3MgaW4gYWxsIGNhbGVuZGFyc1xyXG5cdCAqXHJcblx0ICogQHJldHVybnMge29iamVjdHx7fX1cclxuXHQgKi9cclxuXHRvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJzX19nZXRfYWxsID0gZnVuY3Rpb24gKCkge1xyXG5cdFx0cmV0dXJuIHBfYm9va2luZ3M7XHJcblx0fTtcclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcblxyXG5cclxuXHQvLyBTZWFzb25zIFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdHZhciBwX3NlYXNvbnMgPSBvYmouc2Vhc29uc19vYmogPSBvYmouc2Vhc29uc19vYmogfHwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNhbGVuZGFyXzE6IE9iamVjdCB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0ICAgaWQ6ICAgICAxXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0ICwgZGF0ZXM6ICBPYmplY3QgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBzZWFzb24gbmFtZXMgZm9yIGRhdGVzIGluIGNhbGVuZGFyIG9iamVjdCAgIDo6ICAgIHsgXCIyMDIzLTA3LTIxXCI6IFsgJ3dwYmNfc2Vhc29uX3NlcHRlbWJlcl8yMDIzJywgJ3dwYmNfc2Vhc29uX3NlcHRlbWJlcl8yMDI0JyBdLCBcIjIwMjMtMDctMjJcIjogWy4uLl0sIC4uLiB9XHJcblx0ICpcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGludH0gcmVzb3VyY2VfaWRcdFx0XHRcdCAgJzInXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IGRhdGVzX29ialx0XHRcdFx0XHQgIHsgXCIyMDIzLTA3LTIxXCI6IHvigKZ9LCBcIjIwMjMtMDctMjJcIjoge+KApn0sIFwiMjAyMy0wNy0yM1wiOiB74oCmfSwg4oCmIH1cclxuXHQgKiBAcGFyYW0ge2Jvb2xlYW59IGlzX2NvbXBsZXRlX292ZXJ3cml0ZVx0XHQgIGlmIGZhbHNlLCAgdGhlbiAgb25seSAgYWRkICBkYXRlcyBmcm9tIFx0ZGF0ZXNfb2JqXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICpcclxuXHQgKiBFeGFtcGxlczpcclxuXHQgKiAgIFx0XHRcdF93cGJjLnNlYXNvbnNfX3NldCggcmVzb3VyY2VfaWQsIHsgXCIyMDIzLTA3LTIxXCI6IFsgJ3dwYmNfc2Vhc29uX3NlcHRlbWJlcl8yMDIzJywgJ3dwYmNfc2Vhc29uX3NlcHRlbWJlcl8yMDI0JyBdLCBcIjIwMjMtMDctMjJcIjogWy4uLl0sIC4uLiB9ICApO1xyXG5cdCAqL1xyXG5cdG9iai5zZWFzb25zX19zZXQgPSBmdW5jdGlvbiggcmVzb3VyY2VfaWQsIGRhdGVzX29iaiAsIGlzX2NvbXBsZXRlX292ZXJ3cml0ZSA9IGZhbHNlICl7XHJcblxyXG5cdFx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIChwX3NlYXNvbnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXSkgKXtcclxuXHRcdFx0cF9zZWFzb25zWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF0gPSB7fTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGlzX2NvbXBsZXRlX292ZXJ3cml0ZSApe1xyXG5cclxuXHRcdFx0Ly8gQ29tcGxldGUgb3ZlcndyaXRlIGFsbCAgc2Vhc29uIGRhdGVzXHJcblx0XHRcdHBfc2Vhc29uc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdID0gZGF0ZXNfb2JqO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQvLyBBZGQgb25seSAgbmV3IG9yIG92ZXJ3cml0ZSBleGlzdCBib29raW5nIGRhdGVzIGZyb20gIHBhcmFtZXRlci4gQm9va2luZyBkYXRlcyBub3QgZnJvbSAgcGFyYW1ldGVyICB3aWxsICBiZSB3aXRob3V0IGNobmFuZ2VzXHJcblx0XHRcdGZvciAoIHZhciBwcm9wX25hbWUgaW4gZGF0ZXNfb2JqICl7XHJcblxyXG5cdFx0XHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiAocF9zZWFzb25zWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdKSApe1xyXG5cdFx0XHRcdFx0cF9zZWFzb25zWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdID0gW107XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAoIHZhciBzZWFzb25fbmFtZV9rZXkgaW4gZGF0ZXNfb2JqWyBwcm9wX25hbWUgXSApe1xyXG5cdFx0XHRcdFx0cF9zZWFzb25zWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdLnB1c2goIGRhdGVzX29ialsgcHJvcF9uYW1lIF1bIHNlYXNvbl9uYW1lX2tleSBdICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBfc2Vhc29uc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdO1xyXG5cdH07XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiAgR2V0IGJvb2tpbmdzIGRhdGEgZm9yIHNwZWNpZmljIGRhdGUgaW4gY2FsZW5kYXIgICA6OiAgIFtdIHwgWyAnd3BiY19zZWFzb25fc2VwdGVtYmVyXzIwMjMnLCAnd3BiY19zZWFzb25fc2VwdGVtYmVyXzIwMjQnIF1cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGludH0gcmVzb3VyY2VfaWRcdFx0XHQnMSdcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3FsX2NsYXNzX2RheVx0XHRcdCcyMDIzLTA3LTIxJ1xyXG5cdCAqIEByZXR1cm5zIHtvYmplY3R8Ym9vbGVhbn1cdFx0XHRcdFtdICB8ICBbICd3cGJjX3NlYXNvbl9zZXB0ZW1iZXJfMjAyMycsICd3cGJjX3NlYXNvbl9zZXB0ZW1iZXJfMjAyNCcgXVxyXG5cdCAqL1xyXG5cdG9iai5zZWFzb25zX19nZXRfZm9yX2RhdGUgPSBmdW5jdGlvbiggcmVzb3VyY2VfaWQsIHNxbF9jbGFzc19kYXkgKXtcclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdCAgICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAoIHBfc2Vhc29uc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdICkgKVxyXG5cdFx0XHQmJiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgKCBwX3NlYXNvbnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgc3FsX2NsYXNzX2RheSBdICkgKVxyXG5cdFx0KXtcclxuXHRcdFx0cmV0dXJuICBwX3NlYXNvbnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgc3FsX2NsYXNzX2RheSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBbXTtcdFx0Ly8gSWYgbm90IGRlZmluZWQsIHRoZW4gW107XHJcblx0fTtcclxuXHJcblxyXG5cdC8vIE90aGVyIHBhcmFtZXRlcnMgXHRcdFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0dmFyIHBfb3RoZXIgPSBvYmoub3RoZXJfb2JqID0gb2JqLm90aGVyX29iaiB8fCB7IH07XHJcblxyXG5cdG9iai5zZXRfb3RoZXJfcGFyYW0gPSBmdW5jdGlvbiAoIHBhcmFtX2tleSwgcGFyYW1fdmFsICkge1xyXG5cdFx0cF9vdGhlclsgcGFyYW1fa2V5IF0gPSBwYXJhbV92YWw7XHJcblx0fTtcclxuXHJcblx0b2JqLmdldF9vdGhlcl9wYXJhbSA9IGZ1bmN0aW9uICggcGFyYW1fa2V5ICkge1xyXG5cdFx0cmV0dXJuIHBfb3RoZXJbIHBhcmFtX2tleSBdO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhbGwgb3RoZXIgcGFyYW1zXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fHt9fVxyXG5cdCAqL1xyXG5cdG9iai5nZXRfb3RoZXJfcGFyYW1fX2FsbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBwX290aGVyO1xyXG5cdH07XHJcblxyXG5cdC8vIE1lc3NhZ2VzIFx0XHRcdCAgICAgICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0dmFyIHBfbWVzc2FnZXMgPSBvYmoubWVzc2FnZXNfb2JqID0gb2JqLm1lc3NhZ2VzX29iaiB8fCB7IH07XHJcblxyXG5cdG9iai5zZXRfbWVzc2FnZSA9IGZ1bmN0aW9uICggcGFyYW1fa2V5LCBwYXJhbV92YWwgKSB7XHJcblx0XHRwX21lc3NhZ2VzWyBwYXJhbV9rZXkgXSA9IHBhcmFtX3ZhbDtcclxuXHR9O1xyXG5cclxuXHRvYmouZ2V0X21lc3NhZ2UgPSBmdW5jdGlvbiAoIHBhcmFtX2tleSApIHtcclxuXHRcdHJldHVybiBwX21lc3NhZ2VzWyBwYXJhbV9rZXkgXTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYWxsIG90aGVyIHBhcmFtc1xyXG5cdCAqXHJcblx0ICogQHJldHVybnMge29iamVjdHx7fX1cclxuXHQgKi9cclxuXHRvYmouZ2V0X21lc3NhZ2VzX19hbGwgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4gcF9tZXNzYWdlcztcclxuXHR9O1xyXG5cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRyZXR1cm4gb2JqO1xyXG5cclxufSggX3dwYmMgfHwge30sIGpRdWVyeSApKTtcclxuIiwiLyoqXHJcbiAqIEV4dGVuZCBfd3BiYyB3aXRoICBuZXcgbWV0aG9kcyAgICAgICAgLy8gRml4SW46IDkuOC42LjIuXHJcbiAqXHJcbiAqIEB0eXBlIHsqfHt9fVxyXG4gKiBAcHJpdmF0ZVxyXG4gKi9cclxuIF93cGJjID0gKGZ1bmN0aW9uICggb2JqLCAkKSB7XHJcblxyXG5cdC8vIExvYWQgQmFsYW5jZXIgXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHR2YXIgcF9iYWxhbmNlciA9IG9iai5iYWxhbmNlcl9vYmogPSBvYmouYmFsYW5jZXJfb2JqIHx8IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbWF4X3RocmVhZHMnOiAyLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpbl9wcm9jZXNzJyA6IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3YWl0JyAgICAgICA6IFtdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XHJcblxyXG5cdCAvKipcclxuXHQgICogU2V0ICBtYXggcGFyYWxsZWwgcmVxdWVzdCAgdG8gIGxvYWRcclxuXHQgICpcclxuXHQgICogQHBhcmFtIG1heF90aHJlYWRzXHJcblx0ICAqL1xyXG5cdG9iai5iYWxhbmNlcl9fc2V0X21heF90aHJlYWRzID0gZnVuY3Rpb24gKCBtYXhfdGhyZWFkcyApe1xyXG5cclxuXHRcdHBfYmFsYW5jZXJbICdtYXhfdGhyZWFkcycgXSA9IG1heF90aHJlYWRzO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqICBDaGVjayBpZiBiYWxhbmNlciBmb3Igc3BlY2lmaWMgYm9va2luZyByZXNvdXJjZSBkZWZpbmVkICAgOjogICB0cnVlIHwgZmFsc2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGludH0gcmVzb3VyY2VfaWRcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRvYmouYmFsYW5jZXJfX2lzX2RlZmluZWQgPSBmdW5jdGlvbiAoIHJlc291cmNlX2lkICkge1xyXG5cclxuXHRcdHJldHVybiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiggcF9iYWxhbmNlclsgJ2JhbGFuY2VyXycgKyByZXNvdXJjZV9pZCBdICkgKTtcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogIENyZWF0ZSBiYWxhbmNlciBpbml0aWFsaXppbmdcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGludH0gcmVzb3VyY2VfaWRcclxuXHQgKi9cclxuXHRvYmouYmFsYW5jZXJfX2luaXQgPSBmdW5jdGlvbiAoIHJlc291cmNlX2lkLCBmdW5jdGlvbl9uYW1lICwgcGFyYW1zID17fSkge1xyXG5cclxuXHRcdHZhciBiYWxhbmNlX29iaiA9IHt9O1xyXG5cdFx0YmFsYW5jZV9vYmpbICdyZXNvdXJjZV9pZCcgXSAgID0gcmVzb3VyY2VfaWQ7XHJcblx0XHRiYWxhbmNlX29ialsgJ3ByaW9yaXR5JyBdICAgICAgPSAxO1xyXG5cdFx0YmFsYW5jZV9vYmpbICdmdW5jdGlvbl9uYW1lJyBdID0gZnVuY3Rpb25fbmFtZTtcclxuXHRcdGJhbGFuY2Vfb2JqWyAncGFyYW1zJyBdICAgICAgICA9IHdwYmNfY2xvbmVfb2JqKCBwYXJhbXMgKTtcclxuXHJcblxyXG5cdFx0aWYgKCBvYmouYmFsYW5jZXJfX2lzX2FscmVhZHlfcnVuKCByZXNvdXJjZV9pZCwgZnVuY3Rpb25fbmFtZSApICl7XHJcblx0XHRcdHJldHVybiAncnVuJztcclxuXHRcdH1cclxuXHRcdGlmICggb2JqLmJhbGFuY2VyX19pc19hbHJlYWR5X3dhaXQoIHJlc291cmNlX2lkLCBmdW5jdGlvbl9uYW1lICkgKXtcclxuXHRcdFx0cmV0dXJuICd3YWl0JztcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0aWYgKCBvYmouYmFsYW5jZXJfX2Nhbl9pX3J1bigpICl7XHJcblx0XHRcdG9iai5iYWxhbmNlcl9fYWRkX3RvX19ydW4oIGJhbGFuY2Vfb2JqICk7XHJcblx0XHRcdHJldHVybiAncnVuJztcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG9iai5iYWxhbmNlcl9fYWRkX3RvX193YWl0KCBiYWxhbmNlX29iaiApO1xyXG5cdFx0XHRyZXR1cm4gJ3dhaXQnO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdCAvKipcclxuXHQgICogQ2FuIEkgUnVuID9cclxuXHQgICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICAqL1xyXG5cdG9iai5iYWxhbmNlcl9fY2FuX2lfcnVuID0gZnVuY3Rpb24gKCl7XHJcblx0XHRyZXR1cm4gKCBwX2JhbGFuY2VyWyAnaW5fcHJvY2VzcycgXS5sZW5ndGggPCBwX2JhbGFuY2VyWyAnbWF4X3RocmVhZHMnIF0gKTtcclxuXHR9XHJcblxyXG5cdFx0IC8qKlxyXG5cdFx0ICAqIEFkZCB0byBXQUlUXHJcblx0XHQgICogQHBhcmFtIGJhbGFuY2Vfb2JqXHJcblx0XHQgICovXHJcblx0XHRvYmouYmFsYW5jZXJfX2FkZF90b19fd2FpdCA9IGZ1bmN0aW9uICggYmFsYW5jZV9vYmogKSB7XHJcblx0XHRcdHBfYmFsYW5jZXJbJ3dhaXQnXS5wdXNoKCBiYWxhbmNlX29iaiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdCAvKipcclxuXHRcdCAgKiBSZW1vdmUgZnJvbSBXYWl0XHJcblx0XHQgICpcclxuXHRcdCAgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHRcdCAgKiBAcGFyYW0gZnVuY3Rpb25fbmFtZVxyXG5cdFx0ICAqIEByZXR1cm5zIHsqfGJvb2xlYW59XHJcblx0XHQgICovXHJcblx0XHRvYmouYmFsYW5jZXJfX3JlbW92ZV9mcm9tX193YWl0X2xpc3QgPSBmdW5jdGlvbiAoIHJlc291cmNlX2lkLCBmdW5jdGlvbl9uYW1lICl7XHJcblxyXG5cdFx0XHR2YXIgcmVtb3ZlZF9lbCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYgKCBwX2JhbGFuY2VyWyAnd2FpdCcgXS5sZW5ndGggKXtcdFx0XHRcdFx0Ly8gRml4SW46IDkuOC4xMC4xLlxyXG5cdFx0XHRcdGZvciAoIHZhciBpIGluIHBfYmFsYW5jZXJbICd3YWl0JyBdICl7XHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdChyZXNvdXJjZV9pZCA9PT0gcF9iYWxhbmNlclsgJ3dhaXQnIF1bIGkgXVsgJ3Jlc291cmNlX2lkJyBdKVxyXG5cdFx0XHRcdFx0XHQmJiAoZnVuY3Rpb25fbmFtZSA9PT0gcF9iYWxhbmNlclsgJ3dhaXQnIF1bIGkgXVsgJ2Z1bmN0aW9uX25hbWUnIF0pXHJcblx0XHRcdFx0XHQpe1xyXG5cdFx0XHRcdFx0XHRyZW1vdmVkX2VsID0gcF9iYWxhbmNlclsgJ3dhaXQnIF0uc3BsaWNlKCBpLCAxICk7XHJcblx0XHRcdFx0XHRcdHJlbW92ZWRfZWwgPSByZW1vdmVkX2VsLnBvcCgpO1xyXG5cdFx0XHRcdFx0XHRwX2JhbGFuY2VyWyAnd2FpdCcgXSA9IHBfYmFsYW5jZXJbICd3YWl0JyBdLmZpbHRlciggZnVuY3Rpb24gKCB2ICl7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHY7XHJcblx0XHRcdFx0XHRcdH0gKTtcdFx0XHRcdFx0Ly8gUmVpbmRleCBhcnJheVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVtb3ZlZF9lbDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHJlbW92ZWRfZWw7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQqIElzIGFscmVhZHkgV0FJVFxyXG5cdFx0KlxyXG5cdFx0KiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHRcdCogQHBhcmFtIGZ1bmN0aW9uX25hbWVcclxuXHRcdCogQHJldHVybnMge2Jvb2xlYW59XHJcblx0XHQqL1xyXG5cdFx0b2JqLmJhbGFuY2VyX19pc19hbHJlYWR5X3dhaXQgPSBmdW5jdGlvbiAoIHJlc291cmNlX2lkLCBmdW5jdGlvbl9uYW1lICl7XHJcblxyXG5cdFx0XHRpZiAoIHBfYmFsYW5jZXJbICd3YWl0JyBdLmxlbmd0aCApe1x0XHRcdFx0Ly8gRml4SW46IDkuOC4xMC4xLlxyXG5cdFx0XHRcdGZvciAoIHZhciBpIGluIHBfYmFsYW5jZXJbICd3YWl0JyBdICl7XHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdChyZXNvdXJjZV9pZCA9PT0gcF9iYWxhbmNlclsgJ3dhaXQnIF1bIGkgXVsgJ3Jlc291cmNlX2lkJyBdKVxyXG5cdFx0XHRcdFx0XHQmJiAoZnVuY3Rpb25fbmFtZSA9PT0gcF9iYWxhbmNlclsgJ3dhaXQnIF1bIGkgXVsgJ2Z1bmN0aW9uX25hbWUnIF0pXHJcblx0XHRcdFx0XHQpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHQgLyoqXHJcblx0XHQgICogQWRkIHRvIFJVTlxyXG5cdFx0ICAqIEBwYXJhbSBiYWxhbmNlX29ialxyXG5cdFx0ICAqL1xyXG5cdFx0b2JqLmJhbGFuY2VyX19hZGRfdG9fX3J1biA9IGZ1bmN0aW9uICggYmFsYW5jZV9vYmogKSB7XHJcblx0XHRcdHBfYmFsYW5jZXJbJ2luX3Byb2Nlc3MnXS5wdXNoKCBiYWxhbmNlX29iaiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0KiBSZW1vdmUgZnJvbSBSVU4gbGlzdFxyXG5cdFx0KlxyXG5cdFx0KiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHRcdCogQHBhcmFtIGZ1bmN0aW9uX25hbWVcclxuXHRcdCogQHJldHVybnMgeyp8Ym9vbGVhbn1cclxuXHRcdCovXHJcblx0XHRvYmouYmFsYW5jZXJfX3JlbW92ZV9mcm9tX19ydW5fbGlzdCA9IGZ1bmN0aW9uICggcmVzb3VyY2VfaWQsIGZ1bmN0aW9uX25hbWUgKXtcclxuXHJcblx0XHRcdCB2YXIgcmVtb3ZlZF9lbCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0IGlmICggcF9iYWxhbmNlclsgJ2luX3Byb2Nlc3MnIF0ubGVuZ3RoICl7XHRcdFx0XHQvLyBGaXhJbjogOS44LjEwLjEuXHJcblx0XHRcdFx0IGZvciAoIHZhciBpIGluIHBfYmFsYW5jZXJbICdpbl9wcm9jZXNzJyBdICl7XHJcblx0XHRcdFx0XHQgaWYgKFxyXG5cdFx0XHRcdFx0XHQgKHJlc291cmNlX2lkID09PSBwX2JhbGFuY2VyWyAnaW5fcHJvY2VzcycgXVsgaSBdWyAncmVzb3VyY2VfaWQnIF0pXHJcblx0XHRcdFx0XHRcdCAmJiAoZnVuY3Rpb25fbmFtZSA9PT0gcF9iYWxhbmNlclsgJ2luX3Byb2Nlc3MnIF1bIGkgXVsgJ2Z1bmN0aW9uX25hbWUnIF0pXHJcblx0XHRcdFx0XHQgKXtcclxuXHRcdFx0XHRcdFx0IHJlbW92ZWRfZWwgPSBwX2JhbGFuY2VyWyAnaW5fcHJvY2VzcycgXS5zcGxpY2UoIGksIDEgKTtcclxuXHRcdFx0XHRcdFx0IHJlbW92ZWRfZWwgPSByZW1vdmVkX2VsLnBvcCgpO1xyXG5cdFx0XHRcdFx0XHQgcF9iYWxhbmNlclsgJ2luX3Byb2Nlc3MnIF0gPSBwX2JhbGFuY2VyWyAnaW5fcHJvY2VzcycgXS5maWx0ZXIoIGZ1bmN0aW9uICggdiApe1xyXG5cdFx0XHRcdFx0XHRcdCByZXR1cm4gdjtcclxuXHRcdFx0XHRcdFx0IH0gKTtcdFx0Ly8gUmVpbmRleCBhcnJheVxyXG5cdFx0XHRcdFx0XHQgcmV0dXJuIHJlbW92ZWRfZWw7XHJcblx0XHRcdFx0XHQgfVxyXG5cdFx0XHRcdCB9XHJcblx0XHRcdCB9XHJcblx0XHRcdCByZXR1cm4gcmVtb3ZlZF9lbDtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCogSXMgYWxyZWFkeSBSVU5cclxuXHRcdCpcclxuXHRcdCogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0XHQqIEBwYXJhbSBmdW5jdGlvbl9uYW1lXHJcblx0XHQqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdFx0Ki9cclxuXHRcdG9iai5iYWxhbmNlcl9faXNfYWxyZWFkeV9ydW4gPSBmdW5jdGlvbiAoIHJlc291cmNlX2lkLCBmdW5jdGlvbl9uYW1lICl7XHJcblxyXG5cdFx0XHRpZiAoIHBfYmFsYW5jZXJbICdpbl9wcm9jZXNzJyBdLmxlbmd0aCApe1x0XHRcdFx0XHQvLyBGaXhJbjogOS44LjEwLjEuXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgaW4gcF9iYWxhbmNlclsgJ2luX3Byb2Nlc3MnIF0gKXtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0KHJlc291cmNlX2lkID09PSBwX2JhbGFuY2VyWyAnaW5fcHJvY2VzcycgXVsgaSBdWyAncmVzb3VyY2VfaWQnIF0pXHJcblx0XHRcdFx0XHRcdCYmIChmdW5jdGlvbl9uYW1lID09PSBwX2JhbGFuY2VyWyAnaW5fcHJvY2VzcycgXVsgaSBdWyAnZnVuY3Rpb25fbmFtZScgXSlcclxuXHRcdFx0XHRcdCl7XHJcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0b2JqLmJhbGFuY2VyX19ydW5fbmV4dCA9IGZ1bmN0aW9uICgpe1xyXG5cclxuXHRcdC8vIEdldCAxc3QgZnJvbSAgV2FpdCBsaXN0XHJcblx0XHR2YXIgcmVtb3ZlZF9lbCA9IGZhbHNlO1xyXG5cdFx0aWYgKCBwX2JhbGFuY2VyWyAnd2FpdCcgXS5sZW5ndGggKXtcdFx0XHRcdFx0Ly8gRml4SW46IDkuOC4xMC4xLlxyXG5cdFx0XHRmb3IgKCB2YXIgaSBpbiBwX2JhbGFuY2VyWyAnd2FpdCcgXSApe1xyXG5cdFx0XHRcdHJlbW92ZWRfZWwgPSBvYmouYmFsYW5jZXJfX3JlbW92ZV9mcm9tX193YWl0X2xpc3QoIHBfYmFsYW5jZXJbICd3YWl0JyBdWyBpIF1bICdyZXNvdXJjZV9pZCcgXSwgcF9iYWxhbmNlclsgJ3dhaXQnIF1bIGkgXVsgJ2Z1bmN0aW9uX25hbWUnIF0gKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZmFsc2UgIT09IHJlbW92ZWRfZWwgKXtcclxuXHJcblx0XHRcdC8vIFJ1blxyXG5cdFx0XHRvYmouYmFsYW5jZXJfX3J1biggcmVtb3ZlZF9lbCApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0IC8qKlxyXG5cdCAgKiBSdW5cclxuXHQgICogQHBhcmFtIGJhbGFuY2Vfb2JqXHJcblx0ICAqL1xyXG5cdG9iai5iYWxhbmNlcl9fcnVuID0gZnVuY3Rpb24gKCBiYWxhbmNlX29iaiApe1xyXG5cclxuXHRcdHN3aXRjaCAoIGJhbGFuY2Vfb2JqWyAnZnVuY3Rpb25fbmFtZScgXSApe1xyXG5cclxuXHRcdFx0Y2FzZSAnd3BiY19jYWxlbmRhcl9fbG9hZF9kYXRhX19hangnOlxyXG5cclxuXHRcdFx0XHQvLyBBZGQgdG8gcnVuIGxpc3RcclxuXHRcdFx0XHRvYmouYmFsYW5jZXJfX2FkZF90b19fcnVuKCBiYWxhbmNlX29iaiApO1xyXG5cclxuXHRcdFx0XHR3cGJjX2NhbGVuZGFyX19sb2FkX2RhdGFfX2FqeCggYmFsYW5jZV9vYmpbICdwYXJhbXMnIF0gKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBvYmo7XHJcblxyXG59KCBfd3BiYyB8fCB7fSwgalF1ZXJ5ICkpO1xyXG5cclxuXHJcbiBcdC8qKlxyXG4gXHQgKiAtLSBIZWxwIGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICovXHJcblxyXG5cdGZ1bmN0aW9uIHdwYmNfYmFsYW5jZXJfX2lzX3dhaXQoIHBhcmFtcywgZnVuY3Rpb25fbmFtZSApe1xyXG4vL2NvbnNvbGUubG9nKCc6OndwYmNfYmFsYW5jZXJfX2lzX3dhaXQnLHBhcmFtcyAsIGZ1bmN0aW9uX25hbWUgKTtcclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAocGFyYW1zWyAncmVzb3VyY2VfaWQnIF0pICl7XHJcblxyXG5cdFx0XHR2YXIgYmFsYW5jZXJfc3RhdHVzID0gX3dwYmMuYmFsYW5jZXJfX2luaXQoIHBhcmFtc1sgJ3Jlc291cmNlX2lkJyBdLCBmdW5jdGlvbl9uYW1lLCBwYXJhbXMgKTtcclxuXHJcblx0XHRcdHJldHVybiAoICd3YWl0JyA9PT0gYmFsYW5jZXJfc3RhdHVzICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIHdwYmNfYmFsYW5jZXJfX2NvbXBsZXRlZCggcmVzb3VyY2VfaWQgLCBmdW5jdGlvbl9uYW1lICl7XHJcbi8vY29uc29sZS5sb2coJzo6d3BiY19iYWxhbmNlcl9fY29tcGxldGVkJyxyZXNvdXJjZV9pZCAsIGZ1bmN0aW9uX25hbWUgKTtcclxuXHRcdF93cGJjLmJhbGFuY2VyX19yZW1vdmVfZnJvbV9fcnVuX2xpc3QoIHJlc291cmNlX2lkLCBmdW5jdGlvbl9uYW1lICk7XHJcblx0XHRfd3BiYy5iYWxhbmNlcl9fcnVuX25leHQoKTtcclxuXHR9IiwiLyoqXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKlx0aW5jbHVkZXMvX19qcy9jYWwvd3BiY19jYWwuanNcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9yZGVyIG9yIGNoaWxkIGJvb2tpbmcgcmVzb3VyY2VzIHNhdmVkIGhlcmU6ICBcdF93cGJjLmJvb2tpbmdfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdyZXNvdXJjZXNfaWRfYXJyX19pbl9kYXRlcycgKVx0XHRbMiwxMCwxMiwxMV1cclxuICovXHJcblxyXG4vKipcclxuICogSG93IHRvIGNoZWNrICBib29rZWQgdGltZXMgb24gIHNwZWNpZmljIGRhdGU6ID9cclxuICpcclxuXHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJyk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJylbMl0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3NlY29uZHMsXHJcblx0XHRcdFx0XHRcdF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXRfZm9yX2RhdGUoMiwnMjAyMy0wOC0yMScpWzEwXS5ib29rZWRfdGltZV9zbG90cy5tZXJnZWRfc2Vjb25kcyxcclxuXHRcdFx0XHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJylbMTFdLmJvb2tlZF90aW1lX3Nsb3RzLm1lcmdlZF9zZWNvbmRzLFxyXG5cdFx0XHRcdFx0XHRfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKDIsJzIwMjMtMDgtMjEnKVsxMl0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3NlY29uZHNcclxuXHRcdFx0XHRcdCk7XHJcbiAqICBPUlxyXG5cdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJylbMl0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3JlYWRhYmxlLFxyXG5cdFx0XHRcdFx0XHRfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKDIsJzIwMjMtMDgtMjEnKVsxMF0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3JlYWRhYmxlLFxyXG5cdFx0XHRcdFx0XHRfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKDIsJzIwMjMtMDgtMjEnKVsxMV0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3JlYWRhYmxlLFxyXG5cdFx0XHRcdFx0XHRfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKDIsJzIwMjMtMDgtMjEnKVsxMl0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3JlYWRhYmxlXHJcblx0XHRcdFx0XHQpO1xyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBEYXlzIHNlbGVjdGlvbjpcclxuICogXHRcdFx0XHRcdHdwYmNfY2FsZW5kYXJfX3Vuc2VsZWN0X2FsbF9kYXRlcyggcmVzb3VyY2VfaWQgKTtcclxuICpcclxuICpcdFx0XHRcdFx0dmFyIHJlc291cmNlX2lkID0gMTtcclxuICogXHRFeGFtcGxlIDE6XHRcdHZhciBudW1fc2VsZWN0ZWRfZGF5cyA9IHdwYmNfYXV0b19zZWxlY3RfZGF0ZXNfaW5fY2FsZW5kYXIoIHJlc291cmNlX2lkLCAnMjAyNC0wNS0xNScsICcyMDI0LTA1LTI1JyApO1xyXG4gKiBcdEV4YW1wbGUgMjpcdFx0dmFyIG51bV9zZWxlY3RlZF9kYXlzID0gd3BiY19hdXRvX3NlbGVjdF9kYXRlc19pbl9jYWxlbmRhciggcmVzb3VyY2VfaWQsIFsnMjAyNC0wNS0wOScsJzIwMjQtMDUtMTknLCcyMDI0LTA1LTI1J10gKTtcclxuICpcclxuICovXHJcblxyXG5cclxuLyoqXHJcbiAqIEMgQSBMIEUgTiBEIEEgUiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiAgU2hvdyBXUEJDIENhbGVuZGFyXHJcbiAqXHJcbiAqIEBwYXJhbSByZXNvdXJjZV9pZFx0XHRcdC0gcmVzb3VyY2UgSURcclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiB3cGJjX2NhbGVuZGFyX3Nob3coIHJlc291cmNlX2lkICl7XHJcblxyXG5cdC8vIElmIG5vIGNhbGVuZGFyIEhUTUwgdGFnLCAgdGhlbiAgZXhpdFxyXG5cdGlmICggMCA9PT0galF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS5sZW5ndGggKXsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdC8vIElmIHRoZSBjYWxlbmRhciB3aXRoIHRoZSBzYW1lIEJvb2tpbmcgcmVzb3VyY2UgaXMgYWN0aXZhdGVkIGFscmVhZHksIHRoZW4gZXhpdC5cclxuXHRpZiAoIHRydWUgPT09IGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkuaGFzQ2xhc3MoICdoYXNEYXRlcGljaycgKSApeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBEYXlzIHNlbGVjdGlvblxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0dmFyIGxvY2FsX19pc19yYW5nZV9zZWxlY3QgPSBmYWxzZTtcclxuXHR2YXIgbG9jYWxfX211bHRpX2RheXNfc2VsZWN0X251bSAgID0gMzY1O1x0XHRcdFx0XHQvLyBtdWx0aXBsZSB8IGZpeGVkXHJcblx0aWYgKCAnZHluYW1pYycgPT09IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZGF5c19zZWxlY3RfbW9kZScgKSApe1xyXG5cdFx0bG9jYWxfX2lzX3JhbmdlX3NlbGVjdCA9IHRydWU7XHJcblx0XHRsb2NhbF9fbXVsdGlfZGF5c19zZWxlY3RfbnVtID0gMDtcclxuXHR9XHJcblx0aWYgKCAnc2luZ2xlJyAgPT09IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZGF5c19zZWxlY3RfbW9kZScgKSApe1xyXG5cdFx0bG9jYWxfX211bHRpX2RheXNfc2VsZWN0X251bSA9IDA7XHJcblx0fVxyXG5cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1pbiAtIE1heCBkYXlzIHRvIHNjcm9sbC9zaG93XHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHR2YXIgbG9jYWxfX21pbl9kYXRlID0gMDtcclxuIFx0bG9jYWxfX21pbl9kYXRlID0gbmV3IERhdGUoIF93cGJjLmdldF9vdGhlcl9wYXJhbSggJ3RvZGF5X2FycicgKVsgMCBdLCAocGFyc2VJbnQoIF93cGJjLmdldF9vdGhlcl9wYXJhbSggJ3RvZGF5X2FycicgKVsgMSBdICkgLSAxKSwgX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAndG9kYXlfYXJyJyApWyAyIF0sIDAsIDAsIDAgKTtcdFx0XHQvLyBGaXhJbjogOS45LjAuMTcuXHJcbi8vY29uc29sZS5sb2coIGxvY2FsX19taW5fZGF0ZSApO1xyXG5cdHZhciBsb2NhbF9fbWF4X2RhdGUgPSBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2Jvb2tpbmdfbWF4X21vbnRoZXNfaW5fY2FsZW5kYXInICk7XHJcblx0Ly9sb2NhbF9fbWF4X2RhdGUgPSBuZXcgRGF0ZSgyMDI0LCA1LCAyOCk7ICBJdCBpcyBoZXJlIGlzc3VlIG9mIG5vdCBzZWxlY3RhYmxlIGRhdGVzLCBidXQgc29tZSBkYXRlcyBzaG93aW5nIGluIGNhbGVuZGFyIGFzIGF2YWlsYWJsZSwgYnV0IHdlIGNhbiBub3Qgc2VsZWN0IGl0LlxyXG5cclxuXHQvLy8vIERlZmluZSBsYXN0IGRheSBpbiBjYWxlbmRhciAoYXMgYSBsYXN0IGRheSBvZiBtb250aCAoYW5kIG5vdCBkYXRlLCB3aGljaCBpcyByZWxhdGVkIHRvIGFjdHVhbCAnVG9kYXknIGRhdGUpLlxyXG5cdC8vLy8gRS5nLiBpZiB0b2RheSBpcyAyMDIzLTA5LTI1LCBhbmQgd2Ugc2V0ICdOdW1iZXIgb2YgbW9udGhzIHRvIHNjcm9sbCcgYXMgNSBtb250aHMsIHRoZW4gbGFzdCBkYXkgd2lsbCBiZSAyMDI0LTAyLTI5IGFuZCBub3QgdGhlIDIwMjQtMDItMjUuXHJcblx0Ly8gdmFyIGNhbF9sYXN0X2RheV9pbl9tb250aCA9IGpRdWVyeS5kYXRlcGljay5fZGV0ZXJtaW5lRGF0ZSggbnVsbCwgbG9jYWxfX21heF9kYXRlLCBuZXcgRGF0ZSgpICk7XHJcblx0Ly8gY2FsX2xhc3RfZGF5X2luX21vbnRoID0gbmV3IERhdGUoIGNhbF9sYXN0X2RheV9pbl9tb250aC5nZXRGdWxsWWVhcigpLCBjYWxfbGFzdF9kYXlfaW5fbW9udGguZ2V0TW9udGgoKSArIDEsIDAgKTtcclxuXHQvLyBsb2NhbF9fbWF4X2RhdGUgPSBjYWxfbGFzdF9kYXlfaW5fbW9udGg7XHRcdFx0Ly8gRml4SW46IDEwLjAuMC4yNi5cclxuXHJcblx0Ly8gR2V0IHN0YXJ0IC8gZW5kIGRhdGVzIGZyb20gIHRoZSBCb29raW5nIENhbGVuZGFyIHNob3J0Y29kZS4gRXhhbXBsZTogW2Jvb2tpbmcgY2FsZW5kYXJfZGF0ZXNfc3RhcnQ9JzIwMjYtMDEtMDEnIGNhbGVuZGFyX2RhdGVzX2VuZD0nMjAyNi0xMi0zMScgIHJlc291cmNlX2lkPTFdIC8vIEZpeEluOiAxMC4xMy4xLjQuXHJcblx0aWYgKCBmYWxzZSAhPT0gd3BiY19jYWxlbmRhcl9fZ2V0X2RhdGVzX3N0YXJ0KCByZXNvdXJjZV9pZCApICkge1xyXG5cdFx0bG9jYWxfX21pbl9kYXRlID0gd3BiY19jYWxlbmRhcl9fZ2V0X2RhdGVzX3N0YXJ0KCByZXNvdXJjZV9pZCApOyAgLy8gRS5nLiAtIGxvY2FsX19taW5fZGF0ZSA9IG5ldyBEYXRlKCAyMDI1LCAwLCAxICk7XHJcblx0fVxyXG5cdGlmICggZmFsc2UgIT09IHdwYmNfY2FsZW5kYXJfX2dldF9kYXRlc19lbmQoIHJlc291cmNlX2lkICkgKSB7XHJcblx0XHRsb2NhbF9fbWF4X2RhdGUgPSB3cGJjX2NhbGVuZGFyX19nZXRfZGF0ZXNfZW5kKCByZXNvdXJjZV9pZCApOyAgICAvLyBFLmcuIC0gbG9jYWxfX21heF9kYXRlID0gbmV3IERhdGUoIDIwMjUsIDExLCAzMSApO1xyXG5cdH1cclxuXHJcblx0Ly8gSW4gY2FzZSB3ZSBlZGl0IGJvb2tpbmcgaW4gcGFzdCBvciBoYXZlIHNwZWNpZmljIHBhcmFtZXRlciBpbiBVUkwuXHJcblx0aWYgKCAgICggbG9jYXRpb24uaHJlZi5pbmRleE9mKCdwYWdlPXdwYmMtbmV3JykgIT0gLTEgKVxyXG5cdFx0JiYgKFxyXG5cdFx0XHQgICggbG9jYXRpb24uaHJlZi5pbmRleE9mKCdib29raW5nX2hhc2gnKSAhPSAtMSApICAgICAgICAgICAgICAgICAgLy8gQ29tbWVudCB0aGlzIGxpbmUgZm9yIGFiaWxpdHkgdG8gYWRkICBib29raW5nIGluIHBhc3QgZGF5cyBhdCAgQm9va2luZyA+IEFkZCBib29raW5nIHBhZ2UuXHJcblx0XHQgICB8fCAoIGxvY2F0aW9uLmhyZWYuaW5kZXhPZignYWxsb3dfcGFzdCcpICE9IC0xICkgICAgICAgICAgICAgICAgLy8gRml4SW46IDEwLjcuMS4yLlxyXG5cdFx0KVxyXG5cdCl7XHJcblx0XHQvLyBsb2NhbF9fbWluX2RhdGUgPSBudWxsO1xyXG5cdFx0Ly8gRml4SW46IDEwLjE0LjEuNC5cclxuXHRcdGxvY2FsX19taW5fZGF0ZSAgPSBuZXcgRGF0ZSggX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAndGltZV9sb2NhbF9hcnInIClbMF0sICggcGFyc2VJbnQoIF93cGJjLmdldF9vdGhlcl9wYXJhbSggJ3RpbWVfbG9jYWxfYXJyJyApWzFdICkgLSAxKSwgX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAndGltZV9sb2NhbF9hcnInIClbMl0sIF93cGJjLmdldF9vdGhlcl9wYXJhbSggJ3RpbWVfbG9jYWxfYXJyJyApWzNdLCBfd3BiYy5nZXRfb3RoZXJfcGFyYW0oICd0aW1lX2xvY2FsX2FycicgKVs0XSwgMCApO1xyXG5cdFx0bG9jYWxfX21heF9kYXRlID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHZhciBsb2NhbF9fc3RhcnRfd2Vla2RheSAgICA9IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnYm9va2luZ19zdGFydF9kYXlfd2VlZWsnICk7XHJcblx0dmFyIGxvY2FsX19udW1iZXJfb2ZfbW9udGhzID0gcGFyc2VJbnQoIF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnY2FsZW5kYXJfbnVtYmVyX29mX21vbnRocycgKSApO1xyXG5cclxuXHRqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCApLnRleHQoICcnICk7XHRcdFx0XHRcdC8vIFJlbW92ZSBhbGwgSFRNTCBpbiBjYWxlbmRhciB0YWdcclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFNob3cgY2FsZW5kYXJcclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdGpRdWVyeSgnI2NhbGVuZGFyX2Jvb2tpbmcnKyByZXNvdXJjZV9pZCkuZGF0ZXBpY2soXHJcblx0XHRcdHtcclxuXHRcdFx0XHRiZWZvcmVTaG93RGF5OiBmdW5jdGlvbiAoIGpzX2RhdGUgKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHdwYmNfX2NhbGVuZGFyX19hcHBseV9jc3NfdG9fZGF5cygganNfZGF0ZSwgeydyZXNvdXJjZV9pZCc6IHJlc291cmNlX2lkfSwgdGhpcyApO1xyXG5cdFx0XHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRvblNlbGVjdDogZnVuY3Rpb24gKCBzdHJpbmdfZGF0ZXMsIGpzX2RhdGVzX2FyciApeyAgLyoqXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKlx0c3RyaW5nX2RhdGVzICAgPSAgICcyMy4wOC4yMDIzIC0gMjYuMDguMjAyMycgICAgfCAgICAnMjMuMDguMjAyMyAtIDIzLjA4LjIwMjMnICAgIHwgICAgJzE5LjA5LjIwMjMsIDI0LjA4LjIwMjMsIDMwLjA5LjIwMjMnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKiAganNfZGF0ZXNfYXJyICAgPSAgIHJhbmdlOiBbIERhdGUgKEF1ZyAyMyAyMDIzKSwgRGF0ZSAoQXVnIDI1IDIwMjMpXSAgICAgfCAgICAgbXVsdGlwbGU6IFsgRGF0ZShPY3QgMjQgMjAyMyksIERhdGUoT2N0IDIwIDIwMjMpLCBEYXRlKE9jdCAxNiAyMDIzKSBdXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHdwYmNfX2NhbGVuZGFyX19vbl9zZWxlY3RfZGF5cyggc3RyaW5nX2RhdGVzLCB7J3Jlc291cmNlX2lkJzogcmVzb3VyY2VfaWR9LCB0aGlzICk7XHJcblx0XHRcdFx0XHRcdFx0ICB9LFxyXG5cdFx0XHRcdG9uSG92ZXI6IGZ1bmN0aW9uICggc3RyaW5nX2RhdGUsIGpzX2RhdGUgKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHdwYmNfX2NhbGVuZGFyX19vbl9ob3Zlcl9kYXlzKCBzdHJpbmdfZGF0ZSwganNfZGF0ZSwgeydyZXNvdXJjZV9pZCc6IHJlc291cmNlX2lkfSwgdGhpcyApO1xyXG5cdFx0XHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRvbkNoYW5nZU1vbnRoWWVhcjogZnVuY3Rpb24gKCB5ZWFyLCByZWFsX21vbnRoLCBqc19kYXRlX18xc3RfZGF5X2luX21vbnRoICl7IH0sXHJcblx0XHRcdFx0c2hvd09uICAgICAgICA6ICdib3RoJyxcclxuXHRcdFx0XHRudW1iZXJPZk1vbnRoczogbG9jYWxfX251bWJlcl9vZl9tb250aHMsXHJcblx0XHRcdFx0c3RlcE1vbnRocyAgICA6IDEsXHJcblx0XHRcdFx0Ly8gcHJldlRleHQgICAgICA6ICcmbGFxdW87JyxcclxuXHRcdFx0XHQvLyBuZXh0VGV4dCAgICAgIDogJyZyYXF1bzsnLFxyXG5cdFx0XHRcdHByZXZUZXh0ICAgICAgOiAnJmxzYXF1bzsnLFxyXG5cdFx0XHRcdG5leHRUZXh0ICAgICAgOiAnJnJzYXF1bzsnLFxyXG5cdFx0XHRcdGRhdGVGb3JtYXQgICAgOiAnZGQubW0ueXknLFxyXG5cdFx0XHRcdGNoYW5nZU1vbnRoICAgOiBmYWxzZSxcclxuXHRcdFx0XHRjaGFuZ2VZZWFyICAgIDogZmFsc2UsXHJcblx0XHRcdFx0bWluRGF0ZSAgICAgICA6IGxvY2FsX19taW5fZGF0ZSxcclxuXHRcdFx0XHRtYXhEYXRlICAgICAgIDogbG9jYWxfX21heF9kYXRlLCBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gJzFZJyxcclxuXHRcdFx0XHQvLyBtaW5EYXRlOiBuZXcgRGF0ZSgyMDIwLCAyLCAxKSwgbWF4RGF0ZTogbmV3IERhdGUoMjAyMCwgOSwgMzEpLCAgICAgICAgICAgICBcdC8vIEFiaWxpdHkgdG8gc2V0IGFueSAgc3RhcnQgYW5kIGVuZCBkYXRlIGluIGNhbGVuZGFyXHJcblx0XHRcdFx0c2hvd1N0YXR1cyAgICAgIDogZmFsc2UsXHJcblx0XHRcdFx0bXVsdGlTZXBhcmF0b3IgIDogJywgJyxcclxuXHRcdFx0XHRjbG9zZUF0VG9wICAgICAgOiBmYWxzZSxcclxuXHRcdFx0XHRmaXJzdERheSAgICAgICAgOiBsb2NhbF9fc3RhcnRfd2Vla2RheSxcclxuXHRcdFx0XHRnb3RvQ3VycmVudCAgICAgOiBmYWxzZSxcclxuXHRcdFx0XHRoaWRlSWZOb1ByZXZOZXh0OiB0cnVlLFxyXG5cdFx0XHRcdG11bHRpU2VsZWN0ICAgICA6IGxvY2FsX19tdWx0aV9kYXlzX3NlbGVjdF9udW0sXHJcblx0XHRcdFx0cmFuZ2VTZWxlY3QgICAgIDogbG9jYWxfX2lzX3JhbmdlX3NlbGVjdCxcclxuXHRcdFx0XHQvLyBzaG93V2Vla3M6IHRydWUsXHJcblx0XHRcdFx0dXNlVGhlbWVSb2xsZXI6IGZhbHNlXHJcblx0XHRcdH1cclxuXHQpO1xyXG5cclxuXHJcblx0XHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBDbGVhciB0b2RheSBkYXRlIGhpZ2hsaWdodGluZ1xyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0c2V0VGltZW91dCggZnVuY3Rpb24gKCl7ICB3cGJjX2NhbGVuZGFyc19fY2xlYXJfZGF5c19oaWdobGlnaHRpbmcoIHJlc291cmNlX2lkICk7ICB9LCA1MDAgKTsgICAgICAgICAgICAgICAgICAgIFx0Ly8gRml4SW46IDcuMS4yLjguXHJcblx0XHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBTY3JvbGwgY2FsZW5kYXIgdG8gIHNwZWNpZmljIG1vbnRoXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHR2YXIgc3RhcnRfYmtfbW9udGggPSBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2NhbGVuZGFyX3Njcm9sbF90bycgKTtcclxuXHRpZiAoIGZhbHNlICE9PSBzdGFydF9ia19tb250aCApe1xyXG5cdFx0d3BiY19jYWxlbmRhcl9fc2Nyb2xsX3RvKCByZXNvdXJjZV9pZCwgc3RhcnRfYmtfbW9udGhbIDAgXSwgc3RhcnRfYmtfbW9udGhbIDEgXSApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgQ1NTIHRvIGNhbGVuZGFyIGRhdGUgY2VsbHNcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBkYXRlXHRcdFx0XHRcdFx0XHRcdFx0XHQtICBKYXZhU2NyaXB0IERhdGUgT2JqOiAgXHRcdE1vbiBEZWMgMTEgMjAyMyAwMDowMDowMCBHTVQrMDIwMCAoRWFzdGVybiBFdXJvcGVhbiBTdGFuZGFyZCBUaW1lKVxyXG5cdCAqIEBwYXJhbSBjYWxlbmRhcl9wYXJhbXNfYXJyXHRcdFx0XHRcdFx0LSAgQ2FsZW5kYXIgU2V0dGluZ3MgT2JqZWN0OiAgXHR7XHJcblx0ICpcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgXHRcdFx0XHRcdFx0XCJyZXNvdXJjZV9pZFwiOiA0XHJcblx0ICpcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0ICogQHBhcmFtIGRhdGVwaWNrX3RoaXNcdFx0XHRcdFx0XHRcdFx0LSB0aGlzIG9mIGRhdGVwaWNrIE9ialxyXG5cdCAqIEByZXR1cm5zIHsoKnxzdHJpbmcpW118KGJvb2xlYW58c3RyaW5nKVtdfVx0XHQtIFsge3RydWUgLWF2YWlsYWJsZSB8IGZhbHNlIC0gdW5hdmFpbGFibGV9LCAnQ1NTIGNsYXNzZXMgZm9yIGNhbGVuZGFyIGRheSBjZWxsJyBdXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19fY2FsZW5kYXJfX2FwcGx5X2Nzc190b19kYXlzKCBkYXRlLCBjYWxlbmRhcl9wYXJhbXNfYXJyLCBkYXRlcGlja190aGlzICl7XHJcblxyXG5cdFx0dmFyIHRvZGF5X2RhdGUgPSBuZXcgRGF0ZSggX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAndG9kYXlfYXJyJyApWyAwIF0sIChwYXJzZUludCggX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAndG9kYXlfYXJyJyApWyAxIF0gKSAtIDEpLCBfd3BiYy5nZXRfb3RoZXJfcGFyYW0oICd0b2RheV9hcnInIClbIDIgXSwgMCwgMCwgMCApO1x0XHRcdFx0XHRcdFx0XHQvLyBUb2RheSBKU19EYXRlX09iai5cclxuXHRcdHZhciBjbGFzc19kYXkgICAgID0gd3BiY19fZ2V0X190ZF9jbGFzc19kYXRlKCBkYXRlICk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gJzEtOS0yMDIzJ1xyXG5cdFx0dmFyIHNxbF9jbGFzc19kYXkgPSB3cGJjX19nZXRfX3NxbF9jbGFzc19kYXRlKCBkYXRlICk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gJzIwMjMtMDEtMDknXHJcblx0XHR2YXIgcmVzb3VyY2VfaWQgPSAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YoY2FsZW5kYXJfcGFyYW1zX2FyclsgJ3Jlc291cmNlX2lkJyBdKSApID8gY2FsZW5kYXJfcGFyYW1zX2FyclsgJ3Jlc291cmNlX2lkJyBdIDogJzEnOyBcdFx0Ly8gJzEnXHJcblxyXG5cdFx0Ly8gR2V0IFNlbGVjdGVkIGRhdGVzIGluIGNhbGVuZGFyXHJcblx0XHR2YXIgc2VsZWN0ZWRfZGF0ZXNfc3FsID0gd3BiY19nZXRfX3NlbGVjdGVkX2RhdGVzX3NxbF9fYXNfYXJyKCByZXNvdXJjZV9pZCApO1xyXG5cclxuXHRcdC8vIEdldCBEYXRhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR2YXIgZGF0ZV9ib29raW5nc19vYmogPSBfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKCByZXNvdXJjZV9pZCwgc3FsX2NsYXNzX2RheSApO1xyXG5cclxuXHJcblx0XHQvLyBBcnJheSB3aXRoIENTUyBjbGFzc2VzIGZvciBkYXRlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0dmFyIGNzc19jbGFzc2VzX19mb3JfZGF0ZSA9IFtdO1xyXG5cdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdzcWxfZGF0ZV8nICAgICArIHNxbF9jbGFzc19kYXkgKTtcdFx0XHRcdC8vICAnc3FsX2RhdGVfMjAyMy0wNy0yMSdcclxuXHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnY2FsNGRhdGUtJyAgICAgKyBjbGFzc19kYXkgKTtcdFx0XHRcdFx0Ly8gICdjYWw0ZGF0ZS03LTIxLTIwMjMnXHJcblx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ3dwYmNfd2Vla2RheV8nICsgZGF0ZS5nZXREYXkoKSApO1x0XHRcdFx0Ly8gICd3cGJjX3dlZWtkYXlfNCdcclxuXHJcblx0XHQvLyBEZWZpbmUgU2VsZWN0ZWQgQ2hlY2sgSW4vT3V0IGRhdGVzIGluIFREICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0aWYgKFxyXG5cdFx0XHRcdCggc2VsZWN0ZWRfZGF0ZXNfc3FsLmxlbmd0aCAgKVxyXG5cdFx0XHQvLyYmICAoIHNlbGVjdGVkX2RhdGVzX3NxbFsgMCBdICE9PSBzZWxlY3RlZF9kYXRlc19zcWxbIChzZWxlY3RlZF9kYXRlc19zcWwubGVuZ3RoIC0gMSkgXSApXHJcblx0XHQpe1xyXG5cdFx0XHRpZiAoIHNxbF9jbGFzc19kYXkgPT09IHNlbGVjdGVkX2RhdGVzX3NxbFsgMCBdICl7XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdzZWxlY3RlZF9jaGVja19pbicgKTtcclxuXHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ3NlbGVjdGVkX2NoZWNrX2luX291dCcgKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoICAoIHNlbGVjdGVkX2RhdGVzX3NxbC5sZW5ndGggPiAxICkgJiYgKCBzcWxfY2xhc3NfZGF5ID09PSBzZWxlY3RlZF9kYXRlc19zcWxbIChzZWxlY3RlZF9kYXRlc19zcWwubGVuZ3RoIC0gMSkgXSApICkge1xyXG5cdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnc2VsZWN0ZWRfY2hlY2tfb3V0JyApO1xyXG5cdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnc2VsZWN0ZWRfY2hlY2tfaW5fb3V0JyApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHZhciBpc19kYXlfc2VsZWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIElmIHNvbWV0aGluZyBub3QgZGVmaW5lZCwgIHRoZW4gIHRoaXMgZGF0ZSBjbG9zZWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIC8vIEZpeEluOiAxMC4xMi40LjYuXHJcblx0XHRpZiAoIChmYWxzZSA9PT0gZGF0ZV9ib29raW5nc19vYmopIHx8ICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIChkYXRlX2Jvb2tpbmdzX29ialtyZXNvdXJjZV9pZF0pKSApIHtcclxuXHJcblx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZGF0ZV91c2VyX3VuYXZhaWxhYmxlJyApO1xyXG5cclxuXHRcdFx0cmV0dXJuIFsgaXNfZGF5X3NlbGVjdGFibGUsIGNzc19jbGFzc2VzX19mb3JfZGF0ZS5qb2luKCcgJykgIF07XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyAgIGRhdGVfYm9va2luZ3Nfb2JqICAtIERlZmluZWQuICAgICAgICAgICAgRGF0ZXMgY2FuIGJlIHNlbGVjdGFibGUuXHJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBBZGQgc2Vhc29uIG5hbWVzIHRvIHRoZSBkYXkgQ1NTIGNsYXNzZXMgLS0gaXQgaXMgcmVxdWlyZWQgZm9yIGNvcnJlY3QgIHdvcmsgIG9mIGNvbmRpdGlvbmFsIGZpZWxkcyAtLS0tLS0tLS0tLS0tLVxyXG5cdFx0dmFyIHNlYXNvbl9uYW1lc19hcnIgPSBfd3BiYy5zZWFzb25zX19nZXRfZm9yX2RhdGUoIHJlc291cmNlX2lkLCBzcWxfY2xhc3NfZGF5ICk7XHJcblxyXG5cdFx0Zm9yICggdmFyIHNlYXNvbl9rZXkgaW4gc2Vhc29uX25hbWVzX2FyciApe1xyXG5cclxuXHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goIHNlYXNvbl9uYW1lc19hcnJbIHNlYXNvbl9rZXkgXSApO1x0XHRcdFx0Ly8gICd3cGRldmJrX3NlYXNvbl9zZXB0ZW1iZXJfMjAyMydcclxuXHRcdH1cclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHRcdC8vIENvc3QgUmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ3JhdGVfJyArIGRhdGVfYm9va2luZ3Nfb2JqWyByZXNvdXJjZV9pZCBdWyAnZGF0ZV9jb3N0X3JhdGUnIF0udG9TdHJpbmcoKS5yZXBsYWNlKCAvW1xcLlxcc10vZywgJ18nICkgKTtcdFx0XHRcdFx0XHQvLyAgJ3JhdGVfOTlfMDAnIC0+IDk5LjAwXHJcblxyXG5cclxuXHRcdGlmICggcGFyc2VJbnQoIGRhdGVfYm9va2luZ3Nfb2JqWyAnZGF5X2F2YWlsYWJpbGl0eScgXSApID4gMCApe1xyXG5cdFx0XHRpc19kYXlfc2VsZWN0YWJsZSA9IHRydWU7XHJcblx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZGF0ZV9hdmFpbGFibGUnICk7XHJcblx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAncmVzZXJ2ZWRfZGF5c19jb3VudCcgKyBwYXJzZUludCggZGF0ZV9ib29raW5nc19vYmpbICdtYXhfY2FwYWNpdHknIF0gLSBkYXRlX2Jvb2tpbmdzX29ialsgJ2RheV9hdmFpbGFiaWxpdHknIF0gKSApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aXNfZGF5X3NlbGVjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdkYXRlX3VzZXJfdW5hdmFpbGFibGUnICk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHN3aXRjaCAoIGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeSddWydzdGF0dXNfZm9yX2RheScgXSApe1xyXG5cclxuXHRcdFx0Y2FzZSAnYXZhaWxhYmxlJzpcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3RpbWVfc2xvdHNfYm9va2luZyc6XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICd0aW1lc3BhcnRseScsICd0aW1lc19jbG9jaycgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2Z1bGxfZGF5X2Jvb2tpbmcnOlxyXG5cdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZnVsbF9kYXlfYm9va2luZycgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3NlYXNvbl9maWx0ZXInOlxyXG5cdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZGF0ZV91c2VyX3VuYXZhaWxhYmxlJywgJ3NlYXNvbl91bmF2YWlsYWJsZScgKTtcclxuXHRcdFx0XHRkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSA9ICcnO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXNldCBib29raW5nIHN0YXR1cyBjb2xvciBmb3IgcG9zc2libGUgb2xkIGJvb2tpbmdzIG9uIHRoaXMgZGF0ZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAncmVzb3VyY2VfYXZhaWxhYmlsaXR5JzpcclxuXHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2RhdGVfdXNlcl91bmF2YWlsYWJsZScsICdyZXNvdXJjZV91bmF2YWlsYWJsZScgKTtcclxuXHRcdFx0XHRkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSA9ICcnO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXNldCBib29raW5nIHN0YXR1cyBjb2xvciBmb3IgcG9zc2libGUgb2xkIGJvb2tpbmdzIG9uIHRoaXMgZGF0ZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnd2Vla2RheV91bmF2YWlsYWJsZSc6XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdkYXRlX3VzZXJfdW5hdmFpbGFibGUnLCAnd2Vla2RheV91bmF2YWlsYWJsZScgKTtcclxuXHRcdFx0XHRkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSA9ICcnO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXNldCBib29raW5nIHN0YXR1cyBjb2xvciBmb3IgcG9zc2libGUgb2xkIGJvb2tpbmdzIG9uIHRoaXMgZGF0ZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZnJvbV90b2RheV91bmF2YWlsYWJsZSc6XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdkYXRlX3VzZXJfdW5hdmFpbGFibGUnLCAnZnJvbV90b2RheV91bmF2YWlsYWJsZScgKTtcclxuXHRcdFx0XHRkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSA9ICcnO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXNldCBib29raW5nIHN0YXR1cyBjb2xvciBmb3IgcG9zc2libGUgb2xkIGJvb2tpbmdzIG9uIHRoaXMgZGF0ZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnbGltaXRfYXZhaWxhYmxlX2Zyb21fdG9kYXknOlxyXG5cdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZGF0ZV91c2VyX3VuYXZhaWxhYmxlJywgJ2xpbWl0X2F2YWlsYWJsZV9mcm9tX3RvZGF5JyApO1xyXG5cdFx0XHRcdGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeSddWydzdGF0dXNfZm9yX2Jvb2tpbmdzJyBdID0gJyc7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFJlc2V0IGJvb2tpbmcgc3RhdHVzIGNvbG9yIGZvciBwb3NzaWJsZSBvbGQgYm9va2luZ3Mgb24gdGhpcyBkYXRlXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdjaGFuZ2Vfb3Zlcic6XHJcblx0XHRcdFx0LypcclxuXHRcdFx0XHQgKlxyXG5cdFx0XHRcdC8vICBjaGVja19vdXRfdGltZV9kYXRlMmFwcHJvdmUgXHQgXHRjaGVja19pbl90aW1lX2RhdGUyYXBwcm92ZVxyXG5cdFx0XHRcdC8vICBjaGVja19vdXRfdGltZV9kYXRlMmFwcHJvdmUgXHQgXHRjaGVja19pbl90aW1lX2RhdGVfYXBwcm92ZWRcclxuXHRcdFx0XHQvLyAgY2hlY2tfaW5fdGltZV9kYXRlMmFwcHJvdmUgXHRcdCBcdGNoZWNrX291dF90aW1lX2RhdGVfYXBwcm92ZWRcclxuXHRcdFx0XHQvLyAgY2hlY2tfb3V0X3RpbWVfZGF0ZV9hcHByb3ZlZCBcdCBcdGNoZWNrX2luX3RpbWVfZGF0ZV9hcHByb3ZlZFxyXG5cdFx0XHRcdCAqL1xyXG5cclxuXHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ3RpbWVzcGFydGx5JywgJ2NoZWNrX2luX3RpbWUnLCAnY2hlY2tfb3V0X3RpbWUnICk7XHJcblx0XHRcdFx0Ly8gRml4SW46IDEwLjAuMC4yLlxyXG5cdFx0XHRcdGlmICggZGF0ZV9ib29raW5nc19vYmpbICdzdW1tYXJ5JyBdWyAnc3RhdHVzX2Zvcl9ib29raW5ncycgXS5pbmRleE9mKCAnYXBwcm92ZWRfcGVuZGluZycgKSA+IC0xICl7XHJcblx0XHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2NoZWNrX291dF90aW1lX2RhdGVfYXBwcm92ZWQnLCAnY2hlY2tfaW5fdGltZV9kYXRlMmFwcHJvdmUnICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICggZGF0ZV9ib29raW5nc19vYmpbICdzdW1tYXJ5JyBdWyAnc3RhdHVzX2Zvcl9ib29raW5ncycgXS5pbmRleE9mKCAncGVuZGluZ19hcHByb3ZlZCcgKSA+IC0xICl7XHJcblx0XHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2NoZWNrX291dF90aW1lX2RhdGUyYXBwcm92ZScsICdjaGVja19pbl90aW1lX2RhdGVfYXBwcm92ZWQnICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnY2hlY2tfaW4nOlxyXG5cdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAndGltZXNwYXJ0bHknLCAnY2hlY2tfaW5fdGltZScgKTtcclxuXHJcblx0XHRcdFx0Ly8gRml4SW46IDkuOS4wLjMzLlxyXG5cdFx0XHRcdGlmICggZGF0ZV9ib29raW5nc19vYmpbICdzdW1tYXJ5JyBdWyAnc3RhdHVzX2Zvcl9ib29raW5ncycgXS5pbmRleE9mKCAncGVuZGluZycgKSA+IC0xICl7XHJcblx0XHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2NoZWNrX2luX3RpbWVfZGF0ZTJhcHByb3ZlJyApO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeScgXVsgJ3N0YXR1c19mb3JfYm9va2luZ3MnIF0uaW5kZXhPZiggJ2FwcHJvdmVkJyApID4gLTEgKXtcclxuXHRcdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnY2hlY2tfaW5fdGltZV9kYXRlX2FwcHJvdmVkJyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2NoZWNrX291dCc6XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICd0aW1lc3BhcnRseScsICdjaGVja19vdXRfdGltZScgKTtcclxuXHJcblx0XHRcdFx0Ly8gRml4SW46IDkuOS4wLjMzLlxyXG5cdFx0XHRcdGlmICggZGF0ZV9ib29raW5nc19vYmpbICdzdW1tYXJ5JyBdWyAnc3RhdHVzX2Zvcl9ib29raW5ncycgXS5pbmRleE9mKCAncGVuZGluZycgKSA+IC0xICl7XHJcblx0XHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2NoZWNrX291dF90aW1lX2RhdGUyYXBwcm92ZScgKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknIF1bICdzdGF0dXNfZm9yX2Jvb2tpbmdzJyBdLmluZGV4T2YoICdhcHByb3ZlZCcgKSA+IC0xICl7XHJcblx0XHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2NoZWNrX291dF90aW1lX2RhdGVfYXBwcm92ZWQnICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHQvLyBtaXhlZCBzdGF0dXNlczogJ2NoYW5nZV9vdmVyIGNoZWNrX291dCcgLi4uLiB2YXJpYXRpb25zLi4uLiBjaGVjayBtb3JlIGluIFx0XHRmdW5jdGlvbiB3cGJjX2dldF9hdmFpbGFiaWxpdHlfcGVyX2RheXNfYXJyKClcclxuXHRcdFx0XHRkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9kYXknIF0gPSAnYXZhaWxhYmxlJztcclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHRcdGlmICggJ2F2YWlsYWJsZScgIT0gZGF0ZV9ib29raW5nc19vYmpbICdzdW1tYXJ5J11bJ3N0YXR1c19mb3JfZGF5JyBdICl7XHJcblxyXG5cdFx0XHR2YXIgaXNfc2V0X3BlbmRpbmdfZGF5c19zZWxlY3RhYmxlID0gX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdwZW5kaW5nX2RheXNfc2VsZWN0YWJsZScgKTtcdC8vIHNldCBwZW5kaW5nIGRheXMgc2VsZWN0YWJsZSAgICAgICAgICAvLyBGaXhJbjogOC42LjEuMTguXHJcblxyXG5cdFx0XHRzd2l0Y2ggKCBkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSApe1xyXG5cclxuXHRcdFx0XHRjYXNlICcnOlxyXG5cdFx0XHRcdFx0Ly8gVXN1YWxseSAgaXQncyBtZWFucyB0aGF0IGRheSAgaXMgYXZhaWxhYmxlIG9yIHVuYXZhaWxhYmxlIHdpdGhvdXQgdGhlIGJvb2tpbmdzXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAncGVuZGluZyc6XHJcblx0XHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2RhdGUyYXBwcm92ZScgKTtcclxuXHRcdFx0XHRcdGlzX2RheV9zZWxlY3RhYmxlID0gKGlzX2RheV9zZWxlY3RhYmxlKSA/IHRydWUgOiBpc19zZXRfcGVuZGluZ19kYXlzX3NlbGVjdGFibGU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnYXBwcm92ZWQnOlxyXG5cdFx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdkYXRlX2FwcHJvdmVkJyApO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdC8vIFNpdHVhdGlvbnMgZm9yIFwiY2hhbmdlLW92ZXJcIiBkYXlzOiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdFx0Y2FzZSAncGVuZGluZ19wZW5kaW5nJzpcclxuXHRcdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnY2hlY2tfb3V0X3RpbWVfZGF0ZTJhcHByb3ZlJywgJ2NoZWNrX2luX3RpbWVfZGF0ZTJhcHByb3ZlJyApO1xyXG5cdFx0XHRcdFx0aXNfZGF5X3NlbGVjdGFibGUgPSAoaXNfZGF5X3NlbGVjdGFibGUpID8gdHJ1ZSA6IGlzX3NldF9wZW5kaW5nX2RheXNfc2VsZWN0YWJsZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdwZW5kaW5nX2FwcHJvdmVkJzpcclxuXHRcdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnY2hlY2tfb3V0X3RpbWVfZGF0ZTJhcHByb3ZlJywgJ2NoZWNrX2luX3RpbWVfZGF0ZV9hcHByb3ZlZCcgKTtcclxuXHRcdFx0XHRcdGlzX2RheV9zZWxlY3RhYmxlID0gKGlzX2RheV9zZWxlY3RhYmxlKSA/IHRydWUgOiBpc19zZXRfcGVuZGluZ19kYXlzX3NlbGVjdGFibGU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnYXBwcm92ZWRfcGVuZGluZyc6XHJcblx0XHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2NoZWNrX291dF90aW1lX2RhdGVfYXBwcm92ZWQnLCAnY2hlY2tfaW5fdGltZV9kYXRlMmFwcHJvdmUnICk7XHJcblx0XHRcdFx0XHRpc19kYXlfc2VsZWN0YWJsZSA9IChpc19kYXlfc2VsZWN0YWJsZSkgPyB0cnVlIDogaXNfc2V0X3BlbmRpbmdfZGF5c19zZWxlY3RhYmxlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ2FwcHJvdmVkX2FwcHJvdmVkJzpcclxuXHRcdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnY2hlY2tfb3V0X3RpbWVfZGF0ZV9hcHByb3ZlZCcsICdjaGVja19pbl90aW1lX2RhdGVfYXBwcm92ZWQnICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gWyBpc19kYXlfc2VsZWN0YWJsZSwgY3NzX2NsYXNzZXNfX2Zvcl9kYXRlLmpvaW4oICcgJyApIF07XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogTW91c2VvdmVyIGNhbGVuZGFyIGRhdGUgY2VsbHNcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBzdHJpbmdfZGF0ZVxyXG5cdCAqIEBwYXJhbSBkYXRlXHRcdFx0XHRcdFx0XHRcdFx0XHQtICBKYXZhU2NyaXB0IERhdGUgT2JqOiAgXHRcdE1vbiBEZWMgMTEgMjAyMyAwMDowMDowMCBHTVQrMDIwMCAoRWFzdGVybiBFdXJvcGVhbiBTdGFuZGFyZCBUaW1lKVxyXG5cdCAqIEBwYXJhbSBjYWxlbmRhcl9wYXJhbXNfYXJyXHRcdFx0XHRcdFx0LSAgQ2FsZW5kYXIgU2V0dGluZ3MgT2JqZWN0OiAgXHR7XHJcblx0ICpcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgXHRcdFx0XHRcdFx0XCJyZXNvdXJjZV9pZFwiOiA0XHJcblx0ICpcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0ICogQHBhcmFtIGRhdGVwaWNrX3RoaXNcdFx0XHRcdFx0XHRcdFx0LSB0aGlzIG9mIGRhdGVwaWNrIE9ialxyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfX2NhbGVuZGFyX19vbl9ob3Zlcl9kYXlzKCBzdHJpbmdfZGF0ZSwgZGF0ZSwgY2FsZW5kYXJfcGFyYW1zX2FyciwgZGF0ZXBpY2tfdGhpcyApIHtcclxuXHJcblx0XHRpZiAoIG51bGwgPT09IGRhdGUgKSB7XHJcblx0XHRcdHdwYmNfY2FsZW5kYXJzX19jbGVhcl9kYXlzX2hpZ2hsaWdodGluZyggKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgKGNhbGVuZGFyX3BhcmFtc19hcnJbICdyZXNvdXJjZV9pZCcgXSkpID8gY2FsZW5kYXJfcGFyYW1zX2FyclsgJ3Jlc291cmNlX2lkJyBdIDogJzEnICk7XHRcdC8vIEZpeEluOiAxMC41LjIuNC5cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBjbGFzc19kYXkgICAgID0gd3BiY19fZ2V0X190ZF9jbGFzc19kYXRlKCBkYXRlICk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gJzEtOS0yMDIzJ1xyXG5cdFx0dmFyIHNxbF9jbGFzc19kYXkgPSB3cGJjX19nZXRfX3NxbF9jbGFzc19kYXRlKCBkYXRlICk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gJzIwMjMtMDEtMDknXHJcblx0XHR2YXIgcmVzb3VyY2VfaWQgPSAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YoY2FsZW5kYXJfcGFyYW1zX2FyclsgJ3Jlc291cmNlX2lkJyBdKSApID8gY2FsZW5kYXJfcGFyYW1zX2FyclsgJ3Jlc291cmNlX2lkJyBdIDogJzEnO1x0XHQvLyAnMSdcclxuXHJcblx0XHQvLyBHZXQgRGF0YSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0dmFyIGRhdGVfYm9va2luZ19vYmogPSBfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKCByZXNvdXJjZV9pZCwgc3FsX2NsYXNzX2RheSApO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB7Li4ufVxyXG5cclxuXHRcdGlmICggISBkYXRlX2Jvb2tpbmdfb2JqICl7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHJcblx0XHQvLyBUIG8gbyBsIHQgaSBwIHMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0dmFyIHRvb2x0aXBfdGV4dCA9ICcnO1xyXG5cdFx0aWYgKCBkYXRlX2Jvb2tpbmdfb2JqWyAnc3VtbWFyeSddWyd0b29sdGlwX2F2YWlsYWJpbGl0eScgXS5sZW5ndGggPiAwICl7XHJcblx0XHRcdHRvb2x0aXBfdGV4dCArPSAgZGF0ZV9ib29raW5nX29ialsgJ3N1bW1hcnknXVsndG9vbHRpcF9hdmFpbGFiaWxpdHknIF07XHJcblx0XHR9XHJcblx0XHRpZiAoIGRhdGVfYm9va2luZ19vYmpbICdzdW1tYXJ5J11bJ3Rvb2x0aXBfZGF5X2Nvc3QnIF0ubGVuZ3RoID4gMCApe1xyXG5cdFx0XHR0b29sdGlwX3RleHQgKz0gIGRhdGVfYm9va2luZ19vYmpbICdzdW1tYXJ5J11bJ3Rvb2x0aXBfZGF5X2Nvc3QnIF07XHJcblx0XHR9XHJcblx0XHRpZiAoIGRhdGVfYm9va2luZ19vYmpbICdzdW1tYXJ5J11bJ3Rvb2x0aXBfdGltZXMnIF0ubGVuZ3RoID4gMCApe1xyXG5cdFx0XHR0b29sdGlwX3RleHQgKz0gIGRhdGVfYm9va2luZ19vYmpbICdzdW1tYXJ5J11bJ3Rvb2x0aXBfdGltZXMnIF07XHJcblx0XHR9XHJcblx0XHRpZiAoIGRhdGVfYm9va2luZ19vYmpbICdzdW1tYXJ5J11bJ3Rvb2x0aXBfYm9va2luZ19kZXRhaWxzJyBdLmxlbmd0aCA+IDAgKXtcclxuXHRcdFx0dG9vbHRpcF90ZXh0ICs9ICBkYXRlX2Jvb2tpbmdfb2JqWyAnc3VtbWFyeSddWyd0b29sdGlwX2Jvb2tpbmdfZGV0YWlscycgXTtcclxuXHRcdH1cclxuXHRcdHdwYmNfc2V0X3Rvb2x0aXBfX19mb3JfX2NhbGVuZGFyX2RhdGUoIHRvb2x0aXBfdGV4dCwgcmVzb3VyY2VfaWQsIGNsYXNzX2RheSApO1xyXG5cclxuXHJcblxyXG5cdFx0Ly8gIFUgbiBoIG8gdiBlIHIgaSBuIGcgICAgaW4gICAgVU5TRUxFQ1RBQkxFX0NBTEVOREFSICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdHZhciBpc191bnNlbGVjdGFibGVfY2FsZW5kYXIgPSAoIGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nX3Vuc2VsZWN0YWJsZScgKyByZXNvdXJjZV9pZCApLmxlbmd0aCA+IDApO1x0XHRcdFx0Ly8gRml4SW46IDguMC4xLjIuXHJcblx0XHR2YXIgaXNfYm9va2luZ19mb3JtX2V4aXN0ICAgID0gKCBqUXVlcnkoICcjYm9va2luZ19mb3JtX2RpdicgKyByZXNvdXJjZV9pZCApLmxlbmd0aCA+IDAgKTtcclxuXHJcblx0XHRpZiAoICggaXNfdW5zZWxlY3RhYmxlX2NhbGVuZGFyICkgJiYgKCAhIGlzX2Jvb2tpbmdfZm9ybV9leGlzdCApICl7XHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogIFVuIEhvdmVyIGFsbCBkYXRlcyBpbiBjYWxlbmRhciAod2l0aG91dCB0aGUgYm9va2luZyBmb3JtKSwgaWYgb25seSBBdmFpbGFiaWxpdHkgQ2FsZW5kYXIgaGVyZSBhbmQgd2UgZG8gbm90IGluc2VydCBCb29raW5nIGZvcm0gYnkgbWlzdGFrZS5cclxuXHRcdFx0ICovXHJcblxyXG5cdFx0XHR3cGJjX2NhbGVuZGFyc19fY2xlYXJfZGF5c19oaWdobGlnaHRpbmcoIHJlc291cmNlX2lkICk7IFx0XHRcdFx0XHRcdFx0Ly8gQ2xlYXIgZGF5cyBoaWdobGlnaHRpbmdcclxuXHJcblx0XHRcdHZhciBjc3Nfb2ZfY2FsZW5kYXIgPSAnLndwYmNfb25seV9jYWxlbmRhciAjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZDtcclxuXHRcdFx0alF1ZXJ5KCBjc3Nfb2ZfY2FsZW5kYXIgKyAnIC5kYXRlcGljay1kYXlzLWNlbGwsICdcclxuXHRcdFx0XHQgICsgY3NzX29mX2NhbGVuZGFyICsgJyAuZGF0ZXBpY2stZGF5cy1jZWxsIGEnICkuY3NzKCAnY3Vyc29yJywgJ2RlZmF1bHQnICk7XHQvLyBTZXQgY3Vyc29yIHRvIERlZmF1bHRcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0Ly8gIEQgYSB5IHMgICAgSCBvIHYgZSByIGkgbiBnICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdGlmIChcclxuXHRcdFx0ICAgKCBsb2NhdGlvbi5ocmVmLmluZGV4T2YoICdwYWdlPXdwYmMnICkgPT0gLTEgKVxyXG5cdFx0XHR8fCAoIGxvY2F0aW9uLmhyZWYuaW5kZXhPZiggJ3BhZ2U9d3BiYy1uZXcnICkgPiAwIClcclxuXHRcdFx0fHwgKCBsb2NhdGlvbi5ocmVmLmluZGV4T2YoICdwYWdlPXdwYmMtc2V0dXAnICkgPiAwIClcclxuXHRcdFx0fHwgKCBsb2NhdGlvbi5ocmVmLmluZGV4T2YoICdwYWdlPXdwYmMtYXZhaWxhYmlsaXR5JyApID4gMCApXHJcblx0XHRcdHx8ICggICggbG9jYXRpb24uaHJlZi5pbmRleE9mKCAncGFnZT13cGJjLXNldHRpbmdzJyApID4gMCApICAmJlxyXG5cdFx0XHRcdCAgKCBsb2NhdGlvbi5ocmVmLmluZGV4T2YoICcmdGFiPWZvcm0nICkgPiAwIClcclxuXHRcdFx0ICAgKVxyXG5cdFx0KXtcclxuXHRcdFx0Ly8gVGhlIHNhbWUgYXMgZGF0ZXMgc2VsZWN0aW9uLCAgYnV0IGZvciBkYXlzIGhvdmVyaW5nXHJcblxyXG5cdFx0XHRpZiAoICdmdW5jdGlvbicgPT0gdHlwZW9mKCB3cGJjX19jYWxlbmRhcl9fZG9fZGF5c19oaWdobGlnaHRfX2JzICkgKXtcclxuXHRcdFx0XHR3cGJjX19jYWxlbmRhcl9fZG9fZGF5c19oaWdobGlnaHRfX2JzKCBzcWxfY2xhc3NfZGF5LCBkYXRlLCByZXNvdXJjZV9pZCApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNlbGVjdCBjYWxlbmRhciBkYXRlIGNlbGxzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gZGF0ZVx0XHRcdFx0XHRcdFx0XHRcdFx0LSAgSmF2YVNjcmlwdCBEYXRlIE9iajogIFx0XHRNb24gRGVjIDExIDIwMjMgMDA6MDA6MDAgR01UKzAyMDAgKEVhc3Rlcm4gRXVyb3BlYW4gU3RhbmRhcmQgVGltZSlcclxuXHQgKiBAcGFyYW0gY2FsZW5kYXJfcGFyYW1zX2Fyclx0XHRcdFx0XHRcdC0gIENhbGVuZGFyIFNldHRpbmdzIE9iamVjdDogIFx0e1xyXG5cdCAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIFx0XHRcdFx0XHRcdFwicmVzb3VyY2VfaWRcIjogNFxyXG5cdCAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdCAqIEBwYXJhbSBkYXRlcGlja190aGlzXHRcdFx0XHRcdFx0XHRcdC0gdGhpcyBvZiBkYXRlcGljayBPYmpcclxuXHQgKlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfX2NhbGVuZGFyX19vbl9zZWxlY3RfZGF5cyggZGF0ZSwgY2FsZW5kYXJfcGFyYW1zX2FyciwgZGF0ZXBpY2tfdGhpcyApe1xyXG5cclxuXHRcdHZhciByZXNvdXJjZV9pZCA9ICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZihjYWxlbmRhcl9wYXJhbXNfYXJyWyAncmVzb3VyY2VfaWQnIF0pICkgPyBjYWxlbmRhcl9wYXJhbXNfYXJyWyAncmVzb3VyY2VfaWQnIF0gOiAnMSc7XHRcdC8vICcxJ1xyXG5cclxuXHRcdC8vIFNldCB1bnNlbGVjdGFibGUsICBpZiBvbmx5IEF2YWlsYWJpbGl0eSBDYWxlbmRhciAgaGVyZSAoYW5kIHdlIGRvIG5vdCBpbnNlcnQgQm9va2luZyBmb3JtIGJ5IG1pc3Rha2UpLlxyXG5cdFx0dmFyIGlzX3Vuc2VsZWN0YWJsZV9jYWxlbmRhciA9ICggalF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmdfdW5zZWxlY3RhYmxlJyArIHJlc291cmNlX2lkICkubGVuZ3RoID4gMCk7XHRcdFx0XHQvLyBGaXhJbjogOC4wLjEuMi5cclxuXHRcdHZhciBpc19ib29raW5nX2Zvcm1fZXhpc3QgICAgPSAoIGpRdWVyeSggJyNib29raW5nX2Zvcm1fZGl2JyArIHJlc291cmNlX2lkICkubGVuZ3RoID4gMCApO1xyXG5cdFx0aWYgKCAoIGlzX3Vuc2VsZWN0YWJsZV9jYWxlbmRhciApICYmICggISBpc19ib29raW5nX2Zvcm1fZXhpc3QgKSApe1xyXG5cdFx0XHR3cGJjX2NhbGVuZGFyX191bnNlbGVjdF9hbGxfZGF0ZXMoIHJlc291cmNlX2lkICk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBVbnNlbGVjdCBEYXRlc1xyXG5cdFx0XHRqUXVlcnkoJy53cGJjX29ubHlfY2FsZW5kYXIgLnBvcG92ZXJfY2FsZW5kYXJfaG92ZXInKS5yZW1vdmUoKTsgICAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHRcdFx0XHQvLyBIaWRlIGFsbCBvcGVuZWQgcG9wb3ZlcnNcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdGpRdWVyeSggJyNkYXRlX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS52YWwoIGRhdGUgKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEFkZCBzZWxlY3RlZCBkYXRlcyB0byAgaGlkZGVuIHRleHRhcmVhXHJcblxyXG5cclxuXHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mICh3cGJjX19jYWxlbmRhcl9fZG9fZGF5c19zZWxlY3RfX2JzKSApeyB3cGJjX19jYWxlbmRhcl9fZG9fZGF5c19zZWxlY3RfX2JzKCBkYXRlLCByZXNvdXJjZV9pZCApOyB9XHJcblxyXG5cdFx0d3BiY19kaXNhYmxlX3RpbWVfZmllbGRzX2luX2Jvb2tpbmdfZm9ybSggcmVzb3VyY2VfaWQgKTtcclxuXHJcblx0XHQvLyBIb29rIC0tIHRyaWdnZXIgZGF5IHNlbGVjdGlvbiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0dmFyIG1vdXNlX2NsaWNrZWRfZGF0ZXMgPSBkYXRlO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2FuIGJlOiBcIjA1LjEwLjIwMjMgLSAwNy4xMC4yMDIzXCIgIHwgIFwiMTAuMTAuMjAyMyAtIDEwLjEwLjIwMjNcIiAgfFxyXG5cdFx0dmFyIGFsbF9zZWxlY3RlZF9kYXRlc19hcnIgPSB3cGJjX2dldF9fc2VsZWN0ZWRfZGF0ZXNfc3FsX19hc19hcnIoIHJlc291cmNlX2lkICk7XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2FuIGJlOiBbIFwiMjAyMy0xMC0wNVwiLCBcIjIwMjMtMTAtMDZcIiwgXCIyMDIzLTEwLTA3XCIsIOKApiBdXHJcblx0XHRqUXVlcnkoIFwiLmJvb2tpbmdfZm9ybV9kaXZcIiApLnRyaWdnZXIoIFwiZGF0ZV9zZWxlY3RlZFwiLCBbIHJlc291cmNlX2lkLCBtb3VzZV9jbGlja2VkX2RhdGVzLCBhbGxfc2VsZWN0ZWRfZGF0ZXNfYXJyIF0gKTtcclxuXHR9XHJcblxyXG5cdC8vIE1hcmsgbWlkZGxlIHNlbGVjdGVkIGRhdGVzIHdpdGggMC41IG9wYWNpdHlcdFx0Ly8gRml4SW46IDEwLjMuMC45LlxyXG5cdGpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24gKCl7XHJcblx0XHRqUXVlcnkoIFwiLmJvb2tpbmdfZm9ybV9kaXZcIiApLm9uKCAnZGF0ZV9zZWxlY3RlZCcsIGZ1bmN0aW9uICggZXZlbnQsIHJlc291cmNlX2lkLCBkYXRlICl7XHJcblx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0ICAgKCAgJ2ZpeGVkJyA9PT0gX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkYXlzX3NlbGVjdF9tb2RlJyApKVxyXG5cdFx0XHRcdFx0fHwgKCdkeW5hbWljJyA9PT0gX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkYXlzX3NlbGVjdF9tb2RlJyApKVxyXG5cdFx0XHRcdCl7XHJcblx0XHRcdFx0XHR2YXIgY2xvc2VkX3RpbWVyID0gc2V0VGltZW91dCggZnVuY3Rpb24gKCl7XHJcblx0XHRcdFx0XHRcdHZhciBtaWRkbGVfZGF5c19vcGFjaXR5ID0gX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAnY2FsZW5kYXJzX19kYXlzX3NlbGVjdGlvbl9fbWlkZGxlX2RheXNfb3BhY2l0eScgKTtcclxuXHRcdFx0XHRcdFx0alF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKyAnIC5kYXRlcGljay1jdXJyZW50LWRheScgKS5ub3QoIFwiLnNlbGVjdGVkX2NoZWNrX2luX291dFwiICkuY3NzKCAnb3BhY2l0eScsIG1pZGRsZV9kYXlzX29wYWNpdHkgKTtcclxuXHRcdFx0XHRcdH0sIDEwICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIC0tICBUIGkgbSBlICAgIEYgaSBlIGwgZCBzICAgICBzdGFydCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgKi9cclxuXHJcblx0LyoqXHJcblx0ICogRGlzYWJsZSB0aW1lIHNsb3RzIGluIGJvb2tpbmcgZm9ybSBkZXBlbmQgb24gc2VsZWN0ZWQgZGF0ZXMgYW5kIGJvb2tlZCBkYXRlcy90aW1lc1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19kaXNhYmxlX3RpbWVfZmllbGRzX2luX2Jvb2tpbmdfZm9ybSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFx0MS4gR2V0IGFsbCB0aW1lIGZpZWxkcyBpbiB0aGUgYm9va2luZyBmb3JtIGFzIGFycmF5ICBvZiBvYmplY3RzXHJcblx0XHQgKiBcdFx0XHRcdFx0W1xyXG5cdFx0ICogXHRcdFx0XHRcdCBcdCAgIHtcdGpxdWVyeV9vcHRpb246ICAgICAgalF1ZXJ5X09iamVjdCB7fVxyXG5cdFx0ICogXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICAgICAgICAgICAgICAgJ3JhbmdldGltZTJbXSdcclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR0aW1lc19hc19zZWNvbmRzOiAgIFsgMjE2MDAsIDIzNDAwIF1cclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCAtIDA2OjMwJ1xyXG5cdFx0ICogXHRcdFx0XHRcdCAgICAgfVxyXG5cdFx0ICogXHRcdFx0XHRcdCAgLi4uXHJcblx0XHQgKiBcdFx0XHRcdFx0XHQgICB7XHRqcXVlcnlfb3B0aW9uOiAgICAgIGpRdWVyeV9PYmplY3Qge31cclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAgICAgICAgICAgICAgICdzdGFydHRpbWUyW10nXHJcblx0XHQgKiBcdFx0XHRcdFx0XHRcdFx0dGltZXNfYXNfc2Vjb25kczogICBbIDIxNjAwIF1cclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCdcclxuXHRcdCAqICBcdFx0XHRcdFx0ICAgIH1cclxuXHRcdCAqIFx0XHRcdFx0XHQgXVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdGltZV9maWVsZHNfb2JqX2FyciA9IHdwYmNfZ2V0X190aW1lX2ZpZWxkc19faW5fYm9va2luZ19mb3JtX19hc19hcnIoIHJlc291cmNlX2lkICk7XHJcblxyXG5cdFx0Ly8gMi4gR2V0IGFsbCBzZWxlY3RlZCBkYXRlcyBpbiAgU1FMIGZvcm1hdCAgbGlrZSB0aGlzIFsgXCIyMDIzLTA4LTIzXCIsIFwiMjAyMy0wOC0yNFwiLCBcIjIwMjMtMDgtMjVcIiwgLi4uIF1cclxuXHRcdHZhciBzZWxlY3RlZF9kYXRlc19hcnIgPSB3cGJjX2dldF9fc2VsZWN0ZWRfZGF0ZXNfc3FsX19hc19hcnIoIHJlc291cmNlX2lkICk7XHJcblxyXG5cdFx0Ly8gMy4gR2V0IGNoaWxkIGJvb2tpbmcgcmVzb3VyY2VzICBvciBzaW5nbGUgYm9va2luZyByZXNvdXJjZSAgdGhhdCAgZXhpc3QgIGluIGRhdGVzXHJcblx0XHR2YXIgY2hpbGRfcmVzb3VyY2VzX2FyciA9IHdwYmNfY2xvbmVfb2JqKCBfd3BiYy5ib29raW5nX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAncmVzb3VyY2VzX2lkX2Fycl9faW5fZGF0ZXMnICkgKTtcclxuXHJcblx0XHR2YXIgc3FsX2RhdGU7XHJcblx0XHR2YXIgY2hpbGRfcmVzb3VyY2VfaWQ7XHJcblx0XHR2YXIgbWVyZ2VkX3NlY29uZHM7XHJcblx0XHR2YXIgdGltZV9maWVsZHNfb2JqO1xyXG5cdFx0dmFyIGlzX2ludGVyc2VjdDtcclxuXHRcdHZhciBpc19jaGVja19pbjtcclxuXHJcblx0XHR2YXIgdG9kYXlfdGltZV9fcmVhbCAgPSBuZXcgRGF0ZSggX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAndGltZV9sb2NhbF9hcnInIClbMF0sICggcGFyc2VJbnQoIF93cGJjLmdldF9vdGhlcl9wYXJhbSggJ3RpbWVfbG9jYWxfYXJyJyApWzFdICkgLSAxKSwgX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAndGltZV9sb2NhbF9hcnInIClbMl0sIF93cGJjLmdldF9vdGhlcl9wYXJhbSggJ3RpbWVfbG9jYWxfYXJyJyApWzNdLCBfd3BiYy5nZXRfb3RoZXJfcGFyYW0oICd0aW1lX2xvY2FsX2FycicgKVs0XSwgMCApO1xyXG5cdFx0dmFyIHRvZGF5X3RpbWVfX3NoaWZ0ID0gbmV3IERhdGUoIF93cGJjLmdldF9vdGhlcl9wYXJhbSggJ3RvZGF5X2FycicgICAgICApWzBdLCAoIHBhcnNlSW50KCBfd3BiYy5nZXRfb3RoZXJfcGFyYW0oICAgICAgJ3RvZGF5X2FycicgKVsxXSApIC0gMSksIF93cGJjLmdldF9vdGhlcl9wYXJhbSggJ3RvZGF5X2FycicgICAgICApWzJdLCBfd3BiYy5nZXRfb3RoZXJfcGFyYW0oICd0b2RheV9hcnInICAgICAgKVszXSwgX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAndG9kYXlfYXJyJyAgICAgIClbNF0sIDAgKTtcclxuXHJcblx0XHQvLyA0LiBMb29wICBhbGwgIHRpbWUgRmllbGRzIG9wdGlvbnNcdFx0Ly8gRml4SW46IDEwLjMuMC4yLlxyXG5cdFx0Zm9yICggbGV0IGZpZWxkX2tleSA9IDA7IGZpZWxkX2tleSA8IHRpbWVfZmllbGRzX29ial9hcnIubGVuZ3RoOyBmaWVsZF9rZXkrKyApe1xyXG5cclxuXHRcdFx0dGltZV9maWVsZHNfb2JqX2FyclsgZmllbGRfa2V5IF0uZGlzYWJsZWQgPSAwOyAgICAgICAgICAvLyBCeSBkZWZhdWx0LCB0aGlzIHRpbWUgZmllbGQgaXMgbm90IGRpc2FibGVkLlxyXG5cclxuXHRcdFx0dGltZV9maWVsZHNfb2JqID0gdGltZV9maWVsZHNfb2JqX2FyclsgZmllbGRfa2V5IF07XHRcdC8vIHsgdGltZXNfYXNfc2Vjb25kczogWyAyMTYwMCwgMjM0MDAgXSwgdmFsdWVfb3B0aW9uXzI0aDogJzA2OjAwIC0gMDY6MzAnLCBuYW1lOiAncmFuZ2V0aW1lMltdJywganF1ZXJ5X29wdGlvbjogalF1ZXJ5X09iamVjdCB7fX1cclxuXHJcblx0XHRcdC8vIExvb3AgIGFsbCAgc2VsZWN0ZWQgZGF0ZXMuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHNlbGVjdGVkX2RhdGVzX2Fyci5sZW5ndGg7IGkrKyApIHtcclxuXHJcblx0XHRcdFx0Ly8gR2V0IERhdGU6ICcyMDIzLTA4LTE4Jy5cclxuXHRcdFx0XHRzcWxfZGF0ZSA9IHNlbGVjdGVkX2RhdGVzX2FycltpXTtcclxuXHJcblx0XHRcdFx0dmFyIGlzX3RpbWVfaW5fcGFzdCA9IHdwYmNfY2hlY2tfaXNfdGltZV9pbl9wYXN0KCB0b2RheV90aW1lX19zaGlmdCwgc3FsX2RhdGUsIHRpbWVfZmllbGRzX29iaiApO1xyXG5cdFx0XHRcdC8vIEV4Y2VwdGlvbiAgZm9yICdFbmQgVGltZScgZmllbGQsICB3aGVuICBzZWxlY3RlZCBzZXZlcmFsIGRhdGVzLiAvLyBGaXhJbjogMTAuMTQuMS41LlxyXG5cdFx0XHRcdGlmICggKCdPbicgIT09IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnYm9va2luZ19yZWN1cnJlbnRfdGltZScgKSkgJiZcclxuXHRcdFx0XHRcdCgtMSAhPT0gdGltZV9maWVsZHNfb2JqLm5hbWUuaW5kZXhPZiggJ2VuZHRpbWUnICkpICYmXHJcblx0XHRcdFx0XHQoc2VsZWN0ZWRfZGF0ZXNfYXJyLmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0KSB7XHJcblx0XHRcdFx0XHRpc190aW1lX2luX3Bhc3QgPSB3cGJjX2NoZWNrX2lzX3RpbWVfaW5fcGFzdCggdG9kYXlfdGltZV9fc2hpZnQsIHNlbGVjdGVkX2RhdGVzX2Fyclsoc2VsZWN0ZWRfZGF0ZXNfYXJyLmxlbmd0aCAtIDEpXSwgdGltZV9maWVsZHNfb2JqICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICggaXNfdGltZV9pbl9wYXN0ICkge1xyXG5cdFx0XHRcdFx0Ly8gVGhpcyB0aW1lIGZvciBzZWxlY3RlZCBkYXRlIGFscmVhZHkgIGluIHRoZSBwYXN0LlxyXG5cdFx0XHRcdFx0dGltZV9maWVsZHNfb2JqX2FycltmaWVsZF9rZXldLmRpc2FibGVkID0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBleGlzdCAgZnJvbSAgIERhdGVzIExPT1AuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC8vIEZpeEluOiA5LjkuMC4zMS5cclxuXHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQgICAoICdPZmYnID09PSBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2Jvb2tpbmdfcmVjdXJyZW50X3RpbWUnICkgKVxyXG5cdFx0XHRcdFx0JiYgKCBzZWxlY3RlZF9kYXRlc19hcnIubGVuZ3RoPjEgKVxyXG5cdFx0XHRcdCl7XHJcblx0XHRcdFx0XHQvL1RPRE86IHNraXAgc29tZSBmaWVsZHMgY2hlY2tpbmcgaWYgaXQncyBzdGFydCAvIGVuZCB0aW1lIGZvciBtdWxwbGUgZGF0ZXMgIHNlbGVjdGlvbiAgbW9kZS5cclxuXHRcdFx0XHRcdC8vVE9ETzogd2UgbmVlZCB0byBmaXggc2l0dWF0aW9uICBmb3IgZW50aW1lcywgIHdoZW4gIHVzZXIgIHNlbGVjdCAgc2V2ZXJhbCAgZGF0ZXMsICBhbmQgaW4gc3RhcnQgIHRpbWUgYm9va2VkIDAwOjAwIC0gMTU6MDAgLCBidXQgc3lzdHNtZSBibG9jayB1bnRpbGwgMTU6MDAgdGhlIGVuZCB0aW1lIGFzIHdlbGwsICB3aGljaCAgaXMgd3JvbmcsICBiZWNhdXNlIGl0IDIgb3IgMyBkYXRlcyBzZWxlY3Rpb24gIGFuZCBlbmQgZGF0ZSBjYW4gYmUgZnVsbHUgIGF2YWlsYWJsZVxyXG5cclxuXHRcdFx0XHRcdGlmICggKDAgPT0gaSkgJiYgKHRpbWVfZmllbGRzX29ialsgJ25hbWUnIF0uaW5kZXhPZiggJ2VuZHRpbWUnICkgPj0gMCkgKXtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoICggKHNlbGVjdGVkX2RhdGVzX2Fyci5sZW5ndGgtMSkgPT0gaSApICYmICh0aW1lX2ZpZWxkc19vYmpbICduYW1lJyBdLmluZGV4T2YoICdzdGFydHRpbWUnICkgPj0gMCkgKXtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHJcblxyXG5cdFx0XHRcdHZhciBob3dfbWFueV9yZXNvdXJjZXNfaW50ZXJzZWN0ZWQgPSAwO1xyXG5cdFx0XHRcdC8vIExvb3AgYWxsIHJlc291cmNlcyBJRFxyXG5cdFx0XHRcdFx0Ly8gZm9yICggdmFyIHJlc19rZXkgaW4gY2hpbGRfcmVzb3VyY2VzX2FyciApe1x0IFx0XHRcdFx0XHRcdC8vIEZpeEluOiAxMC4zLjAuMi5cclxuXHRcdFx0XHRmb3IgKCBsZXQgcmVzX2tleSA9IDA7IHJlc19rZXkgPCBjaGlsZF9yZXNvdXJjZXNfYXJyLmxlbmd0aDsgcmVzX2tleSsrICl7XHJcblxyXG5cdFx0XHRcdFx0Y2hpbGRfcmVzb3VyY2VfaWQgPSBjaGlsZF9yZXNvdXJjZXNfYXJyWyByZXNfa2V5IF07XHJcblxyXG5cdFx0XHRcdFx0Ly8gX3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJylbMTJdLmJvb2tlZF90aW1lX3Nsb3RzLm1lcmdlZF9zZWNvbmRzXHRcdD0gWyBcIjA3OjAwOjExIC0gMDc6MzA6MDJcIiwgXCIxMDowMDoxMSAtIDAwOjAwOjAwXCIgXVxyXG5cdFx0XHRcdFx0Ly8gX3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJylbMl0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3NlY29uZHNcdFx0XHQ9IFsgIFsgMjUyMTEsIDI3MDAyIF0sIFsgMzYwMTEsIDg2NDAwIF0gIF1cclxuXHJcblx0XHRcdFx0XHRpZiAoIGZhbHNlICE9PSBfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKCByZXNvdXJjZV9pZCwgc3FsX2RhdGUgKSApe1xyXG5cdFx0XHRcdFx0XHRtZXJnZWRfc2Vjb25kcyA9IF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXRfZm9yX2RhdGUoIHJlc291cmNlX2lkLCBzcWxfZGF0ZSApWyBjaGlsZF9yZXNvdXJjZV9pZCBdLmJvb2tlZF90aW1lX3Nsb3RzLm1lcmdlZF9zZWNvbmRzO1x0XHQvLyBbICBbIDI1MjExLCAyNzAwMiBdLCBbIDM2MDExLCA4NjQwMCBdICBdXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRtZXJnZWRfc2Vjb25kcyA9IFtdO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKCB0aW1lX2ZpZWxkc19vYmoudGltZXNfYXNfc2Vjb25kcy5sZW5ndGggPiAxICl7XHJcblx0XHRcdFx0XHRcdGlzX2ludGVyc2VjdCA9IHdwYmNfaXNfaW50ZXJzZWN0X19yYW5nZV90aW1lX2ludGVydmFsKCAgW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KCBwYXJzZUludCggdGltZV9maWVsZHNfb2JqLnRpbWVzX2FzX3NlY29uZHNbMF0gKSArIDIwICksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KCBwYXJzZUludCggdGltZV9maWVsZHNfb2JqLnRpbWVzX2FzX3NlY29uZHNbMV0gKSAtIDIwIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0LCBtZXJnZWRfc2Vjb25kcyApO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aXNfY2hlY2tfaW4gPSAoLTEgIT09IHRpbWVfZmllbGRzX29iai5uYW1lLmluZGV4T2YoICdzdGFydCcgKSk7XHJcblx0XHRcdFx0XHRcdGlzX2ludGVyc2VjdCA9IHdwYmNfaXNfaW50ZXJzZWN0X19vbmVfdGltZV9pbnRlcnZhbChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCggKCBpc19jaGVja19pbiApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgID8gcGFyc2VJbnQoIHRpbWVfZmllbGRzX29iai50aW1lc19hc19zZWNvbmRzICkgKyAyMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICA6IHBhcnNlSW50KCB0aW1lX2ZpZWxkc19vYmoudGltZXNfYXNfc2Vjb25kcyApIC0gMjBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCwgbWVyZ2VkX3NlY29uZHMgKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChpc19pbnRlcnNlY3Qpe1xyXG5cdFx0XHRcdFx0XHRob3dfbWFueV9yZXNvdXJjZXNfaW50ZXJzZWN0ZWQrKztcdFx0XHQvLyBJbmNyZWFzZVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdGlmICggY2hpbGRfcmVzb3VyY2VzX2Fyci5sZW5ndGggPT0gaG93X21hbnlfcmVzb3VyY2VzX2ludGVyc2VjdGVkICkge1xyXG5cdFx0XHRcdFx0Ly8gQWxsIHJlc291cmNlcyBpbnRlcnNlY3RlZCwgIHRoZW4gIGl0J3MgbWVhbnMgdGhhdCB0aGlzIHRpbWUtc2xvdCBvciB0aW1lIG11c3QgIGJlICBEaXNhYmxlZCwgYW5kIHdlIGNhbiAgZXhpc3QgIGZyb20gICBzZWxlY3RlZF9kYXRlc19hcnIgTE9PUFxyXG5cclxuXHRcdFx0XHRcdHRpbWVfZmllbGRzX29ial9hcnJbIGZpZWxkX2tleSBdLmRpc2FibGVkID0gMTtcclxuXHRcdFx0XHRcdGJyZWFrO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBleGlzdCAgZnJvbSAgIERhdGVzIExPT1BcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblxyXG5cdFx0Ly8gNS4gTm93IHdlIGNhbiBkaXNhYmxlIHRpbWUgc2xvdCBpbiBIVE1MIGJ5ICB1c2luZyAgKCBmaWVsZC5kaXNhYmxlZCA9PSAxICkgcHJvcGVydHlcclxuXHRcdHdwYmNfX2h0bWxfX3RpbWVfZmllbGRfb3B0aW9uc19fc2V0X2Rpc2FibGVkKCB0aW1lX2ZpZWxkc19vYmpfYXJyICk7XHJcblxyXG5cdFx0alF1ZXJ5KCBcIi5ib29raW5nX2Zvcm1fZGl2XCIgKS50cmlnZ2VyKCAnd3BiY19ob29rX3RpbWVzbG90c19kaXNhYmxlZCcsIFtyZXNvdXJjZV9pZCwgc2VsZWN0ZWRfZGF0ZXNfYXJyXSApO1x0XHRcdFx0XHQvLyBUcmlnZ2VyIGhvb2sgb24gZGlzYWJsaW5nIHRpbWVzbG90cy5cdFx0VXNhZ2U6IFx0alF1ZXJ5KCBcIi5ib29raW5nX2Zvcm1fZGl2XCIgKS5vbiggJ3dwYmNfaG9va190aW1lc2xvdHNfZGlzYWJsZWQnLCBmdW5jdGlvbiAoIGV2ZW50LCBia190eXBlLCBhbGxfZGF0ZXMgKXsgLi4uIH0gKTtcdFx0Ly8gRml4SW46IDguNy4xMS45LlxyXG5cdH1cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBDaGVjayBpZiBzcGVjaWZpYyB0aW1lKC1zbG90KSBhbHJlYWR5ICBpbiB0aGUgcGFzdCBmb3Igc2VsZWN0ZWQgZGF0ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSBqc19jdXJyZW50X3RpbWVfdG9fY2hlY2tcdFx0LSBKUyBEYXRlXHJcblx0XHQgKiBAcGFyYW0gc3FsX2RhdGVcdFx0XHRcdFx0XHQtICcyMDI1LTAxLTI2J1xyXG5cdFx0ICogQHBhcmFtIHRpbWVfZmllbGRzX29ialx0XHRcdFx0LSBPYmplY3RcclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB3cGJjX2NoZWNrX2lzX3RpbWVfaW5fcGFzdCgganNfY3VycmVudF90aW1lX3RvX2NoZWNrLCBzcWxfZGF0ZSwgdGltZV9maWVsZHNfb2JqICkge1xyXG5cclxuXHRcdFx0Ly8gRml4SW46IDEwLjkuNi40XHJcblx0XHRcdHZhciBzcWxfZGF0ZV9hcnIgPSBzcWxfZGF0ZS5zcGxpdCggJy0nICk7XHJcblx0XHRcdHZhciBzcWxfZGF0ZV9fbWlkbmlnaHQgPSBuZXcgRGF0ZSggcGFyc2VJbnQoIHNxbF9kYXRlX2FyclswXSApLCAoIHBhcnNlSW50KCBzcWxfZGF0ZV9hcnJbMV0gKSAtIDEgKSwgcGFyc2VJbnQoIHNxbF9kYXRlX2FyclsyXSApLCAwLCAwLCAwICk7XHJcblx0XHRcdHZhciBzcWxfZGF0ZV9fbWlkbmlnaHRfbWlsaXNlY29uZHMgPSBzcWxfZGF0ZV9fbWlkbmlnaHQuZ2V0VGltZSgpO1xyXG5cclxuXHRcdFx0dmFyIGlzX2ludGVyc2VjdCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0aWYgKCB0aW1lX2ZpZWxkc19vYmoudGltZXNfYXNfc2Vjb25kcy5sZW5ndGggPiAxICkge1xyXG5cclxuXHRcdFx0XHRpZiAoIGpzX2N1cnJlbnRfdGltZV90b19jaGVjay5nZXRUaW1lKCkgPiAoc3FsX2RhdGVfX21pZG5pZ2h0X21pbGlzZWNvbmRzICsgKHBhcnNlSW50KCB0aW1lX2ZpZWxkc19vYmoudGltZXNfYXNfc2Vjb25kc1swXSApICsgMjApICogMTAwMCkgKSB7XHJcblx0XHRcdFx0XHRpc19pbnRlcnNlY3QgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIGpzX2N1cnJlbnRfdGltZV90b19jaGVjay5nZXRUaW1lKCkgPiAoc3FsX2RhdGVfX21pZG5pZ2h0X21pbGlzZWNvbmRzICsgKHBhcnNlSW50KCB0aW1lX2ZpZWxkc19vYmoudGltZXNfYXNfc2Vjb25kc1sxXSApIC0gMjApICogMTAwMCkgKSB7XHJcblx0XHRcdFx0XHRpc19pbnRlcnNlY3QgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyIGlzX2NoZWNrX2luID0gKC0xICE9PSB0aW1lX2ZpZWxkc19vYmoubmFtZS5pbmRleE9mKCAnc3RhcnQnICkpO1xyXG5cclxuXHRcdFx0XHR2YXIgdGltZXNfYXNfc2Vjb25kc19jaGVjayA9IChpc19jaGVja19pbikgPyBwYXJzZUludCggdGltZV9maWVsZHNfb2JqLnRpbWVzX2FzX3NlY29uZHMgKSArIDIwIDogcGFyc2VJbnQoIHRpbWVfZmllbGRzX29iai50aW1lc19hc19zZWNvbmRzICkgLSAyMDtcclxuXHJcblx0XHRcdFx0dGltZXNfYXNfc2Vjb25kc19jaGVjayA9IHNxbF9kYXRlX19taWRuaWdodF9taWxpc2Vjb25kcyArIHRpbWVzX2FzX3NlY29uZHNfY2hlY2sgKiAxMDAwO1xyXG5cclxuXHRcdFx0XHRpZiAoIGpzX2N1cnJlbnRfdGltZV90b19jaGVjay5nZXRUaW1lKCkgPiB0aW1lc19hc19zZWNvbmRzX2NoZWNrICkge1xyXG5cdFx0XHRcdFx0aXNfaW50ZXJzZWN0ID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBpc19pbnRlcnNlY3Q7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJcyBudW1iZXIgaW5zaWRlIC9pbnRlcnNlY3QgIG9mIGFycmF5IG9mIGludGVydmFscyA/XHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHRpbWVfQVx0XHQgICAgIFx0LSAyNTgwMFxyXG5cdFx0ICogQHBhcmFtIHRpbWVfaW50ZXJ2YWxfQlx0XHQtIFsgIFsgMjUyMTEsIDI3MDAyIF0sIFsgMzYwMTEsIDg2NDAwIF0gIF1cclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB3cGJjX2lzX2ludGVyc2VjdF9fb25lX3RpbWVfaW50ZXJ2YWwoIHRpbWVfQSwgdGltZV9pbnRlcnZhbF9CICl7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaiA9IDA7IGogPCB0aW1lX2ludGVydmFsX0IubGVuZ3RoOyBqKysgKXtcclxuXHJcblx0XHRcdFx0aWYgKCAocGFyc2VJbnQoIHRpbWVfQSApID4gcGFyc2VJbnQoIHRpbWVfaW50ZXJ2YWxfQlsgaiBdWyAwIF0gKSkgJiYgKHBhcnNlSW50KCB0aW1lX0EgKSA8IHBhcnNlSW50KCB0aW1lX2ludGVydmFsX0JbIGogXVsgMSBdICkpICl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Ly8gaWYgKCAoIHBhcnNlSW50KCB0aW1lX0EgKSA9PSBwYXJzZUludCggdGltZV9pbnRlcnZhbF9CWyBqIF1bIDAgXSApICkgfHwgKCBwYXJzZUludCggdGltZV9BICkgPT0gcGFyc2VJbnQoIHRpbWVfaW50ZXJ2YWxfQlsgaiBdWyAxIF0gKSApICkge1xyXG5cdFx0XHRcdC8vIFx0XHRcdC8vIFRpbWUgQSBqdXN0ICBhdCAgdGhlIGJvcmRlciBvZiBpbnRlcnZhbFxyXG5cdFx0XHRcdC8vIH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdCAgICByZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJcyB0aGVzZSBhcnJheSBvZiBpbnRlcnZhbHMgaW50ZXJzZWN0ZWQgP1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB0aW1lX2ludGVydmFsX0FcdFx0LSBbIFsgMjE2MDAsIDIzNDAwIF0gXVxyXG5cdFx0ICogQHBhcmFtIHRpbWVfaW50ZXJ2YWxfQlx0XHQtIFsgIFsgMjUyMTEsIDI3MDAyIF0sIFsgMzYwMTEsIDg2NDAwIF0gIF1cclxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB3cGJjX2lzX2ludGVyc2VjdF9fcmFuZ2VfdGltZV9pbnRlcnZhbCggdGltZV9pbnRlcnZhbF9BLCB0aW1lX2ludGVydmFsX0IgKXtcclxuXHJcblx0XHRcdHZhciBpc19pbnRlcnNlY3Q7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aW1lX2ludGVydmFsX0EubGVuZ3RoOyBpKysgKXtcclxuXHJcblx0XHRcdFx0Zm9yICggdmFyIGogPSAwOyBqIDwgdGltZV9pbnRlcnZhbF9CLmxlbmd0aDsgaisrICl7XHJcblxyXG5cdFx0XHRcdFx0aXNfaW50ZXJzZWN0ID0gd3BiY19pbnRlcnZhbHNfX2lzX2ludGVyc2VjdGVkKCB0aW1lX2ludGVydmFsX0FbIGkgXSwgdGltZV9pbnRlcnZhbF9CWyBqIF0gKTtcclxuXHJcblx0XHRcdFx0XHRpZiAoIGlzX2ludGVyc2VjdCApe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIEdldCBhbGwgdGltZSBmaWVsZHMgaW4gdGhlIGJvb2tpbmcgZm9ybSBhcyBhcnJheSAgb2Ygb2JqZWN0c1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSByZXNvdXJjZV9pZFxyXG5cdFx0ICogQHJldHVybnMgW11cclxuXHRcdCAqXHJcblx0XHQgKiBcdFx0RXhhbXBsZTpcclxuXHRcdCAqIFx0XHRcdFx0XHRbXHJcblx0XHQgKiBcdFx0XHRcdFx0IFx0ICAge1xyXG5cdFx0ICogXHRcdFx0XHRcdFx0XHRcdHZhbHVlX29wdGlvbl8yNGg6ICAgJzA2OjAwIC0gMDY6MzAnXHJcblx0XHQgKiBcdFx0XHRcdFx0XHRcdFx0dGltZXNfYXNfc2Vjb25kczogICBbIDIxNjAwLCAyMzQwMCBdXHJcblx0XHQgKiBcdFx0XHRcdFx0IFx0ICAgXHRcdGpxdWVyeV9vcHRpb246ICAgICAgalF1ZXJ5X09iamVjdCB7fVxyXG5cdFx0ICogXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICAgICAgICAgICAgICAgJ3JhbmdldGltZTJbXSdcclxuXHRcdCAqIFx0XHRcdFx0XHQgICAgIH1cclxuXHRcdCAqIFx0XHRcdFx0XHQgIC4uLlxyXG5cdFx0ICogXHRcdFx0XHRcdFx0ICAge1xyXG5cdFx0ICogXHRcdFx0XHRcdFx0XHRcdHZhbHVlX29wdGlvbl8yNGg6ICAgJzA2OjAwJ1xyXG5cdFx0ICogXHRcdFx0XHRcdFx0XHRcdHRpbWVzX2FzX3NlY29uZHM6ICAgWyAyMTYwMCBdXHJcblx0XHQgKiBcdFx0XHRcdFx0XHQgICBcdFx0anF1ZXJ5X29wdGlvbjogICAgICBqUXVlcnlfT2JqZWN0IHt9XHJcblx0XHQgKiBcdFx0XHRcdFx0XHRcdFx0bmFtZTogICAgICAgICAgICAgICAnc3RhcnR0aW1lMltdJ1xyXG5cdFx0ICogIFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0ICogXHRcdFx0XHRcdCBdXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHdwYmNfZ2V0X190aW1lX2ZpZWxkc19faW5fYm9va2luZ19mb3JtX19hc19hcnIoIHJlc291cmNlX2lkICl7XHJcblx0XHQgICAgLyoqXHJcblx0XHRcdCAqIEZpZWxkcyB3aXRoICBbXSAgbGlrZSB0aGlzICAgc2VsZWN0W25hbWU9XCJyYW5nZXRpbWUxW11cIl1cclxuXHRcdFx0ICogaXQncyB3aGVuIHdlIGhhdmUgJ211bHRpcGxlJyBpbiBzaG9ydGNvZGU6ICAgW3NlbGVjdCogcmFuZ2V0aW1lIG11bHRpcGxlICBcIjA2OjAwIC0gMDY6MzBcIiAuLi4gXVxyXG5cdFx0XHQgKi9cclxuXHRcdFx0dmFyIHRpbWVfZmllbGRzX2Fycj1bXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cInJhbmdldGltZScgKyByZXNvdXJjZV9pZCArICdcIl0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0W25hbWU9XCJyYW5nZXRpbWUnICsgcmVzb3VyY2VfaWQgKyAnW11cIl0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0W25hbWU9XCJzdGFydHRpbWUnICsgcmVzb3VyY2VfaWQgKyAnXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0J3NlbGVjdFtuYW1lPVwic3RhcnR0aW1lJyArIHJlc291cmNlX2lkICsgJ1tdXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0J3NlbGVjdFtuYW1lPVwiZW5kdGltZScgKyByZXNvdXJjZV9pZCArICdcIl0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0W25hbWU9XCJlbmR0aW1lJyArIHJlc291cmNlX2lkICsgJ1tdXCJdJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XTtcclxuXHJcblx0XHRcdHZhciB0aW1lX2ZpZWxkc19vYmpfYXJyID0gW107XHJcblxyXG5cdFx0XHQvLyBMb29wIGFsbCBUaW1lIEZpZWxkc1xyXG5cdFx0XHRmb3IgKCB2YXIgY3RmPSAwOyBjdGYgPCB0aW1lX2ZpZWxkc19hcnIubGVuZ3RoOyBjdGYrKyApe1xyXG5cclxuXHRcdFx0XHR2YXIgdGltZV9maWVsZCA9IHRpbWVfZmllbGRzX2FyclsgY3RmIF07XHJcblx0XHRcdFx0dmFyIHRpbWVfb3B0aW9uID0galF1ZXJ5KCB0aW1lX2ZpZWxkICsgJyBvcHRpb24nICk7XHJcblxyXG5cdFx0XHRcdC8vIExvb3AgYWxsIG9wdGlvbnMgaW4gdGltZSBmaWVsZFxyXG5cdFx0XHRcdGZvciAoIHZhciBqID0gMDsgaiA8IHRpbWVfb3B0aW9uLmxlbmd0aDsgaisrICl7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGpxdWVyeV9vcHRpb24gPSBqUXVlcnkoIHRpbWVfZmllbGQgKyAnIG9wdGlvbjplcSgnICsgaiArICcpJyApO1xyXG5cdFx0XHRcdFx0dmFyIHZhbHVlX29wdGlvbl9zZWNvbmRzX2FyciA9IGpxdWVyeV9vcHRpb24udmFsKCkuc3BsaXQoICctJyApO1xyXG5cdFx0XHRcdFx0dmFyIHRpbWVzX2FzX3NlY29uZHMgPSBbXTtcclxuXHJcblx0XHRcdFx0XHQvLyBHZXQgdGltZSBhcyBzZWNvbmRzXHJcblx0XHRcdFx0XHRpZiAoIHZhbHVlX29wdGlvbl9zZWNvbmRzX2Fyci5sZW5ndGggKXtcdFx0XHRcdFx0XHRcdFx0XHQvLyBGaXhJbjogOS44LjEwLjEuXHJcblx0XHRcdFx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHZhbHVlX29wdGlvbl9zZWNvbmRzX2Fyci5sZW5ndGg7IGkrKyApe1x0XHQvLyBGaXhJbjogMTAuMC4wLjU2LlxyXG5cdFx0XHRcdFx0XHRcdC8vIHZhbHVlX29wdGlvbl9zZWNvbmRzX2FycltpXSA9ICcxNDowMCAnICB8ICcgMTY6MDAnICAgKGlmIGZyb20gJ3JhbmdldGltZScpIGFuZCAnMTY6MDAnICBpZiAoc3RhcnQvZW5kIHRpbWUpXHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciBzdGFydF9lbmRfdGltZXNfYXJyID0gdmFsdWVfb3B0aW9uX3NlY29uZHNfYXJyWyBpIF0udHJpbSgpLnNwbGl0KCAnOicgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0dmFyIHRpbWVfaW5fc2Vjb25kcyA9IHBhcnNlSW50KCBzdGFydF9lbmRfdGltZXNfYXJyWyAwIF0gKSAqIDYwICogNjAgKyBwYXJzZUludCggc3RhcnRfZW5kX3RpbWVzX2FyclsgMSBdICkgKiA2MDtcclxuXHJcblx0XHRcdFx0XHRcdFx0dGltZXNfYXNfc2Vjb25kcy5wdXNoKCB0aW1lX2luX3NlY29uZHMgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHRpbWVfZmllbGRzX29ial9hcnIucHVzaCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmFtZScgICAgICAgICAgICA6IGpRdWVyeSggdGltZV9maWVsZCApLmF0dHIoICduYW1lJyApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndmFsdWVfb3B0aW9uXzI0aCc6IGpxdWVyeV9vcHRpb24udmFsKCksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdqcXVlcnlfb3B0aW9uJyAgIDoganF1ZXJ5X29wdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3RpbWVzX2FzX3NlY29uZHMnOiB0aW1lc19hc19zZWNvbmRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gdGltZV9maWVsZHNfb2JqX2FycjtcclxuXHRcdH1cclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiBEaXNhYmxlIEhUTUwgb3B0aW9ucyBhbmQgYWRkIGJvb2tlZCBDU1MgY2xhc3NcclxuXHRcdFx0ICpcclxuXHRcdFx0ICogQHBhcmFtIHRpbWVfZmllbGRzX29ial9hcnIgICAgICAtIHRoaXMgdmFsdWUgaXMgZnJvbSAgdGhlIGZ1bmM6ICBcdHdwYmNfZ2V0X190aW1lX2ZpZWxkc19faW5fYm9va2luZ19mb3JtX19hc19hcnIoIHJlc291cmNlX2lkIClcclxuXHRcdFx0ICogXHRcdFx0XHRcdFtcclxuXHRcdFx0ICogXHRcdFx0XHRcdCBcdCAgIHtcdGpxdWVyeV9vcHRpb246ICAgICAgalF1ZXJ5X09iamVjdCB7fVxyXG5cdFx0XHQgKiBcdFx0XHRcdFx0XHRcdFx0bmFtZTogICAgICAgICAgICAgICAncmFuZ2V0aW1lMltdJ1xyXG5cdFx0XHQgKiBcdFx0XHRcdFx0XHRcdFx0dGltZXNfYXNfc2Vjb25kczogICBbIDIxNjAwLCAyMzQwMCBdXHJcblx0XHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCAtIDA2OjMwJ1xyXG5cdFx0XHQgKiBcdCAgXHRcdFx0XHRcdFx0ICAgIGRpc2FibGVkID0gMVxyXG5cdFx0XHQgKiBcdFx0XHRcdFx0ICAgICB9XHJcblx0XHRcdCAqIFx0XHRcdFx0XHQgIC4uLlxyXG5cdFx0XHQgKiBcdFx0XHRcdFx0XHQgICB7XHRqcXVlcnlfb3B0aW9uOiAgICAgIGpRdWVyeV9PYmplY3Qge31cclxuXHRcdFx0ICogXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICAgICAgICAgICAgICAgJ3N0YXJ0dGltZTJbXSdcclxuXHRcdFx0ICogXHRcdFx0XHRcdFx0XHRcdHRpbWVzX2FzX3NlY29uZHM6ICAgWyAyMTYwMCBdXHJcblx0XHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCdcclxuXHRcdFx0ICogICBcdFx0XHRcdFx0XHRcdGRpc2FibGVkID0gMFxyXG5cdFx0XHQgKiAgXHRcdFx0XHRcdCAgICB9XHJcblx0XHRcdCAqIFx0XHRcdFx0XHQgXVxyXG5cdFx0XHQgKlxyXG5cdFx0XHQgKi9cclxuXHRcdFx0ZnVuY3Rpb24gd3BiY19faHRtbF9fdGltZV9maWVsZF9vcHRpb25zX19zZXRfZGlzYWJsZWQoIHRpbWVfZmllbGRzX29ial9hcnIgKXtcclxuXHJcblx0XHRcdFx0dmFyIGpxdWVyeV9vcHRpb247XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHRpbWVfZmllbGRzX29ial9hcnIubGVuZ3RoOyBpKysgKXtcclxuXHJcblx0XHRcdFx0XHR2YXIganF1ZXJ5X29wdGlvbiA9IHRpbWVfZmllbGRzX29ial9hcnJbIGkgXS5qcXVlcnlfb3B0aW9uO1xyXG5cclxuXHRcdFx0XHRcdGlmICggMSA9PSB0aW1lX2ZpZWxkc19vYmpfYXJyWyBpIF0uZGlzYWJsZWQgKXtcclxuXHRcdFx0XHRcdFx0anF1ZXJ5X29wdGlvbi5wcm9wKCAnZGlzYWJsZWQnLCB0cnVlICk7IFx0XHQvLyBNYWtlIGRpc2FibGUgc29tZSBvcHRpb25zXHJcblx0XHRcdFx0XHRcdGpxdWVyeV9vcHRpb24uYWRkQ2xhc3MoICdib29rZWQnICk7ICAgICAgICAgICBcdC8vIEFkZCBcImJvb2tlZFwiIENTUyBjbGFzc1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gaWYgdGhpcyBib29rZWQgZWxlbWVudCBzZWxlY3RlZCAtLT4gdGhlbiBkZXNlbGVjdCAgaXRcclxuXHRcdFx0XHRcdFx0aWYgKCBqcXVlcnlfb3B0aW9uLnByb3AoICdzZWxlY3RlZCcgKSApe1xyXG5cdFx0XHRcdFx0XHRcdGpxdWVyeV9vcHRpb24ucHJvcCggJ3NlbGVjdGVkJywgZmFsc2UgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0anF1ZXJ5X29wdGlvbi5wYXJlbnQoKS5maW5kKCAnb3B0aW9uOm5vdChbZGlzYWJsZWRdKTpmaXJzdCcgKS5wcm9wKCAnc2VsZWN0ZWQnLCB0cnVlICkudHJpZ2dlciggXCJjaGFuZ2VcIiApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0anF1ZXJ5X29wdGlvbi5wcm9wKCAnZGlzYWJsZWQnLCBmYWxzZSApOyAgXHRcdC8vIE1ha2UgYWN0aXZlIGFsbCB0aW1lc1xyXG5cdFx0XHRcdFx0XHRqcXVlcnlfb3B0aW9uLnJlbW92ZUNsYXNzKCAnYm9va2VkJyApOyAgIFx0XHQvLyBSZW1vdmUgY2xhc3MgXCJib29rZWRcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgaWYgdGhpcyB0aW1lX3JhbmdlIHwgVGltZV9TbG90IGlzIEZ1bGwgRGF5ICBib29rZWRcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB0aW1lc2xvdF9hcnJfaW5fc2Vjb25kc1x0XHQtIFsgMzYwMTEsIDg2NDAwIF1cclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2lzX3RoaXNfdGltZXNsb3RfX2Z1bGxfZGF5X2Jvb2tlZCggdGltZXNsb3RfYXJyX2luX3NlY29uZHMgKXtcclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdFx0KCB0aW1lc2xvdF9hcnJfaW5fc2Vjb25kcy5sZW5ndGggPiAxIClcclxuXHRcdFx0JiYgKCBwYXJzZUludCggdGltZXNsb3RfYXJyX2luX3NlY29uZHNbIDAgXSApIDwgMzAgKVxyXG5cdFx0XHQmJiAoIHBhcnNlSW50KCB0aW1lc2xvdF9hcnJfaW5fc2Vjb25kc1sgMSBdICkgPiAgKCAoMjQgKiA2MCAqIDYwKSAtIDMwKSApXHJcblx0XHQpe1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvKiAgPT0gIFMgZSBsIGUgYyB0IGUgZCAgICBEIGEgdCBlIHMgIC8gIFQgaSBtIGUgLSBGIGkgZSBsIGQgcyAgPT1cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHQvKipcclxuXHQgKiAgR2V0IGFsbCBzZWxlY3RlZCBkYXRlcyBpbiBTUUwgZm9ybWF0IGxpa2UgdGhpcyBbIFwiMjAyMy0wOC0yM1wiLCBcIjIwMjMtMDgtMjRcIiAsIC4uLiBdXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHQgKiBAcmV0dXJucyB7W119XHRcdFx0WyBcIjIwMjMtMDgtMjNcIiwgXCIyMDIzLTA4LTI0XCIsIFwiMjAyMy0wOC0yNVwiLCBcIjIwMjMtMDgtMjZcIiwgXCIyMDIzLTA4LTI3XCIsIFwiMjAyMy0wOC0yOFwiLCBcIjIwMjMtMDgtMjlcIiBdXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19nZXRfX3NlbGVjdGVkX2RhdGVzX3NxbF9fYXNfYXJyKCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRcdHZhciBzZWxlY3RlZF9kYXRlc19hcnIgPSBbXTtcclxuXHRcdHNlbGVjdGVkX2RhdGVzX2FyciA9IGpRdWVyeSggJyNkYXRlX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS52YWwoKS5zcGxpdCgnLCcpO1xyXG5cclxuXHRcdGlmICggc2VsZWN0ZWRfZGF0ZXNfYXJyLmxlbmd0aCApe1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpeEluOiA5LjguMTAuMS5cclxuXHRcdFx0Zm9yICggbGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRfZGF0ZXNfYXJyLmxlbmd0aDsgaSsrICl7XHRcdFx0XHRcdFx0Ly8gRml4SW46IDEwLjAuMC41Ni5cclxuXHRcdFx0XHRzZWxlY3RlZF9kYXRlc19hcnJbIGkgXSA9IHNlbGVjdGVkX2RhdGVzX2FyclsgaSBdLnRyaW0oKTtcclxuXHRcdFx0XHRzZWxlY3RlZF9kYXRlc19hcnJbIGkgXSA9IHNlbGVjdGVkX2RhdGVzX2FyclsgaSBdLnNwbGl0KCAnLicgKTtcclxuXHRcdFx0XHRpZiAoIHNlbGVjdGVkX2RhdGVzX2FyclsgaSBdLmxlbmd0aCA+IDEgKXtcclxuXHRcdFx0XHRcdHNlbGVjdGVkX2RhdGVzX2FyclsgaSBdID0gc2VsZWN0ZWRfZGF0ZXNfYXJyWyBpIF1bIDIgXSArICctJyArIHNlbGVjdGVkX2RhdGVzX2FyclsgaSBdWyAxIF0gKyAnLScgKyBzZWxlY3RlZF9kYXRlc19hcnJbIGkgXVsgMCBdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFJlbW92ZSBlbXB0eSBlbGVtZW50cyBmcm9tIGFuIGFycmF5XHJcblx0XHRzZWxlY3RlZF9kYXRlc19hcnIgPSBzZWxlY3RlZF9kYXRlc19hcnIuZmlsdGVyKCBmdW5jdGlvbiAoIG4gKXsgcmV0dXJuIHBhcnNlSW50KG4pOyB9ICk7XHJcblxyXG5cdFx0c2VsZWN0ZWRfZGF0ZXNfYXJyLnNvcnQoKTtcclxuXHJcblx0XHRyZXR1cm4gc2VsZWN0ZWRfZGF0ZXNfYXJyO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBhbGwgdGltZSBmaWVsZHMgaW4gdGhlIGJvb2tpbmcgZm9ybSBhcyBhcnJheSAgb2Ygb2JqZWN0c1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0ICogQHBhcmFtIGlzX29ubHlfc2VsZWN0ZWRfdGltZVxyXG5cdCAqIEByZXR1cm5zIFtdXHJcblx0ICpcclxuXHQgKiBcdFx0RXhhbXBsZTpcclxuXHQgKiBcdFx0XHRcdFx0W1xyXG5cdCAqIFx0XHRcdFx0XHQgXHQgICB7XHJcblx0ICogXHRcdFx0XHRcdFx0XHRcdHZhbHVlX29wdGlvbl8yNGg6ICAgJzA2OjAwIC0gMDY6MzAnXHJcblx0ICogXHRcdFx0XHRcdFx0XHRcdHRpbWVzX2FzX3NlY29uZHM6ICAgWyAyMTYwMCwgMjM0MDAgXVxyXG5cdCAqIFx0XHRcdFx0XHQgXHQgICBcdFx0anF1ZXJ5X29wdGlvbjogICAgICBqUXVlcnlfT2JqZWN0IHt9XHJcblx0ICogXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICAgICAgICAgICAgICAgJ3JhbmdldGltZTJbXSdcclxuXHQgKiBcdFx0XHRcdFx0ICAgICB9XHJcblx0ICogXHRcdFx0XHRcdCAgLi4uXHJcblx0ICogXHRcdFx0XHRcdFx0ICAge1xyXG5cdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCdcclxuXHQgKiBcdFx0XHRcdFx0XHRcdFx0dGltZXNfYXNfc2Vjb25kczogICBbIDIxNjAwIF1cclxuXHQgKiBcdFx0XHRcdFx0XHQgICBcdFx0anF1ZXJ5X29wdGlvbjogICAgICBqUXVlcnlfT2JqZWN0IHt9XHJcblx0ICogXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICAgICAgICAgICAgICAgJ3N0YXJ0dGltZTJbXSdcclxuXHQgKiAgXHRcdFx0XHRcdCAgICB9XHJcblx0ICogXHRcdFx0XHRcdCBdXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19nZXRfX3NlbGVjdGVkX3RpbWVfZmllbGRzX19pbl9ib29raW5nX2Zvcm1fX2FzX2FyciggcmVzb3VyY2VfaWQsIGlzX29ubHlfc2VsZWN0ZWRfdGltZSA9IHRydWUgKXtcclxuXHRcdC8qKlxyXG5cdFx0ICogRmllbGRzIHdpdGggIFtdICBsaWtlIHRoaXMgICBzZWxlY3RbbmFtZT1cInJhbmdldGltZTFbXVwiXVxyXG5cdFx0ICogaXQncyB3aGVuIHdlIGhhdmUgJ211bHRpcGxlJyBpbiBzaG9ydGNvZGU6ICAgW3NlbGVjdCogcmFuZ2V0aW1lIG11bHRpcGxlICBcIjA2OjAwIC0gMDY6MzBcIiAuLi4gXVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdGltZV9maWVsZHNfYXJyPVtcclxuXHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cInJhbmdldGltZScgKyByZXNvdXJjZV9pZCArICdcIl0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0J3NlbGVjdFtuYW1lPVwicmFuZ2V0aW1lJyArIHJlc291cmNlX2lkICsgJ1tdXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cInN0YXJ0dGltZScgKyByZXNvdXJjZV9pZCArICdcIl0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0J3NlbGVjdFtuYW1lPVwic3RhcnR0aW1lJyArIHJlc291cmNlX2lkICsgJ1tdXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cImVuZHRpbWUnICsgcmVzb3VyY2VfaWQgKyAnXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cImVuZHRpbWUnICsgcmVzb3VyY2VfaWQgKyAnW11cIl0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0J3NlbGVjdFtuYW1lPVwiZHVyYXRpb250aW1lJyArIHJlc291cmNlX2lkICsgJ1wiXScsXHJcblx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0W25hbWU9XCJkdXJhdGlvbnRpbWUnICsgcmVzb3VyY2VfaWQgKyAnW11cIl0nXHJcblx0XHRcdFx0XHRcdFx0XTtcclxuXHJcblx0XHR2YXIgdGltZV9maWVsZHNfb2JqX2FyciA9IFtdO1xyXG5cclxuXHRcdC8vIExvb3AgYWxsIFRpbWUgRmllbGRzXHJcblx0XHRmb3IgKCB2YXIgY3RmPSAwOyBjdGYgPCB0aW1lX2ZpZWxkc19hcnIubGVuZ3RoOyBjdGYrKyApe1xyXG5cclxuXHRcdFx0dmFyIHRpbWVfZmllbGQgPSB0aW1lX2ZpZWxkc19hcnJbIGN0ZiBdO1xyXG5cclxuXHRcdFx0dmFyIHRpbWVfb3B0aW9uO1xyXG5cdFx0XHRpZiAoIGlzX29ubHlfc2VsZWN0ZWRfdGltZSApe1xyXG5cdFx0XHRcdHRpbWVfb3B0aW9uID0galF1ZXJ5KCAnI2Jvb2tpbmdfZm9ybScgKyByZXNvdXJjZV9pZCArICcgJyArIHRpbWVfZmllbGQgKyAnIG9wdGlvbjpzZWxlY3RlZCcgKTtcdFx0XHQvLyBFeGNsdWRlIGNvbmRpdGlvbmFsICBmaWVsZHMsICBiZWNhdXNlIG9mIHVzaW5nICcjYm9va2luZ19mb3JtMyAuLi4nXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGltZV9vcHRpb24gPSBqUXVlcnkoICcjYm9va2luZ19mb3JtJyArIHJlc291cmNlX2lkICsgJyAnICsgdGltZV9maWVsZCArICcgb3B0aW9uJyApO1x0XHRcdFx0Ly8gQWxsICB0aW1lIGZpZWxkc1xyXG5cdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0Ly8gTG9vcCBhbGwgb3B0aW9ucyBpbiB0aW1lIGZpZWxkXHJcblx0XHRcdGZvciAoIHZhciBqID0gMDsgaiA8IHRpbWVfb3B0aW9uLmxlbmd0aDsgaisrICl7XHJcblxyXG5cdFx0XHRcdHZhciBqcXVlcnlfb3B0aW9uID0galF1ZXJ5KCB0aW1lX29wdGlvblsgaiBdICk7XHRcdC8vIEdldCBvbmx5ICBzZWxlY3RlZCBvcHRpb25zIFx0Ly9qUXVlcnkoIHRpbWVfZmllbGQgKyAnIG9wdGlvbjplcSgnICsgaiArICcpJyApO1xyXG5cdFx0XHRcdHZhciB2YWx1ZV9vcHRpb25fc2Vjb25kc19hcnIgPSBqcXVlcnlfb3B0aW9uLnZhbCgpLnNwbGl0KCAnLScgKTtcclxuXHRcdFx0XHR2YXIgdGltZXNfYXNfc2Vjb25kcyA9IFtdO1xyXG5cclxuXHRcdFx0XHQvLyBHZXQgdGltZSBhcyBzZWNvbmRzXHJcblx0XHRcdFx0aWYgKCB2YWx1ZV9vcHRpb25fc2Vjb25kc19hcnIubGVuZ3RoICl7XHRcdFx0XHQgXHRcdFx0XHRcdFx0XHRcdC8vIEZpeEluOiA5LjguMTAuMS5cclxuXHRcdFx0XHRcdGZvciAoIGxldCBpID0gMDsgaSA8IHZhbHVlX29wdGlvbl9zZWNvbmRzX2Fyci5sZW5ndGg7IGkrKyApe1x0XHRcdFx0XHQvLyBGaXhJbjogMTAuMC4wLjU2LlxyXG5cdFx0XHRcdFx0XHQvLyB2YWx1ZV9vcHRpb25fc2Vjb25kc19hcnJbaV0gPSAnMTQ6MDAgJyAgfCAnIDE2OjAwJyAgIChpZiBmcm9tICdyYW5nZXRpbWUnKSBhbmQgJzE2OjAwJyAgaWYgKHN0YXJ0L2VuZCB0aW1lKVxyXG5cclxuXHRcdFx0XHRcdFx0dmFyIHN0YXJ0X2VuZF90aW1lc19hcnIgPSB2YWx1ZV9vcHRpb25fc2Vjb25kc19hcnJbIGkgXS50cmltKCkuc3BsaXQoICc6JyApO1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIHRpbWVfaW5fc2Vjb25kcyA9IHBhcnNlSW50KCBzdGFydF9lbmRfdGltZXNfYXJyWyAwIF0gKSAqIDYwICogNjAgKyBwYXJzZUludCggc3RhcnRfZW5kX3RpbWVzX2FyclsgMSBdICkgKiA2MDtcclxuXHJcblx0XHRcdFx0XHRcdHRpbWVzX2FzX3NlY29uZHMucHVzaCggdGltZV9pbl9zZWNvbmRzICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR0aW1lX2ZpZWxkc19vYmpfYXJyLnB1c2goIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCduYW1lJyAgICAgICAgICAgIDogalF1ZXJ5KCAnI2Jvb2tpbmdfZm9ybScgKyByZXNvdXJjZV9pZCArICcgJyArIHRpbWVfZmllbGQgKS5hdHRyKCAnbmFtZScgKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd2YWx1ZV9vcHRpb25fMjRoJzoganF1ZXJ5X29wdGlvbi52YWwoKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdqcXVlcnlfb3B0aW9uJyAgIDoganF1ZXJ5X29wdGlvbixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0aW1lc19hc19zZWNvbmRzJzogdGltZXNfYXNfc2Vjb25kc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFRleHQ6ICAgW3N0YXJ0dGltZV0gLSBbZW5kdGltZV0gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHR2YXIgdGV4dF90aW1lX2ZpZWxkc19hcnI9W1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQnaW5wdXRbbmFtZT1cInN0YXJ0dGltZScgKyByZXNvdXJjZV9pZCArICdcIl0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnaW5wdXRbbmFtZT1cImVuZHRpbWUnICsgcmVzb3VyY2VfaWQgKyAnXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdF07XHJcblx0XHRmb3IgKCB2YXIgdGY9IDA7IHRmIDwgdGV4dF90aW1lX2ZpZWxkc19hcnIubGVuZ3RoOyB0ZisrICl7XHJcblxyXG5cdFx0XHR2YXIgdGV4dF9qcXVlcnkgPSBqUXVlcnkoICcjYm9va2luZ19mb3JtJyArIHJlc291cmNlX2lkICsgJyAnICsgdGV4dF90aW1lX2ZpZWxkc19hcnJbIHRmIF0gKTtcdFx0XHRcdFx0XHRcdFx0Ly8gRXhjbHVkZSBjb25kaXRpb25hbCAgZmllbGRzLCAgYmVjYXVzZSBvZiB1c2luZyAnI2Jvb2tpbmdfZm9ybTMgLi4uJ1xyXG5cdFx0XHRpZiAoIHRleHRfanF1ZXJ5Lmxlbmd0aCA+IDAgKXtcclxuXHJcblx0XHRcdFx0dmFyIHRpbWVfX2hfbV9fYXJyID0gdGV4dF9qcXVlcnkudmFsKCkudHJpbSgpLnNwbGl0KCAnOicgKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gJzE0OjAwJ1xyXG5cdFx0XHRcdGlmICggMCA9PSB0aW1lX19oX21fX2Fyci5sZW5ndGggKXtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1x0XHRcdFx0XHRcdFx0XHRcdC8vIE5vdCBlbnRlcmVkIHRpbWUgdmFsdWUgaW4gYSBmaWVsZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIDEgPT0gdGltZV9faF9tX19hcnIubGVuZ3RoICl7XHJcblx0XHRcdFx0XHRpZiAoICcnID09PSB0aW1lX19oX21fX2FyclsgMCBdICl7XHJcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1x0XHRcdFx0XHRcdFx0XHQvLyBOb3QgZW50ZXJlZCB0aW1lIHZhbHVlIGluIGEgZmllbGRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRpbWVfX2hfbV9fYXJyWyAxIF0gPSAwO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgdGV4dF90aW1lX2luX3NlY29uZHMgPSBwYXJzZUludCggdGltZV9faF9tX19hcnJbIDAgXSApICogNjAgKiA2MCArIHBhcnNlSW50KCB0aW1lX19oX21fX2FyclsgMSBdICkgKiA2MDtcclxuXHJcblx0XHRcdFx0dmFyIHRleHRfdGltZXNfYXNfc2Vjb25kcyA9IFtdO1xyXG5cdFx0XHRcdHRleHRfdGltZXNfYXNfc2Vjb25kcy5wdXNoKCB0ZXh0X3RpbWVfaW5fc2Vjb25kcyApO1xyXG5cclxuXHRcdFx0XHR0aW1lX2ZpZWxkc19vYmpfYXJyLnB1c2goIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCduYW1lJyAgICAgICAgICAgIDogdGV4dF9qcXVlcnkuYXR0ciggJ25hbWUnICksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndmFsdWVfb3B0aW9uXzI0aCc6IHRleHRfanF1ZXJ5LnZhbCgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2pxdWVyeV9vcHRpb24nICAgOiB0ZXh0X2pxdWVyeSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0aW1lc19hc19zZWNvbmRzJzogdGV4dF90aW1lc19hc19zZWNvbmRzXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRpbWVfZmllbGRzX29ial9hcnI7XHJcblx0fVxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLyogID09ICBTIFUgUCBQIE8gUiBUICAgIGZvciAgICBDIEEgTCBFIE4gRCBBIFIgID09XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgQ2FsZW5kYXIgZGF0ZXBpY2sgIEluc3RhbmNlXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkICBvZiBib29raW5nIHJlc291cmNlXHJcblx0ICogQHJldHVybnMgeyp8bnVsbH1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2NhbGVuZGFyX19nZXRfaW5zdCggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKHJlc291cmNlX2lkKSApe1xyXG5cdFx0XHRyZXNvdXJjZV9pZCA9ICcxJztcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkubGVuZ3RoID4gMCApe1xyXG5cdFx0XHRyZXR1cm4galF1ZXJ5LmRhdGVwaWNrLl9nZXRJbnN0KCBqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCApLmdldCggMCApICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBVbnNlbGVjdCAgYWxsIGRhdGVzIGluIGNhbGVuZGFyIGFuZCB2aXN1YWxseSB1cGRhdGUgdGhpcyBjYWxlbmRhclxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHRcdElEIG9mIGJvb2tpbmcgcmVzb3VyY2VcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cdFx0dHJ1ZSBvbiBzdWNjZXNzIHwgZmFsc2UsICBpZiBubyBzdWNoICBjYWxlbmRhclxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfY2FsZW5kYXJfX3Vuc2VsZWN0X2FsbF9kYXRlcyggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKHJlc291cmNlX2lkKSApe1xyXG5cdFx0XHRyZXNvdXJjZV9pZCA9ICcxJztcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgaW5zdCA9IHdwYmNfY2FsZW5kYXJfX2dldF9pbnN0KCByZXNvdXJjZV9pZCApXHJcblxyXG5cdFx0aWYgKCBudWxsICE9PSBpbnN0ICl7XHJcblxyXG5cdFx0XHQvLyBVbnNlbGVjdCBhbGwgZGF0ZXMgYW5kIHNldCAgcHJvcGVydGllcyBvZiBEYXRlcGlja1xyXG5cdFx0XHRqUXVlcnkoICcjZGF0ZV9ib29raW5nJyArIHJlc291cmNlX2lkICkudmFsKCAnJyApOyAgICAgIC8vRml4SW46IDUuNC4zXHJcblx0XHRcdGluc3Quc3RheU9wZW4gPSBmYWxzZTtcclxuXHRcdFx0aW5zdC5kYXRlcyA9IFtdO1xyXG5cdFx0XHRqUXVlcnkuZGF0ZXBpY2suX3VwZGF0ZURhdGVwaWNrKCBpbnN0ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDbGVhciBkYXlzIGhpZ2hsaWdodGluZyBpbiBBbGwgb3Igc3BlY2lmaWMgQ2FsZW5kYXJzXHJcblx0ICpcclxuICAgICAqIEBwYXJhbSByZXNvdXJjZV9pZCAgLSBjYW4gYmUgc2tpcGVkIHRvICBjbGVhciBoaWdobGlnaHRpbmcgaW4gYWxsIGNhbGVuZGFyc1xyXG4gICAgICovXHJcblx0ZnVuY3Rpb24gd3BiY19jYWxlbmRhcnNfX2NsZWFyX2RheXNfaGlnaGxpZ2h0aW5nKCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAoIHJlc291cmNlX2lkICkgKXtcclxuXHJcblx0XHRcdGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICsgJyAuZGF0ZXBpY2stZGF5cy1jZWxsLW92ZXInICkucmVtb3ZlQ2xhc3MoICdkYXRlcGljay1kYXlzLWNlbGwtb3ZlcicgKTtcdFx0Ly8gQ2xlYXIgaW4gc3BlY2lmaWMgY2FsZW5kYXJcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRqUXVlcnkoICcuZGF0ZXBpY2stZGF5cy1jZWxsLW92ZXInICkucmVtb3ZlQ2xhc3MoICdkYXRlcGljay1kYXlzLWNlbGwtb3ZlcicgKTtcdFx0XHRcdFx0XHRcdFx0Ly8gQ2xlYXIgaW4gYWxsIGNhbGVuZGFyc1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2Nyb2xsIHRvIHNwZWNpZmljIG1vbnRoIGluIGNhbGVuZGFyXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcdFx0SUQgb2YgcmVzb3VyY2VcclxuXHQgKiBAcGFyYW0geWVhclx0XHRcdFx0LSByZWFsIHllYXIgIC0gMjAyM1xyXG5cdCAqIEBwYXJhbSBtb250aFx0XHRcdFx0LSByZWFsIG1vbnRoIC0gMTJcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2NhbGVuZGFyX19zY3JvbGxfdG8oIHJlc291cmNlX2lkLCB5ZWFyLCBtb250aCApe1xyXG5cclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiAocmVzb3VyY2VfaWQpICl7IHJlc291cmNlX2lkID0gJzEnOyB9XHJcblx0XHR2YXIgaW5zdCA9IHdwYmNfY2FsZW5kYXJfX2dldF9pbnN0KCByZXNvdXJjZV9pZCApXHJcblx0XHRpZiAoIG51bGwgIT09IGluc3QgKXtcclxuXHJcblx0XHRcdHllYXIgID0gcGFyc2VJbnQoIHllYXIgKTtcclxuXHRcdFx0bW9udGggPSBwYXJzZUludCggbW9udGggKSAtIDE7XHRcdC8vIEluIEpTIGRhdGUsICBtb250aCAtMVxyXG5cclxuXHRcdFx0aW5zdC5jdXJzb3JEYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0Ly8gSW4gc29tZSBjYXNlcywgIHRoZSBzZXRGdWxsWWVhciBjYW4gIHNldCAgb25seSBZZWFyLCAgYW5kIG5vdCB0aGUgTW9udGggYW5kIGRheSAgICAgIC8vIEZpeEluOiA2LjIuMy41LlxyXG5cdFx0XHRpbnN0LmN1cnNvckRhdGUuc2V0RnVsbFllYXIoIHllYXIsIG1vbnRoLCAxICk7XHJcblx0XHRcdGluc3QuY3Vyc29yRGF0ZS5zZXRNb250aCggbW9udGggKTtcclxuXHRcdFx0aW5zdC5jdXJzb3JEYXRlLnNldERhdGUoIDEgKTtcclxuXHJcblx0XHRcdGluc3QuZHJhd01vbnRoID0gaW5zdC5jdXJzb3JEYXRlLmdldE1vbnRoKCk7XHJcblx0XHRcdGluc3QuZHJhd1llYXIgPSBpbnN0LmN1cnNvckRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcblx0XHRcdGpRdWVyeS5kYXRlcGljay5fbm90aWZ5Q2hhbmdlKCBpbnN0ICk7XHJcblx0XHRcdGpRdWVyeS5kYXRlcGljay5fYWRqdXN0SW5zdERhdGUoIGluc3QgKTtcclxuXHRcdFx0alF1ZXJ5LmRhdGVwaWNrLl9zaG93RGF0ZSggaW5zdCApO1xyXG5cdFx0XHRqUXVlcnkuZGF0ZXBpY2suX3VwZGF0ZURhdGVwaWNrKCBpbnN0ICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIHRoaXMgZGF0ZSBzZWxlY3RhYmxlIGluIGNhbGVuZGFyIChtYWlubHkgaXQncyBtZWFucyBBVkFJTEFCTEUgZGF0ZSlcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7aW50fHN0cmluZ30gcmVzb3VyY2VfaWRcdFx0MVxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzcWxfY2xhc3NfZGF5XHRcdCcyMDIzLTA4LTExJ1xyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVx0XHRcdFx0XHR0cnVlIHwgZmFsc2VcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2lzX3RoaXNfZGF5X3NlbGVjdGFibGUoIHJlc291cmNlX2lkLCBzcWxfY2xhc3NfZGF5ICl7XHJcblxyXG5cdFx0Ly8gR2V0IERhdGEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdHZhciBkYXRlX2Jvb2tpbmdzX29iaiA9IF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXRfZm9yX2RhdGUoIHJlc291cmNlX2lkLCBzcWxfY2xhc3NfZGF5ICk7XHJcblxyXG5cdFx0dmFyIGlzX2RheV9zZWxlY3RhYmxlID0gKCBwYXJzZUludCggZGF0ZV9ib29raW5nc19vYmpbICdkYXlfYXZhaWxhYmlsaXR5JyBdICkgPiAwICk7XHJcblxyXG5cdFx0aWYgKCB0eXBlb2YgKGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeScgXSkgPT09ICd1bmRlZmluZWQnICl7XHJcblx0XHRcdHJldHVybiBpc19kYXlfc2VsZWN0YWJsZTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICdhdmFpbGFibGUnICE9IGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeSddWydzdGF0dXNfZm9yX2RheScgXSApe1xyXG5cclxuXHRcdFx0dmFyIGlzX3NldF9wZW5kaW5nX2RheXNfc2VsZWN0YWJsZSA9IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAncGVuZGluZ19kYXlzX3NlbGVjdGFibGUnICk7XHRcdC8vIHNldCBwZW5kaW5nIGRheXMgc2VsZWN0YWJsZSAgICAgICAgICAvLyBGaXhJbjogOC42LjEuMTguXHJcblxyXG5cdFx0XHRzd2l0Y2ggKCBkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSApe1xyXG5cdFx0XHRcdGNhc2UgJ3BlbmRpbmcnOlxyXG5cdFx0XHRcdC8vIFNpdHVhdGlvbnMgZm9yIFwiY2hhbmdlLW92ZXJcIiBkYXlzOlxyXG5cdFx0XHRcdGNhc2UgJ3BlbmRpbmdfcGVuZGluZyc6XHJcblx0XHRcdFx0Y2FzZSAncGVuZGluZ19hcHByb3ZlZCc6XHJcblx0XHRcdFx0Y2FzZSAnYXBwcm92ZWRfcGVuZGluZyc6XHJcblx0XHRcdFx0XHRpc19kYXlfc2VsZWN0YWJsZSA9IChpc19kYXlfc2VsZWN0YWJsZSkgPyB0cnVlIDogaXNfc2V0X3BlbmRpbmdfZGF5c19zZWxlY3RhYmxlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpc19kYXlfc2VsZWN0YWJsZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGRhdGUgdG8gY2hlY2sgSU4gYXJyYXkgb2Ygc2VsZWN0ZWQgZGF0ZXNcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7ZGF0ZX1qc19kYXRlX3RvX2NoZWNrXHRcdC0gSlMgRGF0ZVx0XHRcdC0gc2ltcGxlICBKYXZhU2NyaXB0IERhdGUgb2JqZWN0XHJcblx0ICogQHBhcmFtIHtbXX0ganNfZGF0ZXNfYXJyXHRcdFx0LSBbIEpTRGF0ZSwgLi4uIF0gICAtIGFycmF5ICBvZiBKUyBkYXRlc1xyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfaXNfdGhpc19kYXlfYW1vbmdfc2VsZWN0ZWRfZGF5cygganNfZGF0ZV90b19jaGVjaywganNfZGF0ZXNfYXJyICl7XHJcblxyXG5cdFx0Zm9yICggdmFyIGRhdGVfaW5kZXggPSAwOyBkYXRlX2luZGV4IDwganNfZGF0ZXNfYXJyLmxlbmd0aCA7IGRhdGVfaW5kZXgrKyApeyAgICAgXHRcdFx0XHRcdFx0XHRcdFx0Ly8gRml4SW46IDguNC41LjE2LlxyXG5cdFx0XHRpZiAoICgganNfZGF0ZXNfYXJyWyBkYXRlX2luZGV4IF0uZ2V0RnVsbFllYXIoKSA9PT0ganNfZGF0ZV90b19jaGVjay5nZXRGdWxsWWVhcigpICkgJiZcclxuXHRcdFx0XHQgKCBqc19kYXRlc19hcnJbIGRhdGVfaW5kZXggXS5nZXRNb250aCgpID09PSBqc19kYXRlX3RvX2NoZWNrLmdldE1vbnRoKCkgKSAmJlxyXG5cdFx0XHRcdCAoIGpzX2RhdGVzX2FyclsgZGF0ZV9pbmRleCBdLmdldERhdGUoKSA9PT0ganNfZGF0ZV90b19jaGVjay5nZXREYXRlKCkgKSApIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuICBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBTUUwgQ2xhc3MgRGF0ZSAnMjAyMy0wOC0wMScgZnJvbSAgSlMgRGF0ZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGRhdGVcdFx0XHRcdEpTIERhdGVcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVx0XHQnMjAyMy0wOC0xMidcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX19nZXRfX3NxbF9jbGFzc19kYXRlKCBkYXRlICl7XHJcblxyXG5cdFx0dmFyIHNxbF9jbGFzc19kYXkgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLSc7XHJcblx0XHRcdHNxbF9jbGFzc19kYXkgKz0gKCAoIGRhdGUuZ2V0TW9udGgoKSArIDEgKSA8IDEwICkgPyAnMCcgOiAnJztcclxuXHRcdFx0c3FsX2NsYXNzX2RheSArPSAoIGRhdGUuZ2V0TW9udGgoKSArIDEgKSArICctJ1xyXG5cdFx0XHRzcWxfY2xhc3NfZGF5ICs9ICggZGF0ZS5nZXREYXRlKCkgPCAxMCApID8gJzAnIDogJyc7XHJcblx0XHRcdHNxbF9jbGFzc19kYXkgKz0gZGF0ZS5nZXREYXRlKCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gc3FsX2NsYXNzX2RheTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBKUyBEYXRlIGZyb20gIHRoZSBTUUwgZGF0ZSBmb3JtYXQgJzIwMjQtMDUtMTQnXHJcblx0ICogQHBhcmFtIHNxbF9jbGFzc19kYXRlXHJcblx0ICogQHJldHVybnMge0RhdGV9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19fZ2V0X19qc19kYXRlKCBzcWxfY2xhc3NfZGF0ZSApe1xyXG5cclxuXHRcdHZhciBzcWxfY2xhc3NfZGF0ZV9hcnIgPSBzcWxfY2xhc3NfZGF0ZS5zcGxpdCggJy0nICk7XHJcblxyXG5cdFx0dmFyIGRhdGVfanMgPSBuZXcgRGF0ZSgpO1xyXG5cclxuXHRcdGRhdGVfanMuc2V0RnVsbFllYXIoIHBhcnNlSW50KCBzcWxfY2xhc3NfZGF0ZV9hcnJbIDAgXSApLCAocGFyc2VJbnQoIHNxbF9jbGFzc19kYXRlX2FyclsgMSBdICkgLSAxKSwgcGFyc2VJbnQoIHNxbF9jbGFzc19kYXRlX2FyclsgMiBdICkgKTsgIC8vIHllYXIsIG1vbnRoLCBkYXRlXHJcblxyXG5cdFx0Ly8gV2l0aG91dCB0aGlzIHRpbWUgYWRqdXN0IERhdGVzIHNlbGVjdGlvbiAgaW4gRGF0ZXBpY2tlciBjYW4gbm90IHdvcmshISFcclxuXHRcdGRhdGVfanMuc2V0SG91cnMoMCk7XHJcblx0XHRkYXRlX2pzLnNldE1pbnV0ZXMoMCk7XHJcblx0XHRkYXRlX2pzLnNldFNlY29uZHMoMCk7XHJcblx0XHRkYXRlX2pzLnNldE1pbGxpc2Vjb25kcygwKTtcclxuXHJcblx0XHRyZXR1cm4gZGF0ZV9qcztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBURCBDbGFzcyBEYXRlICcxLTMxLTIwMjMnIGZyb20gIEpTIERhdGVcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBkYXRlXHRcdFx0XHRKUyBEYXRlXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cdFx0JzEtMzEtMjAyMydcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX19nZXRfX3RkX2NsYXNzX2RhdGUoIGRhdGUgKXtcclxuXHJcblx0XHR2YXIgdGRfY2xhc3NfZGF5ID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgJy0nICsgZGF0ZS5nZXREYXRlKCkgKyAnLScgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHRcdFx0XHRcdFx0XHRcdC8vICcxLTktMjAyMydcclxuXHJcblx0XHRyZXR1cm4gdGRfY2xhc3NfZGF5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGRhdGUgcGFyYW1zIGZyb20gIHN0cmluZyBkYXRlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gZGF0ZVx0XHRcdHN0cmluZyBkYXRlIGxpa2UgJzMxLjUuMjAyMydcclxuXHQgKiBAcGFyYW0gc2VwYXJhdG9yXHRcdGRlZmF1bHQgJy4nICBjYW4gYmUgc2tpcHBlZC5cclxuXHQgKiBAcmV0dXJucyB7ICB7ZGF0ZTogbnVtYmVyLCBtb250aDogbnVtYmVyLCB5ZWFyOiBudW1iZXJ9ICB9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19fZ2V0X19kYXRlX3BhcmFtc19fZnJvbV9zdHJpbmdfZGF0ZSggZGF0ZSAsIHNlcGFyYXRvcil7XHJcblxyXG5cdFx0c2VwYXJhdG9yID0gKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIChzZXBhcmF0b3IpICkgPyBzZXBhcmF0b3IgOiAnLic7XHJcblxyXG5cdFx0dmFyIGRhdGVfYXJyID0gZGF0ZS5zcGxpdCggc2VwYXJhdG9yICk7XHJcblx0XHR2YXIgZGF0ZV9vYmogPSB7XHJcblx0XHRcdCd5ZWFyJyA6ICBwYXJzZUludCggZGF0ZV9hcnJbIDIgXSApLFxyXG5cdFx0XHQnbW9udGgnOiAocGFyc2VJbnQoIGRhdGVfYXJyWyAxIF0gKSAtIDEpLFxyXG5cdFx0XHQnZGF0ZScgOiAgcGFyc2VJbnQoIGRhdGVfYXJyWyAwIF0gKVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBkYXRlX29iajtcdFx0Ly8gZm9yIFx0XHQgPSBuZXcgRGF0ZSggZGF0ZV9vYmoueWVhciAsIGRhdGVfb2JqLm1vbnRoICwgZGF0ZV9vYmouZGF0ZSApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIFNwaW4gTG9hZGVyIHRvICBjYWxlbmRhclxyXG5cdCAqIEBwYXJhbSByZXNvdXJjZV9pZFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfY2FsZW5kYXJfX2xvYWRpbmdfX3N0YXJ0KCByZXNvdXJjZV9pZCApe1xyXG5cdFx0aWYgKCAhIGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkubmV4dCgpLmhhc0NsYXNzKCAnd3BiY19zcGluc19sb2FkZXJfd3JhcHBlcicgKSApe1xyXG5cdFx0XHRqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCApLmFmdGVyKCAnPGRpdiBjbGFzcz1cIndwYmNfc3BpbnNfbG9hZGVyX3dyYXBwZXJcIj48ZGl2IGNsYXNzPVwid3BiY19zcGluc19sb2FkZXJcIj48L2Rpdj48L2Rpdj4nICk7XHJcblx0XHR9XHJcblx0XHRpZiAoICEgalF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS5oYXNDbGFzcyggJ3dwYmNfY2FsZW5kYXJfYmx1cl9zbWFsbCcgKSApe1xyXG5cdFx0XHRqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCApLmFkZENsYXNzKCAnd3BiY19jYWxlbmRhcl9ibHVyX3NtYWxsJyApO1xyXG5cdFx0fVxyXG5cdFx0d3BiY19jYWxlbmRhcl9fYmx1cl9fc3RhcnQoIHJlc291cmNlX2lkICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmUgU3BpbiBMb2FkZXIgdG8gIGNhbGVuZGFyXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19jYWxlbmRhcl9fbG9hZGluZ19fc3RvcCggcmVzb3VyY2VfaWQgKXtcclxuXHRcdGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICsgJyArIC53cGJjX3NwaW5zX2xvYWRlcl93cmFwcGVyJyApLnJlbW92ZSgpO1xyXG5cdFx0alF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS5yZW1vdmVDbGFzcyggJ3dwYmNfY2FsZW5kYXJfYmx1cl9zbWFsbCcgKTtcclxuXHRcdHdwYmNfY2FsZW5kYXJfX2JsdXJfX3N0b3AoIHJlc291cmNlX2lkICk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgQmx1ciB0byAgY2FsZW5kYXJcclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2NhbGVuZGFyX19ibHVyX19zdGFydCggcmVzb3VyY2VfaWQgKXtcclxuXHRcdGlmICggISBqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCApLmhhc0NsYXNzKCAnd3BiY19jYWxlbmRhcl9ibHVyJyApICl7XHJcblx0XHRcdGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkuYWRkQ2xhc3MoICd3cGJjX2NhbGVuZGFyX2JsdXInICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZW1vdmUgQmx1ciBpbiAgY2FsZW5kYXJcclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2NhbGVuZGFyX19ibHVyX19zdG9wKCByZXNvdXJjZV9pZCApe1xyXG5cdFx0alF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS5yZW1vdmVDbGFzcyggJ3dwYmNfY2FsZW5kYXJfYmx1cicgKTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxyXG5cdC8qICA9PSAgQ2FsZW5kYXIgVXBkYXRlICAtIFZpZXcgID09XHJcblx0Ly8gLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4gKi9cclxuXHJcblx0LyoqXHJcblx0ICogVXBkYXRlIExvb2sgIG9mIGNhbGVuZGFyXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2NhbGVuZGFyX191cGRhdGVfbG9vayggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHR2YXIgaW5zdCA9IHdwYmNfY2FsZW5kYXJfX2dldF9pbnN0KCByZXNvdXJjZV9pZCApO1xyXG5cclxuXHRcdGpRdWVyeS5kYXRlcGljay5fdXBkYXRlRGF0ZXBpY2soIGluc3QgKTtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgZHluYW1pY2FsbHkgTnVtYmVyIG9mIE1vbnRocyBpbiBjYWxlbmRhclxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkIGludFxyXG5cdCAqIEBwYXJhbSBtb250aHNfbnVtYmVyIGludFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfY2FsZW5kYXJfX3VwZGF0ZV9tb250aHNfbnVtYmVyKCByZXNvdXJjZV9pZCwgbW9udGhzX251bWJlciApe1xyXG5cdFx0dmFyIGluc3QgPSB3cGJjX2NhbGVuZGFyX19nZXRfaW5zdCggcmVzb3VyY2VfaWQgKTtcclxuXHRcdGlmICggbnVsbCAhPT0gaW5zdCApe1xyXG5cdFx0XHRpbnN0LnNldHRpbmdzWyAnbnVtYmVyT2ZNb250aHMnIF0gPSBtb250aHNfbnVtYmVyO1xyXG5cdFx0XHQvL193cGJjLmNhbGVuZGFyX19zZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnY2FsZW5kYXJfbnVtYmVyX29mX21vbnRocycsIG1vbnRoc19udW1iZXIgKTtcclxuXHRcdFx0d3BiY19jYWxlbmRhcl9fdXBkYXRlX2xvb2soIHJlc291cmNlX2lkICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogU2hvdyBjYWxlbmRhciBpbiAgZGlmZmVyZW50IFNraW5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBzZWxlY3RlZF9za2luX3VybFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfX2NhbGVuZGFyX19jaGFuZ2Vfc2tpbiggc2VsZWN0ZWRfc2tpbl91cmwgKXtcclxuXHJcblx0Ly9jb25zb2xlLmxvZyggJ1NLSU4gU0VMRUNUSU9OIDo6Jywgc2VsZWN0ZWRfc2tpbl91cmwgKTtcclxuXHJcblx0XHQvLyBSZW1vdmUgQ1NTIHNraW5cclxuXHRcdHZhciBzdHlsZXNoZWV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd3cGJjLWNhbGVuZGFyLXNraW4tY3NzJyApO1xyXG5cdFx0c3R5bGVzaGVldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzdHlsZXNoZWV0ICk7XHJcblxyXG5cclxuXHRcdC8vIEFkZCBuZXcgQ1NTIHNraW5cclxuXHRcdHZhciBoZWFkSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJoZWFkXCIgKVsgMCBdO1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbGluaycgKTtcclxuXHRcdGNzc05vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcblx0XHRjc3NOb2RlLnNldEF0dHJpYnV0ZSggXCJpZFwiLCBcIndwYmMtY2FsZW5kYXItc2tpbi1jc3NcIiApO1xyXG5cdFx0Y3NzTm9kZS5yZWwgPSAnc3R5bGVzaGVldCc7XHJcblx0XHRjc3NOb2RlLm1lZGlhID0gJ3NjcmVlbic7XHJcblx0XHRjc3NOb2RlLmhyZWYgPSBzZWxlY3RlZF9za2luX3VybDtcdC8vXCJodHRwOi8vYmV0YS93cC1jb250ZW50L3BsdWdpbnMvYm9va2luZy9jc3Mvc2tpbnMvZ3JlZW4tMDEuY3NzXCI7XHJcblx0XHRoZWFkSUQuYXBwZW5kQ2hpbGQoIGNzc05vZGUgKTtcclxuXHR9XHJcblxyXG5cclxuXHRmdW5jdGlvbiB3cGJjX19jc3NfX2NoYW5nZV9za2luKCBzZWxlY3RlZF9za2luX3VybCwgc3R5bGVzaGVldF9pZCA9ICd3cGJjLXRpbWVfcGlja2VyLXNraW4tY3NzJyApe1xyXG5cclxuXHRcdC8vIFJlbW92ZSBDU1Mgc2tpblxyXG5cdFx0dmFyIHN0eWxlc2hlZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggc3R5bGVzaGVldF9pZCApO1xyXG5cdFx0c3R5bGVzaGVldC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzdHlsZXNoZWV0ICk7XHJcblxyXG5cclxuXHRcdC8vIEFkZCBuZXcgQ1NTIHNraW5cclxuXHRcdHZhciBoZWFkSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJoZWFkXCIgKVsgMCBdO1xyXG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCAnbGluaycgKTtcclxuXHRcdGNzc05vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XHJcblx0XHRjc3NOb2RlLnNldEF0dHJpYnV0ZSggXCJpZFwiLCBzdHlsZXNoZWV0X2lkICk7XHJcblx0XHRjc3NOb2RlLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuXHRcdGNzc05vZGUubWVkaWEgPSAnc2NyZWVuJztcclxuXHRcdGNzc05vZGUuaHJlZiA9IHNlbGVjdGVkX3NraW5fdXJsO1x0Ly9cImh0dHA6Ly9iZXRhL3dwLWNvbnRlbnQvcGx1Z2lucy9ib29raW5nL2Nzcy9za2lucy9ncmVlbi0wMS5jc3NcIjtcclxuXHRcdGhlYWRJRC5hcHBlbmRDaGlsZCggY3NzTm9kZSApO1xyXG5cdH1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLyogID09ICBTIFUgUCBQIE8gUiBUICAgIE0gQSBUIEggID09XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTWVyZ2Ugc2V2ZXJhbCAgaW50ZXJzZWN0ZWQgaW50ZXJ2YWxzIG9yIHJldHVybiBub3QgaW50ZXJzZWN0ZWQ6ICAgICAgICAgICAgICAgICAgICAgICAgW1sxLDNdLFsyLDZdLFs4LDEwXSxbMTUsMThdXSAgLT4gICBbWzEsNl0sWzgsMTBdLFsxNSwxOF1dXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIFtdIGludGVydmFsc1x0XHRcdCBbIFsxLDNdLFsyLDRdLFs2LDhdLFs5LDEwXSxbMyw3XSBdXHJcblx0XHQgKiBAcmV0dXJucyBbXVx0XHRcdFx0XHQgWyBbMSw4XSxbOSwxMF0gXVxyXG5cdFx0ICpcclxuXHRcdCAqIEV4bWFtcGxlOiB3cGJjX2ludGVydmFsc19fbWVyZ2VfaW5lcnNlY3RlZCggIFsgWzEsM10sWzIsNF0sWzYsOF0sWzksMTBdLFszLDddIF0gICk7XHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHdwYmNfaW50ZXJ2YWxzX19tZXJnZV9pbmVyc2VjdGVkKCBpbnRlcnZhbHMgKXtcclxuXHJcblx0XHRcdGlmICggISBpbnRlcnZhbHMgfHwgaW50ZXJ2YWxzLmxlbmd0aCA9PT0gMCApe1xyXG5cdFx0XHRcdHJldHVybiBbXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG1lcmdlZCA9IFtdO1xyXG5cdFx0XHRpbnRlcnZhbHMuc29ydCggZnVuY3Rpb24gKCBhLCBiICl7XHJcblx0XHRcdFx0cmV0dXJuIGFbIDAgXSAtIGJbIDAgXTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0dmFyIG1lcmdlZEludGVydmFsID0gaW50ZXJ2YWxzWyAwIF07XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDE7IGkgPCBpbnRlcnZhbHMubGVuZ3RoOyBpKysgKXtcclxuXHRcdFx0XHR2YXIgaW50ZXJ2YWwgPSBpbnRlcnZhbHNbIGkgXTtcclxuXHJcblx0XHRcdFx0aWYgKCBpbnRlcnZhbFsgMCBdIDw9IG1lcmdlZEludGVydmFsWyAxIF0gKXtcclxuXHRcdFx0XHRcdG1lcmdlZEludGVydmFsWyAxIF0gPSBNYXRoLm1heCggbWVyZ2VkSW50ZXJ2YWxbIDEgXSwgaW50ZXJ2YWxbIDEgXSApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRtZXJnZWQucHVzaCggbWVyZ2VkSW50ZXJ2YWwgKTtcclxuXHRcdFx0XHRcdG1lcmdlZEludGVydmFsID0gaW50ZXJ2YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtZXJnZWQucHVzaCggbWVyZ2VkSW50ZXJ2YWwgKTtcclxuXHRcdFx0cmV0dXJuIG1lcmdlZDtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJcyAyIGludGVydmFscyBpbnRlcnNlY3RlZDogICAgICAgWzM2MDExLCA4NjM5Ml0gICAgPD0+ICAgIFsxLCA0MzE5Ml0gID0+ICB0cnVlICAgICAgKCBpbnRlcnNlY3RlZCApXHJcblx0XHQgKlxyXG5cdFx0ICogR29vZCBleHBsYW5hdGlvbiAgaGVyZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMjY5NDM0L3doYXRzLXRoZS1tb3N0LWVmZmljaWVudC13YXktdG8tdGVzdC1pZi10d28tcmFuZ2VzLW92ZXJsYXBcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0gIGludGVydmFsX0EgICAtIFsgMzYwMTEsIDg2MzkyIF1cclxuXHRcdCAqIEBwYXJhbSAgaW50ZXJ2YWxfQiAgIC0gWyAgICAgMSwgNDMxOTIgXVxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm4gYm9vbFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB3cGJjX2ludGVydmFsc19faXNfaW50ZXJzZWN0ZWQoIGludGVydmFsX0EsIGludGVydmFsX0IgKSB7XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQoIDAgPT0gaW50ZXJ2YWxfQS5sZW5ndGggKVxyXG5cdFx0XHRcdCB8fCAoIDAgPT0gaW50ZXJ2YWxfQi5sZW5ndGggKVxyXG5cdFx0XHQpe1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aW50ZXJ2YWxfQVsgMCBdID0gcGFyc2VJbnQoIGludGVydmFsX0FbIDAgXSApO1xyXG5cdFx0XHRpbnRlcnZhbF9BWyAxIF0gPSBwYXJzZUludCggaW50ZXJ2YWxfQVsgMSBdICk7XHJcblx0XHRcdGludGVydmFsX0JbIDAgXSA9IHBhcnNlSW50KCBpbnRlcnZhbF9CWyAwIF0gKTtcclxuXHRcdFx0aW50ZXJ2YWxfQlsgMSBdID0gcGFyc2VJbnQoIGludGVydmFsX0JbIDEgXSApO1xyXG5cclxuXHRcdFx0dmFyIGlzX2ludGVyc2VjdGVkID0gTWF0aC5tYXgoIGludGVydmFsX0FbIDAgXSwgaW50ZXJ2YWxfQlsgMCBdICkgLSBNYXRoLm1pbiggaW50ZXJ2YWxfQVsgMSBdLCBpbnRlcnZhbF9CWyAxIF0gKTtcclxuXHJcblx0XHRcdC8vIGlmICggMCA9PSBpc19pbnRlcnNlY3RlZCApIHtcclxuXHRcdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1Y2ggcmFuZ2VzIGdvaW5nIG9uZSBhZnRlciBvdGhlciwgZS5nLjogWyAxMiwgMTUgXSBhbmQgWyAxNSwgMjEgXVxyXG5cdFx0XHQvLyB9XHJcblxyXG5cdFx0XHRpZiAoIGlzX2ludGVyc2VjdGVkIDwgMCApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAvLyBJTlRFUlNFQ1RFRFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3QgaW50ZXJzZWN0ZWRcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBHZXQgdGhlIGNsb3NldHMgQUJTIHZhbHVlIG9mIGVsZW1lbnQgaW4gYXJyYXkgdG8gdGhlIGN1cnJlbnQgbXlWYWx1ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSBteVZhbHVlIFx0LSBpbnQgZWxlbWVudCB0byBzZWFyY2ggY2xvc2V0IFx0XHRcdDRcclxuXHRcdCAqIEBwYXJhbSBteUFycmF5XHQtIGFycmF5IG9mIGVsZW1lbnRzIHdoZXJlIHRvIHNlYXJjaCBcdFs1LDgsMSw3XVxyXG5cdFx0ICogQHJldHVybnMgaW50XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB3cGJjX2dldF9hYnNfY2xvc2VzdF92YWx1ZV9pbl9hcnIoIG15VmFsdWUsIG15QXJyYXkgKXtcclxuXHJcblx0XHRcdGlmICggbXlBcnJheS5sZW5ndGggPT0gMCApeyBcdFx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlIGFycmF5IGlzIGVtcHR5IC0+IHJldHVybiAgdGhlIG15VmFsdWVcclxuXHRcdFx0XHRyZXR1cm4gbXlWYWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG9iaiA9IG15QXJyYXlbIDAgXTtcclxuXHRcdFx0dmFyIGRpZmYgPSBNYXRoLmFicyggbXlWYWx1ZSAtIG9iaiApOyAgICAgICAgICAgICBcdC8vIEdldCBkaXN0YW5jZSBiZXR3ZWVuICAxc3QgZWxlbWVudFxyXG5cdFx0XHR2YXIgY2xvc2V0VmFsdWUgPSBteUFycmF5WyAwIF07ICAgICAgICAgICAgICAgICAgIFx0XHRcdC8vIFNhdmUgMXN0IGVsZW1lbnRcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMTsgaSA8IG15QXJyYXkubGVuZ3RoOyBpKysgKXtcclxuXHRcdFx0XHRvYmogPSBteUFycmF5WyBpIF07XHJcblxyXG5cdFx0XHRcdGlmICggTWF0aC5hYnMoIG15VmFsdWUgLSBvYmogKSA8IGRpZmYgKXsgICAgIFx0XHRcdC8vIHdlIGZvdW5kIGNsb3NlciB2YWx1ZSAtPiBzYXZlIGl0XHJcblx0XHRcdFx0XHRkaWZmID0gTWF0aC5hYnMoIG15VmFsdWUgLSBvYmogKTtcclxuXHRcdFx0XHRcdGNsb3NldFZhbHVlID0gb2JqO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGNsb3NldFZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKiAgPT0gIFQgTyBPIEwgVCBJIFAgUyAgPT1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5cdC8qKlxyXG5cdCAqIERlZmluZSB0b29sdGlwIHRvIHNob3csICB3aGVuICBtb3VzZSBvdmVyIERhdGUgaW4gQ2FsZW5kYXJcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSAgdG9vbHRpcF90ZXh0XHRcdFx0LSBUZXh0IHRvIHNob3dcdFx0XHRcdCdCb29rZWQgdGltZTogMTI6MDAgLSAxMzowMDxicj5Db3N0OiAkMjAuMDAnXHJcblx0ICogQHBhcmFtICByZXNvdXJjZV9pZFx0XHRcdC0gSUQgb2YgYm9va2luZyByZXNvdXJjZVx0JzEnXHJcblx0ICogQHBhcmFtICB0ZF9jbGFzc1x0XHRcdFx0LSBTUUwgY2xhc3NcdFx0XHRcdFx0JzEtOS0yMDIzJ1xyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVx0XHRcdFx0XHQtIGRlZmluZWQgdG8gc2hvdyBvciBub3RcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX3NldF90b29sdGlwX19fZm9yX19jYWxlbmRhcl9kYXRlKCB0b29sdGlwX3RleHQsIHJlc291cmNlX2lkLCB0ZF9jbGFzcyApe1xyXG5cclxuXHRcdC8vVE9ETzogbWFrZSBlc2NhcGluZyBvZiB0ZXh0IGZvciBxdW90IHN5bWJvbHMsICBhbmQgSlMvSFRNTC4uLlxyXG5cclxuXHRcdGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICsgJyB0ZC5jYWw0ZGF0ZS0nICsgdGRfY2xhc3MgKS5hdHRyKCAnZGF0YS1jb250ZW50JywgdG9vbHRpcF90ZXh0ICk7XHJcblxyXG5cdFx0dmFyIHRkX2VsID0galF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKyAnIHRkLmNhbDRkYXRlLScgKyB0ZF9jbGFzcyApLmdldCggMCApO1x0XHRcdFx0XHQvLyBGaXhJbjogOS4wLjEuMS5cclxuXHJcblx0XHRpZiAoXHJcblx0XHRcdCAgICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZih0ZF9lbCkgKVxyXG5cdFx0XHQmJiAoIHVuZGVmaW5lZCA9PSB0ZF9lbC5fdGlwcHkgKVxyXG5cdFx0XHQmJiAoICcnICE9PSB0b29sdGlwX3RleHQgKVxyXG5cdFx0KXtcclxuXHJcblx0XHRcdHdwYmNfdGlwcHkoIHRkX2VsICwge1xyXG5cdFx0XHRcdFx0Y29udGVudCggcmVmZXJlbmNlICl7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgcG9wb3Zlcl9jb250ZW50ID0gcmVmZXJlbmNlLmdldEF0dHJpYnV0ZSggJ2RhdGEtY29udGVudCcgKTtcclxuXHJcblx0XHRcdFx0XHRcdHJldHVybiAnPGRpdiBjbGFzcz1cInBvcG92ZXIgcG9wb3Zlcl90aXBweVwiPidcclxuXHRcdFx0XHRcdFx0XHRcdFx0KyAnPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudFwiPidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQrIHBvcG92ZXJfY29udGVudFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQrICc8L2Rpdj4nXHJcblx0XHRcdFx0XHRcdFx0ICsgJzwvZGl2Pic7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0YWxsb3dIVE1MICAgICAgICA6IHRydWUsXHJcblx0XHRcdFx0XHR0cmlnZ2VyXHRcdFx0IDogJ21vdXNlZW50ZXIgZm9jdXMnLFxyXG5cdFx0XHRcdFx0aW50ZXJhY3RpdmUgICAgICA6IGZhbHNlLFxyXG5cdFx0XHRcdFx0aGlkZU9uQ2xpY2sgICAgICA6IHRydWUsXHJcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZUJvcmRlcjogMTAsXHJcblx0XHRcdFx0XHRtYXhXaWR0aCAgICAgICAgIDogNTUwLFxyXG5cdFx0XHRcdFx0dGhlbWUgICAgICAgICAgICA6ICd3cGJjLXRpcHB5LXRpbWVzJyxcclxuXHRcdFx0XHRcdHBsYWNlbWVudCAgICAgICAgOiAndG9wJyxcclxuXHRcdFx0XHRcdGRlbGF5XHRcdFx0IDogWzQwMCwgMF0sXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gRml4SW46IDkuNC4yLjIuXHJcblx0XHRcdFx0XHQvL2RlbGF5XHRcdFx0IDogWzAsIDk5OTk5OTk5OTldLFx0XHRcdFx0XHRcdC8vIERlYnVnZSAgdG9vbHRpcFxyXG5cdFx0XHRcdFx0aWdub3JlQXR0cmlidXRlcyA6IHRydWUsXHJcblx0XHRcdFx0XHR0b3VjaFx0XHRcdCA6IHRydWUsXHRcdFx0XHRcdFx0XHRcdC8vWydob2xkJywgNTAwXSwgLy8gNTAwbXMgZGVsYXlcdFx0XHRcdC8vIEZpeEluOiA5LjIuMS41LlxyXG5cdFx0XHRcdFx0YXBwZW5kVG86ICgpID0+IGRvY3VtZW50LmJvZHksXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cmV0dXJuICB0cnVlO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAgZmFsc2U7XHJcblx0fVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKiAgPT0gIERhdGVzIEZ1bmN0aW9ucyAgPT1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKipcclxuICogR2V0IG51bWJlciBvZiBkYXRlcyBiZXR3ZWVuIDIgSlMgRGF0ZXNcclxuICpcclxuICogQHBhcmFtIGRhdGUxXHRcdEpTIERhdGVcclxuICogQHBhcmFtIGRhdGUyXHRcdEpTIERhdGVcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfZGF0ZXNfX2RheXNfYmV0d2VlbihkYXRlMSwgZGF0ZTIpIHtcclxuXHJcbiAgICAvLyBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBvbmUgZGF5XHJcbiAgICB2YXIgT05FX0RBWSA9IDEwMDAgKiA2MCAqIDYwICogMjQ7XHJcblxyXG4gICAgLy8gQ29udmVydCBib3RoIGRhdGVzIHRvIG1pbGxpc2Vjb25kc1xyXG4gICAgdmFyIGRhdGUxX21zID0gZGF0ZTEuZ2V0VGltZSgpO1xyXG4gICAgdmFyIGRhdGUyX21zID0gZGF0ZTIuZ2V0VGltZSgpO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlmZmVyZW5jZSBpbiBtaWxsaXNlY29uZHNcclxuICAgIHZhciBkaWZmZXJlbmNlX21zID0gIGRhdGUxX21zIC0gZGF0ZTJfbXM7XHJcblxyXG4gICAgLy8gQ29udmVydCBiYWNrIHRvIGRheXMgYW5kIHJldHVyblxyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoZGlmZmVyZW5jZV9tcy9PTkVfREFZKTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBDaGVjayAgaWYgdGhpcyBhcnJheSAgb2YgZGF0ZXMgaXMgY29uc2VjdXRpdmUgYXJyYXkgIG9mIGRhdGVzIG9yIG5vdC5cclxuICogXHRcdGUuZy4gIFsnMjAyNC0wNS0wOScsJzIwMjQtMDUtMTknLCcyMDI0LTA1LTMwJ10gLT4gZmFsc2VcclxuICogXHRcdGUuZy4gIFsnMjAyNC0wNS0wOScsJzIwMjQtMDUtMTAnLCcyMDI0LTA1LTExJ10gLT4gdHJ1ZVxyXG4gKiBAcGFyYW0gc3FsX2RhdGVzX2Fyclx0IGFycmF5XHRcdGUuZy46IFsnMjAyNC0wNS0wOScsJzIwMjQtMDUtMTknLCcyMDI0LTA1LTMwJ11cclxuICogQHJldHVybnMge2Jvb2xlYW59XHJcbiAqL1xyXG5mdW5jdGlvbiB3cGJjX2RhdGVzX19pc19jb25zZWN1dGl2ZV9kYXRlc19hcnJfcmFuZ2UoIHNxbF9kYXRlc19hcnIgKXtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpeEluOiAxMC4wLjAuNTAuXHJcblxyXG5cdGlmICggc3FsX2RhdGVzX2Fyci5sZW5ndGggPiAxICl7XHJcblx0XHR2YXIgcHJldmlvc19kYXRlID0gd3BiY19fZ2V0X19qc19kYXRlKCBzcWxfZGF0ZXNfYXJyWyAwIF0gKTtcclxuXHRcdHZhciBjdXJyZW50X2RhdGU7XHJcblxyXG5cdFx0Zm9yICggdmFyIGkgPSAxOyBpIDwgc3FsX2RhdGVzX2Fyci5sZW5ndGg7IGkrKyApe1xyXG5cdFx0XHRjdXJyZW50X2RhdGUgPSB3cGJjX19nZXRfX2pzX2RhdGUoIHNxbF9kYXRlc19hcnJbaV0gKTtcclxuXHJcblx0XHRcdGlmICggd3BiY19kYXRlc19fZGF5c19iZXR3ZWVuKCBjdXJyZW50X2RhdGUsIHByZXZpb3NfZGF0ZSApICE9IDEgKXtcclxuXHRcdFx0XHRyZXR1cm4gIGZhbHNlO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRwcmV2aW9zX2RhdGUgPSBjdXJyZW50X2RhdGU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vKiAgPT0gIEF1dG8gRGF0ZXMgU2VsZWN0aW9uICA9PVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbi8qKlxyXG4gKiAgPT0gSG93IHRvICB1c2UgPyA9PVxyXG4gKlxyXG4gKiAgRm9yIERhdGVzIHNlbGVjdGlvbiwgd2UgbmVlZCB0byB1c2UgdGhpcyBsb2dpYyEgICAgIFdlIG5lZWQgc2VsZWN0IHRoZSBkYXRlcyBvbmx5IGFmdGVyIGJvb2tpbmcgZGF0YSBsb2FkZWQhXHJcbiAqXHJcbiAqICBDaGVjayBleGFtcGxlIGJlbGxvdy5cclxuICpcclxuICpcdC8vIEZpcmUgb24gYWxsIGJvb2tpbmcgZGF0ZXMgbG9hZGVkXHJcbiAqXHRqUXVlcnkoICdib2R5JyApLm9uKCAnd3BiY19jYWxlbmRhcl9hanhfX2xvYWRlZF9kYXRhJywgZnVuY3Rpb24gKCBldmVudCwgbG9hZGVkX3Jlc291cmNlX2lkICl7XHJcbiAqXHJcbiAqXHRcdGlmICggbG9hZGVkX3Jlc291cmNlX2lkID09IHNlbGVjdF9kYXRlc19pbl9jYWxlbmRhcl9pZCApe1xyXG4gKlx0XHRcdHdwYmNfYXV0b19zZWxlY3RfZGF0ZXNfaW5fY2FsZW5kYXIoIHNlbGVjdF9kYXRlc19pbl9jYWxlbmRhcl9pZCwgJzIwMjQtMDUtMTUnLCAnMjAyNC0wNS0yNScgKTtcclxuICpcdFx0fVxyXG4gKlx0fSApO1xyXG4gKlxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICogVHJ5IHRvIEF1dG8gc2VsZWN0IGRhdGVzIGluIHNwZWNpZmljIGNhbGVuZGFyIGJ5IHNpbXVsYXRlZCBjbGlja3MgaW4gZGF0ZXBpY2tlclxyXG4gKlxyXG4gKiBAcGFyYW0gcmVzb3VyY2VfaWRcdFx0MVxyXG4gKiBAcGFyYW0gY2hlY2tfaW5feW1kXHRcdCcyMDI0LTA1LTA5J1x0XHRPUiAgXHRbJzIwMjQtMDUtMDknLCcyMDI0LTA1LTE5JywnMjAyNC0wNS0yMCddXHJcbiAqIEBwYXJhbSBjaGVja19vdXRfeW1kXHRcdCcyMDI0LTA1LTE1J1x0XHRPcHRpb25hbFxyXG4gKlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVx0XHRudW1iZXIgb2Ygc2VsZWN0ZWQgZGF0ZXNcclxuICpcclxuICogXHRFeGFtcGxlIDE6XHRcdFx0XHR2YXIgbnVtX3NlbGVjdGVkX2RheXMgPSB3cGJjX2F1dG9fc2VsZWN0X2RhdGVzX2luX2NhbGVuZGFyKCAxLCAnMjAyNC0wNS0xNScsICcyMDI0LTA1LTI1JyApO1xyXG4gKiBcdEV4YW1wbGUgMjpcdFx0XHRcdHZhciBudW1fc2VsZWN0ZWRfZGF5cyA9IHdwYmNfYXV0b19zZWxlY3RfZGF0ZXNfaW5fY2FsZW5kYXIoIDEsIFsnMjAyNC0wNS0wOScsJzIwMjQtMDUtMTknLCcyMDI0LTA1LTIwJ10gKTtcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfYXV0b19zZWxlY3RfZGF0ZXNfaW5fY2FsZW5kYXIoIHJlc291cmNlX2lkLCBjaGVja19pbl95bWQsIGNoZWNrX291dF95bWQgPSAnJyApe1x0XHRcdFx0XHRcdFx0XHQvLyBGaXhJbjogMTAuMC4wLjQ3LlxyXG5cclxuXHRjb25zb2xlLmxvZyggJ1dQQkNfQVVUT19TRUxFQ1RfREFURVNfSU5fQ0FMRU5EQVIoIFJFU09VUkNFX0lELCBDSEVDS19JTl9ZTUQsIENIRUNLX09VVF9ZTUQgKScsIHJlc291cmNlX2lkLCBjaGVja19pbl95bWQsIGNoZWNrX291dF95bWQgKTtcclxuXHJcblx0aWYgKFxyXG5cdFx0ICAgKCAnMjEwMC0wMS0wMScgPT0gY2hlY2tfaW5feW1kIClcclxuXHRcdHx8ICggJzIxMDAtMDEtMDEnID09IGNoZWNrX291dF95bWQgKVxyXG5cdFx0fHwgKCAoICcnID09IGNoZWNrX2luX3ltZCApICYmICggJycgPT0gY2hlY2tfb3V0X3ltZCApIClcclxuXHQpe1xyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIElmIFx0Y2hlY2tfaW5feW1kICA9ICBbICcyMDI0LTA1LTA5JywnMjAyNC0wNS0xOScsJzIwMjQtMDUtMzAnIF1cdFx0XHRcdEFSUkFZIG9mIERBVEVTXHRcdFx0XHRcdFx0Ly8gRml4SW46IDEwLjAuMC41MC5cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdHZhciBkYXRlc190b19zZWxlY3RfYXJyID0gW107XHJcblx0aWYgKCBBcnJheS5pc0FycmF5KCBjaGVja19pbl95bWQgKSApe1xyXG5cdFx0ZGF0ZXNfdG9fc2VsZWN0X2FyciA9IHdwYmNfY2xvbmVfb2JqKCBjaGVja19pbl95bWQgKTtcclxuXHJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBFeGNlcHRpb25zIHRvICBzZXQgIFx0TVVMVElQTEUgREFZUyBcdG1vZGVcclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIGlmIGRhdGVzIGFzIE5PVCBDT05TRUNVVElWRTogWycyMDI0LTA1LTA5JywnMjAyNC0wNS0xOScsJzIwMjQtMDUtMzAnXSwgLT4gc2V0IE1VTFRJUExFIERBWVMgbW9kZVxyXG5cdFx0aWYgKFxyXG5cdFx0XHQgICAoIGRhdGVzX3RvX3NlbGVjdF9hcnIubGVuZ3RoID4gMCApXHJcblx0XHRcdCYmICggJycgPT0gY2hlY2tfb3V0X3ltZCApXHJcblx0XHRcdCYmICggISB3cGJjX2RhdGVzX19pc19jb25zZWN1dGl2ZV9kYXRlc19hcnJfcmFuZ2UoIGRhdGVzX3RvX3NlbGVjdF9hcnIgKSApXHJcblx0XHQpe1xyXG5cdFx0XHR3cGJjX2NhbF9kYXlzX3NlbGVjdF9fbXVsdGlwbGUoIHJlc291cmNlX2lkICk7XHJcblx0XHR9XHJcblx0XHQvLyBpZiBtdWx0aXBsZSBkYXlzIHRvIHNlbGVjdCwgYnV0IGVuYWJsZWQgU0lOR0xFIGRheSBtb2RlLCAtPiBzZXQgTVVMVElQTEUgREFZUyBtb2RlXHJcblx0XHRpZiAoXHJcblx0XHRcdCAgICggZGF0ZXNfdG9fc2VsZWN0X2Fyci5sZW5ndGggPiAxIClcclxuXHRcdFx0JiYgKCAnJyA9PSBjaGVja19vdXRfeW1kIClcclxuXHRcdFx0JiYgKCAnc2luZ2xlJyA9PT0gX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkYXlzX3NlbGVjdF9tb2RlJyApIClcclxuXHRcdCl7XHJcblx0XHRcdHdwYmNfY2FsX2RheXNfc2VsZWN0X19tdWx0aXBsZSggcmVzb3VyY2VfaWQgKTtcclxuXHRcdH1cclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdGNoZWNrX2luX3ltZCA9IGRhdGVzX3RvX3NlbGVjdF9hcnJbIDAgXTtcclxuXHRcdGlmICggJycgPT0gY2hlY2tfb3V0X3ltZCApe1xyXG5cdFx0XHRjaGVja19vdXRfeW1kID0gZGF0ZXNfdG9fc2VsZWN0X2FyclsgKGRhdGVzX3RvX3NlbGVjdF9hcnIubGVuZ3RoLTEpIF07XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHRpZiAoICcnID09IGNoZWNrX2luX3ltZCApe1xyXG5cdFx0Y2hlY2tfaW5feW1kID0gY2hlY2tfb3V0X3ltZDtcclxuXHR9XHJcblx0aWYgKCAnJyA9PSBjaGVja19vdXRfeW1kICl7XHJcblx0XHRjaGVja19vdXRfeW1kID0gY2hlY2tfaW5feW1kO1xyXG5cdH1cclxuXHJcblx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIChyZXNvdXJjZV9pZCkgKXtcclxuXHRcdHJlc291cmNlX2lkID0gJzEnO1xyXG5cdH1cclxuXHJcblxyXG5cdHZhciBpbnN0ID0gd3BiY19jYWxlbmRhcl9fZ2V0X2luc3QoIHJlc291cmNlX2lkICk7XHJcblxyXG5cdGlmICggbnVsbCAhPT0gaW5zdCApe1xyXG5cclxuXHRcdC8vIFVuc2VsZWN0IGFsbCBkYXRlcyBhbmQgc2V0ICBwcm9wZXJ0aWVzIG9mIERhdGVwaWNrXHJcblx0XHRqUXVlcnkoICcjZGF0ZV9ib29raW5nJyArIHJlc291cmNlX2lkICkudmFsKCAnJyApOyAgICAgIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL0ZpeEluOiA1LjQuM1xyXG5cdFx0aW5zdC5zdGF5T3BlbiA9IGZhbHNlO1xyXG5cdFx0aW5zdC5kYXRlcyA9IFtdO1xyXG5cdFx0dmFyIGNoZWNrX2luX2pzID0gd3BiY19fZ2V0X19qc19kYXRlKCBjaGVja19pbl95bWQgKTtcclxuXHRcdHZhciB0ZF9jZWxsICAgICA9IHdwYmNfZ2V0X2NsaWNrZWRfdGQoIGluc3QuaWQsIGNoZWNrX2luX2pzICk7XHJcblxyXG5cdFx0Ly8gSXMgb21lIHR5cGUgb2YgZXJyb3IsIHRoZW4gc2VsZWN0IG11bHRpcGxlIGRheXMgc2VsZWN0aW9uICBtb2RlLlxyXG5cdFx0aWYgKCAnJyA9PT0gX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkYXlzX3NlbGVjdF9tb2RlJyApICkge1xyXG4gXHRcdFx0X3dwYmMuY2FsZW5kYXJfX3NldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkYXlzX3NlbGVjdF9tb2RlJywgJ211bHRpcGxlJyApO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vICA9PSBEWU5BTUlDID09XHJcblx0XHRpZiAoICdkeW5hbWljJyA9PT0gX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkYXlzX3NlbGVjdF9tb2RlJyApICl7XHJcblx0XHRcdC8vIDEtc3QgY2xpY2tcclxuXHRcdFx0aW5zdC5zdGF5T3BlbiA9IGZhbHNlO1xyXG5cdFx0XHRqUXVlcnkuZGF0ZXBpY2suX3NlbGVjdERheSggdGRfY2VsbCwgJyMnICsgaW5zdC5pZCwgY2hlY2tfaW5fanMuZ2V0VGltZSgpICk7XHJcblx0XHRcdGlmICggMCA9PT0gaW5zdC5kYXRlcy5sZW5ndGggKXtcclxuXHRcdFx0XHRyZXR1cm4gMDsgIFx0XHRcdFx0XHRcdFx0XHQvLyBGaXJzdCBjbGljayAgd2FzIHVuc3VjY2Vzc2Z1bCwgc28gd2UgbXVzdCBub3QgbWFrZSBvdGhlciBjbGlja1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQvLyAyLW5kIGNsaWNrXHJcblx0XHRcdHZhciBjaGVja19vdXRfanMgPSB3cGJjX19nZXRfX2pzX2RhdGUoIGNoZWNrX291dF95bWQgKTtcclxuXHRcdFx0dmFyIHRkX2NlbGxfb3V0ID0gd3BiY19nZXRfY2xpY2tlZF90ZCggaW5zdC5pZCwgY2hlY2tfb3V0X2pzICk7XHJcblx0XHRcdGluc3Quc3RheU9wZW4gPSB0cnVlO1xyXG5cdFx0XHRqUXVlcnkuZGF0ZXBpY2suX3NlbGVjdERheSggdGRfY2VsbF9vdXQsICcjJyArIGluc3QuaWQsIGNoZWNrX291dF9qcy5nZXRUaW1lKCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vICA9PSBGSVhFRCA9PVxyXG5cdFx0aWYgKCAgJ2ZpeGVkJyA9PT0gX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkYXlzX3NlbGVjdF9tb2RlJyApKSB7XHJcblx0XHRcdGpRdWVyeS5kYXRlcGljay5fc2VsZWN0RGF5KCB0ZF9jZWxsLCAnIycgKyBpbnN0LmlkLCBjaGVja19pbl9qcy5nZXRUaW1lKCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vICA9PSBTSU5HTEUgPT1cclxuXHRcdGlmICggJ3NpbmdsZScgPT09IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZGF5c19zZWxlY3RfbW9kZScgKSApe1xyXG5cdFx0XHQvL2pRdWVyeS5kYXRlcGljay5fcmVzdHJpY3RNaW5NYXgoIGluc3QsIGpRdWVyeS5kYXRlcGljay5fZGV0ZXJtaW5lRGF0ZSggaW5zdCwgY2hlY2tfaW5fanMsIG51bGwgKSApO1x0XHQvLyBEbyB3ZSBuZWVkIHRvIHJ1biAgdGhpcyA/IFBsZWFzZSBub3RlLCBjaGVja19pbl9qcyBtdXN0ICBoYXZlIHRpbWUsICBtaW4sIHNlYyBkZWZpbmVkIHRvIDAhXHJcblx0XHRcdGpRdWVyeS5kYXRlcGljay5fc2VsZWN0RGF5KCB0ZF9jZWxsLCAnIycgKyBpbnN0LmlkLCBjaGVja19pbl9qcy5nZXRUaW1lKCkgKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vICA9PSBNVUxUSVBMRSA9PVxyXG5cdFx0aWYgKCAnbXVsdGlwbGUnID09PSBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2RheXNfc2VsZWN0X21vZGUnICkgKXtcclxuXHJcblx0XHRcdHZhciBkYXRlc19hcnI7XHJcblxyXG5cdFx0XHRpZiAoIGRhdGVzX3RvX3NlbGVjdF9hcnIubGVuZ3RoID4gMCApe1xyXG5cdFx0XHRcdC8vIFNpdHVhdGlvbiwgd2hlbiB3ZSBoYXZlIGRhdGVzIGFycmF5OiBbJzIwMjQtMDUtMDknLCcyMDI0LTA1LTE5JywnMjAyNC0wNS0zMCddLiAgYW5kIG5vdCB0aGUgQ2hlY2sgSW4gLyBDaGVjayAgb3V0IGRhdGVzIGFzIHBhcmFtZXRlciBpbiB0aGlzIGZ1bmN0aW9uXHJcblx0XHRcdFx0ZGF0ZXNfYXJyID0gd3BiY19nZXRfc2VsZWN0aW9uX2RhdGVzX2pzX3N0cl9hcnJfX2Zyb21fYXJyKCBkYXRlc190b19zZWxlY3RfYXJyICk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0ZGF0ZXNfYXJyID0gd3BiY19nZXRfc2VsZWN0aW9uX2RhdGVzX2pzX3N0cl9hcnJfX2Zyb21fY2hlY2tfaW5fb3V0KCBjaGVja19pbl95bWQsIGNoZWNrX291dF95bWQsIGluc3QgKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aWYgKCAwID09PSBkYXRlc19hcnIuZGF0ZXNfanMubGVuZ3RoICl7XHJcblx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC8vIEZvciBDYWxlbmRhciBEYXlzIHNlbGVjdGlvblxyXG5cdFx0XHRmb3IgKCB2YXIgaiA9IDA7IGogPCBkYXRlc19hcnIuZGF0ZXNfanMubGVuZ3RoOyBqKysgKXsgICAgICAgLy8gTG9vcCBhcnJheSBvZiBkYXRlc1xyXG5cclxuXHRcdFx0XHR2YXIgc3RyX2RhdGUgPSB3cGJjX19nZXRfX3NxbF9jbGFzc19kYXRlKCBkYXRlc19hcnIuZGF0ZXNfanNbIGogXSApO1xyXG5cclxuXHRcdFx0XHQvLyBEYXRlIHVuYXZhaWxhYmxlICFcclxuXHRcdFx0XHRpZiAoIDAgPT0gX3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSggcmVzb3VyY2VfaWQsIHN0cl9kYXRlICkuZGF5X2F2YWlsYWJpbGl0eSApe1xyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIGRhdGVzX2Fyci5kYXRlc19qc1sgaiBdICE9IC0xICkge1xyXG5cdFx0XHRcdFx0aW5zdC5kYXRlcy5wdXNoKCBkYXRlc19hcnIuZGF0ZXNfanNbIGogXSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIGNoZWNrX291dF9kYXRlID0gZGF0ZXNfYXJyLmRhdGVzX2pzWyAoZGF0ZXNfYXJyLmRhdGVzX2pzLmxlbmd0aCAtIDEpIF07XHJcblxyXG5cdFx0XHRpbnN0LmRhdGVzLnB1c2goIGNoZWNrX291dF9kYXRlICk7IFx0XHRcdC8vIE5lZWQgYWRkIG9uZSBhZGRpdGlvbmFsIFNBTUUgZGF0ZSBmb3IgY29ycmVjdCAgd29ya3Mgb2YgZGF0ZXMgc2VsZWN0aW9uICEhISEhXHJcblxyXG5cdFx0XHR2YXIgY2hlY2tvdXRfdGltZXN0YW1wID0gY2hlY2tfb3V0X2RhdGUuZ2V0VGltZSgpO1xyXG5cdFx0XHR2YXIgdGRfY2VsbCA9IHdwYmNfZ2V0X2NsaWNrZWRfdGQoIGluc3QuaWQsIGNoZWNrX291dF9kYXRlICk7XHJcblxyXG5cdFx0XHRqUXVlcnkuZGF0ZXBpY2suX3NlbGVjdERheSggdGRfY2VsbCwgJyMnICsgaW5zdC5pZCwgY2hlY2tvdXRfdGltZXN0YW1wICk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdGlmICggMCAhPT0gaW5zdC5kYXRlcy5sZW5ndGggKXtcclxuXHRcdFx0Ly8gU2Nyb2xsIHRvIHNwZWNpZmljIG1vbnRoLCBpZiB3ZSBzZXQgZGF0ZXMgaW4gc29tZSBmdXR1cmUgbW9udGhzXHJcblx0XHRcdHdwYmNfY2FsZW5kYXJfX3Njcm9sbF90byggcmVzb3VyY2VfaWQsIGluc3QuZGF0ZXNbIDAgXS5nZXRGdWxsWWVhcigpLCBpbnN0LmRhdGVzWyAwIF0uZ2V0TW9udGgoKSsxICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGluc3QuZGF0ZXMubGVuZ3RoO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIDA7XHJcbn1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IEhUTUwgdGQgZWxlbWVudCAod2hlcmUgd2FzIGNsaWNrIGluIGNhbGVuZGFyICBkYXkgIGNlbGwpXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gY2FsZW5kYXJfaHRtbF9pZFx0XHRcdCdjYWxlbmRhcl9ib29raW5nMSdcclxuXHQgKiBAcGFyYW0gZGF0ZV9qc1x0XHRcdFx0XHRKUyBEYXRlXHJcblx0ICogQHJldHVybnMgeyp8alF1ZXJ5fVx0XHRcdFx0RG9tIEhUTUwgdGQgZWxlbWVudFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZ2V0X2NsaWNrZWRfdGQoIGNhbGVuZGFyX2h0bWxfaWQsIGRhdGVfanMgKXtcclxuXHJcblx0ICAgIHZhciB0ZF9jZWxsID0galF1ZXJ5KCAnIycgKyBjYWxlbmRhcl9odG1sX2lkICsgJyAuc3FsX2RhdGVfJyArIHdwYmNfX2dldF9fc3FsX2NsYXNzX2RhdGUoIGRhdGVfanMgKSApLmdldCggMCApO1xyXG5cclxuXHRcdHJldHVybiB0ZF9jZWxsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGFycmF5cyBvZiBKUyBhbmQgU1FMIGRhdGVzIGFzIGRhdGVzIGFycmF5XHJcblx0ICpcclxuXHQgKiBAcGFyYW0gY2hlY2tfaW5feW1kXHRcdFx0XHRcdFx0XHQnMjAyNC0wNS0xNSdcclxuXHQgKiBAcGFyYW0gY2hlY2tfb3V0X3ltZFx0XHRcdFx0XHRcdFx0JzIwMjQtMDUtMjUnXHJcblx0ICogQHBhcmFtIGluc3RcdFx0XHRcdFx0XHRcdFx0XHREYXRlcGljayBJbnN0LiBVc2Ugd3BiY19jYWxlbmRhcl9fZ2V0X2luc3QoIHJlc291cmNlX2lkICk7XHJcblx0ICogQHJldHVybnMge3tkYXRlc19qczogKltdLCBkYXRlc19zdHI6ICpbXX19XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19nZXRfc2VsZWN0aW9uX2RhdGVzX2pzX3N0cl9hcnJfX2Zyb21fY2hlY2tfaW5fb3V0KCBjaGVja19pbl95bWQsIGNoZWNrX291dF95bWQgLCBpbnN0ICl7XHJcblxyXG5cdFx0dmFyIG9yaWdpbmFsX2FycmF5ID0gW107XHJcblx0XHR2YXIgZGF0ZTtcclxuXHRcdHZhciBia19kaXN0aW5jdF9kYXRlcyA9IFtdO1xyXG5cclxuXHRcdHZhciBjaGVja19pbl9kYXRlID0gY2hlY2tfaW5feW1kLnNwbGl0KCAnLScgKTtcclxuXHRcdHZhciBjaGVja19vdXRfZGF0ZSA9IGNoZWNrX291dF95bWQuc3BsaXQoICctJyApO1xyXG5cclxuXHRcdGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdFx0ZGF0ZS5zZXRGdWxsWWVhciggY2hlY2tfaW5fZGF0ZVsgMCBdLCAoY2hlY2tfaW5fZGF0ZVsgMSBdIC0gMSksIGNoZWNrX2luX2RhdGVbIDIgXSApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHllYXIsIG1vbnRoLCBkYXRlXHJcblx0XHR2YXIgb3JpZ2luYWxfY2hlY2tfaW5fZGF0ZSA9IGRhdGU7XHJcblx0XHRvcmlnaW5hbF9hcnJheS5wdXNoKCBqUXVlcnkuZGF0ZXBpY2suX3Jlc3RyaWN0TWluTWF4KCBpbnN0LCBqUXVlcnkuZGF0ZXBpY2suX2RldGVybWluZURhdGUoIGluc3QsIGRhdGUsIG51bGwgKSApICk7IC8vYWRkIGRhdGVcclxuXHRcdGlmICggISB3cGJjX2luX2FycmF5KCBia19kaXN0aW5jdF9kYXRlcywgKGNoZWNrX2luX2RhdGVbIDIgXSArICcuJyArIGNoZWNrX2luX2RhdGVbIDEgXSArICcuJyArIGNoZWNrX2luX2RhdGVbIDAgXSkgKSApe1xyXG5cdFx0XHRia19kaXN0aW5jdF9kYXRlcy5wdXNoKCBwYXJzZUludChjaGVja19pbl9kYXRlWyAyIF0pICsgJy4nICsgcGFyc2VJbnQoY2hlY2tfaW5fZGF0ZVsgMSBdKSArICcuJyArIGNoZWNrX2luX2RhdGVbIDAgXSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBkYXRlX291dCA9IG5ldyBEYXRlKCk7XHJcblx0XHRkYXRlX291dC5zZXRGdWxsWWVhciggY2hlY2tfb3V0X2RhdGVbIDAgXSwgKGNoZWNrX291dF9kYXRlWyAxIF0gLSAxKSwgY2hlY2tfb3V0X2RhdGVbIDIgXSApOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHllYXIsIG1vbnRoLCBkYXRlXHJcblx0XHR2YXIgb3JpZ2luYWxfY2hlY2tfb3V0X2RhdGUgPSBkYXRlX291dDtcclxuXHJcblx0XHR2YXIgbWV3RGF0ZSA9IG5ldyBEYXRlKCBvcmlnaW5hbF9jaGVja19pbl9kYXRlLmdldEZ1bGxZZWFyKCksIG9yaWdpbmFsX2NoZWNrX2luX2RhdGUuZ2V0TW9udGgoKSwgb3JpZ2luYWxfY2hlY2tfaW5fZGF0ZS5nZXREYXRlKCkgKTtcclxuXHRcdG1ld0RhdGUuc2V0RGF0ZSggb3JpZ2luYWxfY2hlY2tfaW5fZGF0ZS5nZXREYXRlKCkgKyAxICk7XHJcblxyXG5cdFx0d2hpbGUgKFxyXG5cdFx0XHQob3JpZ2luYWxfY2hlY2tfb3V0X2RhdGUgPiBkYXRlKSAmJlxyXG5cdFx0XHQob3JpZ2luYWxfY2hlY2tfaW5fZGF0ZSAhPSBvcmlnaW5hbF9jaGVja19vdXRfZGF0ZSkgKXtcclxuXHRcdFx0ZGF0ZSA9IG5ldyBEYXRlKCBtZXdEYXRlLmdldEZ1bGxZZWFyKCksIG1ld0RhdGUuZ2V0TW9udGgoKSwgbWV3RGF0ZS5nZXREYXRlKCkgKTtcclxuXHJcblx0XHRcdG9yaWdpbmFsX2FycmF5LnB1c2goIGpRdWVyeS5kYXRlcGljay5fcmVzdHJpY3RNaW5NYXgoIGluc3QsIGpRdWVyeS5kYXRlcGljay5fZGV0ZXJtaW5lRGF0ZSggaW5zdCwgZGF0ZSwgbnVsbCApICkgKTsgLy9hZGQgZGF0ZVxyXG5cdFx0XHRpZiAoICF3cGJjX2luX2FycmF5KCBia19kaXN0aW5jdF9kYXRlcywgKGRhdGUuZ2V0RGF0ZSgpICsgJy4nICsgcGFyc2VJbnQoIGRhdGUuZ2V0TW9udGgoKSArIDEgKSArICcuJyArIGRhdGUuZ2V0RnVsbFllYXIoKSkgKSApe1xyXG5cdFx0XHRcdGJrX2Rpc3RpbmN0X2RhdGVzLnB1c2goIChwYXJzZUludChkYXRlLmdldERhdGUoKSkgKyAnLicgKyBwYXJzZUludCggZGF0ZS5nZXRNb250aCgpICsgMSApICsgJy4nICsgZGF0ZS5nZXRGdWxsWWVhcigpKSApO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtZXdEYXRlID0gbmV3IERhdGUoIGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSApO1xyXG5cdFx0XHRtZXdEYXRlLnNldERhdGUoIG1ld0RhdGUuZ2V0RGF0ZSgpICsgMSApO1xyXG5cdFx0fVxyXG5cdFx0b3JpZ2luYWxfYXJyYXkucG9wKCk7XHJcblx0XHRia19kaXN0aW5jdF9kYXRlcy5wb3AoKTtcclxuXHJcblx0XHRyZXR1cm4geydkYXRlc19qcyc6IG9yaWdpbmFsX2FycmF5LCAnZGF0ZXNfc3RyJzogYmtfZGlzdGluY3RfZGF0ZXN9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGFycmF5cyBvZiBKUyBhbmQgU1FMIGRhdGVzIGFzIGRhdGVzIGFycmF5XHJcblx0ICpcclxuXHQgKiBAcGFyYW0gZGF0ZXNfdG9fc2VsZWN0X2Fyclx0PSBbJzIwMjQtMDUtMDknLCcyMDI0LTA1LTE5JywnMjAyNC0wNS0zMCddXHJcblx0ICpcclxuXHQgKiBAcmV0dXJucyB7e2RhdGVzX2pzOiAqW10sIGRhdGVzX3N0cjogKltdfX1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2dldF9zZWxlY3Rpb25fZGF0ZXNfanNfc3RyX2Fycl9fZnJvbV9hcnIoIGRhdGVzX3RvX3NlbGVjdF9hcnIgKXtcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpeEluOiAxMC4wLjAuNTAuXHJcblxyXG5cdFx0dmFyIG9yaWdpbmFsX2FycmF5ICAgID0gW107XHJcblx0XHR2YXIgYmtfZGlzdGluY3RfZGF0ZXMgPSBbXTtcclxuXHRcdHZhciBvbmVfZGF0ZV9zdHI7XHJcblxyXG5cdFx0Zm9yICggdmFyIGQgPSAwOyBkIDwgZGF0ZXNfdG9fc2VsZWN0X2Fyci5sZW5ndGg7IGQrKyApe1xyXG5cclxuXHRcdFx0b3JpZ2luYWxfYXJyYXkucHVzaCggd3BiY19fZ2V0X19qc19kYXRlKCBkYXRlc190b19zZWxlY3RfYXJyWyBkIF0gKSApO1xyXG5cclxuXHRcdFx0b25lX2RhdGVfc3RyID0gZGF0ZXNfdG9fc2VsZWN0X2FyclsgZCBdLnNwbGl0KCctJylcclxuXHRcdFx0aWYgKCAhIHdwYmNfaW5fYXJyYXkoIGJrX2Rpc3RpbmN0X2RhdGVzLCAob25lX2RhdGVfc3RyWyAyIF0gKyAnLicgKyBvbmVfZGF0ZV9zdHJbIDEgXSArICcuJyArIG9uZV9kYXRlX3N0clsgMCBdKSApICl7XHJcblx0XHRcdFx0YmtfZGlzdGluY3RfZGF0ZXMucHVzaCggcGFyc2VJbnQob25lX2RhdGVfc3RyWyAyIF0pICsgJy4nICsgcGFyc2VJbnQob25lX2RhdGVfc3RyWyAxIF0pICsgJy4nICsgb25lX2RhdGVfc3RyWyAwIF0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7J2RhdGVzX2pzJzogb3JpZ2luYWxfYXJyYXksICdkYXRlc19zdHInOiBvcmlnaW5hbF9hcnJheX07XHJcblx0fVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8qICA9PSAgQXV0byBGaWxsIEZpZWxkcyAvIEF1dG8gU2VsZWN0IERhdGVzICA9PVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24gKCl7XHJcblxyXG5cdHZhciB1cmxfcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyggd2luZG93LmxvY2F0aW9uLnNlYXJjaCApO1xyXG5cclxuXHQvLyBEaXNhYmxlIGRheXMgc2VsZWN0aW9uICBpbiBjYWxlbmRhciwgIGFmdGVyICByZWRpcmVjdGlvbiAgZnJvbSAgdGhlIFwiU2VhcmNoIHJlc3VsdHMgcGFnZSwgIGFmdGVyICBzZWFyY2ggIGF2YWlsYWJpbGl0eVwiIFx0XHRcdC8vIEZpeEluOiA4LjguMi4zLlxyXG5cdGlmICAoICdPbicgIT0gX3dwYmMuZ2V0X290aGVyX3BhcmFtKCAnaXNfZW5hYmxlZF9ib29raW5nX3NlYXJjaF9yZXN1bHRzX2RheXNfc2VsZWN0JyApICkge1xyXG5cdFx0aWYgKFxyXG5cdFx0XHQoIHVybF9wYXJhbXMuaGFzKCAnd3BiY19zZWxlY3RfY2hlY2tfaW4nICkgKSAmJlxyXG5cdFx0XHQoIHVybF9wYXJhbXMuaGFzKCAnd3BiY19zZWxlY3RfY2hlY2tfb3V0JyApICkgJiZcclxuXHRcdFx0KCB1cmxfcGFyYW1zLmhhcyggJ3dwYmNfc2VsZWN0X2NhbGVuZGFyX2lkJyApIClcclxuXHRcdCl7XHJcblxyXG5cdFx0XHR2YXIgc2VsZWN0X2RhdGVzX2luX2NhbGVuZGFyX2lkID0gcGFyc2VJbnQoIHVybF9wYXJhbXMuZ2V0KCAnd3BiY19zZWxlY3RfY2FsZW5kYXJfaWQnICkgKTtcclxuXHJcblx0XHRcdC8vIEZpcmUgb24gYWxsIGJvb2tpbmcgZGF0ZXMgbG9hZGVkXHJcblx0XHRcdGpRdWVyeSggJ2JvZHknICkub24oICd3cGJjX2NhbGVuZGFyX2FqeF9fbG9hZGVkX2RhdGEnLCBmdW5jdGlvbiAoIGV2ZW50LCBsb2FkZWRfcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHRcdFx0aWYgKCBsb2FkZWRfcmVzb3VyY2VfaWQgPT0gc2VsZWN0X2RhdGVzX2luX2NhbGVuZGFyX2lkICl7XHJcblx0XHRcdFx0XHR3cGJjX2F1dG9fc2VsZWN0X2RhdGVzX2luX2NhbGVuZGFyKCBzZWxlY3RfZGF0ZXNfaW5fY2FsZW5kYXJfaWQsIHVybF9wYXJhbXMuZ2V0KCAnd3BiY19zZWxlY3RfY2hlY2tfaW4nICksIHVybF9wYXJhbXMuZ2V0KCAnd3BiY19zZWxlY3RfY2hlY2tfb3V0JyApICk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoIHVybF9wYXJhbXMuaGFzKCAnd3BiY19hdXRvX2ZpbGwnICkgKXtcclxuXHJcblx0XHR2YXIgd3BiY19hdXRvX2ZpbGxfdmFsdWUgPSB1cmxfcGFyYW1zLmdldCggJ3dwYmNfYXV0b19maWxsJyApO1xyXG5cclxuXHRcdC8vIENvbnZlcnQgYmFjay4gICAgIFNvbWUgc3lzdGVtcyBkbyBub3QgbGlrZSBzeW1ib2wgJ34nIGluIFVSTCwgc28gIHdlIG5lZWQgdG8gcmVwbGFjZSB0byAgc29tZSBvdGhlciBzeW1ib2xzXHJcblx0XHR3cGJjX2F1dG9fZmlsbF92YWx1ZSA9IHdwYmNfYXV0b19maWxsX3ZhbHVlLnJlcGxhY2VBbGwoICdfXl8nLCAnficgKTtcclxuXHJcblx0XHR3cGJjX2F1dG9fZmlsbF9ib29raW5nX2ZpZWxkcyggd3BiY19hdXRvX2ZpbGxfdmFsdWUgKTtcclxuXHR9XHJcblxyXG59ICk7XHJcblxyXG4vKipcclxuICogQXV0b2ZpbGwgLyBzZWxlY3QgYm9va2luZyBmb3JtICBmaWVsZHMgYnkgIHZhbHVlcyBmcm9tICB0aGUgR0VUIHJlcXVlc3QgIHBhcmFtZXRlcjogP3dwYmNfYXV0b19maWxsPVxyXG4gKlxyXG4gKiBAcGFyYW0gYXV0b19maWxsX3N0clxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19hdXRvX2ZpbGxfYm9va2luZ19maWVsZHMoIGF1dG9fZmlsbF9zdHIgKXtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpeEluOiAxMC4wLjAuNDguXHJcblxyXG5cdGlmICggJycgPT0gYXV0b19maWxsX3N0ciApe1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcbi8vIGNvbnNvbGUubG9nKCAnV1BCQ19BVVRPX0ZJTExfQk9PS0lOR19GSUVMRFMoIEFVVE9fRklMTF9TVFIgKScsIGF1dG9fZmlsbF9zdHIpO1xyXG5cclxuXHR2YXIgZmllbGRzX2FyciA9IHdwYmNfYXV0b19maWxsX2Jvb2tpbmdfZmllbGRzX19wYXJzZSggYXV0b19maWxsX3N0ciApO1xyXG5cclxuXHRmb3IgKCBsZXQgaSA9IDA7IGkgPCBmaWVsZHNfYXJyLmxlbmd0aDsgaSsrICl7XHJcblx0XHRqUXVlcnkoICdbbmFtZT1cIicgKyBmaWVsZHNfYXJyWyBpIF1bICduYW1lJyBdICsgJ1wiXScgKS52YWwoIGZpZWxkc19hcnJbIGkgXVsgJ3ZhbHVlJyBdICk7XHJcblx0fVxyXG59XHJcblxyXG5cdC8qKlxyXG5cdCAqIFBhcnNlIGRhdGEgZnJvbSAgZ2V0IHBhcmFtZXRlcjpcdD93cGJjX2F1dG9fZmlsbD12aXNpdG9yczIzMV4yfm1heF9jYXBhY2l0eTIzMV4yXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gZGF0YV9zdHIgICAgICA9ICAgJ3Zpc2l0b3JzMjMxXjJ+bWF4X2NhcGFjaXR5MjMxXjInO1xyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfYXV0b19maWxsX2Jvb2tpbmdfZmllbGRzX19wYXJzZSggZGF0YV9zdHIgKXtcclxuXHJcblx0XHR2YXIgZmlsdGVyX29wdGlvbnNfYXJyID0gW107XHJcblxyXG5cdFx0dmFyIGRhdGFfYXJyID0gZGF0YV9zdHIuc3BsaXQoICd+JyApO1xyXG5cclxuXHRcdGZvciAoIHZhciBqID0gMDsgaiA8IGRhdGFfYXJyLmxlbmd0aDsgaisrICl7XHJcblxyXG5cdFx0XHR2YXIgbXlfZm9ybV9maWVsZCA9IGRhdGFfYXJyWyBqIF0uc3BsaXQoICdeJyApO1xyXG5cclxuXHRcdFx0dmFyIGZpbHRlcl9uYW1lICA9ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIChteV9mb3JtX2ZpZWxkWyAwIF0pKSA/IG15X2Zvcm1fZmllbGRbIDAgXSA6ICcnO1xyXG5cdFx0XHR2YXIgZmlsdGVyX3ZhbHVlID0gKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgKG15X2Zvcm1fZmllbGRbIDEgXSkpID8gbXlfZm9ybV9maWVsZFsgMSBdIDogJyc7XHJcblxyXG5cdFx0XHRmaWx0ZXJfb3B0aW9uc19hcnIucHVzaChcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmFtZScgIDogZmlsdGVyX25hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndmFsdWUnIDogZmlsdGVyX3ZhbHVlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmaWx0ZXJfb3B0aW9uc19hcnI7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBQYXJzZSBkYXRhIGZyb20gIGdldCBwYXJhbWV0ZXI6XHQ/c2VhcmNoX2dldF9fY3VzdG9tX3BhcmFtcz0uLi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBkYXRhX3N0ciAgICAgID0gICAndGV4dF5zZWFyY2hfZmllbGRfX2Rpc3BsYXlfY2hlY2tfaW5eMjMuMDUuMjAyNH50ZXh0XnNlYXJjaF9maWVsZF9fZGlzcGxheV9jaGVja19vdXReMjYuMDUuMjAyNH5zZWxlY3Rib3gtb25lXnNlYXJjaF9xdWFudGl0eV4yfnNlbGVjdGJveC1vbmVebG9jYXRpb25eU3BhaW5+c2VsZWN0Ym94LW9uZV5tYXhfY2FwYWNpdHleMn5zZWxlY3Rib3gtb25lXmFtZW5pdHlecGFya2luZ35jaGVja2JveF5zZWFyY2hfZmllbGRfX2V4dGVuZF9zZWFyY2hfZGF5c141fnN1Ym1pdF5eU2VhcmNofmhpZGRlbl5zZWFyY2hfZ2V0X19jaGVja19pbl95bWReMjAyNC0wNS0yM35oaWRkZW5ec2VhcmNoX2dldF9fY2hlY2tfb3V0X3ltZF4yMDI0LTA1LTI2fmhpZGRlbl5zZWFyY2hfZ2V0X190aW1lXn5oaWRkZW5ec2VhcmNoX2dldF9fcXVhbnRpdHleMn5oaWRkZW5ec2VhcmNoX2dldF9fZXh0ZW5kXjV+aGlkZGVuXnNlYXJjaF9nZXRfX3VzZXJzX2lkXn5oaWRkZW5ec2VhcmNoX2dldF9fY3VzdG9tX3BhcmFtc15+JztcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2F1dG9fZmlsbF9zZWFyY2hfZmllbGRzX19wYXJzZSggZGF0YV9zdHIgKXtcclxuXHJcblx0XHR2YXIgZmlsdGVyX29wdGlvbnNfYXJyID0gW107XHJcblxyXG5cdFx0dmFyIGRhdGFfYXJyID0gZGF0YV9zdHIuc3BsaXQoICd+JyApO1xyXG5cclxuXHRcdGZvciAoIHZhciBqID0gMDsgaiA8IGRhdGFfYXJyLmxlbmd0aDsgaisrICl7XHJcblxyXG5cdFx0XHR2YXIgbXlfZm9ybV9maWVsZCA9IGRhdGFfYXJyWyBqIF0uc3BsaXQoICdeJyApO1xyXG5cclxuXHRcdFx0dmFyIGZpbHRlcl90eXBlICA9ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIChteV9mb3JtX2ZpZWxkWyAwIF0pKSA/IG15X2Zvcm1fZmllbGRbIDAgXSA6ICcnO1xyXG5cdFx0XHR2YXIgZmlsdGVyX25hbWUgID0gKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgKG15X2Zvcm1fZmllbGRbIDEgXSkpID8gbXlfZm9ybV9maWVsZFsgMSBdIDogJyc7XHJcblx0XHRcdHZhciBmaWx0ZXJfdmFsdWUgPSAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAobXlfZm9ybV9maWVsZFsgMiBdKSkgPyBteV9mb3JtX2ZpZWxkWyAyIF0gOiAnJztcclxuXHJcblx0XHRcdGZpbHRlcl9vcHRpb25zX2Fyci5wdXNoKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0eXBlJyAgOiBmaWx0ZXJfdHlwZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCduYW1lJyAgOiBmaWx0ZXJfbmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd2YWx1ZScgOiBmaWx0ZXJfdmFsdWVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQgICApO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZpbHRlcl9vcHRpb25zX2FycjtcclxuXHR9XHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8qICA9PSAgQXV0byBVcGRhdGUgbnVtYmVyIG9mIG1vbnRocyBpbiBjYWxlbmRhcnMgT04gc2NyZWVuIHNpemUgY2hhbmdlZCAgPT1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKipcclxuICogQXV0byBVcGRhdGUgTnVtYmVyIG9mIE1vbnRocyBpbiBDYWxlbmRhciwgZS5nLjogIFx0XHRpZiAgICAoIFdJTkRPV19XSURUSCA8PSA3ODJweCApICAgPj4+IFx0TU9OVEhTX05VTUJFUiA9IDFcclxuICogICBFTFNFOiAgbnVtYmVyIG9mIG1vbnRocyBkZWZpbmVkIGluIHNob3J0Y29kZS5cclxuICogQHBhcmFtIHJlc291cmNlX2lkIGludFxyXG4gKlxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19jYWxlbmRhcl9fYXV0b191cGRhdGVfbW9udGhzX251bWJlcl9fb25fcmVzaXplKCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRpZiAoIHRydWUgPT09IF93cGJjLmdldF9vdGhlcl9wYXJhbSggJ2lzX2FsbG93X3NldmVyYWxfbW9udGhzX29uX21vYmlsZScgKSApIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHZhciBsb2NhbF9fbnVtYmVyX29mX21vbnRocyA9IHBhcnNlSW50KCBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2NhbGVuZGFyX251bWJlcl9vZl9tb250aHMnICkgKTtcclxuXHJcblx0aWYgKCBsb2NhbF9fbnVtYmVyX29mX21vbnRocyA+IDEgKXtcclxuXHJcblx0XHRpZiAoIGpRdWVyeSggd2luZG93ICkud2lkdGgoKSA8PSA3ODIgKXtcclxuXHRcdFx0d3BiY19jYWxlbmRhcl9fdXBkYXRlX21vbnRoc19udW1iZXIoIHJlc291cmNlX2lkLCAxICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3cGJjX2NhbGVuZGFyX191cGRhdGVfbW9udGhzX251bWJlciggcmVzb3VyY2VfaWQsIGxvY2FsX19udW1iZXJfb2ZfbW9udGhzICk7XHJcblx0XHR9XHJcblxyXG5cdH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEF1dG8gVXBkYXRlIE51bWJlciBvZiBNb250aHMgaW4gICBBTEwgICBDYWxlbmRhcnNcclxuICpcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsZW5kYXJzX19hdXRvX3VwZGF0ZV9tb250aHNfbnVtYmVyKCl7XHJcblxyXG5cdHZhciBhbGxfY2FsZW5kYXJzX2FyciA9IF93cGJjLmNhbGVuZGFyc19hbGxfX2dldCgpO1xyXG5cclxuXHQvLyBUaGlzIExPT1AgXCJmb3IgaW5cIiBpcyBHT09ELCBiZWNhdXNlIHdlIGNoZWNrICBoZXJlIGtleXMgICAgJ2NhbGVuZGFyXycgPT09IGNhbGVuZGFyX2lkLnNsaWNlKCAwLCA5IClcclxuXHRmb3IgKCB2YXIgY2FsZW5kYXJfaWQgaW4gYWxsX2NhbGVuZGFyc19hcnIgKXtcclxuXHRcdGlmICggJ2NhbGVuZGFyXycgPT09IGNhbGVuZGFyX2lkLnNsaWNlKCAwLCA5ICkgKXtcclxuXHRcdFx0dmFyIHJlc291cmNlX2lkID0gcGFyc2VJbnQoIGNhbGVuZGFyX2lkLnNsaWNlKCA5ICkgKTtcdFx0XHQvLyAgJ2NhbGVuZGFyXzMnIC0+IDNcclxuXHRcdFx0aWYgKCByZXNvdXJjZV9pZCA+IDAgKXtcclxuXHRcdFx0XHR3cGJjX2NhbGVuZGFyX19hdXRvX3VwZGF0ZV9tb250aHNfbnVtYmVyX19vbl9yZXNpemUoIHJlc291cmNlX2lkICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJZiBicm93c2VyIHdpbmRvdyBjaGFuZ2VkLCAgdGhlbiAgdXBkYXRlIG51bWJlciBvZiBtb250aHMuXHJcbiAqL1xyXG5qUXVlcnkoIHdpbmRvdyApLm9uKCAncmVzaXplJywgZnVuY3Rpb24gKCl7XHJcblx0d3BiY19jYWxlbmRhcnNfX2F1dG9fdXBkYXRlX21vbnRoc19udW1iZXIoKTtcclxufSApO1xyXG5cclxuLyoqXHJcbiAqIEF1dG8gdXBkYXRlIGNhbGVuZGFyIG51bWJlciBvZiBtb250aHMgb24gaW5pdGlhbCBwYWdlIGxvYWRcclxuICovXHJcbmpRdWVyeSggZG9jdW1lbnQgKS5yZWFkeSggZnVuY3Rpb24gKCl7XHJcblx0dmFyIGNsb3NlZF90aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpe1xyXG5cdFx0d3BiY19jYWxlbmRhcnNfX2F1dG9fdXBkYXRlX21vbnRoc19udW1iZXIoKTtcclxuXHR9LCAxMDAgKTtcclxufSk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLyogID09ICBDaGVjazogY2FsZW5kYXJfZGF0ZXNfc3RhcnQ6IFwiMjAyNi0wMS0wMVwiLCBjYWxlbmRhcl9kYXRlc19lbmQ6IFwiMjAyNi0xMi0zMVwiID09ICAvLyBGaXhJbjogMTAuMTMuMS40LlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHQvKipcclxuXHQgKiBHZXQgU3RhcnQgSlMgRGF0ZSBvZiBzdGFydGluZyBkYXRlcyBpbiBjYWxlbmRhciwgZnJvbSB0aGUgX3dwYmMgb2JqZWN0LlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGludGVnZXIgcmVzb3VyY2VfaWQgLSByZXNvdXJjZSBJRCwgZS5nLjogMS5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2NhbGVuZGFyX19nZXRfZGF0ZXNfc3RhcnQoIHJlc291cmNlX2lkICkge1xyXG5cdFx0cmV0dXJuIHdwYmNfY2FsZW5kYXJfX2dldF9kYXRlX3BhcmFtZXRlciggcmVzb3VyY2VfaWQsICdjYWxlbmRhcl9kYXRlc19zdGFydCcgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBFbmQgSlMgRGF0ZSBvZiBlbmRpbmcgZGF0ZXMgaW4gY2FsZW5kYXIsIGZyb20gdGhlIF93cGJjIG9iamVjdC5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBpbnRlZ2VyIHJlc291cmNlX2lkIC0gcmVzb3VyY2UgSUQsIGUuZy46IDEuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19jYWxlbmRhcl9fZ2V0X2RhdGVzX2VuZChyZXNvdXJjZV9pZCkge1xyXG5cdFx0cmV0dXJuIHdwYmNfY2FsZW5kYXJfX2dldF9kYXRlX3BhcmFtZXRlciggcmVzb3VyY2VfaWQsICdjYWxlbmRhcl9kYXRlc19lbmQnICk7XHJcblx0fVxyXG5cclxuLyoqXHJcbiAqIEdldCB2YWxpZGF0ZXMgZGF0ZSBwYXJhbWV0ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSByZXNvdXJjZV9pZCAgIC0gMVxyXG4gKiBAcGFyYW0gcGFyYW1ldGVyX3N0ciAtICdjYWxlbmRhcl9kYXRlc19zdGFydCcgfCAnY2FsZW5kYXJfZGF0ZXNfZW5kJyB8IC4uLlxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19jYWxlbmRhcl9fZ2V0X2RhdGVfcGFyYW1ldGVyKHJlc291cmNlX2lkLCBwYXJhbWV0ZXJfc3RyKSB7XHJcblxyXG5cdHZhciBkYXRlX2V4cGVjdGVkX3ltZCA9IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCBwYXJhbWV0ZXJfc3RyICk7XHJcblxyXG5cdGlmICggISBkYXRlX2V4cGVjdGVkX3ltZCApIHtcclxuXHRcdHJldHVybiBmYWxzZTsgICAgICAgICAgICAgLy8gJycgfCAwIHwgbnVsbCB8IHVuZGVmaW5lZCAgLT4gZmFsc2UuXHJcblx0fVxyXG5cclxuXHRpZiAoIC0xICE9PSBkYXRlX2V4cGVjdGVkX3ltZC5pbmRleE9mKCAnLScgKSApIHtcclxuXHJcblx0XHR2YXIgZGF0ZV9leHBlY3RlZF95bWRfYXJyID0gZGF0ZV9leHBlY3RlZF95bWQuc3BsaXQoICctJyApO1x0Ly8gJzIwMjUtMDctMjYnIC0+IFsnMjAyNScsICcwNycsICcyNiddXHJcblxyXG5cdFx0aWYgKCBkYXRlX2V4cGVjdGVkX3ltZF9hcnIubGVuZ3RoID4gMCApIHtcclxuXHRcdFx0dmFyIHllYXIgID0gKGRhdGVfZXhwZWN0ZWRfeW1kX2Fyci5sZW5ndGggPiAwKSA/IHBhcnNlSW50KCBkYXRlX2V4cGVjdGVkX3ltZF9hcnJbMF0gKSA6IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcdC8vIFllYXIuXHJcblx0XHRcdHZhciBtb250aCA9IChkYXRlX2V4cGVjdGVkX3ltZF9hcnIubGVuZ3RoID4gMSkgPyAocGFyc2VJbnQoIGRhdGVfZXhwZWN0ZWRfeW1kX2FyclsxXSApIC0gMSkgOiAwOyAgLy8gKG1vbnRoIC0gMSkgb3IgMCAtIEphbi5cclxuXHRcdFx0dmFyIGRheSAgID0gKGRhdGVfZXhwZWN0ZWRfeW1kX2Fyci5sZW5ndGggPiAyKSA/IHBhcnNlSW50KCBkYXRlX2V4cGVjdGVkX3ltZF9hcnJbMl0gKSA6IDE7ICAvLyBkYXRlIG9yIE90aGVyd2lzZSAxc3Qgb2YgbW9udGhcclxuXHJcblx0XHRcdHZhciBkYXRlX2pzID0gbmV3IERhdGUoIHllYXIsIG1vbnRoLCBkYXksIDAsIDAsIDAsIDAgKTtcclxuXHJcblx0XHRcdHJldHVybiBkYXRlX2pzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmV0dXJuIGZhbHNlOyAgLy8gRmFsbGJhY2ssICBpZiB3ZSBub3QgcGFyc2VkIHRoaXMgcGFyYW1ldGVyICAnY2FsZW5kYXJfZGF0ZXNfc3RhcnQnID0gJzIwMjUtMDctMjYnLCAgZm9yIGV4YW1wbGUgYmVjYXVzZSBvZiAnY2FsZW5kYXJfZGF0ZXNfc3RhcnQnID0gJ3Nmc2RmJy5cclxufSIsIi8qKlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKlx0aW5jbHVkZXMvX19qcy9jYWwvZGF5c19zZWxlY3RfY3VzdG9tLmpzXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqL1xyXG5cclxuLy8gRml4SW46IDkuOC45LjIuXHJcblxyXG4vKipcclxuICogUmUtSW5pdCBDYWxlbmRhciBhbmQgUmUtUmVuZGVyIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX19yZV9pbml0KCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHQvLyBSZW1vdmUgQ0xBU1MgIGZvciBhYmlsaXR5IHRvIHJlLXJlbmRlciBhbmQgcmVpbml0IGNhbGVuZGFyLlxyXG5cdGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkucmVtb3ZlQ2xhc3MoICdoYXNEYXRlcGljaycgKTtcclxuXHR3cGJjX2NhbGVuZGFyX3Nob3coIHJlc291cmNlX2lkICk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmUtSW5pdCBwcmV2aW91c2x5ICBzYXZlZCBkYXlzIHNlbGVjdGlvbiAgdmFyaWFibGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX2RheXNfc2VsZWN0X19yZV9pbml0KCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ3NhdmVkX3ZhcmlhYmxlX19fZGF5c19zZWxlY3RfaW5pdGlhbCdcclxuXHRcdCwge1xyXG5cdFx0XHQnZHluYW1pY19fZGF5c19taW4nICAgICAgICA6IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZHluYW1pY19fZGF5c19taW4nICksXHJcblx0XHRcdCdkeW5hbWljX19kYXlzX21heCcgICAgICAgIDogX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkeW5hbWljX19kYXlzX21heCcgKSxcclxuXHRcdFx0J2R5bmFtaWNfX2RheXNfc3BlY2lmaWMnICAgOiBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2R5bmFtaWNfX2RheXNfc3BlY2lmaWMnICksXHJcblx0XHRcdCdkeW5hbWljX193ZWVrX2RheXNfX3N0YXJ0JzogX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkeW5hbWljX193ZWVrX2RheXNfX3N0YXJ0JyApLFxyXG5cdFx0XHQnZml4ZWRfX2RheXNfbnVtJyAgICAgICAgICA6IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZml4ZWRfX2RheXNfbnVtJyApLFxyXG5cdFx0XHQnZml4ZWRfX3dlZWtfZGF5c19fc3RhcnQnICA6IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZml4ZWRfX3dlZWtfZGF5c19fc3RhcnQnIClcclxuXHRcdH1cclxuXHQpO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBTZXQgU2luZ2xlIERheSBzZWxlY3Rpb24gLSBhZnRlciBwYWdlIGxvYWRcclxuICpcclxuICogQHBhcmFtIHJlc291cmNlX2lkXHRcdElEIG9mIGJvb2tpbmcgcmVzb3VyY2VcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX3JlYWR5X2RheXNfc2VsZWN0X19zaW5nbGUoIHJlc291cmNlX2lkICl7XHJcblxyXG5cdC8vIFJlLWRlZmluZSBzZWxlY3Rpb24sIG9ubHkgYWZ0ZXIgcGFnZSBsb2FkZWQgd2l0aCBhbGwgaW5pdCB2YXJzXHJcblx0alF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHRcdC8vIFdhaXQgMSBzZWNvbmQsIGp1c3QgdG8gIGJlIHN1cmUsIHRoYXQgYWxsIGluaXQgdmFycyBkZWZpbmVkXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHR3cGJjX2NhbF9kYXlzX3NlbGVjdF9fc2luZ2xlKCByZXNvdXJjZV9pZCApO1xyXG5cclxuXHRcdH0sIDEwMDApO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IFNpbmdsZSBEYXkgc2VsZWN0aW9uXHJcbiAqIENhbiBiZSBydW4gYXQgYW55ICB0aW1lLCAgd2hlbiAgY2FsZW5kYXIgZGVmaW5lZCAtIHVzZWZ1bCBmb3IgY29uc29sZSBydW4uXHJcbiAqXHJcbiAqIEBwYXJhbSByZXNvdXJjZV9pZFx0XHRJRCBvZiBib29raW5nIHJlc291cmNlXHJcbiAqL1xyXG5mdW5jdGlvbiB3cGJjX2NhbF9kYXlzX3NlbGVjdF9fc2luZ2xlKCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtZXRlcnMoIHJlc291cmNlX2lkLCB7J2RheXNfc2VsZWN0X21vZGUnOiAnc2luZ2xlJ30gKTtcclxuXHJcblx0d3BiY19jYWxfZGF5c19zZWxlY3RfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcblx0d3BiY19jYWxfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLyoqXHJcbiAqIFNldCBNdWx0aXBsZSBEYXlzIHNlbGVjdGlvbiAgLSBhZnRlciBwYWdlIGxvYWRcclxuICpcclxuICogQHBhcmFtIHJlc291cmNlX2lkXHRcdElEIG9mIGJvb2tpbmcgcmVzb3VyY2VcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX3JlYWR5X2RheXNfc2VsZWN0X19tdWx0aXBsZSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0Ly8gUmUtZGVmaW5lIHNlbGVjdGlvbiwgb25seSBhZnRlciBwYWdlIGxvYWRlZCB3aXRoIGFsbCBpbml0IHZhcnNcclxuXHRqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0Ly8gV2FpdCAxIHNlY29uZCwganVzdCB0byAgYmUgc3VyZSwgdGhhdCBhbGwgaW5pdCB2YXJzIGRlZmluZWRcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdHdwYmNfY2FsX2RheXNfc2VsZWN0X19tdWx0aXBsZSggcmVzb3VyY2VfaWQgKTtcclxuXHJcblx0XHR9LCAxMDAwKTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXQgTXVsdGlwbGUgRGF5cyBzZWxlY3Rpb25cclxuICogQ2FuIGJlIHJ1biBhdCBhbnkgIHRpbWUsICB3aGVuICBjYWxlbmRhciBkZWZpbmVkIC0gdXNlZnVsIGZvciBjb25zb2xlIHJ1bi5cclxuICpcclxuICogQHBhcmFtIHJlc291cmNlX2lkXHRcdElEIG9mIGJvb2tpbmcgcmVzb3VyY2VcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX2RheXNfc2VsZWN0X19tdWx0aXBsZSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0X3dwYmMuY2FsZW5kYXJfX3NldF9wYXJhbWV0ZXJzKCByZXNvdXJjZV9pZCwgeydkYXlzX3NlbGVjdF9tb2RlJzogJ211bHRpcGxlJ30gKTtcclxuXHJcblx0d3BiY19jYWxfZGF5c19zZWxlY3RfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcblx0d3BiY19jYWxfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBTZXQgRml4ZWQgRGF5cyBzZWxlY3Rpb24gd2l0aCAgMSBtb3VzZSBjbGljayAgLSBhZnRlciBwYWdlIGxvYWRcclxuICpcclxuICogQGludGVnZXIgcmVzb3VyY2VfaWRcdFx0XHQtIDFcdFx0XHRcdCAgIC0tIElEIG9mIGJvb2tpbmcgcmVzb3VyY2UgKGNhbGVuZGFyKSAtXHJcbiAqIEBpbnRlZ2VyIGRheXNfbnVtYmVyXHRcdFx0LSAzXHRcdFx0XHQgICAtLSBudW1iZXIgb2YgZGF5cyB0byAgc2VsZWN0XHQtXHJcbiAqIEBhcnJheSB3ZWVrX2RheXNfX3N0YXJ0XHQtIFstMV0gfCBbIDEsIDVdICAgLS0gIHsgLTEgLSBBbnkgfCAwIC0gU3UsICAxIC0gTW8sICAyIC0gVHUsIDMgLSBXZSwgNCAtIFRoLCA1IC0gRnIsIDYgLSBTYXQgfVxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19jYWxfcmVhZHlfZGF5c19zZWxlY3RfX2ZpeGVkKCByZXNvdXJjZV9pZCwgZGF5c19udW1iZXIsIHdlZWtfZGF5c19fc3RhcnQgPSBbLTFdICl7XHJcblxyXG5cdC8vIFJlLWRlZmluZSBzZWxlY3Rpb24sIG9ubHkgYWZ0ZXIgcGFnZSBsb2FkZWQgd2l0aCBhbGwgaW5pdCB2YXJzXHJcblx0alF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHRcdC8vIFdhaXQgMSBzZWNvbmQsIGp1c3QgdG8gIGJlIHN1cmUsIHRoYXQgYWxsIGluaXQgdmFycyBkZWZpbmVkXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHR3cGJjX2NhbF9kYXlzX3NlbGVjdF9fZml4ZWQoIHJlc291cmNlX2lkLCBkYXlzX251bWJlciwgd2Vla19kYXlzX19zdGFydCApO1xyXG5cclxuXHRcdH0sIDEwMDApO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFNldCBGaXhlZCBEYXlzIHNlbGVjdGlvbiB3aXRoICAxIG1vdXNlIGNsaWNrXHJcbiAqIENhbiBiZSBydW4gYXQgYW55ICB0aW1lLCAgd2hlbiAgY2FsZW5kYXIgZGVmaW5lZCAtIHVzZWZ1bCBmb3IgY29uc29sZSBydW4uXHJcbiAqXHJcbiAqIEBpbnRlZ2VyIHJlc291cmNlX2lkXHRcdFx0LSAxXHRcdFx0XHQgICAtLSBJRCBvZiBib29raW5nIHJlc291cmNlIChjYWxlbmRhcikgLVxyXG4gKiBAaW50ZWdlciBkYXlzX251bWJlclx0XHRcdC0gM1x0XHRcdFx0ICAgLS0gbnVtYmVyIG9mIGRheXMgdG8gIHNlbGVjdFx0LVxyXG4gKiBAYXJyYXkgd2Vla19kYXlzX19zdGFydFx0LSBbLTFdIHwgWyAxLCA1XSAgIC0tICB7IC0xIC0gQW55IHwgMCAtIFN1LCAgMSAtIE1vLCAgMiAtIFR1LCAzIC0gV2UsIDQgLSBUaCwgNSAtIEZyLCA2IC0gU2F0IH1cclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX2RheXNfc2VsZWN0X19maXhlZCggcmVzb3VyY2VfaWQsIGRheXNfbnVtYmVyLCB3ZWVrX2RheXNfX3N0YXJ0ID0gWy0xXSApe1xyXG5cclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtZXRlcnMoIHJlc291cmNlX2lkLCB7J2RheXNfc2VsZWN0X21vZGUnOiAnZml4ZWQnfSApO1xyXG5cclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtZXRlcnMoIHJlc291cmNlX2lkLCB7J2ZpeGVkX19kYXlzX251bSc6IHBhcnNlSW50KCBkYXlzX251bWJlciApfSApO1x0XHRcdC8vIE51bWJlciBvZiBkYXlzIHNlbGVjdGlvbiB3aXRoIDEgbW91c2UgY2xpY2tcclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtZXRlcnMoIHJlc291cmNlX2lkLCB7J2ZpeGVkX193ZWVrX2RheXNfX3N0YXJ0Jzogd2Vla19kYXlzX19zdGFydH0gKTsgXHQvLyB7IC0xIC0gQW55IHwgMCAtIFN1LCAgMSAtIE1vLCAgMiAtIFR1LCAzIC0gV2UsIDQgLSBUaCwgNSAtIEZyLCA2IC0gU2F0IH1cclxuXHJcblx0d3BiY19jYWxfZGF5c19zZWxlY3RfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcblx0d3BiY19jYWxfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLyoqXHJcbiAqIFNldCBSYW5nZSBEYXlzIHNlbGVjdGlvbiAgd2l0aCAgMiBtb3VzZSBjbGlja3MgIC0gYWZ0ZXIgcGFnZSBsb2FkXHJcbiAqXHJcbiAqIEBpbnRlZ2VyIHJlc291cmNlX2lkXHRcdFx0LSAxXHRcdFx0XHQgICBcdFx0LS0gSUQgb2YgYm9va2luZyByZXNvdXJjZSAoY2FsZW5kYXIpXHJcbiAqIEBpbnRlZ2VyIGRheXNfbWluXHRcdFx0LSA3XHRcdFx0XHQgICBcdFx0LS0gTWluIG51bWJlciBvZiBkYXlzIHRvIHNlbGVjdFxyXG4gKiBAaW50ZWdlciBkYXlzX21heFx0XHRcdC0gMzBcdFx0XHQgICBcdFx0LS0gTWF4IG51bWJlciBvZiBkYXlzIHRvIHNlbGVjdFxyXG4gKiBAYXJyYXkgZGF5c19zcGVjaWZpY1x0XHRcdC0gW10gfCBbNywxNCwyMSwyOF1cdFx0LS0gUmVzdHJpY3Rpb24gZm9yIFNwZWNpZmljIG51bWJlciBvZiBkYXlzIHNlbGVjdGlvblxyXG4gKiBAYXJyYXkgd2Vla19kYXlzX19zdGFydFx0XHQtIFstMV0gfCBbIDEsIDVdICAgXHRcdC0tICB7IC0xIC0gQW55IHwgMCAtIFN1LCAgMSAtIE1vLCAgMiAtIFR1LCAzIC0gV2UsIDQgLSBUaCwgNSAtIEZyLCA2IC0gU2F0IH1cclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX3JlYWR5X2RheXNfc2VsZWN0X19yYW5nZSggcmVzb3VyY2VfaWQsIGRheXNfbWluLCBkYXlzX21heCwgZGF5c19zcGVjaWZpYyA9IFtdLCB3ZWVrX2RheXNfX3N0YXJ0ID0gWy0xXSApe1xyXG5cclxuXHQvLyBSZS1kZWZpbmUgc2VsZWN0aW9uLCBvbmx5IGFmdGVyIHBhZ2UgbG9hZGVkIHdpdGggYWxsIGluaXQgdmFyc1xyXG5cdGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0XHQvLyBXYWl0IDEgc2Vjb25kLCBqdXN0IHRvICBiZSBzdXJlLCB0aGF0IGFsbCBpbml0IHZhcnMgZGVmaW5lZFxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0d3BiY19jYWxfZGF5c19zZWxlY3RfX3JhbmdlKCByZXNvdXJjZV9pZCwgZGF5c19taW4sIGRheXNfbWF4LCBkYXlzX3NwZWNpZmljLCB3ZWVrX2RheXNfX3N0YXJ0ICk7XHJcblx0XHR9LCAxMDAwKTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldCBSYW5nZSBEYXlzIHNlbGVjdGlvbiAgd2l0aCAgMiBtb3VzZSBjbGlja3NcclxuICogQ2FuIGJlIHJ1biBhdCBhbnkgIHRpbWUsICB3aGVuICBjYWxlbmRhciBkZWZpbmVkIC0gdXNlZnVsIGZvciBjb25zb2xlIHJ1bi5cclxuICpcclxuICogQGludGVnZXIgcmVzb3VyY2VfaWRcdFx0XHQtIDFcdFx0XHRcdCAgIFx0XHQtLSBJRCBvZiBib29raW5nIHJlc291cmNlIChjYWxlbmRhcilcclxuICogQGludGVnZXIgZGF5c19taW5cdFx0XHQtIDdcdFx0XHRcdCAgIFx0XHQtLSBNaW4gbnVtYmVyIG9mIGRheXMgdG8gc2VsZWN0XHJcbiAqIEBpbnRlZ2VyIGRheXNfbWF4XHRcdFx0LSAzMFx0XHRcdCAgIFx0XHQtLSBNYXggbnVtYmVyIG9mIGRheXMgdG8gc2VsZWN0XHJcbiAqIEBhcnJheSBkYXlzX3NwZWNpZmljXHRcdFx0LSBbXSB8IFs3LDE0LDIxLDI4XVx0XHQtLSBSZXN0cmljdGlvbiBmb3IgU3BlY2lmaWMgbnVtYmVyIG9mIGRheXMgc2VsZWN0aW9uXHJcbiAqIEBhcnJheSB3ZWVrX2RheXNfX3N0YXJ0XHRcdC0gWy0xXSB8IFsgMSwgNV0gICBcdFx0LS0gIHsgLTEgLSBBbnkgfCAwIC0gU3UsICAxIC0gTW8sICAyIC0gVHUsIDMgLSBXZSwgNCAtIFRoLCA1IC0gRnIsIDYgLSBTYXQgfVxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19jYWxfZGF5c19zZWxlY3RfX3JhbmdlKCByZXNvdXJjZV9pZCwgZGF5c19taW4sIGRheXNfbWF4LCBkYXlzX3NwZWNpZmljID0gW10sIHdlZWtfZGF5c19fc3RhcnQgPSBbLTFdICl7XHJcblxyXG5cdF93cGJjLmNhbGVuZGFyX19zZXRfcGFyYW1ldGVycyggIHJlc291cmNlX2lkLCB7J2RheXNfc2VsZWN0X21vZGUnOiAnZHluYW1pYyd9ICApO1xyXG5cdF93cGJjLmNhbGVuZGFyX19zZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZHluYW1pY19fZGF5c19taW4nICAgICAgICAgLCBwYXJzZUludCggZGF5c19taW4gKSAgKTsgICAgICAgICAgIFx0XHQvLyBNaW4uIE51bWJlciBvZiBkYXlzIHNlbGVjdGlvbiB3aXRoIDIgbW91c2UgY2xpY2tzXHJcblx0X3dwYmMuY2FsZW5kYXJfX3NldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkeW5hbWljX19kYXlzX21heCcgICAgICAgICAsIHBhcnNlSW50KCBkYXlzX21heCApICApOyAgICAgICAgICBcdFx0Ly8gTWF4LiBOdW1iZXIgb2YgZGF5cyBzZWxlY3Rpb24gd2l0aCAyIG1vdXNlIGNsaWNrc1xyXG5cdF93cGJjLmNhbGVuZGFyX19zZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZHluYW1pY19fZGF5c19zcGVjaWZpYycgICAgLCBkYXlzX3NwZWNpZmljICApO1x0ICAgICAgXHRcdFx0XHQvLyBFeGFtcGxlIFs1LDddXHJcblx0X3dwYmMuY2FsZW5kYXJfX3NldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkeW5hbWljX193ZWVrX2RheXNfX3N0YXJ0JyAsIHdlZWtfZGF5c19fc3RhcnQgICk7ICBcdFx0XHRcdFx0Ly8geyAtMSAtIEFueSB8IDAgLSBTdSwgIDEgLSBNbywgIDIgLSBUdSwgMyAtIFdlLCA0IC0gVGgsIDUgLSBGciwgNiAtIFNhdCB9XHJcblxyXG5cdHdwYmNfY2FsX2RheXNfc2VsZWN0X19yZV9pbml0KCByZXNvdXJjZV9pZCApO1xyXG5cdHdwYmNfY2FsX19yZV9pbml0KCByZXNvdXJjZV9pZCApO1xyXG59XHJcbiIsIi8qKlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKlx0aW5jbHVkZXMvX19qcy9jYWxfYWp4X2xvYWQvd3BiY19jYWxfYWp4LmpzXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqL1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBBIGogYSB4ICAgIEwgbyBhIGQgICAgQyBhIGwgZSBuIGQgYSByICAgIEQgYSB0IGFcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiB3cGJjX2NhbGVuZGFyX19sb2FkX2RhdGFfX2FqeCggcGFyYW1zICl7XHJcblxyXG5cdC8vIEZpeEluOiA5LjguNi4yLlxyXG5cdHdwYmNfY2FsZW5kYXJfX2xvYWRpbmdfX3N0YXJ0KCBwYXJhbXNbJ3Jlc291cmNlX2lkJ10gKTtcclxuXHJcblx0Ly8gVHJpZ2dlciBldmVudCBmb3IgY2FsZW5kYXIgYmVmb3JlIGxvYWRpbmcgQm9va2luZyBkYXRhLCAgYnV0IGFmdGVyIHNob3dpbmcgQ2FsZW5kYXIuXHJcblx0aWYgKCBqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyBwYXJhbXNbJ3Jlc291cmNlX2lkJ10gKS5sZW5ndGggPiAwICl7XHJcblx0XHR2YXIgdGFyZ2V0X2VsbSA9IGpRdWVyeSggJ2JvZHknICkudHJpZ2dlciggXCJ3cGJjX2NhbGVuZGFyX2FqeF9fYmVmb3JlX2xvYWRlZF9kYXRhXCIsIFtwYXJhbXNbJ3Jlc291cmNlX2lkJ11dICk7XHJcblx0XHQgLy9qUXVlcnkoICdib2R5JyApLm9uKCAnd3BiY19jYWxlbmRhcl9hanhfX2JlZm9yZV9sb2FkZWRfZGF0YScsIGZ1bmN0aW9uKCBldmVudCwgcmVzb3VyY2VfaWQgKSB7IC4uLiB9ICk7XHJcblx0fVxyXG5cclxuXHRpZiAoIHdwYmNfYmFsYW5jZXJfX2lzX3dhaXQoIHBhcmFtcyAsICd3cGJjX2NhbGVuZGFyX19sb2FkX2RhdGFfX2FqeCcgKSApe1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0Ly8gRml4SW46IDkuOC42LjIuXHJcblx0d3BiY19jYWxlbmRhcl9fYmx1cl9fc3RvcCggcGFyYW1zWydyZXNvdXJjZV9pZCddICk7XHJcblxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gPT0gR2V0IHN0YXJ0IC8gZW5kIGRhdGVzIGZyb20gIHRoZSBCb29raW5nIENhbGVuZGFyIHNob3J0Y29kZS4gPT1cclxuXHQvLyBFeGFtcGxlOiBbYm9va2luZyBjYWxlbmRhcl9kYXRlc19zdGFydD0nMjAyNi0wMS0wMScgY2FsZW5kYXJfZGF0ZXNfZW5kPScyMDI2LTEyLTMxJyAgcmVzb3VyY2VfaWQ9MV0gICAgICAgICAgICAgIC8vIEZpeEluOiAxMC4xMy4xLjQuXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRpZiAoIGZhbHNlICE9PSB3cGJjX2NhbGVuZGFyX19nZXRfZGF0ZXNfc3RhcnQoIHBhcmFtc1sncmVzb3VyY2VfaWQnXSApICkge1xyXG5cdFx0aWYgKCAhIHBhcmFtc1snZGF0ZXNfdG9fY2hlY2snXSApIHsgcGFyYW1zWydkYXRlc190b19jaGVjayddID0gW107IH1cclxuXHRcdHZhciBkYXRlc19zdGFydCA9IHdwYmNfY2FsZW5kYXJfX2dldF9kYXRlc19zdGFydCggcGFyYW1zWydyZXNvdXJjZV9pZCddICk7ICAvLyBFLmcuIC0gbG9jYWxfX21pbl9kYXRlID0gbmV3IERhdGUoIDIwMjUsIDAsIDEgKTtcclxuXHRcdGlmICggZmFsc2UgIT09IGRhdGVzX3N0YXJ0ICl7XHJcblx0XHRcdHBhcmFtc1snZGF0ZXNfdG9fY2hlY2snXVswXSA9IHdwYmNfX2dldF9fc3FsX2NsYXNzX2RhdGUoIGRhdGVzX3N0YXJ0ICk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlmICggZmFsc2UgIT09IHdwYmNfY2FsZW5kYXJfX2dldF9kYXRlc19lbmQoIHBhcmFtc1sncmVzb3VyY2VfaWQnXSApICkge1xyXG5cdFx0aWYgKCAhcGFyYW1zWydkYXRlc190b19jaGVjayddICkgeyBwYXJhbXNbJ2RhdGVzX3RvX2NoZWNrJ10gPSBbXTsgfVxyXG5cdFx0dmFyIGRhdGVzX2VuZCA9IHdwYmNfY2FsZW5kYXJfX2dldF9kYXRlc19lbmQoIHBhcmFtc1sncmVzb3VyY2VfaWQnXSApOyAgLy8gRS5nLiAtIGxvY2FsX19taW5fZGF0ZSA9IG5ldyBEYXRlKCAyMDI1LCAwLCAxICk7XHJcblx0XHRpZiAoIGZhbHNlICE9PSBkYXRlc19lbmQgKSB7XHJcblx0XHRcdHBhcmFtc1snZGF0ZXNfdG9fY2hlY2snXVsxXSA9IHdwYmNfX2dldF9fc3FsX2NsYXNzX2RhdGUoIGRhdGVzX2VuZCApO1xyXG5cdFx0XHRpZiAoICFwYXJhbXNbJ2RhdGVzX3RvX2NoZWNrJ11bMF0gKSB7XHJcblx0XHRcdFx0cGFyYW1zWydkYXRlc190b19jaGVjayddWzBdID0gd3BiY19fZ2V0X19zcWxfY2xhc3NfZGF0ZSggbmV3IERhdGUoKSApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4vLyBjb25zb2xlLmdyb3VwRW5kKCk7IGNvbnNvbGUudGltZSgncmVzb3VyY2VfaWRfJyArIHBhcmFtc1sncmVzb3VyY2VfaWQnXSk7XHJcbmNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoICdXUEJDX0FKWF9DQUxFTkRBUl9MT0FEJyApOyBjb25zb2xlLmxvZyggJyA9PSBCZWZvcmUgQWpheCBTZW5kIC0gY2FsZW5kYXJzX2FsbF9fZ2V0KCkgPT0gJyAsIF93cGJjLmNhbGVuZGFyc19hbGxfX2dldCgpICk7XHJcblx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgKHdwYmNfaG9va19faW5pdF90aW1lc2VsZWN0b3IpICkge1xyXG5cdFx0d3BiY19ob29rX19pbml0X3RpbWVzZWxlY3RvcigpO1xyXG5cdH1cclxuXHJcblx0Ly8gU3RhcnQgQWpheFxyXG5cdGpRdWVyeS5wb3N0KCB3cGJjX3VybF9hamF4LFxyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGFjdGlvbiAgICAgICAgICA6ICdXUEJDX0FKWF9DQUxFTkRBUl9MT0FEJyxcclxuXHRcdFx0XHRcdHdwYmNfYWp4X3VzZXJfaWQ6IF93cGJjLmdldF9zZWN1cmVfcGFyYW0oICd1c2VyX2lkJyApLFxyXG5cdFx0XHRcdFx0bm9uY2UgICAgICAgICAgIDogX3dwYmMuZ2V0X3NlY3VyZV9wYXJhbSggJ25vbmNlJyApLFxyXG5cdFx0XHRcdFx0d3BiY19hanhfbG9jYWxlIDogX3dwYmMuZ2V0X3NlY3VyZV9wYXJhbSggJ2xvY2FsZScgKSxcclxuXHJcblx0XHRcdFx0XHRjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcyA6IHBhcmFtcyBcdFx0XHRcdFx0XHQvLyBVc3VhbGx5IGxpa2U6IHsgJ3Jlc291cmNlX2lkJzogMSwgJ21heF9kYXlzX2NvdW50JzogMzY1IH1cclxuXHRcdFx0XHR9LFxyXG5cclxuXHRcdFx0XHQvKipcclxuXHRcdFx0XHQgKiBTIHUgYyBjIGUgcyBzXHJcblx0XHRcdFx0ICpcclxuXHRcdFx0XHQgKiBAcGFyYW0gcmVzcG9uc2VfZGF0YVx0XHQtXHRpdHMgb2JqZWN0IHJldHVybmVkIGZyb20gIEFqYXggLSBjbGFzcy1saXZlLXNlYXJjaC5waHBcclxuXHRcdFx0XHQgKiBAcGFyYW0gdGV4dFN0YXR1c1x0XHQtXHQnc3VjY2VzcydcclxuXHRcdFx0XHQgKiBAcGFyYW0ganFYSFJcdFx0XHRcdC1cdE9iamVjdFxyXG5cdFx0XHRcdCAqL1xyXG5cdFx0XHRcdGZ1bmN0aW9uICggcmVzcG9uc2VfZGF0YSwgdGV4dFN0YXR1cywganFYSFIgKSB7XHJcbi8vIGNvbnNvbGUudGltZUVuZCgncmVzb3VyY2VfaWRfJyArIHJlc3BvbnNlX2RhdGFbJ3Jlc291cmNlX2lkJ10pO1xyXG5jb25zb2xlLmxvZyggJyA9PSBSZXNwb25zZSBXUEJDX0FKWF9DQUxFTkRBUl9MT0FEID09ICcsIHJlc3BvbnNlX2RhdGEgKTsgY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuXHRcdFx0XHRcdC8vIEZpeEluOiA5LjguNi4yLlxyXG5cdFx0XHRcdFx0dmFyIGFqeF9wb3N0X2RhdGFfX3Jlc291cmNlX2lkID0gd3BiY19nZXRfcmVzb3VyY2VfaWRfX2Zyb21fYWp4X3Bvc3RfZGF0YV91cmwoIHRoaXMuZGF0YSApO1xyXG5cdFx0XHRcdFx0d3BiY19iYWxhbmNlcl9fY29tcGxldGVkKCBhanhfcG9zdF9kYXRhX19yZXNvdXJjZV9pZCAsICd3cGJjX2NhbGVuZGFyX19sb2FkX2RhdGFfX2FqeCcgKTtcclxuXHJcblx0XHRcdFx0XHQvLyBQcm9iYWJseSBFcnJvclxyXG5cdFx0XHRcdFx0aWYgKCAodHlwZW9mIHJlc3BvbnNlX2RhdGEgIT09ICdvYmplY3QnKSB8fCAocmVzcG9uc2VfZGF0YSA9PT0gbnVsbCkgKXtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBqcV9ub2RlICA9IHdwYmNfZ2V0X2NhbGVuZGFyX19qcV9ub2RlX19mb3JfbWVzc2FnZXMoIHRoaXMuZGF0YSApO1xyXG5cdFx0XHRcdFx0XHR2YXIgbWVzc2FnZV90eXBlID0gJ2luZm8nO1xyXG5cclxuXHRcdFx0XHRcdFx0aWYgKCAnJyA9PT0gcmVzcG9uc2VfZGF0YSApe1xyXG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlX2RhdGEgPSAnVGhlIHNlcnZlciByZXNwb25kcyB3aXRoIGFuIGVtcHR5IHN0cmluZy4gVGhlIHNlcnZlciBwcm9iYWJseSBzdG9wcGVkIHdvcmtpbmcgdW5leHBlY3RlZGx5LiA8YnI+UGxlYXNlIGNoZWNrIHlvdXIgPHN0cm9uZz5lcnJvci5sb2c8L3N0cm9uZz4gaW4geW91ciBzZXJ2ZXIgY29uZmlndXJhdGlvbiBmb3IgcmVsYXRpdmUgZXJyb3JzLic7XHJcblx0XHRcdFx0XHRcdFx0bWVzc2FnZV90eXBlID0gJ3dhcm5pbmcnO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTaG93IE1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0d3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZSggcmVzcG9uc2VfZGF0YSAsIHsgJ3R5cGUnICAgICA6IG1lc3NhZ2VfdHlwZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Nob3dfaGVyZSc6IHsnanFfbm9kZSc6IGpxX25vZGUsICd3aGVyZSc6ICdhZnRlcid9LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaXNfYXBwZW5kJzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3N0eWxlJyAgICA6ICd0ZXh0LWFsaWduOmxlZnQ7JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICA6IDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIFNob3cgQ2FsZW5kYXJcclxuXHRcdFx0XHRcdHdwYmNfY2FsZW5kYXJfX2xvYWRpbmdfX3N0b3AoIHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXSApO1xyXG5cclxuXHRcdFx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0XHRcdC8vIEJvb2tpbmdzIC0gRGF0ZXNcclxuXHRcdFx0XHRcdF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19zZXRfZGF0ZXMoICByZXNwb25zZV9kYXRhWyAncmVzb3VyY2VfaWQnIF0sIHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsnZGF0ZXMnXSAgKTtcclxuXHJcblx0XHRcdFx0XHQvLyBCb29raW5ncyAtIENoaWxkIG9yIG9ubHkgc2luZ2xlIGJvb2tpbmcgcmVzb3VyY2UgaW4gZGF0ZXNcclxuXHRcdFx0XHRcdF93cGJjLmJvb2tpbmdfX3NldF9wYXJhbV92YWx1ZSggcmVzcG9uc2VfZGF0YVsgJ3Jlc291cmNlX2lkJyBdLCAncmVzb3VyY2VzX2lkX2Fycl9faW5fZGF0ZXMnLCByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdyZXNvdXJjZXNfaWRfYXJyX19pbl9kYXRlcycgXSApO1xyXG5cclxuXHRcdFx0XHRcdC8vIEFnZ3JlZ2F0ZSBib29raW5nIHJlc291cmNlcywgIGlmIGFueSA/XHJcblx0XHRcdFx0XHRfd3BiYy5ib29raW5nX19zZXRfcGFyYW1fdmFsdWUoIHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXSwgJ2FnZ3JlZ2F0ZV9yZXNvdXJjZV9pZF9hcnInLCByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhZ2dyZWdhdGVfcmVzb3VyY2VfaWRfYXJyJyBdICk7XHJcblx0XHRcdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0XHRcdFx0Ly8gVXBkYXRlIGNhbGVuZGFyXHJcblx0XHRcdFx0XHR3cGJjX2NhbGVuZGFyX191cGRhdGVfbG9vayggcmVzcG9uc2VfZGF0YVsgJ3Jlc291cmNlX2lkJyBdICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgKHdwYmNfaG9va19faW5pdF90aW1lc2VsZWN0b3IpICkge1xyXG5cdFx0XHRcdFx0XHR3cGJjX2hvb2tfX2luaXRfdGltZXNlbGVjdG9yKCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdCggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAocmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnYWp4X2FmdGVyX2FjdGlvbl9tZXNzYWdlJyBdKSApXHJcblx0XHRcdFx0XHRcdCAmJiAoICcnICE9IHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2FqeF9hZnRlcl9hY3Rpb25fbWVzc2FnZScgXS5yZXBsYWNlKCAvXFxuL2csIFwiPGJyIC8+XCIgKSApXHJcblx0XHRcdFx0XHQpe1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGpxX25vZGUgID0gd3BiY19nZXRfY2FsZW5kYXJfX2pxX25vZGVfX2Zvcl9tZXNzYWdlcyggdGhpcy5kYXRhICk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTaG93IE1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0d3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZSggcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnYWp4X2FmdGVyX2FjdGlvbl9tZXNzYWdlJyBdLnJlcGxhY2UoIC9cXG4vZywgXCI8YnIgLz5cIiApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgICd0eXBlJyAgICAgOiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YoIHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2FqeF9hZnRlcl9hY3Rpb25fbWVzc2FnZV9zdGF0dXMnIF0gKSApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgPyByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2Vfc3RhdHVzJyBdIDogJ2luZm8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJzogeydqcV9ub2RlJzoganFfbm9kZSwgJ3doZXJlJzogJ2FmdGVyJ30sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpc19hcHBlbmQnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc3R5bGUnICAgIDogJ3RleHQtYWxpZ246bGVmdDsnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgIDogMTAwMDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvLyBUcmlnZ2VyIGV2ZW50IHRoYXQgY2FsZW5kYXIgaGFzIGJlZW5cdFx0IC8vIEZpeEluOiAxMC4wLjAuNDQuXHJcblx0XHRcdFx0XHRpZiAoIGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXSApLmxlbmd0aCA+IDAgKXtcclxuXHRcdFx0XHRcdFx0dmFyIHRhcmdldF9lbG0gPSBqUXVlcnkoICdib2R5JyApLnRyaWdnZXIoIFwid3BiY19jYWxlbmRhcl9hanhfX2xvYWRlZF9kYXRhXCIsIFtyZXNwb25zZV9kYXRhWyAncmVzb3VyY2VfaWQnIF1dICk7XHJcblx0XHRcdFx0XHRcdCAvL2pRdWVyeSggJ2JvZHknICkub24oICd3cGJjX2NhbGVuZGFyX2FqeF9fbG9hZGVkX2RhdGEnLCBmdW5jdGlvbiggZXZlbnQsIHJlc291cmNlX2lkICkgeyAuLi4gfSApO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8valF1ZXJ5KCAnI2FqYXhfcmVzcG9uZCcgKS5odG1sKCByZXNwb25zZV9kYXRhICk7XHRcdC8vIEZvciBhYmlsaXR5IHRvIHNob3cgcmVzcG9uc2UsIGFkZCBzdWNoIERJViBlbGVtZW50IHRvIHBhZ2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdCAgKS5mYWlsKCBmdW5jdGlvbiAoIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApIHsgICAgaWYgKCB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cgKXsgY29uc29sZS5sb2coICdBamF4X0Vycm9yJywganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICk7IH1cclxuXHJcblx0XHRcdFx0XHR2YXIgYWp4X3Bvc3RfZGF0YV9fcmVzb3VyY2VfaWQgPSB3cGJjX2dldF9yZXNvdXJjZV9pZF9fZnJvbV9hanhfcG9zdF9kYXRhX3VybCggdGhpcy5kYXRhICk7XHJcblx0XHRcdFx0XHR3cGJjX2JhbGFuY2VyX19jb21wbGV0ZWQoIGFqeF9wb3N0X2RhdGFfX3Jlc291cmNlX2lkICwgJ3dwYmNfY2FsZW5kYXJfX2xvYWRfZGF0YV9fYWp4JyApO1xyXG5cclxuXHRcdFx0XHRcdC8vIEdldCBDb250ZW50IG9mIEVycm9yIE1lc3NhZ2VcclxuXHRcdFx0XHRcdHZhciBlcnJvcl9tZXNzYWdlID0gJzxzdHJvbmc+JyArICdFcnJvciEnICsgJzwvc3Ryb25nPiAnICsgZXJyb3JUaHJvd24gO1xyXG5cdFx0XHRcdFx0aWYgKCBqcVhIUi5zdGF0dXMgKXtcclxuXHRcdFx0XHRcdFx0ZXJyb3JfbWVzc2FnZSArPSAnICg8Yj4nICsganFYSFIuc3RhdHVzICsgJzwvYj4pJztcclxuXHRcdFx0XHRcdFx0aWYgKDQwMyA9PSBqcVhIUi5zdGF0dXMgKXtcclxuXHRcdFx0XHRcdFx0XHRlcnJvcl9tZXNzYWdlICs9ICc8YnI+IFByb2JhYmx5IG5vbmNlIGZvciB0aGlzIHBhZ2UgaGFzIGJlZW4gZXhwaXJlZC4gUGxlYXNlIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBvbmNsaWNrPVwiamF2YXNjcmlwdDpsb2NhdGlvbi5yZWxvYWQoKTtcIj5yZWxvYWQgdGhlIHBhZ2U8L2E+Lic7XHJcblx0XHRcdFx0XHRcdFx0ZXJyb3JfbWVzc2FnZSArPSAnPGJyPiBPdGhlcndpc2UsIHBsZWFzZSBjaGVjayB0aGlzIDxhIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDtcIiBocmVmPVwiaHR0cHM6Ly93cGJvb2tpbmdjYWxlbmRhci5jb20vZmFxL3JlcXVlc3QtZG8tbm90LXBhc3Mtc2VjdXJpdHktY2hlY2svP2FmdGVyX3VwZGF0ZT0xMC4xLjFcIj50cm91Ymxlc2hvb3RpbmcgaW5zdHJ1Y3Rpb248L2E+Ljxicj4nXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHZhciBtZXNzYWdlX3Nob3dfZGVsYXkgPSAzMDAwO1xyXG5cdFx0XHRcdFx0aWYgKCBqcVhIUi5yZXNwb25zZVRleHQgKXtcclxuXHRcdFx0XHRcdFx0ZXJyb3JfbWVzc2FnZSArPSAnICcgKyBqcVhIUi5yZXNwb25zZVRleHQ7XHJcblx0XHRcdFx0XHRcdG1lc3NhZ2Vfc2hvd19kZWxheSA9IDEwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ZXJyb3JfbWVzc2FnZSA9IGVycm9yX21lc3NhZ2UucmVwbGFjZSggL1xcbi9nLCBcIjxiciAvPlwiICk7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGpxX25vZGUgID0gd3BiY19nZXRfY2FsZW5kYXJfX2pxX25vZGVfX2Zvcl9tZXNzYWdlcyggdGhpcy5kYXRhICk7XHJcblxyXG5cdFx0XHRcdFx0LyoqXHJcblx0XHRcdFx0XHQgKiBJZiB3ZSBtYWtlIGZhc3QgY2xpY2tpbmcgb24gZGlmZmVyZW50IHBhZ2VzLFxyXG5cdFx0XHRcdFx0ICogdGhlbiB1bmRlciBjYWxlbmRhciB3aWxsIHNob3cgZXJyb3IgbWVzc2FnZSB3aXRoICBlbXB0eSAgdGV4dCwgYmVjYXVzZSBhamF4IHdhcyBub3QgcmVjZWl2ZWQuXHJcblx0XHRcdFx0XHQgKiBUbyAgbm90IHNob3cgc3VjaCB3YXJuaW5ncyB3ZSBhcmUgc2V0IGRlbGF5ICBpbiAzIHNlY29uZHMuICB2YXIgbWVzc2FnZV9zaG93X2RlbGF5ID0gMzAwMDtcclxuXHRcdFx0XHRcdCAqL1xyXG5cdFx0XHRcdFx0dmFyIGNsb3NlZF90aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpe1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTaG93IE1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCBlcnJvcl9tZXNzYWdlICwgeyAndHlwZScgICAgIDogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJzogeydqcV9ub2RlJzoganFfbm9kZSwgJ3doZXJlJzogJ2FmdGVyJ30sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2lzX2FwcGVuZCc6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3N0eWxlJyAgICA6ICd0ZXh0LWFsaWduOmxlZnQ7JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnY3NzX2NsYXNzJzond3BiY19mZV9tZXNzYWdlX2FsdCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICA6IDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgfSAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICBwYXJzZUludCggbWVzc2FnZV9zaG93X2RlbGF5ICkgICApO1xyXG5cclxuXHRcdFx0ICB9KVxyXG5cdCAgICAgICAgICAvLyAuZG9uZSggICBmdW5jdGlvbiAoIGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSICkgeyAgIGlmICggd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUubG9nICl7IGNvbnNvbGUubG9nKCAnc2Vjb25kIHN1Y2Nlc3MnLCBkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUiApOyB9ICAgIH0pXHJcblx0XHRcdCAgLy8gLmFsd2F5cyggZnVuY3Rpb24gKCBkYXRhX2pxWEhSLCB0ZXh0U3RhdHVzLCBqcVhIUl9lcnJvclRocm93biApIHsgICBpZiAoIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZyApeyBjb25zb2xlLmxvZyggJ2Fsd2F5cyBmaW5pc2hlZCcsIGRhdGFfanFYSFIsIHRleHRTdGF0dXMsIGpxWEhSX2Vycm9yVGhyb3duICk7IH0gICAgIH0pXHJcblx0XHRcdCAgOyAgLy8gRW5kIEFqYXhcclxufVxyXG5cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU3VwcG9ydFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IENhbGVuZGFyIGpRdWVyeSBub2RlIGZvciBzaG93aW5nIG1lc3NhZ2VzIGR1cmluZyBBamF4XHJcblx0ICogVGhpcyBwYXJhbWV0ZXI6ICAgY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXNbcmVzb3VyY2VfaWRdICAgcGFyc2VkIGZyb20gdGhpcy5kYXRhIEFqYXggcG9zdCAgZGF0YVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGFqeF9wb3N0X2RhdGFfdXJsX3BhcmFtc1x0XHQgJ2FjdGlvbj1XUEJDX0FKWF9DQUxFTkRBUl9MT0FELi4uJmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zJTVCcmVzb3VyY2VfaWQlNUQ9MiZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcyU1QmJvb2tpbmdfaGFzaCU1RD0mY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMnXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cdCcnI2NhbGVuZGFyX2Jvb2tpbmcxJyAgfCAgICcuYm9va2luZ19mb3JtX2RpdicgLi4uXHJcblx0ICpcclxuXHQgKiBFeGFtcGxlICAgIHZhciBqcV9ub2RlICA9IHdwYmNfZ2V0X2NhbGVuZGFyX19qcV9ub2RlX19mb3JfbWVzc2FnZXMoIHRoaXMuZGF0YSApO1xyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZ2V0X2NhbGVuZGFyX19qcV9ub2RlX19mb3JfbWVzc2FnZXMoIGFqeF9wb3N0X2RhdGFfdXJsX3BhcmFtcyApe1xyXG5cclxuXHRcdHZhciBqcV9ub2RlID0gJy5ib29raW5nX2Zvcm1fZGl2JztcclxuXHJcblx0XHR2YXIgY2FsZW5kYXJfcmVzb3VyY2VfaWQgPSB3cGJjX2dldF9yZXNvdXJjZV9pZF9fZnJvbV9hanhfcG9zdF9kYXRhX3VybCggYWp4X3Bvc3RfZGF0YV91cmxfcGFyYW1zICk7XHJcblxyXG5cdFx0aWYgKCBjYWxlbmRhcl9yZXNvdXJjZV9pZCA+IDAgKXtcclxuXHRcdFx0anFfbm9kZSA9ICcjY2FsZW5kYXJfYm9va2luZycgKyBjYWxlbmRhcl9yZXNvdXJjZV9pZDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ganFfbm9kZTtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgcmVzb3VyY2UgSUQgZnJvbSBhanggcG9zdCBkYXRhIHVybCAgIHVzdWFsbHkgIGZyb20gIHRoaXMuZGF0YSAgPSAnYWN0aW9uPVdQQkNfQUpYX0NBTEVOREFSX0xPQUQuLi4mY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMlNUJyZXNvdXJjZV9pZCU1RD0yJmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zJTVCYm9va2luZ19oYXNoJTVEPSZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcydcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBhanhfcG9zdF9kYXRhX3VybF9wYXJhbXNcdFx0ICdhY3Rpb249V1BCQ19BSlhfQ0FMRU5EQVJfTE9BRC4uLiZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcyU1QnJlc291cmNlX2lkJTVEPTImY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMlNUJib29raW5nX2hhc2glNUQ9JmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zJ1xyXG5cdCAqIEByZXR1cm5zIHtpbnR9XHRcdFx0XHRcdFx0IDEgfCAwICAoaWYgZXJycm9yIHRoZW4gIDApXHJcblx0ICpcclxuXHQgKiBFeGFtcGxlICAgIHZhciBqcV9ub2RlICA9IHdwYmNfZ2V0X2NhbGVuZGFyX19qcV9ub2RlX19mb3JfbWVzc2FnZXMoIHRoaXMuZGF0YSApO1xyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZ2V0X3Jlc291cmNlX2lkX19mcm9tX2FqeF9wb3N0X2RhdGFfdXJsKCBhanhfcG9zdF9kYXRhX3VybF9wYXJhbXMgKXtcclxuXHJcblx0XHQvLyBHZXQgYm9va2luZyByZXNvdXJjZSBJRCBmcm9tIEFqYXggUG9zdCBSZXF1ZXN0ICAtPiB0aGlzLmRhdGEgPSAnYWN0aW9uPVdQQkNfQUpYX0NBTEVOREFSX0xPQUQuLi4mY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMlNUJyZXNvdXJjZV9pZCU1RD0yJmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zJTVCYm9va2luZ19oYXNoJTVEPSZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcydcclxuXHRcdHZhciBjYWxlbmRhcl9yZXNvdXJjZV9pZCA9IHdwYmNfZ2V0X3VyaV9wYXJhbV9ieV9uYW1lKCAnY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXNbcmVzb3VyY2VfaWRdJywgYWp4X3Bvc3RfZGF0YV91cmxfcGFyYW1zICk7XHJcblx0XHRpZiAoIChudWxsICE9PSBjYWxlbmRhcl9yZXNvdXJjZV9pZCkgJiYgKCcnICE9PSBjYWxlbmRhcl9yZXNvdXJjZV9pZCkgKXtcclxuXHRcdFx0Y2FsZW5kYXJfcmVzb3VyY2VfaWQgPSBwYXJzZUludCggY2FsZW5kYXJfcmVzb3VyY2VfaWQgKTtcclxuXHRcdFx0aWYgKCBjYWxlbmRhcl9yZXNvdXJjZV9pZCA+IDAgKXtcclxuXHRcdFx0XHRyZXR1cm4gY2FsZW5kYXJfcmVzb3VyY2VfaWQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiAwO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBwYXJhbWV0ZXIgZnJvbSBVUkwgIC0gIHBhcnNlIFVSTCBwYXJhbWV0ZXJzLCAgbGlrZSB0aGlzOiBhY3Rpb249V1BCQ19BSlhfQ0FMRU5EQVJfTE9BRC4uLiZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcyU1QnJlc291cmNlX2lkJTVEPTImY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMlNUJib29raW5nX2hhc2glNUQ9JmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zXHJcblx0ICogQHBhcmFtIG5hbWUgIHBhcmFtZXRlciAgbmFtZSwgIGxpa2UgJ2NhbGVuZGFyX3JlcXVlc3RfcGFyYW1zW3Jlc291cmNlX2lkXSdcclxuXHQgKiBAcGFyYW0gdXJsXHQncGFyYW1ldGVyICBzdHJpbmcgVVJMJ1xyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH0gICBwYXJhbWV0ZXIgdmFsdWVcclxuXHQgKlxyXG5cdCAqIEV4YW1wbGU6IFx0XHR3cGJjX2dldF91cmlfcGFyYW1fYnlfbmFtZSggJ2NhbGVuZGFyX3JlcXVlc3RfcGFyYW1zW3Jlc291cmNlX2lkXScsIHRoaXMuZGF0YSApOyAgLT4gJzInXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19nZXRfdXJpX3BhcmFtX2J5X25hbWUoIG5hbWUsIHVybCApe1xyXG5cclxuXHRcdHVybCA9IGRlY29kZVVSSUNvbXBvbmVudCggdXJsICk7XHJcblxyXG5cdFx0bmFtZSA9IG5hbWUucmVwbGFjZSggL1tcXFtcXF1dL2csICdcXFxcJCYnICk7XHJcblx0XHR2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCAnWz8mXScgKyBuYW1lICsgJyg9KFteJiNdKil8JnwjfCQpJyApLFxyXG5cdFx0XHRyZXN1bHRzID0gcmVnZXguZXhlYyggdXJsICk7XHJcblx0XHRpZiAoICFyZXN1bHRzICkgcmV0dXJuIG51bGw7XHJcblx0XHRpZiAoICFyZXN1bHRzWyAyIF0gKSByZXR1cm4gJyc7XHJcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KCByZXN1bHRzWyAyIF0ucmVwbGFjZSggL1xcKy9nLCAnICcgKSApO1xyXG5cdH1cclxuIiwiLyoqXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKlx0aW5jbHVkZXMvX19qcy9mcm9udF9lbmRfbWVzc2FnZXMvd3BiY19mZV9tZXNzYWdlcy5qc1xyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICovXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU2hvdyBNZXNzYWdlcyBhdCBGcm9udC1FZG4gc2lkZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBTaG93IG1lc3NhZ2UgaW4gY29udGVudFxyXG4gKlxyXG4gKiBAcGFyYW0gbWVzc2FnZVx0XHRcdFx0TWVzc2FnZSBIVE1MXHJcbiAqIEBwYXJhbSBwYXJhbXMgPSB7XHJcbiAqXHRcdFx0XHRcdFx0XHRcdCd0eXBlJyAgICAgOiAnd2FybmluZycsXHRcdFx0XHRcdFx0XHQvLyAnZXJyb3InIHwgJ3dhcm5pbmcnIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnXHJcbiAqXHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnIDoge1xyXG4gKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2pxX25vZGUnIDogJycsXHRcdFx0XHQvLyBhbnkgalF1ZXJ5IG5vZGUgZGVmaW5pdGlvblxyXG4gKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3doZXJlJyAgIDogJ2luc2lkZSdcdFx0Ly8gJ2luc2lkZScgfCAnYmVmb3JlJyB8ICdhZnRlcicgfCAncmlnaHQnIHwgJ2xlZnQnXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSxcclxuICpcdFx0XHRcdFx0XHRcdFx0J2lzX2FwcGVuZCc6IHRydWUsXHRcdFx0XHRcdFx0XHRcdC8vIEFwcGx5ICBvbmx5IGlmIFx0J3doZXJlJyAgIDogJ2luc2lkZSdcclxuICpcdFx0XHRcdFx0XHRcdFx0J3N0eWxlJyAgICA6ICd0ZXh0LWFsaWduOmxlZnQ7JyxcdFx0XHRcdC8vIHN0eWxlcywgaWYgbmVlZGVkXHJcbiAqXHRcdFx0XHRcdFx0XHQgICAgJ2Nzc19jbGFzcyc6ICcnLFx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgZXhhbXBsZSBjYW4gIGJlOiAnd3BiY19mZV9tZXNzYWdlX2FsdCdcclxuICpcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICA6IDAsXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaG93IG1hbnkgbWljcm9zZWNvbmQgdG8gIHNob3csICBpZiAwICB0aGVuICBzaG93IGZvcmV2ZXJcclxuICpcdFx0XHRcdFx0XHRcdFx0J2lmX3Zpc2libGVfbm90X3Nob3cnOiBmYWxzZVx0XHRcdFx0XHQvLyBpZiB0cnVlLCAgdGhlbiBkbyBub3Qgc2hvdyBtZXNzYWdlLCAgaWYgcHJldmlvcyBtZXNzYWdlIHdhcyBub3QgaGlkZWQgKG5vdCBhcHBseSBpZiAnd2hlcmUnICAgOiAnaW5zaWRlJyApXHJcbiAqXHRcdFx0XHR9O1xyXG4gKiBFeGFtcGxlczpcclxuICogXHRcdFx0dmFyIGh0bWxfaWQgPSB3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCAnWW91IGNhbiB0ZXN0IGRheXMgc2VsZWN0aW9uIGluIGNhbGVuZGFyJywge30gKTtcclxuICpcclxuICpcdFx0XHR2YXIgbm90aWNlX21lc3NhZ2VfaWQgPSB3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCBfd3BiYy5nZXRfbWVzc2FnZSggJ21lc3NhZ2VfY2hlY2tfcmVxdWlyZWQnICksIHsgJ3R5cGUnOiAnd2FybmluZycsICdkZWxheSc6IDEwMDAwLCAnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IHRydWUsXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICdzaG93X2hlcmUnOiB7J3doZXJlJzogJ3JpZ2h0JywgJ2pxX25vZGUnOiBlbCx9IH0gKTtcclxuICpcclxuICpcdFx0XHR3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2UnIF0ucmVwbGFjZSggL1xcbi9nLCBcIjxiciAvPlwiICksXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgICAndHlwZScgICAgIDogKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mKCByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2Vfc3RhdHVzJyBdICkgKVxyXG4gKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgPyByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2Vfc3RhdHVzJyBdIDogJ2luZm8nLFxyXG4gKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnOiB7J2pxX25vZGUnOiBqcV9ub2RlLCAnd2hlcmUnOiAnYWZ0ZXInfSxcclxuICpcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnY3NzX2NsYXNzJzond3BiY19mZV9tZXNzYWdlX2FsdCcsXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICA6IDEwMDAwXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuICpcclxuICpcclxuICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZSggbWVzc2FnZSwgcGFyYW1zID0ge30gKXtcclxuXHJcblx0dmFyIHBhcmFtc19kZWZhdWx0ID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0J3R5cGUnICAgICA6ICd3YXJuaW5nJyxcdFx0XHRcdFx0XHRcdC8vICdlcnJvcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnc3VjY2VzcydcclxuXHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnIDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdqcV9ub2RlJyA6ICcnLFx0XHRcdFx0Ly8gYW55IGpRdWVyeSBub2RlIGRlZmluaXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd2hlcmUnICAgOiAnaW5zaWRlJ1x0XHQvLyAnaW5zaWRlJyB8ICdiZWZvcmUnIHwgJ2FmdGVyJyB8ICdyaWdodCcgfCAnbGVmdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdCdpc19hcHBlbmQnOiB0cnVlLFx0XHRcdFx0XHRcdFx0XHQvLyBBcHBseSAgb25seSBpZiBcdCd3aGVyZScgICA6ICdpbnNpZGUnXHJcblx0XHRcdFx0XHRcdFx0XHQnc3R5bGUnICAgIDogJ3RleHQtYWxpZ246bGVmdDsnLFx0XHRcdFx0Ly8gc3R5bGVzLCBpZiBuZWVkZWRcclxuXHRcdFx0XHRcdFx0XHQgICAgJ2Nzc19jbGFzcyc6ICcnLFx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgZXhhbXBsZSBjYW4gIGJlOiAnd3BiY19mZV9tZXNzYWdlX2FsdCdcclxuXHRcdFx0XHRcdFx0XHRcdCdkZWxheScgICAgOiAwLFx0XHRcdFx0XHRcdFx0XHRcdC8vIGhvdyBtYW55IG1pY3Jvc2Vjb25kIHRvICBzaG93LCAgaWYgMCAgdGhlbiAgc2hvdyBmb3JldmVyXHJcblx0XHRcdFx0XHRcdFx0XHQnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IGZhbHNlLFx0XHRcdFx0XHQvLyBpZiB0cnVlLCAgdGhlbiBkbyBub3Qgc2hvdyBtZXNzYWdlLCAgaWYgcHJldmlvcyBtZXNzYWdlIHdhcyBub3QgaGlkZWQgKG5vdCBhcHBseSBpZiAnd2hlcmUnICAgOiAnaW5zaWRlJyApXHJcblx0XHRcdFx0XHRcdFx0XHQnaXNfc2Nyb2xsJzogdHJ1ZVx0XHRcdFx0XHRcdFx0XHQvLyBpcyBzY3JvbGwgIHRvICB0aGlzIGVsZW1lbnRcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRmb3IgKCB2YXIgcF9rZXkgaW4gcGFyYW1zICl7XHJcblx0XHRwYXJhbXNfZGVmYXVsdFsgcF9rZXkgXSA9IHBhcmFtc1sgcF9rZXkgXTtcclxuXHR9XHJcblx0cGFyYW1zID0gcGFyYW1zX2RlZmF1bHQ7XHJcblxyXG4gICAgdmFyIHVuaXF1ZV9kaXZfaWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdW5pcXVlX2Rpdl9pZCA9ICd3cGJjX25vdGljZV8nICsgdW5pcXVlX2Rpdl9pZC5nZXRUaW1lKCk7XHJcblxyXG5cdHBhcmFtc1snY3NzX2NsYXNzJ10gKz0gJyB3cGJjX2ZlX21lc3NhZ2UnO1xyXG5cdGlmICggcGFyYW1zWyd0eXBlJ10gPT0gJ2Vycm9yJyApe1xyXG5cdFx0cGFyYW1zWydjc3NfY2xhc3MnXSArPSAnIHdwYmNfZmVfbWVzc2FnZV9lcnJvcic7XHJcblx0XHRtZXNzYWdlID0gJzxpIGNsYXNzPVwibWVudV9pY29uIGljb24tMXggd3BiY19pY25fcmVwb3J0X2dtYWlsZXJyb3JyZWRcIj48L2k+JyArIG1lc3NhZ2U7XHJcblx0fVxyXG5cdGlmICggcGFyYW1zWyd0eXBlJ10gPT0gJ3dhcm5pbmcnICl7XHJcblx0XHRwYXJhbXNbJ2Nzc19jbGFzcyddICs9ICcgd3BiY19mZV9tZXNzYWdlX3dhcm5pbmcnO1xyXG5cdFx0bWVzc2FnZSA9ICc8aSBjbGFzcz1cIm1lbnVfaWNvbiBpY29uLTF4IHdwYmNfaWNuX3dhcm5pbmdcIj48L2k+JyArIG1lc3NhZ2U7XHJcblx0fVxyXG5cdGlmICggcGFyYW1zWyd0eXBlJ10gPT0gJ2luZm8nICl7XHJcblx0XHRwYXJhbXNbJ2Nzc19jbGFzcyddICs9ICcgd3BiY19mZV9tZXNzYWdlX2luZm8nO1xyXG5cdH1cclxuXHRpZiAoIHBhcmFtc1sndHlwZSddID09ICdzdWNjZXNzJyApe1xyXG5cdFx0cGFyYW1zWydjc3NfY2xhc3MnXSArPSAnIHdwYmNfZmVfbWVzc2FnZV9zdWNjZXNzJztcclxuXHRcdG1lc3NhZ2UgPSAnPGkgY2xhc3M9XCJtZW51X2ljb24gaWNvbi0xeCB3cGJjX2ljbl9kb25lX291dGxpbmVcIj48L2k+JyArIG1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHR2YXIgc2Nyb2xsX3RvX2VsZW1lbnQgPSAnPGRpdiBpZD1cIicgKyB1bmlxdWVfZGl2X2lkICsgJ19zY3JvbGxcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2Rpdj4nO1xyXG5cdG1lc3NhZ2UgPSAnPGRpdiBpZD1cIicgKyB1bmlxdWVfZGl2X2lkICsgJ1wiIGNsYXNzPVwid3BiY19mcm9udF9lbmRfX21lc3NhZ2UgJyArIHBhcmFtc1snY3NzX2NsYXNzJ10gKyAnXCIgc3R5bGU9XCInICsgcGFyYW1zWyAnc3R5bGUnIF0gKyAnXCI+JyArIG1lc3NhZ2UgKyAnPC9kaXY+JztcclxuXHJcblxyXG5cdHZhciBqcV9lbF9tZXNzYWdlID0gZmFsc2U7XHJcblx0dmFyIGlzX3Nob3dfbWVzc2FnZSA9IHRydWU7XHJcblxyXG5cdGlmICggJ2luc2lkZScgPT09IHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ3doZXJlJyBdICl7XHJcblxyXG5cdFx0aWYgKCBwYXJhbXNbICdpc19hcHBlbmQnIF0gKXtcclxuXHRcdFx0alF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuYXBwZW5kKCBzY3JvbGxfdG9fZWxlbWVudCApO1xyXG5cdFx0XHRqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5hcHBlbmQoIG1lc3NhZ2UgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLmh0bWwoIHNjcm9sbF90b19lbGVtZW50ICsgbWVzc2FnZSApO1xyXG5cdFx0fVxyXG5cclxuXHR9IGVsc2UgaWYgKCAnYmVmb3JlJyA9PT0gcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnd2hlcmUnIF0gKXtcclxuXHJcblx0XHRqcV9lbF9tZXNzYWdlID0galF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuc2libGluZ3MoICdbaWRePVwid3BiY19ub3RpY2VfXCJdJyApO1xyXG5cdFx0aWYgKCAocGFyYW1zWyAnaWZfdmlzaWJsZV9ub3Rfc2hvdycgXSkgJiYgKGpxX2VsX21lc3NhZ2UuaXMoICc6dmlzaWJsZScgKSkgKXtcclxuXHRcdFx0aXNfc2hvd19tZXNzYWdlID0gZmFsc2U7XHJcblx0XHRcdHVuaXF1ZV9kaXZfaWQgPSBqUXVlcnkoIGpxX2VsX21lc3NhZ2UuZ2V0KCAwICkgKS5hdHRyKCAnaWQnICk7XHJcblx0XHR9XHJcblx0XHRpZiAoIGlzX3Nob3dfbWVzc2FnZSApe1xyXG5cdFx0XHRqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5iZWZvcmUoIHNjcm9sbF90b19lbGVtZW50ICk7XHJcblx0XHRcdGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLmJlZm9yZSggbWVzc2FnZSApO1xyXG5cdFx0fVxyXG5cclxuXHR9IGVsc2UgaWYgKCAnYWZ0ZXInID09PSBwYXJhbXNbICdzaG93X2hlcmUnIF1bICd3aGVyZScgXSApe1xyXG5cclxuXHRcdGpxX2VsX21lc3NhZ2UgPSBqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5uZXh0QWxsKCAnW2lkXj1cIndwYmNfbm90aWNlX1wiXScgKTtcclxuXHRcdGlmICggKHBhcmFtc1sgJ2lmX3Zpc2libGVfbm90X3Nob3cnIF0pICYmIChqcV9lbF9tZXNzYWdlLmlzKCAnOnZpc2libGUnICkpICl7XHJcblx0XHRcdGlzX3Nob3dfbWVzc2FnZSA9IGZhbHNlO1xyXG5cdFx0XHR1bmlxdWVfZGl2X2lkID0galF1ZXJ5KCBqcV9lbF9tZXNzYWdlLmdldCggMCApICkuYXR0ciggJ2lkJyApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBpc19zaG93X21lc3NhZ2UgKXtcclxuXHRcdFx0alF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuYmVmb3JlKCBzY3JvbGxfdG9fZWxlbWVudCApO1x0XHQvLyBXZSBuZWVkIHRvICBzZXQgIGhlcmUgYmVmb3JlKGZvciBoYW5keSBzY3JvbGwpXHJcblx0XHRcdGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLmFmdGVyKCBtZXNzYWdlICk7XHJcblx0XHR9XHJcblxyXG5cdH0gZWxzZSBpZiAoICdyaWdodCcgPT09IHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ3doZXJlJyBdICl7XHJcblxyXG5cdFx0anFfZWxfbWVzc2FnZSA9IGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLm5leHRBbGwoICcud3BiY19mcm9udF9lbmRfX21lc3NhZ2VfY29udGFpbmVyX3JpZ2h0JyApLmZpbmQoICdbaWRePVwid3BiY19ub3RpY2VfXCJdJyApO1xyXG5cdFx0aWYgKCAocGFyYW1zWyAnaWZfdmlzaWJsZV9ub3Rfc2hvdycgXSkgJiYgKGpxX2VsX21lc3NhZ2UuaXMoICc6dmlzaWJsZScgKSkgKXtcclxuXHRcdFx0aXNfc2hvd19tZXNzYWdlID0gZmFsc2U7XHJcblx0XHRcdHVuaXF1ZV9kaXZfaWQgPSBqUXVlcnkoIGpxX2VsX21lc3NhZ2UuZ2V0KCAwICkgKS5hdHRyKCAnaWQnICk7XHJcblx0XHR9XHJcblx0XHRpZiAoIGlzX3Nob3dfbWVzc2FnZSApe1xyXG5cdFx0XHRqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5iZWZvcmUoIHNjcm9sbF90b19lbGVtZW50ICk7XHRcdC8vIFdlIG5lZWQgdG8gIHNldCAgaGVyZSBiZWZvcmUoZm9yIGhhbmR5IHNjcm9sbClcclxuXHRcdFx0alF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuYWZ0ZXIoICc8ZGl2IGNsYXNzPVwid3BiY19mcm9udF9lbmRfX21lc3NhZ2VfY29udGFpbmVyX3JpZ2h0XCI+JyArIG1lc3NhZ2UgKyAnPC9kaXY+JyApO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAoICdsZWZ0JyA9PT0gcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnd2hlcmUnIF0gKXtcclxuXHJcblx0XHRqcV9lbF9tZXNzYWdlID0galF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuc2libGluZ3MoICcud3BiY19mcm9udF9lbmRfX21lc3NhZ2VfY29udGFpbmVyX2xlZnQnICkuZmluZCggJ1tpZF49XCJ3cGJjX25vdGljZV9cIl0nICk7XHJcblx0XHRpZiAoIChwYXJhbXNbICdpZl92aXNpYmxlX25vdF9zaG93JyBdKSAmJiAoanFfZWxfbWVzc2FnZS5pcyggJzp2aXNpYmxlJyApKSApe1xyXG5cdFx0XHRpc19zaG93X21lc3NhZ2UgPSBmYWxzZTtcclxuXHRcdFx0dW5pcXVlX2Rpdl9pZCA9IGpRdWVyeSgganFfZWxfbWVzc2FnZS5nZXQoIDAgKSApLmF0dHIoICdpZCcgKTtcclxuXHRcdH1cclxuXHRcdGlmICggaXNfc2hvd19tZXNzYWdlICl7XHJcblx0XHRcdGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLmJlZm9yZSggc2Nyb2xsX3RvX2VsZW1lbnQgKTtcdFx0Ly8gV2UgbmVlZCB0byAgc2V0ICBoZXJlIGJlZm9yZShmb3IgaGFuZHkgc2Nyb2xsKVxyXG5cdFx0XHRqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5iZWZvcmUoICc8ZGl2IGNsYXNzPVwid3BiY19mcm9udF9lbmRfX21lc3NhZ2VfY29udGFpbmVyX2xlZnRcIj4nICsgbWVzc2FnZSArICc8L2Rpdj4nICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoICAgKCBpc19zaG93X21lc3NhZ2UgKSAgJiYgICggcGFyc2VJbnQoIHBhcmFtc1sgJ2RlbGF5JyBdICkgPiAwICkgICApe1xyXG5cdFx0dmFyIGNsb3NlZF90aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJyMnICsgdW5pcXVlX2Rpdl9pZCApLmZhZGVPdXQoIDE1MDAgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICwgcGFyc2VJbnQoIHBhcmFtc1sgJ2RlbGF5JyBdICkgICApO1xyXG5cclxuXHRcdHZhciBjbG9zZWRfdGltZXIyID0gc2V0VGltZW91dCggZnVuY3Rpb24gKCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICcjJyArIHVuaXF1ZV9kaXZfaWQgKS50cmlnZ2VyKCAnaGlkZScgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAoIHBhcnNlSW50KCBwYXJhbXNbICdkZWxheScgXSApICsgMTUwMSApICk7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayAgaWYgc2hvd2VkIG1lc3NhZ2UgaW4gc29tZSBoaWRkZW4gcGFyZW50IHNlY3Rpb24gYW5kIHNob3cgaXQuIEJ1dCBpdCBtdXN0ICBiZSBsb3dlciB0aGFuICcud3BiY19jb250YWluZXInXHJcblx0dmFyIHBhcmVudF9lbHMgPSBqUXVlcnkoICcjJyArIHVuaXF1ZV9kaXZfaWQgKS5wYXJlbnRzKCkubWFwKCBmdW5jdGlvbiAoKXtcclxuXHRcdGlmICggKCFqUXVlcnkoIHRoaXMgKS5pcyggJ3Zpc2libGUnICkpICYmIChqUXVlcnkoICcud3BiY19jb250YWluZXInICkuaGFzKCB0aGlzICkpICl7XHJcblx0XHRcdGpRdWVyeSggdGhpcyApLnNob3coKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdGlmICggcGFyYW1zWyAnaXNfc2Nyb2xsJyBdICl7XHJcblx0XHR3cGJjX2RvX3Njcm9sbCggJyMnICsgdW5pcXVlX2Rpdl9pZCArICdfc2Nyb2xsJyApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHVuaXF1ZV9kaXZfaWQ7XHJcbn1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEVycm9yIG1lc3NhZ2UuIFx0UHJlc2V0IG9mIHBhcmFtZXRlcnMgZm9yIHJlYWwgbWVzc2FnZSBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBlbFx0XHQtIGFueSBqUXVlcnkgbm9kZSBkZWZpbml0aW9uXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcdC0gTWVzc2FnZSBIVE1MXHJcblx0ICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX2Vycm9yKCBqcV9ub2RlLCBtZXNzYWdlICl7XHJcblxyXG5cdFx0dmFyIG5vdGljZV9tZXNzYWdlX2lkID0gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0eXBlJyAgICAgICAgICAgICAgIDogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdkZWxheScgICAgICAgICAgICAgIDogMTAwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJyAgICAgICAgICA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3aGVyZScgIDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdqcV9ub2RlJzoganFfbm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0cmV0dXJuIG5vdGljZV9tZXNzYWdlX2lkO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEVycm9yIG1lc3NhZ2UgVU5ERVIgZWxlbWVudC4gXHRQcmVzZXQgb2YgcGFyYW1ldGVycyBmb3IgcmVhbCBtZXNzYWdlIGZ1bmN0aW9uLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGVsXHRcdC0gYW55IGpRdWVyeSBub2RlIGRlZmluaXRpb25cclxuXHQgKiBAcGFyYW0gbWVzc2FnZVx0LSBNZXNzYWdlIEhUTUxcclxuXHQgKiBAcmV0dXJucyBzdHJpbmcgIC0gSFRNTCBJRFx0XHRvciAwIGlmIG5vdCBzaG93aW5nIGR1cmluZyB0aGlzIHRpbWUuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZV9fZXJyb3JfdW5kZXJfZWxlbWVudCgganFfbm9kZSwgbWVzc2FnZSwgbWVzc2FnZV9kZWxheSApe1xyXG5cclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiAobWVzc2FnZV9kZWxheSkgKXtcclxuXHRcdFx0bWVzc2FnZV9kZWxheSA9IDBcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbm90aWNlX21lc3NhZ2VfaWQgPSB3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3R5cGUnICAgICAgICAgICAgICAgOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICAgICAgICAgICAgOiBtZXNzYWdlX2RlbGF5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2lmX3Zpc2libGVfbm90X3Nob3cnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Nob3dfaGVyZScgICAgICAgICAgOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd2hlcmUnICA6ICdhZnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanFfbm9kZSc6IGpxX25vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdHJldHVybiBub3RpY2VfbWVzc2FnZV9pZDtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBFcnJvciBtZXNzYWdlIFVOREVSIGVsZW1lbnQuIFx0UHJlc2V0IG9mIHBhcmFtZXRlcnMgZm9yIHJlYWwgbWVzc2FnZSBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBlbFx0XHQtIGFueSBqUXVlcnkgbm9kZSBkZWZpbml0aW9uXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcdC0gTWVzc2FnZSBIVE1MXHJcblx0ICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX2Vycm9yX2Fib3ZlX2VsZW1lbnQoIGpxX25vZGUsIG1lc3NhZ2UsIG1lc3NhZ2VfZGVsYXkgKXtcclxuXHJcblx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKG1lc3NhZ2VfZGVsYXkpICl7XHJcblx0XHRcdG1lc3NhZ2VfZGVsYXkgPSAxMDAwMFxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBub3RpY2VfbWVzc2FnZV9pZCA9IHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2UoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndHlwZScgICAgICAgICAgICAgICA6ICdlcnJvcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgICAgICAgICAgICA6IG1lc3NhZ2VfZGVsYXksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJyAgICAgICAgICA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3aGVyZScgIDogJ2JlZm9yZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanFfbm9kZSc6IGpxX25vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdHJldHVybiBub3RpY2VfbWVzc2FnZV9pZDtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBXYXJuaW5nIG1lc3NhZ2UuIFx0UHJlc2V0IG9mIHBhcmFtZXRlcnMgZm9yIHJlYWwgbWVzc2FnZSBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBlbFx0XHQtIGFueSBqUXVlcnkgbm9kZSBkZWZpbml0aW9uXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcdC0gTWVzc2FnZSBIVE1MXHJcblx0ICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX3dhcm5pbmcoIGpxX25vZGUsIG1lc3NhZ2UgKXtcclxuXHJcblx0XHR2YXIgbm90aWNlX21lc3NhZ2VfaWQgPSB3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3R5cGUnICAgICAgICAgICAgICAgOiAnd2FybmluZycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgICAgICAgICAgICA6IDEwMDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2lmX3Zpc2libGVfbm90X3Nob3cnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Nob3dfaGVyZScgICAgICAgICAgOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd2hlcmUnICA6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanFfbm9kZSc6IGpxX25vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdHdwYmNfaGlnaGxpZ2h0X2Vycm9yX29uX2Zvcm1fZmllbGQoIGpxX25vZGUgKTtcclxuXHRcdHJldHVybiBub3RpY2VfbWVzc2FnZV9pZDtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBXYXJuaW5nIG1lc3NhZ2UgVU5ERVIgZWxlbWVudC4gXHRQcmVzZXQgb2YgcGFyYW1ldGVycyBmb3IgcmVhbCBtZXNzYWdlIGZ1bmN0aW9uLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGVsXHRcdC0gYW55IGpRdWVyeSBub2RlIGRlZmluaXRpb25cclxuXHQgKiBAcGFyYW0gbWVzc2FnZVx0LSBNZXNzYWdlIEhUTUxcclxuXHQgKiBAcmV0dXJucyBzdHJpbmcgIC0gSFRNTCBJRFx0XHRvciAwIGlmIG5vdCBzaG93aW5nIGR1cmluZyB0aGlzIHRpbWUuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZV9fd2FybmluZ191bmRlcl9lbGVtZW50KCBqcV9ub2RlLCBtZXNzYWdlICl7XHJcblxyXG5cdFx0dmFyIG5vdGljZV9tZXNzYWdlX2lkID0gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0eXBlJyAgICAgICAgICAgICAgIDogJ3dhcm5pbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICAgICAgICAgICAgOiAxMDAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpZl92aXNpYmxlX25vdF9zaG93JzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnICAgICAgICAgIDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3doZXJlJyAgOiAnYWZ0ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2pxX25vZGUnOiBqcV9ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRyZXR1cm4gbm90aWNlX21lc3NhZ2VfaWQ7XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogV2FybmluZyBtZXNzYWdlIEFCT1ZFIGVsZW1lbnQuIFx0UHJlc2V0IG9mIHBhcmFtZXRlcnMgZm9yIHJlYWwgbWVzc2FnZSBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBlbFx0XHQtIGFueSBqUXVlcnkgbm9kZSBkZWZpbml0aW9uXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcdC0gTWVzc2FnZSBIVE1MXHJcblx0ICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX3dhcm5pbmdfYWJvdmVfZWxlbWVudCgganFfbm9kZSwgbWVzc2FnZSApe1xyXG5cclxuXHRcdHZhciBub3RpY2VfbWVzc2FnZV9pZCA9IHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2UoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndHlwZScgICAgICAgICAgICAgICA6ICd3YXJuaW5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdkZWxheScgICAgICAgICAgICAgIDogMTAwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJyAgICAgICAgICA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3aGVyZScgIDogJ2JlZm9yZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanFfbm9kZSc6IGpxX25vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdHJldHVybiBub3RpY2VfbWVzc2FnZV9pZDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEhpZ2hsaWdodCBFcnJvciBpbiBzcGVjaWZpYyBmaWVsZFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGpxX25vZGVcdFx0XHRcdFx0c3RyaW5nIG9yIGpRdWVyeSBlbGVtZW50LCAgd2hlcmUgc2Nyb2xsICB0b1xyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfaGlnaGxpZ2h0X2Vycm9yX29uX2Zvcm1fZmllbGQoIGpxX25vZGUgKXtcclxuXHJcblx0XHRpZiAoICFqUXVlcnkoIGpxX25vZGUgKS5sZW5ndGggKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCAhIGpRdWVyeSgganFfbm9kZSApLmlzKCAnOmlucHV0JyApICl7XHJcblx0XHRcdC8vIFNpdHVhdGlvbiB3aXRoICBjaGVja2JveGVzIG9yIHJhZGlvICBidXR0b25zXHJcblx0XHRcdHZhciBqcV9ub2RlX2FyciA9IGpRdWVyeSgganFfbm9kZSApLmZpbmQoICc6aW5wdXQnICk7XHJcblx0XHRcdGlmICggIWpxX25vZGVfYXJyLmxlbmd0aCApe1xyXG5cdFx0XHRcdHJldHVyblxyXG5cdFx0XHR9XHJcblx0XHRcdGpxX25vZGUgPSBqcV9ub2RlX2Fyci5nZXQoIDAgKTtcclxuXHRcdH1cclxuXHRcdHZhciBwYXJhbXMgPSB7fTtcclxuXHRcdHBhcmFtc1sgJ2RlbGF5JyBdID0gMTAwMDA7XHJcblxyXG5cdFx0aWYgKCAhalF1ZXJ5KCBqcV9ub2RlICkuaGFzQ2xhc3MoICd3cGJjX2Zvcm1fZmllbGRfZXJyb3InICkgKXtcclxuXHJcblx0XHRcdGpRdWVyeSgganFfbm9kZSApLmFkZENsYXNzKCAnd3BiY19mb3JtX2ZpZWxkX2Vycm9yJyApXHJcblxyXG5cdFx0XHRpZiAoIHBhcnNlSW50KCBwYXJhbXNbICdkZWxheScgXSApID4gMCApe1xyXG5cdFx0XHRcdHZhciBjbG9zZWRfdGltZXIgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGpRdWVyeSgganFfbm9kZSApLnJlbW92ZUNsYXNzKCAnd3BiY19mb3JtX2ZpZWxkX2Vycm9yJyApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICAsIHBhcnNlSW50KCBwYXJhbXNbICdkZWxheScgXSApXHJcblx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuLyoqXHJcbiAqIFNjcm9sbCB0byBzcGVjaWZpYyBlbGVtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSBqcV9ub2RlXHRcdFx0XHRcdHN0cmluZyBvciBqUXVlcnkgZWxlbWVudCwgIHdoZXJlIHNjcm9sbCAgdG9cclxuICogQHBhcmFtIGV4dHJhX3NoaWZ0X29mZnNldFx0XHRpbnQgc2hpZnQgb2Zmc2V0IGZyb20gIGpxX25vZGVcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfZG9fc2Nyb2xsKCBqcV9ub2RlICwgZXh0cmFfc2hpZnRfb2Zmc2V0ID0gMCApe1xyXG5cclxuXHRpZiAoICFqUXVlcnkoIGpxX25vZGUgKS5sZW5ndGggKXtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0dmFyIHRhcmdldE9mZnNldCA9IGpRdWVyeSgganFfbm9kZSApLm9mZnNldCgpLnRvcDtcclxuXHJcblx0aWYgKCB0YXJnZXRPZmZzZXQgPD0gMCApe1xyXG5cdFx0aWYgKCAwICE9IGpRdWVyeSgganFfbm9kZSApLm5leHRBbGwoICc6dmlzaWJsZScgKS5sZW5ndGggKXtcclxuXHRcdFx0dGFyZ2V0T2Zmc2V0ID0galF1ZXJ5KCBqcV9ub2RlICkubmV4dEFsbCggJzp2aXNpYmxlJyApLmZpcnN0KCkub2Zmc2V0KCkudG9wO1xyXG5cdFx0fSBlbHNlIGlmICggMCAhPSBqUXVlcnkoIGpxX25vZGUgKS5wYXJlbnQoKS5uZXh0QWxsKCAnOnZpc2libGUnICkubGVuZ3RoICl7XHJcblx0XHRcdHRhcmdldE9mZnNldCA9IGpRdWVyeSgganFfbm9kZSApLnBhcmVudCgpLm5leHRBbGwoICc6dmlzaWJsZScgKS5maXJzdCgpLm9mZnNldCgpLnRvcDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmICggalF1ZXJ5KCAnI3dwYWRtaW5iYXInICkubGVuZ3RoID4gMCApe1xyXG5cdFx0dGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gNTAgLSA1MDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gMjAgLSA1MDtcclxuXHR9XHJcblx0dGFyZ2V0T2Zmc2V0ICs9IGV4dHJhX3NoaWZ0X29mZnNldDtcclxuXHJcblx0Ly8gU2Nyb2xsIG9ubHkgIGlmIHdlIGRpZCBub3Qgc2Nyb2xsIGJlZm9yZVxyXG5cdGlmICggISBqUXVlcnkoICdodG1sLGJvZHknICkuaXMoICc6YW5pbWF0ZWQnICkgKXtcclxuXHRcdGpRdWVyeSggJ2h0bWwsYm9keScgKS5hbmltYXRlKCB7c2Nyb2xsVG9wOiB0YXJnZXRPZmZzZXR9LCA1MDAgKTtcclxuXHR9XHJcbn1cclxuXHJcbiIsIlxyXG4vLyBGaXhJbjogMTAuMi4wLjQuXHJcbi8qKlxyXG4gKiBEZWZpbmUgUG9wb3ZlcnMgZm9yIFRpbWVsaW5lcyBpbiBXUCBCb29raW5nIENhbGVuZGFyXHJcbiAqXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd8Ym9vbGVhbn1cclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfZGVmaW5lX3RpcHB5X3BvcG92ZXIoKXtcclxuXHRpZiAoICdmdW5jdGlvbicgIT09IHR5cGVvZiAod3BiY190aXBweSkgKXtcclxuXHRcdGNvbnNvbGUubG9nKCAnV1BCQyBFcnJvci4gd3BiY190aXBweSB3YXMgbm90IGRlZmluZWQuJyApO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHR3cGJjX3RpcHB5KCAnLnBvcG92ZXJfYm90dG9tLnBvcG92ZXJfY2xpY2snLCB7XHJcblx0XHRjb250ZW50KCByZWZlcmVuY2UgKXtcclxuXHRcdFx0dmFyIHBvcG92ZXJfdGl0bGUgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCAnZGF0YS1vcmlnaW5hbC10aXRsZScgKTtcclxuXHRcdFx0dmFyIHBvcG92ZXJfY29udGVudCA9IHJlZmVyZW5jZS5nZXRBdHRyaWJ1dGUoICdkYXRhLWNvbnRlbnQnICk7XHJcblx0XHRcdHJldHVybiAnPGRpdiBjbGFzcz1cInBvcG92ZXIgcG9wb3Zlcl90aXBweVwiPidcclxuXHRcdFx0XHQrICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1jbG9zZVwiPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBvbmNsaWNrPVwiamF2YXNjcmlwdDp0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5fdGlwcHkuaGlkZSgpO1wiID4mdGltZXM7PC9hPjwvZGl2PidcclxuXHRcdFx0XHQrIHBvcG92ZXJfY29udGVudFxyXG5cdFx0XHRcdCsgJzwvZGl2Pic7XHJcblx0XHR9LFxyXG5cdFx0YWxsb3dIVE1MICAgICAgICA6IHRydWUsXHJcblx0XHR0cmlnZ2VyICAgICAgICAgIDogJ21hbnVhbCcsXHJcblx0XHRpbnRlcmFjdGl2ZSAgICAgIDogdHJ1ZSxcclxuXHRcdGhpZGVPbkNsaWNrICAgICAgOiBmYWxzZSxcclxuXHRcdGludGVyYWN0aXZlQm9yZGVyOiAxMCxcclxuXHRcdG1heFdpZHRoICAgICAgICAgOiA1NTAsXHJcblx0XHR0aGVtZSAgICAgICAgICAgIDogJ3dwYmMtdGlwcHktcG9wb3ZlcicsXHJcblx0XHRwbGFjZW1lbnQgICAgICAgIDogJ2JvdHRvbS1zdGFydCcsXHJcblx0XHR0b3VjaCAgICAgICAgICAgIDogWydob2xkJywgNTAwXSxcclxuXHR9ICk7XHJcblx0alF1ZXJ5KCAnLnBvcG92ZXJfYm90dG9tLnBvcG92ZXJfY2xpY2snICkub24oICdjbGljaycsIGZ1bmN0aW9uICgpe1xyXG5cdFx0aWYgKCB0aGlzLl90aXBweS5zdGF0ZS5pc1Zpc2libGUgKXtcclxuXHRcdFx0dGhpcy5fdGlwcHkuaGlkZSgpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fdGlwcHkuc2hvdygpO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxuXHR3cGJjX2RlZmluZV9oaWRlX3RpcHB5X29uX3Njcm9sbCgpO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHdwYmNfZGVmaW5lX2hpZGVfdGlwcHlfb25fc2Nyb2xsKCl7XHJcblx0alF1ZXJ5KCAnLmZsZXhfdGxfX3Njcm9sbGluZ19zZWN0aW9uMiwuZmxleF90bF9fc2Nyb2xsaW5nX3NlY3Rpb25zJyApLm9uKCAnc2Nyb2xsJywgZnVuY3Rpb24gKCBldmVudCApe1xyXG5cdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgKHdwYmNfdGlwcHkpICl7XHJcblx0XHRcdHdwYmNfdGlwcHkuaGlkZUFsbCgpO1xyXG5cdFx0fVxyXG5cdH0gKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFBQSxVQUFBQyxjQUFBO0VBRUEsSUFBQUMsS0FBQSxDQUFBQyxPQUFBLENBQUFGLGNBQUE7SUFDQUEsY0FBQSxHQUFBQSxjQUFBLENBQUFHLElBQUE7RUFDQTtFQUVBLHVCQUFBSCxjQUFBO0lBQ0FBLGNBQUEsR0FBQUEsY0FBQSxDQUFBSSxJQUFBO0VBQ0E7RUFFQSxPQUFBSixjQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFBSyxjQUFBQyxVQUFBLEVBQUFDLEtBQUE7RUFDQSxTQUFBQyxDQUFBLE1BQUFDLENBQUEsR0FBQUgsVUFBQSxDQUFBSSxNQUFBLEVBQUFGLENBQUEsR0FBQUMsQ0FBQSxFQUFBRCxDQUFBO0lBQ0EsSUFBQUYsVUFBQSxDQUFBRSxDQUFBLEtBQUFELEtBQUE7TUFDQTtJQUNBO0VBQ0E7RUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0VBQ0E7O0VBRUEsU0FBQUkscUJBQUE7SUFDQSxPQUFBQyxRQUFBLENBQUFDLE1BQUE7RUFDQTtFQUVBLFNBQUFDLGVBQUFDLENBQUE7SUFDQSxLQUFBQSxDQUFBLEtBQUFBLENBQUEsQ0FBQUMsWUFBQTtJQUNBLElBQUFDLElBQUEsSUFBQUYsQ0FBQSxDQUFBQyxZQUFBLGdCQUFBWixJQUFBLEdBQUFjLFdBQUE7SUFDQSxPQUNBLENBQUFELElBQUEsSUFDQUEsSUFBQSxZQUNBQSxJQUFBLENBQUFFLE9BQUEsZUFDQUYsSUFBQSxDQUFBRSxPQUFBLHlCQUNBRixJQUFBLENBQUFFLE9BQUEscUJBQ0FGLElBQUEsQ0FBQUUsT0FBQTtFQUVBO0VBRUEsU0FBQUMsV0FBQUwsQ0FBQTtJQUNBLEtBQUFBLENBQUE7SUFD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
