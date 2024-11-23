// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/js/wpbc_vars.js?ver=10.0 
/**
 * @version 1.0
 * @package Booking Calendar 
 * @subpackage JS Variables
 * @category Scripts
 * 
 * @author wpdevelop
 * @link https://wpbookingcalendar.com/
 * @email info@wpbookingcalendar.com
 *
 * @modified 2014.05.20
 */

////////////////////////////////////////////////////////////////////////////////
// Eval specific variable value (integer, bool, arrays, etc...)
////////////////////////////////////////////////////////////////////////////////

function wpbc_define_var( wpbc_global_var ) {
    if (wpbc_global_var === undefined) { return null; }
    else { return JSON.parse(wpbc_global_var); }                          //FixIn:6.1       //FixIn: 8.7.11.12
}

////////////////////////////////////////////////////////////////////////////////
// Define global Booking Calendar Varibales based on Localization
////////////////////////////////////////////////////////////////////////////////
var wpbc_ajaxurl                        = wpbc_global1.wpbc_ajaxurl; 
var wpdev_bk_plugin_url                 = wpbc_global1.wpdev_bk_plugin_url;
var wpbc_today                          = wpbc_define_var( wpbc_global1.wpbc_today );
var visible_booking_id_on_page          = wpbc_define_var( wpbc_global1.visible_booking_id_on_page );
var booking_max_monthes_in_calendar     = wpbc_global1.booking_max_monthes_in_calendar;
var user_unavilable_days                = wpbc_define_var( wpbc_global1.user_unavilable_days );
var wpdev_bk_edit_id_hash               = wpbc_global1.wpdev_bk_edit_id_hash;
var wpdev_bk_plugin_filename            = wpbc_global1.wpdev_bk_plugin_filename;
var bk_days_selection_mode              = wpbc_global1.bk_days_selection_mode; 
var wpdev_bk_personal                   = parseInt( wpbc_global1.wpdev_bk_personal );
var block_some_dates_from_today         = parseInt( wpbc_global1.block_some_dates_from_today );
var message_verif_requred               = wpbc_global1.message_verif_requred;
var message_verif_requred_for_check_box = wpbc_global1.message_verif_requred_for_check_box;
var message_verif_requred_for_radio_box = wpbc_global1.message_verif_requred_for_radio_box;
var message_verif_emeil                 = wpbc_global1.message_verif_emeil;
var message_verif_same_emeil            = wpbc_global1.message_verif_same_emeil;
var message_verif_selectdts             = wpbc_global1.message_verif_selectdts;
var new_booking_title                   = wpbc_global1.new_booking_title;

var type_of_thank_you_message           = wpbc_global1.type_of_thank_you_message;
var thank_you_page_URL                  = wpbc_global1.thank_you_page_URL;
var is_am_pm_inside_time                = ( wpbc_global1.is_am_pm_inside_time == "true" );
var is_booking_used_check_in_out_time   = ( wpbc_global1.is_booking_used_check_in_out_time == "true" );
var wpbc_active_locale                  = wpbc_global1.wpbc_active_locale;
var wpbc_message_processing             = wpbc_global1.wpbc_message_processing;
var wpbc_message_deleting               = wpbc_global1.wpbc_message_deleting;
var wpbc_message_updating               = wpbc_global1.wpbc_message_updating;
var wpbc_message_saving                 = wpbc_global1.wpbc_message_saving;

//FixIn: 8.2.1.99
var message_checkinouttime_error    = wpbc_global1.message_checkinouttime_error;                                        //FixIn:6.1.1.1
var message_starttime_error         = wpbc_global1.message_starttime_error;
var message_endtime_error           = wpbc_global1.message_endtime_error;
var message_rangetime_error         = wpbc_global1.message_rangetime_error;
var message_durationtime_error      = wpbc_global1.message_durationtime_error;
var bk_highlight_timeslot_word      = wpbc_global1.bk_highlight_timeslot_word;

if (typeof wpbc_global2 !== 'undefined') {
    var message_time_error              = wpbc_global2.message_time_error;
}
if (typeof wpbc_global3 !== 'undefined') {    
    var bk_1click_mode_days_num         = parseInt( wpbc_global3.bk_1click_mode_days_num ); 
    var bk_1click_mode_days_start       = wpbc_define_var( wpbc_global3.bk_1click_mode_days_start ); 
    var bk_2clicks_mode_days_min        = parseInt( wpbc_global3.bk_2clicks_mode_days_min ); 
    var bk_2clicks_mode_days_max        = parseInt( wpbc_global3.bk_2clicks_mode_days_max ); 
    var bk_2clicks_mode_days_specific   = wpbc_define_var( wpbc_global3.bk_2clicks_mode_days_specific ); 
    var bk_2clicks_mode_days_start      = wpbc_define_var( wpbc_global3.bk_2clicks_mode_days_start );
    // bk_highlight_timeslot_word          = wpbc_global3.bk_highlight_timeslot_word;                                   //FixIn: 9.4.3.1 //FixIn: 8.2.1.99
    var is_booking_recurrent_time       = ( wpbc_global3.is_booking_recurrent_time  == "true" );
        is_booking_used_check_in_out_time = ( wpbc_global3.is_booking_used_check_in_out_time == "true" );

}
if (typeof wpbc_global4 !== 'undefined') {
    var wpbc_available_days_num_from_today = parseInt( wpbc_global4.wpbc_available_days_num_from_today );
}
if (typeof wpbc_global5 !== 'undefined') {

};
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/assets/libs/popper/popper.js?ver=10.0 
/**
 * @popperjs/core v2.11.2 - MIT License
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.wpbc_Popper = {}));
}(this, (function (exports) { 'use strict';

  function getWindow(node) {
    if (node == null) {
      return window;
    }

    if (node.toString() !== '[object Window]') {
      var ownerDocument = node.ownerDocument;
      return ownerDocument ? ownerDocument.defaultView || window : window;
    }

    return node;
  }

  function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
  }

  function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
  }

  function isShadowRoot(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }

    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
  }

  var max = Math.max;
  var min = Math.min;
  var round = Math.round;

  function getBoundingClientRect(element, includeScale) {
    if (includeScale === void 0) {
      includeScale = false;
    }

    var rect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;

    if (isHTMLElement(element) && includeScale) {
      var offsetHeight = element.offsetHeight;
      var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
      // Fallback to 1 in case both values are `0`

      if (offsetWidth > 0) {
        scaleX = round(rect.width) / offsetWidth || 1;
      }

      if (offsetHeight > 0) {
        scaleY = round(rect.height) / offsetHeight || 1;
      }
    }

    return {
      width: rect.width / scaleX,
      height: rect.height / scaleY,
      top: rect.top / scaleY,
      right: rect.right / scaleX,
      bottom: rect.bottom / scaleY,
      left: rect.left / scaleX,
      x: rect.left / scaleX,
      y: rect.top / scaleY
    };
  }

  function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
      scrollLeft: scrollLeft,
      scrollTop: scrollTop
    };
  }

  function getHTMLElementScroll(element) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }

  function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) {
      return getWindowScroll(node);
    } else {
      return getHTMLElementScroll(node);
    }
  }

  function getNodeName(element) {
    return element ? (element.nodeName || '').toLowerCase() : null;
  }

  function getDocumentElement(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
    element.document) || window.document).documentElement;
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
  }

  function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isScrollParent(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = getComputedStyle(element),
        overflow = _getComputedStyle.overflow,
        overflowX = _getComputedStyle.overflowX,
        overflowY = _getComputedStyle.overflowY;

    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
  }

  function isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = round(rect.width) / element.offsetWidth || 1;
    var scaleY = round(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
  } // Returns the composite rect of an element relative to its offsetParent.
  // Composite means it takes into account transforms as well as layout.


  function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) {
      isFixed = false;
    }

    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
    var scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var offsets = {
      x: 0,
      y: 0
    };

    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }

      if (isHTMLElement(offsetParent)) {
        offsets = getBoundingClientRect(offsetParent, true);
        offsets.x += offsetParent.clientLeft;
        offsets.y += offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }

    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  // means it doesn't take into account transforms.

  function getLayoutRect(element) {
    var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223

    var width = element.offsetWidth;
    var height = element.offsetHeight;

    if (Math.abs(clientRect.width - width) <= 1) {
      width = clientRect.width;
    }

    if (Math.abs(clientRect.height - height) <= 1) {
      height = clientRect.height;
    }

    return {
      x: element.offsetLeft,
      y: element.offsetTop,
      width: width,
      height: height
    };
  }

  function getParentNode(element) {
    if (getNodeName(element) === 'html') {
      return element;
    }

    return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
      // $FlowFixMe[incompatible-return]
      // $FlowFixMe[prop-missing]
      element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
      element.parentNode || ( // DOM Element detected
      isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
      // $FlowFixMe[incompatible-call]: HTMLElement is a Node
      getDocumentElement(element) // fallback

    );
  }

  function getScrollParent(node) {
    if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
      // $FlowFixMe[incompatible-return]: assume body is always available
      return node.ownerDocument.body;
    }

    if (isHTMLElement(node) && isScrollParent(node)) {
      return node;
    }

    return getScrollParent(getParentNode(node));
  }

  /*
  given a DOM element, return the list of all scroll parents, up the list of ancesors
  until we get to the top window object. This list is what we attach scroll listeners
  to, because if any of these parent elements scroll, we'll need to re-calculate the
  reference element's position.
  */

  function listScrollParents(element, list) {
    var _element$ownerDocumen;

    if (list === void 0) {
      list = [];
    }

    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)));
  }

  function isTableElement(element) {
    return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
  }

  function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed') {
      return null;
    }

    return element.offsetParent;
  } // `.offsetParent` reports `null` for fixed elements, while absolute elements
  // return the containing block


  function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
    var isIE = navigator.userAgent.indexOf('Trident') !== -1;

    if (isIE && isHTMLElement(element)) {
      // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
      var elementCss = getComputedStyle(element);

      if (elementCss.position === 'fixed') {
        return null;
      }
    }

    var currentNode = getParentNode(element);

    while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
      var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
      // create a containing block.
      // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

      if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
        return currentNode;
      } else {
        currentNode = currentNode.parentNode;
      }
    }

    return null;
  } // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.


  function getOffsetParent(element) {
    var window = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);

    while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent);
    }

    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
      return window;
    }

    return offsetParent || getContainingBlock(element) || window;
  }

  var top = 'top';
  var bottom = 'bottom';
  var right = 'right';
  var left = 'left';
  var auto = 'auto';
  var basePlacements = [top, bottom, right, left];
  var start = 'start';
  var end = 'end';
  var clippingParents = 'clippingParents';
  var viewport = 'viewport';
  var popper = 'popper';
  var reference = 'reference';
  var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
    return acc.concat([placement + "-" + start, placement + "-" + end]);
  }, []);
  var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
    return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
  }, []); // modifiers that need to read the DOM

  var beforeRead = 'beforeRead';
  var read = 'read';
  var afterRead = 'afterRead'; // pure-logic modifiers

  var beforeMain = 'beforeMain';
  var main = 'main';
  var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

  var beforeWrite = 'beforeWrite';
  var write = 'write';
  var afterWrite = 'afterWrite';
  var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

  function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function (modifier) {
      map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively

    function sort(modifier) {
      visited.add(modifier.name);
      var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
      requires.forEach(function (dep) {
        if (!visited.has(dep)) {
          var depModifier = map.get(dep);

          if (depModifier) {
            sort(depModifier);
          }
        }
      });
      result.push(modifier);
    }

    modifiers.forEach(function (modifier) {
      if (!visited.has(modifier.name)) {
        // check for visited object
        sort(modifier);
      }
    });
    return result;
  }

  function orderModifiers(modifiers) {
    // order based on dependencies
    var orderedModifiers = order(modifiers); // order based on phase

    return modifierPhases.reduce(function (acc, phase) {
      return acc.concat(orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      }));
    }, []);
  }

  function debounce(fn) {
    var pending;
    return function () {
      if (!pending) {
        pending = new Promise(function (resolve) {
          Promise.resolve().then(function () {
            pending = undefined;
            resolve(fn());
          });
        });
      }

      return pending;
    };
  }

  function format(str) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return [].concat(args).reduce(function (p, c) {
      return p.replace(/%s/, c);
    }, str);
  }

  var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
  var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
  var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
  function validateModifiers(modifiers) {
    modifiers.forEach(function (modifier) {
      [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
      .filter(function (value, index, self) {
        return self.indexOf(value) === index;
      }).forEach(function (key) {
        switch (key) {
          case 'name':
            if (typeof modifier.name !== 'string') {
              console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
            }

            break;

          case 'enabled':
            if (typeof modifier.enabled !== 'boolean') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
            }

            break;

          case 'phase':
            if (modifierPhases.indexOf(modifier.phase) < 0) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
            }

            break;

          case 'fn':
            if (typeof modifier.fn !== 'function') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
            }

            break;

          case 'effect':
            if (modifier.effect != null && typeof modifier.effect !== 'function') {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
            }

            break;

          case 'requires':
            if (modifier.requires != null && !Array.isArray(modifier.requires)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
            }

            break;

          case 'requiresIfExists':
            if (!Array.isArray(modifier.requiresIfExists)) {
              console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
            }

            break;

          case 'options':
          case 'data':
            break;

          default:
            console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
              return "\"" + s + "\"";
            }).join(', ') + "; but \"" + key + "\" was provided.");
        }

        modifier.requires && modifier.requires.forEach(function (requirement) {
          if (modifiers.find(function (mod) {
            return mod.name === requirement;
          }) == null) {
            console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
          }
        });
      });
    });
  }

  function uniqueBy(arr, fn) {
    var identifiers = new Set();
    return arr.filter(function (item) {
      var identifier = fn(item);

      if (!identifiers.has(identifier)) {
        identifiers.add(identifier);
        return true;
      }
    });
  }

  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }

  function mergeByName(modifiers) {
    var merged = modifiers.reduce(function (merged, current) {
      var existing = merged[current.name];
      merged[current.name] = existing ? Object.assign({}, existing, current, {
        options: Object.assign({}, existing.options, current.options),
        data: Object.assign({}, existing.data, current.data)
      }) : current;
      return merged;
    }, {}); // IE11 does not support Object.values

    return Object.keys(merged).map(function (key) {
      return merged[key];
    });
  }

  function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
    // can be obscured underneath it.
    // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
    // if it isn't open, so if this isn't available, the popper will be detected
    // to overflow the bottom of the screen too early.

    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
      // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
      // errors due to floating point numbers, so we need to check precision.
      // Safari returns a number <= 0, usually < -1 when pinch-zoomed
      // Feature detection fails in mobile emulation mode in Chrome.
      // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
      // 0.001
      // Fallback here: "Not Safari" userAgent

      if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }

    return {
      width: width,
      height: height,
      x: x + getWindowScrollBarX(element),
      y: y
    };
  }

  // of the `<html>` and `<body>` rect bounds if horizontally scrollable

  function getDocumentRect(element) {
    var _element$ownerDocumen;

    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;

    if (getComputedStyle(body || html).direction === 'rtl') {
      x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    }

    return {
      width: width,
      height: height,
      x: x,
      y: y
    };
  }

  function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

    if (parent.contains(child)) {
      return true;
    } // then fallback to custom implementation with Shadow DOM support
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;

        do {
          if (next && parent.isSameNode(next)) {
            return true;
          } // $FlowFixMe[prop-missing]: need a better way to handle this...


          next = next.parentNode || next.host;
        } while (next);
      } // Give up, the result is false


    return false;
  }

  function rectToClientRect(rect) {
    return Object.assign({}, rect, {
      left: rect.x,
      top: rect.y,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    });
  }

  function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
  }

  function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
  } // A "clipping parent" is an overflowable container with the characteristic of
  // clipping (or hiding) overflowing elements with a position different from
  // `initial`


  function getClippingParents(element) {
    var clippingParents = listScrollParents(getParentNode(element));
    var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

    if (!isElement(clipperElement)) {
      return [];
    } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


    return clippingParents.filter(function (clippingParent) {
      return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
    });
  } // Gets the maximum area that the element is visible in due to any number of
  // clipping parents


  function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
      var rect = getClientRectFromMixedType(element, clippingParent);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
  }

  function getVariation(placement) {
    return placement.split('-')[1];
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
  }

  function computeOffsets(_ref) {
    var reference = _ref.reference,
        element = _ref.element,
        placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;

    switch (basePlacement) {
      case top:
        offsets = {
          x: commonX,
          y: reference.y - element.height
        };
        break;

      case bottom:
        offsets = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;

      case right:
        offsets = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;

      case left:
        offsets = {
          x: reference.x - element.width,
          y: commonY
        };
        break;

      default:
        offsets = {
          x: reference.x,
          y: reference.y
        };
    }

    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

    if (mainAxis != null) {
      var len = mainAxis === 'y' ? 'height' : 'width';

      switch (variation) {
        case start:
          offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
          break;

        case end:
          offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
          break;
      }
    }

    return offsets;
  }

  function getFreshSideObject() {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
  }

  function mergePaddingObject(paddingObject) {
    return Object.assign({}, getFreshSideObject(), paddingObject);
  }

  function expandToHashMap(value, keys) {
    return keys.reduce(function (hashMap, key) {
      hashMap[key] = value;
      return hashMap;
    }, {});
  }

  function detectOverflow(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        _options$placement = _options.placement,
        placement = _options$placement === void 0 ? state.placement : _options$placement,
        _options$boundary = _options.boundary,
        boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
        _options$rootBoundary = _options.rootBoundary,
        rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
        _options$elementConte = _options.elementContext,
        elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
        _options$altBoundary = _options.altBoundary,
        altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
        _options$padding = _options.padding,
        padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(state.elements.reference);
    var popperOffsets = computeOffsets({
      reference: referenceClientRect,
      element: popperRect,
      strategy: 'absolute',
      placement: placement
    });
    var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect

    var overflowOffsets = {
      top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
      bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
      left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
      right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

    if (elementContext === popper && offsetData) {
      var offset = offsetData[placement];
      Object.keys(overflowOffsets).forEach(function (key) {
        var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
        var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
        overflowOffsets[key] += offset[axis] * multiply;
      });
    }

    return overflowOffsets;
  }

  var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
  var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
  var DEFAULT_OPTIONS = {
    placement: 'bottom',
    modifiers: [],
    strategy: 'absolute'
  };

  function areValidElements() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return !args.some(function (element) {
      return !(element && typeof element.getBoundingClientRect === 'function');
    });
  }

  function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) {
      generatorOptions = {};
    }

    var _generatorOptions = generatorOptions,
        _generatorOptions$def = _generatorOptions.defaultModifiers,
        defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
        _generatorOptions$def2 = _generatorOptions.defaultOptions,
        defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
      if (options === void 0) {
        options = defaultOptions;
      }

      var state = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
        modifiersData: {},
        elements: {
          reference: reference,
          popper: popper
        },
        attributes: {},
        styles: {}
      };
      var effectCleanupFns = [];
      var isDestroyed = false;
      var instance = {
        state: state,
        setOptions: function setOptions(setOptionsAction) {
          var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
          cleanupModifierEffects();
          state.options = Object.assign({}, defaultOptions, state.options, options);
          state.scrollParents = {
            reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
            popper: listScrollParents(popper)
          }; // Orders the modifiers based on their dependencies and `phase`
          // properties

          var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

          state.orderedModifiers = orderedModifiers.filter(function (m) {
            return m.enabled;
          }); // Validate the provided modifiers so that the consumer will get warned
          // if one of the modifiers is invalid for any reason

          {
            var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
              var name = _ref.name;
              return name;
            });
            validateModifiers(modifiers);

            if (getBasePlacement(state.options.placement) === auto) {
              var flipModifier = state.orderedModifiers.find(function (_ref2) {
                var name = _ref2.name;
                return name === 'flip';
              });

              if (!flipModifier) {
                console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
              }
            }

            var _getComputedStyle = getComputedStyle(popper),
                marginTop = _getComputedStyle.marginTop,
                marginRight = _getComputedStyle.marginRight,
                marginBottom = _getComputedStyle.marginBottom,
                marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
            // cause bugs with positioning, so we'll warn the consumer


            if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
              return parseFloat(margin);
            })) {
              console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
            }
          }

          runModifierEffects();
          return instance.update();
        },
        // Sync update – it will always be executed, even if not necessary. This
        // is useful for low frequency updates where sync behavior simplifies the
        // logic.
        // For high frequency updates (e.g. `resize` and `scroll` events), always
        // prefer the async Popper#update method
        forceUpdate: function forceUpdate() {
          if (isDestroyed) {
            return;
          }

          var _state$elements = state.elements,
              reference = _state$elements.reference,
              popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
          // anymore

          if (!areValidElements(reference, popper)) {
            {
              console.error(INVALID_ELEMENT_ERROR);
            }

            return;
          } // Store the reference and popper rects to be read by modifiers


          state.rects = {
            reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
            popper: getLayoutRect(popper)
          }; // Modifiers have the ability to reset the current update cycle. The
          // most common use case for this is the `flip` modifier changing the
          // placement, which then needs to re-run all the modifiers, because the
          // logic was previously ran for the previous placement and is therefore
          // stale/incorrect

          state.reset = false;
          state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
          // is filled with the initial data specified by the modifier. This means
          // it doesn't persist and is fresh on each update.
          // To ensure persistent data, use `${name}#persistent`

          state.orderedModifiers.forEach(function (modifier) {
            return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
          });
          var __debug_loops__ = 0;

          for (var index = 0; index < state.orderedModifiers.length; index++) {
            {
              __debug_loops__ += 1;

              if (__debug_loops__ > 100) {
                console.error(INFINITE_LOOP_ERROR);
                break;
              }
            }

            if (state.reset === true) {
              state.reset = false;
              index = -1;
              continue;
            }

            var _state$orderedModifie = state.orderedModifiers[index],
                fn = _state$orderedModifie.fn,
                _state$orderedModifie2 = _state$orderedModifie.options,
                _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
                name = _state$orderedModifie.name;

            if (typeof fn === 'function') {
              state = fn({
                state: state,
                options: _options,
                name: name,
                instance: instance
              }) || state;
            }
          }
        },
        // Async and optimistically optimized update – it will not be executed if
        // not necessary (debounced to run at most once-per-tick)
        update: debounce(function () {
          return new Promise(function (resolve) {
            instance.forceUpdate();
            resolve(state);
          });
        }),
        destroy: function destroy() {
          cleanupModifierEffects();
          isDestroyed = true;
        }
      };

      if (!areValidElements(reference, popper)) {
        {
          console.error(INVALID_ELEMENT_ERROR);
        }

        return instance;
      }

      instance.setOptions(options).then(function (state) {
        if (!isDestroyed && options.onFirstUpdate) {
          options.onFirstUpdate(state);
        }
      }); // Modifiers have the ability to execute arbitrary code before the first
      // update cycle runs. They will be executed in the same order as the update
      // cycle. This is useful when a modifier adds some persistent data that
      // other modifiers need to use, but the modifier is run after the dependent
      // one.

      function runModifierEffects() {
        state.orderedModifiers.forEach(function (_ref3) {
          var name = _ref3.name,
              _ref3$options = _ref3.options,
              options = _ref3$options === void 0 ? {} : _ref3$options,
              effect = _ref3.effect;

          if (typeof effect === 'function') {
            var cleanupFn = effect({
              state: state,
              name: name,
              instance: instance,
              options: options
            });

            var noopFn = function noopFn() {};

            effectCleanupFns.push(cleanupFn || noopFn);
          }
        });
      }

      function cleanupModifierEffects() {
        effectCleanupFns.forEach(function (fn) {
          return fn();
        });
        effectCleanupFns = [];
      }

      return instance;
    };
  }

  var passive = {
    passive: true
  };

  function effect$2(_ref) {
    var state = _ref.state,
        instance = _ref.instance,
        options = _ref.options;
    var _options$scroll = options.scroll,
        scroll = _options$scroll === void 0 ? true : _options$scroll,
        _options$resize = options.resize,
        resize = _options$resize === void 0 ? true : _options$resize;
    var window = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.addEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.addEventListener('resize', instance.update, passive);
    }

    return function () {
      if (scroll) {
        scrollParents.forEach(function (scrollParent) {
          scrollParent.removeEventListener('scroll', instance.update, passive);
        });
      }

      if (resize) {
        window.removeEventListener('resize', instance.update, passive);
      }
    };
  } // eslint-disable-next-line import/no-unused-modules


  var eventListeners = {
    name: 'eventListeners',
    enabled: true,
    phase: 'write',
    fn: function fn() {},
    effect: effect$2,
    data: {}
  };

  function popperOffsets(_ref) {
    var state = _ref.state,
        name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = computeOffsets({
      reference: state.rects.reference,
      element: state.rects.popper,
      strategy: 'absolute',
      placement: state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var popperOffsets$1 = {
    name: 'popperOffsets',
    enabled: true,
    phase: 'read',
    fn: popperOffsets,
    data: {}
  };

  var unsetSides = {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto'
  }; // Round the offsets to the nearest suitable subpixel based on the DPR.
  // Zooming can change the DPR, but it seems to report a value that will
  // cleanly divide the values into the appropriate subpixels.

  function roundOffsetsByDPR(_ref) {
    var x = _ref.x,
        y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
      x: round(x * dpr) / dpr || 0,
      y: round(y * dpr) / dpr || 0
    };
  }

  function mapToStyles(_ref2) {
    var _Object$assign2;

    var popper = _ref2.popper,
        popperRect = _ref2.popperRect,
        placement = _ref2.placement,
        variation = _ref2.variation,
        offsets = _ref2.offsets,
        position = _ref2.position,
        gpuAcceleration = _ref2.gpuAcceleration,
        adaptive = _ref2.adaptive,
        roundOffsets = _ref2.roundOffsets,
        isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x,
        x = _offsets$x === void 0 ? 0 : _offsets$x,
        _offsets$y = offsets.y,
        y = _offsets$y === void 0 ? 0 : _offsets$y;

    var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };

    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty('x');
    var hasY = offsets.hasOwnProperty('y');
    var sideX = left;
    var sideY = top;
    var win = window;

    if (adaptive) {
      var offsetParent = getOffsetParent(popper);
      var heightProp = 'clientHeight';
      var widthProp = 'clientWidth';

      if (offsetParent === getWindow(popper)) {
        offsetParent = getDocumentElement(popper);

        if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
          heightProp = 'scrollHeight';
          widthProp = 'scrollWidth';
        }
      } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


      offsetParent = offsetParent;

      if (placement === top || (placement === left || placement === right) && variation === end) {
        sideY = bottom;
        var offsetY = isFixed && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
        offsetParent[heightProp];
        y -= offsetY - popperRect.height;
        y *= gpuAcceleration ? 1 : -1;
      }

      if (placement === left || (placement === top || placement === bottom) && variation === end) {
        sideX = right;
        var offsetX = isFixed && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
        offsetParent[widthProp];
        x -= offsetX - popperRect.width;
        x *= gpuAcceleration ? 1 : -1;
      }
    }

    var commonStyles = Object.assign({
      position: position
    }, adaptive && unsetSides);

    var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
      x: x,
      y: y
    }) : {
      x: x,
      y: y
    };

    x = _ref4.x;
    y = _ref4.y;

    if (gpuAcceleration) {
      var _Object$assign;

      return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }

    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
  }

  function computeStyles(_ref5) {
    var state = _ref5.state,
        options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration,
        gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
        _options$adaptive = options.adaptive,
        adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
        _options$roundOffsets = options.roundOffsets,
        roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

    {
      var transitionProperty = getComputedStyle(state.elements.popper).transitionProperty || '';

      if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
        return transitionProperty.indexOf(property) >= 0;
      })) {
        console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
      }
    }

    var commonStyles = {
      placement: getBasePlacement(state.placement),
      variation: getVariation(state.placement),
      popper: state.elements.popper,
      popperRect: state.rects.popper,
      gpuAcceleration: gpuAcceleration,
      isFixed: state.options.strategy === 'fixed'
    };

    if (state.modifiersData.popperOffsets != null) {
      state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
      })));
    }

    if (state.modifiersData.arrow != null) {
      state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: 'absolute',
        adaptive: false,
        roundOffsets: roundOffsets
      })));
    }

    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-placement': state.placement
    });
  } // eslint-disable-next-line import/no-unused-modules


  var computeStyles$1 = {
    name: 'computeStyles',
    enabled: true,
    phase: 'beforeWrite',
    fn: computeStyles,
    data: {}
  };

  // and applies them to the HTMLElements such as popper and arrow

  function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function (name) {
      var style = state.styles[name] || {};
      var attributes = state.attributes[name] || {};
      var element = state.elements[name]; // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      } // Flow doesn't support to extend this property, but it's the most
      // effective way to apply styles to an HTMLElement
      // $FlowFixMe[cannot-write]


      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (name) {
        var value = attributes[name];

        if (value === false) {
          element.removeAttribute(name);
        } else {
          element.setAttribute(name, value === true ? '' : value);
        }
      });
    });
  }

  function effect$1(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
      popper: {
        position: state.options.strategy,
        left: '0',
        top: '0',
        margin: '0'
      },
      arrow: {
        position: 'absolute'
      },
      reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;

    if (state.elements.arrow) {
      Object.assign(state.elements.arrow.style, initialStyles.arrow);
    }

    return function () {
      Object.keys(state.elements).forEach(function (name) {
        var element = state.elements[name];
        var attributes = state.attributes[name] || {};
        var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

        var style = styleProperties.reduce(function (style, property) {
          style[property] = '';
          return style;
        }, {}); // arrow is optional + virtual elements

        if (!isHTMLElement(element) || !getNodeName(element)) {
          return;
        }

        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function (attribute) {
          element.removeAttribute(attribute);
        });
      });
    };
  } // eslint-disable-next-line import/no-unused-modules


  var applyStyles$1 = {
    name: 'applyStyles',
    enabled: true,
    phase: 'write',
    fn: applyStyles,
    effect: effect$1,
    requires: ['computeStyles']
  };

  function distanceAndSkiddingToXY(placement, rects, offset) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

    var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
      placement: placement
    })) : offset,
        skidding = _ref[0],
        distance = _ref[1];

    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [left, right].indexOf(basePlacement) >= 0 ? {
      x: distance,
      y: skidding
    } : {
      x: skidding,
      y: distance
    };
  }

  function offset(_ref2) {
    var state = _ref2.state,
        options = _ref2.options,
        name = _ref2.name;
    var _options$offset = options.offset,
        offset = _options$offset === void 0 ? [0, 0] : _options$offset;
    var data = placements.reduce(function (acc, placement) {
      acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
      return acc;
    }, {});
    var _data$state$placement = data[state.placement],
        x = _data$state$placement.x,
        y = _data$state$placement.y;

    if (state.modifiersData.popperOffsets != null) {
      state.modifiersData.popperOffsets.x += x;
      state.modifiersData.popperOffsets.y += y;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var offset$1 = {
    name: 'offset',
    enabled: true,
    phase: 'main',
    requires: ['popperOffsets'],
    fn: offset
  };

  var hash$1 = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function (matched) {
      return hash$1[matched];
    });
  }

  var hash = {
    start: 'end',
    end: 'start'
  };
  function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function (matched) {
      return hash[matched];
    });
  }

  function computeAutoPlacement(state, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        placement = _options.placement,
        boundary = _options.boundary,
        rootBoundary = _options.rootBoundary,
        padding = _options.padding,
        flipVariations = _options.flipVariations,
        _options$allowedAutoP = _options.allowedAutoPlacements,
        allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
      return getVariation(placement) === variation;
    }) : basePlacements;
    var allowedPlacements = placements$1.filter(function (placement) {
      return allowedAutoPlacements.indexOf(placement) >= 0;
    });

    if (allowedPlacements.length === 0) {
      allowedPlacements = placements$1;

      {
        console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
      }
    } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


    var overflows = allowedPlacements.reduce(function (acc, placement) {
      acc[placement] = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding
      })[getBasePlacement(placement)];
      return acc;
    }, {});
    return Object.keys(overflows).sort(function (a, b) {
      return overflows[a] - overflows[b];
    });
  }

  function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) {
      return [];
    }

    var oppositePlacement = getOppositePlacement(placement);
    return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
  }

  function flip(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;

    if (state.modifiersData[name]._skip) {
      return;
    }

    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
        specifiedFallbackPlacements = options.fallbackPlacements,
        padding = options.padding,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        _options$flipVariatio = options.flipVariations,
        flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
        allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
    var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
      return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        flipVariations: flipVariations,
        allowedAutoPlacements: allowedAutoPlacements
      }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];

    for (var i = 0; i < placements.length; i++) {
      var placement = placements[i];

      var _basePlacement = getBasePlacement(placement);

      var isStartVariation = getVariation(placement) === start;
      var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
      var len = isVertical ? 'width' : 'height';
      var overflow = detectOverflow(state, {
        placement: placement,
        boundary: boundary,
        rootBoundary: rootBoundary,
        altBoundary: altBoundary,
        padding: padding
      });
      var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

      if (referenceRect[len] > popperRect[len]) {
        mainVariationSide = getOppositePlacement(mainVariationSide);
      }

      var altVariationSide = getOppositePlacement(mainVariationSide);
      var checks = [];

      if (checkMainAxis) {
        checks.push(overflow[_basePlacement] <= 0);
      }

      if (checkAltAxis) {
        checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
      }

      if (checks.every(function (check) {
        return check;
      })) {
        firstFittingPlacement = placement;
        makeFallbackChecks = false;
        break;
      }

      checksMap.set(placement, checks);
    }

    if (makeFallbackChecks) {
      // `2` may be desired in some cases – research later
      var numberOfChecks = flipVariations ? 3 : 1;

      var _loop = function _loop(_i) {
        var fittingPlacement = placements.find(function (placement) {
          var checks = checksMap.get(placement);

          if (checks) {
            return checks.slice(0, _i).every(function (check) {
              return check;
            });
          }
        });

        if (fittingPlacement) {
          firstFittingPlacement = fittingPlacement;
          return "break";
        }
      };

      for (var _i = numberOfChecks; _i > 0; _i--) {
        var _ret = _loop(_i);

        if (_ret === "break") break;
      }
    }

    if (state.placement !== firstFittingPlacement) {
      state.modifiersData[name]._skip = true;
      state.placement = firstFittingPlacement;
      state.reset = true;
    }
  } // eslint-disable-next-line import/no-unused-modules


  var flip$1 = {
    name: 'flip',
    enabled: true,
    phase: 'main',
    fn: flip,
    requiresIfExists: ['offset'],
    data: {
      _skip: false
    }
  };

  function getAltAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }
  function withinMaxClamp(min, value, max) {
    var v = within(min, value, max);
    return v > max ? max : v;
  }

  function preventOverflow(_ref) {
    var state = _ref.state,
        options = _ref.options,
        name = _ref.name;
    var _options$mainAxis = options.mainAxis,
        checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
        _options$altAxis = options.altAxis,
        checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
        boundary = options.boundary,
        rootBoundary = options.rootBoundary,
        altBoundary = options.altBoundary,
        padding = options.padding,
        _options$tether = options.tether,
        tether = _options$tether === void 0 ? true : _options$tether,
        _options$tetherOffset = options.tetherOffset,
        tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      altBoundary: altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
      placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
      mainAxis: tetherOffsetValue,
      altAxis: tetherOffsetValue
    } : Object.assign({
      mainAxis: 0,
      altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
      x: 0,
      y: 0
    };

    if (!popperOffsets) {
      return;
    }

    if (checkMainAxis) {
      var _offsetModifierState$;

      var mainSide = mainAxis === 'y' ? top : left;
      var altSide = mainAxis === 'y' ? bottom : right;
      var len = mainAxis === 'y' ? 'height' : 'width';
      var offset = popperOffsets[mainAxis];
      var min$1 = offset + overflow[mainSide];
      var max$1 = offset - overflow[altSide];
      var additive = tether ? -popperRect[len] / 2 : 0;
      var minLen = variation === start ? referenceRect[len] : popperRect[len];
      var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
      // outside the reference bounds

      var arrowElement = state.elements.arrow;
      var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
        width: 0,
        height: 0
      };
      var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
      var arrowPaddingMin = arrowPaddingObject[mainSide];
      var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
      // to include its full size in the calculation. If the reference is small
      // and near the edge of a boundary, the popper can overflow even if the
      // reference is not overflowing as well (e.g. virtual elements with no
      // width or height)

      var arrowLen = within(0, referenceRect[len], arrowRect[len]);
      var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
      var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
      var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
      var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
      var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
      var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
      var tetherMax = offset + maxOffset - offsetModifierValue;
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _offsetModifierState$2;

      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _len = altAxis === 'y' ? 'height' : 'width';

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var isOriginSide = [top, left].indexOf(basePlacement) !== -1;

      var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

      var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

      var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

      var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }

    state.modifiersData[name] = data;
  } // eslint-disable-next-line import/no-unused-modules


  var preventOverflow$1 = {
    name: 'preventOverflow',
    enabled: true,
    phase: 'main',
    fn: preventOverflow,
    requiresIfExists: ['offset']
  };

  var toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
      placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  };

  function arrow(_ref) {
    var _state$modifiersData$;

    var state = _ref.state,
        name = _ref.name,
        options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [left, right].indexOf(basePlacement) >= 0;
    var len = isVertical ? 'height' : 'width';

    if (!arrowElement || !popperOffsets) {
      return;
    }

    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === 'y' ? top : left;
    var maxProp = axis === 'y' ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds

    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = within(min, center, max); // Prevents breaking syntax highlighting...

    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
  }

  function effect(_ref2) {
    var state = _ref2.state,
        options = _ref2.options;
    var _options$element = options.element,
        arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

    if (arrowElement == null) {
      return;
    } // CSS selector


    if (typeof arrowElement === 'string') {
      arrowElement = state.elements.popper.querySelector(arrowElement);

      if (!arrowElement) {
        return;
      }
    }

    {
      if (!isHTMLElement(arrowElement)) {
        console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
      }
    }

    if (!contains(state.elements.popper, arrowElement)) {
      {
        console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
      }

      return;
    }

    state.elements.arrow = arrowElement;
  } // eslint-disable-next-line import/no-unused-modules


  var arrow$1 = {
    name: 'arrow',
    enabled: true,
    phase: 'main',
    fn: arrow,
    effect: effect,
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow']
  };

  function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) {
      preventedOffsets = {
        x: 0,
        y: 0
      };
    }

    return {
      top: overflow.top - rect.height - preventedOffsets.y,
      right: overflow.right - rect.width + preventedOffsets.x,
      bottom: overflow.bottom - rect.height + preventedOffsets.y,
      left: overflow.left - rect.width - preventedOffsets.x
    };
  }

  function isAnySideFullyClipped(overflow) {
    return [top, right, bottom, left].some(function (side) {
      return overflow[side] >= 0;
    });
  }

  function hide(_ref) {
    var state = _ref.state,
        name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
      elementContext: 'reference'
    });
    var popperAltOverflow = detectOverflow(state, {
      altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
      referenceClippingOffsets: referenceClippingOffsets,
      popperEscapeOffsets: popperEscapeOffsets,
      isReferenceHidden: isReferenceHidden,
      hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
      'data-popper-reference-hidden': isReferenceHidden,
      'data-popper-escaped': hasPopperEscaped
    });
  } // eslint-disable-next-line import/no-unused-modules


  var hide$1 = {
    name: 'hide',
    enabled: true,
    phase: 'main',
    requiresIfExists: ['preventOverflow'],
    fn: hide
  };

  var defaultModifiers$1 = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
  var createPopper$1 = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers$1
  }); // eslint-disable-next-line import/no-unused-modules

  var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
  var createPopper = /*#__PURE__*/popperGenerator({
    defaultModifiers: defaultModifiers
  }); // eslint-disable-next-line import/no-unused-modules

  exports.applyStyles = applyStyles$1;
  exports.arrow = arrow$1;
  exports.computeStyles = computeStyles$1;
  exports.createPopper = createPopper;
  exports.createPopperLite = createPopper$1;
  exports.defaultModifiers = defaultModifiers;
  exports.detectOverflow = detectOverflow;
  exports.eventListeners = eventListeners;
  exports.flip = flip$1;
  exports.hide = hide$1;
  exports.offset = offset$1;
  exports.popperGenerator = popperGenerator;
  exports.popperOffsets = popperOffsets$1;
  exports.preventOverflow = preventOverflow$1;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=popper.js.map;
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/assets/libs/tippy.js/dist/tippy-bundle.umd.js?ver=10.0 
/**!
* tippy.js v6.3.7
* (c) 2017-2021 atomiks
* MIT License
*
* Docs: https://atomiks.github.io/tippyjs/v6/all-props/
*/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@popperjs/core')) :
  typeof define === 'function' && define.amd ? define(['@popperjs/core'], factory) :
  (global = global || self, global.wpbc_tippy = factory(global.wpbc_Popper));
}(this, (function (core) { 'use strict';

  var css = ".tippy-box[data-animation=fade][data-state=hidden]{opacity:0}[data-tippy-root]{max-width:calc(100vw - 10px)}.tippy-box{position:relative;background-color:#333;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;white-space:normal;outline:0;transition-property:transform,visibility,opacity}.tippy-box[data-placement^=top]>.tippy-arrow{bottom:0}.tippy-box[data-placement^=top]>.tippy-arrow:before{bottom:-7px;left:0;border-width:8px 8px 0;border-top-color:initial;transform-origin:center top}.tippy-box[data-placement^=bottom]>.tippy-arrow{top:0}.tippy-box[data-placement^=bottom]>.tippy-arrow:before{top:-7px;left:0;border-width:0 8px 8px;border-bottom-color:initial;transform-origin:center bottom}.tippy-box[data-placement^=left]>.tippy-arrow{right:0}.tippy-box[data-placement^=left]>.tippy-arrow:before{border-width:8px 0 8px 8px;border-left-color:initial;right:-7px;transform-origin:center left}.tippy-box[data-placement^=right]>.tippy-arrow{left:0}.tippy-box[data-placement^=right]>.tippy-arrow:before{left:-7px;border-width:8px 8px 8px 0;border-right-color:initial;transform-origin:center right}.tippy-box[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{width:16px;height:16px;color:#333}.tippy-arrow:before{content:\"\";position:absolute;border-color:transparent;border-style:solid}.tippy-content{position:relative;padding:5px 9px;z-index:1}";

  function injectCSS(css) {
    var style = document.createElement('style');
    style.textContent = css;
    style.setAttribute('data-tippy-stylesheet', '');
    var head = document.head;
    var firstStyleOrLinkTag = document.querySelector('head>style,head>link');

    if (firstStyleOrLinkTag) {
      head.insertBefore(style, firstStyleOrLinkTag);
    } else {
      head.appendChild(style);
    }
  }

  var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
  var isIE11 = isBrowser ? // @ts-ignore
  !!window.msCrypto : false;

  var ROUND_ARROW = '<svg width="16" height="6" xmlns="http://www.w3.org/2000/svg"><path d="M0 6s1.796-.013 4.67-3.615C5.851.9 6.93.006 8 0c1.07-.006 2.148.887 3.343 2.385C14.233 6.005 16 6 16 6H0z"></svg>';
  var BOX_CLASS = "tippy-box";
  var CONTENT_CLASS = "tippy-content";
  var BACKDROP_CLASS = "tippy-backdrop";
  var ARROW_CLASS = "tippy-arrow";
  var SVG_ARROW_CLASS = "tippy-svg-arrow";
  var TOUCH_OPTIONS = {
    passive: true,
    capture: true
  };
  var TIPPY_DEFAULT_APPEND_TO = function TIPPY_DEFAULT_APPEND_TO() {
    return document.body;
  };

  function hasOwnProperty(obj, key) {
    return {}.hasOwnProperty.call(obj, key);
  }
  function getValueAtIndexOrReturn(value, index, defaultValue) {
    if (Array.isArray(value)) {
      var v = value[index];
      return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
    }

    return value;
  }
  function isType(value, type) {
    var str = {}.toString.call(value);
    return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
  }
  function invokeWithArgsOrReturn(value, args) {
    return typeof value === 'function' ? value.apply(void 0, args) : value;
  }
  function debounce(fn, ms) {
    // Avoid wrapping in `setTimeout` if ms is 0 anyway
    if (ms === 0) {
      return fn;
    }

    var timeout;
    return function (arg) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        fn(arg);
      }, ms);
    };
  }
  function removeProperties(obj, keys) {
    var clone = Object.assign({}, obj);
    keys.forEach(function (key) {
      delete clone[key];
    });
    return clone;
  }
  function splitBySpaces(value) {
    return value.split(/\s+/).filter(Boolean);
  }
  function normalizeToArray(value) {
    return [].concat(value);
  }
  function pushIfUnique(arr, value) {
    if (arr.indexOf(value) === -1) {
      arr.push(value);
    }
  }
  function unique(arr) {
    return arr.filter(function (item, index) {
      return arr.indexOf(item) === index;
    });
  }
  function getBasePlacement(placement) {
    return placement.split('-')[0];
  }
  function arrayFrom(value) {
    return [].slice.call(value);
  }
  function removeUndefinedProps(obj) {
    return Object.keys(obj).reduce(function (acc, key) {
      if (obj[key] !== undefined) {
        acc[key] = obj[key];
      }

      return acc;
    }, {});
  }

  function div() {
    return document.createElement('div');
  }
  function isElement(value) {
    return ['Element', 'Fragment'].some(function (type) {
      return isType(value, type);
    });
  }
  function isNodeList(value) {
    return isType(value, 'NodeList');
  }
  function isMouseEvent(value) {
    return isType(value, 'MouseEvent');
  }
  function isReferenceElement(value) {
    return !!(value && value._tippy && value._tippy.reference === value);
  }
  function getArrayOfElements(value) {
    if (isElement(value)) {
      return [value];
    }

    if (isNodeList(value)) {
      return arrayFrom(value);
    }

    if (Array.isArray(value)) {
      return value;
    }

    return arrayFrom(document.querySelectorAll(value));
  }
  function setTransitionDuration(els, value) {
    els.forEach(function (el) {
      if (el) {
        el.style.transitionDuration = value + "ms";
      }
    });
  }
  function setVisibilityState(els, state) {
    els.forEach(function (el) {
      if (el) {
        el.setAttribute('data-state', state);
      }
    });
  }
  function getOwnerDocument(elementOrElements) {
    var _element$ownerDocumen;

    var _normalizeToArray = normalizeToArray(elementOrElements),
        element = _normalizeToArray[0]; // Elements created via a <template> have an ownerDocument with no reference to the body


    return element != null && (_element$ownerDocumen = element.ownerDocument) != null && _element$ownerDocumen.body ? element.ownerDocument : document;
  }
  function isCursorOutsideInteractiveBorder(popperTreeData, event) {
    var clientX = event.clientX,
        clientY = event.clientY;
    return popperTreeData.every(function (_ref) {
      var popperRect = _ref.popperRect,
          popperState = _ref.popperState,
          props = _ref.props;
      var interactiveBorder = props.interactiveBorder;
      var basePlacement = getBasePlacement(popperState.placement);
      var offsetData = popperState.modifiersData.offset;

      if (!offsetData) {
        return true;
      }

      var topDistance = basePlacement === 'bottom' ? offsetData.top.y : 0;
      var bottomDistance = basePlacement === 'top' ? offsetData.bottom.y : 0;
      var leftDistance = basePlacement === 'right' ? offsetData.left.x : 0;
      var rightDistance = basePlacement === 'left' ? offsetData.right.x : 0;
      var exceedsTop = popperRect.top - clientY + topDistance > interactiveBorder;
      var exceedsBottom = clientY - popperRect.bottom - bottomDistance > interactiveBorder;
      var exceedsLeft = popperRect.left - clientX + leftDistance > interactiveBorder;
      var exceedsRight = clientX - popperRect.right - rightDistance > interactiveBorder;
      return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
    });
  }
  function updateTransitionEndListener(box, action, listener) {
    var method = action + "EventListener"; // some browsers apparently support `transition` (unprefixed) but only fire
    // `webkitTransitionEnd`...

    ['transitionend', 'webkitTransitionEnd'].forEach(function (event) {
      box[method](event, listener);
    });
  }
  /**
   * Compared to xxx.contains, this function works for dom structures with shadow
   * dom
   */

  function actualContains(parent, child) {
    var target = child;

    while (target) {
      var _target$getRootNode;

      if (parent.contains(target)) {
        return true;
      }

      target = target.getRootNode == null ? void 0 : (_target$getRootNode = target.getRootNode()) == null ? void 0 : _target$getRootNode.host;
    }

    return false;
  }

  var currentInput = {
    isTouch: false
  };
  var lastMouseMoveTime = 0;
  /**
   * When a `touchstart` event is fired, it's assumed the user is using touch
   * input. We'll bind a `mousemove` event listener to listen for mouse input in
   * the future. This way, the `isTouch` property is fully dynamic and will handle
   * hybrid devices that use a mix of touch + mouse input.
   */

  function onDocumentTouchStart() {
    if (currentInput.isTouch) {
      return;
    }

    currentInput.isTouch = true;

    if (window.performance) {
      document.addEventListener('mousemove', onDocumentMouseMove);
    }
  }
  /**
   * When two `mousemove` event are fired consecutively within 20ms, it's assumed
   * the user is using mouse input again. `mousemove` can fire on touch devices as
   * well, but very rarely that quickly.
   */

  function onDocumentMouseMove() {
    var now = performance.now();

    if (now - lastMouseMoveTime < 20) {
      currentInput.isTouch = false;
      document.removeEventListener('mousemove', onDocumentMouseMove);
    }

    lastMouseMoveTime = now;
  }
  /**
   * When an element is in focus and has a tippy, leaving the tab/window and
   * returning causes it to show again. For mouse users this is unexpected, but
   * for keyboard use it makes sense.
   * TODO: find a better technique to solve this problem
   */

  function onWindowBlur() {
    var activeElement = document.activeElement;

    if (isReferenceElement(activeElement)) {
      var instance = activeElement._tippy;

      if (activeElement.blur && !instance.state.isVisible) {
        activeElement.blur();
      }
    }
  }
  function bindGlobalEventListeners() {
    document.addEventListener('touchstart', onDocumentTouchStart, TOUCH_OPTIONS);
    window.addEventListener('blur', onWindowBlur);
  }

  function createMemoryLeakWarning(method) {
    var txt = method === 'destroy' ? 'n already-' : ' ';
    return [method + "() was called on a" + txt + "destroyed instance. This is a no-op but", 'indicates a potential memory leak.'].join(' ');
  }
  function clean(value) {
    var spacesAndTabs = /[ \t]{2,}/g;
    var lineStartWithSpaces = /^[ \t]*/gm;
    return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
  }

  function getDevMessage(message) {
    return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
  }

  function getFormattedMessage(message) {
    return [getDevMessage(message), // title
    'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
    'line-height: 1.5', // footer
    'color: #a6a095;'];
  } // Assume warnings and errors never have the same message

  var visitedMessages;

  {
    resetVisitedMessages();
  }

  function resetVisitedMessages() {
    visitedMessages = new Set();
  }
  function warnWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console;

      visitedMessages.add(message);

      (_console = console).warn.apply(_console, getFormattedMessage(message));
    }
  }
  function errorWhen(condition, message) {
    if (condition && !visitedMessages.has(message)) {
      var _console2;

      visitedMessages.add(message);

      (_console2 = console).error.apply(_console2, getFormattedMessage(message));
    }
  }
  function validateTargets(targets) {
    var didPassFalsyValue = !targets;
    var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
    errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element,', 'Element[], or NodeList.'].join(' '));
    errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is not supported as an argument', 'for virtual positioning. Use props.getReferenceClientRect instead.'].join(' '));
  }

  var pluginProps = {
    animateFill: false,
    followCursor: false,
    inlinePositioning: false,
    sticky: false
  };
  var renderProps = {
    allowHTML: false,
    animation: 'fade',
    arrow: true,
    content: '',
    inertia: false,
    maxWidth: 350,
    role: 'tooltip',
    theme: '',
    zIndex: 9999
  };
  var defaultProps = Object.assign({
    appendTo: TIPPY_DEFAULT_APPEND_TO,
    aria: {
      content: 'auto',
      expanded: 'auto'
    },
    delay: 0,
    duration: [300, 250],
    getReferenceClientRect: null,
    hideOnClick: true,
    ignoreAttributes: false,
    interactive: false,
    interactiveBorder: 2,
    interactiveDebounce: 0,
    moveTransition: '',
    offset: [0, 10],
    onAfterUpdate: function onAfterUpdate() {},
    onBeforeUpdate: function onBeforeUpdate() {},
    onCreate: function onCreate() {},
    onDestroy: function onDestroy() {},
    onHidden: function onHidden() {},
    onHide: function onHide() {},
    onMount: function onMount() {},
    onShow: function onShow() {},
    onShown: function onShown() {},
    onTrigger: function onTrigger() {},
    onUntrigger: function onUntrigger() {},
    onClickOutside: function onClickOutside() {},
    placement: 'top',
    plugins: [],
    popperOptions: {},
    render: null,
    showOnCreate: false,
    touch: true,
    trigger: 'mouseenter focus',
    triggerTarget: null
  }, pluginProps, renderProps);
  var defaultKeys = Object.keys(defaultProps);
  var setDefaultProps = function setDefaultProps(partialProps) {
    /* istanbul ignore else */
    {
      validateProps(partialProps, []);
    }

    var keys = Object.keys(partialProps);
    keys.forEach(function (key) {
      defaultProps[key] = partialProps[key];
    });
  };
  function getExtendedPassedProps(passedProps) {
    var plugins = passedProps.plugins || [];
    var pluginProps = plugins.reduce(function (acc, plugin) {
      var name = plugin.name,
          defaultValue = plugin.defaultValue;

      if (name) {
        var _name;

        acc[name] = passedProps[name] !== undefined ? passedProps[name] : (_name = defaultProps[name]) != null ? _name : defaultValue;
      }

      return acc;
    }, {});
    return Object.assign({}, passedProps, pluginProps);
  }
  function getDataAttributeProps(reference, plugins) {
    var propKeys = plugins ? Object.keys(getExtendedPassedProps(Object.assign({}, defaultProps, {
      plugins: plugins
    }))) : defaultKeys;
    var props = propKeys.reduce(function (acc, key) {
      var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

      if (!valueAsString) {
        return acc;
      }

      if (key === 'content') {
        acc[key] = valueAsString;
      } else {
        try {
          acc[key] = JSON.parse(valueAsString);
        } catch (e) {
          acc[key] = valueAsString;
        }
      }

      return acc;
    }, {});
    return props;
  }
  function evaluateProps(reference, props) {
    var out = Object.assign({}, props, {
      content: invokeWithArgsOrReturn(props.content, [reference])
    }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));
    out.aria = Object.assign({}, defaultProps.aria, out.aria);
    out.aria = {
      expanded: out.aria.expanded === 'auto' ? props.interactive : out.aria.expanded,
      content: out.aria.content === 'auto' ? props.interactive ? null : 'describedby' : out.aria.content
    };
    return out;
  }
  function validateProps(partialProps, plugins) {
    if (partialProps === void 0) {
      partialProps = {};
    }

    if (plugins === void 0) {
      plugins = [];
    }

    var keys = Object.keys(partialProps);
    keys.forEach(function (prop) {
      var nonPluginProps = removeProperties(defaultProps, Object.keys(pluginProps));
      var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop); // Check if the prop exists in `plugins`

      if (didPassUnknownProp) {
        didPassUnknownProp = plugins.filter(function (plugin) {
          return plugin.name === prop;
        }).length === 0;
      }

      warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", 'a plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'All props: https://atomiks.github.io/tippyjs/v6/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/v6/plugins/'].join(' '));
    });
  }

  var innerHTML = function innerHTML() {
    return 'innerHTML';
  };

  function dangerouslySetInnerHTML(element, html) {
    element[innerHTML()] = html;
  }

  function createArrowElement(value) {
    var arrow = div();

    if (value === true) {
      arrow.className = ARROW_CLASS;
    } else {
      arrow.className = SVG_ARROW_CLASS;

      if (isElement(value)) {
        arrow.appendChild(value);
      } else {
        dangerouslySetInnerHTML(arrow, value);
      }
    }

    return arrow;
  }

  function setContent(content, props) {
    if (isElement(props.content)) {
      dangerouslySetInnerHTML(content, '');
      content.appendChild(props.content);
    } else if (typeof props.content !== 'function') {
      if (props.allowHTML) {
        dangerouslySetInnerHTML(content, props.content);
      } else {
        content.textContent = props.content;
      }
    }
  }
  function getChildren(popper) {
    var box = popper.firstElementChild;
    var boxChildren = arrayFrom(box.children);
    return {
      box: box,
      content: boxChildren.find(function (node) {
        return node.classList.contains(CONTENT_CLASS);
      }),
      arrow: boxChildren.find(function (node) {
        return node.classList.contains(ARROW_CLASS) || node.classList.contains(SVG_ARROW_CLASS);
      }),
      backdrop: boxChildren.find(function (node) {
        return node.classList.contains(BACKDROP_CLASS);
      })
    };
  }
  function render(instance) {
    var popper = div();
    var box = div();
    box.className = BOX_CLASS;
    box.setAttribute('data-state', 'hidden');
    box.setAttribute('tabindex', '-1');
    var content = div();
    content.className = CONTENT_CLASS;
    content.setAttribute('data-state', 'hidden');
    setContent(content, instance.props);
    popper.appendChild(box);
    box.appendChild(content);
    onUpdate(instance.props, instance.props);

    function onUpdate(prevProps, nextProps) {
      var _getChildren = getChildren(popper),
          box = _getChildren.box,
          content = _getChildren.content,
          arrow = _getChildren.arrow;

      if (nextProps.theme) {
        box.setAttribute('data-theme', nextProps.theme);
      } else {
        box.removeAttribute('data-theme');
      }

      if (typeof nextProps.animation === 'string') {
        box.setAttribute('data-animation', nextProps.animation);
      } else {
        box.removeAttribute('data-animation');
      }

      if (nextProps.inertia) {
        box.setAttribute('data-inertia', '');
      } else {
        box.removeAttribute('data-inertia');
      }

      box.style.maxWidth = typeof nextProps.maxWidth === 'number' ? nextProps.maxWidth + "px" : nextProps.maxWidth;

      if (nextProps.role) {
        box.setAttribute('role', nextProps.role);
      } else {
        box.removeAttribute('role');
      }

      if (prevProps.content !== nextProps.content || prevProps.allowHTML !== nextProps.allowHTML) {
        setContent(content, instance.props);
      }

      if (nextProps.arrow) {
        if (!arrow) {
          box.appendChild(createArrowElement(nextProps.arrow));
        } else if (prevProps.arrow !== nextProps.arrow) {
          box.removeChild(arrow);
          box.appendChild(createArrowElement(nextProps.arrow));
        }
      } else if (arrow) {
        box.removeChild(arrow);
      }
    }

    return {
      popper: popper,
      onUpdate: onUpdate
    };
  } // Runtime check to identify if the render function is the default one; this
  // way we can apply default CSS transitions logic and it can be tree-shaken away

  render.$$tippy = true;

  var idCounter = 1;
  var mouseMoveListeners = []; // Used by `hideAll()`

  var mountedInstances = [];
  function createTippy(reference, passedProps) {
    var props = evaluateProps(reference, Object.assign({}, defaultProps, getExtendedPassedProps(removeUndefinedProps(passedProps)))); // ===========================================================================
    // 🔒 Private members
    // ===========================================================================

    var showTimeout;
    var hideTimeout;
    var scheduleHideAnimationFrame;
    var isVisibleFromClick = false;
    var didHideDueToDocumentMouseDown = false;
    var didTouchMove = false;
    var ignoreOnFirstUpdate = false;
    var lastTriggerEvent;
    var currentTransitionEndListener;
    var onFirstUpdate;
    var listeners = [];
    var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
    var currentTarget; // ===========================================================================
    // 🔑 Public members
    // ===========================================================================

    var id = idCounter++;
    var popperInstance = null;
    var plugins = unique(props.plugins);
    var state = {
      // Is the instance currently enabled?
      isEnabled: true,
      // Is the tippy currently showing and not transitioning out?
      isVisible: false,
      // Has the instance been destroyed?
      isDestroyed: false,
      // Is the tippy currently mounted to the DOM?
      isMounted: false,
      // Has the tippy finished transitioning in?
      isShown: false
    };
    var instance = {
      // properties
      id: id,
      reference: reference,
      popper: div(),
      popperInstance: popperInstance,
      props: props,
      state: state,
      plugins: plugins,
      // methods
      clearDelayTimeouts: clearDelayTimeouts,
      setProps: setProps,
      setContent: setContent,
      show: show,
      hide: hide,
      hideWithInteractivity: hideWithInteractivity,
      enable: enable,
      disable: disable,
      unmount: unmount,
      destroy: destroy
    }; // TODO: Investigate why this early return causes a TDZ error in the tests —
    // it doesn't seem to happen in the browser

    /* istanbul ignore if */

    if (!props.render) {
      {
        errorWhen(true, 'render() function has not been supplied.');
      }

      return instance;
    } // ===========================================================================
    // Initial mutations
    // ===========================================================================


    var _props$render = props.render(instance),
        popper = _props$render.popper,
        onUpdate = _props$render.onUpdate;

    popper.setAttribute('data-tippy-root', '');
    popper.id = "tippy-" + instance.id;
    instance.popper = popper;
    reference._tippy = instance;
    popper._tippy = instance;
    var pluginsHooks = plugins.map(function (plugin) {
      return plugin.fn(instance);
    });
    var hasAriaExpanded = reference.hasAttribute('aria-expanded');
    addListeners();
    handleAriaExpandedAttribute();
    handleStyles();
    invokeHook('onCreate', [instance]);

    if (props.showOnCreate) {
      scheduleShow();
    } // Prevent a tippy with a delay from hiding if the cursor left then returned
    // before it started hiding


    popper.addEventListener('mouseenter', function () {
      if (instance.props.interactive && instance.state.isVisible) {
        instance.clearDelayTimeouts();
      }
    });
    popper.addEventListener('mouseleave', function () {
      if (instance.props.interactive && instance.props.trigger.indexOf('mouseenter') >= 0) {
        getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      }
    });
    return instance; // ===========================================================================
    // 🔒 Private methods
    // ===========================================================================

    function getNormalizedTouchSettings() {
      var touch = instance.props.touch;
      return Array.isArray(touch) ? touch : [touch, 0];
    }

    function getIsCustomTouchBehavior() {
      return getNormalizedTouchSettings()[0] === 'hold';
    }

    function getIsDefaultRenderFn() {
      var _instance$props$rende;

      // @ts-ignore
      return !!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy);
    }

    function getCurrentTarget() {
      return currentTarget || reference;
    }

    function getDocument() {
      var parent = getCurrentTarget().parentNode;
      return parent ? getOwnerDocument(parent) : document;
    }

    function getDefaultTemplateChildren() {
      return getChildren(popper);
    }

    function getDelay(isShow) {
      // For touch or keyboard input, force `0` delay for UX reasons
      // Also if the instance is mounted but not visible (transitioning out),
      // ignore delay
      if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
        return 0;
      }

      return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
    }

    function handleStyles(fromHide) {
      if (fromHide === void 0) {
        fromHide = false;
      }

      popper.style.pointerEvents = instance.props.interactive && !fromHide ? '' : 'none';
      popper.style.zIndex = "" + instance.props.zIndex;
    }

    function invokeHook(hook, args, shouldInvokePropsHook) {
      if (shouldInvokePropsHook === void 0) {
        shouldInvokePropsHook = true;
      }

      pluginsHooks.forEach(function (pluginHooks) {
        if (pluginHooks[hook]) {
          pluginHooks[hook].apply(pluginHooks, args);
        }
      });

      if (shouldInvokePropsHook) {
        var _instance$props;

        (_instance$props = instance.props)[hook].apply(_instance$props, args);
      }
    }

    function handleAriaContentAttribute() {
      var aria = instance.props.aria;

      if (!aria.content) {
        return;
      }

      var attr = "aria-" + aria.content;
      var id = popper.id;
      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        var currentValue = node.getAttribute(attr);

        if (instance.state.isVisible) {
          node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
        } else {
          var nextValue = currentValue && currentValue.replace(id, '').trim();

          if (nextValue) {
            node.setAttribute(attr, nextValue);
          } else {
            node.removeAttribute(attr);
          }
        }
      });
    }

    function handleAriaExpandedAttribute() {
      if (hasAriaExpanded || !instance.props.aria.expanded) {
        return;
      }

      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        if (instance.props.interactive) {
          node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
        } else {
          node.removeAttribute('aria-expanded');
        }
      });
    }

    function cleanupInteractiveMouseListeners() {
      getDocument().removeEventListener('mousemove', debouncedOnMouseMove);
      mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
        return listener !== debouncedOnMouseMove;
      });
    }

    function onDocumentPress(event) {
      // Moved finger to scroll instead of an intentional tap outside
      if (currentInput.isTouch) {
        if (didTouchMove || event.type === 'mousedown') {
          return;
        }
      }

      var actualTarget = event.composedPath && event.composedPath()[0] || event.target; // Clicked on interactive popper

      if (instance.props.interactive && actualContains(popper, actualTarget)) {
        return;
      } // Clicked on the event listeners target


      if (normalizeToArray(instance.props.triggerTarget || reference).some(function (el) {
        return actualContains(el, actualTarget);
      })) {
        if (currentInput.isTouch) {
          return;
        }

        if (instance.state.isVisible && instance.props.trigger.indexOf('click') >= 0) {
          return;
        }
      } else {
        invokeHook('onClickOutside', [instance, event]);
      }

      if (instance.props.hideOnClick === true) {
        instance.clearDelayTimeouts();
        instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
        // currentTarget. This lets a tippy with `focus` trigger know that it
        // should not show

        didHideDueToDocumentMouseDown = true;
        setTimeout(function () {
          didHideDueToDocumentMouseDown = false;
        }); // The listener gets added in `scheduleShow()`, but this may be hiding it
        // before it shows, and hide()'s early bail-out behavior can prevent it
        // from being cleaned up

        if (!instance.state.isMounted) {
          removeDocumentPress();
        }
      }
    }

    function onTouchMove() {
      didTouchMove = true;
    }

    function onTouchStart() {
      didTouchMove = false;
    }

    function addDocumentPress() {
      var doc = getDocument();
      doc.addEventListener('mousedown', onDocumentPress, true);
      doc.addEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
      doc.addEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
      doc.addEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }

    function removeDocumentPress() {
      var doc = getDocument();
      doc.removeEventListener('mousedown', onDocumentPress, true);
      doc.removeEventListener('touchend', onDocumentPress, TOUCH_OPTIONS);
      doc.removeEventListener('touchstart', onTouchStart, TOUCH_OPTIONS);
      doc.removeEventListener('touchmove', onTouchMove, TOUCH_OPTIONS);
    }

    function onTransitionedOut(duration, callback) {
      onTransitionEnd(duration, function () {
        if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
          callback();
        }
      });
    }

    function onTransitionedIn(duration, callback) {
      onTransitionEnd(duration, callback);
    }

    function onTransitionEnd(duration, callback) {
      var box = getDefaultTemplateChildren().box;

      function listener(event) {
        if (event.target === box) {
          updateTransitionEndListener(box, 'remove', listener);
          callback();
        }
      } // Make callback synchronous if duration is 0
      // `transitionend` won't fire otherwise


      if (duration === 0) {
        return callback();
      }

      updateTransitionEndListener(box, 'remove', currentTransitionEndListener);
      updateTransitionEndListener(box, 'add', listener);
      currentTransitionEndListener = listener;
    }

    function on(eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }

      var nodes = normalizeToArray(instance.props.triggerTarget || reference);
      nodes.forEach(function (node) {
        node.addEventListener(eventType, handler, options);
        listeners.push({
          node: node,
          eventType: eventType,
          handler: handler,
          options: options
        });
      });
    }

    function addListeners() {
      if (getIsCustomTouchBehavior()) {
        on('touchstart', onTrigger, {
          passive: true
        });
        on('touchend', onMouseLeave, {
          passive: true
        });
      }

      splitBySpaces(instance.props.trigger).forEach(function (eventType) {
        if (eventType === 'manual') {
          return;
        }

        on(eventType, onTrigger);

        switch (eventType) {
          case 'mouseenter':
            on('mouseleave', onMouseLeave);
            break;

          case 'focus':
            on(isIE11 ? 'focusout' : 'blur', onBlurOrFocusOut);
            break;

          case 'focusin':
            on('focusout', onBlurOrFocusOut);
            break;
        }
      });
    }

    function removeListeners() {
      listeners.forEach(function (_ref) {
        var node = _ref.node,
            eventType = _ref.eventType,
            handler = _ref.handler,
            options = _ref.options;
        node.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }

    function onTrigger(event) {
      var _lastTriggerEvent;

      var shouldScheduleClickHide = false;

      if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
        return;
      }

      var wasFocused = ((_lastTriggerEvent = lastTriggerEvent) == null ? void 0 : _lastTriggerEvent.type) === 'focus';
      lastTriggerEvent = event;
      currentTarget = event.currentTarget;
      handleAriaExpandedAttribute();

      if (!instance.state.isVisible && isMouseEvent(event)) {
        // If scrolling, `mouseenter` events can be fired if the cursor lands
        // over a new target, but `mousemove` events don't get fired. This
        // causes interactive tooltips to get stuck open until the cursor is
        // moved
        mouseMoveListeners.forEach(function (listener) {
          return listener(event);
        });
      } // Toggle show/hide when clicking click-triggered tooltips


      if (event.type === 'click' && (instance.props.trigger.indexOf('mouseenter') < 0 || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
        shouldScheduleClickHide = true;
      } else {
        scheduleShow(event);
      }

      if (event.type === 'click') {
        isVisibleFromClick = !shouldScheduleClickHide;
      }

      if (shouldScheduleClickHide && !wasFocused) {
        scheduleHide(event);
      }
    }

    function onMouseMove(event) {
      var target = event.target;
      var isCursorOverReferenceOrPopper = getCurrentTarget().contains(target) || popper.contains(target);

      if (event.type === 'mousemove' && isCursorOverReferenceOrPopper) {
        return;
      }

      var popperTreeData = getNestedPopperTree().concat(popper).map(function (popper) {
        var _instance$popperInsta;

        var instance = popper._tippy;
        var state = (_instance$popperInsta = instance.popperInstance) == null ? void 0 : _instance$popperInsta.state;

        if (state) {
          return {
            popperRect: popper.getBoundingClientRect(),
            popperState: state,
            props: props
          };
        }

        return null;
      }).filter(Boolean);

      if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
        cleanupInteractiveMouseListeners();
        scheduleHide(event);
      }
    }

    function onMouseLeave(event) {
      var shouldBail = isEventListenerStopped(event) || instance.props.trigger.indexOf('click') >= 0 && isVisibleFromClick;

      if (shouldBail) {
        return;
      }

      if (instance.props.interactive) {
        instance.hideWithInteractivity(event);
        return;
      }

      scheduleHide(event);
    }

    function onBlurOrFocusOut(event) {
      if (instance.props.trigger.indexOf('focusin') < 0 && event.target !== getCurrentTarget()) {
        return;
      } // If focus was moved to within the popper


      if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
        return;
      }

      scheduleHide(event);
    }

    function isEventListenerStopped(event) {
      return currentInput.isTouch ? getIsCustomTouchBehavior() !== event.type.indexOf('touch') >= 0 : false;
    }

    function createPopperInstance() {
      destroyPopperInstance();
      var _instance$props2 = instance.props,
          popperOptions = _instance$props2.popperOptions,
          placement = _instance$props2.placement,
          offset = _instance$props2.offset,
          getReferenceClientRect = _instance$props2.getReferenceClientRect,
          moveTransition = _instance$props2.moveTransition;
      var arrow = getIsDefaultRenderFn() ? getChildren(popper).arrow : null;
      var computedReference = getReferenceClientRect ? {
        getBoundingClientRect: getReferenceClientRect,
        contextElement: getReferenceClientRect.contextElement || getCurrentTarget()
      } : reference;
      var tippyModifier = {
        name: '$$tippy',
        enabled: true,
        phase: 'beforeWrite',
        requires: ['computeStyles'],
        fn: function fn(_ref2) {
          var state = _ref2.state;

          if (getIsDefaultRenderFn()) {
            var _getDefaultTemplateCh = getDefaultTemplateChildren(),
                box = _getDefaultTemplateCh.box;

            ['placement', 'reference-hidden', 'escaped'].forEach(function (attr) {
              if (attr === 'placement') {
                box.setAttribute('data-placement', state.placement);
              } else {
                if (state.attributes.popper["data-popper-" + attr]) {
                  box.setAttribute("data-" + attr, '');
                } else {
                  box.removeAttribute("data-" + attr);
                }
              }
            });
            state.attributes.popper = {};
          }
        }
      };
      var modifiers = [{
        name: 'offset',
        options: {
          offset: offset
        }
      }, {
        name: 'preventOverflow',
        options: {
          padding: {
            top: 2,
            bottom: 2,
            left: 5,
            right: 5
          }
        }
      }, {
        name: 'flip',
        options: {
          padding: 5
        }
      }, {
        name: 'computeStyles',
        options: {
          adaptive: !moveTransition
        }
      }, tippyModifier];

      if (getIsDefaultRenderFn() && arrow) {
        modifiers.push({
          name: 'arrow',
          options: {
            element: arrow,
            padding: 3
          }
        });
      }

      modifiers.push.apply(modifiers, (popperOptions == null ? void 0 : popperOptions.modifiers) || []);
      instance.popperInstance = core.createPopper(computedReference, popper, Object.assign({}, popperOptions, {
        placement: placement,
        onFirstUpdate: onFirstUpdate,
        modifiers: modifiers
      }));
    }

    function destroyPopperInstance() {
      if (instance.popperInstance) {
        instance.popperInstance.destroy();
        instance.popperInstance = null;
      }
    }

    function mount() {
      var appendTo = instance.props.appendTo;
      var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
      // it's directly after the reference element so the elements inside the
      // tippy can be tabbed to
      // If there are clipping issues, the user can specify a different appendTo
      // and ensure focus management is handled correctly manually

      var node = getCurrentTarget();

      if (instance.props.interactive && appendTo === TIPPY_DEFAULT_APPEND_TO || appendTo === 'parent') {
        parentNode = node.parentNode;
      } else {
        parentNode = invokeWithArgsOrReturn(appendTo, [node]);
      } // The popper element needs to exist on the DOM before its position can be
      // updated as Popper needs to read its dimensions


      if (!parentNode.contains(popper)) {
        parentNode.appendChild(popper);
      }

      instance.state.isMounted = true;
      createPopperInstance();
      /* istanbul ignore else */

      {
        // Accessibility check
        warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard', 'navigation because it is not directly after the reference element', 'in the DOM source order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element', 'solves this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle', 'keyboard navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity'].join(' '));
      }
    }

    function getNestedPopperTree() {
      return arrayFrom(popper.querySelectorAll('[data-tippy-root]'));
    }

    function scheduleShow(event) {
      instance.clearDelayTimeouts();

      if (event) {
        invokeHook('onTrigger', [instance, event]);
      }

      addDocumentPress();
      var delay = getDelay(true);

      var _getNormalizedTouchSe = getNormalizedTouchSettings(),
          touchValue = _getNormalizedTouchSe[0],
          touchDelay = _getNormalizedTouchSe[1];

      if (currentInput.isTouch && touchValue === 'hold' && touchDelay) {
        delay = touchDelay;
      }

      if (delay) {
        showTimeout = setTimeout(function () {
          instance.show();
        }, delay);
      } else {
        instance.show();
      }
    }

    function scheduleHide(event) {
      instance.clearDelayTimeouts();
      invokeHook('onUntrigger', [instance, event]);

      if (!instance.state.isVisible) {
        removeDocumentPress();
        return;
      } // For interactive tippies, scheduleHide is added to a document.body handler
      // from onMouseLeave so must intercept scheduled hides from mousemove/leave
      // events when trigger contains mouseenter and click, and the tip is
      // currently shown as a result of a click.


      if (instance.props.trigger.indexOf('mouseenter') >= 0 && instance.props.trigger.indexOf('click') >= 0 && ['mouseleave', 'mousemove'].indexOf(event.type) >= 0 && isVisibleFromClick) {
        return;
      }

      var delay = getDelay(false);

      if (delay) {
        hideTimeout = setTimeout(function () {
          if (instance.state.isVisible) {
            instance.hide();
          }
        }, delay);
      } else {
        // Fixes a `transitionend` problem when it fires 1 frame too
        // late sometimes, we don't want hide() to be called.
        scheduleHideAnimationFrame = requestAnimationFrame(function () {
          instance.hide();
        });
      }
    } // ===========================================================================
    // 🔑 Public methods
    // ===========================================================================


    function enable() {
      instance.state.isEnabled = true;
    }

    function disable() {
      // Disabling the instance should also hide it
      // https://github.com/atomiks/tippy.js-react/issues/106
      instance.hide();
      instance.state.isEnabled = false;
    }

    function clearDelayTimeouts() {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      cancelAnimationFrame(scheduleHideAnimationFrame);
    }

    function setProps(partialProps) {
      /* istanbul ignore else */
      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
      }

      if (instance.state.isDestroyed) {
        return;
      }

      invokeHook('onBeforeUpdate', [instance, partialProps]);
      removeListeners();
      var prevProps = instance.props;
      var nextProps = evaluateProps(reference, Object.assign({}, prevProps, removeUndefinedProps(partialProps), {
        ignoreAttributes: true
      }));
      instance.props = nextProps;
      addListeners();

      if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
        cleanupInteractiveMouseListeners();
        debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
      } // Ensure stale aria-expanded attributes are removed


      if (prevProps.triggerTarget && !nextProps.triggerTarget) {
        normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
          node.removeAttribute('aria-expanded');
        });
      } else if (nextProps.triggerTarget) {
        reference.removeAttribute('aria-expanded');
      }

      handleAriaExpandedAttribute();
      handleStyles();

      if (onUpdate) {
        onUpdate(prevProps, nextProps);
      }

      if (instance.popperInstance) {
        createPopperInstance(); // Fixes an issue with nested tippies if they are all getting re-rendered,
        // and the nested ones get re-rendered first.
        // https://github.com/atomiks/tippyjs-react/issues/177
        // TODO: find a cleaner / more efficient solution(!)

        getNestedPopperTree().forEach(function (nestedPopper) {
          // React (and other UI libs likely) requires a rAF wrapper as it flushes
          // its work in one
          requestAnimationFrame(nestedPopper._tippy.popperInstance.forceUpdate);
        });
      }

      invokeHook('onAfterUpdate', [instance, partialProps]);
    }

    function setContent(content) {
      instance.setProps({
        content: content
      });
    }

    function show() {
      /* istanbul ignore else */
      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
      } // Early bail-out


      var isAlreadyVisible = instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);

      if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
        return;
      } // Normalize `disabled` behavior across browsers.
      // Firefox allows events on disabled elements, but Chrome doesn't.
      // Using a wrapper element (i.e. <span>) is recommended.


      if (getCurrentTarget().hasAttribute('disabled')) {
        return;
      }

      invokeHook('onShow', [instance], false);

      if (instance.props.onShow(instance) === false) {
        return;
      }

      instance.state.isVisible = true;

      if (getIsDefaultRenderFn()) {
        popper.style.visibility = 'visible';
      }

      handleStyles();
      addDocumentPress();

      if (!instance.state.isMounted) {
        popper.style.transition = 'none';
      } // If flipping to the opposite side after hiding at least once, the
      // animation will use the wrong placement without resetting the duration


      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh2 = getDefaultTemplateChildren(),
            box = _getDefaultTemplateCh2.box,
            content = _getDefaultTemplateCh2.content;

        setTransitionDuration([box, content], 0);
      }

      onFirstUpdate = function onFirstUpdate() {
        var _instance$popperInsta2;

        if (!instance.state.isVisible || ignoreOnFirstUpdate) {
          return;
        }

        ignoreOnFirstUpdate = true; // reflow

        void popper.offsetHeight;
        popper.style.transition = instance.props.moveTransition;

        if (getIsDefaultRenderFn() && instance.props.animation) {
          var _getDefaultTemplateCh3 = getDefaultTemplateChildren(),
              _box = _getDefaultTemplateCh3.box,
              _content = _getDefaultTemplateCh3.content;

          setTransitionDuration([_box, _content], duration);
          setVisibilityState([_box, _content], 'visible');
        }

        handleAriaContentAttribute();
        handleAriaExpandedAttribute();
        pushIfUnique(mountedInstances, instance); // certain modifiers (e.g. `maxSize`) require a second update after the
        // popper has been positioned for the first time

        (_instance$popperInsta2 = instance.popperInstance) == null ? void 0 : _instance$popperInsta2.forceUpdate();
        invokeHook('onMount', [instance]);

        if (instance.props.animation && getIsDefaultRenderFn()) {
          onTransitionedIn(duration, function () {
            instance.state.isShown = true;
            invokeHook('onShown', [instance]);
          });
        }
      };

      mount();
    }

    function hide() {
      /* istanbul ignore else */
      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
      } // Early bail-out


      var isAlreadyHidden = !instance.state.isVisible;
      var isDestroyed = instance.state.isDestroyed;
      var isDisabled = !instance.state.isEnabled;
      var duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);

      if (isAlreadyHidden || isDestroyed || isDisabled) {
        return;
      }

      invokeHook('onHide', [instance], false);

      if (instance.props.onHide(instance) === false) {
        return;
      }

      instance.state.isVisible = false;
      instance.state.isShown = false;
      ignoreOnFirstUpdate = false;
      isVisibleFromClick = false;

      if (getIsDefaultRenderFn()) {
        popper.style.visibility = 'hidden';
      }

      cleanupInteractiveMouseListeners();
      removeDocumentPress();
      handleStyles(true);

      if (getIsDefaultRenderFn()) {
        var _getDefaultTemplateCh4 = getDefaultTemplateChildren(),
            box = _getDefaultTemplateCh4.box,
            content = _getDefaultTemplateCh4.content;

        if (instance.props.animation) {
          setTransitionDuration([box, content], duration);
          setVisibilityState([box, content], 'hidden');
        }
      }

      handleAriaContentAttribute();
      handleAriaExpandedAttribute();

      if (instance.props.animation) {
        if (getIsDefaultRenderFn()) {
          onTransitionedOut(duration, instance.unmount);
        }
      } else {
        instance.unmount();
      }
    }

    function hideWithInteractivity(event) {
      /* istanbul ignore else */
      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hideWithInteractivity'));
      }

      getDocument().addEventListener('mousemove', debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
      debouncedOnMouseMove(event);
    }

    function unmount() {
      /* istanbul ignore else */
      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('unmount'));
      }

      if (instance.state.isVisible) {
        instance.hide();
      }

      if (!instance.state.isMounted) {
        return;
      }

      destroyPopperInstance(); // If a popper is not interactive, it will be appended outside the popper
      // tree by default. This seems mainly for interactive tippies, but we should
      // find a workaround if possible

      getNestedPopperTree().forEach(function (nestedPopper) {
        nestedPopper._tippy.unmount();
      });

      if (popper.parentNode) {
        popper.parentNode.removeChild(popper);
      }

      mountedInstances = mountedInstances.filter(function (i) {
        return i !== instance;
      });
      instance.state.isMounted = false;
      invokeHook('onHidden', [instance]);
    }

    function destroy() {
      /* istanbul ignore else */
      {
        warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
      }

      if (instance.state.isDestroyed) {
        return;
      }

      instance.clearDelayTimeouts();
      instance.unmount();
      removeListeners();
      delete reference._tippy;
      instance.state.isDestroyed = true;
      invokeHook('onDestroy', [instance]);
    }
  }

  function tippy(targets, optionalProps) {
    if (optionalProps === void 0) {
      optionalProps = {};
    }

    var plugins = defaultProps.plugins.concat(optionalProps.plugins || []);
    /* istanbul ignore else */

    {
      validateTargets(targets);
      validateProps(optionalProps, plugins);
    }

    bindGlobalEventListeners();
    var passedProps = Object.assign({}, optionalProps, {
      plugins: plugins
    });
    var elements = getArrayOfElements(targets);
    /* istanbul ignore else */

    {
      var isSingleContentElement = isElement(passedProps.content);
      var isMoreThanOneReferenceElement = elements.length > 1;
      warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than', 'one tippy instance was created by this invocation. This means the', 'content element will only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that', 'returns a cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
    }

    var instances = elements.reduce(function (acc, reference) {
      var instance = reference && createTippy(reference, passedProps);

      if (instance) {
        acc.push(instance);
      }

      return acc;
    }, []);
    return isElement(targets) ? instances[0] : instances;
  }

  tippy.defaultProps = defaultProps;
  tippy.setDefaultProps = setDefaultProps;
  tippy.currentInput = currentInput;
  var hideAll = function hideAll(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        excludedReferenceOrInstance = _ref.exclude,
        duration = _ref.duration;

    mountedInstances.forEach(function (instance) {
      var isExcluded = false;

      if (excludedReferenceOrInstance) {
        isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
      }

      if (!isExcluded) {
        var originalDuration = instance.props.duration;
        instance.setProps({
          duration: duration
        });
        instance.hide();

        if (!instance.state.isDestroyed) {
          instance.setProps({
            duration: originalDuration
          });
        }
      }
    });
  };

  // every time the popper is destroyed (i.e. a new target), removing the styles
  // and causing transitions to break for singletons when the console is open, but
  // most notably for non-transform styles being used, `gpuAcceleration: false`.

  var applyStylesModifier = Object.assign({}, core.applyStyles, {
    effect: function effect(_ref) {
      var state = _ref.state;
      var initialStyles = {
        popper: {
          position: state.options.strategy,
          left: '0',
          top: '0',
          margin: '0'
        },
        arrow: {
          position: 'absolute'
        },
        reference: {}
      };
      Object.assign(state.elements.popper.style, initialStyles.popper);
      state.styles = initialStyles;

      if (state.elements.arrow) {
        Object.assign(state.elements.arrow.style, initialStyles.arrow);
      } // intentionally return no cleanup function
      // return () => { ... }

    }
  });

  var createSingleton = function createSingleton(tippyInstances, optionalProps) {
    var _optionalProps$popper;

    if (optionalProps === void 0) {
      optionalProps = {};
    }

    /* istanbul ignore else */
    {
      errorWhen(!Array.isArray(tippyInstances), ['The first argument passed to createSingleton() must be an array of', 'tippy instances. The passed value was', String(tippyInstances)].join(' '));
    }

    var individualInstances = tippyInstances;
    var references = [];
    var triggerTargets = [];
    var currentTarget;
    var overrides = optionalProps.overrides;
    var interceptSetPropsCleanups = [];
    var shownOnCreate = false;

    function setTriggerTargets() {
      triggerTargets = individualInstances.map(function (instance) {
        return normalizeToArray(instance.props.triggerTarget || instance.reference);
      }).reduce(function (acc, item) {
        return acc.concat(item);
      }, []);
    }

    function setReferences() {
      references = individualInstances.map(function (instance) {
        return instance.reference;
      });
    }

    function enableInstances(isEnabled) {
      individualInstances.forEach(function (instance) {
        if (isEnabled) {
          instance.enable();
        } else {
          instance.disable();
        }
      });
    }

    function interceptSetProps(singleton) {
      return individualInstances.map(function (instance) {
        var originalSetProps = instance.setProps;

        instance.setProps = function (props) {
          originalSetProps(props);

          if (instance.reference === currentTarget) {
            singleton.setProps(props);
          }
        };

        return function () {
          instance.setProps = originalSetProps;
        };
      });
    } // have to pass singleton, as it maybe undefined on first call


    function prepareInstance(singleton, target) {
      var index = triggerTargets.indexOf(target); // bail-out

      if (target === currentTarget) {
        return;
      }

      currentTarget = target;
      var overrideProps = (overrides || []).concat('content').reduce(function (acc, prop) {
        acc[prop] = individualInstances[index].props[prop];
        return acc;
      }, {});
      singleton.setProps(Object.assign({}, overrideProps, {
        getReferenceClientRect: typeof overrideProps.getReferenceClientRect === 'function' ? overrideProps.getReferenceClientRect : function () {
          var _references$index;

          return (_references$index = references[index]) == null ? void 0 : _references$index.getBoundingClientRect();
        }
      }));
    }

    enableInstances(false);
    setReferences();
    setTriggerTargets();
    var plugin = {
      fn: function fn() {
        return {
          onDestroy: function onDestroy() {
            enableInstances(true);
          },
          onHidden: function onHidden() {
            currentTarget = null;
          },
          onClickOutside: function onClickOutside(instance) {
            if (instance.props.showOnCreate && !shownOnCreate) {
              shownOnCreate = true;
              currentTarget = null;
            }
          },
          onShow: function onShow(instance) {
            if (instance.props.showOnCreate && !shownOnCreate) {
              shownOnCreate = true;
              prepareInstance(instance, references[0]);
            }
          },
          onTrigger: function onTrigger(instance, event) {
            prepareInstance(instance, event.currentTarget);
          }
        };
      }
    };
    var singleton = tippy(div(), Object.assign({}, removeProperties(optionalProps, ['overrides']), {
      plugins: [plugin].concat(optionalProps.plugins || []),
      triggerTarget: triggerTargets,
      popperOptions: Object.assign({}, optionalProps.popperOptions, {
        modifiers: [].concat(((_optionalProps$popper = optionalProps.popperOptions) == null ? void 0 : _optionalProps$popper.modifiers) || [], [applyStylesModifier])
      })
    }));
    var originalShow = singleton.show;

    singleton.show = function (target) {
      originalShow(); // first time, showOnCreate or programmatic call with no params
      // default to showing first instance

      if (!currentTarget && target == null) {
        return prepareInstance(singleton, references[0]);
      } // triggered from event (do nothing as prepareInstance already called by onTrigger)
      // programmatic call with no params when already visible (do nothing again)


      if (currentTarget && target == null) {
        return;
      } // target is index of instance


      if (typeof target === 'number') {
        return references[target] && prepareInstance(singleton, references[target]);
      } // target is a child tippy instance


      if (individualInstances.indexOf(target) >= 0) {
        var ref = target.reference;
        return prepareInstance(singleton, ref);
      } // target is a ReferenceElement


      if (references.indexOf(target) >= 0) {
        return prepareInstance(singleton, target);
      }
    };

    singleton.showNext = function () {
      var first = references[0];

      if (!currentTarget) {
        return singleton.show(0);
      }

      var index = references.indexOf(currentTarget);
      singleton.show(references[index + 1] || first);
    };

    singleton.showPrevious = function () {
      var last = references[references.length - 1];

      if (!currentTarget) {
        return singleton.show(last);
      }

      var index = references.indexOf(currentTarget);
      var target = references[index - 1] || last;
      singleton.show(target);
    };

    var originalSetProps = singleton.setProps;

    singleton.setProps = function (props) {
      overrides = props.overrides || overrides;
      originalSetProps(props);
    };

    singleton.setInstances = function (nextInstances) {
      enableInstances(true);
      interceptSetPropsCleanups.forEach(function (fn) {
        return fn();
      });
      individualInstances = nextInstances;
      enableInstances(false);
      setReferences();
      setTriggerTargets();
      interceptSetPropsCleanups = interceptSetProps(singleton);
      singleton.setProps({
        triggerTarget: triggerTargets
      });
    };

    interceptSetPropsCleanups = interceptSetProps(singleton);
    return singleton;
  };

  var BUBBLING_EVENTS_MAP = {
    mouseover: 'mouseenter',
    focusin: 'focus',
    click: 'click'
  };
  /**
   * Creates a delegate instance that controls the creation of tippy instances
   * for child elements (`target` CSS selector).
   */

  function delegate(targets, props) {
    /* istanbul ignore else */
    {
      errorWhen(!(props && props.target), ['You must specity a `target` prop indicating a CSS selector string matching', 'the target elements that should receive a tippy.'].join(' '));
    }

    var listeners = [];
    var childTippyInstances = [];
    var disabled = false;
    var target = props.target;
    var nativeProps = removeProperties(props, ['target']);
    var parentProps = Object.assign({}, nativeProps, {
      trigger: 'manual',
      touch: false
    });
    var childProps = Object.assign({
      touch: defaultProps.touch
    }, nativeProps, {
      showOnCreate: true
    });
    var returnValue = tippy(targets, parentProps);
    var normalizedReturnValue = normalizeToArray(returnValue);

    function onTrigger(event) {
      if (!event.target || disabled) {
        return;
      }

      var targetNode = event.target.closest(target);

      if (!targetNode) {
        return;
      } // Get relevant trigger with fallbacks:
      // 1. Check `data-tippy-trigger` attribute on target node
      // 2. Fallback to `trigger` passed to `delegate()`
      // 3. Fallback to `defaultProps.trigger`


      var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || defaultProps.trigger; // @ts-ignore

      if (targetNode._tippy) {
        return;
      }

      if (event.type === 'touchstart' && typeof childProps.touch === 'boolean') {
        return;
      }

      if (event.type !== 'touchstart' && trigger.indexOf(BUBBLING_EVENTS_MAP[event.type]) < 0) {
        return;
      }

      var instance = tippy(targetNode, childProps);

      if (instance) {
        childTippyInstances = childTippyInstances.concat(instance);
      }
    }

    function on(node, eventType, handler, options) {
      if (options === void 0) {
        options = false;
      }

      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    }

    function addEventListeners(instance) {
      var reference = instance.reference;
      on(reference, 'touchstart', onTrigger, TOUCH_OPTIONS);
      on(reference, 'mouseover', onTrigger);
      on(reference, 'focusin', onTrigger);
      on(reference, 'click', onTrigger);
    }

    function removeEventListeners() {
      listeners.forEach(function (_ref) {
        var node = _ref.node,
            eventType = _ref.eventType,
            handler = _ref.handler,
            options = _ref.options;
        node.removeEventListener(eventType, handler, options);
      });
      listeners = [];
    }

    function applyMutations(instance) {
      var originalDestroy = instance.destroy;
      var originalEnable = instance.enable;
      var originalDisable = instance.disable;

      instance.destroy = function (shouldDestroyChildInstances) {
        if (shouldDestroyChildInstances === void 0) {
          shouldDestroyChildInstances = true;
        }

        if (shouldDestroyChildInstances) {
          childTippyInstances.forEach(function (instance) {
            instance.destroy();
          });
        }

        childTippyInstances = [];
        removeEventListeners();
        originalDestroy();
      };

      instance.enable = function () {
        originalEnable();
        childTippyInstances.forEach(function (instance) {
          return instance.enable();
        });
        disabled = false;
      };

      instance.disable = function () {
        originalDisable();
        childTippyInstances.forEach(function (instance) {
          return instance.disable();
        });
        disabled = true;
      };

      addEventListeners(instance);
    }

    normalizedReturnValue.forEach(applyMutations);
    return returnValue;
  }

  var animateFill = {
    name: 'animateFill',
    defaultValue: false,
    fn: function fn(instance) {
      var _instance$props$rende;

      // @ts-ignore
      if (!((_instance$props$rende = instance.props.render) != null && _instance$props$rende.$$tippy)) {
        {
          errorWhen(instance.props.animateFill, 'The `animateFill` plugin requires the default render function.');
        }

        return {};
      }

      var _getChildren = getChildren(instance.popper),
          box = _getChildren.box,
          content = _getChildren.content;

      var backdrop = instance.props.animateFill ? createBackdropElement() : null;
      return {
        onCreate: function onCreate() {
          if (backdrop) {
            box.insertBefore(backdrop, box.firstElementChild);
            box.setAttribute('data-animatefill', '');
            box.style.overflow = 'hidden';
            instance.setProps({
              arrow: false,
              animation: 'shift-away'
            });
          }
        },
        onMount: function onMount() {
          if (backdrop) {
            var transitionDuration = box.style.transitionDuration;
            var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
            // tooltip element. `clip-path` is the other alternative but is not
            // well-supported and is buggy on some devices.

            content.style.transitionDelay = Math.round(duration / 10) + "ms";
            backdrop.style.transitionDuration = transitionDuration;
            setVisibilityState([backdrop], 'visible');
          }
        },
        onShow: function onShow() {
          if (backdrop) {
            backdrop.style.transitionDuration = '0ms';
          }
        },
        onHide: function onHide() {
          if (backdrop) {
            setVisibilityState([backdrop], 'hidden');
          }
        }
      };
    }
  };

  function createBackdropElement() {
    var backdrop = div();
    backdrop.className = BACKDROP_CLASS;
    setVisibilityState([backdrop], 'hidden');
    return backdrop;
  }

  var mouseCoords = {
    clientX: 0,
    clientY: 0
  };
  var activeInstances = [];

  function storeMouseCoords(_ref) {
    var clientX = _ref.clientX,
        clientY = _ref.clientY;
    mouseCoords = {
      clientX: clientX,
      clientY: clientY
    };
  }

  function addMouseCoordsListener(doc) {
    doc.addEventListener('mousemove', storeMouseCoords);
  }

  function removeMouseCoordsListener(doc) {
    doc.removeEventListener('mousemove', storeMouseCoords);
  }

  var followCursor = {
    name: 'followCursor',
    defaultValue: false,
    fn: function fn(instance) {
      var reference = instance.reference;
      var doc = getOwnerDocument(instance.props.triggerTarget || reference);
      var isInternalUpdate = false;
      var wasFocusEvent = false;
      var isUnmounted = true;
      var prevProps = instance.props;

      function getIsInitialBehavior() {
        return instance.props.followCursor === 'initial' && instance.state.isVisible;
      }

      function addListener() {
        doc.addEventListener('mousemove', onMouseMove);
      }

      function removeListener() {
        doc.removeEventListener('mousemove', onMouseMove);
      }

      function unsetGetReferenceClientRect() {
        isInternalUpdate = true;
        instance.setProps({
          getReferenceClientRect: null
        });
        isInternalUpdate = false;
      }

      function onMouseMove(event) {
        // If the instance is interactive, avoid updating the position unless it's
        // over the reference element
        var isCursorOverReference = event.target ? reference.contains(event.target) : true;
        var followCursor = instance.props.followCursor;
        var clientX = event.clientX,
            clientY = event.clientY;
        var rect = reference.getBoundingClientRect();
        var relativeX = clientX - rect.left;
        var relativeY = clientY - rect.top;

        if (isCursorOverReference || !instance.props.interactive) {
          instance.setProps({
            // @ts-ignore - unneeded DOMRect properties
            getReferenceClientRect: function getReferenceClientRect() {
              var rect = reference.getBoundingClientRect();
              var x = clientX;
              var y = clientY;

              if (followCursor === 'initial') {
                x = rect.left + relativeX;
                y = rect.top + relativeY;
              }

              var top = followCursor === 'horizontal' ? rect.top : y;
              var right = followCursor === 'vertical' ? rect.right : x;
              var bottom = followCursor === 'horizontal' ? rect.bottom : y;
              var left = followCursor === 'vertical' ? rect.left : x;
              return {
                width: right - left,
                height: bottom - top,
                top: top,
                right: right,
                bottom: bottom,
                left: left
              };
            }
          });
        }
      }

      function create() {
        if (instance.props.followCursor) {
          activeInstances.push({
            instance: instance,
            doc: doc
          });
          addMouseCoordsListener(doc);
        }
      }

      function destroy() {
        activeInstances = activeInstances.filter(function (data) {
          return data.instance !== instance;
        });

        if (activeInstances.filter(function (data) {
          return data.doc === doc;
        }).length === 0) {
          removeMouseCoordsListener(doc);
        }
      }

      return {
        onCreate: create,
        onDestroy: destroy,
        onBeforeUpdate: function onBeforeUpdate() {
          prevProps = instance.props;
        },
        onAfterUpdate: function onAfterUpdate(_, _ref2) {
          var followCursor = _ref2.followCursor;

          if (isInternalUpdate) {
            return;
          }

          if (followCursor !== undefined && prevProps.followCursor !== followCursor) {
            destroy();

            if (followCursor) {
              create();

              if (instance.state.isMounted && !wasFocusEvent && !getIsInitialBehavior()) {
                addListener();
              }
            } else {
              removeListener();
              unsetGetReferenceClientRect();
            }
          }
        },
        onMount: function onMount() {
          if (instance.props.followCursor && !wasFocusEvent) {
            if (isUnmounted) {
              onMouseMove(mouseCoords);
              isUnmounted = false;
            }

            if (!getIsInitialBehavior()) {
              addListener();
            }
          }
        },
        onTrigger: function onTrigger(_, event) {
          if (isMouseEvent(event)) {
            mouseCoords = {
              clientX: event.clientX,
              clientY: event.clientY
            };
          }

          wasFocusEvent = event.type === 'focus';
        },
        onHidden: function onHidden() {
          if (instance.props.followCursor) {
            unsetGetReferenceClientRect();
            removeListener();
            isUnmounted = true;
          }
        }
      };
    }
  };

  function getProps(props, modifier) {
    var _props$popperOptions;

    return {
      popperOptions: Object.assign({}, props.popperOptions, {
        modifiers: [].concat((((_props$popperOptions = props.popperOptions) == null ? void 0 : _props$popperOptions.modifiers) || []).filter(function (_ref) {
          var name = _ref.name;
          return name !== modifier.name;
        }), [modifier])
      })
    };
  }

  var inlinePositioning = {
    name: 'inlinePositioning',
    defaultValue: false,
    fn: function fn(instance) {
      var reference = instance.reference;

      function isEnabled() {
        return !!instance.props.inlinePositioning;
      }

      var placement;
      var cursorRectIndex = -1;
      var isInternalUpdate = false;
      var triedPlacements = [];
      var modifier = {
        name: 'tippyInlinePositioning',
        enabled: true,
        phase: 'afterWrite',
        fn: function fn(_ref2) {
          var state = _ref2.state;

          if (isEnabled()) {
            if (triedPlacements.indexOf(state.placement) !== -1) {
              triedPlacements = [];
            }

            if (placement !== state.placement && triedPlacements.indexOf(state.placement) === -1) {
              triedPlacements.push(state.placement);
              instance.setProps({
                // @ts-ignore - unneeded DOMRect properties
                getReferenceClientRect: function getReferenceClientRect() {
                  return _getReferenceClientRect(state.placement);
                }
              });
            }

            placement = state.placement;
          }
        }
      };

      function _getReferenceClientRect(placement) {
        return getInlineBoundingClientRect(getBasePlacement(placement), reference.getBoundingClientRect(), arrayFrom(reference.getClientRects()), cursorRectIndex);
      }

      function setInternalProps(partialProps) {
        isInternalUpdate = true;
        instance.setProps(partialProps);
        isInternalUpdate = false;
      }

      function addModifier() {
        if (!isInternalUpdate) {
          setInternalProps(getProps(instance.props, modifier));
        }
      }

      return {
        onCreate: addModifier,
        onAfterUpdate: addModifier,
        onTrigger: function onTrigger(_, event) {
          if (isMouseEvent(event)) {
            var rects = arrayFrom(instance.reference.getClientRects());
            var cursorRect = rects.find(function (rect) {
              return rect.left - 2 <= event.clientX && rect.right + 2 >= event.clientX && rect.top - 2 <= event.clientY && rect.bottom + 2 >= event.clientY;
            });
            var index = rects.indexOf(cursorRect);
            cursorRectIndex = index > -1 ? index : cursorRectIndex;
          }
        },
        onHidden: function onHidden() {
          cursorRectIndex = -1;
        }
      };
    }
  };
  function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects, cursorRectIndex) {
    // Not an inline element, or placement is not yet known
    if (clientRects.length < 2 || currentBasePlacement === null) {
      return boundingRect;
    } // There are two rects and they are disjoined


    if (clientRects.length === 2 && cursorRectIndex >= 0 && clientRects[0].left > clientRects[1].right) {
      return clientRects[cursorRectIndex] || boundingRect;
    }

    switch (currentBasePlacement) {
      case 'top':
      case 'bottom':
        {
          var firstRect = clientRects[0];
          var lastRect = clientRects[clientRects.length - 1];
          var isTop = currentBasePlacement === 'top';
          var top = firstRect.top;
          var bottom = lastRect.bottom;
          var left = isTop ? firstRect.left : lastRect.left;
          var right = isTop ? firstRect.right : lastRect.right;
          var width = right - left;
          var height = bottom - top;
          return {
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            width: width,
            height: height
          };
        }

      case 'left':
      case 'right':
        {
          var minLeft = Math.min.apply(Math, clientRects.map(function (rects) {
            return rects.left;
          }));
          var maxRight = Math.max.apply(Math, clientRects.map(function (rects) {
            return rects.right;
          }));
          var measureRects = clientRects.filter(function (rect) {
            return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
          });
          var _top = measureRects[0].top;
          var _bottom = measureRects[measureRects.length - 1].bottom;
          var _left = minLeft;
          var _right = maxRight;

          var _width = _right - _left;

          var _height = _bottom - _top;

          return {
            top: _top,
            bottom: _bottom,
            left: _left,
            right: _right,
            width: _width,
            height: _height
          };
        }

      default:
        {
          return boundingRect;
        }
    }
  }

  var sticky = {
    name: 'sticky',
    defaultValue: false,
    fn: function fn(instance) {
      var reference = instance.reference,
          popper = instance.popper;

      function getReference() {
        return instance.popperInstance ? instance.popperInstance.state.elements.reference : reference;
      }

      function shouldCheck(value) {
        return instance.props.sticky === true || instance.props.sticky === value;
      }

      var prevRefRect = null;
      var prevPopRect = null;

      function updatePosition() {
        var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
        var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;

        if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
          if (instance.popperInstance) {
            instance.popperInstance.update();
          }
        }

        prevRefRect = currentRefRect;
        prevPopRect = currentPopRect;

        if (instance.state.isMounted) {
          requestAnimationFrame(updatePosition);
        }
      }

      return {
        onMount: function onMount() {
          if (instance.props.sticky) {
            updatePosition();
          }
        }
      };
    }
  };

  function areRectsDifferent(rectA, rectB) {
    if (rectA && rectB) {
      return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
    }

    return true;
  }

  if (isBrowser) {
    injectCSS(css);
  }

  tippy.setDefaultProps({
    plugins: [animateFill, followCursor, inlinePositioning, sticky],
    render: render
  });
  tippy.createSingleton = createSingleton;
  tippy.delegate = delegate;
  tippy.hideAll = hideAll;
  tippy.roundArrow = ROUND_ARROW;

  return tippy;

})));
//# sourceMappingURL=tippy-bundle.umd.js.map;
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/js/datepick/jquery.datepick.wpbc.9.0.js?ver=10.0 
/* http://keith-wood.name/datepick.html
   Datepicker for jQuery 3.7.1.
   Written by Marc Grabanski (m@marcgrabanski.com) and
              Keith Wood (kbwood{at}iinet.com.au).
   Dual licensed under the GPL (http://dev.jQuery.com/browser/trunk/jQuery/GPL-LICENSE.txt) and
   MIT (http://dev.jQuery.com/browser/trunk/jQuery/MIT-LICENSE.txt) licenses.
   Please attribute the authors if you use it. */

/**
 * TODO: for fixing conflicts with  any other datepickers, we will be need to make fix like this here,  and then  in all  other places in plugin.
 * Replaced items (2023-07-01 )
 *
 * 	.datepick > .wpbc_calendar
		$.datepick 			> 	$.wpbc_calendar
		jQuery.datepick		>	jQuery.wpbc_calendar
	Datepick			>	WPBC_Calendar

	browser_is_supported_datepick 	> 	browser_is_supported_wpbc_calendar
	isArray							>	wpbc_is_array
	extendRemove					>	wpbc_extend_remove

	var PROP_NAME = 'datepick';		>	var PROP_NAME = 'wpbc_calendar';
	_tableClass: ['datepick', 		>	_tableClass: ['datepick wpbc_calendar',
 */

(function($) { // Hide the namespace

var PROP_NAME = 'datepick';


    // https://github.com/jquery/jquery-migrate/blob/master/src/core.js#L50
	//FixIn: 8.7.10.1
    if (!$.browser_is_supported_datepick) {
        var uaMatch = function(ua) {
            ua = ua.toLowerCase();

            var match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

            return match[2] || '0';
        };

        $.browser_is_supported_datepick = {
            mozilla: /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase()),
            webkit: /webkit/.test(navigator.userAgent.toLowerCase()),
            opera: /opera/.test(navigator.userAgent.toLowerCase()),
            msie: /msie/.test(navigator.userAgent.toLowerCase()),
            android: (navigator.userAgent.toLowerCase().indexOf('mozilla/5.0') > -1 && navigator.userAgent.toLowerCase().indexOf('android ') > -1 && navigator.userAgent.toLowerCase().indexOf('applewebkit') > -1),
            version: uaMatch(navigator.userAgent)
        };
    }

/* Date picker manager.
   Use the singleton instance of this class, $.datepick, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

function Datepick() {
	this._uuid = new Date().getTime(); // Unique identifier seed
	this._curInst = null; // The current instance in use
	this._keyEvent = false; // If the last event was a key event
	this._disabledInputs = []; // List of date picker inputs that have been disabled
	this._datepickerShowing = false; // True if the popup picker is showing , false if not
	this._inDialog = false; // True if showing within a "dialog", false if not
	this.regional = []; // Available regional settings, indexed by language code
	this.regional[''] = { // Default regional settings
		clearText: 'Clear', // Display text for clear link
		clearStatus: 'Erase the current date', // Status text for clear link
		closeText: 'Close', // Display text for close link
		closeStatus: 'Close without change', // Status text for close link
		prevText: '&#x3c;Prev', // Display text for previous month link
		prevStatus: 'Show the previous month', // Status text for previous month link
		prevBigText: '&#x3c;&#x3c;', // Display text for previous year link
		prevBigStatus: 'Show the previous year', // Status text for previous year link
		nextText: 'Next&#x3e;', // Display text for next month link
		nextStatus: 'Show the next month', // Status text for next month link
		nextBigText: '&#x3e;&#x3e;', // Display text for next year link
		nextBigStatus: 'Show the next year', // Status text for next year link
		currentText: 'Today', // Display text for current month link
		currentStatus: 'Show the current month', // Status text for current month link
		monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'], // Names of months for drop-down and formatting
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], // For formatting
		monthStatus: 'Show a different month', // Status text for selecting a month
		yearStatus: 'Show a different year', // Status text for selecting a year
		weekHeader: 'Wk', // Header for the week of the year column
		weekStatus: 'Week of the year', // Status text for the week of the year column
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // For formatting
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], // For formatting
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'], // Column headings for days starting at Sunday
		dayStatus: 'Set DD as first week day', // Status text for the day of the week selection
		dateStatus: 'Select DD, M d', // Status text for the date selection
		dateFormat: 'mm/dd/yy', // See format options on parseDate
		firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
		initStatus: 'Select a date', // Initial Status text on opening
		isRTL: false, // True if right-to-left language, false if left-to-right
		showMonthAfterYear: false, // True if the year select precedes month, false for month then year
		yearSuffix: '' // Additional text to append to the year in the month headers
	};
	this._defaults = { // Global defaults for all the date picker instances
		wpbc_resource_id: 0, // ID of booking resource - customization	//FixIn: 9.4.4.13
		useThemeRoller: false, // True to apply ThemeRoller styling, false for default styling
		showOn: 'focus', // 'focus' for popup on focus,
			// 'button' for trigger button, or 'both' for either
		showAnim: 'show', // Name of jQuery animation for popup
		showOptions: {}, // Options for enhanced animations
		duration: 'normal', // Duration of display/closure
		buttonText: '...', // Text for trigger button
		buttonImage: '', // URL for trigger button image
		buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
		alignment: 'bottom', // Alignment of popup - with nominated corner of input:
			// 'top' or 'bottom' aligns depending on language direction,
			// 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'
		autoSize: false, // True to size the input for the date format, false to leave as is
		defaultDate: null, // Used when field is blank: actual date,
			// +/-number for offset from today, null for today
		showDefault: false, // True to populate field with the default date
		appendText: '', // Display text following the input box, e.g. showing the format
		closeAtTop: true, // True to have the clear/close at the top,
			// false to have them at the bottom
		mandatory: false, // True to hide the Clear link, false to include it
		hideIfNoPrevNext: false, // True to hide next/previous month links
			// if not applicable, false to just disable them
		navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
		showBigPrevNext: false, // True to show big prev/next links
		stepMonths: 1, // Number of months to step back/forward
		stepBigMonths: 12, // Number of months to step back/forward for the big links
		gotoCurrent: false, // True if today link goes back to current selection instead
		changeMonth: true, // True if month can be selected directly, false if only prev/next
		changeYear: true, // True if year can be selected directly, false if only prev/next
		yearRange: '-10:+10', // Range of years to display in drop-down,
			// either relative to current year (-nn:+nn) or absolute (nnnn:nnnn)
		changeFirstDay: false, // True to click on day name to change, false to remain as set
		showOtherMonths: false, // True to show dates in other months, false to leave blank
		selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
		highlightWeek: false, // True to highlight the selected week
		showWeeks: false, // True to show week of the year, false to omit
		calculateWeek: this.iso8601Week, // How to calculate the week of the year,
			// takes a Date and returns the number of the week for it
		shortYearCutoff: '+10', // Short year values < this are in the current century,
			// > this are in the previous century, string value starting with '+'
			// for current year + value, -1 for no change
		showStatus: false, // True to show status bar at bottom, false to not show it
		statusForDate: this.dateStatus, // Function to provide status text for a date -
			// takes date and instance as parameters, returns display text
		minDate: null, // The earliest selectable date, or null for no limit
		maxDate: null, // The latest selectable date, or null for no limit
		numberOfMonths: 1, // Number of months to show at a time
		showCurrentAtPos: 0, // The position in multiple months at which to show the current month (starting at 0)
		rangeSelect: false, // Allows for selecting a date range on one date picker
		rangeSeparator: ' - ', // Text between two dates in a range
		multiSelect: 0, // Maximum number of selectable dates
		multiSeparator: ',', // Text between multiple dates
		beforeShow: null, // Function that takes an input field and
			// returns a set of custom settings for the date picker
		beforeShowDay: null, // Function that takes a date and returns an array with
			// [0] = true if selectable, false if not, [1] = custom CSS class name(s) or '',
			// [2] = cell title (optional), e.g. $.datepick.noWeekends
		onChangeMonthYear: null, // Define a callback function when the month or year is changed
		onHover: null, // Define a callback function when hovering over a day
		onSelect: null, // Define a callback function when a date is selected
		onClose: null, // Define a callback function when the datepicker is closed
		altField: '', // Selector for an alternate field to store selected dates into
		altFormat: '', // The date format to use for the alternate field
		constrainInput: true // The input is constrained by the current date format
	};
	$.extend(this._defaults, this.regional['']);
	this.dpDiv = $('<div style="display: none;"></div>');
}

$.extend(Datepick.prototype, {
	version: '3.7.0', // Current version

	/* Class name added to elements to indicate already configured with a date picker. */
	markerClassName: 'hasDatepick', // Responsive Skin

	// Class/id names for default and ThemeRoller stylings
	_mainDivId: ['datepick-div', 'ui-datepicker-div'], // The main datepicker division
	_mainDivClass: ['', 'ui-datepicker ' +
		'ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'], // Popup class
	_inlineClass: ['datepick-inline', 'ui-datepicker-inline ui-datepicker ' +
		'ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'], // Inline class
	_multiClass: ['datepick-multi', 'ui-datepicker-multi'], // Multi-month class
	_rtlClass: ['datepick-rtl', 'ui-datepicker-rtl'], // Right-to-left class
	_appendClass: ['datepick-append', 'ui-datepicker-append'], // Append text class
	_triggerClass: ['datepick-trigger', 'ui-datepicker-trigger'], // Trigger class
	_dialogClass: ['datepick-dialog', 'ui-datepicker-dialog'], // Dialog class
	_promptClass: ['datepick-prompt', 'ui-datepicker-prompt'], // Dialog prompt class
	_disableClass: ['datepick-disabled', 'ui-datepicker-disabled'], // Disabled covering class
	_controlClass: ['datepick-control', 'ui-datepicker-header ' +
		'ui-widget-header ui-helper-clearfix ui-corner-all'], // Control bar class
	_clearClass: ['datepick-clear', 'ui-datepicker-clear'], // Clear class
	_closeClass: ['datepick-close', 'ui-datepicker-close'], // Close class
	_linksClass: ['datepick-links', 'ui-datepicker-header ' +
		'ui-widget-header ui-helper-clearfix ui-corner-all'], // Links bar class
	_prevClass: ['datepick-prev', 'ui-datepicker-prev'], // Previous class
	_nextClass: ['datepick-next', 'ui-datepicker-next'], // Next class
	_currentClass: ['datepick-current', 'ui-datepicker-current'], // Current class
	_oneMonthClass: ['datepick-one-month', 'ui-datepicker-group'], // Single month class
	_newRowClass: ['datepick-new-row', 'ui-datepicker-row-break'], // New month row class
	_monthYearClass: ['datepick-header', 'ui-datepicker-header ' +
		'ui-widget-header ui-helper-clearfix ui-corner-all'], // Month/year header class
	_monthSelectClass: ['datepick-new-month', 'ui-datepicker-month'], // Month select class
	_monthClass: ['', 'ui-datepicker-month'], // Month text class
	_yearSelectClass: ['datepick-new-year', 'ui-datepicker-year'], // Year select class
	_yearClass: ['', 'ui-datepicker-year'], // Year text class
	_tableClass: ['datepick wpbc_calendar', 'ui-datepicker-calendar'], // Month table class		// FixIn: 9.7.3.7
	_tableHeaderClass: ['datepick-title-row', ''], // Week header class
	_weekColClass: ['datepick-week-col', 'ui-datepicker-week-col'], // Week number column class
	_weekRowClass: ['datepick-days-row', ''], // Week row class
	_weekendClass: ['datepick-week-end-cell', 'ui-datepicker-week-end'], // Weekend class
	_dayClass: ['datepick-days-cell', ''], // Single day class
	_otherMonthClass: ['datepick-other-month', 'ui-datepicker-other-month'], // Other month class
	_todayClass: ['datepick-today', 'ui-state-highlight'], // Today class
	_selectableClass: ['', 'ui-state-default'], // Selectable cell class
	_unselectableClass: ['datepick-unselectable',
		'ui-datepicker-unselectable ui-state-disabled'], // Unselectable cell class
	_selectedClass: ['datepick-current-day', 'ui-state-active'], // Selected day class
	_dayOverClass: ['datepick-days-cell-over', 'ui-state-hover'], // Day hover class
	_weekOverClass: ['datepick-week-over', 'ui-state-hover'], // Week hover class
	_statusClass: ['datepick-status', 'ui-datepicker-status'], // Status bar class
	_statusId: ['datepick-status-', 'ui-datepicker-status-'], // Status bar ID prefix
	_coverClass: ['datepick-cover', 'ui-datepicker-cover'], // IE6- iframe class

	/* Override the default settings for all instances of the date picker.
	   @param  settings  (object) the new settings to use as defaults (anonymous object)
	   @return  (Datepick) the manager object */
	setDefaults: function(settings) {
		extendRemove(this._defaults, settings || {});
		return this;
	},

	/* Attach the date picker to a jQuery selection.
	   @param  target    (element) the target input field or division or span
	   @param  settings  (object) the new settings to use for this date picker instance */
	_attachDatepick: function(target, settings) {
		if (!target.id)
			target.id = 'dp' + (++this._uuid);
		var nodeName = target.nodeName.toLowerCase();
		var inst = this._newInst($(target), (nodeName == 'div' || nodeName == 'span'));
		// Check for settings on the control itself
		var inlineSettings = ($.fn.metadata ? $(target).metadata() : {});
		inst.settings = $.extend({}, settings || {}, inlineSettings || {});
		if (inst.inline) {
			inst.dpDiv.addClass(this._inlineClass[
				this._get(inst, 'useThemeRoller') ? 1 : 0]);
			this._inlineDatepick(target, inst);
		}
		else
			this._connectDatepick(target, inst);
	},

	/* Create a new instance object.
	   @param  target  (jQuery) the target input field or division or span
	   @param  inline  (boolean) true if this datepicker appears inline */
	_newInst: function(target, inline) {
		var id = target[0].id.replace(/([:\[\]\.\$])/g, '\\\\$1'); // Escape jQuery meta chars
		return {id: id, input: target, // Associated target
			cursorDate: this._daylightSavingAdjust(new Date()), // Current position
			drawMonth: 0, drawYear: 0, // Month being drawn
			dates: [], // Selected dates
			inline: inline, // Is datepicker inline or not
			dpDiv: (!inline ? this.dpDiv : $('<div></div>')), // presentation div
			siblings: $([])}; // Created siblings (trigger/append)
	},

	/* Attach the date picker to an input field.
	   @param  target  (element) the target input field or division or span
	   @param  inst    (object) the instance settings for this datepicker */
	_connectDatepick: function(target, inst) {
		var input = $(target);
		if (input.hasClass(this.markerClassName))
			return;
		var appendText = this._get(inst, 'appendText');
		var isRTL = this._get(inst, 'isRTL');
		var useTR = this._get(inst, 'useThemeRoller') ? 1 : 0;
		if (appendText) {
			var append = $('<span class="' + this._appendClass[useTR] + '">' + appendText + '</span>');
			input[isRTL ? 'before' : 'after'](append);
			inst.siblings = inst.siblings.add(append);
		}
		var showOn = this._get(inst, 'showOn');
		if (showOn == 'focus' || showOn == 'both') // Pop-up date picker when in the marked field
			input.on('focus', this._showDatepick);
		if (showOn == 'button' || showOn == 'both') { // Pop-up date picker when button clicked
			var buttonText = this._get(inst, 'buttonText');
			var buttonImage = this._get(inst, 'buttonImage');
			var trigger = $(this._get(inst, 'buttonImageOnly') ?
				$('<img/>').addClass(this._triggerClass[useTR]).
					attr({src: buttonImage, alt: buttonText, title: buttonText}) :
				$('<button type="button"></button>').addClass(this._triggerClass[useTR]).
					html(buttonImage == '' ? buttonText : $('<img/>').attr(
					{src: buttonImage, alt: buttonText, title: buttonText})));
			input[isRTL ? 'before' : 'after'](trigger);
			inst.siblings = inst.siblings.add(trigger);
			//FixIn: 8.7.11.12
			trigger.on( 'click', function (){
				if ($.datepick._datepickerShowing && $.datepick._lastInput == target)
					$.datepick._hideDatepick();
				else
					$.datepick._showDatepick(target);
				return false;
			});
		}
		input.addClass(this.markerClassName).on( 'keydown', this._doKeyDown).on( 'keypress', this._doKeyPress).on( 'keyup', this._doKeyUp);	//FixIn: 8.7.11.12
		if (this._get(inst, 'showDefault') && !inst.input.val()) {
			inst.dates = [this._getDefaultDate(inst)];
			this._showDate(inst);
		}
		this._autoSize(inst);
		$.data(target, PROP_NAME, inst);
	},

	/* Apply the maximum length for the date format.
	   @param  inst  (object) the instance settings for this datepicker */
	_autoSize: function(inst) {
		if (this._get(inst, 'autoSize') && !inst.inline) {
			var date = new Date(2009, 12 - 1, 20); // Ensure double digits
			var dateFormat = this._get(inst, 'dateFormat');
			if (dateFormat.match(/[DM]/)) {
				var findMax = function(names) {
					var max = 0;
					var maxI = 0;
					for (var i = 0; i < names.length; i++) {
						if (names[i].length > max) {
							max = names[i].length;
							maxI = i;
						}
					}
					return maxI;
				};
				date.setMonth(findMax(this._get(inst, (dateFormat.match(/MM/) ?
					'monthNames' : 'monthNamesShort'))));
				date.setDate(findMax(this._get(inst, (dateFormat.match(/DD/) ?
					'dayNames' : 'dayNamesShort'))) + 20 - date.getDay());
			}
			inst.input.attr('size', this._formatDate(inst, date).length);
		}
	},

	/* Attach an inline date picker to a div.
	   @param  target  (element) the target input field or division or span
	   @param  inst    (object) the instance settings for this datepicker */
	_inlineDatepick: function(target, inst) {
		var divSpan = $(target);
		if (divSpan.hasClass(this.markerClassName))
			return;
		divSpan.addClass(this.markerClassName);
		$.data(target, PROP_NAME, inst);
		inst.drawMonth = inst.cursorDate.getMonth();
		inst.drawYear = inst.cursorDate.getFullYear();
		$('body').append(inst.dpDiv);
		this._updateDatepick(inst);
		// Fix width for dynamic number of date pickers
		/* // FixIn: 9.7.3.4
		   // Commented below 3 lines to  not include width into <div class="datepick-inline datepick-multi" style="width: 4428px;">
		 inst.dpDiv.width(this._getNumberOfMonths(inst)[1] *
		 		$('.' + this._oneMonthClass[this._get(inst, 'useThemeRoller') ? 1 : 0],
		 		inst.dpDiv)[0].offsetWidth);
		 */
		divSpan.append(inst.dpDiv);
		this._updateAlternate(inst);

		//FixIn: 9.4.4.13
		var resource_id = parseInt( divSpan.get( 0 ).getAttribute( 'id' ).replace( 'calendar_booking', '' ) );
		inst.settings.wpbc_resource_id = resource_id;  		// To get this property use: 	this._get(inst, 'wpbc_resource_id')

		//FixIn: 9.4.4.12
		$( 'body' ).trigger(
							  'wpbc_datepick_inline_calendar_loaded'													// event name
							, [
								  divSpan.get( 0 ).getAttribute( 'id' ).replace( 'calendar_booking', '' )				// Resource ID	-	'1'
								, divSpan																				// jQuery( '#calendar_booking1' )
								, inst 																					// datepick Obj
							  ]
							);
		// To catch this event: jQuery( 'body' ).on('wpbc_datepick_inline_calendar_loaded', function( event, resource_id, jCalContainer, inst ) { ... } );
		//FixIn End: 9.4.4.12
	},

	/* Pop-up the date picker in a "dialog" box.
	   @param  input     (element) ignored
	   @param  date      (string or Date) the initial date to display
	   @param  onSelect  (function) the function to call when a date is selected
	   @param  settings  (object) update the dialog date picker instance's settings
	   @param  pos       (int[2]) coordinates for the dialog's position within the screen or
	                     (event) with x/y coordinates or
	                     leave empty for default (screen centre) */
	_dialogDatepick: function(input, date, onSelect, settings, pos) {
		var inst = this._dialogInst; // Internal instance
		if (!inst) {
			var id = 'dp' + (++this._uuid);
			this._dialogInput = $('<input type="text" id="' + id +
				'" style="position: absolute; width: 1px; z-index: -1"/>');
			this._dialogInput.on( 'keydown', this._doKeyDown);
			$('body').append(this._dialogInput);
			inst = this._dialogInst = this._newInst(this._dialogInput, false);
			inst.settings = {};
			$.data(this._dialogInput[0], PROP_NAME, inst);
		}
		extendRemove(inst.settings, settings || {});
		date = (date && date.constructor == Date ? this._formatDate(inst, date) : date);
		this._dialogInput.val(date);
		this._pos = (pos ? (isArray(pos) ? pos : [pos.pageX, pos.pageY]) : null);
		if (!this._pos) {
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			this._pos = // Should use actual width/height below
				[(document.documentElement.clientWidth / 2) - 100 + scrollX,
				(document.documentElement.clientHeight / 2) - 150 + scrollY];
		}

		// Move input on screen for focus, but hidden behind dialog
		this._dialogInput.css('left', (this._pos[0] + 20) + 'px').css('top', this._pos[1] + 'px');
		inst.settings.onSelect = onSelect;
		this._inDialog = true;
		this.dpDiv.addClass(this._dialogClass[this._get(inst, 'useThemeRoller') ? 1 : 0]);
		this._showDatepick(this._dialogInput[0]);
		if ($.blockUI)
			$.blockUI(this.dpDiv);
		$.data(this._dialogInput[0], PROP_NAME, inst);
	},

	/* Detach a datepicker from its control.
	   @param  target  (element) the target input field or division or span */
	_destroyDatepick: function(target) {
		var $target = $(target);
		if (!$target.hasClass(this.markerClassName)) {
			return;
		}
		var inst = $.data(target, PROP_NAME);
		$.removeData(target, PROP_NAME);
		if (inst.inline)
			$target.removeClass(this.markerClassName).empty();
		else {
			$(inst.siblings).remove();
			$target.removeClass(this.markerClassName).
				unbind('focus', this._showDatepick).unbind('keydown', this._doKeyDown).
				unbind('keypress', this._doKeyPress).unbind('keyup', this._doKeyUp);
		}
	},

	/* Enable the date picker to a jQuery selection.
	   @param  target  (element) the target input field or division or span */
	_enableDatepick: function(target) {
		var $target = $(target);
		if (!$target.hasClass(this.markerClassName))
			return;
		var inst = $.data(target, PROP_NAME);
		var useTR = this._get(inst, 'useThemeRoller') ? 1 : 0;
		if (inst.inline)
			$target.children('.' + this._disableClass[useTR]).remove().end().
				find('select').attr('disabled', '');
		else {
			target.disabled = false;
			inst.siblings.filter('button.' + this._triggerClass[useTR]).
				each(function() { this.disabled = false; }).end().
				filter('img.' + this._triggerClass[useTR]).
				css({opacity: '1.0', cursor: ''});
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // Delete entry
	},

	/* Disable the date picker to a jQuery selection.
	   @param  target  (element) the target input field or division or span */
	_disableDatepick: function(target) {
		var $target = $(target);
		if (!$target.hasClass(this.markerClassName))
			return;
		var inst = $.data(target, PROP_NAME);
		var useTR = this._get(inst, 'useThemeRoller') ? 1 : 0;
		if (inst.inline) {
			var inline = $target.children('.' + this._inlineClass[useTR]);
			var offset = inline.offset();
			var relOffset = {left: 0, top: 0};
			inline.parents().each(function() {
				if ($(this).css('position') == 'relative') {
					relOffset = $(this).offset();
					return false;
				}
			});
			$target.prepend('<div class="' + this._disableClass[useTR] + '" style="' +
				'width: ' + inline.width() + 'px; height: ' + inline.height() +
				'px; left: ' + (offset.left - relOffset.left) +
				'px; top: ' + (offset.top - relOffset.top) + 'px;"></div>').
				find('select').attr('disabled', 'disabled');
		}
		else {
			target.disabled = true;
			inst.siblings.filter('button.' + this._triggerClass[useTR]).
				each(function() { this.disabled = true; }).end().
				filter('img.' + this._triggerClass[useTR]).
				css({opacity: '0.5', cursor: 'default'});
		}
		this._disabledInputs = $.map(this._disabledInputs,
			function(value) { return (value == target ? null : value); }); // Delete entry
		this._disabledInputs.push(target);
	},

	/* Is the first field in a jQuery collection disabled as a datepicker?
	   @param  target  (element) the target input field or division or span
	   @return  (boolean) true if disabled, false if enabled */
	_isDisabledDatepick: function(target) {
		return (!target ? false : $.inArray(target, this._disabledInputs) > -1);
	},

	/* Retrieve the instance data for the target control.
	   @param  target  (element) the target input field or division or span
	   @return  (object) the associated instance data
	   @throws  error if a jQuery problem getting data */
	_getInst: function(target) {//alert(target.id);
		try {
			return $.data(target, PROP_NAME);
		}
		catch (err) {
			throw 'Missing instance data for this datepicker';
		}
	},

	/* Update or retrieve the settings for a date picker attached to an input field or division.
	   @param  target  (element) the target input field or division or span
	   @param  name    (object) the new settings to update or
	                   (string) the name of the setting to change or retrieve,
	                   when retrieving also 'all' for all instance settings or
	                   'defaults' for all global defaults
	   @param  value   (any) the new value for the setting
	                   (omit if above is an object or to retrieve value) */
	_optionDatepick: function(target, name, value) {
		var inst = this._getInst(target);
		if (arguments.length == 2 && typeof name == 'string') {
			return (name == 'defaults' ? $.extend({}, $.datepick._defaults) :
				(inst ? (name == 'all' ? $.extend({}, inst.settings) :
				this._get(inst, name)) : null));
		}
		var settings = name || {};
		if (typeof name == 'string') {
			settings = {};
			settings[name] = value;
		}
		if (inst) {
			if (this._curInst == inst) {
				this._hideDatepick(null);
			}
			var dates = this._getDateDatepick(target);
			extendRemove(inst.settings, settings);
			this._autoSize(inst);
			extendRemove(inst, {dates: []});
			var blank = (!dates || isArray(dates));
			if (isArray(dates))
				for (var i = 0; i < dates.length; i++)
					if (dates[i]) {
						blank = false;
						break;
					}
			if (!blank)
				this._setDateDatepick(target, dates);
			if (inst.inline)
				$(target).children('div').removeClass(this._inlineClass.join(' ')).
					addClass(this._inlineClass[this._get(inst, 'useThemeRoller') ? 1 : 0]);
			this._updateDatepick(inst);
		}
	},

	// Change method deprecated
	_changeDatepick: function(target, name, value) {
		this._optionDatepick(target, name, value);
	},

	/* Redraw the date picker attached to an input field or division.
	   @param  target  (element) the target input field or division or span */
	_refreshDatepick: function(target) {
		var inst = this._getInst(target);
		if (inst) {
			this._updateDatepick(inst);
		}
	},

	/* Set the dates for a jQuery selection.
	   @param  target   (element) the target input field or division or span
	   @param  date     (Date) the new date
	   @param  endDate  (Date) the new end date for a range (optional) */
	_setDateDatepick: function(target, date, endDate) {
		var inst = this._getInst(target);
		if (inst) {
			this._setDate(inst, date, endDate);
			this._updateDatepick(inst);
			this._updateAlternate(inst);
		}
	},

	/* Get the date(s) for the first entry in a jQuery selection.
	   @param  target  (element) the target input field or division or span
	   @return (Date) the current date or
	           (Date[2]) the current dates for a range */
	_getDateDatepick: function(target) {
		var inst = this._getInst(target);
		if (inst && !inst.inline)
			this._setDateFromField(inst);
		return (inst ? this._getDate(inst) : null);
	},

	/* Handle keystrokes.
	   @param  event  (KeyEvent) the keystroke details
	   @return  (boolean) true to continue, false to discard */
	_doKeyDown: function(event) {
		var inst = $.datepick._getInst(event.target);
		inst.keyEvent = true;
		var handled = true;
		var isRTL = $.datepick._get(inst, 'isRTL');
		var useTR = $.datepick._get(inst, 'useThemeRoller') ? 1 : 0;
		if ($.datepick._datepickerShowing)
			switch (event.keyCode) {
				case 9:  $.datepick._hideDatepick(null, '');
						break; // Hide on tab out
				case 13: var sel = $('td.' + $.datepick._dayOverClass[useTR], inst.dpDiv);
						if (sel.length == 0)
							sel = $('td.' + $.datepick._selectedClass[useTR] + ':first', inst.dpDiv);
						if (sel[0])
							$.datepick._selectDay(sel[0], event.target, inst.cursorDate.getTime());
						else
							$.datepick._hideDatepick(null, $.datepick._get(inst, 'duration'));
						break; // Select the value on enter
				case 27: $.datepick._hideDatepick(null, $.datepick._get(inst, 'duration'));
						break; // Hide on escape
				case 33: $.datepick._adjustDate(event.target, (event.ctrlKey ?
							-$.datepick._get(inst, 'stepBigMonths') :
							-$.datepick._get(inst, 'stepMonths')), 'M');
						break; // Previous month/year on page up/+ ctrl
				case 34: $.datepick._adjustDate(event.target, (event.ctrlKey ?
							+$.datepick._get(inst, 'stepBigMonths') :
							+$.datepick._get(inst, 'stepMonths')), 'M');
						break; // Next month/year on page down/+ ctrl
				case 35: if (event.ctrlKey || event.metaKey)
							$.datepick._clearDate(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // Clear on ctrl or command + end
				case 36: if (event.ctrlKey || event.metaKey)
							$.datepick._gotoToday(event.target);
						handled = event.ctrlKey || event.metaKey;
						break; // Current on ctrl or command + home
				case 37: if (event.ctrlKey || event.metaKey)
							$.datepick._adjustDate(event.target, (isRTL ? +1 : -1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// -1 day on ctrl or command + left
						if (event.originalEvent.altKey)
							$.datepick._adjustDate(event.target,
								(event.ctrlKey ? -$.datepick._get(inst, 'stepBigMonths') :
								-$.datepick._get(inst, 'stepMonths')), 'M');
						// Next month/year on alt + left/+ ctrl
						break;
				case 38: if (event.ctrlKey || event.metaKey)
							$.datepick._adjustDate(event.target, -7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // -1 week on ctrl or command + up
				case 39: if (event.ctrlKey || event.metaKey)
							$.datepick._adjustDate(event.target, (isRTL ? -1 : +1), 'D');
						handled = event.ctrlKey || event.metaKey;
						// +1 day on ctrl or command + right
						if (event.originalEvent.altKey)
							$.datepick._adjustDate(event.target,
								(event.ctrlKey ? +$.datepick._get(inst, 'stepBigMonths') :
								+$.datepick._get(inst, 'stepMonths')), 'M');
						// Next month/year on alt + right/+ ctrl
						break;
				case 40: if (event.ctrlKey || event.metaKey)
							$.datepick._adjustDate(event.target, +7, 'D');
						handled = event.ctrlKey || event.metaKey;
						break; // +1 week on ctrl or command + down
				default: handled = false;
			}
		else if (event.keyCode == 36 && event.ctrlKey) // Display the date picker on ctrl+home
			$.datepick._showDatepick(this);
		else
			handled = false;
		if (handled) {
			event.preventDefault();
			event.stopPropagation();
		}
		inst.ctrlKey = (event.keyCode < 48);
		return !handled;
	},

	/* Filter entered characters - based on date format.
	   @param  event  (KeyEvent) the keystroke details
	   @return  (boolean) true to continue, false to discard */
	_doKeyPress: function(event) {
		var inst = $.datepick._getInst(event.target);
		if ($.datepick._get(inst, 'constrainInput')) {
			var chars = $.datepick._possibleChars(inst);
			var chr = String.fromCharCode(event.keyCode || event.charCode);
			return inst.ctrlKey || (chr < ' ' || !chars || chars.indexOf(chr) > -1);
		}
	},

	/* Synchronise manual entry and field/alternate field.
	   @param  event  (KeyEvent) the keystroke details
	   @return  (boolean) true to continue */
	_doKeyUp: function(event) {
		var inst = $.datepick._getInst(event.target);
		if (inst.input.val() != inst.lastVal) {
			try {
				var separator = ($.datepick._get(inst, 'rangeSelect') ?
					$.datepick._get(inst, 'rangeSeparator') :
					($.datepick._get(inst, 'multiSelect') ?
					$.datepick._get(inst, 'multiSeparator') : ''));
				var dates = (inst.input ? inst.input.val() : '');
				dates = (separator ? dates.split(separator) : [dates]);
				var ok = true;
				for (var i = 0; i < dates.length; i++) {
					if (!$.datepick.parseDate($.datepick._get(inst, 'dateFormat'),
							dates[i], $.datepick._getFormatConfig(inst))) {
						ok = false;
						break;
					}
				}
				if (ok) { // Only if valid
					$.datepick._setDateFromField(inst);
					$.datepick._updateAlternate(inst);
					$.datepick._updateDatepick(inst);
				}
			}
			catch (event) {
				// Ignore
			}
		}
		return true;
	},

	/* Extract all possible characters from the date format.
	   @param  inst  (object) the instance settings for this datepicker
	   @return  (string) the set of characters allowed by this format */
	_possibleChars: function (inst) {
		var dateFormat = $.datepick._get(inst, 'dateFormat');
		var chars = ($.datepick._get(inst, 'rangeSelect') ?
			$.datepick._get(inst, 'rangeSeparator') :
			($.datepick._get(inst, 'multiSelect') ?
			$.datepick._get(inst, 'multiSeparator') : ''));
		var literal = false;
		for (var iFormat = 0; iFormat < dateFormat.length; iFormat++)
			if (literal)
				if (dateFormat.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					chars += dateFormat.charAt(iFormat);
			else
				switch (dateFormat.charAt(iFormat)) {
					case 'd': case 'm': case 'y': case '@':
						chars += '0123456789';
						break;
					case 'D': case 'M':
						return null; // Accept anything
					case "'":
						if (lookAhead("'"))
							chars += "'";
						else
							literal = true;
						break;
					default:
						chars += dateFormat.charAt(iFormat);
				}
		return chars;
	},

	/* Update the datepicker when hovering over a date.
	   @param  td         (element) the current cell
	   @param  id         (string) the ID of the datepicker instance
	   @param  timestamp  (number) the timestamp for this date */
	_doMouseOver: function(td, id, timestamp) {
		var inst = $.datepick._getInst($('#' + id)[0]);
		var useTR = $.datepick._get(inst, 'useThemeRoller') ? 1 : 0;
		if ( $( td ).find( 'a' ).length )																				//FixIn: 2023-08-06
			$(td).parents('tbody').find('td').
				removeClass($.datepick._dayOverClass[useTR]).end().end().
				addClass($.datepick._dayOverClass[useTR]);
		if ($.datepick._get(inst, 'highlightWeek'))
			$(td).parent().parent().find('tr').
				removeClass($.datepick._weekOverClass[useTR]).end().end().
				addClass($.datepick._weekOverClass[useTR]);
		if ($(td).text()) {
			var date = new Date(timestamp);
			if ($.datepick._get(inst, 'showStatus')) {
				var status = ($.datepick._get(inst, 'statusForDate').apply(
					(inst.input ? inst.input[0] : null), [date, inst]) ||
					$.datepick._get(inst, 'initStatus'));
				$('#' + $.datepick._statusId[useTR] + id).html(status);
			}
			if ($.datepick._get(inst, 'onHover'))
				$.datepick._doHover(td, '#' + id, date.getFullYear(), date.getMonth());
		}
	},

	/* Update the datepicker when no longer hovering over a date.
	   @param  td  (element) the current cell
	   @param  id  (string) the ID of the datepicker instance */
	_doMouseOut: function(td, id) {
		var inst = $.datepick._getInst($('#' + id)[0]);
		var useTR = $.datepick._get(inst, 'useThemeRoller') ? 1 : 0;
		$(td).removeClass($.datepick._dayOverClass[useTR]).
			removeClass($.datepick._weekOverClass[useTR]);
		if ($.datepick._get(inst, 'showStatus'))
			$('#' + $.datepick._statusId[useTR] + id).html($.datepick._get(inst, 'initStatus'));
		if ($.datepick._get(inst, 'onHover'))
			$.datepick._doHover(td, '#' + id);
	},

	/* Hover over a particular day.
	   @param  td     (element) the table cell containing the selection
	   @param  id     (string) the ID of the target field
	   @param  year   (number) the year for this day
	   @param  month  (number) the month for this day */
	_doHover: function(td, id, year, month) {
		var inst = this._getInst($(id)[0]);
		var useTR = $.datepick._get(inst, 'useThemeRoller') ? 1 : 0;
		//if ($(td).hasClass(this._unselectableClass[useTR]))
		//	return;
		var onHover = this._get(inst, 'onHover');
		//FixIn: 2023-08-06
		var temp_daylight_day = ( $( td ).find( 'a' ).length) ? new Date( year, month, $( td ).find( 'a' ).text() ) : null;
		temp_daylight_day = ( ( null === temp_daylight_day ) && ( $( td ).find( 'span' ).length ) ) ? new Date( year, month, $( td ).find( 'span' ).text() ) : temp_daylight_day;

		var date = (year ?
//			this._daylightSavingAdjust(new Date(year, month, $(td).find('a').text())) : null);							//FixIn: 2023-08-06
			this._daylightSavingAdjust( temp_daylight_day ) : null);													//FixIn: 2023-08-06
		onHover.apply((inst.input ? inst.input[0] : null),
			[(date ? this._formatDate(inst, date) : ''), date, inst]);
	},

	/* Pop-up the date picker for a given input field.
	   @param  input  (element) the input field attached to the date picker or
	                  (event) if triggered by focus */
	_showDatepick: function(input) {
		input = input.target || input;
		if ($.datepick._isDisabledDatepick(input) || $.datepick._lastInput == input) // Already here
			return;
		var inst = $.datepick._getInst(input);
		var beforeShow = $.datepick._get(inst, 'beforeShow');
		var useTR = $.datepick._get(inst, 'useThemeRoller') ? 1 : 0;
		extendRemove(inst.settings, (beforeShow ? beforeShow.apply(input, [input, inst]) : {}));
		$.datepick._hideDatepick(null, '');
		$.datepick._lastInput = input;
		$.datepick._setDateFromField(inst);
		if ($.datepick._inDialog) // Hide cursor
			input.value = '';
		if (!$.datepick._pos) { // Position below input
			$.datepick._pos = $.datepick._findPos(input);
			$.datepick._pos[1] += input.offsetHeight; // Add the height
		}
		var isFixed = false;
		$(input).parents().each(function() {
			isFixed |= $(this).css('position') == 'fixed';
			return !isFixed;
		});
		if (isFixed && $.browser_is_supported_datepick.opera) { // Correction for Opera when fixed and scrolled
			$.datepick._pos[0] -= document.documentElement.scrollLeft;
			$.datepick._pos[1] -= document.documentElement.scrollTop;
		}
		var offset = {left: $.datepick._pos[0], top: $.datepick._pos[1]};
		$.datepick._pos = null;
		// Determine sizing offscreen
		inst.dpDiv.css({position: 'absolute', display: 'block', top: '-1000px'});
		$.datepick._updateDatepick(inst);
		// Fix width for dynamic number of date pickers
		inst.dpDiv.width($.datepick._getNumberOfMonths(inst)[1] *
			$('.' + $.datepick._oneMonthClass[useTR], inst.dpDiv).width());
		// And adjust position before showing
		offset = $.datepick._checkOffset(inst, offset, isFixed);
		inst.dpDiv.css({position: ($.datepick._inDialog && $.blockUI ?
			'static' : (isFixed ? 'fixed' : 'absolute')), display: 'none',
			left: offset.left + 'px', top: offset.top + 'px'});
		if (!inst.inline) {
			var showAnim = $.datepick._get(inst, 'showAnim') || 'show';
			var duration = $.datepick._get(inst, 'duration');
			var postProcess = function() {
				$.datepick._datepickerShowing = true;
				var borders = $.datepick._getBorders(inst.dpDiv);
				inst.dpDiv.find('iframe.' + $.datepick._coverClass[useTR]). // IE6- only
					css({left: -borders[0], top: -borders[1],
						width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
			};
			if ($.effects && $.effects[showAnim])
				inst.dpDiv.show(showAnim, $.datepick._get(inst, 'showOptions'), duration, postProcess);
			else
				inst.dpDiv[showAnim](duration, postProcess);
			if (duration == '')
				postProcess();
			if (inst.input[0].type != 'hidden')
			    $( inst.input ).trigger( 'focus' );		//FixIn: 8.7.11.12
			$.datepick._curInst = inst;
		}
	},

	/* Generate the date picker content.
	   @param  inst  (object) the instance settings for this datepicker */
	_updateDatepick: function(inst) {
		var borders = this._getBorders(inst.dpDiv);
		var useTR = this._get(inst, 'useThemeRoller') ? 1 : 0;
		inst.dpDiv.empty().append(this._generateHTML(inst)).
			find('iframe.' + this._coverClass[useTR]). // IE6- only
			css({left: -borders[0], top: -borders[1],
				width: inst.dpDiv.outerWidth(), height: inst.dpDiv.outerHeight()});
		var numMonths = this._getNumberOfMonths(inst);
		if (!inst.inline)
			inst.dpDiv.attr('id', this._mainDivId[useTR]);
		if (!inst.inline) inst.dpDiv.attr('class', 'datepick-inline');  // Added by wpdevelop for the correct  showing of calendar in the search form.
		inst.dpDiv.removeClass(this._mainDivClass[1 - useTR]).
			addClass(this._mainDivClass[useTR]).
			removeClass(this._multiClass.join(' ')).
			addClass(numMonths[0] != 1 || numMonths[1] != 1 ? this._multiClass[useTR] : '').
			removeClass(this._rtlClass.join(' ')).
			addClass(this._get(inst, 'isRTL') ? this._rtlClass[useTR] : '');
		if (inst.input && inst.input[0].type != 'hidden' && inst == $.datepick._curInst)
			$( inst.input ).trigger( 'focus' );		//FixIn: 8.7.11.12

		//FixIn: 9.4.4.13
		var resource_id = this._get(inst, 'wpbc_resource_id');
		if ( resource_id > 0 ){
			$( 'body' ).trigger(
								  'wpbc_datepick_inline_calendar_refresh'													// event name
								, [
									  resource_id																			// Resource ID	-	1
									, inst 																					// datepick Obj
								  ]
								);
		}
		// To catch this event: jQuery( 'body' ).on('wpbc_datepick_inline_calendar_refresh', function( event, resource_id, inst ) { ... } );
		//FixIn End: 9.4.4.13
	},

	/* Retrieve the size of left and top borders for an element.
	   @param  elem  (jQuery object) the element of interest
	   @return  (number[2]) the left and top borders */
	_getBorders: function(elem) {
		var convert = function(value) {
			var extra = ($.browser_is_supported_datepick.msie ? 1 : 0);
			return {thin: 1 + extra, medium: 3 + extra, thick: 5 + extra}[value] || value;
		};
		return [parseFloat(convert(elem.css('border-left-width'))),
			parseFloat(convert(elem.css('border-top-width')))];
	},

	/* Check positioning to remain on the screen.
	   @param  inst     (object) the instance settings for this datepicker
	   @param  offset   (object) the offset of the attached field
	   @param  isFixed  (boolean) true if control or a parent is 'fixed' in position
	   @return  (object) the updated offset for the datepicker */
	_checkOffset: function(inst, offset, isFixed) {
		var alignment = this._get(inst, 'alignment');
		var isRTL = this._get(inst, 'isRTL');
		var pos = inst.input ? this._findPos(inst.input[0]) : null;
		var browserWidth = document.documentElement.clientWidth;
		var browserHeight = document.documentElement.clientHeight;
		if (browserWidth == 0)
			return offset;
		var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
		var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
		var above = pos[1] - (this._inDialog ? 0 : inst.dpDiv.outerHeight()) -
			(isFixed && $.browser_is_supported_datepick.opera ? document.documentElement.scrollTop : 0);
		var below = offset.top;
		var alignL = offset.left;
		var alignR = pos[0] + (inst.input ? inst.input.outerWidth() : 0) - inst.dpDiv.outerWidth() -
			(isFixed && $.browser_is_supported_datepick.opera ? document.documentElement.scrollLeft : 0);
		var tooWide = (offset.left + inst.dpDiv.outerWidth() - scrollX) > browserWidth;
		var tooHigh = (offset.top + inst.dpDiv.outerHeight() - scrollY) > browserHeight;
		if (alignment == 'topLeft') {
			offset = {left: alignL, top: above};
		}
		else if (alignment == 'topRight') {
			offset = {left: alignR, top: above};
		}
		else if (alignment == 'bottomLeft') {
			offset = {left: alignL, top: below};
		}
		else if (alignment == 'bottomRight') {
			offset = {left: alignR, top: below};
		}
		else if (alignment == 'top') {
			offset = {left: (isRTL || tooWide ? alignR : alignL), top: above};
		}
		else { // bottom
			offset = {left: (isRTL || tooWide ? alignR : alignL),
				top: (tooHigh ? above : below)};
		}
		offset.left = Math.max((isFixed ? 0 : scrollX), offset.left - (isFixed ? scrollX : 0));
		offset.top = Math.max((isFixed ? 0 : scrollY), offset.top - (isFixed ? scrollY : 0));
		return offset;
	},

	/* Find an element's position on the screen.
	   @param  elem  (element) the element to check
	   @return  (number[2]) the x- and y-coordinates for the object */
	_findPos: function(elem) {
        while (elem && (elem.type == 'hidden' || elem.nodeType != 1)) {
            elem = elem.nextSibling;
        }
        var position = $(elem).offset();
	    return [position.left, position.top];
	},

	/* Hide the date picker from view.
	   @param  input     (element) the input field attached to the date picker
	   @param  duration  (string) the duration over which to close the date picker */
	_hideDatepick: function(input, duration) {
		var inst = this._curInst;
		if (!inst || (input && inst != $.data(input, PROP_NAME)))
			return false;
		var rangeSelect = this._get(inst, 'rangeSelect');
		if (rangeSelect && inst.stayOpen)
			this._updateInput('#' + inst.id);
		inst.stayOpen = false;
		if (this._datepickerShowing) {
			duration = (duration != null ? duration : this._get(inst, 'duration'));
			var showAnim = this._get(inst, 'showAnim');
			var postProcess = function() {
				$.datepick._tidyDialog(inst);
			};
			if (duration != '' && $.effects && $.effects[showAnim])
				inst.dpDiv.hide(showAnim, $.datepick._get(inst, 'showOptions'),
					duration, postProcess);
			else
				inst.dpDiv[(duration == '' ? 'hide' : (showAnim == 'slideDown' ? 'slideUp' :
					(showAnim == 'fadeIn' ? 'fadeOut' : 'hide')))](duration, postProcess);
			if (duration == '')
				this._tidyDialog(inst);
			var onClose = this._get(inst, 'onClose');
			if (onClose)  // Trigger custom callback
				onClose.apply((inst.input ? inst.input[0] : null),
					[(inst.input ? inst.input.val() : ''), this._getDate(inst), inst]);
			this._datepickerShowing = false;
			this._lastInput = null;
			inst.settings.prompt = null;
			if (this._inDialog) {
				this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' });
				this.dpDiv.removeClass(this._dialogClass[this._get(inst, 'useThemeRoller') ? 1 : 0]);
				if ($.blockUI) {
					$.unblockUI();
					$('body').append(this.dpDiv);
				}
			}
			this._inDialog = false;
		}
		this._curInst = null;
		return false;
	},

	/* Tidy up after a dialog display.
	   @param  inst  (object) the instance settings for this datepicker */
	_tidyDialog: function(inst) {
		var useTR = this._get(inst, 'useThemeRoller') ? 1 : 0;
		inst.dpDiv.removeClass(this._dialogClass[useTR]).unbind('.datepick');
		$('.' + this._promptClass[useTR], inst.dpDiv).remove();
	},

	/* Close date picker if clicked elsewhere.
	   @param  event  (MouseEvent) the mouse click to check */
	_checkExternalClick: function(event) {
		if (!$.datepick._curInst)
			return;
		var $target = $(event.target);
		var useTR = $.datepick._get($.datepick._curInst, 'useThemeRoller') ? 1 : 0;
		if (!$target.parents().andSelf().is('#' + $.datepick._mainDivId[useTR]) &&
				!$target.hasClass($.datepick.markerClassName) &&
				!$target.parents().andSelf().hasClass($.datepick._triggerClass[useTR]) &&
				$.datepick._datepickerShowing && !($.datepick._inDialog && $.blockUI))
			$.datepick._hideDatepick(null, '');
	},

	/* Adjust one of the date sub-fields.
	   @param  id      (string) the ID of the target field
	   @param  offset  (number) the amount to change by
	   @param  period  (string) 'D' for days, 'M' for months, 'Y' for years */
	_adjustDate: function(id, offset, period) {
		var inst = this._getInst($(id)[0]);
		this._adjustInstDate(inst, offset +
			(period == 'M' ? this._get(inst, 'showCurrentAtPos') : 0), // Undo positioning
			period);
		this._updateDatepick(inst);
		return false;
	},

	/* Show the month for today or the current selection.
	   @param  id  (string) the ID of the target field */
	_gotoToday: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._get(inst, 'gotoCurrent') && inst.dates[0])
			inst.cursorDate = new Date(inst.dates[0].getTime());
		else
			inst.cursorDate = this._daylightSavingAdjust(new Date());
		inst.drawMonth = inst.cursorDate.getMonth();
		inst.drawYear = inst.cursorDate.getFullYear();
		this._notifyChange(inst);
		this._adjustDate(target);
		return false;
	},

	/* Selecting a new month/year.
	   @param  id      (string) the ID of the target field
	   @param  select  (element) the select being chosen from
	   @param  period  (string) 'M' for month, 'Y' for year */
	_selectMonthYear: function(id, select, period) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		inst.selectingMonthYear = false;
		var value = parseInt(select.options[select.selectedIndex].value, 10);
		inst['selected' + (period == 'M' ? 'Month' : 'Year')] =
		inst['draw' + (period == 'M' ? 'Month' : 'Year')] = value;
		inst.cursorDate.setDate(Math.min(inst.cursorDate.getDate(),
			$.datepick._getDaysInMonth(inst.drawYear, inst.drawMonth)));
		inst.cursorDate['set' + (period == 'M' ? 'Month' : 'FullYear')](value);
		this._notifyChange(inst);
		this._adjustDate(target);
	},

	/* Restore input focus after not changing month/year.
	   @param  id  (string) the ID of the target field */
	_clickMonthYear: function(id) {
		var inst = this._getInst($(id)[0]);
		if (inst.input && inst.selectingMonthYear && !$.browser_is_supported_datepick.msie)
			$( inst.input ).trigger( 'focus' );		//FixIn: 8.7.11.12
		inst.selectingMonthYear = !inst.selectingMonthYear;
	},

	/* Action for changing the first week day.
	   @param  id   (string) the ID of the target field
	   @param  day  (number) the number of the first day, 0 = Sun, 1 = Mon, ... */
	_changeFirstDay: function(id, day) {
		var inst = this._getInst($(id)[0]);
		inst.settings.firstDay = day;
		this._updateDatepick(inst);
		return false;
	},

	/* Select a particular day.
	   @param  td         (element) the table cell containing the selection
	   @param  id         (string) the ID of the target field
	   @param  timestamp  (number) the timestamp for this day */
	_selectDay: function(td, id, timestamp) {
		var inst = this._getInst($(id)[0]);
		var useTR = this._get(inst, 'useThemeRoller') ? 1 : 0;
		if ($(td).hasClass(this._unselectableClass[useTR]))
			return false;
		var rangeSelect = this._get(inst, 'rangeSelect');
		var multiSelect = this._get(inst, 'multiSelect');
		if (rangeSelect)
			inst.stayOpen = !inst.stayOpen;
		else if (multiSelect)
			inst.stayOpen = true;
		if (inst.stayOpen) {
			$('.datepick td', inst.dpDiv).removeClass(this._selectedClass[useTR]);
			$(td).addClass(this._selectedClass[useTR]);
		}
		inst.cursorDate = this._daylightSavingAdjust(new Date(timestamp));
		var date = new Date(inst.cursorDate.getTime());
		if (rangeSelect && !inst.stayOpen)
			inst.dates[1] = date;
		else if (multiSelect) {
			var pos = -1;
			for (var i = 0; i < inst.dates.length; i++)
				if (inst.dates[i] && date.getTime() == inst.dates[i].getTime()) {
					pos = i;
					break;
				}
			if (pos > -1)
				inst.dates.splice(pos, 1);
			else if (inst.dates.length < multiSelect) {
				if (inst.dates[0])
					inst.dates.push(date);
				else
					inst.dates = [date];
				inst.stayOpen = (inst.dates.length != multiSelect);
			}
		}
		else
			inst.dates = [date];
		this._updateInput(id);
		if (inst.stayOpen)
			this._updateDatepick(inst);
		else if ((rangeSelect || multiSelect) && inst.inline)
			this._updateDatepick(inst);
		return false;
	},

	/* Erase the input field and hide the date picker.
	   @param  id  (string) the ID of the target field */
	_clearDate: function(id) {
		var target = $(id);
		var inst = this._getInst(target[0]);
		if (this._get(inst, 'mandatory'))
			return false;
		inst.stayOpen = false;
		inst.dates = (this._get(inst, 'showDefault') ?
			[this._getDefaultDate(inst)] : []);
		this._updateInput(target);
		return false;
	},

	/* Update the input field with the selected date.
	   @param  id       (string) the ID of the target field or
	                    (element) the target object */
	_updateInput: function(id) {
		var inst = this._getInst($(id)[0]);
		var dateStr = this._showDate(inst);
		this._updateAlternate(inst);
		var onSelect = this._get(inst, 'onSelect');
		if (onSelect)
			onSelect.apply((inst.input ? inst.input[0] : null),
				[dateStr, this._getDate(inst), inst]);  // Trigger custom callback
		else if (inst.input)
			inst.input.trigger('change'); // Fire the change event
		if (inst.inline)
			this._updateDatepick(inst);
		else if (!inst.stayOpen) {
			this._hideDatepick(null, this._get(inst, 'duration'));
			this._lastInput = inst.input[0];
			if (typeof(inst.input[0]) != 'object')
				$( inst.input ).trigger( 'focus' );		//FixIn: 8.7.11.12	// Restore focus
			this._lastInput = null;
		}
		return false;
	},

	/* Update the input field with the current date(s).
	   @param  inst  (object) the instance settings for this datepicker
	   @return  (string) the formatted date(s) */
	_showDate: function(inst) {
		var dateStr = '';
		if (inst.input) {
			dateStr = (inst.dates.length == 0 ? '' : this._formatDate(inst, inst.dates[0]));
			if (dateStr) {
				if (this._get(inst, 'rangeSelect'))
					dateStr += this._get(inst, 'rangeSeparator') +
						this._formatDate(inst, inst.dates[1] || inst.dates[0]);
				else if (this._get(inst, 'multiSelect'))
					for (var i = 1; i < inst.dates.length; i++)
						dateStr += this._get(inst, 'multiSeparator') +
							this._formatDate(inst, inst.dates[i]);
			}
			inst.input.val(dateStr);
		}
		return dateStr;
	},

	/* Update any alternate field to synchronise with the main field.
	   @param  inst  (object) the instance settings for this datepicker */
	_updateAlternate: function(inst) {
		var altField = this._get(inst, 'altField');
		if (altField) { // Update alternate field too
			var altFormat = this._get(inst, 'altFormat') || this._get(inst, 'dateFormat');
			var settings = this._getFormatConfig(inst);
			var dateStr = this.formatDate(altFormat, inst.dates[0], settings);
			if (dateStr && this._get(inst, 'rangeSelect'))
				dateStr += this._get(inst, 'rangeSeparator') + this.formatDate(
					altFormat, inst.dates[1] || inst.dates[0], settings);
			else if (this._get(inst, 'multiSelect'))
				for (var i = 1; i < inst.dates.length; i++)
					dateStr += this._get(inst, 'multiSeparator') +
						this.formatDate(altFormat, inst.dates[i], settings);
			$(altField).val(dateStr);
		}
	},

	/* Set as beforeShowDay function to prevent selection of weekends.
	   @param  date  (Date) the date to customise
	   @return  ([boolean, string]) is this date selectable?, what is its CSS class? */
	noWeekends: function(date) {
		return [(date.getDay() || 7) < 6, ''];
	},

	/* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	   @param  date  (Date) the date to get the week for
	   @return  (number) the number of the week within the year that contains this date */
	iso8601Week: function(date) {
		var checkDate = new Date(date.getTime());
		// Find Thursday of this week starting on Monday
		checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
		var time = checkDate.getTime();
		checkDate.setMonth(0); // Compare with Jan 1
		checkDate.setDate(1);
		return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
	},

	/* Provide status text for a particular date.
	   @param  date  (Date) the date to get the status for
	   @param  inst  (object) the current datepicker instance
	   @return  (string) the status display text for this date */
	dateStatus: function(date, inst) {
		return $.datepick.formatDate($.datepick._get(inst, 'dateStatus'),
			date, $.datepick._getFormatConfig(inst));
	},

	/* Parse a string value into a date object.
	   See formatDate below for the possible formats.
	   @param  format    (string) the expected format of the date
	   @param  value     (string) the date in the above format
	   @param  settings  (object) attributes include:
	                     shortYearCutoff  (number) the cutoff year for determining the century (optional)
	                     dayNamesShort    (string[7]) abbreviated names of the days from Sunday (optional)
	                     dayNames         (string[7]) names of the days from Sunday (optional)
	                     monthNamesShort  (string[12]) abbreviated names of the months (optional)
	                     monthNames       (string[12]) names of the months (optional)
	   @return  (Date) the extracted date value or null if value is blank */
	parseDate: function (format, value, settings) {
		if (format == null || value == null)
			throw 'Invalid arguments';
		value = (typeof value == 'object' ? value.toString() : value + '');
		if (value == '')
			return null;
		settings = settings || {};
		var shortYearCutoff = settings.shortYearCutoff || this._defaults.shortYearCutoff;
		shortYearCutoff = (typeof shortYearCutoff != 'string' ? shortYearCutoff :
			new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
		var dayNamesShort = settings.dayNamesShort || this._defaults.dayNamesShort;
		var dayNames = settings.dayNames || this._defaults.dayNames;
		var monthNamesShort = settings.monthNamesShort || this._defaults.monthNamesShort;
		var monthNames = settings.monthNames || this._defaults.monthNames;
		var year = -1;
		var month = -1;
		var day = -1;
		var doy = -1;
		var literal = false;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Extract a number from the string value
		var getNumber = function(match) {
			lookAhead(match);
			var size = (match == '@' ? 14 : (match == '!' ? 20 :
				(match == 'y' ? 4 : (match == 'o' ? 3 : 2))));
			var digits = new RegExp('^\\d{1,' + size + '}');
			var num = value.substring(iValue).match(digits);
			if (!num)
				throw 'Missing number at position ' + iValue;
			iValue += num[0].length;
			return parseInt(num[0], 10);
		};
		// Extract a name from the string value and convert to an index
		var getName = function(match, shortNames, longNames) {
			var names = (lookAhead(match) ? longNames : shortNames);
			for (var i = 0; i < names.length; i++) {
				if (value.substr(iValue, names[i].length) == names[i]) {
					iValue += names[i].length;
					return i + 1;
				}
			}
			throw 'Unknown name at position ' + iValue;
		};
		// Confirm that a literal character matches the string value
		var checkLiteral = function() {
			if (value.charAt(iValue) != format.charAt(iFormat))
				throw 'Unexpected literal at position ' + iValue;
			iValue++;
		};
		var iValue = 0;
		for (var iFormat = 0; iFormat < format.length; iFormat++) {
			if (literal)
				if (format.charAt(iFormat) == "'" && !lookAhead("'"))
					literal = false;
				else
					checkLiteral();
			else
				switch (format.charAt(iFormat)) {
					case 'd':
						day = getNumber('d');
						break;
					case 'D':
						getName('D', dayNamesShort, dayNames);
						break;
					case 'o':
						doy = getNumber('o');
						break;
					case 'w':
						getNumber('w');
						break;
					case 'm':
						month = getNumber('m');
						break;
					case 'M':
						month = getName('M', monthNamesShort, monthNames);
						break;
					case 'y':
						year = getNumber('y');
						break;
					case '@':
						var date = new Date(getNumber('@'));
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case '!':
						var date = new Date((getNumber('!') - this._ticksTo1970) / 10000);
						year = date.getFullYear();
						month = date.getMonth() + 1;
						day = date.getDate();
						break;
					case "'":
						if (lookAhead("'"))
							checkLiteral();
						else
							literal = true;
						break;
					default:
						checkLiteral();
				}
		}
		if (iValue < value.length)
			throw 'Additional text found at end';
		if (year == -1)
			year = new Date().getFullYear();
		else if (year < 100)
			year += (shortYearCutoff == -1 ? 1900 : new Date().getFullYear() -
				new Date().getFullYear() % 100 - (year <= shortYearCutoff ? 0 : 100));
		if (doy > -1) {
			month = 1;
			day = doy;
			do {
				var dim = this._getDaysInMonth(year, month - 1);
				if (day <= dim)
					break;
				month++;
				day -= dim;
			} while (true);
		}
		var date = this._daylightSavingAdjust(new Date(year, month - 1, day));
		if (date.getFullYear() != year || date.getMonth() + 1 != month || date.getDate() != day)
			throw 'Invalid date'; // E.g. 31/02/*
		return date;
	},

	/* Standard date formats. */
	ATOM: 'yy-mm-dd', // RFC 3339 (ISO 8601)
	COOKIE: 'D, dd M yy',
	ISO_8601: 'yy-mm-dd',
	RFC_822: 'D, d M y',
	RFC_850: 'DD, dd-M-y',
	RFC_1036: 'D, d M y',
	RFC_1123: 'D, d M yy',
	RFC_2822: 'D, d M yy',
	RSS: 'D, d M y', // RFC 822
	TICKS: '!',
	TIMESTAMP: '@',
	W3C: 'yy-mm-dd', // ISO 8601

	_ticksTo1970: (((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
		Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),

	/* Format a date object into a string value.
	   The format can be combinations of the following:
	   d  - day of month (no leading zero)
	   dd - day of month (two digit)
	   o  - day of year (no leading zeros)
	   oo - day of year (three digit)
	   D  - day name short
	   DD - day name long
	   w  - week of year (no leading zero)
	   ww - week of year (two digit)
	   m  - month of year (no leading zero)
	   mm - month of year (two digit)
	   M  - month name short
	   MM - month name long
	   y  - year (two digit)
	   yy - year (four digit)
	   @ - Unix timestamp (ms since 01/01/1970)
	   ! - Windows ticks (100ns since 01/01/0001)
	   '...' - literal text
	   '' - single quote
	   @param  format    (string) the desired format of the date
	   @param  date      (Date) the date value to format
	   @param  settings  (object) attributes include:
	                     dayNamesShort    (string[7]) abbreviated names of the days from Sunday (optional)
	                     dayNames         (string[7]) names of the days from Sunday (optional)
	                     monthNamesShort  (string[12]) abbreviated names of the months (optional)
	                     monthNames       (string[12]) names of the months (optional)
						 calculateWeek    (function) function that determines week of the year (optional)
	   @return  (string) the date in the above format */
	formatDate: function (format, date, settings) {
		if (!date)
			return '';
		settings = settings || {};
		var dayNamesShort = settings.dayNamesShort || this._defaults.dayNamesShort;
		var dayNames = settings.dayNames || this._defaults.dayNames;
		var monthNamesShort = settings.monthNamesShort || this._defaults.monthNamesShort;
		var monthNames = settings.monthNames || this._defaults.monthNames;
		var calculateWeek = settings.calculateWeek || this._defaults.calculateWeek;
		// Check whether a format character is doubled
		var lookAhead = function(match) {
			var matches = (iFormat + 1 < format.length && format.charAt(iFormat + 1) == match);
			if (matches)
				iFormat++;
			return matches;
		};
		// Format a number, with leading zero if necessary
		var formatNumber = function(match, value, len) {
			var num = '' + value;
			if (lookAhead(match))
				while (num.length < len)
					num = '0' + num;
			return num;
		};
		// Format a name, short or long as requested
		var formatName = function(match, value, shortNames, longNames) {
			return (lookAhead(match) ? longNames[value] : shortNames[value]);
		};
		var output = '';
		var literal = false;
		if (date)
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal)
					if (format.charAt(iFormat) == "'" && !lookAhead("'"))
						literal = false;
					else
						output += format.charAt(iFormat);
				else
					switch (format.charAt(iFormat)) {
						case 'd':
							output += formatNumber('d', date.getDate(), 2);
							break;
						case 'D':
							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
							break;
						case 'o':
							output += formatNumber('o',
								(date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000, 3);
							break;
						case 'w':
							output += formatNumber('w', calculateWeek(date), 2);
							break;
						case 'm':
							output += formatNumber('m', date.getMonth() + 1, 2);
							break;
						case 'M':
							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
							break;
						case 'y':
							output += (lookAhead('y') ? date.getFullYear() :
								(date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100);
							break;
						case '@':
							output += date.getTime();
							break;
						case '!':
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case "'":
							if (lookAhead("'"))
								output += "'";
							else
								literal = true;
							break;
						default:
							output += format.charAt(iFormat);
					}
			}
		return output;
	},

	/* Get a setting value, defaulting if necessary.
	   @param  inst  (object) the instance settings for this datepicker
	   @param  name  (string) the name of the property
	   @return  (any) the property's value */
	_get: function(inst, name) {
		return inst.settings[name] !== undefined ?
			inst.settings[name] : this._defaults[name];
	},

	/* Parse existing date and initialise date picker.
	   @param  inst  (object) the instance settings for this datepicker */
	_setDateFromField: function(inst) {
		var dateFormat = this._get(inst, 'dateFormat');
		var rangeSelect = this._get(inst, 'rangeSelect');
		var multiSelect = this._get(inst, 'multiSelect');
		inst.lastVal = (inst.input ? inst.input.val() : '');
		var dates = inst.lastVal;
		dates = (rangeSelect ? dates.split(this._get(inst, 'rangeSeparator')) :
			(multiSelect ? dates.split(this._get(inst, 'multiSeparator')) : [dates]));
		inst.dates = [];
		var settings = this._getFormatConfig(inst);
		for (var i = 0; i < dates.length; i++)
			try {
				inst.dates[i] = this.parseDate(dateFormat, dates[i], settings);
			}
			catch (event) {
				inst.dates[i] = null;
			}
		for (var i = inst.dates.length - 1; i >= 0; i--)
			if (!inst.dates[i])
				inst.dates.splice(i, 1);
		if (rangeSelect && inst.dates.length < 2)
			inst.dates[1] = inst.dates[0];
		if (multiSelect && inst.dates.length > multiSelect)
			inst.dates.splice(multiSelect, inst.dates.length);
		inst.cursorDate = new Date((inst.dates[0] || this._getDefaultDate(inst)).getTime());
		inst.drawMonth = inst.cursorDate.getMonth();
		inst.drawYear = inst.cursorDate.getFullYear();
		this._adjustInstDate(inst);
	},

	/* Retrieve the default date shown on opening.
	   @param  inst  (object) the instance settings for this datepicker
	   @return  (Date) the default date */
	_getDefaultDate: function(inst) {
		return this._restrictMinMax(inst,
			this._determineDate(inst, this._get(inst, 'defaultDate'), new Date()));
	},

	/* A date may be specified as an exact value or a relative one.
	   @param  inst         (object) the instance settings for this datepicker
	   @param  date         (Date or number or string) the date or offset
	   @param  defaultDate  (Date) the date to use if no other supplied
	   @return  (Date) the decoded date */
	_determineDate: function(inst, date, defaultDate) {
		var offsetNumeric = function(offset) {
			var date = new Date();
			date.setDate(date.getDate() + offset);
			return date;
		};
		var offsetString = function(offset) {
			try {
				return $.datepick.parseDate($.datepick._get(inst, 'dateFormat'),
					offset, $.datepick._getFormatConfig(inst));
			}
			catch (e) {
				// Ignore
			}
			var date = (offset.toLowerCase().match(/^c/) ?
				$.datepick._getDate(inst) : null) || new Date();
			var year = date.getFullYear();
			var month = date.getMonth();
			var day = date.getDate();
			var pattern = /([+-]?[0-9]+)\s*(d|w|m|y)?/g;
			var matches = pattern.exec(offset.toLowerCase());
			while (matches) {
				switch (matches[2] || 'd') {
					case 'd':
						day += parseInt(matches[1], 10); break;
					case 'w':
						day += parseInt(matches[1], 10) * 7; break;
					case 'm':
						month += parseInt(matches[1], 10);
						day = Math.min(day, $.datepick._getDaysInMonth(year, month));
						break;
					case 'y':
						year += parseInt(matches[1], 10);
						day = Math.min(day, $.datepick._getDaysInMonth(year, month));
						break;
				}
				matches = pattern.exec(offset.toLowerCase());
			}
			return new Date(year, month, day);
		};
		date = (date == null ? defaultDate : (typeof date == 'string' ? offsetString(date) :
			(typeof date == 'number' ? (isNaN(date) || date == Infinity || date == -Infinity ?
			defaultDate : offsetNumeric(date)) : date)));
		date = (date && (date.toString() == 'Invalid Date' ||
			date.toString() == 'NaN') ? defaultDate : date);
		if (date) {
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);
		}
		return this._daylightSavingAdjust(date);
	},

	/* Handle switch to/from daylight saving.
	   Hours may be non-zero on daylight saving cut-over:
	   > 12 when midnight changeover, but then cannot generate
	   midnight datetime, so jump to 1AM, otherwise reset.
	   @param  date  (Date) the date to check
	   @return  (Date) the corrected date */
	_daylightSavingAdjust: function(date) {
		if (!date) return null;
		date.setHours(date.getHours() > 12 ? date.getHours() + 2 : 0);
		return date;
	},

	/* Set the date(s) directly.
	   @param  inst     (object) the instance settings for this datepicker
	   @param  date     (Date or Date[] or number or string) the new date or start of a range
	   @param  endDate  (Date or number or string) the end of a range */
	_setDate: function(inst, date, endDate) {
		date = (!date ? [] : (isArray(date) ? date : [date]));
		if (endDate)
			date.push(endDate);
		var clear = (date.length == 0);
		var origMonth = inst.cursorDate.getMonth();
		var origYear = inst.cursorDate.getFullYear();
		inst.dates = [this._restrictMinMax(inst, this._determineDate(inst, date[0], new Date()))];
		inst.cursorDate = new Date(inst.dates[0].getTime());
		inst.drawMonth = inst.cursorDate.getMonth();
		inst.drawYear = inst.cursorDate.getFullYear();
		if (this._get(inst, 'rangeSelect'))
			inst.dates[1] = (date.length < 1 ? inst.dates[0] :
				this._restrictMinMax(inst, this._determineDate(inst, date[1], null)));
		else if (this._get(inst, 'multiSelect'))
			for (var i = 1; i < date.length; i++)
				inst.dates[i] = this._restrictMinMax(inst, this._determineDate(inst, date[i], null));
		if (origMonth != inst.cursorDate.getMonth() || origYear != inst.cursorDate.getFullYear())
			this._notifyChange(inst);
		this._adjustInstDate(inst);
		this._showDate(inst);
	},

	/* Retrieve the date(s) directly.
	   @param  inst  (object) the instance settings for this datepicker
	   @return  (Date or Date[2] or Date[]) the current date or dates
	            (for a range or multiples) */
	_getDate: function(inst) {
		var startDate = (inst.input && inst.input.val() == '' ? null : inst.dates[0]);
		if (this._get(inst, 'rangeSelect'))
			return (startDate ? [inst.dates[0], inst.dates[1] || inst.dates[0]] : [null, null]);
		else if (this._get(inst, 'multiSelect'))
			return inst.dates.slice(0, inst.dates.length);
		else
			return startDate;
	},


	/* Generate the HTML for the current state of the date picker.
	   @param  inst  (object) the instance settings for this datepicker
	   @return  (string) the new HTML for the datepicker */
	_generateHTML: function(inst) {
		var today = new Date();
		today = this._daylightSavingAdjust(
			new Date(today.getFullYear(), today.getMonth(), today.getDate())); // Clear time


		var showStatus = this._get(inst, 'showStatus');
		var initStatus = this._get(inst, 'initStatus') || '&#xa0;';
		var isRTL = this._get(inst, 'isRTL');
		var useTR = this._get(inst, 'useThemeRoller') ? 1 : 0;
		// Build the date picker HTML
		var clear = (this._get(inst, 'mandatory') ? '' :
			'<div class="' + this._clearClass[useTR] + '"><a href="javascript:void(0)" ' +
			'onclick="jQuery.datepick._clearDate(\'#' + inst.id + '\');"' +
			this._addStatus(useTR, showStatus, inst.id, this._get(inst, 'clearStatus'), initStatus) +
			'>' + this._get(inst, 'clearText') + '</a></div>');
		var controls = '<div class="' + this._controlClass[useTR] + '">' + (isRTL ? '' : clear) +
			'<div class="' + this._closeClass[useTR] + '"><a href="javascript:void(0)" ' +
			'onclick="jQuery.datepick._hideDatepick();"' +
			this._addStatus(useTR, showStatus, inst.id, this._get(inst, 'closeStatus'), initStatus) +
			'>' + this._get(inst, 'closeText') + '</a></div>' + (isRTL ? clear : '')  + '</div>';
		var prompt = this._get(inst, 'prompt');
		var closeAtTop = this._get(inst, 'closeAtTop');
		var hideIfNoPrevNext = this._get(inst, 'hideIfNoPrevNext');
		var navigationAsDateFormat = this._get(inst, 'navigationAsDateFormat');
		var showBigPrevNext = this._get(inst, 'showBigPrevNext');
		var numMonths = this._getNumberOfMonths(inst);
		var showCurrentAtPos = this._get(inst, 'showCurrentAtPos');
		var stepMonths = this._get(inst, 'stepMonths');
		var stepBigMonths = this._get(inst, 'stepBigMonths');
		var isMultiMonth = (numMonths[0] != 1 || numMonths[1] != 1);
		var minDate = this._getMinMaxDate(inst, 'min', true);
		var maxDate = this._getMinMaxDate(inst, 'max');
		var drawMonth = inst.drawMonth - showCurrentAtPos;
		var drawYear = inst.drawYear;
		if (drawMonth < 0) {
			drawMonth += 12;
			drawYear--;
		}
		if (maxDate) { // Don't show past maximum unless also restricted by minimum
			var maxDraw = this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
				maxDate.getMonth() - (numMonths[0] * numMonths[1]) + 1, maxDate.getDate()));
			maxDraw = (minDate && maxDraw < minDate ? minDate : maxDraw);
			while (this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw) {
				drawMonth--;
				if (drawMonth < 0) {
					drawMonth = 11;
					drawYear--;
				}
			}
		}
		inst.drawMonth = drawMonth;
		inst.drawYear = drawYear;
		// Controls and links
		var prevText = this._get(inst, 'prevText');
		prevText = (!navigationAsDateFormat ? prevText : this.formatDate(prevText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
			this._getFormatConfig(inst)));
		var prevBigText = (showBigPrevNext ? this._get(inst, 'prevBigText') : '');
		prevBigText = (!navigationAsDateFormat ? prevBigText : this.formatDate(prevBigText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepBigMonths, 1)),
			this._getFormatConfig(inst)));
		var prev = '<div class="' + this._prevClass[useTR] + '">' +
			(this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
			(showBigPrevNext ? '<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#' +
			inst.id + '\', -' + stepBigMonths + ', \'M\');"' +
			this._addStatus(useTR, showStatus, inst.id, this._get(inst, 'prevBigStatus'), initStatus) +
			'>' + prevBigText + '</a>' : '') +
			'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#' +
			inst.id + '\', -' + stepMonths + ', \'M\');"' +
			this._addStatus(useTR, showStatus, inst.id, this._get(inst, 'prevStatus'), initStatus) +
			'>' + prevText + '</a>' :
			(hideIfNoPrevNext ? '&#xa0;' : (showBigPrevNext ? '<label>' + prevBigText + '</label>' : '') +
			'<label>' + prevText + '</label>')) + '</div>';
		var nextText = this._get(inst, 'nextText');
		nextText = (!navigationAsDateFormat ? nextText : this.formatDate(nextText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
			this._getFormatConfig(inst)));
		var nextBigText = (showBigPrevNext ? this._get(inst, 'nextBigText') : '');
		nextBigText = (!navigationAsDateFormat ? nextBigText : this.formatDate(nextBigText,
			this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepBigMonths, 1)),
			this._getFormatConfig(inst)));
		var next = '<div class="' + this._nextClass[useTR] + '">' +
			(this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
			'<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#' +
			inst.id + '\', +' + stepMonths + ', \'M\');"' +
			this._addStatus(useTR, showStatus, inst.id, this._get(inst, 'nextStatus'), initStatus) +
			'>' + nextText + '</a>' +
			(showBigPrevNext ? '<a href="javascript:void(0)" onclick="jQuery.datepick._adjustDate(\'#' +
			inst.id + '\', +' + stepBigMonths + ', \'M\');"' +
			this._addStatus(useTR, showStatus, inst.id, this._get(inst, 'nextBigStatus'), initStatus) +
			'>' + nextBigText + '</a>' : '') :
			(hideIfNoPrevNext ? '&#xa0;' : '<label>' + nextText + '</label>' +
			(showBigPrevNext ? '<label>' + nextBigText + '</label>' : ''))) + '</div>';
		var currentText = this._get(inst, 'currentText');
		var gotoDate = (this._get(inst, 'gotoCurrent') && inst.dates[0] ? inst.dates[0] : today);
		currentText = (!navigationAsDateFormat ? currentText :
			this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
		var html = (closeAtTop && !inst.inline ? controls : '');/* +
			'<div class="' + this._linksClass[useTR] + '">' + (isRTL ? next : prev) +
			'<div class="' + this._currentClass[useTR] + '">' + (this._isInRange(inst, gotoDate) ?
			'<a href="javascript:void(0)" onclick="jQuery.datepick._gotoToday(\'#' + inst.id + '\');"' +
			this._addStatus(useTR, showStatus, inst.id, this._get(inst, 'currentStatus'), initStatus) + '>' +
			currentText + '</a>' : (hideIfNoPrevNext ? '&#xa0;' : '<label>' + currentText + '</label>')) +
			'</div>' + (isRTL ? prev : next) + '</div>' +
			(prompt ? '<div class="' + this._promptClass[useTR] + '"><span>' +
			prompt + '</span></div>' : '');/**/
                    html +=  '<div class="calendar-links">' + (isRTL ? next : prev)   ;
                    html +=    (isRTL ? prev : next) + '</div>' ;
		var firstDay = parseInt(this._get(inst, 'firstDay'), 10);
		firstDay = (isNaN(firstDay) ? 0 : firstDay);
		var changeFirstDay = this._get(inst, 'changeFirstDay');
		var dayNames = this._get(inst, 'dayNames');
		var dayNamesShort = this._get(inst, 'dayNamesShort');
		var dayNamesMin = this._get(inst, 'dayNamesMin');
		var monthNames = this._get(inst, 'monthNames');
		var beforeShowDay = this._get(inst, 'beforeShowDay');
		var showOtherMonths = this._get(inst, 'showOtherMonths');
		var selectOtherMonths = this._get(inst, 'selectOtherMonths');
		var showWeeks = this._get(inst, 'showWeeks');
		var calculateWeek = this._get(inst, 'calculateWeek') || this.iso8601Week;
		var weekStatus = this._get(inst, 'weekStatus');
		var status = (showStatus ? this._get(inst, 'dayStatus') || initStatus : '');
		var dateStatus = this._get(inst, 'statusForDate') || this.dateStatus;
		var defaultDate = this._getDefaultDate(inst);
		for (var row = 0; row < numMonths[0]; row++) {
			for (var col = 0; col < numMonths[1]; col++) {
				var cursorDate = this._daylightSavingAdjust(
					new Date(drawYear, drawMonth, inst.cursorDate.getDate()));
				html += '<div class="' + this._oneMonthClass[useTR] +            // Responsive skin
					(col == 0 && !useTR ? ' ' + this._newRowClass[useTR] : '') + '">' +
					this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
					cursorDate, row > 0 || col > 0, useTR, showStatus, initStatus, monthNames) + // Draw month headers
					'<table class="' + this._tableClass[useTR] + '" cellpadding="0" cellspacing="0"><thead>' +
					'<tr class="' + this._tableHeaderClass[useTR] + '">' + (showWeeks ? '<th' +
					this._addStatus(useTR, showStatus, inst.id, weekStatus, initStatus) + '>' +
					this._get(inst, 'weekHeader') + '</th>' : '');
				for (var dow = 0; dow < 7; dow++) { // Days of the week
					var day = (dow + firstDay) % 7;
					var dayStatus = (!showStatus || !changeFirstDay ? '' :
						status.replace(/DD/, dayNames[day]).replace(/D/, dayNamesShort[day]));
					html += '<th' + ((dow + firstDay + 6) % 7 < 5 ? '' :
						' class="' + this._weekendClass[useTR] + '"') + '>' +
						(!changeFirstDay ? '<span' +
						this._addStatus(useTR, showStatus, inst.id, dayNames[day], initStatus) :
						'<a href="javascript:void(0)" onclick="jQuery.datepick._changeFirstDay(\'#' +
						inst.id + '\', ' + day + ');"' +
						this._addStatus(useTR, showStatus, inst.id, dayStatus, initStatus)) +
						' title="' + dayNames[day] + '">' +
						dayNamesMin[day] + (changeFirstDay ? '</a>' : '</span>') + '</th>';
				}
				html += '</tr></thead><tbody>';
				var daysInMonth = this._getDaysInMonth(drawYear, drawMonth);
				if (drawYear == inst.cursorDate.getFullYear() && drawMonth == inst.cursorDate.getMonth())
					inst.cursorDate.setDate(Math.min(inst.cursorDate.getDate(), daysInMonth));
				var leadDays = (this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
				var numRows = (isMultiMonth ? 6 : Math.ceil((leadDays + daysInMonth) / 7));
				var printDate = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
				for (var dRow = 0; dRow < numRows; dRow++) { // Create datepicker rows
					html += '<tr class="' + this._weekRowClass[useTR] + '">' +
						(showWeeks ? '<td class="' + this._weekColClass[useTR] + '"' +
						this._addStatus(useTR, showStatus, inst.id, weekStatus, initStatus) + '>' +
						calculateWeek(printDate) + '</td>' : '');
					for (var dow = 0; dow < 7; dow++) { // Create datepicker days
						var daySettings = (beforeShowDay ?
							beforeShowDay.apply((inst.input ? inst.input[0] : null), [printDate]) : [true, '']);
						var otherMonth = (printDate.getMonth() != drawMonth);
						var unselectable = (otherMonth && !selectOtherMonths) || !daySettings[0] ||
							(minDate && printDate < minDate) || (maxDate && printDate > maxDate);
						var selected = (this._get(inst, 'rangeSelect') && inst.dates[0] &&
							printDate.getTime() >= inst.dates[0].getTime() &&
							printDate.getTime() <= (inst.dates[1] || inst.dates[0]).getTime());
						for (var i = 0; i < inst.dates.length; i++)
							selected = selected || (inst.dates[i] &&
								printDate.getTime() == inst.dates[i].getTime());
						var empty = otherMonth && !showOtherMonths;
						html += '<td data-content="" class="' + this._dayClass[useTR] +
							((dow + firstDay + 6) % 7 >= 5 ? ' ' + this._weekendClass[useTR] : '') + // Highlight weekends
							(otherMonth ? ' ' + this._otherMonthClass[useTR] : '') + // Highlight days from other months
							((printDate.getTime() == cursorDate.getTime() &&
							drawMonth == inst.cursorDate.getMonth() && inst.keyEvent) || // User pressed key
							(defaultDate.getTime() == printDate.getTime() &&
							defaultDate.getTime() == cursorDate.getTime()) ?
							// Or defaultDate is selected printedDate and defaultDate is cursorDate
							' ' /*+ $.datepick._dayOverClass[useTR]*/ : '') + // Highlight selected day		//FixIn: 9.2.1.7
							(unselectable ? ' ' + this._unselectableClass[useTR] :
							' ' + this._selectableClass[useTR]) +  // Highlight unselectable days
							(empty ? '' : ' ' + daySettings[1] + // Highlight custom dates
							(selected ? ' ' + this._selectedClass[useTR] : '') + // Currently selected
							// Highlight today (if different)
							(printDate.getTime() == today.getTime() ? ' ' + this._todayClass[useTR] : '')) + '"' +
							(!empty && daySettings[2] ? ' title="' + daySettings[2] + '"' : '') + // Cell title
//							(unselectable ? '' : ' onmouseover="' + 'jQuery.datepick._doMouseOver(this,\'' +
							(false ? '' : ' onmouseover="' + 'jQuery.datepick._doMouseOver(this,\'' +					//FixIn: 2023-08-06
							inst.id + '\',' + printDate.getTime() + ')"' +
							' onmouseout="jQuery.datepick._doMouseOut(this,\'' + inst.id + '\')"' +
							' onclick="jQuery.datepick._selectDay(this,\'#' + // Select
							inst.id + '\',' + printDate.getTime() + ')"') + '>';

							/** Start content of Day cell *************************************************************/
							html += '<div class="wpbc-cell-box">' +														//FixIn: 8.9.4.13
										'<div class="wpbc-diagonal-el">' +
											'<div class="wpbc-co-out">' +
												'<svg height="100%" width="100%" viewBox="0 0 100 100" preserveAspectRatio="none">' +
													'<polygon points="0,0 0,99 99,0"></polygon>' +
													'<polygon points="0,0 0,100 49,100 49,0"></polygon>' +
												'</svg>' +
											'</div>' +
											'<div class="wpbc-co-in">' +
												'<svg height="100%" width="100%" viewBox="0 0 98 98" preserveAspectRatio="none">' +
													'<polygon points="0,99 99,99 99,0"></polygon>' +
													'<polygon points="50,98 98,98 98,0 50,0"></polygon>' +
												'</svg>' +
											'</div>' +
										'</div>' +
										    //'<div class="check-in-div"><div></div></div>' +		// Deprecated! remove this line
										    //'<div class="check-out-div"><div></div></div>' +		// Deprecated! remove this line
										'<div class="date-cell-content">' +												//FixIn: 8.9.4.13
											'<div class="date-content-top">' +
												(unselectable ? '' : ((typeof (wpbc_show_date_info_top) == 'function') ? wpbc_show_date_info_top( inst.id, printDate.getTime() ) : '')) +
											'</div>' +
											(empty ? '&#xa0;' : // Not showing other months //FixIn:6.0.1.2
											(unselectable ? '<span>' + printDate.getDate()+ '</span>' : '<a>' + printDate.getDate() + '</a>')) +
											'<div class="date-content-bottom">'+
												(unselectable ? '' : ((typeof (wpbc_show_date_info_bottom) == 'function') ? wpbc_show_date_info_bottom( inst.id, printDate.getTime() ) : '')) +
											'</div>' +
										'</div>' +
									'</div>';
						/** End content of Day cell *******************************************************************/
                        html += '</td>';
						printDate.setDate(printDate.getDate() + 1);
						printDate = this._daylightSavingAdjust(printDate);
					}
					html += '</tr>';
				}
				drawMonth++;
				if (drawMonth > 11) {
					drawMonth = 0;
					drawYear++;
				}
				html += '</tbody></table></div>';
			}
			if (useTR)
				html += '<div class="' + this._newRowClass[useTR] + '"></div>';
		}
		html += (showStatus ? '<div style="clear: both;"></div><div id="' + this._statusId[useTR] +
			inst.id +'" class="' + this._statusClass[useTR] + '">' + initStatus + '</div>' : '') +
			(!closeAtTop && !inst.inline ? controls : '') +
			'<div style="clear: both;"></div>' +
			($.browser_is_supported_datepick.msie && parseInt($.browser_is_supported_datepick.version, 10) < 7 && !inst.inline ?
			'<iframe src="javascript:false;" class="' + this._coverClass[useTR] + '"></iframe>' : '');
		inst.keyEvent = false;
		return html;
	},

	/* Generate the month and year header.
	   @param  inst        (object) the instance settings for this datepicker
	   @param  drawMonth   (number) the current month
	   @param  drawYear    (number) the current year
	   @param  minDate     (Date) the minimum allowed date or null if none
	   @param  maxDate     (Date) the maximum allowed date or null if none
	   @param  cursorDate  (Date) the current date position
	   @param  secondary   (boolean) true if not the first month/year header
	   @param  useTR       (number) 1 if applying ThemeRoller styling, 0 if not
	   @param  showStatus  (boolean) true if status bar is visible
	   @param  initStatus  (string) the default status message
	   @param  monthNames  (string[12]) the names of the months
	   @return  (string) the HTML for the month and year */
	_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
			cursorDate, secondary, useTR, showStatus, initStatus, monthNames) {
		var minDraw = this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1));
		minDate = (minDate && minDraw < minDate ? minDraw : minDate);
		var changeMonth = this._get(inst, 'changeMonth');
		var changeYear = this._get(inst, 'changeYear');
		var showMonthAfterYear = this._get(inst, 'showMonthAfterYear');
		var html = '<div class="' + this._monthYearClass[useTR] + '">';
		var monthHtml = '';
		// Month selection
		if (secondary || !changeMonth)
			monthHtml += '<span class="' + this._monthClass[useTR] + '">' +
				monthNames[drawMonth] + '</span>';
		else {
			var inMinYear = (minDate && minDate.getFullYear() == drawYear);
			var inMaxYear = (maxDate && maxDate.getFullYear() == drawYear);
			monthHtml += '<select class="' + this._monthSelectClass[useTR] + '" ' +
				'onchange="jQuery.datepick._selectMonthYear(\'#' + inst.id + '\', this, \'M\');" ' +
				'onclick="jQuery.datepick._clickMonthYear(\'#' + inst.id + '\');"' +
				this._addStatus(useTR, showStatus, inst.id, this._get(inst, 'monthStatus'),
				initStatus) + '>';
			for (var month = 0; month < 12; month++) {
				if ((!inMinYear || month >= minDate.getMonth()) &&
						(!inMaxYear || month <= maxDate.getMonth()))
					monthHtml += '<option value="' + month + '"' +
						(month == drawMonth ? ' selected="selected"' : '') +
						'>' + monthNames[month] + '</option>';
			}
			monthHtml += '</select>';
		}
		if (!showMonthAfterYear)
			html += monthHtml + (secondary || !changeMonth || !changeYear ? '&#xa0;' : '');
		// Year selection
		if (secondary || !changeYear)
			html += '<span class="' + this._yearClass[useTR] + '">' + drawYear + '</span>';
		else {
			// Determine range of years to display
			var years = this._get(inst, 'yearRange').split(':');
			var year = 0;
			var endYear = 0;
			if (years.length != 2) {
				year = drawYear - 10;
				endYear = drawYear + 10;
			} else if (years[0].charAt(0) == '+' || years[0].charAt(0) == '-') {
				year = drawYear + parseInt(years[0], 10);
				endYear = drawYear + parseInt(years[1], 10);
			} else {
				year = parseInt(years[0], 10);
				endYear = parseInt(years[1], 10);
			}
			year = (minDate ? Math.max(year, minDate.getFullYear()) : year);
			endYear = (maxDate ? Math.min(endYear, maxDate.getFullYear()) : endYear);
			html += '<select class="' + this._yearSelectClass[useTR] + '" ' +
				'onchange="jQuery.datepick._selectMonthYear(\'#' + inst.id + '\', this, \'Y\');" ' +
				'onclick="jQuery.datepick._clickMonthYear(\'#' + inst.id + '\');"' +
				this._addStatus(useTR, showStatus, inst.id, this._get(inst, 'yearStatus'),
				initStatus) + '>';
			for (; year <= endYear; year++) {
				html += '<option value="' + year + '"' +
					(year == drawYear ? ' selected="selected"' : '') +
					'>' + year + '</option>';
			}
			html += '</select>';
		}
		html += this._get(inst, 'yearSuffix');
		if (showMonthAfterYear)
			html += (secondary || !changeMonth || !changeYear ? '&#xa0;' : '') + monthHtml;
		html += '</div>'; // Close datepicker_header
		return html;
	},

	/* Provide code to set and clear the status panel.
	   @param  useTR       (number) 1 if applying ThemeRoller styling, 0 if not
	   @param  showStatus  (boolean) true if the status bar is shown
	   @param  id          (string) the ID of the datepicker instance
	   @param  text        (string) the status text to display
	   @param  initStatus  (string) the default status message
	   @return  (string) hover actions for the status messages */
	_addStatus: function(useTR, showStatus, id, text, initStatus) {
		return (showStatus ? ' onmouseover="jQuery(\'#' + this._statusId[useTR] + id +
			'\').html(\'' + (text || initStatus) + '\');" ' +
			'onmouseout="jQuery(\'#' + this._statusId[useTR] + id +
			'\').html(\'' + initStatus + '\');"' : '');
	},

	/* Adjust one of the date sub-fields.
	   @param  inst    (object) the instance settings for this datepicker
	   @param  offset  (number) the change to apply
	   @param  period  (string) 'D' for days, 'M' for months, 'Y' for years */
	_adjustInstDate: function(inst, offset, period) {
		var yearMonth = inst.drawYear + '/' + inst.drawMonth;
		var year = inst.drawYear + (period == 'Y' ? offset : 0);
		var month = inst.drawMonth + (period == 'M' ? offset : 0);
		var day = Math.min(inst.cursorDate.getDate(), this._getDaysInMonth(year, month)) +
			(period == 'D' ? offset : 0);
		inst.cursorDate = this._restrictMinMax(inst,
			this._daylightSavingAdjust(new Date(year, month, day)));
		inst.drawMonth = inst.cursorDate.getMonth();
		inst.drawYear = inst.cursorDate.getFullYear();
		if (yearMonth != inst.drawYear + '/' + inst.drawMonth)
			this._notifyChange(inst);
	},

	/* Ensure a date is within any min/max bounds.
	   @param  inst  (object) the instance settings for this datepicker
	   @param  date  (Date) the date to check
	   @return  (Date) the restricted date */
	_restrictMinMax: function(inst, date) {
		var minDate = this._getMinMaxDate(inst, 'min', true);
		var maxDate = this._getMinMaxDate(inst, 'max');
		date = (minDate && date < minDate ? new Date(minDate.getTime()) : date);
		date = (maxDate && date > maxDate ? new Date(maxDate.getTime()) : date);
		return date;
	},

	/* Notify change of month/year.
	   @param  inst  (object) the instance settings for this datepicker */
	_notifyChange: function(inst) {
		var onChange = this._get(inst, 'onChangeMonthYear');
		if (onChange)
			onChange.apply((inst.input ? inst.input[0] : null),
				[inst.cursorDate.getFullYear(), inst.cursorDate.getMonth() + 1,
				this._daylightSavingAdjust(new Date(
				inst.cursorDate.getFullYear(), inst.cursorDate.getMonth(), 1)), inst]);
	},

	/* Determine the number of months to show.
	   @param  inst  (object) the instance settings for this datepicker
	   @return  (number[2]) the number of rows and columns to display */
	_getNumberOfMonths: function(inst) {
		var numMonths = this._get(inst, 'numberOfMonths');
		return (numMonths == null ? [1, 1] :
			(typeof numMonths == 'number' ? [1, numMonths] : numMonths));
	},

	/* Determine the current minimum/maximum date.
	   Ensure no time components are set. May be overridden for a range.
	   @param  inst        (object) the instance settings for this datepicker
	   @param  minMax      (string) 'min' or 'max' for required date
	   @param  checkRange  (boolean) true to allow override for a range minimum
	   @return  (Date) the minimum/maximum date or null if none */
	_getMinMaxDate: function(inst, minMax, checkRange) {
		var date = this._determineDate(inst, this._get(inst, minMax + 'Date'), null);
		var rangeMin = this._getRangeMin(inst);
		return (checkRange && rangeMin && (!date || rangeMin > date) ? rangeMin : date);
	},

	/* Retrieve the temporary range minimum when in the process of selecting.
	   @param  inst  (object) the instance settings for this datepicker
	   @return  (Date) the temporary minimum or null */
	_getRangeMin: function(inst) {
		return (this._get(inst, 'rangeSelect') && inst.dates[0] &&
			!inst.dates[1] ? inst.dates[0] : null);
	},

	/* Find the number of days in a given month.
	   @param  year   (number) the full year
	   @param  month  (number) the month (0 to 11)
	   @return  (number) the number of days in this month */
	_getDaysInMonth: function(year, month) {
		return 32 - new Date(year, month, 32).getDate();
	},

	/* Find the day of the week of the first of a month.
	   @param  year   (number) the full year
	   @param  month  (number) the month (0 to 11)
	   @return  (number) 0 = Sunday, 1 = Monday, ... */
	_getFirstDayOfMonth: function(year, month) {
		return new Date(year, month, 1).getDay();
	},

	/* Determines if we should allow a "prev/next" month display change.
	   @param  inst      (object) the instance settings for this datepicker
	   @param  offset    (number) the number of months to change by
	   @param  curYear   (number) the full current year
	   @param  curMonth  (number) the current month (0 to 11)
	   @return  (boolean) true if prev/next allowed, false if not */
	_canAdjustMonth: function(inst, offset, curYear, curMonth) {
		var numMonths = this._getNumberOfMonths(inst);
		var date = this._daylightSavingAdjust(new Date(curYear,
			curMonth + (offset < 0 ? offset : numMonths[0] * numMonths[1]), 1));
		if (offset < 0)
			date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
		return this._isInRange(inst, date);
	},

	/* Is the given date in the accepted range?
	   @param  inst  (object) the instance settings for this datepicker
	   @param  date  (Date) the date to check
	   @return  (boolean) true if the date is in the allowed minimum/maximum, false if not */
	_isInRange: function(inst, date) {
		// During range selection, use minimum of selected date and range start
		var minDate = this._getRangeMin(inst) || this._getMinMaxDate(inst, 'min');
		var maxDate = this._getMinMaxDate(inst, 'max');
		return ((!minDate || date >= minDate) && (!maxDate || date <= maxDate));
	},

	/* Provide the configuration settings for formatting/parsing.
	   @param  inst  (object) the instance settings for this datepicker
	   @return  (object) the settings subset */
	_getFormatConfig: function(inst) {
		return {shortYearCutoff: this._get(inst, 'shortYearCutoff'),
			dayNamesShort: this._get(inst, 'dayNamesShort'), dayNames: this._get(inst, 'dayNames'),
			monthNamesShort: this._get(inst, 'monthNamesShort'), monthNames: this._get(inst, 'monthNames')};
	},

	/* Format the given date for display.
	   @param  inst   (object) the instance settings for this datepicker
	   @param  year   (number, optional) the full year
	   @param  month  (number, optional) the month of the year (0 to 11)
	   @param  day    (number, optional) the day of the month
	   @return  (string) formatted date */
	_formatDate: function(inst, year, month, day) {
		if (!year)
			inst.dates[0] = new Date(inst.cursorDate.getTime());
		var date = (year ? (typeof year == 'object' ? year :
			this._daylightSavingAdjust(new Date(year, month, day))) : inst.dates[0]);
		return this.formatDate(this._get(inst, 'dateFormat'), date, this._getFormatConfig(inst));
	}
});

/* jQuery extend now ignores nulls!
   @param  target  (object) the object to extend
   @param  props   (object) the new settings
   @return  (object) the updated object */
function extendRemove(target, props) {
	$.extend(target, props);
	for (var name in props)
		if (props[name] == null || props[name] == undefined)
			target[name] = props[name];
	return target;
};

/* Determine whether an object is an array.
   @param  a  (object) the object to test
   @return  (boolean) true if an array, false if not */
function isArray(a) {
	return (a && a.constructor == Array);
};

/* Invoke the datepicker functionality.
   @param  options  (string) a command, optionally followed by additional parameters or
                    (object) settings for attaching new datepicker functionality
   @return  (jQuery) jQuery object */
$.fn.datepick = function(options){
	var otherArgs = Array.prototype.slice.call(arguments, 1);
	if (typeof options == 'string' && (options == 'isDisabled' ||
			options == 'getDate' || options == 'settings'))
		return $.datepick['_' + options + 'Datepick'].
			apply($.datepick, [this[0]].concat(otherArgs));
	if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string')
		return $.datepick['_' + options + 'Datepick'].
			apply($.datepick, [this[0]].concat(otherArgs));
	return this.each(function() {
		typeof options == 'string' ?
			$.datepick['_' + options + 'Datepick'].
				apply($.datepick, [this].concat(otherArgs)) :
			$.datepick._attachDatepick(this, options);
	});
};

$.datepick = new Datepick(); // Singleton instance

$(function() {

	$( document ).on( 'mousedown', $.datepick._checkExternalClick ).find( 'body' ).append( $.datepick.dpDiv );			//FixIn: 8.7.11.12
});

})(jQuery);
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/js/datepick/jquery.datepick-ko.js?ver=10.0 
/* Korean initialisation for the jQuery calendar extension. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com). */
(function($) {
	$.datepick.regional['ko'] = {
		clearText: '지우기', clearStatus: '',
		closeText: '닫기', closeStatus: '',
		prevText: '이전달', prevStatus: '',
		prevBigText: '&#x3c;&#x3c;', prevBigStatus: '',
		nextText: '다음달', nextStatus: '',
		nextBigText: '&#x3e;&#x3e;', nextBigStatus: '',
		currentText: '오늘', currentStatus: '',
		monthNames: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
		'7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
		monthNamesShort: ['1월(JAN)','2월(FEB)','3월(MAR)','4월(APR)','5월(MAY)','6월(JUN)',
		'7월(JUL)','8월(AUG)','9월(SEP)','10월(OCT)','11월(NOV)','12월(DEC)'],
		monthStatus: '', yearStatus: '',
		weekHeader: 'Wk', weekStatus: '',
		dayNames: ['일','월','화','수','목','금','토'],
		dayNamesShort: ['일','월','화','수','목','금','토'],
		dayNamesMin: ['일','월','화','수','목','금','토'],
		dayStatus: 'DD', dateStatus: 'D, M d',
		dateFormat: 'yy-mm-dd', firstDay: 0,
		initStatus: '', isRTL: false,
		showMonthAfterYear: false, yearSuffix: ''};
	$.datepick.setDefaults($.datepick.regional['ko']);
})(jQuery);
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/_dist/all/_out/wpbc_all.js?ver=10.0 
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

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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
  }; // Calendars 	----------------------------------------------------------------------------------------------------


  var p_calendars = obj.calendars_obj = obj.calendars_obj || {// sort            : "booking_id",
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
    //FixIn: 9.9.0.29
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


  obj.calendar__set_parameters = function (resource_id, calendar_property_obj) {
    var is_complete_overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
      //FixIn: 9.9.0.29
      if (obj.calendar__is_prop_int(prop_name)) {
        p_calendars['calendar_' + resource_id][prop_name] = parseInt(p_calendars['calendar_' + resource_id][prop_name]);
      }

      return p_calendars['calendar_' + resource_id][prop_name];
    }

    return null; // If some property not defined, then null;
  }; // -----------------------------------------------------------------------------------------------------------------
  // Bookings 	----------------------------------------------------------------------------------------------------


  var p_bookings = obj.bookings_obj = obj.bookings_obj || {// calendar_1: Object {
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
  }; // Dates

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


  obj.bookings_in_calendar__set_dates = function (resource_id, dates_obj) {
    var is_complete_overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

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
  }; // Any  PARAMS   in bookings

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
  }; // -----------------------------------------------------------------------------------------------------------------
  // Seasons 	----------------------------------------------------------------------------------------------------


  var p_seasons = obj.seasons_obj = obj.seasons_obj || {// calendar_1: Object {
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

  obj.seasons__set = function (resource_id, dates_obj) {
    var is_complete_overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

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
  }; // Other parameters 			------------------------------------------------------------------------------------


  var p_other = obj.other_obj = obj.other_obj || {};

  obj.set_other_param = function (param_key, param_val) {
    p_other[param_key] = param_val;
  };

  obj.get_other_param = function (param_key) {
    return p_other[param_key];
  }; // -----------------------------------------------------------------------------------------------------------------


  return obj;
}(_wpbc || {}, jQuery);
/**
 * Extend _wpbc with  new methods        //FixIn: 9.8.6.2
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


  obj.balancer__init = function (resource_id, function_name) {
    var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
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
      //FixIn: 9.8.10.1
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
      //FixIn: 9.8.10.1
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
      //FixIn: 9.8.10.1
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
      //FixIn: 9.8.10.1
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
      //FixIn: 9.8.10.1
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
 *
 *	var inst= wpbc_calendar__get_inst(3); inst.dates=[]; wpbc__calendar__on_select_days('22.09.2023 - 23.09.2023' , {'resource_id':3} , inst);  inst.stayOpen = false;jQuery.datepick._updateDatepick( inst );
 *  if it doesn't work  in 100% situations. check wpbc_select_days_in_calendar(3, [ [ 2023, "09", 26 ], [ 2023, "08", 25 ]]);
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
  } // If the calendar with the same Booking resource is activated already, then exit.


  if (true === jQuery('#calendar_booking' + resource_id).hasClass('hasDatepick')) {
    return false;
  } // -----------------------------------------------------------------------------------------------------------------
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
  } // -----------------------------------------------------------------------------------------------------------------
  // Min - Max days to scroll/show
  // -----------------------------------------------------------------------------------------------------------------


  var local__min_date = 0;
  local__min_date = new Date(wpbc_today[0], parseInt(wpbc_today[1]) - 1, wpbc_today[2], 0, 0, 0); //FixIn: 9.9.0.17
  //console.log( local__min_date );

  var local__max_date = _wpbc.calendar__get_param_value(resource_id, 'booking_max_monthes_in_calendar'); //local__max_date = new Date(2024, 5, 28);  It is here issue of not selectable dates, but some dates showing in calendar as available, but we can not select it.
  // Define last day in calendar (as a last day of month (and not date, which is related to actual 'Today' date).
  // E.g. if today is 2023-09-25, and we set 'Number of months to scroll' as 5 months, then last day will be 2024-02-29 and not the 2024-02-25.


  var cal_last_day_in_month = jQuery.datepick._determineDate(null, local__max_date, new Date());

  cal_last_day_in_month = new Date(cal_last_day_in_month.getFullYear(), cal_last_day_in_month.getMonth() + 1, 0);
  local__max_date = cal_last_day_in_month;

  if (location.href.indexOf('page=wpbc-new') != -1 && location.href.indexOf('booking_hash') != -1 // Comment this line for ability to add  booking in past days at  Booking > Add booking page.
  ) {
    local__min_date = null;
    local__max_date = null;
  }

  var local__start_weekday = _wpbc.calendar__get_param_value(resource_id, 'booking_start_day_weeek');

  var local__number_of_months = parseInt(_wpbc.calendar__get_param_value(resource_id, 'calendar_number_of_months'));
  jQuery('#calendar_booking' + resource_id).text(''); // Remove all HTML in calendar tag
  // -----------------------------------------------------------------------------------------------------------------
  // Show calendar
  // -----------------------------------------------------------------------------------------------------------------

  jQuery('#calendar_booking' + resource_id).datepick({
    beforeShowDay: function beforeShowDay(js_date) {
      return wpbc__calendar__apply_css_to_days(js_date, {
        'resource_id': resource_id
      }, this);
    },
    onSelect: function onSelect(string_dates, js_dates_arr) {
      /**
      *	string_dates   =   '23.08.2023 - 26.08.2023'    |    '23.08.2023 - 23.08.2023'    |    '19.09.2023, 24.08.2023, 30.09.2023'
      *  js_dates_arr   =   range: [ Date (Aug 23 2023), Date (Aug 25 2023)]     |     multiple: [ Date(Oct 24 2023), Date(Oct 20 2023), Date(Oct 16 2023) ]
      */
      return wpbc__calendar__on_select_days(string_dates, {
        'resource_id': resource_id
      }, this);
    },
    onHover: function onHover(string_date, js_date) {
      return wpbc__calendar__on_hover_days(string_date, js_date, {
        'resource_id': resource_id
      }, this);
    },
    onChangeMonthYear: function onChangeMonthYear(year, real_month, js_date__1st_day_in_month) {},
    showOn: 'both',
    numberOfMonths: local__number_of_months,
    stepMonths: 1,
    prevText: '&laquo;',
    nextText: '&raquo;',
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
  }); // -----------------------------------------------------------------------------------------------------------------
  // Clear today date highlighting
  // -----------------------------------------------------------------------------------------------------------------

  setTimeout(function () {
    wpbc_calendars__clear_days_highlighting(resource_id);
  }, 500); //FixIn: 7.1.2.8
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
  var today_date = new Date(wpbc_today[0], parseInt(wpbc_today[1]) - 1, wpbc_today[2], 0, 0, 0); // Today JS_Date_Obj.

  var class_day = wpbc__get__td_class_date(date); // '1-9-2023'

  var sql_class_day = wpbc__get__sql_class_date(date); // '2023-01-09'

  var resource_id = 'undefined' !== typeof calendar_params_arr['resource_id'] ? calendar_params_arr['resource_id'] : '1'; // '1'
  // Get Data --------------------------------------------------------------------------------------------------------

  var date_bookings_obj = _wpbc.bookings_in_calendar__get_for_date(resource_id, sql_class_day); // Array with CSS classes for date ---------------------------------------------------------------------------------


  var css_classes__for_date = [];
  css_classes__for_date.push('sql_date_' + sql_class_day); //  'sql_date_2023-07-21'

  css_classes__for_date.push('cal4date-' + class_day); //  'cal4date-7-21-2023'

  css_classes__for_date.push('wpbc_weekday_' + date.getDay()); //  'wpbc_weekday_4'

  var is_day_selectable = false; // If something not defined,  then  this date closed ---------------------------------------------------------------

  if (false === date_bookings_obj) {
    css_classes__for_date.push('date_user_unavailable');
    return [is_day_selectable, css_classes__for_date.join(' ')];
  } // -----------------------------------------------------------------------------------------------------------------
  //   date_bookings_obj  - Defined.            Dates can be selectable.
  // -----------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------
  // Add season names to the day CSS classes -- it is required for correct  work  of conditional fields --------------


  var season_names_arr = _wpbc.seasons__get_for_date(resource_id, sql_class_day);

  for (var season_key in season_names_arr) {
    css_classes__for_date.push(season_names_arr[season_key]); //  'wpdevbk_season_september_2023'
  } // -----------------------------------------------------------------------------------------------------------------
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
      break;

    case 'check_in':
      css_classes__for_date.push('timespartly', 'check_in_time'); //FixIn: 9.9.0.33

      if (date_bookings_obj['summary']['status_for_bookings'].indexOf('pending') > -1) {
        css_classes__for_date.push('check_in_time_date2approve');
      } else if (date_bookings_obj['summary']['status_for_bookings'].indexOf('approved') > -1) {
        css_classes__for_date.push('check_in_time_date_approved');
      }

      break;

    case 'check_out':
      css_classes__for_date.push('timespartly', 'check_out_time'); //FixIn: 9.9.0.33

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
    var is_set_pending_days_selectable = _wpbc.calendar__get_param_value(resource_id, 'pending_days_selectable'); // set pending days selectable          //FixIn: 8.6.1.18


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
    return false;
  }

  var class_day = wpbc__get__td_class_date(date); // '1-9-2023'

  var sql_class_day = wpbc__get__sql_class_date(date); // '2023-01-09'

  var resource_id = 'undefined' !== typeof calendar_params_arr['resource_id'] ? calendar_params_arr['resource_id'] : '1'; // '1'
  // Get Data --------------------------------------------------------------------------------------------------------

  var date_booking_obj = _wpbc.bookings_in_calendar__get_for_date(resource_id, sql_class_day); // {...}


  if (!date_booking_obj) {
    return false;
  } // T o o l t i p s -------------------------------------------------------------------------------------------------


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

  wpbc_set_tooltip___for__calendar_date(tooltip_text, resource_id, class_day); //  U n h o v e r i n g    in    UNSELECTABLE_CALENDAR  ------------------------------------------------------------

  var is_unselectable_calendar = jQuery('#calendar_booking_unselectable' + resource_id).length > 0; //FixIn: 8.0.1.2

  var is_booking_form_exist = jQuery('#booking_form_div' + resource_id).length > 0;

  if (is_unselectable_calendar && !is_booking_form_exist) {
    /**
     *  Un Hover all dates in calendar (without the booking form), if only Availability Calendar here and we do not insert Booking form by mistake.
     */
    wpbc_calendars__clear_days_highlighting(resource_id); // Clear days highlighting

    var css_of_calendar = '.wpbc_only_calendar #calendar_booking' + resource_id;
    jQuery(css_of_calendar + ' .datepick-days-cell, ' + css_of_calendar + ' .datepick-days-cell a').css('cursor', 'default'); // Set cursor to Default

    return false;
  } //  D a y s    H o v e r i n g  ------------------------------------------------------------------------------------


  if (location.href.indexOf('page=wpbc') == -1 || location.href.indexOf('page=wpbc-new') > 0 || location.href.indexOf('page=wpbc-availability') > 0) {
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

  var is_unselectable_calendar = jQuery('#calendar_booking_unselectable' + resource_id).length > 0; //FixIn: 8.0.1.2

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

  wpbc_disable_time_fields_in_booking_form(resource_id); // Hook -- trigger day selection -----------------------------------------------------------------------------------

  var mouse_clicked_dates = date; // Can be: "05.10.2023 - 07.10.2023"  |  "10.10.2023 - 10.10.2023"  |

  var all_selected_dates_arr = wpbc_get__selected_dates_sql__as_arr(resource_id); // Can be: [ "2023-10-05", "2023-10-06", "2023-10-07", … ]

  jQuery(".booking_form_div").trigger("date_selected", [resource_id, mouse_clicked_dates, all_selected_dates_arr]);
}
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
  var time_fields_obj_arr = wpbc_get__time_fields__in_booking_form__as_arr(resource_id); // 2. Get all selected dates in  SQL format  like this [ "2023-08-23", "2023-08-24", "2023-08-25", ... ]

  var selected_dates_arr = wpbc_get__selected_dates_sql__as_arr(resource_id); // 3. Get child booking resources  or single booking resource  that  exist  in dates

  var child_resources_arr = wpbc_clone_obj(_wpbc.booking__get_param_value(resource_id, 'resources_id_arr__in_dates'));
  var sql_date;
  var child_resource_id;
  var merged_seconds;
  var time_fields_obj;
  var is_intersect;
  var is_check_in; // 4. Loop  all  time Fields options

  for (var field_key in time_fields_obj_arr) {
    time_fields_obj_arr[field_key].disabled = 0; // By default this time field is not disabled

    time_fields_obj = time_fields_obj_arr[field_key]; // { times_as_seconds: [ 21600, 23400 ], value_option_24h: '06:00 - 06:30', name: 'rangetime2[]', jquery_option: jQuery_Object {}}
    // Loop  all  selected dates

    for (var i = 0; i < selected_dates_arr.length; i++) {
      //FixIn: 9.9.0.31
      if ('Off' === _wpbc.calendar__get_param_value(resource_id, 'booking_recurrent_time') && selected_dates_arr.length > 1) {
        //TODO: skip some fields checking if it's start / end time for mulple dates  selection  mode.
        //TODO: we need to fix situation  for entimes,  when  user  select  several  dates,  and in start  time booked 00:00 - 15:00 , but systsme block untill 15:00 the end time as well,  which  is wrong,  because it 2 or 3 dates selection  and end date can be fullu  available
        if (0 == i && time_fields_obj['name'].indexOf('endtime') >= 0) {
          break;
        }

        if (selected_dates_arr.length - 1 == i && time_fields_obj['name'].indexOf('starttime') >= 0) {
          break;
        }
      } // Get Date: '2023-08-18'


      sql_date = selected_dates_arr[i];
      var how_many_resources_intersected = 0; // Loop all resources ID

      for (var res_key in child_resources_arr) {
        child_resource_id = child_resources_arr[res_key]; // _wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[12].booked_time_slots.merged_seconds		= [ "07:00:11 - 07:30:02", "10:00:11 - 00:00:00" ]
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
  } // 5. Now we can disable time slot in HTML by  using  ( field.disabled == 1 ) property


  wpbc__html__time_field_options__set_disabled(time_fields_obj_arr);
  jQuery(".booking_form_div").trigger('wpbc_hook_timeslots_disabled', [resource_id, selected_dates_arr]); // Trigger hook on disabling timeslots.		Usage: 	jQuery( ".booking_form_div" ).on( 'wpbc_hook_timeslots_disabled', function ( event, bk_type, all_dates ){ ... } );		//FixIn: 8.7.11.9
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
    } // if ( ( parseInt( time_A ) == parseInt( time_interval_B[ j ][ 0 ] ) ) || ( parseInt( time_A ) == parseInt( time_interval_B[ j ][ 1 ] ) ) ) {
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
  var time_fields_obj_arr = []; // Loop all Time Fields

  for (var ctf = 0; ctf < time_fields_arr.length; ctf++) {
    var time_field = time_fields_arr[ctf];
    var time_option = jQuery(time_field + ' option'); // Loop all options in time field

    for (var j = 0; j < time_option.length; j++) {
      var jquery_option = jQuery(time_field + ' option:eq(' + j + ')');
      var value_option_seconds_arr = jquery_option.val().split('-');
      var times_as_seconds = []; // Get time as seconds

      if (value_option_seconds_arr.length) {
        //FixIn: 9.8.10.1
        for (var i in value_option_seconds_arr) {
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
} // -----------------------------------------------------------------------------------------------------------------
// S e l e c t e d    D a t e s  /  T i m e - F i e l d s
// -----------------------------------------------------------------------------------------------------------------

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
    //FixIn: 9.8.10.1
    for (var i in selected_dates_arr) {
      selected_dates_arr[i] = selected_dates_arr[i].trim();
      selected_dates_arr[i] = selected_dates_arr[i].split('.');

      if (selected_dates_arr[i].length > 1) {
        selected_dates_arr[i] = selected_dates_arr[i][2] + '-' + selected_dates_arr[i][1] + '-' + selected_dates_arr[i][0];
      }
    }
  } // Remove empty elements from an array


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


function wpbc_get__selected_time_fields__in_booking_form__as_arr(resource_id) {
  var is_only_selected_time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  /**
   * Fields with  []  like this   select[name="rangetime1[]"]
   * it's when we have 'multiple' in shortcode:   [select* rangetime multiple  "06:00 - 06:30" ... ]
   */
  var time_fields_arr = ['select[name="rangetime' + resource_id + '"]', 'select[name="rangetime' + resource_id + '[]"]', 'select[name="starttime' + resource_id + '"]', 'select[name="starttime' + resource_id + '[]"]', 'select[name="endtime' + resource_id + '"]', 'select[name="endtime' + resource_id + '[]"]', 'select[name="durationtime' + resource_id + '"]', 'select[name="durationtime' + resource_id + '[]"]'];
  var time_fields_obj_arr = []; // Loop all Time Fields

  for (var ctf = 0; ctf < time_fields_arr.length; ctf++) {
    var time_field = time_fields_arr[ctf];
    var time_option;

    if (is_only_selected_time) {
      time_option = jQuery('#booking_form' + resource_id + ' ' + time_field + ' option:selected'); // Exclude conditional  fields,  because of using '#booking_form3 ...'
    } else {
      time_option = jQuery('#booking_form' + resource_id + ' ' + time_field + ' option'); // All  time fields
    } // Loop all options in time field


    for (var j = 0; j < time_option.length; j++) {
      var jquery_option = jQuery(time_option[j]); // Get only  selected options 	//jQuery( time_field + ' option:eq(' + j + ')' );

      var value_option_seconds_arr = jquery_option.val().split('-');
      var times_as_seconds = []; // Get time as seconds

      if (value_option_seconds_arr.length) {
        //FixIn: 9.8.10.1
        for (var i in value_option_seconds_arr) {
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
  } // Text:   [starttime] - [endtime] -----------------------------------------------------------------------------


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
} // ---------------------------------------------------------------------------------------------------------------------
// S U P P O R T    for    C A L E N D A R
// ---------------------------------------------------------------------------------------------------------------------

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

    inst.cursorDate = new Date(); // In some cases,  the setFullYear can  set  only Year,  and not the Month and day      //FixIn:6.2.3.5

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

  if ('available' != date_bookings_obj['summary']['status_for_day']) {
    var is_set_pending_days_selectable = _wpbc.calendar__get_param_value(resource_id, 'pending_days_selectable'); // set pending days selectable          //FixIn: 8.6.1.18


    switch (date_bookings_obj['summary']['status_for_bookings']) {
      case 'pending': // Situations for "change-over" days:

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
    //FixIn: 8.4.5.16
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
/**
 * Update Look  of calendar
 *
 * @param resource_id
 */


function wpbc_calendar__update_look(resource_id) {
  var inst = wpbc_calendar__get_inst(resource_id);

  jQuery.datepick._updateDatepick(inst);
} // ---------------------------------------------------------------------------------------------------------------------
// S U P P O R T    M A T H
// ---------------------------------------------------------------------------------------------------------------------

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
  var is_intersected = Math.max(interval_A[0], interval_B[0]) - Math.min(interval_A[1], interval_B[1]); // if ( 0 == is_intersected ) {
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
} // ---------------------------------------------------------------------------------------------------------------------
//  T O O L T I P S
// ---------------------------------------------------------------------------------------------------------------------

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
  var td_el = jQuery('#calendar_booking' + resource_id + ' td.cal4date-' + td_class).get(0); //FixIn: 9.0.1.1

  if ('undefined' !== typeof td_el && undefined == td_el._tippy && '' !== tooltip_text) {
    wpbc_tippy(td_el, {
      content: function content(reference) {
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
      //FixIn: 9.4.2.2
      //delay			 : [0, 9999999999],						// Debuge  tooltip
      ignoreAttributes: true,
      touch: true,
      //['hold', 500], // 500ms delay				//FixIn: 9.2.1.5
      appendTo: function appendTo() {
        return document.body;
      }
    });
    return true;
  }

  return false;
}
/**
 * ====================================================================================================================
 *	includes/__js/cal/days_select_custom.js
 * ====================================================================================================================
 */
//FixIn: 9.8.9.2

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
} // ---------------------------------------------------------------------------------------------------------------------

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
} // ---------------------------------------------------------------------------------------------------------------------

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
} // ---------------------------------------------------------------------------------------------------------------------

/**
 * Set Fixed Days selection with  1 mouse click  - after page load
 *
 * @integer resource_id			- 1				   -- ID of booking resource (calendar) -
 * @integer days_number			- 3				   -- number of days to  select	-
 * @array week_days__start	- [-1] | [ 1, 5]   --  { -1 - Any | 0 - Su,  1 - Mo,  2 - Tu, 3 - We, 4 - Th, 5 - Fr, 6 - Sat }
 */


function wpbc_cal_ready_days_select__fixed(resource_id, days_number) {
  var week_days__start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [-1];
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


function wpbc_cal_days_select__fixed(resource_id, days_number) {
  var week_days__start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [-1];

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
} // ---------------------------------------------------------------------------------------------------------------------

/**
 * Set Range Days selection  with  2 mouse clicks  - after page load
 *
 * @integer resource_id			- 1				   		-- ID of booking resource (calendar)
 * @integer days_min			- 7				   		-- Min number of days to select
 * @integer days_max			- 30			   		-- Max number of days to select
 * @array days_specific			- [] | [7,14,21,28]		-- Restriction for Specific number of days selection
 * @array week_days__start		- [-1] | [ 1, 5]   		--  { -1 - Any | 0 - Su,  1 - Mo,  2 - Tu, 3 - We, 4 - Th, 5 - Fr, 6 - Sat }
 */


function wpbc_cal_ready_days_select__range(resource_id, days_min, days_max) {
  var days_specific = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var week_days__start = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [-1];
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


function wpbc_cal_days_select__range(resource_id, days_min, days_max) {
  var days_specific = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var week_days__start = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [-1];

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
  //FixIn: 9.8.6.2
  wpbc_calendar__loading__start(params['resource_id']);

  if (wpbc_balancer__is_wait(params, 'wpbc_calendar__load_data__ajx')) {
    return false;
  } //FixIn: 9.8.6.2


  wpbc_calendar__blur__stop(params['resource_id']); // console.groupEnd(); console.time('resource_id_' + params['resource_id']);

  console.groupCollapsed('WPBC_AJX_CALENDAR_LOAD');
  console.log(' == Before Ajax Send - calendars_all__get() == ', _wpbc.calendars_all__get()); // Start Ajax

  jQuery.post(wpbc_global1.wpbc_ajaxurl, {
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
    console.groupEnd(); //FixIn: 9.8.6.2

    var ajx_post_data__resource_id = wpbc_get_resource_id__from_ajx_post_data_url(this.data);
    wpbc_balancer__completed(ajx_post_data__resource_id, 'wpbc_calendar__load_data__ajx'); // Probably Error

    if (_typeof(response_data) !== 'object' || response_data === null) {
      var jq_node = wpbc_get_calendar__jq_node__for_messages(this.data);
      var message_type = 'info';

      if ('' === response_data) {
        response_data = 'The server responds with an empty string. The server probably stopped working unexpectedly. <br>Please check your <strong>error.log</strong> in your server configuration for relative errors.';
        message_type = 'warning';
      } // Show Message


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
    } // Show Calendar


    wpbc_calendar__loading__stop(response_data['resource_id']); // -------------------------------------------------------------------------------------------------
    // Bookings - Dates

    _wpbc.bookings_in_calendar__set_dates(response_data['resource_id'], response_data['ajx_data']['dates']); // Bookings - Child or only single booking resource in dates


    _wpbc.booking__set_param_value(response_data['resource_id'], 'resources_id_arr__in_dates', response_data['ajx_data']['resources_id_arr__in_dates']); // Aggregate booking resources,  if any ?


    _wpbc.booking__set_param_value(response_data['resource_id'], 'aggregate_resource_id_arr', response_data['ajx_data']['aggregate_resource_id_arr']); // -------------------------------------------------------------------------------------------------
    // Update calendar


    wpbc_calendar__update_look(response_data['resource_id']);

    if ('undefined' !== typeof response_data['ajx_data']['ajx_after_action_message'] && '' != response_data['ajx_data']['ajx_after_action_message'].replace(/\n/g, "<br />")) {
      var jq_node = wpbc_get_calendar__jq_node__for_messages(this.data); // Show Message

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
    } //jQuery( '#ajax_respond' ).html( response_data );		// For ability to show response, add such DIV element to page

  }).fail(function (jqXHR, textStatus, errorThrown) {
    if (window.console && window.console.log) {
      console.log('Ajax_Error', jqXHR, textStatus, errorThrown);
    }

    var ajx_post_data__resource_id = wpbc_get_resource_id__from_ajx_post_data_url(this.data);
    wpbc_balancer__completed(ajx_post_data__resource_id, 'wpbc_calendar__load_data__ajx'); // Get Content of Error Message

    var error_message = '<strong>' + 'Error!' + '</strong> ' + errorThrown;

    if (jqXHR.status) {
      error_message += ' (<b>' + jqXHR.status + '</b>)';

      if (403 == jqXHR.status) {
        error_message += '<br> Probably nonce for this page has been expired. Please <a href="javascript:void(0)" onclick="javascript:location.reload();">reload the page</a>.';
        error_message += '<br> Otherwise, please check this <a style="font-weight: 600;" href="https://wpbookingcalendar.com/faq/request-do-not-pass-security-check/">troubleshooting instruction</a>.<br>';
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
  }) // .done(   function ( data, textStatus, jqXHR ) {   if ( window.console && window.console.log ){ console.log( 'second success', data, textStatus, jqXHR ); }    })
  // .always( function ( data_jqXHR, textStatus, jqXHR_errorThrown ) {   if ( window.console && window.console.log ){ console.log( 'always finished', data_jqXHR, textStatus, jqXHR_errorThrown ); }     })
  ; // End Ajax
} // ---------------------------------------------------------------------------------------------------------------------
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
} //TODO: remove vars:       bk_2clicks_mode_days_start, bk_1click_mode_days_start     date2approve   date_approved

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
 *			var notice_message_id = wpbc_front_end__show_message( message_verif_requred, { 'type': 'warning', 'delay': 10000, 'if_visible_not_show': true,
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


function wpbc_front_end__show_message(message) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
  } // Check  if showed message in some hidden parent section and show it. But it must  be lower than '.wpbc_container'


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
 * Scroll to specific element
 *
 * @param jq_node					string or jQuery element,  where scroll  to
 * @param extra_shift_offset		int shift offset from  jq_node
 */


function wpbc_do_scroll(jq_node) {
  var extra_shift_offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

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

  targetOffset += extra_shift_offset; // Scroll only  if we did not scroll before

  if (!jQuery('html,body').is(':animated')) {
    jQuery('html,body').animate({
      scrollTop: targetOffset
    }, 500);
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndwYmMuanMiLCJhanhfbG9hZF9iYWxhbmNlci5qcyIsIndwYmNfY2FsLmpzIiwiZGF5c19zZWxlY3RfY3VzdG9tLmpzIiwid3BiY19jYWxfYWp4LmpzIiwid3BiY19mZV9tZXNzYWdlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBQ0EsU0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBO0FBRUEsU0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBQSxLQUFBLEdBQUEsVUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBO0FBRUE7QUFDQSxNQUFBLFFBQUEsR0FBQSxHQUFBLENBQUEsWUFBQSxHQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUE7QUFDQSxJQUFBLE9BQUEsRUFBQSxDQURBO0FBRUEsSUFBQSxLQUFBLEVBQUEsRUFGQTtBQUdBLElBQUEsTUFBQSxFQUFBO0FBSEEsR0FBQTs7QUFLQSxFQUFBLEdBQUEsQ0FBQSxnQkFBQSxHQUFBLFVBQUEsU0FBQSxFQUFBLFNBQUEsRUFBQTtBQUNBLElBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxHQUFBLFNBQUE7QUFDQSxHQUZBOztBQUlBLEVBQUEsR0FBQSxDQUFBLGdCQUFBLEdBQUEsVUFBQSxTQUFBLEVBQUE7QUFDQSxXQUFBLFFBQUEsQ0FBQSxTQUFBLENBQUE7QUFDQSxHQUZBLENBWkEsQ0FpQkE7OztBQUNBLE1BQUEsV0FBQSxHQUFBLEdBQUEsQ0FBQSxhQUFBLEdBQUEsR0FBQSxDQUFBLGFBQUEsSUFBQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEEsR0FBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxFQUFBLEdBQUEsQ0FBQSxvQkFBQSxHQUFBLFVBQUEsV0FBQSxFQUFBO0FBRUEsV0FBQSxnQkFBQSxPQUFBLFdBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQTtBQUNBLEdBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSxjQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUE7QUFFQSxJQUFBLFdBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxHQUFBLEVBQUE7QUFDQSxJQUFBLFdBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxDQUFBLElBQUEsSUFBQSxXQUFBO0FBQ0EsSUFBQSxXQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsQ0FBQSx5QkFBQSxJQUFBLEtBQUE7QUFFQSxHQU5BO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsRUFBQSxHQUFBLENBQUEscUJBQUEsR0FBQSxVQUFBLGFBQUEsRUFBQTtBQUFBO0FBRUEsUUFBQSx5QkFBQSxHQUFBLENBQUEsbUJBQUEsRUFBQSxtQkFBQSxFQUFBLGlCQUFBLENBQUE7QUFFQSxRQUFBLFVBQUEsR0FBQSx5QkFBQSxDQUFBLFFBQUEsQ0FBQSxhQUFBLENBQUE7QUFFQSxXQUFBLFVBQUE7QUFDQSxHQVBBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSxrQkFBQSxHQUFBLFVBQUEsYUFBQSxFQUFBO0FBQ0EsSUFBQSxXQUFBLEdBQUEsYUFBQTtBQUNBLEdBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSxrQkFBQSxHQUFBLFlBQUE7QUFDQSxXQUFBLFdBQUE7QUFDQSxHQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSx3QkFBQSxHQUFBLFVBQUEsV0FBQSxFQUFBO0FBRUEsUUFBQSxHQUFBLENBQUEsb0JBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQTtBQUVBLGFBQUEsV0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBO0FBQ0EsS0FIQSxNQUdBO0FBQ0EsYUFBQSxLQUFBO0FBQ0E7QUFDQSxHQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLEVBQUEsR0FBQSxDQUFBLHdCQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUEscUJBQUEsRUFBQTtBQUFBLFFBQUEscUJBQUEsdUVBQUEsS0FBQTs7QUFFQSxRQUFBLENBQUEsR0FBQSxDQUFBLG9CQUFBLENBQUEsV0FBQSxDQUFBLElBQUEsU0FBQSxxQkFBQSxFQUFBO0FBQ0EsTUFBQSxHQUFBLENBQUEsY0FBQSxDQUFBLFdBQUE7QUFDQTs7QUFFQSxTQUFBLElBQUEsU0FBQSxJQUFBLHFCQUFBLEVBQUE7QUFFQSxNQUFBLFdBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQSxxQkFBQSxDQUFBLFNBQUEsQ0FBQTtBQUNBOztBQUVBLFdBQUEsV0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBO0FBQ0EsR0FaQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSx5QkFBQSxHQUFBLFVBQUEsV0FBQSxFQUFBLFNBQUEsRUFBQSxVQUFBLEVBQUE7QUFFQSxRQUFBLENBQUEsR0FBQSxDQUFBLG9CQUFBLENBQUEsV0FBQSxDQUFBLEVBQUE7QUFDQSxNQUFBLEdBQUEsQ0FBQSxjQUFBLENBQUEsV0FBQTtBQUNBOztBQUVBLElBQUEsV0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxJQUFBLFVBQUE7QUFFQSxXQUFBLFdBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQTtBQUNBLEdBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsRUFBQSxHQUFBLENBQUEseUJBQUEsR0FBQSxVQUFBLFdBQUEsRUFBQSxTQUFBLEVBQUE7QUFFQSxRQUNBLEdBQUEsQ0FBQSxvQkFBQSxDQUFBLFdBQUEsQ0FBQSxJQUNBLGdCQUFBLE9BQUEsV0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxDQUZBLEVBR0E7QUFDQTtBQUNBLFVBQUEsR0FBQSxDQUFBLHFCQUFBLENBQUEsU0FBQSxDQUFBLEVBQUE7QUFDQSxRQUFBLFdBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsSUFBQSxRQUFBLENBQUEsV0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQTs7QUFDQSxhQUFBLFdBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQTtBQUNBOztBQUVBLFdBQUEsSUFBQSxDQWJBLENBYUE7QUFDQSxHQWRBLENBN0pBLENBNEtBO0FBR0E7OztBQUNBLE1BQUEsVUFBQSxHQUFBLEdBQUEsQ0FBQSxZQUFBLEdBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkEsR0FBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxFQUFBLEdBQUEsQ0FBQSxnQ0FBQSxHQUFBLFVBQUEsV0FBQSxFQUFBO0FBRUEsV0FBQSxnQkFBQSxPQUFBLFVBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQTtBQUNBLEdBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLEVBQUEsR0FBQSxDQUFBLHlCQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUE7QUFFQSxRQUFBLEdBQUEsQ0FBQSxnQ0FBQSxDQUFBLFdBQUEsQ0FBQSxFQUFBO0FBRUEsYUFBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUE7QUFDQSxLQUhBLE1BR0E7QUFDQSxhQUFBLEtBQUE7QUFDQTtBQUNBLEdBUkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLEVBQUEsR0FBQSxDQUFBLHlCQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUEsWUFBQSxFQUFBO0FBRUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxnQ0FBQSxDQUFBLFdBQUEsQ0FBQSxFQUFBO0FBQ0EsTUFBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsR0FBQSxFQUFBO0FBQ0EsTUFBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsV0FBQTtBQUNBOztBQUVBLFNBQUEsSUFBQSxTQUFBLElBQUEsWUFBQSxFQUFBO0FBRUEsTUFBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLElBQUEsWUFBQSxDQUFBLFNBQUEsQ0FBQTtBQUNBOztBQUVBLFdBQUEsVUFBQSxDQUFBLGNBQUEsV0FBQSxDQUFBO0FBQ0EsR0FiQSxDQWpPQSxDQWdQQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSwrQkFBQSxHQUFBLFVBQUEsV0FBQSxFQUFBO0FBRUEsUUFDQSxHQUFBLENBQUEsZ0NBQUEsQ0FBQSxXQUFBLENBQUEsSUFDQSxnQkFBQSxPQUFBLFVBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FGQSxFQUdBO0FBQ0EsYUFBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsQ0FBQSxPQUFBLENBQUE7QUFDQTs7QUFFQSxXQUFBLEtBQUEsQ0FUQSxDQVNBO0FBQ0EsR0FWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSwrQkFBQSxHQUFBLFVBQUEsV0FBQSxFQUFBLFNBQUEsRUFBQTtBQUFBLFFBQUEscUJBQUEsdUVBQUEsSUFBQTs7QUFFQSxRQUFBLENBQUEsR0FBQSxDQUFBLGdDQUFBLENBQUEsV0FBQSxDQUFBLEVBQUE7QUFDQSxNQUFBLEdBQUEsQ0FBQSx5QkFBQSxDQUFBLFdBQUEsRUFBQTtBQUFBLGlCQUFBO0FBQUEsT0FBQTtBQUNBOztBQUVBLFFBQUEsZ0JBQUEsT0FBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsRUFBQTtBQUNBLE1BQUEsVUFBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsT0FBQSxJQUFBLEVBQUE7QUFDQTs7QUFFQSxRQUFBLHFCQUFBLEVBQUE7QUFFQTtBQUNBLE1BQUEsVUFBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsT0FBQSxJQUFBLFNBQUE7QUFDQSxLQUpBLE1BSUE7QUFFQTtBQUNBLFdBQUEsSUFBQSxTQUFBLElBQUEsU0FBQSxFQUFBO0FBRUEsUUFBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsU0FBQSxJQUFBLFNBQUEsQ0FBQSxTQUFBLENBQUE7QUFDQTtBQUNBOztBQUVBLFdBQUEsVUFBQSxDQUFBLGNBQUEsV0FBQSxDQUFBO0FBQ0EsR0F4QkE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsRUFBQSxHQUFBLENBQUEsa0NBQUEsR0FBQSxVQUFBLFdBQUEsRUFBQSxhQUFBLEVBQUE7QUFFQSxRQUNBLEdBQUEsQ0FBQSxnQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUNBLGdCQUFBLE9BQUEsVUFBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsT0FBQSxDQURBLElBRUEsZ0JBQUEsT0FBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsQ0FBQSxPQUFBLEVBQUEsYUFBQSxDQUhBLEVBSUE7QUFDQSxhQUFBLFVBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxDQUFBLE9BQUEsRUFBQSxhQUFBLENBQUE7QUFDQTs7QUFFQSxXQUFBLEtBQUEsQ0FWQSxDQVVBO0FBQ0EsR0FYQSxDQXJVQSxDQW1WQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsRUFBQSxHQUFBLENBQUEsd0JBQUEsR0FBQSxVQUFBLFdBQUEsRUFBQSxTQUFBLEVBQUEsVUFBQSxFQUFBO0FBRUEsUUFBQSxDQUFBLEdBQUEsQ0FBQSxnQ0FBQSxDQUFBLFdBQUEsQ0FBQSxFQUFBO0FBQ0EsTUFBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsR0FBQSxFQUFBO0FBQ0EsTUFBQSxVQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsV0FBQTtBQUNBOztBQUVBLElBQUEsVUFBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxJQUFBLFVBQUE7QUFFQSxXQUFBLFVBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQTtBQUNBLEdBVkE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsRUFBQSxHQUFBLENBQUEsd0JBQUEsR0FBQSxVQUFBLFdBQUEsRUFBQSxTQUFBLEVBQUE7QUFFQSxRQUNBLEdBQUEsQ0FBQSxnQ0FBQSxDQUFBLFdBQUEsQ0FBQSxJQUNBLGdCQUFBLE9BQUEsVUFBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxDQUZBLEVBR0E7QUFDQSxhQUFBLFVBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQTtBQUNBOztBQUVBLFdBQUEsSUFBQSxDQVRBLENBU0E7QUFDQSxHQVZBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSw4QkFBQSxHQUFBLFVBQUEsYUFBQSxFQUFBO0FBQ0EsSUFBQSxVQUFBLEdBQUEsYUFBQTtBQUNBLEdBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSw4QkFBQSxHQUFBLFlBQUE7QUFDQSxXQUFBLFVBQUE7QUFDQSxHQUZBLENBN1lBLENBZ1pBO0FBS0E7OztBQUNBLE1BQUEsU0FBQSxHQUFBLEdBQUEsQ0FBQSxXQUFBLEdBQUEsR0FBQSxDQUFBLFdBQUEsSUFBQSxDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkEsR0FBQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxFQUFBLEdBQUEsQ0FBQSxZQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUEsU0FBQSxFQUFBO0FBQUEsUUFBQSxxQkFBQSx1RUFBQSxLQUFBOztBQUVBLFFBQUEsZ0JBQUEsT0FBQSxTQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsRUFBQTtBQUNBLE1BQUEsU0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLEdBQUEsRUFBQTtBQUNBOztBQUVBLFFBQUEscUJBQUEsRUFBQTtBQUVBO0FBQ0EsTUFBQSxTQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsR0FBQSxTQUFBO0FBRUEsS0FMQSxNQUtBO0FBRUE7QUFDQSxXQUFBLElBQUEsU0FBQSxJQUFBLFNBQUEsRUFBQTtBQUVBLFlBQUEsZ0JBQUEsT0FBQSxTQUFBLENBQUEsY0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQTtBQUNBLFVBQUEsU0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxJQUFBLEVBQUE7QUFDQTs7QUFDQSxhQUFBLElBQUEsZUFBQSxJQUFBLFNBQUEsQ0FBQSxTQUFBLENBQUEsRUFBQTtBQUNBLFVBQUEsU0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxFQUFBLElBQUEsQ0FBQSxTQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsZUFBQSxDQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQUEsU0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBO0FBQ0EsR0ExQkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLEVBQUEsR0FBQSxDQUFBLHFCQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUEsYUFBQSxFQUFBO0FBRUEsUUFDQSxnQkFBQSxPQUFBLFNBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxJQUNBLGdCQUFBLE9BQUEsU0FBQSxDQUFBLGNBQUEsV0FBQSxDQUFBLENBQUEsYUFBQSxDQUZBLEVBR0E7QUFDQSxhQUFBLFNBQUEsQ0FBQSxjQUFBLFdBQUEsQ0FBQSxDQUFBLGFBQUEsQ0FBQTtBQUNBOztBQUVBLFdBQUEsRUFBQSxDQVRBLENBU0E7QUFDQSxHQVZBLENBN2NBLENBMGRBOzs7QUFDQSxNQUFBLE9BQUEsR0FBQSxHQUFBLENBQUEsU0FBQSxHQUFBLEdBQUEsQ0FBQSxTQUFBLElBQUEsRUFBQTs7QUFFQSxFQUFBLEdBQUEsQ0FBQSxlQUFBLEdBQUEsVUFBQSxTQUFBLEVBQUEsU0FBQSxFQUFBO0FBQ0EsSUFBQSxPQUFBLENBQUEsU0FBQSxDQUFBLEdBQUEsU0FBQTtBQUNBLEdBRkE7O0FBSUEsRUFBQSxHQUFBLENBQUEsZUFBQSxHQUFBLFVBQUEsU0FBQSxFQUFBO0FBQ0EsV0FBQSxPQUFBLENBQUEsU0FBQSxDQUFBO0FBQ0EsR0FGQSxDQWplQSxDQW9lQTs7O0FBR0EsU0FBQSxHQUFBO0FBRUEsQ0F6ZUEsQ0F5ZUEsS0FBQSxJQUFBLEVBemVBLEVBeWVBLE1BemVBLENBQUE7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxLQUFBLEdBQUEsVUFBQSxHQUFBLEVBQUEsQ0FBQSxFQUFBO0FBRUE7QUFFQSxNQUFBLFVBQUEsR0FBQSxHQUFBLENBQUEsWUFBQSxHQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUE7QUFDQSxtQkFBQSxDQURBO0FBRUEsa0JBQUEsRUFGQTtBQUdBLFlBQUE7QUFIQSxHQUFBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxFQUFBLEdBQUEsQ0FBQSx5QkFBQSxHQUFBLFVBQUEsV0FBQSxFQUFBO0FBRUEsSUFBQSxVQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsV0FBQTtBQUNBLEdBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLEVBQUEsR0FBQSxDQUFBLG9CQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUE7QUFFQSxXQUFBLGdCQUFBLE9BQUEsVUFBQSxDQUFBLGNBQUEsV0FBQSxDQUFBO0FBQ0EsR0FIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLEVBQUEsR0FBQSxDQUFBLGNBQUEsR0FBQSxVQUFBLFdBQUEsRUFBQSxhQUFBLEVBQUE7QUFBQSxRQUFBLE1BQUEsdUVBQUEsRUFBQTtBQUVBLFFBQUEsV0FBQSxHQUFBLEVBQUE7QUFDQSxJQUFBLFdBQUEsQ0FBQSxhQUFBLENBQUEsR0FBQSxXQUFBO0FBQ0EsSUFBQSxXQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUNBLElBQUEsV0FBQSxDQUFBLGVBQUEsQ0FBQSxHQUFBLGFBQUE7QUFDQSxJQUFBLFdBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxjQUFBLENBQUEsTUFBQSxDQUFBOztBQUdBLFFBQUEsR0FBQSxDQUFBLHdCQUFBLENBQUEsV0FBQSxFQUFBLGFBQUEsQ0FBQSxFQUFBO0FBQ0EsYUFBQSxLQUFBO0FBQ0E7O0FBQ0EsUUFBQSxHQUFBLENBQUEseUJBQUEsQ0FBQSxXQUFBLEVBQUEsYUFBQSxDQUFBLEVBQUE7QUFDQSxhQUFBLE1BQUE7QUFDQTs7QUFHQSxRQUFBLEdBQUEsQ0FBQSxtQkFBQSxFQUFBLEVBQUE7QUFDQSxNQUFBLEdBQUEsQ0FBQSxxQkFBQSxDQUFBLFdBQUE7QUFDQSxhQUFBLEtBQUE7QUFDQSxLQUhBLE1BR0E7QUFDQSxNQUFBLEdBQUEsQ0FBQSxzQkFBQSxDQUFBLFdBQUE7QUFDQSxhQUFBLE1BQUE7QUFDQTtBQUNBLEdBeEJBO0FBMEJBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSxtQkFBQSxHQUFBLFlBQUE7QUFDQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsVUFBQSxDQUFBLGFBQUEsQ0FBQTtBQUNBLEdBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsRUFBQSxHQUFBLENBQUEsc0JBQUEsR0FBQSxVQUFBLFdBQUEsRUFBQTtBQUNBLElBQUEsVUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxXQUFBO0FBQ0EsR0FGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSxnQ0FBQSxHQUFBLFVBQUEsV0FBQSxFQUFBLGFBQUEsRUFBQTtBQUVBLFFBQUEsVUFBQSxHQUFBLEtBQUE7O0FBRUEsUUFBQSxVQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsTUFBQSxFQUFBO0FBQUE7QUFDQSxXQUFBLElBQUEsQ0FBQSxJQUFBLFVBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQTtBQUNBLFlBQ0EsV0FBQSxLQUFBLFVBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsYUFBQSxDQUFBLElBQ0EsYUFBQSxLQUFBLFVBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsZUFBQSxDQUZBLEVBR0E7QUFDQSxVQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsRUFBQSxDQUFBLENBQUE7QUFDQSxVQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsR0FBQSxFQUFBO0FBQ0EsVUFBQSxVQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxVQUFBLENBQUEsRUFBQTtBQUNBLG1CQUFBLENBQUE7QUFDQSxXQUZBLENBQUEsQ0FIQSxDQUtBOztBQUNBLGlCQUFBLFVBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsV0FBQSxVQUFBO0FBQ0EsR0FwQkE7QUFzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLEVBQUEsR0FBQSxDQUFBLHlCQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUEsYUFBQSxFQUFBO0FBRUEsUUFBQSxVQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsTUFBQSxFQUFBO0FBQUE7QUFDQSxXQUFBLElBQUEsQ0FBQSxJQUFBLFVBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQTtBQUNBLFlBQ0EsV0FBQSxLQUFBLFVBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsYUFBQSxDQUFBLElBQ0EsYUFBQSxLQUFBLFVBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsZUFBQSxDQUZBLEVBR0E7QUFDQSxpQkFBQSxJQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQUEsS0FBQTtBQUNBLEdBYkE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLEVBQUEsR0FBQSxDQUFBLHFCQUFBLEdBQUEsVUFBQSxXQUFBLEVBQUE7QUFDQSxJQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsV0FBQTtBQUNBLEdBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsRUFBQSxHQUFBLENBQUEsK0JBQUEsR0FBQSxVQUFBLFdBQUEsRUFBQSxhQUFBLEVBQUE7QUFFQSxRQUFBLFVBQUEsR0FBQSxLQUFBOztBQUVBLFFBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQTtBQUFBO0FBQ0EsV0FBQSxJQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsWUFBQSxDQUFBLEVBQUE7QUFDQSxZQUNBLFdBQUEsS0FBQSxVQUFBLENBQUEsWUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLGFBQUEsQ0FBQSxJQUNBLGFBQUEsS0FBQSxVQUFBLENBQUEsWUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLGVBQUEsQ0FGQSxFQUdBO0FBQ0EsVUFBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBO0FBQ0EsVUFBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLEdBQUEsRUFBQTtBQUNBLFVBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxZQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsVUFBQSxDQUFBLEVBQUE7QUFDQSxtQkFBQSxDQUFBO0FBQ0EsV0FGQSxDQUFBLENBSEEsQ0FLQTs7QUFDQSxpQkFBQSxVQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFdBQUEsVUFBQTtBQUNBLEdBcEJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxFQUFBLEdBQUEsQ0FBQSx3QkFBQSxHQUFBLFVBQUEsV0FBQSxFQUFBLGFBQUEsRUFBQTtBQUVBLFFBQUEsVUFBQSxDQUFBLFlBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQTtBQUFBO0FBQ0EsV0FBQSxJQUFBLENBQUEsSUFBQSxVQUFBLENBQUEsWUFBQSxDQUFBLEVBQUE7QUFDQSxZQUNBLFdBQUEsS0FBQSxVQUFBLENBQUEsWUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLGFBQUEsQ0FBQSxJQUNBLGFBQUEsS0FBQSxVQUFBLENBQUEsWUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLGVBQUEsQ0FGQSxFQUdBO0FBQ0EsaUJBQUEsSUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxXQUFBLEtBQUE7QUFDQSxHQWJBOztBQWlCQSxFQUFBLEdBQUEsQ0FBQSxrQkFBQSxHQUFBLFlBQUE7QUFFQTtBQUNBLFFBQUEsVUFBQSxHQUFBLEtBQUE7O0FBQ0EsUUFBQSxVQUFBLENBQUEsTUFBQSxDQUFBLENBQUEsTUFBQSxFQUFBO0FBQUE7QUFDQSxXQUFBLElBQUEsQ0FBQSxJQUFBLFVBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQTtBQUNBLFFBQUEsVUFBQSxHQUFBLEdBQUEsQ0FBQSxnQ0FBQSxDQUFBLFVBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsYUFBQSxDQUFBLEVBQUEsVUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxlQUFBLENBQUEsQ0FBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFBLFVBQUEsVUFBQSxFQUFBO0FBRUE7QUFDQSxNQUFBLEdBQUEsQ0FBQSxhQUFBLENBQUEsVUFBQTtBQUNBO0FBQ0EsR0FoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLEVBQUEsR0FBQSxDQUFBLGFBQUEsR0FBQSxVQUFBLFdBQUEsRUFBQTtBQUVBLFlBQUEsV0FBQSxDQUFBLGVBQUEsQ0FBQTtBQUVBLFdBQUEsK0JBQUE7QUFFQTtBQUNBLFFBQUEsR0FBQSxDQUFBLHFCQUFBLENBQUEsV0FBQTtBQUVBLFFBQUEsNkJBQUEsQ0FBQSxXQUFBLENBQUEsUUFBQSxDQUFBLENBQUE7QUFDQTs7QUFFQTtBQVZBO0FBWUEsR0FkQTs7QUFnQkEsU0FBQSxHQUFBO0FBRUEsQ0F4T0EsQ0F3T0EsS0FBQSxJQUFBLEVBeE9BLEVBd09BLE1BeE9BLENBQUE7QUEyT0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFBLHNCQUFBLENBQUEsTUFBQSxFQUFBLGFBQUEsRUFBQTtBQUNBO0FBQ0EsTUFBQSxnQkFBQSxPQUFBLE1BQUEsQ0FBQSxhQUFBLENBQUEsRUFBQTtBQUVBLFFBQUEsZUFBQSxHQUFBLEtBQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxDQUFBLGFBQUEsQ0FBQSxFQUFBLGFBQUEsRUFBQSxNQUFBLENBQUE7O0FBRUEsV0FBQSxXQUFBLGVBQUE7QUFDQTs7QUFFQSxTQUFBLEtBQUE7QUFDQTs7QUFHQSxTQUFBLHdCQUFBLENBQUEsV0FBQSxFQUFBLGFBQUEsRUFBQTtBQUNBO0FBQ0EsRUFBQSxLQUFBLENBQUEsK0JBQUEsQ0FBQSxXQUFBLEVBQUEsYUFBQTs7QUFDQSxFQUFBLEtBQUEsQ0FBQSxrQkFBQTtBQUNBO0FDdFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLGtCQUFBLENBQUEsV0FBQSxFQUFBO0FBRUE7QUFDQSxNQUFBLE1BQUEsTUFBQSxDQUFBLHNCQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEsRUFBQTtBQUFBLFdBQUEsS0FBQTtBQUFBLEdBSEEsQ0FLQTs7O0FBQ0EsTUFBQSxTQUFBLE1BQUEsQ0FBQSxzQkFBQSxXQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsYUFBQSxDQUFBLEVBQUE7QUFBQSxXQUFBLEtBQUE7QUFBQSxHQU5BLENBUUE7QUFDQTtBQUNBOzs7QUFDQSxNQUFBLHNCQUFBLEdBQUEsS0FBQTtBQUNBLE1BQUEsNEJBQUEsR0FBQSxHQUFBLENBWkEsQ0FZQTs7QUFDQSxNQUFBLGNBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLGtCQUFBLENBQUEsRUFBQTtBQUNBLElBQUEsc0JBQUEsR0FBQSxJQUFBO0FBQ0EsSUFBQSw0QkFBQSxHQUFBLENBQUE7QUFDQTs7QUFDQSxNQUFBLGFBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLGtCQUFBLENBQUEsRUFBQTtBQUNBLElBQUEsNEJBQUEsR0FBQSxDQUFBO0FBQ0EsR0FuQkEsQ0FxQkE7QUFDQTtBQUNBOzs7QUFDQSxNQUFBLGVBQUEsR0FBQSxDQUFBO0FBQ0EsRUFBQSxlQUFBLEdBQUEsSUFBQSxJQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLFFBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxDQUFBLENBekJBLENBeUJBO0FBQ0E7O0FBQ0EsTUFBQSxlQUFBLEdBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLGlDQUFBLENBQUEsQ0EzQkEsQ0E0QkE7QUFFQTtBQUNBOzs7QUFDQSxNQUFBLHFCQUFBLEdBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxjQUFBLENBQUEsSUFBQSxFQUFBLGVBQUEsRUFBQSxJQUFBLElBQUEsRUFBQSxDQUFBOztBQUNBLEVBQUEscUJBQUEsR0FBQSxJQUFBLElBQUEsQ0FBQSxxQkFBQSxDQUFBLFdBQUEsRUFBQSxFQUFBLHFCQUFBLENBQUEsUUFBQSxLQUFBLENBQUEsRUFBQSxDQUFBLENBQUE7QUFDQSxFQUFBLGVBQUEsR0FBQSxxQkFBQTs7QUFFQSxNQUFBLFFBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLGVBQUEsS0FBQSxDQUFBLENBQUEsSUFDQSxRQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxjQUFBLEtBQUEsQ0FBQSxDQURBLENBQ0E7QUFEQSxJQUVBO0FBQ0EsSUFBQSxlQUFBLEdBQUEsSUFBQTtBQUNBLElBQUEsZUFBQSxHQUFBLElBQUE7QUFDQTs7QUFFQSxNQUFBLG9CQUFBLEdBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLHlCQUFBLENBQUE7O0FBQ0EsTUFBQSx1QkFBQSxHQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEseUJBQUEsQ0FBQSxXQUFBLEVBQUEsMkJBQUEsQ0FBQSxDQUFBO0FBRUEsRUFBQSxNQUFBLENBQUEsc0JBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEVBQUEsRUE5Q0EsQ0E4Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsRUFBQSxNQUFBLENBQUEsc0JBQUEsV0FBQSxDQUFBLENBQUEsUUFBQSxDQUNBO0FBQ0EsSUFBQSxhQUFBLEVBQUEsdUJBQUEsT0FBQSxFQUFBO0FBQ0EsYUFBQSxpQ0FBQSxDQUFBLE9BQUEsRUFBQTtBQUFBLHVCQUFBO0FBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQTtBQUNBLEtBSEE7QUFJQSxJQUFBLFFBQUEsRUFBQSxrQkFBQSxZQUFBLEVBQUEsWUFBQSxFQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFBLDhCQUFBLENBQUEsWUFBQSxFQUFBO0FBQUEsdUJBQUE7QUFBQSxPQUFBLEVBQUEsSUFBQSxDQUFBO0FBQ0EsS0FUQTtBQVVBLElBQUEsT0FBQSxFQUFBLGlCQUFBLFdBQUEsRUFBQSxPQUFBLEVBQUE7QUFDQSxhQUFBLDZCQUFBLENBQUEsV0FBQSxFQUFBLE9BQUEsRUFBQTtBQUFBLHVCQUFBO0FBQUEsT0FBQSxFQUFBLElBQUEsQ0FBQTtBQUNBLEtBWkE7QUFhQSxJQUFBLGlCQUFBLEVBQUEsMkJBQUEsSUFBQSxFQUFBLFVBQUEsRUFBQSx5QkFBQSxFQUFBLENBQUEsQ0FiQTtBQWNBLElBQUEsTUFBQSxFQUFBLE1BZEE7QUFlQSxJQUFBLGNBQUEsRUFBQSx1QkFmQTtBQWdCQSxJQUFBLFVBQUEsRUFBQSxDQWhCQTtBQWlCQSxJQUFBLFFBQUEsRUFBQSxTQWpCQTtBQWtCQSxJQUFBLFFBQUEsRUFBQSxTQWxCQTtBQW1CQSxJQUFBLFVBQUEsRUFBQSxVQW5CQTtBQW9CQSxJQUFBLFdBQUEsRUFBQSxLQXBCQTtBQXFCQSxJQUFBLFVBQUEsRUFBQSxLQXJCQTtBQXNCQSxJQUFBLE9BQUEsRUFBQSxlQXRCQTtBQXVCQSxJQUFBLE9BQUEsRUFBQSxlQXZCQTtBQXVCQTtBQUNBO0FBQ0EsSUFBQSxVQUFBLEVBQUEsS0F6QkE7QUEwQkEsSUFBQSxjQUFBLEVBQUEsSUExQkE7QUEyQkEsSUFBQSxVQUFBLEVBQUEsS0EzQkE7QUE0QkEsSUFBQSxRQUFBLEVBQUEsb0JBNUJBO0FBNkJBLElBQUEsV0FBQSxFQUFBLEtBN0JBO0FBOEJBLElBQUEsZ0JBQUEsRUFBQSxJQTlCQTtBQStCQSxJQUFBLFdBQUEsRUFBQSw0QkEvQkE7QUFnQ0EsSUFBQSxXQUFBLEVBQUEsc0JBaENBO0FBaUNBO0FBQ0EsSUFBQSxjQUFBLEVBQUE7QUFsQ0EsR0FEQSxFQWxEQSxDQTJGQTtBQUNBO0FBQ0E7O0FBQ0EsRUFBQSxVQUFBLENBQUEsWUFBQTtBQUFBLElBQUEsdUNBQUEsQ0FBQSxXQUFBLENBQUE7QUFBQSxHQUFBLEVBQUEsR0FBQSxDQUFBLENBOUZBLENBOEZBO0FBRUE7QUFDQTtBQUNBOztBQUNBLE1BQUEsY0FBQSxHQUFBLEtBQUEsQ0FBQSx5QkFBQSxDQUFBLFdBQUEsRUFBQSxvQkFBQSxDQUFBOztBQUNBLE1BQUEsVUFBQSxjQUFBLEVBQUE7QUFDQSxJQUFBLHdCQUFBLENBQUEsV0FBQSxFQUFBLGNBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxjQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsaUNBQUEsQ0FBQSxJQUFBLEVBQUEsbUJBQUEsRUFBQSxhQUFBLEVBQUE7QUFFQSxNQUFBLFVBQUEsR0FBQSxJQUFBLElBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsUUFBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxVQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FGQSxDQUVBOztBQUNBLE1BQUEsU0FBQSxHQUFBLHdCQUFBLENBQUEsSUFBQSxDQUFBLENBSEEsQ0FHQTs7QUFDQSxNQUFBLGFBQUEsR0FBQSx5QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUpBLENBSUE7O0FBQ0EsTUFBQSxXQUFBLEdBQUEsZ0JBQUEsT0FBQSxtQkFBQSxDQUFBLGFBQUEsQ0FBQSxHQUFBLG1CQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsR0FBQSxDQUxBLENBS0E7QUFFQTs7QUFDQSxNQUFBLGlCQUFBLEdBQUEsS0FBQSxDQUFBLGtDQUFBLENBQUEsV0FBQSxFQUFBLGFBQUEsQ0FBQSxDQVJBLENBV0E7OztBQUNBLE1BQUEscUJBQUEsR0FBQSxFQUFBO0FBQ0EsRUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxjQUFBLGFBQUEsRUFiQSxDQWFBOztBQUNBLEVBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsY0FBQSxTQUFBLEVBZEEsQ0FjQTs7QUFDQSxFQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGtCQUFBLElBQUEsQ0FBQSxNQUFBLEVBQUEsRUFmQSxDQWVBOztBQUVBLE1BQUEsaUJBQUEsR0FBQSxLQUFBLENBakJBLENBbUJBOztBQUNBLE1BQUEsVUFBQSxpQkFBQSxFQUFBO0FBRUEsSUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSx1QkFBQTtBQUVBLFdBQUEsQ0FBQSxpQkFBQSxFQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBO0FBQ0EsR0F6QkEsQ0E0QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBQ0EsTUFBQSxnQkFBQSxHQUFBLEtBQUEsQ0FBQSxxQkFBQSxDQUFBLFdBQUEsRUFBQSxhQUFBLENBQUE7O0FBQ0EsT0FBQSxJQUFBLFVBQUEsSUFBQSxnQkFBQSxFQUFBO0FBQ0EsSUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxnQkFBQSxDQUFBLFVBQUEsQ0FBQSxFQURBLENBQ0E7QUFDQSxHQXJDQSxDQXNDQTtBQUdBOzs7QUFDQSxFQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsaUJBQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxnQkFBQSxFQUFBLFFBQUEsR0FBQSxPQUFBLENBQUEsU0FBQSxFQUFBLEdBQUEsQ0FBQSxFQTFDQSxDQTBDQTs7QUFHQSxNQUFBLFFBQUEsQ0FBQSxpQkFBQSxDQUFBLGtCQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQTtBQUNBLElBQUEsaUJBQUEsR0FBQSxJQUFBO0FBQ0EsSUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxnQkFBQTtBQUNBLElBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsd0JBQUEsUUFBQSxDQUFBLGlCQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsaUJBQUEsQ0FBQSxrQkFBQSxDQUFBLENBQUE7QUFDQSxHQUpBLE1BSUE7QUFDQSxJQUFBLGlCQUFBLEdBQUEsS0FBQTtBQUNBLElBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsdUJBQUE7QUFDQTs7QUFHQSxVQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQTtBQUVBLFNBQUEsV0FBQTtBQUNBOztBQUVBLFNBQUEsb0JBQUE7QUFDQSxNQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsRUFBQSxhQUFBO0FBQ0E7O0FBRUEsU0FBQSxrQkFBQTtBQUNBLE1BQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsa0JBQUE7QUFDQTs7QUFFQSxTQUFBLGVBQUE7QUFDQSxNQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLHVCQUFBLEVBQUEsb0JBQUE7QUFDQSxNQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEscUJBQUEsSUFBQSxFQUFBLENBRkEsQ0FFQTs7QUFDQTs7QUFFQSxTQUFBLHVCQUFBO0FBQ0EsTUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSx1QkFBQSxFQUFBLHNCQUFBO0FBQ0EsTUFBQSxpQkFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLHFCQUFBLElBQUEsRUFBQSxDQUZBLENBRUE7O0FBQ0E7O0FBRUEsU0FBQSxxQkFBQTtBQUNBLE1BQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsdUJBQUEsRUFBQSxxQkFBQTtBQUNBLE1BQUEsaUJBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxxQkFBQSxJQUFBLEVBQUEsQ0FGQSxDQUVBOztBQUNBOztBQUVBLFNBQUEsd0JBQUE7QUFDQSxNQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLHVCQUFBLEVBQUEsd0JBQUE7QUFDQSxNQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEscUJBQUEsSUFBQSxFQUFBLENBRkEsQ0FFQTs7QUFDQTs7QUFFQSxTQUFBLDRCQUFBO0FBQ0EsTUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSx1QkFBQSxFQUFBLDRCQUFBO0FBQ0EsTUFBQSxpQkFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLHFCQUFBLElBQUEsRUFBQSxDQUZBLENBRUE7O0FBQ0E7O0FBRUEsU0FBQSxhQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsRUFBQSxlQUFBLEVBQUEsZ0JBQUE7QUFDQTs7QUFFQSxTQUFBLFVBQUE7QUFDQSxNQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLGFBQUEsRUFBQSxlQUFBLEVBREEsQ0FHQTs7QUFDQSxVQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEscUJBQUEsRUFBQSxPQUFBLENBQUEsU0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0EsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSw0QkFBQTtBQUNBLE9BRkEsTUFFQSxJQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEscUJBQUEsRUFBQSxPQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0EsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSw2QkFBQTtBQUNBOztBQUNBOztBQUVBLFNBQUEsV0FBQTtBQUNBLE1BQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsYUFBQSxFQUFBLGdCQUFBLEVBREEsQ0FHQTs7QUFDQSxVQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEscUJBQUEsRUFBQSxPQUFBLENBQUEsU0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0EsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSw2QkFBQTtBQUNBLE9BRkEsTUFFQSxJQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEscUJBQUEsRUFBQSxPQUFBLENBQUEsVUFBQSxJQUFBLENBQUEsQ0FBQSxFQUFBO0FBQ0EsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSw4QkFBQTtBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsZ0JBQUEsSUFBQSxXQUFBO0FBMUVBOztBQStFQSxNQUFBLGVBQUEsaUJBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxnQkFBQSxDQUFBLEVBQUE7QUFFQSxRQUFBLDhCQUFBLEdBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLHlCQUFBLENBQUEsQ0FGQSxDQUVBOzs7QUFFQSxZQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEscUJBQUEsQ0FBQTtBQUVBLFdBQUEsRUFBQTtBQUNBO0FBQ0E7O0FBRUEsV0FBQSxTQUFBO0FBQ0EsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxjQUFBO0FBQ0EsUUFBQSxpQkFBQSxHQUFBLGlCQUFBLEdBQUEsSUFBQSxHQUFBLDhCQUFBO0FBQ0E7O0FBRUEsV0FBQSxVQUFBO0FBQ0EsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxlQUFBO0FBQ0E7QUFFQTs7QUFDQSxXQUFBLGlCQUFBO0FBQ0EsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSw2QkFBQSxFQUFBLDRCQUFBO0FBQ0EsUUFBQSxpQkFBQSxHQUFBLGlCQUFBLEdBQUEsSUFBQSxHQUFBLDhCQUFBO0FBQ0E7O0FBRUEsV0FBQSxrQkFBQTtBQUNBLFFBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsNkJBQUEsRUFBQSw2QkFBQTtBQUNBLFFBQUEsaUJBQUEsR0FBQSxpQkFBQSxHQUFBLElBQUEsR0FBQSw4QkFBQTtBQUNBOztBQUVBLFdBQUEsa0JBQUE7QUFDQSxRQUFBLHFCQUFBLENBQUEsSUFBQSxDQUFBLDhCQUFBLEVBQUEsNEJBQUE7QUFDQSxRQUFBLGlCQUFBLEdBQUEsaUJBQUEsR0FBQSxJQUFBLEdBQUEsOEJBQUE7QUFDQTs7QUFFQSxXQUFBLG1CQUFBO0FBQ0EsUUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSw4QkFBQSxFQUFBLDZCQUFBO0FBQ0E7O0FBRUE7QUFuQ0E7QUFzQ0E7O0FBRUEsU0FBQSxDQUFBLGlCQUFBLEVBQUEscUJBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsNkJBQUEsQ0FBQSxXQUFBLEVBQUEsSUFBQSxFQUFBLG1CQUFBLEVBQUEsYUFBQSxFQUFBO0FBRUEsTUFBQSxTQUFBLElBQUEsRUFBQTtBQUFBLFdBQUEsS0FBQTtBQUFBOztBQUVBLE1BQUEsU0FBQSxHQUFBLHdCQUFBLENBQUEsSUFBQSxDQUFBLENBSkEsQ0FJQTs7QUFDQSxNQUFBLGFBQUEsR0FBQSx5QkFBQSxDQUFBLElBQUEsQ0FBQSxDQUxBLENBS0E7O0FBQ0EsTUFBQSxXQUFBLEdBQUEsZ0JBQUEsT0FBQSxtQkFBQSxDQUFBLGFBQUEsQ0FBQSxHQUFBLG1CQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsR0FBQSxDQU5BLENBTUE7QUFFQTs7QUFDQSxNQUFBLGdCQUFBLEdBQUEsS0FBQSxDQUFBLGtDQUFBLENBQUEsV0FBQSxFQUFBLGFBQUEsQ0FBQSxDQVRBLENBU0E7OztBQUVBLE1BQUEsQ0FBQSxnQkFBQSxFQUFBO0FBQUEsV0FBQSxLQUFBO0FBQUEsR0FYQSxDQWNBOzs7QUFDQSxNQUFBLFlBQUEsR0FBQSxFQUFBOztBQUNBLE1BQUEsZ0JBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxzQkFBQSxFQUFBLE1BQUEsR0FBQSxDQUFBLEVBQUE7QUFDQSxJQUFBLFlBQUEsSUFBQSxnQkFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLHNCQUFBLENBQUE7QUFDQTs7QUFDQSxNQUFBLGdCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsa0JBQUEsRUFBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0EsSUFBQSxZQUFBLElBQUEsZ0JBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxrQkFBQSxDQUFBO0FBQ0E7O0FBQ0EsTUFBQSxnQkFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLGVBQUEsRUFBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0EsSUFBQSxZQUFBLElBQUEsZ0JBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxlQUFBLENBQUE7QUFDQTs7QUFDQSxNQUFBLGdCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEseUJBQUEsRUFBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0EsSUFBQSxZQUFBLElBQUEsZ0JBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSx5QkFBQSxDQUFBO0FBQ0E7O0FBQ0EsRUFBQSxxQ0FBQSxDQUFBLFlBQUEsRUFBQSxXQUFBLEVBQUEsU0FBQSxDQUFBLENBNUJBLENBZ0NBOztBQUNBLE1BQUEsd0JBQUEsR0FBQSxNQUFBLENBQUEsbUNBQUEsV0FBQSxDQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsQ0FqQ0EsQ0FpQ0E7O0FBQ0EsTUFBQSxxQkFBQSxHQUFBLE1BQUEsQ0FBQSxzQkFBQSxXQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQTs7QUFFQSxNQUFBLHdCQUFBLElBQUEsQ0FBQSxxQkFBQSxFQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBQSx1Q0FBQSxDQUFBLFdBQUEsQ0FBQSxDQU5BLENBTUE7O0FBRUEsUUFBQSxlQUFBLEdBQUEsMENBQUEsV0FBQTtBQUNBLElBQUEsTUFBQSxDQUFBLGVBQUEsR0FBQSx3QkFBQSxHQUNBLGVBREEsR0FDQSx3QkFEQSxDQUFBLENBQ0EsR0FEQSxDQUNBLFFBREEsRUFDQSxTQURBLEVBVEEsQ0FVQTs7QUFDQSxXQUFBLEtBQUE7QUFDQSxHQWhEQSxDQW9EQTs7O0FBQ0EsTUFDQSxRQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxXQUFBLEtBQUEsQ0FBQSxDQUFBLElBQ0EsUUFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsZUFBQSxJQUFBLENBREEsSUFFQSxRQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSx3QkFBQSxJQUFBLENBSEEsRUFJQTtBQUNBO0FBRUEsUUFBQSxjQUFBLE9BQUEscUNBQUEsRUFBQTtBQUNBLE1BQUEscUNBQUEsQ0FBQSxhQUFBLEVBQUEsSUFBQSxFQUFBLFdBQUEsQ0FBQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLDhCQUFBLENBQUEsSUFBQSxFQUFBLG1CQUFBLEVBQUEsYUFBQSxFQUFBO0FBRUEsTUFBQSxXQUFBLEdBQUEsZ0JBQUEsT0FBQSxtQkFBQSxDQUFBLGFBQUEsQ0FBQSxHQUFBLG1CQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsR0FBQSxDQUZBLENBRUE7QUFFQTs7QUFDQSxNQUFBLHdCQUFBLEdBQUEsTUFBQSxDQUFBLG1DQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLENBTEEsQ0FLQTs7QUFDQSxNQUFBLHFCQUFBLEdBQUEsTUFBQSxDQUFBLHNCQUFBLFdBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBOztBQUNBLE1BQUEsd0JBQUEsSUFBQSxDQUFBLHFCQUFBLEVBQUE7QUFDQSxJQUFBLGlDQUFBLENBQUEsV0FBQSxDQUFBLENBREEsQ0FDQTs7QUFDQSxJQUFBLE1BQUEsQ0FBQSw2Q0FBQSxDQUFBLENBQUEsTUFBQSxHQUZBLENBRUE7O0FBQ0EsV0FBQSxLQUFBO0FBQ0E7O0FBRUEsRUFBQSxNQUFBLENBQUEsa0JBQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsRUFiQSxDQWFBOztBQUdBLE1BQUEsZUFBQSxPQUFBLGtDQUFBLEVBQUE7QUFBQSxJQUFBLGtDQUFBLENBQUEsSUFBQSxFQUFBLFdBQUEsQ0FBQTtBQUFBOztBQUVBLEVBQUEsd0NBQUEsQ0FBQSxXQUFBLENBQUEsQ0FsQkEsQ0FvQkE7O0FBQ0EsTUFBQSxtQkFBQSxHQUFBLElBQUEsQ0FyQkEsQ0FxQkE7O0FBQ0EsTUFBQSxzQkFBQSxHQUFBLG9DQUFBLENBQUEsV0FBQSxDQUFBLENBdEJBLENBc0JBOztBQUNBLEVBQUEsTUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsZUFBQSxFQUFBLENBQUEsV0FBQSxFQUFBLG1CQUFBLEVBQUEsc0JBQUEsQ0FBQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsd0NBQUEsQ0FBQSxXQUFBLEVBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUEsbUJBQUEsR0FBQSw4Q0FBQSxDQUFBLFdBQUEsQ0FBQSxDQWxCQSxDQW9CQTs7QUFDQSxNQUFBLGtCQUFBLEdBQUEsb0NBQUEsQ0FBQSxXQUFBLENBQUEsQ0FyQkEsQ0F1QkE7O0FBQ0EsTUFBQSxtQkFBQSxHQUFBLGNBQUEsQ0FBQSxLQUFBLENBQUEsd0JBQUEsQ0FBQSxXQUFBLEVBQUEsNEJBQUEsQ0FBQSxDQUFBO0FBRUEsTUFBQSxRQUFBO0FBQ0EsTUFBQSxpQkFBQTtBQUNBLE1BQUEsY0FBQTtBQUNBLE1BQUEsZUFBQTtBQUNBLE1BQUEsWUFBQTtBQUNBLE1BQUEsV0FBQSxDQS9CQSxDQWlDQTs7QUFDQSxPQUFBLElBQUEsU0FBQSxJQUFBLG1CQUFBLEVBQUE7QUFFQSxJQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsUUFBQSxHQUFBLENBQUEsQ0FGQSxDQUVBOztBQUVBLElBQUEsZUFBQSxHQUFBLG1CQUFBLENBQUEsU0FBQSxDQUFBLENBSkEsQ0FJQTtBQUVBOztBQUNBLFNBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxrQkFBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsRUFBQTtBQUVBO0FBQ0EsVUFDQSxVQUFBLEtBQUEsQ0FBQSx5QkFBQSxDQUFBLFdBQUEsRUFBQSx3QkFBQSxDQUFBLElBQ0Esa0JBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FGQSxFQUdBO0FBQ0E7QUFDQTtBQUVBLFlBQUEsS0FBQSxDQUFBLElBQUEsZUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxTQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFDQTs7QUFDQSxZQUFBLGtCQUFBLENBQUEsTUFBQSxHQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsZUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxXQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQ0E7QUFDQTtBQUNBLE9BaEJBLENBa0JBOzs7QUFDQSxNQUFBLFFBQUEsR0FBQSxrQkFBQSxDQUFBLENBQUEsQ0FBQTtBQUdBLFVBQUEsOEJBQUEsR0FBQSxDQUFBLENBdEJBLENBdUJBOztBQUNBLFdBQUEsSUFBQSxPQUFBLElBQUEsbUJBQUEsRUFBQTtBQUVBLFFBQUEsaUJBQUEsR0FBQSxtQkFBQSxDQUFBLE9BQUEsQ0FBQSxDQUZBLENBSUE7QUFDQTs7QUFFQSxZQUFBLFVBQUEsS0FBQSxDQUFBLGtDQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsQ0FBQSxFQUFBO0FBQ0EsVUFBQSxjQUFBLEdBQUEsS0FBQSxDQUFBLGtDQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsRUFBQSxpQkFBQSxFQUFBLGlCQUFBLENBQUEsY0FBQSxDQURBLENBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQSxVQUFBLGNBQUEsR0FBQSxFQUFBO0FBQ0E7O0FBQ0EsWUFBQSxlQUFBLENBQUEsZ0JBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0EsVUFBQSxZQUFBLEdBQUEsc0NBQUEsQ0FBQSxDQUNBLENBQ0EsUUFBQSxDQUFBLGVBQUEsQ0FBQSxnQkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFEQSxFQUVBLFFBQUEsQ0FBQSxlQUFBLENBQUEsZ0JBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBRkEsQ0FEQSxDQUFBLEVBTUEsY0FOQSxDQUFBO0FBT0EsU0FSQSxNQVFBO0FBQ0EsVUFBQSxXQUFBLEdBQUEsQ0FBQSxDQUFBLEtBQUEsZUFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBO0FBQ0EsVUFBQSxZQUFBLEdBQUEsb0NBQUEsQ0FDQSxXQUFBLEdBQ0EsUUFBQSxDQUFBLGVBQUEsQ0FBQSxnQkFBQSxDQUFBLEdBQUEsRUFEQSxHQUVBLFFBQUEsQ0FBQSxlQUFBLENBQUEsZ0JBQUEsQ0FBQSxHQUFBLEVBSEEsRUFLQSxjQUxBLENBQUE7QUFNQTs7QUFDQSxZQUFBLFlBQUEsRUFBQTtBQUNBLFVBQUEsOEJBQUEsR0FEQSxDQUNBO0FBQ0E7QUFFQTs7QUFFQSxVQUFBLG1CQUFBLENBQUEsTUFBQSxJQUFBLDhCQUFBLEVBQUE7QUFDQTtBQUVBLFFBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxRQUFBLEdBQUEsQ0FBQTtBQUNBLGNBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQSxHQTNHQSxDQThHQTs7O0FBQ0EsRUFBQSw0Q0FBQSxDQUFBLG1CQUFBLENBQUE7QUFFQSxFQUFBLE1BQUEsQ0FBQSxtQkFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLDhCQUFBLEVBQUEsQ0FBQSxXQUFBLEVBQUEsa0JBQUEsQ0FBQSxFQWpIQSxDQWlIQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsb0NBQUEsQ0FBQSxNQUFBLEVBQUEsZUFBQSxFQUFBO0FBRUEsT0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLGVBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUE7QUFFQSxRQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsUUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxlQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQTtBQUNBLGFBQUEsSUFBQTtBQUNBLEtBSkEsQ0FNQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBRUEsU0FBQSxLQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSxzQ0FBQSxDQUFBLGVBQUEsRUFBQSxlQUFBLEVBQUE7QUFFQSxNQUFBLFlBQUE7O0FBRUEsT0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLGVBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUE7QUFFQSxTQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsZUFBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsRUFBQTtBQUVBLE1BQUEsWUFBQSxHQUFBLDhCQUFBLENBQUEsZUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLGVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7QUFFQSxVQUFBLFlBQUEsRUFBQTtBQUNBLGVBQUEsSUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFBLEtBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsOENBQUEsQ0FBQSxXQUFBLEVBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUEsZUFBQSxHQUFBLENBQ0EsMkJBQUEsV0FBQSxHQUFBLElBREEsRUFFQSwyQkFBQSxXQUFBLEdBQUEsTUFGQSxFQUdBLDJCQUFBLFdBQUEsR0FBQSxJQUhBLEVBSUEsMkJBQUEsV0FBQSxHQUFBLE1BSkEsRUFLQSx5QkFBQSxXQUFBLEdBQUEsSUFMQSxFQU1BLHlCQUFBLFdBQUEsR0FBQSxNQU5BLENBQUE7QUFTQSxNQUFBLG1CQUFBLEdBQUEsRUFBQSxDQWRBLENBZ0JBOztBQUNBLE9BQUEsSUFBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLEdBQUEsR0FBQSxlQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxFQUFBO0FBRUEsUUFBQSxVQUFBLEdBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUNBLFFBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSxVQUFBLEdBQUEsU0FBQSxDQUFBLENBSEEsQ0FLQTs7QUFDQSxTQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsV0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsRUFBQTtBQUVBLFVBQUEsYUFBQSxHQUFBLE1BQUEsQ0FBQSxVQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxHQUFBLENBQUE7QUFDQSxVQUFBLHdCQUFBLEdBQUEsYUFBQSxDQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQ0EsVUFBQSxnQkFBQSxHQUFBLEVBQUEsQ0FKQSxDQU1BOztBQUNBLFVBQUEsd0JBQUEsQ0FBQSxNQUFBLEVBQUE7QUFBQTtBQUNBLGFBQUEsSUFBQSxDQUFBLElBQUEsd0JBQUEsRUFBQTtBQUVBO0FBRUEsY0FBQSxtQkFBQSxHQUFBLHdCQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFFQSxjQUFBLGVBQUEsR0FBQSxRQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsUUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBRUEsVUFBQSxnQkFBQSxDQUFBLElBQUEsQ0FBQSxlQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFBLG1CQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0EsZ0JBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBREE7QUFFQSw0QkFBQSxhQUFBLENBQUEsR0FBQSxFQUZBO0FBR0EseUJBQUEsYUFIQTtBQUlBLDRCQUFBO0FBSkEsT0FBQTtBQU1BO0FBQ0E7O0FBRUEsU0FBQSxtQkFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLDRDQUFBLENBQUEsbUJBQUEsRUFBQTtBQUVBLE1BQUEsYUFBQTs7QUFFQSxPQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsbUJBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUE7QUFFQSxRQUFBLGFBQUEsR0FBQSxtQkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLGFBQUE7O0FBRUEsUUFBQSxLQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxFQUFBO0FBQ0EsTUFBQSxhQUFBLENBQUEsSUFBQSxDQUFBLFVBQUEsRUFBQSxJQUFBLEVBREEsQ0FDQTs7QUFDQSxNQUFBLGFBQUEsQ0FBQSxRQUFBLENBQUEsUUFBQSxFQUZBLENBRUE7QUFFQTs7QUFDQSxVQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsVUFBQSxDQUFBLEVBQUE7QUFDQSxRQUFBLGFBQUEsQ0FBQSxJQUFBLENBQUEsVUFBQSxFQUFBLEtBQUE7QUFFQSxRQUFBLGFBQUEsQ0FBQSxNQUFBLEdBQUEsSUFBQSxDQUFBLDhCQUFBLEVBQUEsSUFBQSxDQUFBLFVBQUEsRUFBQSxJQUFBLEVBQUEsT0FBQSxDQUFBLFFBQUE7QUFDQTtBQUVBLEtBWEEsTUFXQTtBQUNBLE1BQUEsYUFBQSxDQUFBLElBQUEsQ0FBQSxVQUFBLEVBQUEsS0FBQSxFQURBLENBQ0E7O0FBQ0EsTUFBQSxhQUFBLENBQUEsV0FBQSxDQUFBLFFBQUEsRUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLHNDQUFBLENBQUEsdUJBQUEsRUFBQTtBQUVBLE1BQ0EsdUJBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxJQUNBLFFBQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFEQSxJQUVBLFFBQUEsQ0FBQSx1QkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsS0FBQSxFQUFBLEdBQUEsRUFBQSxHQUFBLEVBSEEsRUFJQTtBQUNBLFdBQUEsSUFBQTtBQUNBOztBQUVBLFNBQUEsS0FBQTtBQUNBLEMsQ0FHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLG9DQUFBLENBQUEsV0FBQSxFQUFBO0FBRUEsTUFBQSxrQkFBQSxHQUFBLEVBQUE7QUFDQSxFQUFBLGtCQUFBLEdBQUEsTUFBQSxDQUFBLGtCQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBOztBQUVBLE1BQUEsa0JBQUEsQ0FBQSxNQUFBLEVBQUE7QUFBQTtBQUNBLFNBQUEsSUFBQSxDQUFBLElBQUEsa0JBQUEsRUFBQTtBQUNBLE1BQUEsa0JBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxrQkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsRUFBQTtBQUNBLE1BQUEsa0JBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxrQkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7O0FBQ0EsVUFBQSxrQkFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLEVBQUE7QUFDQSxRQUFBLGtCQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsa0JBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsR0FBQSxHQUFBLGtCQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLGtCQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0E7QUFDQTtBQUNBLEdBYkEsQ0FlQTs7O0FBQ0EsRUFBQSxrQkFBQSxHQUFBLGtCQUFBLENBQUEsTUFBQSxDQUFBLFVBQUEsQ0FBQSxFQUFBO0FBQUEsV0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBO0FBQUEsR0FBQSxDQUFBO0FBRUEsRUFBQSxrQkFBQSxDQUFBLElBQUE7QUFFQSxTQUFBLGtCQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsdURBQUEsQ0FBQSxXQUFBLEVBQUE7QUFBQSxNQUFBLHFCQUFBLHVFQUFBLElBQUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFBLGVBQUEsR0FBQSxDQUNBLDJCQUFBLFdBQUEsR0FBQSxJQURBLEVBRUEsMkJBQUEsV0FBQSxHQUFBLE1BRkEsRUFHQSwyQkFBQSxXQUFBLEdBQUEsSUFIQSxFQUlBLDJCQUFBLFdBQUEsR0FBQSxNQUpBLEVBS0EseUJBQUEsV0FBQSxHQUFBLElBTEEsRUFNQSx5QkFBQSxXQUFBLEdBQUEsTUFOQSxFQU9BLDhCQUFBLFdBQUEsR0FBQSxJQVBBLEVBUUEsOEJBQUEsV0FBQSxHQUFBLE1BUkEsQ0FBQTtBQVdBLE1BQUEsbUJBQUEsR0FBQSxFQUFBLENBaEJBLENBa0JBOztBQUNBLE9BQUEsSUFBQSxHQUFBLEdBQUEsQ0FBQSxFQUFBLEdBQUEsR0FBQSxlQUFBLENBQUEsTUFBQSxFQUFBLEdBQUEsRUFBQSxFQUFBO0FBRUEsUUFBQSxVQUFBLEdBQUEsZUFBQSxDQUFBLEdBQUEsQ0FBQTtBQUVBLFFBQUEsV0FBQTs7QUFDQSxRQUFBLHFCQUFBLEVBQUE7QUFDQSxNQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsa0JBQUEsV0FBQSxHQUFBLEdBQUEsR0FBQSxVQUFBLEdBQUEsa0JBQUEsQ0FBQSxDQURBLENBQ0E7QUFDQSxLQUZBLE1BRUE7QUFDQSxNQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsa0JBQUEsV0FBQSxHQUFBLEdBQUEsR0FBQSxVQUFBLEdBQUEsU0FBQSxDQUFBLENBREEsQ0FDQTtBQUNBLEtBVEEsQ0FZQTs7O0FBQ0EsU0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxHQUFBLFdBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBLEVBQUE7QUFFQSxVQUFBLGFBQUEsR0FBQSxNQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBRkEsQ0FFQTs7QUFDQSxVQUFBLHdCQUFBLEdBQUEsYUFBQSxDQUFBLEdBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBO0FBQ0EsVUFBQSxnQkFBQSxHQUFBLEVBQUEsQ0FKQSxDQU1BOztBQUNBLFVBQUEsd0JBQUEsQ0FBQSxNQUFBLEVBQUE7QUFBQTtBQUNBLGFBQUEsSUFBQSxDQUFBLElBQUEsd0JBQUEsRUFBQTtBQUVBO0FBRUEsY0FBQSxtQkFBQSxHQUFBLHdCQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUE7QUFFQSxjQUFBLGVBQUEsR0FBQSxRQUFBLENBQUEsbUJBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEdBQUEsUUFBQSxDQUFBLG1CQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxFQUFBO0FBRUEsVUFBQSxnQkFBQSxDQUFBLElBQUEsQ0FBQSxlQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFBLG1CQUFBLENBQUEsSUFBQSxDQUFBO0FBQ0EsZ0JBQUEsTUFBQSxDQUFBLGtCQUFBLFdBQUEsR0FBQSxHQUFBLEdBQUEsVUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FEQTtBQUVBLDRCQUFBLGFBQUEsQ0FBQSxHQUFBLEVBRkE7QUFHQSx5QkFBQSxhQUhBO0FBSUEsNEJBQUE7QUFKQSxPQUFBO0FBTUE7QUFDQSxHQTNEQSxDQTZEQTs7O0FBRUEsTUFBQSxvQkFBQSxHQUFBLENBQ0EsMEJBQUEsV0FBQSxHQUFBLElBREEsRUFFQSx3QkFBQSxXQUFBLEdBQUEsSUFGQSxDQUFBOztBQUlBLE9BQUEsSUFBQSxFQUFBLEdBQUEsQ0FBQSxFQUFBLEVBQUEsR0FBQSxvQkFBQSxDQUFBLE1BQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTtBQUVBLFFBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSxrQkFBQSxXQUFBLEdBQUEsR0FBQSxHQUFBLG9CQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FGQSxDQUVBOztBQUNBLFFBQUEsV0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLEVBQUE7QUFFQSxVQUFBLGNBQUEsR0FBQSxXQUFBLENBQUEsR0FBQSxHQUFBLElBQUEsR0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLENBRkEsQ0FFQTs7QUFDQSxVQUFBLEtBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQTtBQUNBLGlCQURBLENBQ0E7QUFDQTs7QUFDQSxVQUFBLEtBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQTtBQUNBLFlBQUEsT0FBQSxjQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQSxtQkFEQSxDQUNBO0FBQ0E7O0FBQ0EsUUFBQSxjQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQTtBQUNBOztBQUNBLFVBQUEsb0JBQUEsR0FBQSxRQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsR0FBQSxRQUFBLENBQUEsY0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsRUFBQTtBQUVBLFVBQUEscUJBQUEsR0FBQSxFQUFBO0FBQ0EsTUFBQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSxvQkFBQTtBQUVBLE1BQUEsbUJBQUEsQ0FBQSxJQUFBLENBQUE7QUFDQSxnQkFBQSxXQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FEQTtBQUVBLDRCQUFBLFdBQUEsQ0FBQSxHQUFBLEVBRkE7QUFHQSx5QkFBQSxXQUhBO0FBSUEsNEJBQUE7QUFKQSxPQUFBO0FBTUE7QUFDQTs7QUFFQSxTQUFBLG1CQUFBO0FBQ0EsQyxDQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLHVCQUFBLENBQUEsV0FBQSxFQUFBO0FBRUEsTUFBQSxnQkFBQSxPQUFBLFdBQUEsRUFBQTtBQUNBLElBQUEsV0FBQSxHQUFBLEdBQUE7QUFDQTs7QUFFQSxNQUFBLE1BQUEsQ0FBQSxzQkFBQSxXQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0EsV0FBQSxNQUFBLENBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsc0JBQUEsV0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0E7O0FBRUEsU0FBQSxJQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsaUNBQUEsQ0FBQSxXQUFBLEVBQUE7QUFFQSxNQUFBLGdCQUFBLE9BQUEsV0FBQSxFQUFBO0FBQ0EsSUFBQSxXQUFBLEdBQUEsR0FBQTtBQUNBOztBQUVBLE1BQUEsSUFBQSxHQUFBLHVCQUFBLENBQUEsV0FBQSxDQUFBOztBQUVBLE1BQUEsU0FBQSxJQUFBLEVBQUE7QUFFQTtBQUNBLElBQUEsTUFBQSxDQUFBLGtCQUFBLFdBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLEVBSEEsQ0FHQTs7QUFDQSxJQUFBLElBQUEsQ0FBQSxRQUFBLEdBQUEsS0FBQTtBQUNBLElBQUEsSUFBQSxDQUFBLEtBQUEsR0FBQSxFQUFBOztBQUNBLElBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxlQUFBLENBQUEsSUFBQTs7QUFFQSxXQUFBLElBQUE7QUFDQTs7QUFFQSxTQUFBLEtBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsdUNBQUEsQ0FBQSxXQUFBLEVBQUE7QUFFQSxNQUFBLGdCQUFBLE9BQUEsV0FBQSxFQUFBO0FBRUEsSUFBQSxNQUFBLENBQUEsc0JBQUEsV0FBQSxHQUFBLDJCQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEseUJBQUEsRUFGQSxDQUVBO0FBRUEsR0FKQSxNQUlBO0FBQ0EsSUFBQSxNQUFBLENBQUEsMEJBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSx5QkFBQSxFQURBLENBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSx3QkFBQSxDQUFBLFdBQUEsRUFBQSxJQUFBLEVBQUEsS0FBQSxFQUFBO0FBRUEsTUFBQSxnQkFBQSxPQUFBLFdBQUEsRUFBQTtBQUFBLElBQUEsV0FBQSxHQUFBLEdBQUE7QUFBQTs7QUFDQSxNQUFBLElBQUEsR0FBQSx1QkFBQSxDQUFBLFdBQUEsQ0FBQTs7QUFDQSxNQUFBLFNBQUEsSUFBQSxFQUFBO0FBRUEsSUFBQSxJQUFBLEdBQUEsUUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBLElBQUEsS0FBQSxHQUFBLFFBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxDQUFBLENBSEEsQ0FHQTs7QUFFQSxJQUFBLElBQUEsQ0FBQSxVQUFBLEdBQUEsSUFBQSxJQUFBLEVBQUEsQ0FMQSxDQU1BOztBQUNBLElBQUEsSUFBQSxDQUFBLFVBQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxDQUFBO0FBQ0EsSUFBQSxJQUFBLENBQUEsVUFBQSxDQUFBLFFBQUEsQ0FBQSxLQUFBO0FBQ0EsSUFBQSxJQUFBLENBQUEsVUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBO0FBRUEsSUFBQSxJQUFBLENBQUEsU0FBQSxHQUFBLElBQUEsQ0FBQSxVQUFBLENBQUEsUUFBQSxFQUFBO0FBQ0EsSUFBQSxJQUFBLENBQUEsUUFBQSxHQUFBLElBQUEsQ0FBQSxVQUFBLENBQUEsV0FBQSxFQUFBOztBQUVBLElBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxhQUFBLENBQUEsSUFBQTs7QUFDQSxJQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsZUFBQSxDQUFBLElBQUE7O0FBQ0EsSUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLFNBQUEsQ0FBQSxJQUFBOztBQUNBLElBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxlQUFBLENBQUEsSUFBQTs7QUFFQSxXQUFBLElBQUE7QUFDQTs7QUFDQSxTQUFBLEtBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLDJCQUFBLENBQUEsV0FBQSxFQUFBLGFBQUEsRUFBQTtBQUVBO0FBQ0EsTUFBQSxpQkFBQSxHQUFBLEtBQUEsQ0FBQSxrQ0FBQSxDQUFBLFdBQUEsRUFBQSxhQUFBLENBQUE7O0FBRUEsTUFBQSxpQkFBQSxHQUFBLFFBQUEsQ0FBQSxpQkFBQSxDQUFBLGtCQUFBLENBQUEsQ0FBQSxHQUFBLENBQUE7O0FBRUEsTUFBQSxlQUFBLGlCQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsZ0JBQUEsQ0FBQSxFQUFBO0FBRUEsUUFBQSw4QkFBQSxHQUFBLEtBQUEsQ0FBQSx5QkFBQSxDQUFBLFdBQUEsRUFBQSx5QkFBQSxDQUFBLENBRkEsQ0FFQTs7O0FBRUEsWUFBQSxpQkFBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLHFCQUFBLENBQUE7QUFDQSxXQUFBLFNBQUEsQ0FEQSxDQUVBOztBQUNBLFdBQUEsaUJBQUE7QUFDQSxXQUFBLGtCQUFBO0FBQ0EsV0FBQSxrQkFBQTtBQUNBLFFBQUEsaUJBQUEsR0FBQSxpQkFBQSxHQUFBLElBQUEsR0FBQSw4QkFBQTtBQUNBOztBQUNBO0FBUkE7QUFVQTs7QUFFQSxTQUFBLGlCQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSxvQ0FBQSxDQUFBLGdCQUFBLEVBQUEsWUFBQSxFQUFBO0FBRUEsT0FBQSxJQUFBLFVBQUEsR0FBQSxDQUFBLEVBQUEsVUFBQSxHQUFBLFlBQUEsQ0FBQSxNQUFBLEVBQUEsVUFBQSxFQUFBLEVBQUE7QUFBQTtBQUNBLFFBQUEsWUFBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLFdBQUEsT0FBQSxnQkFBQSxDQUFBLFdBQUEsRUFBQSxJQUNBLFlBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxRQUFBLE9BQUEsZ0JBQUEsQ0FBQSxRQUFBLEVBREEsSUFFQSxZQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsT0FBQSxPQUFBLGdCQUFBLENBQUEsT0FBQSxFQUZBLEVBRUE7QUFDQSxhQUFBLElBQUE7QUFDQTtBQUNBOztBQUVBLFNBQUEsS0FBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLHlCQUFBLENBQUEsSUFBQSxFQUFBO0FBRUEsTUFBQSxhQUFBLEdBQUEsSUFBQSxDQUFBLFdBQUEsS0FBQSxHQUFBO0FBQ0EsRUFBQSxhQUFBLElBQUEsSUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxFQUFBO0FBQ0EsRUFBQSxhQUFBLElBQUEsSUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLEdBQUEsR0FBQTtBQUNBLEVBQUEsYUFBQSxJQUFBLElBQUEsQ0FBQSxPQUFBLEtBQUEsRUFBQSxHQUFBLEdBQUEsR0FBQSxFQUFBO0FBQ0EsRUFBQSxhQUFBLElBQUEsSUFBQSxDQUFBLE9BQUEsRUFBQTtBQUVBLFNBQUEsYUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLHdCQUFBLENBQUEsSUFBQSxFQUFBO0FBRUEsTUFBQSxZQUFBLEdBQUEsSUFBQSxDQUFBLFFBQUEsS0FBQSxDQUFBLEdBQUEsR0FBQSxHQUFBLElBQUEsQ0FBQSxPQUFBLEVBQUEsR0FBQSxHQUFBLEdBQUEsSUFBQSxDQUFBLFdBQUEsRUFBQSxDQUZBLENBRUE7O0FBRUEsU0FBQSxZQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSx3Q0FBQSxDQUFBLElBQUEsRUFBQSxTQUFBLEVBQUE7QUFFQSxFQUFBLFNBQUEsR0FBQSxnQkFBQSxPQUFBLFNBQUEsR0FBQSxTQUFBLEdBQUEsR0FBQTtBQUVBLE1BQUEsUUFBQSxHQUFBLElBQUEsQ0FBQSxLQUFBLENBQUEsU0FBQSxDQUFBO0FBQ0EsTUFBQSxRQUFBLEdBQUE7QUFDQSxZQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBREE7QUFFQSxhQUFBLFFBQUEsQ0FBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUZBO0FBR0EsWUFBQSxRQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQTtBQUhBLEdBQUE7QUFLQSxTQUFBLFFBQUEsQ0FWQSxDQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSw2QkFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBLE1BQUEsQ0FBQSxNQUFBLENBQUEsc0JBQUEsV0FBQSxDQUFBLENBQUEsSUFBQSxHQUFBLFFBQUEsQ0FBQSwyQkFBQSxDQUFBLEVBQUE7QUFDQSxJQUFBLE1BQUEsQ0FBQSxzQkFBQSxXQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsb0ZBQUE7QUFDQTs7QUFDQSxNQUFBLENBQUEsTUFBQSxDQUFBLHNCQUFBLFdBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSwwQkFBQSxDQUFBLEVBQUE7QUFDQSxJQUFBLE1BQUEsQ0FBQSxzQkFBQSxXQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsMEJBQUE7QUFDQTs7QUFDQSxFQUFBLDBCQUFBLENBQUEsV0FBQSxDQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSw0QkFBQSxDQUFBLFdBQUEsRUFBQTtBQUNBLEVBQUEsTUFBQSxDQUFBLHNCQUFBLFdBQUEsR0FBQSwrQkFBQSxDQUFBLENBQUEsTUFBQTtBQUNBLEVBQUEsTUFBQSxDQUFBLHNCQUFBLFdBQUEsQ0FBQSxDQUFBLFdBQUEsQ0FBQSwwQkFBQTtBQUNBLEVBQUEseUJBQUEsQ0FBQSxXQUFBLENBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLDBCQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0EsTUFBQSxDQUFBLE1BQUEsQ0FBQSxzQkFBQSxXQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsb0JBQUEsQ0FBQSxFQUFBO0FBQ0EsSUFBQSxNQUFBLENBQUEsc0JBQUEsV0FBQSxDQUFBLENBQUEsUUFBQSxDQUFBLG9CQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBO0FBQ0EsRUFBQSxNQUFBLENBQUEsc0JBQUEsV0FBQSxDQUFBLENBQUEsV0FBQSxDQUFBLG9CQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLDBCQUFBLENBQUEsV0FBQSxFQUFBO0FBRUEsTUFBQSxJQUFBLEdBQUEsdUJBQUEsQ0FBQSxXQUFBLENBQUE7O0FBRUEsRUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLGVBQUEsQ0FBQSxJQUFBO0FBQ0EsQyxDQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLGdDQUFBLENBQUEsU0FBQSxFQUFBO0FBRUEsTUFBQSxDQUFBLFNBQUEsSUFBQSxTQUFBLENBQUEsTUFBQSxLQUFBLENBQUEsRUFBQTtBQUNBLFdBQUEsRUFBQTtBQUNBOztBQUVBLE1BQUEsTUFBQSxHQUFBLEVBQUE7QUFDQSxFQUFBLFNBQUEsQ0FBQSxJQUFBLENBQUEsVUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBO0FBQ0EsV0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLEdBRkE7QUFJQSxNQUFBLGNBQUEsR0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBOztBQUVBLE9BQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsR0FBQSxTQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsRUFBQSxFQUFBO0FBQ0EsUUFBQSxRQUFBLEdBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQTs7QUFFQSxRQUFBLFFBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxjQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUE7QUFDQSxNQUFBLGNBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLGNBQUEsQ0FBQSxDQUFBLENBQUEsRUFBQSxRQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxLQUZBLE1BRUE7QUFDQSxNQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsY0FBQTtBQUNBLE1BQUEsY0FBQSxHQUFBLFFBQUE7QUFDQTtBQUNBOztBQUVBLEVBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxjQUFBO0FBQ0EsU0FBQSxNQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSw4QkFBQSxDQUFBLFVBQUEsRUFBQSxVQUFBLEVBQUE7QUFFQSxNQUNBLEtBQUEsVUFBQSxDQUFBLE1BQUEsSUFDQSxLQUFBLFVBQUEsQ0FBQSxNQUZBLEVBR0E7QUFDQSxXQUFBLEtBQUE7QUFDQTs7QUFFQSxFQUFBLFVBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsRUFBQSxVQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLEVBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLFFBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxFQUFBLFVBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxRQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBRUEsTUFBQSxjQUFBLEdBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLFVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQWRBLENBZ0JBO0FBQ0E7QUFDQTs7QUFFQSxNQUFBLGNBQUEsR0FBQSxDQUFBLEVBQUE7QUFDQSxXQUFBLElBQUEsQ0FEQSxDQUNBO0FBQ0E7O0FBRUEsU0FBQSxLQUFBLENBeEJBLENBd0JBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSxpQ0FBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUE7QUFFQSxNQUFBLE9BQUEsQ0FBQSxNQUFBLElBQUEsQ0FBQSxFQUFBO0FBQUE7QUFDQSxXQUFBLE9BQUE7QUFDQTs7QUFFQSxNQUFBLEdBQUEsR0FBQSxPQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsTUFBQSxJQUFBLEdBQUEsSUFBQSxDQUFBLEdBQUEsQ0FBQSxPQUFBLEdBQUEsR0FBQSxDQUFBLENBUEEsQ0FPQTs7QUFDQSxNQUFBLFdBQUEsR0FBQSxPQUFBLENBQUEsQ0FBQSxDQUFBLENBUkEsQ0FRQTs7QUFFQSxPQUFBLElBQUEsQ0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBLEdBQUEsT0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLEVBQUEsRUFBQTtBQUNBLElBQUEsR0FBQSxHQUFBLE9BQUEsQ0FBQSxDQUFBLENBQUE7O0FBRUEsUUFBQSxJQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsR0FBQSxHQUFBLElBQUEsSUFBQSxFQUFBO0FBQUE7QUFDQSxNQUFBLElBQUEsR0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLE9BQUEsR0FBQSxHQUFBLENBQUE7QUFDQSxNQUFBLFdBQUEsR0FBQSxHQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFBLFdBQUE7QUFDQSxDLENBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEscUNBQUEsQ0FBQSxZQUFBLEVBQUEsV0FBQSxFQUFBLFFBQUEsRUFBQTtBQUVBO0FBRUEsRUFBQSxNQUFBLENBQUEsc0JBQUEsV0FBQSxHQUFBLGVBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsY0FBQSxFQUFBLFlBQUE7QUFFQSxNQUFBLEtBQUEsR0FBQSxNQUFBLENBQUEsc0JBQUEsV0FBQSxHQUFBLGVBQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBLENBTkEsQ0FNQTs7QUFFQSxNQUNBLGdCQUFBLE9BQUEsS0FBQSxJQUNBLFNBQUEsSUFBQSxLQUFBLENBQUEsTUFEQSxJQUVBLE9BQUEsWUFIQSxFQUlBO0FBRUEsSUFBQSxVQUFBLENBQUEsS0FBQSxFQUFBO0FBQ0EsTUFBQSxPQURBLG1CQUNBLFNBREEsRUFDQTtBQUVBLFlBQUEsZUFBQSxHQUFBLFNBQUEsQ0FBQSxZQUFBLENBQUEsY0FBQSxDQUFBO0FBRUEsZUFBQSx3Q0FDQSwrQkFEQSxHQUVBLGVBRkEsR0FHQSxRQUhBLEdBSUEsUUFKQTtBQUtBLE9BVkE7QUFXQSxNQUFBLFNBQUEsRUFBQSxJQVhBO0FBWUEsTUFBQSxPQUFBLEVBQUEsa0JBWkE7QUFhQSxNQUFBLFdBQUEsRUFBQSxLQWJBO0FBY0EsTUFBQSxXQUFBLEVBQUEsSUFkQTtBQWVBLE1BQUEsaUJBQUEsRUFBQSxFQWZBO0FBZ0JBLE1BQUEsUUFBQSxFQUFBLEdBaEJBO0FBaUJBLE1BQUEsS0FBQSxFQUFBLGtCQWpCQTtBQWtCQSxNQUFBLFNBQUEsRUFBQSxLQWxCQTtBQW1CQSxNQUFBLEtBQUEsRUFBQSxDQUFBLEdBQUEsRUFBQSxDQUFBLENBbkJBO0FBbUJBO0FBQ0E7QUFDQSxNQUFBLGdCQUFBLEVBQUEsSUFyQkE7QUFzQkEsTUFBQSxLQUFBLEVBQUEsSUF0QkE7QUFzQkE7QUFDQSxNQUFBLFFBQUEsRUFBQTtBQUFBLGVBQUEsUUFBQSxDQUFBLElBQUE7QUFBQTtBQXZCQSxLQUFBLENBQUE7QUEwQkEsV0FBQSxJQUFBO0FBQ0E7O0FBRUEsU0FBQSxLQUFBO0FBQ0E7QUM5MUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBO0FBRUE7QUFDQSxFQUFBLE1BQUEsQ0FBQSxzQkFBQSxXQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsYUFBQTtBQUNBLEVBQUEsa0JBQUEsQ0FBQSxXQUFBLENBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsNkJBQUEsQ0FBQSxXQUFBLEVBQUE7QUFFQSxFQUFBLEtBQUEsQ0FBQSx5QkFBQSxDQUFBLFdBQUEsRUFBQSxzQ0FBQSxFQUNBO0FBQ0EseUJBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLG1CQUFBLENBREE7QUFFQSx5QkFBQSxLQUFBLENBQUEseUJBQUEsQ0FBQSxXQUFBLEVBQUEsbUJBQUEsQ0FGQTtBQUdBLDhCQUFBLEtBQUEsQ0FBQSx5QkFBQSxDQUFBLFdBQUEsRUFBQSx3QkFBQSxDQUhBO0FBSUEsaUNBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLDJCQUFBLENBSkE7QUFLQSx1QkFBQSxLQUFBLENBQUEseUJBQUEsQ0FBQSxXQUFBLEVBQUEsaUJBQUEsQ0FMQTtBQU1BLCtCQUFBLEtBQUEsQ0FBQSx5QkFBQSxDQUFBLFdBQUEsRUFBQSx5QkFBQTtBQU5BLEdBREE7QUFVQSxDLENBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSxrQ0FBQSxDQUFBLFdBQUEsRUFBQTtBQUVBO0FBQ0EsRUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLFlBQUE7QUFFQTtBQUNBLElBQUEsVUFBQSxDQUFBLFlBQUE7QUFFQSxNQUFBLDRCQUFBLENBQUEsV0FBQSxDQUFBO0FBRUEsS0FKQSxFQUlBLElBSkEsQ0FBQTtBQUtBLEdBUkE7QUFTQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSw0QkFBQSxDQUFBLFdBQUEsRUFBQTtBQUVBLEVBQUEsS0FBQSxDQUFBLHdCQUFBLENBQUEsV0FBQSxFQUFBO0FBQUEsd0JBQUE7QUFBQSxHQUFBOztBQUVBLEVBQUEsNkJBQUEsQ0FBQSxXQUFBLENBQUE7QUFDQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBO0FBQ0EsQyxDQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsb0NBQUEsQ0FBQSxXQUFBLEVBQUE7QUFFQTtBQUNBLEVBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxZQUFBO0FBRUE7QUFDQSxJQUFBLFVBQUEsQ0FBQSxZQUFBO0FBRUEsTUFBQSw4QkFBQSxDQUFBLFdBQUEsQ0FBQTtBQUVBLEtBSkEsRUFJQSxJQUpBLENBQUE7QUFLQSxHQVJBO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsOEJBQUEsQ0FBQSxXQUFBLEVBQUE7QUFFQSxFQUFBLEtBQUEsQ0FBQSx3QkFBQSxDQUFBLFdBQUEsRUFBQTtBQUFBLHdCQUFBO0FBQUEsR0FBQTs7QUFFQSxFQUFBLDZCQUFBLENBQUEsV0FBQSxDQUFBO0FBQ0EsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQTtBQUNBLEMsQ0FHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSxpQ0FBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUE7QUFBQSxNQUFBLGdCQUFBLHVFQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFFQTtBQUNBLEVBQUEsTUFBQSxDQUFBLFFBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxZQUFBO0FBRUE7QUFDQSxJQUFBLFVBQUEsQ0FBQSxZQUFBO0FBRUEsTUFBQSwyQkFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEVBQUEsZ0JBQUEsQ0FBQTtBQUVBLEtBSkEsRUFJQSxJQUpBLENBQUE7QUFLQSxHQVJBO0FBU0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLDJCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsRUFBQTtBQUFBLE1BQUEsZ0JBQUEsdUVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTs7QUFFQSxFQUFBLEtBQUEsQ0FBQSx3QkFBQSxDQUFBLFdBQUEsRUFBQTtBQUFBLHdCQUFBO0FBQUEsR0FBQTs7QUFFQSxFQUFBLEtBQUEsQ0FBQSx3QkFBQSxDQUFBLFdBQUEsRUFBQTtBQUFBLHVCQUFBLFFBQUEsQ0FBQSxXQUFBO0FBQUEsR0FBQSxFQUpBLENBSUE7OztBQUNBLEVBQUEsS0FBQSxDQUFBLHdCQUFBLENBQUEsV0FBQSxFQUFBO0FBQUEsK0JBQUE7QUFBQSxHQUFBLEVBTEEsQ0FLQTs7O0FBRUEsRUFBQSw2QkFBQSxDQUFBLFdBQUEsQ0FBQTtBQUNBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLENBQUE7QUFDQSxDLENBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLGlDQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUE7QUFBQSxNQUFBLGFBQUEsdUVBQUEsRUFBQTtBQUFBLE1BQUEsZ0JBQUEsdUVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUVBO0FBQ0EsRUFBQSxNQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsS0FBQSxDQUFBLFlBQUE7QUFFQTtBQUNBLElBQUEsVUFBQSxDQUFBLFlBQUE7QUFFQSxNQUFBLDJCQUFBLENBQUEsV0FBQSxFQUFBLFFBQUEsRUFBQSxRQUFBLEVBQUEsYUFBQSxFQUFBLGdCQUFBLENBQUE7QUFDQSxLQUhBLEVBR0EsSUFIQSxDQUFBO0FBSUEsR0FQQTtBQVFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsMkJBQUEsQ0FBQSxXQUFBLEVBQUEsUUFBQSxFQUFBLFFBQUEsRUFBQTtBQUFBLE1BQUEsYUFBQSx1RUFBQSxFQUFBO0FBQUEsTUFBQSxnQkFBQSx1RUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBOztBQUVBLEVBQUEsS0FBQSxDQUFBLHdCQUFBLENBQUEsV0FBQSxFQUFBO0FBQUEsd0JBQUE7QUFBQSxHQUFBOztBQUNBLEVBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLG1CQUFBLEVBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxFQUhBLENBR0E7OztBQUNBLEVBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLG1CQUFBLEVBQUEsUUFBQSxDQUFBLFFBQUEsQ0FBQSxFQUpBLENBSUE7OztBQUNBLEVBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLHdCQUFBLEVBQUEsYUFBQSxFQUxBLENBS0E7OztBQUNBLEVBQUEsS0FBQSxDQUFBLHlCQUFBLENBQUEsV0FBQSxFQUFBLDJCQUFBLEVBQUEsZ0JBQUEsRUFOQSxDQU1BOzs7QUFFQSxFQUFBLDZCQUFBLENBQUEsV0FBQSxDQUFBO0FBQ0EsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQTtBQUNBO0FDdk1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUVBLFNBQUEsNkJBQUEsQ0FBQSxNQUFBLEVBQUE7QUFFQTtBQUNBLEVBQUEsNkJBQUEsQ0FBQSxNQUFBLENBQUEsYUFBQSxDQUFBLENBQUE7O0FBQ0EsTUFBQSxzQkFBQSxDQUFBLE1BQUEsRUFBQSwrQkFBQSxDQUFBLEVBQUE7QUFDQSxXQUFBLEtBQUE7QUFDQSxHQU5BLENBUUE7OztBQUNBLEVBQUEseUJBQUEsQ0FBQSxNQUFBLENBQUEsYUFBQSxDQUFBLENBQUEsQ0FUQSxDQVlBOztBQUNBLEVBQUEsT0FBQSxDQUFBLGNBQUEsQ0FBQSx3QkFBQTtBQUFBLEVBQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxpREFBQSxFQUFBLEtBQUEsQ0FBQSxrQkFBQSxFQUFBLEVBYkEsQ0FlQTs7QUFDQSxFQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsWUFBQSxDQUFBLFlBQUEsRUFDQTtBQUNBLElBQUEsTUFBQSxFQUFBLHdCQURBO0FBRUEsSUFBQSxnQkFBQSxFQUFBLEtBQUEsQ0FBQSxnQkFBQSxDQUFBLFNBQUEsQ0FGQTtBQUdBLElBQUEsS0FBQSxFQUFBLEtBQUEsQ0FBQSxnQkFBQSxDQUFBLE9BQUEsQ0FIQTtBQUlBLElBQUEsZUFBQSxFQUFBLEtBQUEsQ0FBQSxnQkFBQSxDQUFBLFFBQUEsQ0FKQTtBQU1BLElBQUEsdUJBQUEsRUFBQSxNQU5BLENBTUE7O0FBTkEsR0FEQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBQSxhQUFBLEVBQUEsVUFBQSxFQUFBLEtBQUEsRUFBQTtBQUNBO0FBQ0EsSUFBQSxPQUFBLENBQUEsR0FBQSxDQUFBLHlDQUFBLEVBQUEsYUFBQTtBQUFBLElBQUEsT0FBQSxDQUFBLFFBQUEsR0FGQSxDQUlBOztBQUNBLFFBQUEsMEJBQUEsR0FBQSw0Q0FBQSxDQUFBLEtBQUEsSUFBQSxDQUFBO0FBQ0EsSUFBQSx3QkFBQSxDQUFBLDBCQUFBLEVBQUEsK0JBQUEsQ0FBQSxDQU5BLENBUUE7O0FBQ0EsUUFBQSxRQUFBLGFBQUEsTUFBQSxRQUFBLElBQUEsYUFBQSxLQUFBLElBQUEsRUFBQTtBQUVBLFVBQUEsT0FBQSxHQUFBLHdDQUFBLENBQUEsS0FBQSxJQUFBLENBQUE7QUFDQSxVQUFBLFlBQUEsR0FBQSxNQUFBOztBQUVBLFVBQUEsT0FBQSxhQUFBLEVBQUE7QUFDQSxRQUFBLGFBQUEsR0FBQSxnTUFBQTtBQUNBLFFBQUEsWUFBQSxHQUFBLFNBQUE7QUFDQSxPQVJBLENBVUE7OztBQUNBLE1BQUEsNEJBQUEsQ0FBQSxhQUFBLEVBQUE7QUFBQSxnQkFBQSxZQUFBO0FBQ0EscUJBQUE7QUFBQSxxQkFBQSxPQUFBO0FBQUEsbUJBQUE7QUFBQSxTQURBO0FBRUEscUJBQUEsSUFGQTtBQUdBLGlCQUFBLGtCQUhBO0FBSUEsaUJBQUE7QUFKQSxPQUFBLENBQUE7QUFNQTtBQUNBLEtBM0JBLENBNkJBOzs7QUFDQSxJQUFBLDRCQUFBLENBQUEsYUFBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBLENBOUJBLENBZ0NBO0FBQ0E7O0FBQ0EsSUFBQSxLQUFBLENBQUEsK0JBQUEsQ0FBQSxhQUFBLENBQUEsYUFBQSxDQUFBLEVBQUEsYUFBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxFQWxDQSxDQW9DQTs7O0FBQ0EsSUFBQSxLQUFBLENBQUEsd0JBQUEsQ0FBQSxhQUFBLENBQUEsYUFBQSxDQUFBLEVBQUEsNEJBQUEsRUFBQSxhQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsNEJBQUEsQ0FBQSxFQXJDQSxDQXVDQTs7O0FBQ0EsSUFBQSxLQUFBLENBQUEsd0JBQUEsQ0FBQSxhQUFBLENBQUEsYUFBQSxDQUFBLEVBQUEsMkJBQUEsRUFBQSxhQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsMkJBQUEsQ0FBQSxFQXhDQSxDQXlDQTtBQUVBOzs7QUFDQSxJQUFBLDBCQUFBLENBQUEsYUFBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBOztBQUdBLFFBQ0EsZ0JBQUEsT0FBQSxhQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsMEJBQUEsQ0FBQSxJQUNBLE1BQUEsYUFBQSxDQUFBLFVBQUEsQ0FBQSxDQUFBLDBCQUFBLEVBQUEsT0FBQSxDQUFBLEtBQUEsRUFBQSxRQUFBLENBRkEsRUFHQTtBQUVBLFVBQUEsT0FBQSxHQUFBLHdDQUFBLENBQUEsS0FBQSxJQUFBLENBQUEsQ0FGQSxDQUlBOztBQUNBLE1BQUEsNEJBQUEsQ0FBQSxhQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsMEJBQUEsRUFBQSxPQUFBLENBQUEsS0FBQSxFQUFBLFFBQUEsQ0FBQSxFQUNBO0FBQUEsZ0JBQUEsZ0JBQUEsT0FBQSxhQUFBLENBQUEsVUFBQSxDQUFBLENBQUEsaUNBQUEsQ0FBQSxHQUNBLGFBQUEsQ0FBQSxVQUFBLENBQUEsQ0FBQSxpQ0FBQSxDQURBLEdBQ0EsTUFEQTtBQUVBLHFCQUFBO0FBQUEscUJBQUEsT0FBQTtBQUFBLG1CQUFBO0FBQUEsU0FGQTtBQUdBLHFCQUFBLElBSEE7QUFJQSxpQkFBQSxrQkFKQTtBQUtBLGlCQUFBO0FBTEEsT0FEQSxDQUFBO0FBUUEsS0EvREEsQ0FpRUE7O0FBQ0EsR0FuRkEsRUFvRkEsSUFwRkEsQ0FvRkEsVUFBQSxLQUFBLEVBQUEsVUFBQSxFQUFBLFdBQUEsRUFBQTtBQUFBLFFBQUEsTUFBQSxDQUFBLE9BQUEsSUFBQSxNQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsRUFBQTtBQUFBLE1BQUEsT0FBQSxDQUFBLEdBQUEsQ0FBQSxZQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBO0FBQUE7O0FBRUEsUUFBQSwwQkFBQSxHQUFBLDRDQUFBLENBQUEsS0FBQSxJQUFBLENBQUE7QUFDQSxJQUFBLHdCQUFBLENBQUEsMEJBQUEsRUFBQSwrQkFBQSxDQUFBLENBSEEsQ0FLQTs7QUFDQSxRQUFBLGFBQUEsR0FBQSxhQUFBLFFBQUEsR0FBQSxZQUFBLEdBQUEsV0FBQTs7QUFDQSxRQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUE7QUFDQSxNQUFBLGFBQUEsSUFBQSxVQUFBLEtBQUEsQ0FBQSxNQUFBLEdBQUEsT0FBQTs7QUFDQSxVQUFBLE9BQUEsS0FBQSxDQUFBLE1BQUEsRUFBQTtBQUNBLFFBQUEsYUFBQSxJQUFBLHNKQUFBO0FBQ0EsUUFBQSxhQUFBLElBQUEsa0xBQUE7QUFDQTtBQUNBOztBQUNBLFFBQUEsa0JBQUEsR0FBQSxJQUFBOztBQUNBLFFBQUEsS0FBQSxDQUFBLFlBQUEsRUFBQTtBQUNBLE1BQUEsYUFBQSxJQUFBLE1BQUEsS0FBQSxDQUFBLFlBQUE7QUFDQSxNQUFBLGtCQUFBLEdBQUEsRUFBQTtBQUNBOztBQUNBLElBQUEsYUFBQSxHQUFBLGFBQUEsQ0FBQSxPQUFBLENBQUEsS0FBQSxFQUFBLFFBQUEsQ0FBQTtBQUVBLFFBQUEsT0FBQSxHQUFBLHdDQUFBLENBQUEsS0FBQSxJQUFBLENBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUEsWUFBQSxHQUFBLFVBQUEsQ0FBQSxZQUFBO0FBRUE7QUFDQSxNQUFBLDRCQUFBLENBQUEsYUFBQSxFQUFBO0FBQUEsZ0JBQUEsT0FBQTtBQUNBLHFCQUFBO0FBQUEscUJBQUEsT0FBQTtBQUFBLG1CQUFBO0FBQUEsU0FEQTtBQUVBLHFCQUFBLElBRkE7QUFHQSxpQkFBQSxrQkFIQTtBQUlBLHFCQUFBLHFCQUpBO0FBS0EsaUJBQUE7QUFMQSxPQUFBLENBQUE7QUFPQSxLQVZBLEVBV0EsUUFBQSxDQUFBLGtCQUFBLENBWEEsQ0FBQTtBQWFBLEdBN0hBLEVBOEhBO0FBQ0E7QUEvSEEsR0FoQkEsQ0FnSkE7QUFDQSxDLENBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSx3Q0FBQSxDQUFBLHdCQUFBLEVBQUE7QUFFQSxNQUFBLE9BQUEsR0FBQSxtQkFBQTtBQUVBLE1BQUEsb0JBQUEsR0FBQSw0Q0FBQSxDQUFBLHdCQUFBLENBQUE7O0FBRUEsTUFBQSxvQkFBQSxHQUFBLENBQUEsRUFBQTtBQUNBLElBQUEsT0FBQSxHQUFBLHNCQUFBLG9CQUFBO0FBQ0E7O0FBRUEsU0FBQSxPQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLDRDQUFBLENBQUEsd0JBQUEsRUFBQTtBQUVBO0FBQ0EsTUFBQSxvQkFBQSxHQUFBLDBCQUFBLENBQUEsc0NBQUEsRUFBQSx3QkFBQSxDQUFBOztBQUNBLE1BQUEsU0FBQSxvQkFBQSxJQUFBLE9BQUEsb0JBQUEsRUFBQTtBQUNBLElBQUEsb0JBQUEsR0FBQSxRQUFBLENBQUEsb0JBQUEsQ0FBQTs7QUFDQSxRQUFBLG9CQUFBLEdBQUEsQ0FBQSxFQUFBO0FBQ0EsYUFBQSxvQkFBQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBQSxDQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLDBCQUFBLENBQUEsSUFBQSxFQUFBLEdBQUEsRUFBQTtBQUVBLEVBQUEsR0FBQSxHQUFBLGtCQUFBLENBQUEsR0FBQSxDQUFBO0FBRUEsRUFBQSxJQUFBLEdBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxTQUFBLEVBQUEsTUFBQSxDQUFBO0FBQ0EsTUFBQSxLQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsU0FBQSxJQUFBLEdBQUEsbUJBQUEsQ0FBQTtBQUFBLE1BQ0EsT0FBQSxHQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQURBO0FBRUEsTUFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLElBQUE7QUFDQSxNQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLE9BQUEsRUFBQTtBQUNBLFNBQUEsa0JBQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsRUFBQSxHQUFBLENBQUEsQ0FBQTtBQUNBLEMsQ0FHQTs7QUNyT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsNEJBQUEsQ0FBQSxPQUFBLEVBQUE7QUFBQSxNQUFBLE1BQUEsdUVBQUEsRUFBQTtBQUVBLE1BQUEsY0FBQSxHQUFBO0FBQ0EsWUFBQSxTQURBO0FBQ0E7QUFDQSxpQkFBQTtBQUNBLGlCQUFBLEVBREE7QUFDQTtBQUNBLGVBQUEsUUFGQSxDQUVBOztBQUZBLEtBRkE7QUFNQSxpQkFBQSxJQU5BO0FBTUE7QUFDQSxhQUFBLGtCQVBBO0FBT0E7QUFDQSxpQkFBQSxFQVJBO0FBUUE7QUFDQSxhQUFBLENBVEE7QUFTQTtBQUNBLDJCQUFBLEtBVkE7QUFVQTtBQUNBLGlCQUFBLElBWEEsQ0FXQTs7QUFYQSxHQUFBOztBQWFBLE9BQUEsSUFBQSxLQUFBLElBQUEsTUFBQSxFQUFBO0FBQ0EsSUFBQSxjQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQTtBQUNBOztBQUNBLEVBQUEsTUFBQSxHQUFBLGNBQUE7QUFFQSxNQUFBLGFBQUEsR0FBQSxJQUFBLElBQUEsRUFBQTtBQUNBLEVBQUEsYUFBQSxHQUFBLGlCQUFBLGFBQUEsQ0FBQSxPQUFBLEVBQUE7QUFFQSxFQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSxrQkFBQTs7QUFDQSxNQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxPQUFBLEVBQUE7QUFDQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSx3QkFBQTtBQUNBLElBQUEsT0FBQSxHQUFBLG9FQUFBLE9BQUE7QUFDQTs7QUFDQSxNQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxTQUFBLEVBQUE7QUFDQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSwwQkFBQTtBQUNBLElBQUEsT0FBQSxHQUFBLHVEQUFBLE9BQUE7QUFDQTs7QUFDQSxNQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxNQUFBLEVBQUE7QUFDQSxJQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsSUFBQSx1QkFBQTtBQUNBOztBQUNBLE1BQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLFNBQUEsRUFBQTtBQUNBLElBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxJQUFBLDBCQUFBO0FBQ0EsSUFBQSxPQUFBLEdBQUEsNERBQUEsT0FBQTtBQUNBOztBQUVBLE1BQUEsaUJBQUEsR0FBQSxjQUFBLGFBQUEsR0FBQSx1Q0FBQTtBQUNBLEVBQUEsT0FBQSxHQUFBLGNBQUEsYUFBQSxHQUFBLG1DQUFBLEdBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLEdBQUEsSUFBQSxHQUFBLE9BQUEsR0FBQSxRQUFBO0FBR0EsTUFBQSxhQUFBLEdBQUEsS0FBQTtBQUNBLE1BQUEsZUFBQSxHQUFBLElBQUE7O0FBRUEsTUFBQSxhQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsRUFBQTtBQUVBLFFBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxFQUFBO0FBQ0EsTUFBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLGlCQUFBO0FBQ0EsTUFBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLE9BQUE7QUFDQSxLQUhBLE1BR0E7QUFDQSxNQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsaUJBQUEsR0FBQSxPQUFBO0FBQ0E7QUFFQSxHQVRBLE1BU0EsSUFBQSxhQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsRUFBQTtBQUVBLElBQUEsYUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLENBQUEsc0JBQUEsQ0FBQTs7QUFDQSxRQUFBLE1BQUEsQ0FBQSxxQkFBQSxDQUFBLElBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsRUFBQTtBQUNBLE1BQUEsZUFBQSxHQUFBLEtBQUE7QUFDQSxNQUFBLGFBQUEsR0FBQSxNQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFDQSxRQUFBLGVBQUEsRUFBQTtBQUNBLE1BQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxpQkFBQTtBQUNBLE1BQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBO0FBQ0E7QUFFQSxHQVpBLE1BWUEsSUFBQSxZQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsRUFBQTtBQUVBLElBQUEsYUFBQSxHQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsc0JBQUEsQ0FBQTs7QUFDQSxRQUFBLE1BQUEsQ0FBQSxxQkFBQSxDQUFBLElBQUEsYUFBQSxDQUFBLEVBQUEsQ0FBQSxVQUFBLENBQUEsRUFBQTtBQUNBLE1BQUEsZUFBQSxHQUFBLEtBQUE7QUFDQSxNQUFBLGFBQUEsR0FBQSxNQUFBLENBQUEsYUFBQSxDQUFBLEdBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUE7QUFDQTs7QUFDQSxRQUFBLGVBQUEsRUFBQTtBQUNBLE1BQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxpQkFBQSxFQURBLENBQ0E7O0FBQ0EsTUFBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFBLE9BQUE7QUFDQTtBQUVBLEdBWkEsTUFZQSxJQUFBLFlBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxFQUFBO0FBRUEsSUFBQSxhQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSwwQ0FBQSxFQUFBLElBQUEsQ0FBQSxzQkFBQSxDQUFBOztBQUNBLFFBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEsSUFBQSxhQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxFQUFBO0FBQ0EsTUFBQSxlQUFBLEdBQUEsS0FBQTtBQUNBLE1BQUEsYUFBQSxHQUFBLE1BQUEsQ0FBQSxhQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUNBLFFBQUEsZUFBQSxFQUFBO0FBQ0EsTUFBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLGlCQUFBLEVBREEsQ0FDQTs7QUFDQSxNQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQUEsMERBQUEsT0FBQSxHQUFBLFFBQUE7QUFDQTtBQUNBLEdBWEEsTUFXQSxJQUFBLFdBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxFQUFBO0FBRUEsSUFBQSxhQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLENBQUEsQ0FBQSxTQUFBLENBQUEsQ0FBQSxDQUFBLFFBQUEsQ0FBQSx5Q0FBQSxFQUFBLElBQUEsQ0FBQSxzQkFBQSxDQUFBOztBQUNBLFFBQUEsTUFBQSxDQUFBLHFCQUFBLENBQUEsSUFBQSxhQUFBLENBQUEsRUFBQSxDQUFBLFVBQUEsQ0FBQSxFQUFBO0FBQ0EsTUFBQSxlQUFBLEdBQUEsS0FBQTtBQUNBLE1BQUEsYUFBQSxHQUFBLE1BQUEsQ0FBQSxhQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQTtBQUNBOztBQUNBLFFBQUEsZUFBQSxFQUFBO0FBQ0EsTUFBQSxNQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLGlCQUFBLEVBREEsQ0FDQTs7QUFDQSxNQUFBLE1BQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxDQUFBLENBQUEsU0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEseURBQUEsT0FBQSxHQUFBLFFBQUE7QUFDQTtBQUNBOztBQUVBLE1BQUEsZUFBQSxJQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEVBQUE7QUFDQSxRQUFBLFlBQUEsR0FBQSxVQUFBLENBQUEsWUFBQTtBQUNBLE1BQUEsTUFBQSxDQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsT0FBQSxDQUFBLElBQUE7QUFDQSxLQUZBLEVBRUEsUUFBQSxDQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsQ0FGQSxDQUFBO0FBSUEsUUFBQSxhQUFBLEdBQUEsVUFBQSxDQUFBLFlBQUE7QUFDQSxNQUFBLE1BQUEsQ0FBQSxNQUFBLGFBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQSxNQUFBO0FBQ0EsS0FGQSxFQUVBLFFBQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsR0FBQSxJQUZBLENBQUE7QUFHQSxHQWhIQSxDQWtIQTs7O0FBQ0EsTUFBQSxVQUFBLEdBQUEsTUFBQSxDQUFBLE1BQUEsYUFBQSxDQUFBLENBQUEsT0FBQSxHQUFBLEdBQUEsQ0FBQSxZQUFBO0FBQ0EsUUFBQSxDQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLElBQUEsTUFBQSxDQUFBLGlCQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLEVBQUE7QUFDQSxNQUFBLE1BQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQSxJQUFBO0FBQ0E7QUFDQSxHQUpBLENBQUE7O0FBTUEsTUFBQSxNQUFBLENBQUEsV0FBQSxDQUFBLEVBQUE7QUFDQSxJQUFBLGNBQUEsQ0FBQSxNQUFBLGFBQUEsR0FBQSxTQUFBLENBQUE7QUFDQTs7QUFFQSxTQUFBLGFBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLG1DQUFBLENBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQTtBQUVBLE1BQUEsaUJBQUEsR0FBQSw0QkFBQSxDQUNBLE9BREEsRUFFQTtBQUNBLFlBQUEsT0FEQTtBQUVBLGFBQUEsS0FGQTtBQUdBLDJCQUFBLElBSEE7QUFJQSxpQkFBQTtBQUNBLGVBQUEsT0FEQTtBQUVBLGlCQUFBO0FBRkE7QUFKQSxHQUZBLENBQUE7QUFZQSxTQUFBLGlCQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSxpREFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUEsYUFBQSxFQUFBO0FBRUEsTUFBQSxnQkFBQSxPQUFBLGFBQUEsRUFBQTtBQUNBLElBQUEsYUFBQSxHQUFBLENBQUE7QUFDQTs7QUFFQSxNQUFBLGlCQUFBLEdBQUEsNEJBQUEsQ0FDQSxPQURBLEVBRUE7QUFDQSxZQUFBLE9BREE7QUFFQSxhQUFBLGFBRkE7QUFHQSwyQkFBQSxJQUhBO0FBSUEsaUJBQUE7QUFDQSxlQUFBLE9BREE7QUFFQSxpQkFBQTtBQUZBO0FBSkEsR0FGQSxDQUFBO0FBWUEsU0FBQSxpQkFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsaURBQUEsQ0FBQSxPQUFBLEVBQUEsT0FBQSxFQUFBLGFBQUEsRUFBQTtBQUVBLE1BQUEsZ0JBQUEsT0FBQSxhQUFBLEVBQUE7QUFDQSxJQUFBLGFBQUEsR0FBQSxLQUFBO0FBQ0E7O0FBRUEsTUFBQSxpQkFBQSxHQUFBLDRCQUFBLENBQ0EsT0FEQSxFQUVBO0FBQ0EsWUFBQSxPQURBO0FBRUEsYUFBQSxhQUZBO0FBR0EsMkJBQUEsSUFIQTtBQUlBLGlCQUFBO0FBQ0EsZUFBQSxRQURBO0FBRUEsaUJBQUE7QUFGQTtBQUpBLEdBRkEsQ0FBQTtBQVlBLFNBQUEsaUJBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFBLHFDQUFBLENBQUEsT0FBQSxFQUFBLE9BQUEsRUFBQTtBQUVBLE1BQUEsaUJBQUEsR0FBQSw0QkFBQSxDQUNBLE9BREEsRUFFQTtBQUNBLFlBQUEsU0FEQTtBQUVBLGFBQUEsS0FGQTtBQUdBLDJCQUFBLElBSEE7QUFJQSxpQkFBQTtBQUNBLGVBQUEsT0FEQTtBQUVBLGlCQUFBO0FBRkE7QUFKQSxHQUZBLENBQUE7QUFZQSxTQUFBLGlCQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSxtREFBQSxDQUFBLE9BQUEsRUFBQSxPQUFBLEVBQUE7QUFFQSxNQUFBLGlCQUFBLEdBQUEsNEJBQUEsQ0FDQSxPQURBLEVBRUE7QUFDQSxZQUFBLFNBREE7QUFFQSxhQUFBLEtBRkE7QUFHQSwyQkFBQSxJQUhBO0FBSUEsaUJBQUE7QUFDQSxlQUFBLE9BREE7QUFFQSxpQkFBQTtBQUZBO0FBSkEsR0FGQSxDQUFBO0FBWUEsU0FBQSxpQkFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQUEsbURBQUEsQ0FBQSxPQUFBLEVBQUEsT0FBQSxFQUFBO0FBRUEsTUFBQSxpQkFBQSxHQUFBLDRCQUFBLENBQ0EsT0FEQSxFQUVBO0FBQ0EsWUFBQSxTQURBO0FBRUEsYUFBQSxLQUZBO0FBR0EsMkJBQUEsSUFIQTtBQUlBLGlCQUFBO0FBQ0EsZUFBQSxRQURBO0FBRUEsaUJBQUE7QUFGQTtBQUpBLEdBRkEsQ0FBQTtBQVlBLFNBQUEsaUJBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsU0FBQSxjQUFBLENBQUEsT0FBQSxFQUFBO0FBQUEsTUFBQSxrQkFBQSx1RUFBQSxDQUFBOztBQUVBLE1BQUEsQ0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxFQUFBO0FBQ0E7QUFDQTs7QUFDQSxNQUFBLFlBQUEsR0FBQSxNQUFBLENBQUEsT0FBQSxDQUFBLENBQUEsTUFBQSxHQUFBLEdBQUE7O0FBRUEsTUFBQSxZQUFBLElBQUEsQ0FBQSxFQUFBO0FBQ0EsUUFBQSxLQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBLE1BQUEsWUFBQSxHQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxPQUFBLENBQUEsVUFBQSxFQUFBLEtBQUEsR0FBQSxNQUFBLEdBQUEsR0FBQTtBQUNBLEtBRkEsTUFFQSxJQUFBLEtBQUEsTUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxPQUFBLENBQUEsVUFBQSxFQUFBLE1BQUEsRUFBQTtBQUNBLE1BQUEsWUFBQSxHQUFBLE1BQUEsQ0FBQSxPQUFBLENBQUEsQ0FBQSxNQUFBLEdBQUEsT0FBQSxDQUFBLFVBQUEsRUFBQSxLQUFBLEdBQUEsTUFBQSxHQUFBLEdBQUE7QUFDQTtBQUNBOztBQUVBLE1BQUEsTUFBQSxDQUFBLGFBQUEsQ0FBQSxDQUFBLE1BQUEsR0FBQSxDQUFBLEVBQUE7QUFDQSxJQUFBLFlBQUEsR0FBQSxZQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUE7QUFDQSxHQUZBLE1BRUE7QUFDQSxJQUFBLFlBQUEsR0FBQSxZQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUE7QUFDQTs7QUFDQSxFQUFBLFlBQUEsSUFBQSxrQkFBQSxDQXBCQSxDQXNCQTs7QUFDQSxNQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxXQUFBLENBQUEsRUFBQTtBQUNBLElBQUEsTUFBQSxDQUFBLFdBQUEsQ0FBQSxDQUFBLE9BQUEsQ0FBQTtBQUFBLE1BQUEsU0FBQSxFQUFBO0FBQUEsS0FBQSxFQUFBLEdBQUE7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICpcdGluY2x1ZGVzL19fanMvd3BiYy93cGJjLmpzXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBEZWVwIENsb25lIG9mIG9iamVjdCBvciBhcnJheVxyXG4gKlxyXG4gKiBAcGFyYW0gb2JqXHJcbiAqIEByZXR1cm5zIHthbnl9XHJcbiAqL1xyXG5mdW5jdGlvbiB3cGJjX2Nsb25lX29iaiggb2JqICl7XHJcblxyXG5cdHJldHVybiBKU09OLnBhcnNlKCBKU09OLnN0cmluZ2lmeSggb2JqICkgKTtcclxufVxyXG5cclxuXHJcblxyXG4vKipcclxuICogTWFpbiBfd3BiYyBKUyBvYmplY3RcclxuICovXHJcblxyXG52YXIgX3dwYmMgPSAoZnVuY3Rpb24gKCBvYmosICQpIHtcclxuXHJcblx0Ly8gU2VjdXJlIHBhcmFtZXRlcnMgZm9yIEFqYXhcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdHZhciBwX3NlY3VyZSA9IG9iai5zZWN1cml0eV9vYmogPSBvYmouc2VjdXJpdHlfb2JqIHx8IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dXNlcl9pZDogMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bm9uY2UgIDogJycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvY2FsZSA6ICcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIH07XHJcblx0b2JqLnNldF9zZWN1cmVfcGFyYW0gPSBmdW5jdGlvbiAoIHBhcmFtX2tleSwgcGFyYW1fdmFsICkge1xyXG5cdFx0cF9zZWN1cmVbIHBhcmFtX2tleSBdID0gcGFyYW1fdmFsO1xyXG5cdH07XHJcblxyXG5cdG9iai5nZXRfc2VjdXJlX3BhcmFtID0gZnVuY3Rpb24gKCBwYXJhbV9rZXkgKSB7XHJcblx0XHRyZXR1cm4gcF9zZWN1cmVbIHBhcmFtX2tleSBdO1xyXG5cdH07XHJcblxyXG5cclxuXHQvLyBDYWxlbmRhcnMgXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0dmFyIHBfY2FsZW5kYXJzID0gb2JqLmNhbGVuZGFyc19vYmogPSBvYmouY2FsZW5kYXJzX29iaiB8fCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHNvcnQgICAgICAgICAgICA6IFwiYm9va2luZ19pZFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzb3J0X3R5cGUgICAgICAgOiBcIkRFU0NcIixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gcGFnZV9udW0gICAgICAgIDogMSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gcGFnZV9pdGVtc19jb3VudDogMTAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNyZWF0ZV9kYXRlICAgICA6IFwiXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGtleXdvcmQgICAgICAgICA6IFwiXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHNvdXJjZSAgICAgICAgICA6IFwiXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiAgQ2hlY2sgaWYgY2FsZW5kYXIgZm9yIHNwZWNpZmljIGJvb2tpbmcgcmVzb3VyY2UgZGVmaW5lZCAgIDo6ICAgdHJ1ZSB8IGZhbHNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xpbnR9IHJlc291cmNlX2lkXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0b2JqLmNhbGVuZGFyX19pc19kZWZpbmVkID0gZnVuY3Rpb24gKCByZXNvdXJjZV9pZCApIHtcclxuXHJcblx0XHRyZXR1cm4gKCd1bmRlZmluZWQnICE9PSB0eXBlb2YoIHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF0gKSApO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqICBDcmVhdGUgQ2FsZW5kYXIgaW5pdGlhbGl6aW5nXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xpbnR9IHJlc291cmNlX2lkXHJcblx0ICovXHJcblx0b2JqLmNhbGVuZGFyX19pbml0ID0gZnVuY3Rpb24gKCByZXNvdXJjZV9pZCApIHtcclxuXHJcblx0XHRwX2NhbGVuZGFyc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdID0ge307XHJcblx0XHRwX2NhbGVuZGFyc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyAnaWQnIF0gPSByZXNvdXJjZV9pZDtcclxuXHRcdHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdwZW5kaW5nX2RheXNfc2VsZWN0YWJsZScgXSA9IGZhbHNlO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBDaGVjayAgaWYgdGhlIHR5cGUgb2YgdGhpcyBwcm9wZXJ0eSAgaXMgSU5UXHJcblx0ICogQHBhcmFtIHByb3BlcnR5X25hbWVcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRvYmouY2FsZW5kYXJfX2lzX3Byb3BfaW50ID0gZnVuY3Rpb24gKCBwcm9wZXJ0eV9uYW1lICkge1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly9GaXhJbjogOS45LjAuMjlcclxuXHJcblx0XHR2YXIgcF9jYWxlbmRhcl9pbnRfcHJvcGVydGllcyA9IFsnZHluYW1pY19fZGF5c19taW4nLCAnZHluYW1pY19fZGF5c19tYXgnLCAnZml4ZWRfX2RheXNfbnVtJ107XHJcblxyXG5cdFx0dmFyIGlzX2luY2x1ZGUgPSBwX2NhbGVuZGFyX2ludF9wcm9wZXJ0aWVzLmluY2x1ZGVzKCBwcm9wZXJ0eV9uYW1lICk7XHJcblxyXG5cdFx0cmV0dXJuIGlzX2luY2x1ZGU7XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBwYXJhbXMgZm9yIGFsbCAgY2FsZW5kYXJzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2FsZW5kYXJzX29ialx0XHRPYmplY3QgeyBjYWxlbmRhcl8xOiB7fSB9XHJcblx0ICogXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IGNhbGVuZGFyXzM6IHt9LCAuLi4gfVxyXG5cdCAqL1xyXG5cdG9iai5jYWxlbmRhcnNfYWxsX19zZXQgPSBmdW5jdGlvbiAoIGNhbGVuZGFyc19vYmogKSB7XHJcblx0XHRwX2NhbGVuZGFycyA9IGNhbGVuZGFyc19vYmo7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGJvb2tpbmdzIGluIGFsbCBjYWxlbmRhcnNcclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtvYmplY3R8e319XHJcblx0ICovXHJcblx0b2JqLmNhbGVuZGFyc19hbGxfX2dldCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBwX2NhbGVuZGFycztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgY2FsZW5kYXIgb2JqZWN0ICAgOjogICB7IGlkOiAxLCDigKYgfVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFx0XHRcdFx0ICAnMidcclxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fGJvb2xlYW59XHRcdFx0XHRcdHsgaWQ6IDIgLOKApiB9XHJcblx0ICovXHJcblx0b2JqLmNhbGVuZGFyX19nZXRfcGFyYW1ldGVycyA9IGZ1bmN0aW9uICggcmVzb3VyY2VfaWQgKSB7XHJcblxyXG5cdFx0aWYgKCBvYmouY2FsZW5kYXJfX2lzX2RlZmluZWQoIHJlc291cmNlX2lkICkgKXtcclxuXHJcblx0XHRcdHJldHVybiBwX2NhbGVuZGFyc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBjYWxlbmRhciBvYmplY3QgICA6OiAgIHsgZGF0ZXM6ICBPYmplY3QgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKYgfVxyXG5cdCAqXHJcblx0ICogaWYgY2FsZW5kYXIgb2JqZWN0ICBub3QgZGVmaW5lZCwgdGhlbiAgaXQncyB3aWxsIGJlIGRlZmluZWQgYW5kIElEIHNldFxyXG5cdCAqIGlmIGNhbGVuZGFyIGV4aXN0LCB0aGVuICBzeXN0ZW0gc2V0ICBhcyBuZXcgb3Igb3ZlcndyaXRlIG9ubHkgcHJvcGVydGllcyBmcm9tIGNhbGVuZGFyX3Byb3BlcnR5X29iaiBwYXJhbWV0ZXIsICBidXQgb3RoZXIgcHJvcGVydGllcyB3aWxsIGJlIGV4aXN0ZWQgYW5kIG5vdCBvdmVyd3JpdGUsIGxpa2UgJ2lkJ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFx0XHRcdFx0ICAnMidcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2FsZW5kYXJfcHJvcGVydHlfb2JqXHRcdFx0XHRcdCAgeyAgZGF0ZXM6ICBPYmplY3QgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKYgfSAgfVxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNfY29tcGxldGVfb3ZlcndyaXRlXHRcdCAgaWYgJ3RydWUnIChkZWZhdWx0OiAnZmFsc2UnKSwgIHRoZW4gIG9ubHkgb3ZlcndyaXRlIG9yIGFkZCAgbmV3IHByb3BlcnRpZXMgaW4gIGNhbGVuZGFyX3Byb3BlcnR5X29ialxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqXHJcblx0ICogRXhhbXBsZXM6XHJcblx0ICpcclxuXHQgKiBDb21tb24gdXNhZ2UgaW4gUEhQOlxyXG5cdCAqICAgXHRcdFx0ZWNobyBcIiAgX3dwYmMuY2FsZW5kYXJfX3NldCggIFwiIC5pbnR2YWwoICRyZXNvdXJjZV9pZCApIC4gXCIsIHsgJ2RhdGVzJzogXCIgLiB3cF9qc29uX2VuY29kZSggJGF2YWlsYWJpbGl0eV9wZXJfZGF5c19hcnIgKSAuIFwiIH0gKTtcIjtcclxuXHQgKi9cclxuXHRvYmouY2FsZW5kYXJfX3NldF9wYXJhbWV0ZXJzID0gZnVuY3Rpb24gKCByZXNvdXJjZV9pZCwgY2FsZW5kYXJfcHJvcGVydHlfb2JqLCBpc19jb21wbGV0ZV9vdmVyd3JpdGUgPSBmYWxzZSAgKSB7XHJcblxyXG5cdFx0aWYgKCAoIW9iai5jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSkgfHwgKHRydWUgPT09IGlzX2NvbXBsZXRlX292ZXJ3cml0ZSkgKXtcclxuXHRcdFx0b2JqLmNhbGVuZGFyX19pbml0KCByZXNvdXJjZV9pZCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAoIHZhciBwcm9wX25hbWUgaW4gY2FsZW5kYXJfcHJvcGVydHlfb2JqICl7XHJcblxyXG5cdFx0XHRwX2NhbGVuZGFyc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyBwcm9wX25hbWUgXSA9IGNhbGVuZGFyX3Byb3BlcnR5X29ialsgcHJvcF9uYW1lIF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF07XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogU2V0IHByb3BlcnR5ICB0byAgY2FsZW5kYXJcclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcdFwiMVwiXHJcblx0ICogQHBhcmFtIHByb3BfbmFtZVx0XHRuYW1lIG9mIHByb3BlcnR5XHJcblx0ICogQHBhcmFtIHByb3BfdmFsdWVcdHZhbHVlIG9mIHByb3BlcnR5XHJcblx0ICogQHJldHVybnMgeyp9XHRcdFx0Y2FsZW5kYXIgb2JqZWN0XHJcblx0ICovXHJcblx0b2JqLmNhbGVuZGFyX19zZXRfcGFyYW1fdmFsdWUgPSBmdW5jdGlvbiAoIHJlc291cmNlX2lkLCBwcm9wX25hbWUsIHByb3BfdmFsdWUgKSB7XHJcblxyXG5cdFx0aWYgKCAoIW9iai5jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSkgKXtcclxuXHRcdFx0b2JqLmNhbGVuZGFyX19pbml0KCByZXNvdXJjZV9pZCApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdID0gcHJvcF92YWx1ZTtcclxuXHJcblx0XHRyZXR1cm4gcF9jYWxlbmRhcnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiAgR2V0IGNhbGVuZGFyIHByb3BlcnR5IHZhbHVlICAgXHQ6OiAgIG1peGVkIHwgbnVsbFxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSAgcmVzb3VyY2VfaWRcdFx0JzEnXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHByb3BfbmFtZVx0XHRcdCdzZWxlY3Rpb25fbW9kZSdcclxuXHQgKiBAcmV0dXJucyB7KnxudWxsfVx0XHRcdFx0XHRtaXhlZCB8IG51bGxcclxuXHQgKi9cclxuXHRvYmouY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSA9IGZ1bmN0aW9uKCByZXNvdXJjZV9pZCwgcHJvcF9uYW1lICl7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQgICAoIG9iai5jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSApXHJcblx0XHRcdCYmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAoIHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdICkgKVxyXG5cdFx0KXtcclxuXHRcdFx0Ly9GaXhJbjogOS45LjAuMjlcclxuXHRcdFx0aWYgKCBvYmouY2FsZW5kYXJfX2lzX3Byb3BfaW50KCBwcm9wX25hbWUgKSApe1xyXG5cdFx0XHRcdHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdID0gcGFyc2VJbnQoIHBfY2FsZW5kYXJzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdICk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuICBwX2NhbGVuZGFyc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyBwcm9wX25hbWUgXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcdFx0Ly8gSWYgc29tZSBwcm9wZXJ0eSBub3QgZGVmaW5lZCwgdGhlbiBudWxsO1xyXG5cdH07XHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cdC8vIEJvb2tpbmdzIFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdHZhciBwX2Jvb2tpbmdzID0gb2JqLmJvb2tpbmdzX29iaiA9IG9iai5ib29raW5nc19vYmogfHwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNhbGVuZGFyXzE6IE9iamVjdCB7XHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0ICAgaWQ6ICAgICAxXHJcbiBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vXHRcdFx0XHRcdFx0ICwgZGF0ZXM6ICBPYmplY3QgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqICBDaGVjayBpZiBib29raW5ncyBmb3Igc3BlY2lmaWMgYm9va2luZyByZXNvdXJjZSBkZWZpbmVkICAgOjogICB0cnVlIHwgZmFsc2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGludH0gcmVzb3VyY2VfaWRcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJfX2lzX2RlZmluZWQgPSBmdW5jdGlvbiAoIHJlc291cmNlX2lkICkge1xyXG5cclxuXHRcdHJldHVybiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiggcF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdICkgKTtcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYm9va2luZ3MgY2FsZW5kYXIgb2JqZWN0ICAgOjogICB7IGlkOiAxICwgZGF0ZXM6ICBPYmplY3QgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKYgfVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFx0XHRcdFx0ICAnMidcclxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fGJvb2xlYW59XHRcdFx0XHRcdHsgaWQ6IDIgLCBkYXRlczogIE9iamVjdCB7IFwiMjAyMy0wNy0yMVwiOiB74oCmfSwgXCIyMDIzLTA3LTIyXCI6IHvigKZ9LCBcIjIwMjMtMDctMjNcIjoge+KApn0sIOKApiB9XHJcblx0ICovXHJcblx0b2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXQgPSBmdW5jdGlvbiggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHRpZiAoIG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSApe1xyXG5cclxuXHRcdFx0cmV0dXJuIHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgYm9va2luZ3MgY2FsZW5kYXIgb2JqZWN0ICAgOjogICB7IGRhdGVzOiAgT2JqZWN0IHsgXCIyMDIzLTA3LTIxXCI6IHvigKZ9LCBcIjIwMjMtMDctMjJcIjoge+KApn0sIFwiMjAyMy0wNy0yM1wiOiB74oCmfSwg4oCmIH1cclxuXHQgKlxyXG5cdCAqIGlmIGNhbGVuZGFyIG9iamVjdCAgbm90IGRlZmluZWQsIHRoZW4gIGl0J3Mgd2lsbCBiZSBkZWZpbmVkIGFuZCBJRCBzZXRcclxuXHQgKiBpZiBjYWxlbmRhciBleGlzdCwgdGhlbiAgc3lzdGVtIHNldCAgYXMgbmV3IG9yIG92ZXJ3cml0ZSBvbmx5IHByb3BlcnRpZXMgZnJvbSBjYWxlbmRhcl9vYmogcGFyYW1ldGVyLCAgYnV0IG90aGVyIHByb3BlcnRpZXMgd2lsbCBiZSBleGlzdGVkIGFuZCBub3Qgb3ZlcndyaXRlLCBsaWtlICdpZCdcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGludH0gcmVzb3VyY2VfaWRcdFx0XHRcdCAgJzInXHJcblx0ICogQHBhcmFtIHtvYmplY3R9IGNhbGVuZGFyX29ialx0XHRcdFx0XHQgIHsgIGRhdGVzOiAgT2JqZWN0IHsgXCIyMDIzLTA3LTIxXCI6IHvigKZ9LCBcIjIwMjMtMDctMjJcIjoge+KApn0sIFwiMjAyMy0wNy0yM1wiOiB74oCmfSwg4oCmIH0gIH1cclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKlxyXG5cdCAqIEV4YW1wbGVzOlxyXG5cdCAqXHJcblx0ICogQ29tbW9uIHVzYWdlIGluIFBIUDpcclxuXHQgKiAgIFx0XHRcdGVjaG8gXCIgIF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19zZXQoICBcIiAuaW50dmFsKCAkcmVzb3VyY2VfaWQgKSAuIFwiLCB7ICdkYXRlcyc6IFwiIC4gd3BfanNvbl9lbmNvZGUoICRhdmFpbGFiaWxpdHlfcGVyX2RheXNfYXJyICkgLiBcIiB9ICk7XCI7XHJcblx0ICovXHJcblx0b2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyX19zZXQgPSBmdW5jdGlvbiggcmVzb3VyY2VfaWQsIGNhbGVuZGFyX29iaiApe1xyXG5cclxuXHRcdGlmICggISBvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJfX2lzX2RlZmluZWQoIHJlc291cmNlX2lkICkgKXtcclxuXHRcdFx0cF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdID0ge307XHJcblx0XHRcdHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgJ2lkJyBdID0gcmVzb3VyY2VfaWQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yICggdmFyIHByb3BfbmFtZSBpbiBjYWxlbmRhcl9vYmogKXtcclxuXHJcblx0XHRcdHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgcHJvcF9uYW1lIF0gPSBjYWxlbmRhcl9vYmpbIHByb3BfbmFtZSBdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF07XHJcblx0fTtcclxuXHJcblx0Ly8gRGF0ZXNcclxuXHJcblx0LyoqXHJcblx0ICogIEdldCBib29raW5ncyBkYXRhIGZvciBBTEwgRGF0ZXMgaW4gY2FsZW5kYXIgICA6OiAgIGZhbHNlIHwgeyBcIjIwMjMtMDctMjJcIjoge+KApn0sIFwiMjAyMy0wNy0yM1wiOiB74oCmfSwg4oCmIH1cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGludH0gcmVzb3VyY2VfaWRcdFx0XHQnMSdcclxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fGJvb2xlYW59XHRcdFx0XHRmYWxzZSB8IE9iamVjdCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIyMDIzLTA3LTI0XCI6IE9iamVjdCB7IFsnc3VtbWFyeSddWydzdGF0dXNfZm9yX2RheSddOiBcImF2YWlsYWJsZVwiLCBkYXlfYXZhaWxhYmlsaXR5OiAxLCBtYXhfY2FwYWNpdHk6IDEsIOKApiB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIyMDIzLTA3LTI2XCI6IE9iamVjdCB7IFsnc3VtbWFyeSddWydzdGF0dXNfZm9yX2RheSddOiBcImZ1bGxfZGF5X2Jvb2tpbmdcIiwgWydzdW1tYXJ5J11bJ3N0YXR1c19mb3JfYm9va2luZ3MnXTogXCJwZW5kaW5nXCIsIGRheV9hdmFpbGFiaWxpdHk6IDAsIOKApiB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIyMDIzLTA3LTI5XCI6IE9iamVjdCB7IFsnc3VtbWFyeSddWydzdGF0dXNfZm9yX2RheSddOiBcInJlc291cmNlX2F2YWlsYWJpbGl0eVwiLCBkYXlfYXZhaWxhYmlsaXR5OiAwLCBtYXhfY2FwYWNpdHk6IDEsIOKApiB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCIyMDIzLTA3LTMwXCI6IHvigKZ9LCBcIjIwMjMtMDctMzFcIjoge+KApn0sIOKAplxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0ICovXHJcblx0b2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXRfZGF0ZXMgPSBmdW5jdGlvbiggcmVzb3VyY2VfaWQpe1xyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0ICAgKCBvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJfX2lzX2RlZmluZWQoIHJlc291cmNlX2lkICkgKVxyXG5cdFx0XHQmJiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgKCBwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdkYXRlcycgXSApIClcclxuXHRcdCl7XHJcblx0XHRcdHJldHVybiAgcF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyAnZGF0ZXMnIF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1x0XHQvLyBJZiBzb21lIHByb3BlcnR5IG5vdCBkZWZpbmVkLCB0aGVuIGZhbHNlO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldCBib29raW5ncyBkYXRlcyBpbiBjYWxlbmRhciBvYmplY3QgICA6OiAgICB7IFwiMjAyMy0wNy0yMVwiOiB74oCmfSwgXCIyMDIzLTA3LTIyXCI6IHvigKZ9LCBcIjIwMjMtMDctMjNcIjoge+KApn0sIOKApiB9XHJcblx0ICpcclxuXHQgKiBpZiBjYWxlbmRhciBvYmplY3QgIG5vdCBkZWZpbmVkLCB0aGVuICBpdCdzIHdpbGwgYmUgZGVmaW5lZCBhbmQgJ2lkJywgJ2RhdGVzJyBzZXRcclxuXHQgKiBpZiBjYWxlbmRhciBleGlzdCwgdGhlbiBzeXN0ZW0gYWRkIGEgIG5ldyBvciBvdmVyd3JpdGUgb25seSBkYXRlcyBmcm9tIGRhdGVzX29iaiBwYXJhbWV0ZXIsXHJcblx0ICogYnV0IG90aGVyIGRhdGVzIG5vdCBmcm9tIHBhcmFtZXRlciBkYXRlc19vYmogd2lsbCBiZSBleGlzdGVkIGFuZCBub3Qgb3ZlcndyaXRlLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHtzdHJpbmd8aW50fSByZXNvdXJjZV9pZFx0XHRcdFx0ICAnMidcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gZGF0ZXNfb2JqXHRcdFx0XHRcdCAgeyBcIjIwMjMtMDctMjFcIjoge+KApn0sIFwiMjAyMy0wNy0yMlwiOiB74oCmfSwgXCIyMDIzLTA3LTIzXCI6IHvigKZ9LCDigKYgfVxyXG5cdCAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNfY29tcGxldGVfb3ZlcndyaXRlXHRcdCAgaWYgZmFsc2UsICB0aGVuICBvbmx5IG92ZXJ3cml0ZSBvciBhZGQgIGRhdGVzIGZyb20gXHRkYXRlc19vYmpcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKlxyXG5cdCAqIEV4YW1wbGVzOlxyXG5cdCAqICAgXHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX3NldF9kYXRlcyggcmVzb3VyY2VfaWQsIHsgXCIyMDIzLTA3LTIxXCI6IHvigKZ9LCBcIjIwMjMtMDctMjJcIjoge+KApn0sIOKApiB9ICApO1x0XHQ8LSAgIG92ZXJ3cml0ZSBBTEwgZGF0ZXNcclxuXHQgKiAgIFx0XHRcdF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19zZXRfZGF0ZXMoIHJlc291cmNlX2lkLCB7IFwiMjAyMy0wNy0yMlwiOiB74oCmfSB9LCAgZmFsc2UgICk7XHRcdFx0XHRcdDwtICAgYWRkIG9yIG92ZXJ3cml0ZSBvbmx5ICBcdFwiMjAyMy0wNy0yMlwiOiB7fVxyXG5cdCAqXHJcblx0ICogQ29tbW9uIHVzYWdlIGluIFBIUDpcclxuXHQgKiAgIFx0XHRcdGVjaG8gXCIgIF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19zZXRfZGF0ZXMoICBcIiAuIGludHZhbCggJHJlc291cmNlX2lkICkgLiBcIiwgIFwiIC4gd3BfanNvbl9lbmNvZGUoICRhdmFpbGFiaWxpdHlfcGVyX2RheXNfYXJyICkgLiBcIiAgKTsgIFwiO1xyXG5cdCAqL1xyXG5cdG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9fc2V0X2RhdGVzID0gZnVuY3Rpb24oIHJlc291cmNlX2lkLCBkYXRlc19vYmogLCBpc19jb21wbGV0ZV9vdmVyd3JpdGUgPSB0cnVlICl7XHJcblxyXG5cdFx0aWYgKCAhb2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyX19pc19kZWZpbmVkKCByZXNvdXJjZV9pZCApICl7XHJcblx0XHRcdG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9fc2V0KCByZXNvdXJjZV9pZCwgeyAnZGF0ZXMnOiB7fSB9ICk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIChwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdkYXRlcycgXSkgKXtcclxuXHRcdFx0cF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyAnZGF0ZXMnIF0gPSB7fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChpc19jb21wbGV0ZV9vdmVyd3JpdGUpe1xyXG5cclxuXHRcdFx0Ly8gQ29tcGxldGUgb3ZlcndyaXRlIGFsbCAgYm9va2luZyBkYXRlc1xyXG5cdFx0XHRwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdkYXRlcycgXSA9IGRhdGVzX29iajtcclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHQvLyBBZGQgb25seSAgbmV3IG9yIG92ZXJ3cml0ZSBleGlzdCBib29raW5nIGRhdGVzIGZyb20gIHBhcmFtZXRlci4gQm9va2luZyBkYXRlcyBub3QgZnJvbSAgcGFyYW1ldGVyICB3aWxsICBiZSB3aXRob3V0IGNobmFuZ2VzXHJcblx0XHRcdGZvciAoIHZhciBwcm9wX25hbWUgaW4gZGF0ZXNfb2JqICl7XHJcblxyXG5cdFx0XHRcdHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsnZGF0ZXMnXVsgcHJvcF9uYW1lIF0gPSBkYXRlc19vYmpbIHByb3BfbmFtZSBdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXTtcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogIEdldCBib29raW5ncyBkYXRhIGZvciBzcGVjaWZpYyBkYXRlIGluIGNhbGVuZGFyICAgOjogICBmYWxzZSB8IHsgZGF5X2F2YWlsYWJpbGl0eTogMSwgLi4uIH1cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGludH0gcmVzb3VyY2VfaWRcdFx0XHQnMSdcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3FsX2NsYXNzX2RheVx0XHRcdCcyMDIzLTA3LTIxJ1xyXG5cdCAqIEByZXR1cm5zIHtvYmplY3R8Ym9vbGVhbn1cdFx0XHRcdGZhbHNlIHwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkYXlfYXZhaWxhYmlsaXR5OiA0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heF9jYXBhY2l0eTogNFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vICA+PSBCdXNpbmVzcyBMYXJnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQyOiBPYmplY3QgeyBpc19kYXlfdW5hdmFpbGFibGU6IGZhbHNlLCBfZGF5X3N0YXR1czogXCJhdmFpbGFibGVcIiB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDEwOiBPYmplY3QgeyBpc19kYXlfdW5hdmFpbGFibGU6IGZhbHNlLCBfZGF5X3N0YXR1czogXCJhdmFpbGFibGVcIiB9XHRcdC8vICA+PSBCdXNpbmVzcyBMYXJnZSAuLi5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTE6IE9iamVjdCB7IGlzX2RheV91bmF2YWlsYWJsZTogZmFsc2UsIF9kYXlfc3RhdHVzOiBcImF2YWlsYWJsZVwiIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0MTI6IE9iamVjdCB7IGlzX2RheV91bmF2YWlsYWJsZTogZmFsc2UsIF9kYXlfc3RhdHVzOiBcImF2YWlsYWJsZVwiIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHQgKi9cclxuXHRvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSA9IGZ1bmN0aW9uKCByZXNvdXJjZV9pZCwgc3FsX2NsYXNzX2RheSApe1xyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0ICAgKCBvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJfX2lzX2RlZmluZWQoIHJlc291cmNlX2lkICkgKVxyXG5cdFx0XHQmJiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgKCBwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bICdkYXRlcycgXSApIClcclxuXHRcdFx0JiYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mICggcF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyAnZGF0ZXMnIF1bIHNxbF9jbGFzc19kYXkgXSApIClcclxuXHRcdCl7XHJcblx0XHRcdHJldHVybiAgcF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyAnZGF0ZXMnIF1bIHNxbF9jbGFzc19kYXkgXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHRcdC8vIElmIHNvbWUgcHJvcGVydHkgbm90IGRlZmluZWQsIHRoZW4gZmFsc2U7XHJcblx0fTtcclxuXHJcblxyXG5cdC8vIEFueSAgUEFSQU1TICAgaW4gYm9va2luZ3NcclxuXHJcblx0LyoqXHJcblx0ICogU2V0IHByb3BlcnR5ICB0byAgYm9va2luZ1xyXG5cdCAqIEBwYXJhbSByZXNvdXJjZV9pZFx0XCIxXCJcclxuXHQgKiBAcGFyYW0gcHJvcF9uYW1lXHRcdG5hbWUgb2YgcHJvcGVydHlcclxuXHQgKiBAcGFyYW0gcHJvcF92YWx1ZVx0dmFsdWUgb2YgcHJvcGVydHlcclxuXHQgKiBAcmV0dXJucyB7Kn1cdFx0XHRib29raW5nIG9iamVjdFxyXG5cdCAqL1xyXG5cdG9iai5ib29raW5nX19zZXRfcGFyYW1fdmFsdWUgPSBmdW5jdGlvbiAoIHJlc291cmNlX2lkLCBwcm9wX25hbWUsIHByb3BfdmFsdWUgKSB7XHJcblxyXG5cdFx0aWYgKCAhIG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSApe1xyXG5cdFx0XHRwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF0gPSB7fTtcclxuXHRcdFx0cF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyAnaWQnIF0gPSByZXNvdXJjZV9pZDtcclxuXHRcdH1cclxuXHJcblx0XHRwX2Jvb2tpbmdzWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHByb3BfbmFtZSBdID0gcHJvcF92YWx1ZTtcclxuXHJcblx0XHRyZXR1cm4gcF9ib29raW5nc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdO1xyXG5cdH07XHJcblxyXG5cdC8qKlxyXG5cdCAqICBHZXQgYm9va2luZyBwcm9wZXJ0eSB2YWx1ZSAgIFx0OjogICBtaXhlZCB8IG51bGxcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfGludH0gIHJlc291cmNlX2lkXHRcdCcxJ1xyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wX25hbWVcdFx0XHQnc2VsZWN0aW9uX21vZGUnXHJcblx0ICogQHJldHVybnMgeyp8bnVsbH1cdFx0XHRcdFx0bWl4ZWQgfCBudWxsXHJcblx0ICovXHJcblx0b2JqLmJvb2tpbmdfX2dldF9wYXJhbV92YWx1ZSA9IGZ1bmN0aW9uKCByZXNvdXJjZV9pZCwgcHJvcF9uYW1lICl7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQgICAoIG9iai5ib29raW5nc19pbl9jYWxlbmRhcl9faXNfZGVmaW5lZCggcmVzb3VyY2VfaWQgKSApXHJcblx0XHRcdCYmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAoIHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgcHJvcF9uYW1lIF0gKSApXHJcblx0XHQpe1xyXG5cdFx0XHRyZXR1cm4gIHBfYm9va2luZ3NbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXVsgcHJvcF9uYW1lIF07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG51bGw7XHRcdC8vIElmIHNvbWUgcHJvcGVydHkgbm90IGRlZmluZWQsIHRoZW4gbnVsbDtcclxuXHR9O1xyXG5cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZXQgYm9va2luZ3MgZm9yIGFsbCAgY2FsZW5kYXJzXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge29iamVjdH0gY2FsZW5kYXJzX29ialx0XHRPYmplY3QgeyBjYWxlbmRhcl8xOiB7IGlkOiAxLCBkYXRlczogT2JqZWN0IHsgXCIyMDIzLTA3LTIyXCI6IHvigKZ9LCBcIjIwMjMtMDctMjNcIjoge+KApn0sIFwiMjAyMy0wNy0yNFwiOiB74oCmfSwg4oCmIH0gfVxyXG5cdCAqIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCBjYWxlbmRhcl8zOiB7fSwgLi4uIH1cclxuXHQgKi9cclxuXHRvYmouYm9va2luZ3NfaW5fY2FsZW5kYXJzX19zZXRfYWxsID0gZnVuY3Rpb24gKCBjYWxlbmRhcnNfb2JqICkge1xyXG5cdFx0cF9ib29raW5ncyA9IGNhbGVuZGFyc19vYmo7XHJcblx0fTtcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IGJvb2tpbmdzIGluIGFsbCBjYWxlbmRhcnNcclxuXHQgKlxyXG5cdCAqIEByZXR1cm5zIHtvYmplY3R8e319XHJcblx0ICovXHJcblx0b2JqLmJvb2tpbmdzX2luX2NhbGVuZGFyc19fZ2V0X2FsbCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybiBwX2Jvb2tpbmdzO1xyXG5cdH07XHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcblx0Ly8gU2Vhc29ucyBcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHR2YXIgcF9zZWFzb25zID0gb2JqLnNlYXNvbnNfb2JqID0gb2JqLnNlYXNvbnNfb2JqIHx8IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjYWxlbmRhcl8xOiBPYmplY3Qge1xyXG4gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdCAgIGlkOiAgICAgMVxyXG4gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL1x0XHRcdFx0XHRcdCAsIGRhdGVzOiAgT2JqZWN0IHsgXCIyMDIzLTA3LTIxXCI6IHvigKZ9LCBcIjIwMjMtMDctMjJcIjoge+KApn0sIFwiMjAyMy0wNy0yM1wiOiB74oCmfSwg4oCmXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiBBZGQgc2Vhc29uIG5hbWVzIGZvciBkYXRlcyBpbiBjYWxlbmRhciBvYmplY3QgICA6OiAgICB7IFwiMjAyMy0wNy0yMVwiOiBbICd3cGJjX3NlYXNvbl9zZXB0ZW1iZXJfMjAyMycsICd3cGJjX3NlYXNvbl9zZXB0ZW1iZXJfMjAyNCcgXSwgXCIyMDIzLTA3LTIyXCI6IFsuLi5dLCAuLi4gfVxyXG5cdCAqXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xpbnR9IHJlc291cmNlX2lkXHRcdFx0XHQgICcyJ1xyXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBkYXRlc19vYmpcdFx0XHRcdFx0ICB7IFwiMjAyMy0wNy0yMVwiOiB74oCmfSwgXCIyMDIzLTA3LTIyXCI6IHvigKZ9LCBcIjIwMjMtMDctMjNcIjoge+KApn0sIOKApiB9XHJcblx0ICogQHBhcmFtIHtib29sZWFufSBpc19jb21wbGV0ZV9vdmVyd3JpdGVcdFx0ICBpZiBmYWxzZSwgIHRoZW4gIG9ubHkgIGFkZCAgZGF0ZXMgZnJvbSBcdGRhdGVzX29ialxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqXHJcblx0ICogRXhhbXBsZXM6XHJcblx0ICogICBcdFx0XHRfd3BiYy5zZWFzb25zX19zZXQoIHJlc291cmNlX2lkLCB7IFwiMjAyMy0wNy0yMVwiOiBbICd3cGJjX3NlYXNvbl9zZXB0ZW1iZXJfMjAyMycsICd3cGJjX3NlYXNvbl9zZXB0ZW1iZXJfMjAyNCcgXSwgXCIyMDIzLTA3LTIyXCI6IFsuLi5dLCAuLi4gfSAgKTtcclxuXHQgKi9cclxuXHRvYmouc2Vhc29uc19fc2V0ID0gZnVuY3Rpb24oIHJlc291cmNlX2lkLCBkYXRlc19vYmogLCBpc19jb21wbGV0ZV9vdmVyd3JpdGUgPSBmYWxzZSApe1xyXG5cclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiAocF9zZWFzb25zWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF0pICl7XHJcblx0XHRcdHBfc2Vhc29uc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdID0ge307XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBpc19jb21wbGV0ZV9vdmVyd3JpdGUgKXtcclxuXHJcblx0XHRcdC8vIENvbXBsZXRlIG92ZXJ3cml0ZSBhbGwgIHNlYXNvbiBkYXRlc1xyXG5cdFx0XHRwX3NlYXNvbnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXSA9IGRhdGVzX29iajtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0Ly8gQWRkIG9ubHkgIG5ldyBvciBvdmVyd3JpdGUgZXhpc3QgYm9va2luZyBkYXRlcyBmcm9tICBwYXJhbWV0ZXIuIEJvb2tpbmcgZGF0ZXMgbm90IGZyb20gIHBhcmFtZXRlciAgd2lsbCAgYmUgd2l0aG91dCBjaG5hbmdlc1xyXG5cdFx0XHRmb3IgKCB2YXIgcHJvcF9uYW1lIGluIGRhdGVzX29iaiApe1xyXG5cclxuXHRcdFx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKHBfc2Vhc29uc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyBwcm9wX25hbWUgXSkgKXtcclxuXHRcdFx0XHRcdHBfc2Vhc29uc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyBwcm9wX25hbWUgXSA9IFtdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKCB2YXIgc2Vhc29uX25hbWVfa2V5IGluIGRhdGVzX29ialsgcHJvcF9uYW1lIF0gKXtcclxuXHRcdFx0XHRcdHBfc2Vhc29uc1sgJ2NhbGVuZGFyXycgKyByZXNvdXJjZV9pZCBdWyBwcm9wX25hbWUgXS5wdXNoKCBkYXRlc19vYmpbIHByb3BfbmFtZSBdWyBzZWFzb25fbmFtZV9rZXkgXSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBwX3NlYXNvbnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXTtcclxuXHR9O1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogIEdldCBib29raW5ncyBkYXRhIGZvciBzcGVjaWZpYyBkYXRlIGluIGNhbGVuZGFyICAgOjogICBbXSB8IFsgJ3dwYmNfc2Vhc29uX3NlcHRlbWJlcl8yMDIzJywgJ3dwYmNfc2Vhc29uX3NlcHRlbWJlcl8yMDI0JyBdXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xpbnR9IHJlc291cmNlX2lkXHRcdFx0JzEnXHJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHNxbF9jbGFzc19kYXlcdFx0XHQnMjAyMy0wNy0yMSdcclxuXHQgKiBAcmV0dXJucyB7b2JqZWN0fGJvb2xlYW59XHRcdFx0XHRbXSAgfCAgWyAnd3BiY19zZWFzb25fc2VwdGVtYmVyXzIwMjMnLCAnd3BiY19zZWFzb25fc2VwdGVtYmVyXzIwMjQnIF1cclxuXHQgKi9cclxuXHRvYmouc2Vhc29uc19fZ2V0X2Zvcl9kYXRlID0gZnVuY3Rpb24oIHJlc291cmNlX2lkLCBzcWxfY2xhc3NfZGF5ICl7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHQgICAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgKCBwX3NlYXNvbnNbICdjYWxlbmRhcl8nICsgcmVzb3VyY2VfaWQgXSApIClcclxuXHRcdFx0JiYgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mICggcF9zZWFzb25zWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHNxbF9jbGFzc19kYXkgXSApIClcclxuXHRcdCl7XHJcblx0XHRcdHJldHVybiAgcF9zZWFzb25zWyAnY2FsZW5kYXJfJyArIHJlc291cmNlX2lkIF1bIHNxbF9jbGFzc19kYXkgXTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gW107XHRcdC8vIElmIG5vdCBkZWZpbmVkLCB0aGVuIFtdO1xyXG5cdH07XHJcblxyXG5cclxuXHQvLyBPdGhlciBwYXJhbWV0ZXJzIFx0XHRcdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdHZhciBwX290aGVyID0gb2JqLm90aGVyX29iaiA9IG9iai5vdGhlcl9vYmogfHwgeyB9O1xyXG5cclxuXHRvYmouc2V0X290aGVyX3BhcmFtID0gZnVuY3Rpb24gKCBwYXJhbV9rZXksIHBhcmFtX3ZhbCApIHtcclxuXHRcdHBfb3RoZXJbIHBhcmFtX2tleSBdID0gcGFyYW1fdmFsO1xyXG5cdH07XHJcblxyXG5cdG9iai5nZXRfb3RoZXJfcGFyYW0gPSBmdW5jdGlvbiAoIHBhcmFtX2tleSApIHtcclxuXHRcdHJldHVybiBwX290aGVyWyBwYXJhbV9rZXkgXTtcclxuXHR9O1xyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHRyZXR1cm4gb2JqO1xyXG5cclxufSggX3dwYmMgfHwge30sIGpRdWVyeSApKTtcclxuIiwiLyoqXHJcbiAqIEV4dGVuZCBfd3BiYyB3aXRoICBuZXcgbWV0aG9kcyAgICAgICAgLy9GaXhJbjogOS44LjYuMlxyXG4gKlxyXG4gKiBAdHlwZSB7Knx7fX1cclxuICogQHByaXZhdGVcclxuICovXHJcbiBfd3BiYyA9IChmdW5jdGlvbiAoIG9iaiwgJCkge1xyXG5cclxuXHQvLyBMb2FkIEJhbGFuY2VyIFx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0dmFyIHBfYmFsYW5jZXIgPSBvYmouYmFsYW5jZXJfb2JqID0gb2JqLmJhbGFuY2VyX29iaiB8fCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J21heF90aHJlYWRzJzogMixcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaW5fcHJvY2VzcycgOiBbXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd2FpdCcgICAgICAgOiBbXVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cclxuXHQgLyoqXHJcblx0ICAqIFNldCAgbWF4IHBhcmFsbGVsIHJlcXVlc3QgIHRvICBsb2FkXHJcblx0ICAqXHJcblx0ICAqIEBwYXJhbSBtYXhfdGhyZWFkc1xyXG5cdCAgKi9cclxuXHRvYmouYmFsYW5jZXJfX3NldF9tYXhfdGhyZWFkcyA9IGZ1bmN0aW9uICggbWF4X3RocmVhZHMgKXtcclxuXHJcblx0XHRwX2JhbGFuY2VyWyAnbWF4X3RocmVhZHMnIF0gPSBtYXhfdGhyZWFkcztcclxuXHR9O1xyXG5cclxuXHQvKipcclxuXHQgKiAgQ2hlY2sgaWYgYmFsYW5jZXIgZm9yIHNwZWNpZmljIGJvb2tpbmcgcmVzb3VyY2UgZGVmaW5lZCAgIDo6ICAgdHJ1ZSB8IGZhbHNlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xpbnR9IHJlc291cmNlX2lkXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0b2JqLmJhbGFuY2VyX19pc19kZWZpbmVkID0gZnVuY3Rpb24gKCByZXNvdXJjZV9pZCApIHtcclxuXHJcblx0XHRyZXR1cm4gKCd1bmRlZmluZWQnICE9PSB0eXBlb2YoIHBfYmFsYW5jZXJbICdiYWxhbmNlcl8nICsgcmVzb3VyY2VfaWQgXSApICk7XHJcblx0fTtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqICBDcmVhdGUgYmFsYW5jZXIgaW5pdGlhbGl6aW5nXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge3N0cmluZ3xpbnR9IHJlc291cmNlX2lkXHJcblx0ICovXHJcblx0b2JqLmJhbGFuY2VyX19pbml0ID0gZnVuY3Rpb24gKCByZXNvdXJjZV9pZCwgZnVuY3Rpb25fbmFtZSAsIHBhcmFtcyA9e30pIHtcclxuXHJcblx0XHR2YXIgYmFsYW5jZV9vYmogPSB7fTtcclxuXHRcdGJhbGFuY2Vfb2JqWyAncmVzb3VyY2VfaWQnIF0gICA9IHJlc291cmNlX2lkO1xyXG5cdFx0YmFsYW5jZV9vYmpbICdwcmlvcml0eScgXSAgICAgID0gMTtcclxuXHRcdGJhbGFuY2Vfb2JqWyAnZnVuY3Rpb25fbmFtZScgXSA9IGZ1bmN0aW9uX25hbWU7XHJcblx0XHRiYWxhbmNlX29ialsgJ3BhcmFtcycgXSAgICAgICAgPSB3cGJjX2Nsb25lX29iaiggcGFyYW1zICk7XHJcblxyXG5cclxuXHRcdGlmICggb2JqLmJhbGFuY2VyX19pc19hbHJlYWR5X3J1biggcmVzb3VyY2VfaWQsIGZ1bmN0aW9uX25hbWUgKSApe1xyXG5cdFx0XHRyZXR1cm4gJ3J1bic7XHJcblx0XHR9XHJcblx0XHRpZiAoIG9iai5iYWxhbmNlcl9faXNfYWxyZWFkeV93YWl0KCByZXNvdXJjZV9pZCwgZnVuY3Rpb25fbmFtZSApICl7XHJcblx0XHRcdHJldHVybiAnd2FpdCc7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdGlmICggb2JqLmJhbGFuY2VyX19jYW5faV9ydW4oKSApe1xyXG5cdFx0XHRvYmouYmFsYW5jZXJfX2FkZF90b19fcnVuKCBiYWxhbmNlX29iaiApO1xyXG5cdFx0XHRyZXR1cm4gJ3J1bic7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRvYmouYmFsYW5jZXJfX2FkZF90b19fd2FpdCggYmFsYW5jZV9vYmogKTtcclxuXHRcdFx0cmV0dXJuICd3YWl0JztcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQgLyoqXHJcblx0ICAqIENhbiBJIFJ1biA/XHJcblx0ICAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAgKi9cclxuXHRvYmouYmFsYW5jZXJfX2Nhbl9pX3J1biA9IGZ1bmN0aW9uICgpe1xyXG5cdFx0cmV0dXJuICggcF9iYWxhbmNlclsgJ2luX3Byb2Nlc3MnIF0ubGVuZ3RoIDwgcF9iYWxhbmNlclsgJ21heF90aHJlYWRzJyBdICk7XHJcblx0fVxyXG5cclxuXHRcdCAvKipcclxuXHRcdCAgKiBBZGQgdG8gV0FJVFxyXG5cdFx0ICAqIEBwYXJhbSBiYWxhbmNlX29ialxyXG5cdFx0ICAqL1xyXG5cdFx0b2JqLmJhbGFuY2VyX19hZGRfdG9fX3dhaXQgPSBmdW5jdGlvbiAoIGJhbGFuY2Vfb2JqICkge1xyXG5cdFx0XHRwX2JhbGFuY2VyWyd3YWl0J10ucHVzaCggYmFsYW5jZV9vYmogKTtcclxuXHRcdH1cclxuXHJcblx0XHQgLyoqXHJcblx0XHQgICogUmVtb3ZlIGZyb20gV2FpdFxyXG5cdFx0ICAqXHJcblx0XHQgICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0XHQgICogQHBhcmFtIGZ1bmN0aW9uX25hbWVcclxuXHRcdCAgKiBAcmV0dXJucyB7Knxib29sZWFufVxyXG5cdFx0ICAqL1xyXG5cdFx0b2JqLmJhbGFuY2VyX19yZW1vdmVfZnJvbV9fd2FpdF9saXN0ID0gZnVuY3Rpb24gKCByZXNvdXJjZV9pZCwgZnVuY3Rpb25fbmFtZSApe1xyXG5cclxuXHRcdFx0dmFyIHJlbW92ZWRfZWwgPSBmYWxzZTtcclxuXHJcblx0XHRcdGlmICggcF9iYWxhbmNlclsgJ3dhaXQnIF0ubGVuZ3RoICl7XHRcdFx0XHRcdC8vRml4SW46IDkuOC4xMC4xXHJcblx0XHRcdFx0Zm9yICggdmFyIGkgaW4gcF9iYWxhbmNlclsgJ3dhaXQnIF0gKXtcclxuXHRcdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdFx0KHJlc291cmNlX2lkID09PSBwX2JhbGFuY2VyWyAnd2FpdCcgXVsgaSBdWyAncmVzb3VyY2VfaWQnIF0pXHJcblx0XHRcdFx0XHRcdCYmIChmdW5jdGlvbl9uYW1lID09PSBwX2JhbGFuY2VyWyAnd2FpdCcgXVsgaSBdWyAnZnVuY3Rpb25fbmFtZScgXSlcclxuXHRcdFx0XHRcdCl7XHJcblx0XHRcdFx0XHRcdHJlbW92ZWRfZWwgPSBwX2JhbGFuY2VyWyAnd2FpdCcgXS5zcGxpY2UoIGksIDEgKTtcclxuXHRcdFx0XHRcdFx0cmVtb3ZlZF9lbCA9IHJlbW92ZWRfZWwucG9wKCk7XHJcblx0XHRcdFx0XHRcdHBfYmFsYW5jZXJbICd3YWl0JyBdID0gcF9iYWxhbmNlclsgJ3dhaXQnIF0uZmlsdGVyKCBmdW5jdGlvbiAoIHYgKXtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdjtcclxuXHRcdFx0XHRcdFx0fSApO1x0XHRcdFx0XHQvLyBSZWluZGV4IGFycmF5XHJcblx0XHRcdFx0XHRcdHJldHVybiByZW1vdmVkX2VsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gcmVtb3ZlZF9lbDtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCogSXMgYWxyZWFkeSBXQUlUXHJcblx0XHQqXHJcblx0XHQqIEBwYXJhbSByZXNvdXJjZV9pZFxyXG5cdFx0KiBAcGFyYW0gZnVuY3Rpb25fbmFtZVxyXG5cdFx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHRcdCovXHJcblx0XHRvYmouYmFsYW5jZXJfX2lzX2FscmVhZHlfd2FpdCA9IGZ1bmN0aW9uICggcmVzb3VyY2VfaWQsIGZ1bmN0aW9uX25hbWUgKXtcclxuXHJcblx0XHRcdGlmICggcF9iYWxhbmNlclsgJ3dhaXQnIF0ubGVuZ3RoICl7XHRcdFx0XHQvL0ZpeEluOiA5LjguMTAuMVxyXG5cdFx0XHRcdGZvciAoIHZhciBpIGluIHBfYmFsYW5jZXJbICd3YWl0JyBdICl7XHJcblx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdChyZXNvdXJjZV9pZCA9PT0gcF9iYWxhbmNlclsgJ3dhaXQnIF1bIGkgXVsgJ3Jlc291cmNlX2lkJyBdKVxyXG5cdFx0XHRcdFx0XHQmJiAoZnVuY3Rpb25fbmFtZSA9PT0gcF9iYWxhbmNlclsgJ3dhaXQnIF1bIGkgXVsgJ2Z1bmN0aW9uX25hbWUnIF0pXHJcblx0XHRcdFx0XHQpe1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHJcblx0XHQgLyoqXHJcblx0XHQgICogQWRkIHRvIFJVTlxyXG5cdFx0ICAqIEBwYXJhbSBiYWxhbmNlX29ialxyXG5cdFx0ICAqL1xyXG5cdFx0b2JqLmJhbGFuY2VyX19hZGRfdG9fX3J1biA9IGZ1bmN0aW9uICggYmFsYW5jZV9vYmogKSB7XHJcblx0XHRcdHBfYmFsYW5jZXJbJ2luX3Byb2Nlc3MnXS5wdXNoKCBiYWxhbmNlX29iaiApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0KiBSZW1vdmUgZnJvbSBSVU4gbGlzdFxyXG5cdFx0KlxyXG5cdFx0KiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHRcdCogQHBhcmFtIGZ1bmN0aW9uX25hbWVcclxuXHRcdCogQHJldHVybnMgeyp8Ym9vbGVhbn1cclxuXHRcdCovXHJcblx0XHRvYmouYmFsYW5jZXJfX3JlbW92ZV9mcm9tX19ydW5fbGlzdCA9IGZ1bmN0aW9uICggcmVzb3VyY2VfaWQsIGZ1bmN0aW9uX25hbWUgKXtcclxuXHJcblx0XHRcdCB2YXIgcmVtb3ZlZF9lbCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0IGlmICggcF9iYWxhbmNlclsgJ2luX3Byb2Nlc3MnIF0ubGVuZ3RoICl7XHRcdFx0XHQvL0ZpeEluOiA5LjguMTAuMVxyXG5cdFx0XHRcdCBmb3IgKCB2YXIgaSBpbiBwX2JhbGFuY2VyWyAnaW5fcHJvY2VzcycgXSApe1xyXG5cdFx0XHRcdFx0IGlmIChcclxuXHRcdFx0XHRcdFx0IChyZXNvdXJjZV9pZCA9PT0gcF9iYWxhbmNlclsgJ2luX3Byb2Nlc3MnIF1bIGkgXVsgJ3Jlc291cmNlX2lkJyBdKVxyXG5cdFx0XHRcdFx0XHQgJiYgKGZ1bmN0aW9uX25hbWUgPT09IHBfYmFsYW5jZXJbICdpbl9wcm9jZXNzJyBdWyBpIF1bICdmdW5jdGlvbl9uYW1lJyBdKVxyXG5cdFx0XHRcdFx0ICl7XHJcblx0XHRcdFx0XHRcdCByZW1vdmVkX2VsID0gcF9iYWxhbmNlclsgJ2luX3Byb2Nlc3MnIF0uc3BsaWNlKCBpLCAxICk7XHJcblx0XHRcdFx0XHRcdCByZW1vdmVkX2VsID0gcmVtb3ZlZF9lbC5wb3AoKTtcclxuXHRcdFx0XHRcdFx0IHBfYmFsYW5jZXJbICdpbl9wcm9jZXNzJyBdID0gcF9iYWxhbmNlclsgJ2luX3Byb2Nlc3MnIF0uZmlsdGVyKCBmdW5jdGlvbiAoIHYgKXtcclxuXHRcdFx0XHRcdFx0XHQgcmV0dXJuIHY7XHJcblx0XHRcdFx0XHRcdCB9ICk7XHRcdC8vIFJlaW5kZXggYXJyYXlcclxuXHRcdFx0XHRcdFx0IHJldHVybiByZW1vdmVkX2VsO1xyXG5cdFx0XHRcdFx0IH1cclxuXHRcdFx0XHQgfVxyXG5cdFx0XHQgfVxyXG5cdFx0XHQgcmV0dXJuIHJlbW92ZWRfZWw7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQqIElzIGFscmVhZHkgUlVOXHJcblx0XHQqXHJcblx0XHQqIEBwYXJhbSByZXNvdXJjZV9pZFxyXG5cdFx0KiBAcGFyYW0gZnVuY3Rpb25fbmFtZVxyXG5cdFx0KiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHRcdCovXHJcblx0XHRvYmouYmFsYW5jZXJfX2lzX2FscmVhZHlfcnVuID0gZnVuY3Rpb24gKCByZXNvdXJjZV9pZCwgZnVuY3Rpb25fbmFtZSApe1xyXG5cclxuXHRcdFx0aWYgKCBwX2JhbGFuY2VyWyAnaW5fcHJvY2VzcycgXS5sZW5ndGggKXtcdFx0XHRcdFx0Ly9GaXhJbjogOS44LjEwLjFcclxuXHRcdFx0XHRmb3IgKCB2YXIgaSBpbiBwX2JhbGFuY2VyWyAnaW5fcHJvY2VzcycgXSApe1xyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHQocmVzb3VyY2VfaWQgPT09IHBfYmFsYW5jZXJbICdpbl9wcm9jZXNzJyBdWyBpIF1bICdyZXNvdXJjZV9pZCcgXSlcclxuXHRcdFx0XHRcdFx0JiYgKGZ1bmN0aW9uX25hbWUgPT09IHBfYmFsYW5jZXJbICdpbl9wcm9jZXNzJyBdWyBpIF1bICdmdW5jdGlvbl9uYW1lJyBdKVxyXG5cdFx0XHRcdFx0KXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHJcblxyXG5cclxuXHRvYmouYmFsYW5jZXJfX3J1bl9uZXh0ID0gZnVuY3Rpb24gKCl7XHJcblxyXG5cdFx0Ly8gR2V0IDFzdCBmcm9tICBXYWl0IGxpc3RcclxuXHRcdHZhciByZW1vdmVkX2VsID0gZmFsc2U7XHJcblx0XHRpZiAoIHBfYmFsYW5jZXJbICd3YWl0JyBdLmxlbmd0aCApe1x0XHRcdFx0XHQvL0ZpeEluOiA5LjguMTAuMVxyXG5cdFx0XHRmb3IgKCB2YXIgaSBpbiBwX2JhbGFuY2VyWyAnd2FpdCcgXSApe1xyXG5cdFx0XHRcdHJlbW92ZWRfZWwgPSBvYmouYmFsYW5jZXJfX3JlbW92ZV9mcm9tX193YWl0X2xpc3QoIHBfYmFsYW5jZXJbICd3YWl0JyBdWyBpIF1bICdyZXNvdXJjZV9pZCcgXSwgcF9iYWxhbmNlclsgJ3dhaXQnIF1bIGkgXVsgJ2Z1bmN0aW9uX25hbWUnIF0gKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICggZmFsc2UgIT09IHJlbW92ZWRfZWwgKXtcclxuXHJcblx0XHRcdC8vIFJ1blxyXG5cdFx0XHRvYmouYmFsYW5jZXJfX3J1biggcmVtb3ZlZF9lbCApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0IC8qKlxyXG5cdCAgKiBSdW5cclxuXHQgICogQHBhcmFtIGJhbGFuY2Vfb2JqXHJcblx0ICAqL1xyXG5cdG9iai5iYWxhbmNlcl9fcnVuID0gZnVuY3Rpb24gKCBiYWxhbmNlX29iaiApe1xyXG5cclxuXHRcdHN3aXRjaCAoIGJhbGFuY2Vfb2JqWyAnZnVuY3Rpb25fbmFtZScgXSApe1xyXG5cclxuXHRcdFx0Y2FzZSAnd3BiY19jYWxlbmRhcl9fbG9hZF9kYXRhX19hangnOlxyXG5cclxuXHRcdFx0XHQvLyBBZGQgdG8gcnVuIGxpc3RcclxuXHRcdFx0XHRvYmouYmFsYW5jZXJfX2FkZF90b19fcnVuKCBiYWxhbmNlX29iaiApO1xyXG5cclxuXHRcdFx0XHR3cGJjX2NhbGVuZGFyX19sb2FkX2RhdGFfX2FqeCggYmFsYW5jZV9vYmpbICdwYXJhbXMnIF0gKVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJldHVybiBvYmo7XHJcblxyXG59KCBfd3BiYyB8fCB7fSwgalF1ZXJ5ICkpO1xyXG5cclxuXHJcbiBcdC8qKlxyXG4gXHQgKiAtLSBIZWxwIGZ1bmN0aW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICovXHJcblxyXG5cdGZ1bmN0aW9uIHdwYmNfYmFsYW5jZXJfX2lzX3dhaXQoIHBhcmFtcywgZnVuY3Rpb25fbmFtZSApe1xyXG4vL2NvbnNvbGUubG9nKCc6OndwYmNfYmFsYW5jZXJfX2lzX3dhaXQnLHBhcmFtcyAsIGZ1bmN0aW9uX25hbWUgKTtcclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAocGFyYW1zWyAncmVzb3VyY2VfaWQnIF0pICl7XHJcblxyXG5cdFx0XHR2YXIgYmFsYW5jZXJfc3RhdHVzID0gX3dwYmMuYmFsYW5jZXJfX2luaXQoIHBhcmFtc1sgJ3Jlc291cmNlX2lkJyBdLCBmdW5jdGlvbl9uYW1lLCBwYXJhbXMgKTtcclxuXHJcblx0XHRcdHJldHVybiAoICd3YWl0JyA9PT0gYmFsYW5jZXJfc3RhdHVzICk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cdGZ1bmN0aW9uIHdwYmNfYmFsYW5jZXJfX2NvbXBsZXRlZCggcmVzb3VyY2VfaWQgLCBmdW5jdGlvbl9uYW1lICl7XHJcbi8vY29uc29sZS5sb2coJzo6d3BiY19iYWxhbmNlcl9fY29tcGxldGVkJyxyZXNvdXJjZV9pZCAsIGZ1bmN0aW9uX25hbWUgKTtcclxuXHRcdF93cGJjLmJhbGFuY2VyX19yZW1vdmVfZnJvbV9fcnVuX2xpc3QoIHJlc291cmNlX2lkLCBmdW5jdGlvbl9uYW1lICk7XHJcblx0XHRfd3BiYy5iYWxhbmNlcl9fcnVuX25leHQoKTtcclxuXHR9IiwiLyoqXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKlx0aW5jbHVkZXMvX19qcy9jYWwvd3BiY19jYWwuanNcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9yZGVyIG9yIGNoaWxkIGJvb2tpbmcgcmVzb3VyY2VzIHNhdmVkIGhlcmU6ICBcdF93cGJjLmJvb2tpbmdfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdyZXNvdXJjZXNfaWRfYXJyX19pbl9kYXRlcycgKVx0XHRbMiwxMCwxMiwxMV1cclxuICovXHJcblxyXG4vKipcclxuICogSG93IHRvIGNoZWNrICBib29rZWQgdGltZXMgb24gIHNwZWNpZmljIGRhdGU6ID9cclxuICpcclxuXHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJyk7XHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJylbMl0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3NlY29uZHMsXHJcblx0XHRcdFx0XHRcdF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXRfZm9yX2RhdGUoMiwnMjAyMy0wOC0yMScpWzEwXS5ib29rZWRfdGltZV9zbG90cy5tZXJnZWRfc2Vjb25kcyxcclxuXHRcdFx0XHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJylbMTFdLmJvb2tlZF90aW1lX3Nsb3RzLm1lcmdlZF9zZWNvbmRzLFxyXG5cdFx0XHRcdFx0XHRfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKDIsJzIwMjMtMDgtMjEnKVsxMl0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3NlY29uZHNcclxuXHRcdFx0XHRcdCk7XHJcbiAqICBPUlxyXG5cdFx0XHRjb25zb2xlLmxvZyhcclxuXHRcdFx0XHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSgyLCcyMDIzLTA4LTIxJylbMl0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3JlYWRhYmxlLFxyXG5cdFx0XHRcdFx0XHRfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKDIsJzIwMjMtMDgtMjEnKVsxMF0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3JlYWRhYmxlLFxyXG5cdFx0XHRcdFx0XHRfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKDIsJzIwMjMtMDgtMjEnKVsxMV0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3JlYWRhYmxlLFxyXG5cdFx0XHRcdFx0XHRfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKDIsJzIwMjMtMDgtMjEnKVsxMl0uYm9va2VkX3RpbWVfc2xvdHMubWVyZ2VkX3JlYWRhYmxlXHJcblx0XHRcdFx0XHQpO1xyXG4gKlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBEYXlzIHNlbGVjdGlvbjpcclxuICogXHRcdFx0XHRcdHdwYmNfY2FsZW5kYXJfX3Vuc2VsZWN0X2FsbF9kYXRlcyggcmVzb3VyY2VfaWQgKTtcclxuICpcclxuICpcclxuICpcdHZhciBpbnN0PSB3cGJjX2NhbGVuZGFyX19nZXRfaW5zdCgzKTsgaW5zdC5kYXRlcz1bXTsgd3BiY19fY2FsZW5kYXJfX29uX3NlbGVjdF9kYXlzKCcyMi4wOS4yMDIzIC0gMjMuMDkuMjAyMycgLCB7J3Jlc291cmNlX2lkJzozfSAsIGluc3QpOyAgaW5zdC5zdGF5T3BlbiA9IGZhbHNlO2pRdWVyeS5kYXRlcGljay5fdXBkYXRlRGF0ZXBpY2soIGluc3QgKTtcclxuICogIGlmIGl0IGRvZXNuJ3Qgd29yayAgaW4gMTAwJSBzaXR1YXRpb25zLiBjaGVjayB3cGJjX3NlbGVjdF9kYXlzX2luX2NhbGVuZGFyKDMsIFsgWyAyMDIzLCBcIjA5XCIsIDI2IF0sIFsgMjAyMywgXCIwOFwiLCAyNSBdXSk7XHJcbiAqL1xyXG5cclxuXHJcbi8qKlxyXG4gKiBDIEEgTCBFIE4gRCBBIFIgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKi9cclxuXHJcblxyXG4vKipcclxuICogIFNob3cgV1BCQyBDYWxlbmRhclxyXG4gKlxyXG4gKiBAcGFyYW0gcmVzb3VyY2VfaWRcdFx0XHQtIHJlc291cmNlIElEXHJcbiAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19jYWxlbmRhcl9zaG93KCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHQvLyBJZiBubyBjYWxlbmRhciBIVE1MIHRhZywgIHRoZW4gIGV4aXRcclxuXHRpZiAoIDAgPT09IGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkubGVuZ3RoICl7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHQvLyBJZiB0aGUgY2FsZW5kYXIgd2l0aCB0aGUgc2FtZSBCb29raW5nIHJlc291cmNlIGlzIGFjdGl2YXRlZCBhbHJlYWR5LCB0aGVuIGV4aXQuXHJcblx0aWYgKCB0cnVlID09PSBqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCApLmhhc0NsYXNzKCAnaGFzRGF0ZXBpY2snICkgKXsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gRGF5cyBzZWxlY3Rpb25cclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdHZhciBsb2NhbF9faXNfcmFuZ2Vfc2VsZWN0ID0gZmFsc2U7XHJcblx0dmFyIGxvY2FsX19tdWx0aV9kYXlzX3NlbGVjdF9udW0gICA9IDM2NTtcdFx0XHRcdFx0Ly8gbXVsdGlwbGUgfCBmaXhlZFxyXG5cdGlmICggJ2R5bmFtaWMnID09PSBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2RheXNfc2VsZWN0X21vZGUnICkgKXtcclxuXHRcdGxvY2FsX19pc19yYW5nZV9zZWxlY3QgPSB0cnVlO1xyXG5cdFx0bG9jYWxfX211bHRpX2RheXNfc2VsZWN0X251bSA9IDA7XHJcblx0fVxyXG5cdGlmICggJ3NpbmdsZScgID09PSBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2RheXNfc2VsZWN0X21vZGUnICkgKXtcclxuXHRcdGxvY2FsX19tdWx0aV9kYXlzX3NlbGVjdF9udW0gPSAwO1xyXG5cdH1cclxuXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNaW4gLSBNYXggZGF5cyB0byBzY3JvbGwvc2hvd1xyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0dmFyIGxvY2FsX19taW5fZGF0ZSA9IDA7XHJcbiBcdGxvY2FsX19taW5fZGF0ZSA9IG5ldyBEYXRlKCB3cGJjX3RvZGF5WyAwIF0sIChwYXJzZUludCggd3BiY190b2RheVsgMSBdICkgLSAxKSwgd3BiY190b2RheVsgMiBdLCAwLCAwLCAwICk7XHRcdFx0Ly9GaXhJbjogOS45LjAuMTdcclxuLy9jb25zb2xlLmxvZyggbG9jYWxfX21pbl9kYXRlICk7XHJcblx0dmFyIGxvY2FsX19tYXhfZGF0ZSA9IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnYm9va2luZ19tYXhfbW9udGhlc19pbl9jYWxlbmRhcicgKTtcclxuXHQvL2xvY2FsX19tYXhfZGF0ZSA9IG5ldyBEYXRlKDIwMjQsIDUsIDI4KTsgIEl0IGlzIGhlcmUgaXNzdWUgb2Ygbm90IHNlbGVjdGFibGUgZGF0ZXMsIGJ1dCBzb21lIGRhdGVzIHNob3dpbmcgaW4gY2FsZW5kYXIgYXMgYXZhaWxhYmxlLCBidXQgd2UgY2FuIG5vdCBzZWxlY3QgaXQuXHJcblxyXG5cdC8vIERlZmluZSBsYXN0IGRheSBpbiBjYWxlbmRhciAoYXMgYSBsYXN0IGRheSBvZiBtb250aCAoYW5kIG5vdCBkYXRlLCB3aGljaCBpcyByZWxhdGVkIHRvIGFjdHVhbCAnVG9kYXknIGRhdGUpLlxyXG5cdC8vIEUuZy4gaWYgdG9kYXkgaXMgMjAyMy0wOS0yNSwgYW5kIHdlIHNldCAnTnVtYmVyIG9mIG1vbnRocyB0byBzY3JvbGwnIGFzIDUgbW9udGhzLCB0aGVuIGxhc3QgZGF5IHdpbGwgYmUgMjAyNC0wMi0yOSBhbmQgbm90IHRoZSAyMDI0LTAyLTI1LlxyXG5cdHZhciBjYWxfbGFzdF9kYXlfaW5fbW9udGggPSBqUXVlcnkuZGF0ZXBpY2suX2RldGVybWluZURhdGUoIG51bGwsIGxvY2FsX19tYXhfZGF0ZSwgbmV3IERhdGUoKSApO1xyXG5cdGNhbF9sYXN0X2RheV9pbl9tb250aCA9IG5ldyBEYXRlKCBjYWxfbGFzdF9kYXlfaW5fbW9udGguZ2V0RnVsbFllYXIoKSwgY2FsX2xhc3RfZGF5X2luX21vbnRoLmdldE1vbnRoKCkgKyAxLCAwICk7XHJcblx0bG9jYWxfX21heF9kYXRlID0gY2FsX2xhc3RfZGF5X2luX21vbnRoO1xyXG5cclxuXHRpZiAoICAgKCBsb2NhdGlvbi5ocmVmLmluZGV4T2YoJ3BhZ2U9d3BiYy1uZXcnKSAhPSAtMSApXHJcblx0XHQmJiAoIGxvY2F0aW9uLmhyZWYuaW5kZXhPZignYm9va2luZ19oYXNoJykgIT0gLTEgKSAgICAgICAgICAgICAgICAgIC8vIENvbW1lbnQgdGhpcyBsaW5lIGZvciBhYmlsaXR5IHRvIGFkZCAgYm9va2luZyBpbiBwYXN0IGRheXMgYXQgIEJvb2tpbmcgPiBBZGQgYm9va2luZyBwYWdlLlxyXG5cdFx0KXtcclxuXHRcdGxvY2FsX19taW5fZGF0ZSA9IG51bGw7XHJcblx0XHRsb2NhbF9fbWF4X2RhdGUgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0dmFyIGxvY2FsX19zdGFydF93ZWVrZGF5ICAgID0gX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdib29raW5nX3N0YXJ0X2RheV93ZWVlaycgKTtcclxuXHR2YXIgbG9jYWxfX251bWJlcl9vZl9tb250aHMgPSBwYXJzZUludCggX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdjYWxlbmRhcl9udW1iZXJfb2ZfbW9udGhzJyApICk7XHJcblxyXG5cdGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkudGV4dCggJycgKTtcdFx0XHRcdFx0Ly8gUmVtb3ZlIGFsbCBIVE1MIGluIGNhbGVuZGFyIHRhZ1xyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gU2hvdyBjYWxlbmRhclxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0alF1ZXJ5KCcjY2FsZW5kYXJfYm9va2luZycrIHJlc291cmNlX2lkKS5kYXRlcGljayhcclxuXHRcdFx0e1xyXG5cdFx0XHRcdGJlZm9yZVNob3dEYXk6IGZ1bmN0aW9uICgganNfZGF0ZSApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gd3BiY19fY2FsZW5kYXJfX2FwcGx5X2Nzc190b19kYXlzKCBqc19kYXRlLCB7J3Jlc291cmNlX2lkJzogcmVzb3VyY2VfaWR9LCB0aGlzICk7XHJcblx0XHRcdFx0XHRcdFx0ICB9LFxyXG5cdFx0XHRcdG9uU2VsZWN0OiBmdW5jdGlvbiAoIHN0cmluZ19kYXRlcywganNfZGF0ZXNfYXJyICl7ICAvKipcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqXHRzdHJpbmdfZGF0ZXMgICA9ICAgJzIzLjA4LjIwMjMgLSAyNi4wOC4yMDIzJyAgICB8ICAgICcyMy4wOC4yMDIzIC0gMjMuMDguMjAyMycgICAgfCAgICAnMTkuMDkuMjAyMywgMjQuMDguMjAyMywgMzAuMDkuMjAyMydcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqICBqc19kYXRlc19hcnIgICA9ICAgcmFuZ2U6IFsgRGF0ZSAoQXVnIDIzIDIwMjMpLCBEYXRlIChBdWcgMjUgMjAyMyldICAgICB8ICAgICBtdWx0aXBsZTogWyBEYXRlKE9jdCAyNCAyMDIzKSwgRGF0ZShPY3QgMjAgMjAyMyksIERhdGUoT2N0IDE2IDIwMjMpIF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gd3BiY19fY2FsZW5kYXJfX29uX3NlbGVjdF9kYXlzKCBzdHJpbmdfZGF0ZXMsIHsncmVzb3VyY2VfaWQnOiByZXNvdXJjZV9pZH0sIHRoaXMgKTtcclxuXHRcdFx0XHRcdFx0XHQgIH0sXHJcblx0XHRcdFx0b25Ib3ZlcjogZnVuY3Rpb24gKCBzdHJpbmdfZGF0ZSwganNfZGF0ZSApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gd3BiY19fY2FsZW5kYXJfX29uX2hvdmVyX2RheXMoIHN0cmluZ19kYXRlLCBqc19kYXRlLCB7J3Jlc291cmNlX2lkJzogcmVzb3VyY2VfaWR9LCB0aGlzICk7XHJcblx0XHRcdFx0XHRcdFx0ICB9LFxyXG5cdFx0XHRcdG9uQ2hhbmdlTW9udGhZZWFyOiBmdW5jdGlvbiAoIHllYXIsIHJlYWxfbW9udGgsIGpzX2RhdGVfXzFzdF9kYXlfaW5fbW9udGggKXsgfSxcclxuXHRcdFx0XHRzaG93T24gICAgICAgIDogJ2JvdGgnLFxyXG5cdFx0XHRcdG51bWJlck9mTW9udGhzOiBsb2NhbF9fbnVtYmVyX29mX21vbnRocyxcclxuXHRcdFx0XHRzdGVwTW9udGhzICAgIDogMSxcclxuXHRcdFx0XHRwcmV2VGV4dCAgICAgIDogJyZsYXF1bzsnLFxyXG5cdFx0XHRcdG5leHRUZXh0ICAgICAgOiAnJnJhcXVvOycsXHJcblx0XHRcdFx0ZGF0ZUZvcm1hdCAgICA6ICdkZC5tbS55eScsXHJcblx0XHRcdFx0Y2hhbmdlTW9udGggICA6IGZhbHNlLFxyXG5cdFx0XHRcdGNoYW5nZVllYXIgICAgOiBmYWxzZSxcclxuXHRcdFx0XHRtaW5EYXRlICAgICAgIDogbG9jYWxfX21pbl9kYXRlLFxyXG5cdFx0XHRcdG1heERhdGUgICAgICAgOiBsb2NhbF9fbWF4X2RhdGUsIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyAnMVknLFxyXG5cdFx0XHRcdC8vIG1pbkRhdGU6IG5ldyBEYXRlKDIwMjAsIDIsIDEpLCBtYXhEYXRlOiBuZXcgRGF0ZSgyMDIwLCA5LCAzMSksICAgICAgICAgICAgIFx0Ly8gQWJpbGl0eSB0byBzZXQgYW55ICBzdGFydCBhbmQgZW5kIGRhdGUgaW4gY2FsZW5kYXJcclxuXHRcdFx0XHRzaG93U3RhdHVzICAgICAgOiBmYWxzZSxcclxuXHRcdFx0XHRtdWx0aVNlcGFyYXRvciAgOiAnLCAnLFxyXG5cdFx0XHRcdGNsb3NlQXRUb3AgICAgICA6IGZhbHNlLFxyXG5cdFx0XHRcdGZpcnN0RGF5ICAgICAgICA6IGxvY2FsX19zdGFydF93ZWVrZGF5LFxyXG5cdFx0XHRcdGdvdG9DdXJyZW50ICAgICA6IGZhbHNlLFxyXG5cdFx0XHRcdGhpZGVJZk5vUHJldk5leHQ6IHRydWUsXHJcblx0XHRcdFx0bXVsdGlTZWxlY3QgICAgIDogbG9jYWxfX211bHRpX2RheXNfc2VsZWN0X251bSxcclxuXHRcdFx0XHRyYW5nZVNlbGVjdCAgICAgOiBsb2NhbF9faXNfcmFuZ2Vfc2VsZWN0LFxyXG5cdFx0XHRcdC8vIHNob3dXZWVrczogdHJ1ZSxcclxuXHRcdFx0XHR1c2VUaGVtZVJvbGxlcjogZmFsc2VcclxuXHRcdFx0fVxyXG5cdCk7XHJcblxyXG5cclxuXHRcclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIENsZWFyIHRvZGF5IGRhdGUgaGlnaGxpZ2h0aW5nXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKXsgIHdwYmNfY2FsZW5kYXJzX19jbGVhcl9kYXlzX2hpZ2hsaWdodGluZyggcmVzb3VyY2VfaWQgKTsgIH0sIDUwMCApOyAgICAgICAgICAgICAgICAgICAgXHQvL0ZpeEluOiA3LjEuMi44XHJcblx0XHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBTY3JvbGwgY2FsZW5kYXIgdG8gIHNwZWNpZmljIG1vbnRoXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHR2YXIgc3RhcnRfYmtfbW9udGggPSBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2NhbGVuZGFyX3Njcm9sbF90bycgKTtcclxuXHRpZiAoIGZhbHNlICE9PSBzdGFydF9ia19tb250aCApe1xyXG5cdFx0d3BiY19jYWxlbmRhcl9fc2Nyb2xsX3RvKCByZXNvdXJjZV9pZCwgc3RhcnRfYmtfbW9udGhbIDAgXSwgc3RhcnRfYmtfbW9udGhbIDEgXSApO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQXBwbHkgQ1NTIHRvIGNhbGVuZGFyIGRhdGUgY2VsbHNcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBkYXRlXHRcdFx0XHRcdFx0XHRcdFx0XHQtICBKYXZhU2NyaXB0IERhdGUgT2JqOiAgXHRcdE1vbiBEZWMgMTEgMjAyMyAwMDowMDowMCBHTVQrMDIwMCAoRWFzdGVybiBFdXJvcGVhbiBTdGFuZGFyZCBUaW1lKVxyXG5cdCAqIEBwYXJhbSBjYWxlbmRhcl9wYXJhbXNfYXJyXHRcdFx0XHRcdFx0LSAgQ2FsZW5kYXIgU2V0dGluZ3MgT2JqZWN0OiAgXHR7XHJcblx0ICpcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgXHRcdFx0XHRcdFx0XCJyZXNvdXJjZV9pZFwiOiA0XHJcblx0ICpcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0ICogQHBhcmFtIGRhdGVwaWNrX3RoaXNcdFx0XHRcdFx0XHRcdFx0LSB0aGlzIG9mIGRhdGVwaWNrIE9ialxyXG5cdCAqIEByZXR1cm5zIHsoKnxzdHJpbmcpW118KGJvb2xlYW58c3RyaW5nKVtdfVx0XHQtIFsge3RydWUgLWF2YWlsYWJsZSB8IGZhbHNlIC0gdW5hdmFpbGFibGV9LCAnQ1NTIGNsYXNzZXMgZm9yIGNhbGVuZGFyIGRheSBjZWxsJyBdXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19fY2FsZW5kYXJfX2FwcGx5X2Nzc190b19kYXlzKCBkYXRlLCBjYWxlbmRhcl9wYXJhbXNfYXJyLCBkYXRlcGlja190aGlzICl7XHJcblxyXG5cdFx0dmFyIHRvZGF5X2RhdGUgPSBuZXcgRGF0ZSggd3BiY190b2RheVsgMCBdLCAocGFyc2VJbnQoIHdwYmNfdG9kYXlbIDEgXSApIC0gMSksIHdwYmNfdG9kYXlbIDIgXSwgMCwgMCwgMCApO1x0XHRcdFx0XHRcdFx0XHQvLyBUb2RheSBKU19EYXRlX09iai5cclxuXHRcdHZhciBjbGFzc19kYXkgICAgID0gd3BiY19fZ2V0X190ZF9jbGFzc19kYXRlKCBkYXRlICk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gJzEtOS0yMDIzJ1xyXG5cdFx0dmFyIHNxbF9jbGFzc19kYXkgPSB3cGJjX19nZXRfX3NxbF9jbGFzc19kYXRlKCBkYXRlICk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gJzIwMjMtMDEtMDknXHJcblx0XHR2YXIgcmVzb3VyY2VfaWQgPSAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YoY2FsZW5kYXJfcGFyYW1zX2FyclsgJ3Jlc291cmNlX2lkJyBdKSApID8gY2FsZW5kYXJfcGFyYW1zX2FyclsgJ3Jlc291cmNlX2lkJyBdIDogJzEnOyBcdFx0Ly8gJzEnXHJcblxyXG5cdFx0Ly8gR2V0IERhdGEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdHZhciBkYXRlX2Jvb2tpbmdzX29iaiA9IF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXRfZm9yX2RhdGUoIHJlc291cmNlX2lkLCBzcWxfY2xhc3NfZGF5ICk7XHJcblxyXG5cclxuXHRcdC8vIEFycmF5IHdpdGggQ1NTIGNsYXNzZXMgZm9yIGRhdGUgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR2YXIgY3NzX2NsYXNzZXNfX2Zvcl9kYXRlID0gW107XHJcblx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ3NxbF9kYXRlXycgICAgICsgc3FsX2NsYXNzX2RheSApO1x0XHRcdFx0Ly8gICdzcWxfZGF0ZV8yMDIzLTA3LTIxJ1xyXG5cdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdjYWw0ZGF0ZS0nICAgICArIGNsYXNzX2RheSApO1x0XHRcdFx0XHQvLyAgJ2NhbDRkYXRlLTctMjEtMjAyMydcclxuXHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnd3BiY193ZWVrZGF5XycgKyBkYXRlLmdldERheSgpICk7XHRcdFx0XHQvLyAgJ3dwYmNfd2Vla2RheV80J1xyXG5cclxuXHRcdHZhciBpc19kYXlfc2VsZWN0YWJsZSA9IGZhbHNlO1xyXG5cclxuXHRcdC8vIElmIHNvbWV0aGluZyBub3QgZGVmaW5lZCwgIHRoZW4gIHRoaXMgZGF0ZSBjbG9zZWQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRpZiAoIGZhbHNlID09PSBkYXRlX2Jvb2tpbmdzX29iaiApe1xyXG5cclxuXHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdkYXRlX3VzZXJfdW5hdmFpbGFibGUnICk7XHJcblxyXG5cdFx0XHRyZXR1cm4gWyBpc19kYXlfc2VsZWN0YWJsZSwgY3NzX2NsYXNzZXNfX2Zvcl9kYXRlLmpvaW4oJyAnKSAgXTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vICAgZGF0ZV9ib29raW5nc19vYmogIC0gRGVmaW5lZC4gICAgICAgICAgICBEYXRlcyBjYW4gYmUgc2VsZWN0YWJsZS5cclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEFkZCBzZWFzb24gbmFtZXMgdG8gdGhlIGRheSBDU1MgY2xhc3NlcyAtLSBpdCBpcyByZXF1aXJlZCBmb3IgY29ycmVjdCAgd29yayAgb2YgY29uZGl0aW9uYWwgZmllbGRzIC0tLS0tLS0tLS0tLS0tXHJcblx0XHR2YXIgc2Vhc29uX25hbWVzX2FyciA9IF93cGJjLnNlYXNvbnNfX2dldF9mb3JfZGF0ZSggcmVzb3VyY2VfaWQsIHNxbF9jbGFzc19kYXkgKTtcclxuXHRcdGZvciAoIHZhciBzZWFzb25fa2V5IGluIHNlYXNvbl9uYW1lc19hcnIgKXtcclxuXHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goIHNlYXNvbl9uYW1lc19hcnJbIHNlYXNvbl9rZXkgXSApO1x0XHRcdFx0Ly8gICd3cGRldmJrX3NlYXNvbl9zZXB0ZW1iZXJfMjAyMydcclxuXHRcdH1cclxuXHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cclxuXHRcdC8vIENvc3QgUmF0ZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ3JhdGVfJyArIGRhdGVfYm9va2luZ3Nfb2JqWyByZXNvdXJjZV9pZCBdWyAnZGF0ZV9jb3N0X3JhdGUnIF0udG9TdHJpbmcoKS5yZXBsYWNlKCAvW1xcLlxcc10vZywgJ18nICkgKTtcdFx0XHRcdFx0XHQvLyAgJ3JhdGVfOTlfMDAnIC0+IDk5LjAwXHJcblxyXG5cclxuXHRcdGlmICggcGFyc2VJbnQoIGRhdGVfYm9va2luZ3Nfb2JqWyAnZGF5X2F2YWlsYWJpbGl0eScgXSApID4gMCApe1xyXG5cdFx0XHRpc19kYXlfc2VsZWN0YWJsZSA9IHRydWU7XHJcblx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZGF0ZV9hdmFpbGFibGUnICk7XHJcblx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAncmVzZXJ2ZWRfZGF5c19jb3VudCcgKyBwYXJzZUludCggZGF0ZV9ib29raW5nc19vYmpbICdtYXhfY2FwYWNpdHknIF0gLSBkYXRlX2Jvb2tpbmdzX29ialsgJ2RheV9hdmFpbGFiaWxpdHknIF0gKSApO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aXNfZGF5X3NlbGVjdGFibGUgPSBmYWxzZTtcclxuXHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdkYXRlX3VzZXJfdW5hdmFpbGFibGUnICk7XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdHN3aXRjaCAoIGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeSddWydzdGF0dXNfZm9yX2RheScgXSApe1xyXG5cclxuXHRcdFx0Y2FzZSAnYXZhaWxhYmxlJzpcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3RpbWVfc2xvdHNfYm9va2luZyc6XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICd0aW1lc3BhcnRseScsICd0aW1lc19jbG9jaycgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2Z1bGxfZGF5X2Jvb2tpbmcnOlxyXG5cdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZnVsbF9kYXlfYm9va2luZycgKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ3NlYXNvbl9maWx0ZXInOlxyXG5cdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZGF0ZV91c2VyX3VuYXZhaWxhYmxlJywgJ3NlYXNvbl91bmF2YWlsYWJsZScgKTtcclxuXHRcdFx0XHRkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSA9ICcnO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXNldCBib29raW5nIHN0YXR1cyBjb2xvciBmb3IgcG9zc2libGUgb2xkIGJvb2tpbmdzIG9uIHRoaXMgZGF0ZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAncmVzb3VyY2VfYXZhaWxhYmlsaXR5JzpcclxuXHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2RhdGVfdXNlcl91bmF2YWlsYWJsZScsICdyZXNvdXJjZV91bmF2YWlsYWJsZScgKTtcclxuXHRcdFx0XHRkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSA9ICcnO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXNldCBib29raW5nIHN0YXR1cyBjb2xvciBmb3IgcG9zc2libGUgb2xkIGJvb2tpbmdzIG9uIHRoaXMgZGF0ZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnd2Vla2RheV91bmF2YWlsYWJsZSc6XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdkYXRlX3VzZXJfdW5hdmFpbGFibGUnLCAnd2Vla2RheV91bmF2YWlsYWJsZScgKTtcclxuXHRcdFx0XHRkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSA9ICcnO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXNldCBib29raW5nIHN0YXR1cyBjb2xvciBmb3IgcG9zc2libGUgb2xkIGJvb2tpbmdzIG9uIHRoaXMgZGF0ZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnZnJvbV90b2RheV91bmF2YWlsYWJsZSc6XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdkYXRlX3VzZXJfdW5hdmFpbGFibGUnLCAnZnJvbV90b2RheV91bmF2YWlsYWJsZScgKTtcclxuXHRcdFx0XHRkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSA9ICcnO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBSZXNldCBib29raW5nIHN0YXR1cyBjb2xvciBmb3IgcG9zc2libGUgb2xkIGJvb2tpbmdzIG9uIHRoaXMgZGF0ZVxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAnbGltaXRfYXZhaWxhYmxlX2Zyb21fdG9kYXknOlxyXG5cdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZGF0ZV91c2VyX3VuYXZhaWxhYmxlJywgJ2xpbWl0X2F2YWlsYWJsZV9mcm9tX3RvZGF5JyApO1xyXG5cdFx0XHRcdGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeSddWydzdGF0dXNfZm9yX2Jvb2tpbmdzJyBdID0gJyc7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFJlc2V0IGJvb2tpbmcgc3RhdHVzIGNvbG9yIGZvciBwb3NzaWJsZSBvbGQgYm9va2luZ3Mgb24gdGhpcyBkYXRlXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdjaGFuZ2Vfb3Zlcic6XHJcblx0XHRcdFx0LypcclxuXHRcdFx0XHQgKlxyXG5cdFx0XHRcdC8vICBjaGVja19vdXRfdGltZV9kYXRlMmFwcHJvdmUgXHQgXHRjaGVja19pbl90aW1lX2RhdGUyYXBwcm92ZVxyXG5cdFx0XHRcdC8vICBjaGVja19vdXRfdGltZV9kYXRlMmFwcHJvdmUgXHQgXHRjaGVja19pbl90aW1lX2RhdGVfYXBwcm92ZWRcclxuXHRcdFx0XHQvLyAgY2hlY2tfaW5fdGltZV9kYXRlMmFwcHJvdmUgXHRcdCBcdGNoZWNrX291dF90aW1lX2RhdGVfYXBwcm92ZWRcclxuXHRcdFx0XHQvLyAgY2hlY2tfb3V0X3RpbWVfZGF0ZV9hcHByb3ZlZCBcdCBcdGNoZWNrX2luX3RpbWVfZGF0ZV9hcHByb3ZlZFxyXG5cdFx0XHRcdCAqL1xyXG5cclxuXHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ3RpbWVzcGFydGx5JywgJ2NoZWNrX2luX3RpbWUnLCAnY2hlY2tfb3V0X3RpbWUnICk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlICdjaGVja19pbic6XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICd0aW1lc3BhcnRseScsICdjaGVja19pbl90aW1lJyApO1xyXG5cclxuXHRcdFx0XHQvL0ZpeEluOiA5LjkuMC4zM1xyXG5cdFx0XHRcdGlmICggZGF0ZV9ib29raW5nc19vYmpbICdzdW1tYXJ5JyBdWyAnc3RhdHVzX2Zvcl9ib29raW5ncycgXS5pbmRleE9mKCAncGVuZGluZycgKSA+IC0xICl7XHJcblx0XHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2NoZWNrX2luX3RpbWVfZGF0ZTJhcHByb3ZlJyApO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeScgXVsgJ3N0YXR1c19mb3JfYm9va2luZ3MnIF0uaW5kZXhPZiggJ2FwcHJvdmVkJyApID4gLTEgKXtcclxuXHRcdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnY2hlY2tfaW5fdGltZV9kYXRlX2FwcHJvdmVkJyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgJ2NoZWNrX291dCc6XHJcblx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICd0aW1lc3BhcnRseScsICdjaGVja19vdXRfdGltZScgKTtcclxuXHJcblx0XHRcdFx0Ly9GaXhJbjogOS45LjAuMzNcclxuXHRcdFx0XHRpZiAoIGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeScgXVsgJ3N0YXR1c19mb3JfYm9va2luZ3MnIF0uaW5kZXhPZiggJ3BlbmRpbmcnICkgPiAtMSApe1xyXG5cdFx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdjaGVja19vdXRfdGltZV9kYXRlMmFwcHJvdmUnICk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICggZGF0ZV9ib29raW5nc19vYmpbICdzdW1tYXJ5JyBdWyAnc3RhdHVzX2Zvcl9ib29raW5ncycgXS5pbmRleE9mKCAnYXBwcm92ZWQnICkgPiAtMSApe1xyXG5cdFx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdjaGVja19vdXRfdGltZV9kYXRlX2FwcHJvdmVkJyApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0Ly8gbWl4ZWQgc3RhdHVzZXM6ICdjaGFuZ2Vfb3ZlciBjaGVja19vdXQnIC4uLi4gdmFyaWF0aW9ucy4uLi4gY2hlY2sgbW9yZSBpbiBcdFx0ZnVuY3Rpb24gd3BiY19nZXRfYXZhaWxhYmlsaXR5X3Blcl9kYXlzX2FycigpXHJcblx0XHRcdFx0ZGF0ZV9ib29raW5nc19vYmpbICdzdW1tYXJ5J11bJ3N0YXR1c19mb3JfZGF5JyBdID0gJ2F2YWlsYWJsZSc7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0XHRpZiAoICdhdmFpbGFibGUnICE9IGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeSddWydzdGF0dXNfZm9yX2RheScgXSApe1xyXG5cclxuXHRcdFx0dmFyIGlzX3NldF9wZW5kaW5nX2RheXNfc2VsZWN0YWJsZSA9IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAncGVuZGluZ19kYXlzX3NlbGVjdGFibGUnICk7XHQvLyBzZXQgcGVuZGluZyBkYXlzIHNlbGVjdGFibGUgICAgICAgICAgLy9GaXhJbjogOC42LjEuMThcclxuXHJcblx0XHRcdHN3aXRjaCAoIGRhdGVfYm9va2luZ3Nfb2JqWyAnc3VtbWFyeSddWydzdGF0dXNfZm9yX2Jvb2tpbmdzJyBdICl7XHJcblxyXG5cdFx0XHRcdGNhc2UgJyc6XHJcblx0XHRcdFx0XHQvLyBVc3VhbGx5ICBpdCdzIG1lYW5zIHRoYXQgZGF5ICBpcyBhdmFpbGFibGUgb3IgdW5hdmFpbGFibGUgd2l0aG91dCB0aGUgYm9va2luZ3NcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdwZW5kaW5nJzpcclxuXHRcdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnZGF0ZTJhcHByb3ZlJyApO1xyXG5cdFx0XHRcdFx0aXNfZGF5X3NlbGVjdGFibGUgPSAoaXNfZGF5X3NlbGVjdGFibGUpID8gdHJ1ZSA6IGlzX3NldF9wZW5kaW5nX2RheXNfc2VsZWN0YWJsZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdhcHByb3ZlZCc6XHJcblx0XHRcdFx0XHRjc3NfY2xhc3Nlc19fZm9yX2RhdGUucHVzaCggJ2RhdGVfYXBwcm92ZWQnICk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Ly8gU2l0dWF0aW9ucyBmb3IgXCJjaGFuZ2Utb3ZlclwiIGRheXM6IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0XHRjYXNlICdwZW5kaW5nX3BlbmRpbmcnOlxyXG5cdFx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdjaGVja19vdXRfdGltZV9kYXRlMmFwcHJvdmUnLCAnY2hlY2tfaW5fdGltZV9kYXRlMmFwcHJvdmUnICk7XHJcblx0XHRcdFx0XHRpc19kYXlfc2VsZWN0YWJsZSA9IChpc19kYXlfc2VsZWN0YWJsZSkgPyB0cnVlIDogaXNfc2V0X3BlbmRpbmdfZGF5c19zZWxlY3RhYmxlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRcdGNhc2UgJ3BlbmRpbmdfYXBwcm92ZWQnOlxyXG5cdFx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdjaGVja19vdXRfdGltZV9kYXRlMmFwcHJvdmUnLCAnY2hlY2tfaW5fdGltZV9kYXRlX2FwcHJvdmVkJyApO1xyXG5cdFx0XHRcdFx0aXNfZGF5X3NlbGVjdGFibGUgPSAoaXNfZGF5X3NlbGVjdGFibGUpID8gdHJ1ZSA6IGlzX3NldF9wZW5kaW5nX2RheXNfc2VsZWN0YWJsZTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRjYXNlICdhcHByb3ZlZF9wZW5kaW5nJzpcclxuXHRcdFx0XHRcdGNzc19jbGFzc2VzX19mb3JfZGF0ZS5wdXNoKCAnY2hlY2tfb3V0X3RpbWVfZGF0ZV9hcHByb3ZlZCcsICdjaGVja19pbl90aW1lX2RhdGUyYXBwcm92ZScgKTtcclxuXHRcdFx0XHRcdGlzX2RheV9zZWxlY3RhYmxlID0gKGlzX2RheV9zZWxlY3RhYmxlKSA/IHRydWUgOiBpc19zZXRfcGVuZGluZ19kYXlzX3NlbGVjdGFibGU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdFx0Y2FzZSAnYXBwcm92ZWRfYXBwcm92ZWQnOlxyXG5cdFx0XHRcdFx0Y3NzX2NsYXNzZXNfX2Zvcl9kYXRlLnB1c2goICdjaGVja19vdXRfdGltZV9kYXRlX2FwcHJvdmVkJywgJ2NoZWNrX2luX3RpbWVfZGF0ZV9hcHByb3ZlZCcgKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBbIGlzX2RheV9zZWxlY3RhYmxlLCBjc3NfY2xhc3Nlc19fZm9yX2RhdGUuam9pbiggJyAnICkgXTtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBNb3VzZW92ZXIgY2FsZW5kYXIgZGF0ZSBjZWxsc1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHN0cmluZ19kYXRlXHJcblx0ICogQHBhcmFtIGRhdGVcdFx0XHRcdFx0XHRcdFx0XHRcdC0gIEphdmFTY3JpcHQgRGF0ZSBPYmo6ICBcdFx0TW9uIERlYyAxMSAyMDIzIDAwOjAwOjAwIEdNVCswMjAwIChFYXN0ZXJuIEV1cm9wZWFuIFN0YW5kYXJkIFRpbWUpXHJcblx0ICogQHBhcmFtIGNhbGVuZGFyX3BhcmFtc19hcnJcdFx0XHRcdFx0XHQtICBDYWxlbmRhciBTZXR0aW5ncyBPYmplY3Q6ICBcdHtcclxuXHQgKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBcdFx0XHRcdFx0XHRcInJlc291cmNlX2lkXCI6IDRcclxuXHQgKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHQgKiBAcGFyYW0gZGF0ZXBpY2tfdGhpc1x0XHRcdFx0XHRcdFx0XHQtIHRoaXMgb2YgZGF0ZXBpY2sgT2JqXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19fY2FsZW5kYXJfX29uX2hvdmVyX2RheXMoIHN0cmluZ19kYXRlLCBkYXRlLCBjYWxlbmRhcl9wYXJhbXNfYXJyLCBkYXRlcGlja190aGlzICkge1xyXG5cclxuXHRcdGlmICggbnVsbCA9PT0gZGF0ZSApeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0XHR2YXIgY2xhc3NfZGF5ICAgICA9IHdwYmNfX2dldF9fdGRfY2xhc3NfZGF0ZSggZGF0ZSApO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vICcxLTktMjAyMydcclxuXHRcdHZhciBzcWxfY2xhc3NfZGF5ID0gd3BiY19fZ2V0X19zcWxfY2xhc3NfZGF0ZSggZGF0ZSApO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vICcyMDIzLTAxLTA5J1xyXG5cdFx0dmFyIHJlc291cmNlX2lkID0gKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mKGNhbGVuZGFyX3BhcmFtc19hcnJbICdyZXNvdXJjZV9pZCcgXSkgKSA/IGNhbGVuZGFyX3BhcmFtc19hcnJbICdyZXNvdXJjZV9pZCcgXSA6ICcxJztcdFx0Ly8gJzEnXHJcblxyXG5cdFx0Ly8gR2V0IERhdGEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdHZhciBkYXRlX2Jvb2tpbmdfb2JqID0gX3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSggcmVzb3VyY2VfaWQsIHNxbF9jbGFzc19kYXkgKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gey4uLn1cclxuXHJcblx0XHRpZiAoICEgZGF0ZV9ib29raW5nX29iaiApeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblxyXG5cdFx0Ly8gVCBvIG8gbCB0IGkgcCBzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdHZhciB0b29sdGlwX3RleHQgPSAnJztcclxuXHRcdGlmICggZGF0ZV9ib29raW5nX29ialsgJ3N1bW1hcnknXVsndG9vbHRpcF9hdmFpbGFiaWxpdHknIF0ubGVuZ3RoID4gMCApe1xyXG5cdFx0XHR0b29sdGlwX3RleHQgKz0gIGRhdGVfYm9va2luZ19vYmpbICdzdW1tYXJ5J11bJ3Rvb2x0aXBfYXZhaWxhYmlsaXR5JyBdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBkYXRlX2Jvb2tpbmdfb2JqWyAnc3VtbWFyeSddWyd0b29sdGlwX2RheV9jb3N0JyBdLmxlbmd0aCA+IDAgKXtcclxuXHRcdFx0dG9vbHRpcF90ZXh0ICs9ICBkYXRlX2Jvb2tpbmdfb2JqWyAnc3VtbWFyeSddWyd0b29sdGlwX2RheV9jb3N0JyBdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBkYXRlX2Jvb2tpbmdfb2JqWyAnc3VtbWFyeSddWyd0b29sdGlwX3RpbWVzJyBdLmxlbmd0aCA+IDAgKXtcclxuXHRcdFx0dG9vbHRpcF90ZXh0ICs9ICBkYXRlX2Jvb2tpbmdfb2JqWyAnc3VtbWFyeSddWyd0b29sdGlwX3RpbWVzJyBdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBkYXRlX2Jvb2tpbmdfb2JqWyAnc3VtbWFyeSddWyd0b29sdGlwX2Jvb2tpbmdfZGV0YWlscycgXS5sZW5ndGggPiAwICl7XHJcblx0XHRcdHRvb2x0aXBfdGV4dCArPSAgZGF0ZV9ib29raW5nX29ialsgJ3N1bW1hcnknXVsndG9vbHRpcF9ib29raW5nX2RldGFpbHMnIF07XHJcblx0XHR9XHJcblx0XHR3cGJjX3NldF90b29sdGlwX19fZm9yX19jYWxlbmRhcl9kYXRlKCB0b29sdGlwX3RleHQsIHJlc291cmNlX2lkLCBjbGFzc19kYXkgKTtcclxuXHJcblxyXG5cclxuXHRcdC8vICBVIG4gaCBvIHYgZSByIGkgbiBnICAgIGluICAgIFVOU0VMRUNUQUJMRV9DQUxFTkRBUiAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR2YXIgaXNfdW5zZWxlY3RhYmxlX2NhbGVuZGFyID0gKCBqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZ191bnNlbGVjdGFibGUnICsgcmVzb3VyY2VfaWQgKS5sZW5ndGggPiAwKTtcdFx0XHRcdC8vRml4SW46IDguMC4xLjJcclxuXHRcdHZhciBpc19ib29raW5nX2Zvcm1fZXhpc3QgICAgPSAoIGpRdWVyeSggJyNib29raW5nX2Zvcm1fZGl2JyArIHJlc291cmNlX2lkICkubGVuZ3RoID4gMCApO1xyXG5cclxuXHRcdGlmICggKCBpc191bnNlbGVjdGFibGVfY2FsZW5kYXIgKSAmJiAoICEgaXNfYm9va2luZ19mb3JtX2V4aXN0ICkgKXtcclxuXHJcblx0XHRcdC8qKlxyXG5cdFx0XHQgKiAgVW4gSG92ZXIgYWxsIGRhdGVzIGluIGNhbGVuZGFyICh3aXRob3V0IHRoZSBib29raW5nIGZvcm0pLCBpZiBvbmx5IEF2YWlsYWJpbGl0eSBDYWxlbmRhciBoZXJlIGFuZCB3ZSBkbyBub3QgaW5zZXJ0IEJvb2tpbmcgZm9ybSBieSBtaXN0YWtlLlxyXG5cdFx0XHQgKi9cclxuXHJcblx0XHRcdHdwYmNfY2FsZW5kYXJzX19jbGVhcl9kYXlzX2hpZ2hsaWdodGluZyggcmVzb3VyY2VfaWQgKTsgXHRcdFx0XHRcdFx0XHQvLyBDbGVhciBkYXlzIGhpZ2hsaWdodGluZ1xyXG5cclxuXHRcdFx0dmFyIGNzc19vZl9jYWxlbmRhciA9ICcud3BiY19vbmx5X2NhbGVuZGFyICNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkO1xyXG5cdFx0XHRqUXVlcnkoIGNzc19vZl9jYWxlbmRhciArICcgLmRhdGVwaWNrLWRheXMtY2VsbCwgJ1xyXG5cdFx0XHRcdCAgKyBjc3Nfb2ZfY2FsZW5kYXIgKyAnIC5kYXRlcGljay1kYXlzLWNlbGwgYScgKS5jc3MoICdjdXJzb3InLCAnZGVmYXVsdCcgKTtcdC8vIFNldCBjdXJzb3IgdG8gRGVmYXVsdFxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cclxuXHJcblx0XHQvLyAgRCBhIHkgcyAgICBIIG8gdiBlIHIgaSBuIGcgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0aWYgKFxyXG5cdFx0XHQgICAoIGxvY2F0aW9uLmhyZWYuaW5kZXhPZiggJ3BhZ2U9d3BiYycgKSA9PSAtMSApXHJcblx0XHRcdHx8ICggbG9jYXRpb24uaHJlZi5pbmRleE9mKCAncGFnZT13cGJjLW5ldycgKSA+IDAgKVxyXG5cdFx0XHR8fCAoIGxvY2F0aW9uLmhyZWYuaW5kZXhPZiggJ3BhZ2U9d3BiYy1hdmFpbGFiaWxpdHknICkgPiAwIClcclxuXHRcdCl7XHJcblx0XHRcdC8vIFRoZSBzYW1lIGFzIGRhdGVzIHNlbGVjdGlvbiwgIGJ1dCBmb3IgZGF5cyBob3ZlcmluZ1xyXG5cclxuXHRcdFx0aWYgKCAnZnVuY3Rpb24nID09IHR5cGVvZiggd3BiY19fY2FsZW5kYXJfX2RvX2RheXNfaGlnaGxpZ2h0X19icyApICl7XHJcblx0XHRcdFx0d3BiY19fY2FsZW5kYXJfX2RvX2RheXNfaGlnaGxpZ2h0X19icyggc3FsX2NsYXNzX2RheSwgZGF0ZSwgcmVzb3VyY2VfaWQgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBTZWxlY3QgY2FsZW5kYXIgZGF0ZSBjZWxsc1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIGRhdGVcdFx0XHRcdFx0XHRcdFx0XHRcdC0gIEphdmFTY3JpcHQgRGF0ZSBPYmo6ICBcdFx0TW9uIERlYyAxMSAyMDIzIDAwOjAwOjAwIEdNVCswMjAwIChFYXN0ZXJuIEV1cm9wZWFuIFN0YW5kYXJkIFRpbWUpXHJcblx0ICogQHBhcmFtIGNhbGVuZGFyX3BhcmFtc19hcnJcdFx0XHRcdFx0XHQtICBDYWxlbmRhciBTZXR0aW5ncyBPYmplY3Q6ICBcdHtcclxuXHQgKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICBcdFx0XHRcdFx0XHRcInJlc291cmNlX2lkXCI6IDRcclxuXHQgKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHQgKiBAcGFyYW0gZGF0ZXBpY2tfdGhpc1x0XHRcdFx0XHRcdFx0XHQtIHRoaXMgb2YgZGF0ZXBpY2sgT2JqXHJcblx0ICpcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX19jYWxlbmRhcl9fb25fc2VsZWN0X2RheXMoIGRhdGUsIGNhbGVuZGFyX3BhcmFtc19hcnIsIGRhdGVwaWNrX3RoaXMgKXtcclxuXHJcblx0XHR2YXIgcmVzb3VyY2VfaWQgPSAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YoY2FsZW5kYXJfcGFyYW1zX2FyclsgJ3Jlc291cmNlX2lkJyBdKSApID8gY2FsZW5kYXJfcGFyYW1zX2FyclsgJ3Jlc291cmNlX2lkJyBdIDogJzEnO1x0XHQvLyAnMSdcclxuXHJcblx0XHQvLyBTZXQgdW5zZWxlY3RhYmxlLCAgaWYgb25seSBBdmFpbGFiaWxpdHkgQ2FsZW5kYXIgIGhlcmUgKGFuZCB3ZSBkbyBub3QgaW5zZXJ0IEJvb2tpbmcgZm9ybSBieSBtaXN0YWtlKS5cclxuXHRcdHZhciBpc191bnNlbGVjdGFibGVfY2FsZW5kYXIgPSAoIGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nX3Vuc2VsZWN0YWJsZScgKyByZXNvdXJjZV9pZCApLmxlbmd0aCA+IDApO1x0XHRcdFx0Ly9GaXhJbjogOC4wLjEuMlxyXG5cdFx0dmFyIGlzX2Jvb2tpbmdfZm9ybV9leGlzdCAgICA9ICggalF1ZXJ5KCAnI2Jvb2tpbmdfZm9ybV9kaXYnICsgcmVzb3VyY2VfaWQgKS5sZW5ndGggPiAwICk7XHJcblx0XHRpZiAoICggaXNfdW5zZWxlY3RhYmxlX2NhbGVuZGFyICkgJiYgKCAhIGlzX2Jvb2tpbmdfZm9ybV9leGlzdCApICl7XHJcblx0XHRcdHdwYmNfY2FsZW5kYXJfX3Vuc2VsZWN0X2FsbF9kYXRlcyggcmVzb3VyY2VfaWQgKTtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFVuc2VsZWN0IERhdGVzXHJcblx0XHRcdGpRdWVyeSgnLndwYmNfb25seV9jYWxlbmRhciAucG9wb3Zlcl9jYWxlbmRhcl9ob3ZlcicpLnJlbW92ZSgpOyAgICAgICAgICAgICAgICAgICAgICBcdFx0XHRcdFx0XHRcdC8vIEhpZGUgYWxsIG9wZW5lZCBwb3BvdmVyc1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0alF1ZXJ5KCAnI2RhdGVfYm9va2luZycgKyByZXNvdXJjZV9pZCApLnZhbCggZGF0ZSApO1x0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQWRkIHNlbGVjdGVkIGRhdGVzIHRvICBoaWRkZW4gdGV4dGFyZWFcclxuXHJcblxyXG5cdFx0aWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YgKHdwYmNfX2NhbGVuZGFyX19kb19kYXlzX3NlbGVjdF9fYnMpICl7IHdwYmNfX2NhbGVuZGFyX19kb19kYXlzX3NlbGVjdF9fYnMoIGRhdGUsIHJlc291cmNlX2lkICk7IH1cclxuXHJcblx0XHR3cGJjX2Rpc2FibGVfdGltZV9maWVsZHNfaW5fYm9va2luZ19mb3JtKCByZXNvdXJjZV9pZCApO1xyXG5cclxuXHRcdC8vIEhvb2sgLS0gdHJpZ2dlciBkYXkgc2VsZWN0aW9uIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR2YXIgbW91c2VfY2xpY2tlZF9kYXRlcyA9IGRhdGU7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBDYW4gYmU6IFwiMDUuMTAuMjAyMyAtIDA3LjEwLjIwMjNcIiAgfCAgXCIxMC4xMC4yMDIzIC0gMTAuMTAuMjAyM1wiICB8XHJcblx0XHR2YXIgYWxsX3NlbGVjdGVkX2RhdGVzX2FyciA9IHdwYmNfZ2V0X19zZWxlY3RlZF9kYXRlc19zcWxfX2FzX2FyciggcmVzb3VyY2VfaWQgKTtcdFx0XHRcdFx0XHRcdFx0XHQvLyBDYW4gYmU6IFsgXCIyMDIzLTEwLTA1XCIsIFwiMjAyMy0xMC0wNlwiLCBcIjIwMjMtMTAtMDdcIiwg4oCmIF1cclxuXHRcdGpRdWVyeSggXCIuYm9va2luZ19mb3JtX2RpdlwiICkudHJpZ2dlciggXCJkYXRlX3NlbGVjdGVkXCIsIFsgcmVzb3VyY2VfaWQsIG1vdXNlX2NsaWNrZWRfZGF0ZXMsIGFsbF9zZWxlY3RlZF9kYXRlc19hcnIgXSApO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIC0tICBUIGkgbSBlICAgIEYgaSBlIGwgZCBzICAgICBzdGFydCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgKi9cclxuXHJcblx0LyoqXHJcblx0ICogRGlzYWJsZSB0aW1lIHNsb3RzIGluIGJvb2tpbmcgZm9ybSBkZXBlbmQgb24gc2VsZWN0ZWQgZGF0ZXMgYW5kIGJvb2tlZCBkYXRlcy90aW1lc1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19kaXNhYmxlX3RpbWVfZmllbGRzX2luX2Jvb2tpbmdfZm9ybSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFx0MS4gR2V0IGFsbCB0aW1lIGZpZWxkcyBpbiB0aGUgYm9va2luZyBmb3JtIGFzIGFycmF5ICBvZiBvYmplY3RzXHJcblx0XHQgKiBcdFx0XHRcdFx0W1xyXG5cdFx0ICogXHRcdFx0XHRcdCBcdCAgIHtcdGpxdWVyeV9vcHRpb246ICAgICAgalF1ZXJ5X09iamVjdCB7fVxyXG5cdFx0ICogXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICAgICAgICAgICAgICAgJ3JhbmdldGltZTJbXSdcclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR0aW1lc19hc19zZWNvbmRzOiAgIFsgMjE2MDAsIDIzNDAwIF1cclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCAtIDA2OjMwJ1xyXG5cdFx0ICogXHRcdFx0XHRcdCAgICAgfVxyXG5cdFx0ICogXHRcdFx0XHRcdCAgLi4uXHJcblx0XHQgKiBcdFx0XHRcdFx0XHQgICB7XHRqcXVlcnlfb3B0aW9uOiAgICAgIGpRdWVyeV9PYmplY3Qge31cclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAgICAgICAgICAgICAgICdzdGFydHRpbWUyW10nXHJcblx0XHQgKiBcdFx0XHRcdFx0XHRcdFx0dGltZXNfYXNfc2Vjb25kczogICBbIDIxNjAwIF1cclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCdcclxuXHRcdCAqICBcdFx0XHRcdFx0ICAgIH1cclxuXHRcdCAqIFx0XHRcdFx0XHQgXVxyXG5cdFx0ICovXHJcblx0XHR2YXIgdGltZV9maWVsZHNfb2JqX2FyciA9IHdwYmNfZ2V0X190aW1lX2ZpZWxkc19faW5fYm9va2luZ19mb3JtX19hc19hcnIoIHJlc291cmNlX2lkICk7XHJcblxyXG5cdFx0Ly8gMi4gR2V0IGFsbCBzZWxlY3RlZCBkYXRlcyBpbiAgU1FMIGZvcm1hdCAgbGlrZSB0aGlzIFsgXCIyMDIzLTA4LTIzXCIsIFwiMjAyMy0wOC0yNFwiLCBcIjIwMjMtMDgtMjVcIiwgLi4uIF1cclxuXHRcdHZhciBzZWxlY3RlZF9kYXRlc19hcnIgPSB3cGJjX2dldF9fc2VsZWN0ZWRfZGF0ZXNfc3FsX19hc19hcnIoIHJlc291cmNlX2lkICk7XHJcblxyXG5cdFx0Ly8gMy4gR2V0IGNoaWxkIGJvb2tpbmcgcmVzb3VyY2VzICBvciBzaW5nbGUgYm9va2luZyByZXNvdXJjZSAgdGhhdCAgZXhpc3QgIGluIGRhdGVzXHJcblx0XHR2YXIgY2hpbGRfcmVzb3VyY2VzX2FyciA9IHdwYmNfY2xvbmVfb2JqKCBfd3BiYy5ib29raW5nX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAncmVzb3VyY2VzX2lkX2Fycl9faW5fZGF0ZXMnICkgKTtcclxuXHJcblx0XHR2YXIgc3FsX2RhdGU7XHJcblx0XHR2YXIgY2hpbGRfcmVzb3VyY2VfaWQ7XHJcblx0XHR2YXIgbWVyZ2VkX3NlY29uZHM7XHJcblx0XHR2YXIgdGltZV9maWVsZHNfb2JqO1xyXG5cdFx0dmFyIGlzX2ludGVyc2VjdDtcclxuXHRcdHZhciBpc19jaGVja19pbjtcclxuXHJcblx0XHQvLyA0LiBMb29wICBhbGwgIHRpbWUgRmllbGRzIG9wdGlvbnNcclxuXHRcdGZvciAoIHZhciBmaWVsZF9rZXkgaW4gdGltZV9maWVsZHNfb2JqX2FyciApe1xyXG5cclxuXHRcdFx0dGltZV9maWVsZHNfb2JqX2FyclsgZmllbGRfa2V5IF0uZGlzYWJsZWQgPSAwOyAgICAgICAgICAvLyBCeSBkZWZhdWx0IHRoaXMgdGltZSBmaWVsZCBpcyBub3QgZGlzYWJsZWRcclxuXHJcblx0XHRcdHRpbWVfZmllbGRzX29iaiA9IHRpbWVfZmllbGRzX29ial9hcnJbIGZpZWxkX2tleSBdO1x0XHQvLyB7IHRpbWVzX2FzX3NlY29uZHM6IFsgMjE2MDAsIDIzNDAwIF0sIHZhbHVlX29wdGlvbl8yNGg6ICcwNjowMCAtIDA2OjMwJywgbmFtZTogJ3JhbmdldGltZTJbXScsIGpxdWVyeV9vcHRpb246IGpRdWVyeV9PYmplY3Qge319XHJcblxyXG5cdFx0XHQvLyBMb29wICBhbGwgIHNlbGVjdGVkIGRhdGVzXHJcblx0XHRcdGZvciAoIHZhciBpID0gMDsgaSA8IHNlbGVjdGVkX2RhdGVzX2Fyci5sZW5ndGg7IGkrKyApe1xyXG5cclxuXHRcdFx0XHQvL0ZpeEluOiA5LjkuMC4zMVxyXG5cdFx0XHRcdGlmIChcclxuXHRcdFx0XHRcdCAgICggJ09mZicgPT09IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnYm9va2luZ19yZWN1cnJlbnRfdGltZScgKSApXHJcblx0XHRcdFx0XHQmJiAoIHNlbGVjdGVkX2RhdGVzX2Fyci5sZW5ndGg+MSApXHJcblx0XHRcdFx0KXtcclxuXHRcdFx0XHRcdC8vVE9ETzogc2tpcCBzb21lIGZpZWxkcyBjaGVja2luZyBpZiBpdCdzIHN0YXJ0IC8gZW5kIHRpbWUgZm9yIG11bHBsZSBkYXRlcyAgc2VsZWN0aW9uICBtb2RlLlxyXG5cdFx0XHRcdFx0Ly9UT0RPOiB3ZSBuZWVkIHRvIGZpeCBzaXR1YXRpb24gIGZvciBlbnRpbWVzLCAgd2hlbiAgdXNlciAgc2VsZWN0ICBzZXZlcmFsICBkYXRlcywgIGFuZCBpbiBzdGFydCAgdGltZSBib29rZWQgMDA6MDAgLSAxNTowMCAsIGJ1dCBzeXN0c21lIGJsb2NrIHVudGlsbCAxNTowMCB0aGUgZW5kIHRpbWUgYXMgd2VsbCwgIHdoaWNoICBpcyB3cm9uZywgIGJlY2F1c2UgaXQgMiBvciAzIGRhdGVzIHNlbGVjdGlvbiAgYW5kIGVuZCBkYXRlIGNhbiBiZSBmdWxsdSAgYXZhaWxhYmxlXHJcblxyXG5cdFx0XHRcdFx0aWYgKCAoMCA9PSBpKSAmJiAodGltZV9maWVsZHNfb2JqWyAnbmFtZScgXS5pbmRleE9mKCAnZW5kdGltZScgKSA+PSAwKSApe1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICggKCAoc2VsZWN0ZWRfZGF0ZXNfYXJyLmxlbmd0aC0xKSA9PSBpICkgJiYgKHRpbWVfZmllbGRzX29ialsgJ25hbWUnIF0uaW5kZXhPZiggJ3N0YXJ0dGltZScgKSA+PSAwKSApe1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIEdldCBEYXRlOiAnMjAyMy0wOC0xOCdcclxuXHRcdFx0XHRzcWxfZGF0ZSA9IHNlbGVjdGVkX2RhdGVzX2FyclsgaSBdO1xyXG5cclxuXHJcblx0XHRcdFx0dmFyIGhvd19tYW55X3Jlc291cmNlc19pbnRlcnNlY3RlZCA9IDA7XHJcblx0XHRcdFx0Ly8gTG9vcCBhbGwgcmVzb3VyY2VzIElEXHJcblx0XHRcdFx0Zm9yICggdmFyIHJlc19rZXkgaW4gY2hpbGRfcmVzb3VyY2VzX2FyciApe1xyXG5cclxuXHRcdFx0XHRcdGNoaWxkX3Jlc291cmNlX2lkID0gY2hpbGRfcmVzb3VyY2VzX2FyclsgcmVzX2tleSBdO1xyXG5cclxuXHRcdFx0XHRcdC8vIF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXRfZm9yX2RhdGUoMiwnMjAyMy0wOC0yMScpWzEyXS5ib29rZWRfdGltZV9zbG90cy5tZXJnZWRfc2Vjb25kc1x0XHQ9IFsgXCIwNzowMDoxMSAtIDA3OjMwOjAyXCIsIFwiMTA6MDA6MTEgLSAwMDowMDowMFwiIF1cclxuXHRcdFx0XHRcdC8vIF93cGJjLmJvb2tpbmdzX2luX2NhbGVuZGFyX19nZXRfZm9yX2RhdGUoMiwnMjAyMy0wOC0yMScpWzJdLmJvb2tlZF90aW1lX3Nsb3RzLm1lcmdlZF9zZWNvbmRzXHRcdFx0PSBbICBbIDI1MjExLCAyNzAwMiBdLCBbIDM2MDExLCA4NjQwMCBdICBdXHJcblxyXG5cdFx0XHRcdFx0aWYgKCBmYWxzZSAhPT0gX3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX2dldF9mb3JfZGF0ZSggcmVzb3VyY2VfaWQsIHNxbF9kYXRlICkgKXtcclxuXHRcdFx0XHRcdFx0bWVyZ2VkX3NlY29uZHMgPSBfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKCByZXNvdXJjZV9pZCwgc3FsX2RhdGUgKVsgY2hpbGRfcmVzb3VyY2VfaWQgXS5ib29rZWRfdGltZV9zbG90cy5tZXJnZWRfc2Vjb25kcztcdFx0Ly8gWyAgWyAyNTIxMSwgMjcwMDIgXSwgWyAzNjAxMSwgODY0MDAgXSAgXVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0bWVyZ2VkX3NlY29uZHMgPSBbXTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICggdGltZV9maWVsZHNfb2JqLnRpbWVzX2FzX3NlY29uZHMubGVuZ3RoID4gMSApe1xyXG5cdFx0XHRcdFx0XHRpc19pbnRlcnNlY3QgPSB3cGJjX2lzX2ludGVyc2VjdF9fcmFuZ2VfdGltZV9pbnRlcnZhbCggIFtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCggcGFyc2VJbnQoIHRpbWVfZmllbGRzX29iai50aW1lc19hc19zZWNvbmRzWzBdICkgKyAyMCApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCggcGFyc2VJbnQoIHRpbWVfZmllbGRzX29iai50aW1lc19hc19zZWNvbmRzWzFdICkgLSAyMCApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCwgbWVyZ2VkX3NlY29uZHMgKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlzX2NoZWNrX2luID0gKC0xICE9PSB0aW1lX2ZpZWxkc19vYmoubmFtZS5pbmRleE9mKCAnc3RhcnQnICkpO1xyXG5cdFx0XHRcdFx0XHRpc19pbnRlcnNlY3QgPSB3cGJjX2lzX2ludGVyc2VjdF9fb25lX3RpbWVfaW50ZXJ2YWwoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoICggaXNfY2hlY2tfaW4gKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICA/IHBhcnNlSW50KCB0aW1lX2ZpZWxkc19vYmoudGltZXNfYXNfc2Vjb25kcyApICsgMjBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgOiBwYXJzZUludCggdGltZV9maWVsZHNfb2JqLnRpbWVzX2FzX3NlY29uZHMgKSAtIDIwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQsIG1lcmdlZF9zZWNvbmRzICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoaXNfaW50ZXJzZWN0KXtcclxuXHRcdFx0XHRcdFx0aG93X21hbnlfcmVzb3VyY2VzX2ludGVyc2VjdGVkKys7XHRcdFx0Ly8gSW5jcmVhc2VcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpZiAoIGNoaWxkX3Jlc291cmNlc19hcnIubGVuZ3RoID09IGhvd19tYW55X3Jlc291cmNlc19pbnRlcnNlY3RlZCApIHtcclxuXHRcdFx0XHRcdC8vIEFsbCByZXNvdXJjZXMgaW50ZXJzZWN0ZWQsICB0aGVuICBpdCdzIG1lYW5zIHRoYXQgdGhpcyB0aW1lLXNsb3Qgb3IgdGltZSBtdXN0ICBiZSAgRGlzYWJsZWQsIGFuZCB3ZSBjYW4gIGV4aXN0ICBmcm9tICAgc2VsZWN0ZWRfZGF0ZXNfYXJyIExPT1BcclxuXHJcblx0XHRcdFx0XHR0aW1lX2ZpZWxkc19vYmpfYXJyWyBmaWVsZF9rZXkgXS5kaXNhYmxlZCA9IDE7XHJcblx0XHRcdFx0XHRicmVhaztcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gZXhpc3QgIGZyb20gICBEYXRlcyBMT09QXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHRcdC8vIDUuIE5vdyB3ZSBjYW4gZGlzYWJsZSB0aW1lIHNsb3QgaW4gSFRNTCBieSAgdXNpbmcgICggZmllbGQuZGlzYWJsZWQgPT0gMSApIHByb3BlcnR5XHJcblx0XHR3cGJjX19odG1sX190aW1lX2ZpZWxkX29wdGlvbnNfX3NldF9kaXNhYmxlZCggdGltZV9maWVsZHNfb2JqX2FyciApO1xyXG5cclxuXHRcdGpRdWVyeSggXCIuYm9va2luZ19mb3JtX2RpdlwiICkudHJpZ2dlciggJ3dwYmNfaG9va190aW1lc2xvdHNfZGlzYWJsZWQnLCBbcmVzb3VyY2VfaWQsIHNlbGVjdGVkX2RhdGVzX2Fycl0gKTtcdFx0XHRcdFx0Ly8gVHJpZ2dlciBob29rIG9uIGRpc2FibGluZyB0aW1lc2xvdHMuXHRcdFVzYWdlOiBcdGpRdWVyeSggXCIuYm9va2luZ19mb3JtX2RpdlwiICkub24oICd3cGJjX2hvb2tfdGltZXNsb3RzX2Rpc2FibGVkJywgZnVuY3Rpb24gKCBldmVudCwgYmtfdHlwZSwgYWxsX2RhdGVzICl7IC4uLiB9ICk7XHRcdC8vRml4SW46IDguNy4xMS45XHJcblx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSXMgbnVtYmVyIGluc2lkZSAvaW50ZXJzZWN0ICBvZiBhcnJheSBvZiBpbnRlcnZhbHMgP1xyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSB0aW1lX0FcdFx0ICAgICBcdC0gMjU4MDBcclxuXHRcdCAqIEBwYXJhbSB0aW1lX2ludGVydmFsX0JcdFx0LSBbICBbIDI1MjExLCAyNzAwMiBdLCBbIDM2MDExLCA4NjQwMCBdICBdXHJcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gd3BiY19pc19pbnRlcnNlY3RfX29uZV90aW1lX2ludGVydmFsKCB0aW1lX0EsIHRpbWVfaW50ZXJ2YWxfQiApe1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGogPSAwOyBqIDwgdGltZV9pbnRlcnZhbF9CLmxlbmd0aDsgaisrICl7XHJcblxyXG5cdFx0XHRcdGlmICggKHBhcnNlSW50KCB0aW1lX0EgKSA+IHBhcnNlSW50KCB0aW1lX2ludGVydmFsX0JbIGogXVsgMCBdICkpICYmIChwYXJzZUludCggdGltZV9BICkgPCBwYXJzZUludCggdGltZV9pbnRlcnZhbF9CWyBqIF1bIDEgXSApKSApe1xyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIGlmICggKCBwYXJzZUludCggdGltZV9BICkgPT0gcGFyc2VJbnQoIHRpbWVfaW50ZXJ2YWxfQlsgaiBdWyAwIF0gKSApIHx8ICggcGFyc2VJbnQoIHRpbWVfQSApID09IHBhcnNlSW50KCB0aW1lX2ludGVydmFsX0JbIGogXVsgMSBdICkgKSApIHtcclxuXHRcdFx0XHQvLyBcdFx0XHQvLyBUaW1lIEEganVzdCAgYXQgIHRoZSBib3JkZXIgb2YgaW50ZXJ2YWxcclxuXHRcdFx0XHQvLyB9XHJcblx0XHRcdH1cclxuXHJcblx0XHQgICAgcmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogSXMgdGhlc2UgYXJyYXkgb2YgaW50ZXJ2YWxzIGludGVyc2VjdGVkID9cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0gdGltZV9pbnRlcnZhbF9BXHRcdC0gWyBbIDIxNjAwLCAyMzQwMCBdIF1cclxuXHRcdCAqIEBwYXJhbSB0aW1lX2ludGVydmFsX0JcdFx0LSBbICBbIDI1MjExLCAyNzAwMiBdLCBbIDM2MDExLCA4NjQwMCBdICBdXHJcblx0XHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gd3BiY19pc19pbnRlcnNlY3RfX3JhbmdlX3RpbWVfaW50ZXJ2YWwoIHRpbWVfaW50ZXJ2YWxfQSwgdGltZV9pbnRlcnZhbF9CICl7XHJcblxyXG5cdFx0XHR2YXIgaXNfaW50ZXJzZWN0O1xyXG5cclxuXHRcdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgdGltZV9pbnRlcnZhbF9BLmxlbmd0aDsgaSsrICl7XHJcblxyXG5cdFx0XHRcdGZvciAoIHZhciBqID0gMDsgaiA8IHRpbWVfaW50ZXJ2YWxfQi5sZW5ndGg7IGorKyApe1xyXG5cclxuXHRcdFx0XHRcdGlzX2ludGVyc2VjdCA9IHdwYmNfaW50ZXJ2YWxzX19pc19pbnRlcnNlY3RlZCggdGltZV9pbnRlcnZhbF9BWyBpIF0sIHRpbWVfaW50ZXJ2YWxfQlsgaiBdICk7XHJcblxyXG5cdFx0XHRcdFx0aWYgKCBpc19pbnRlcnNlY3QgKXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBHZXQgYWxsIHRpbWUgZmllbGRzIGluIHRoZSBib29raW5nIGZvcm0gYXMgYXJyYXkgIG9mIG9iamVjdHNcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHRcdCAqIEByZXR1cm5zIFtdXHJcblx0XHQgKlxyXG5cdFx0ICogXHRcdEV4YW1wbGU6XHJcblx0XHQgKiBcdFx0XHRcdFx0W1xyXG5cdFx0ICogXHRcdFx0XHRcdCBcdCAgIHtcclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCAtIDA2OjMwJ1xyXG5cdFx0ICogXHRcdFx0XHRcdFx0XHRcdHRpbWVzX2FzX3NlY29uZHM6ICAgWyAyMTYwMCwgMjM0MDAgXVxyXG5cdFx0ICogXHRcdFx0XHRcdCBcdCAgIFx0XHRqcXVlcnlfb3B0aW9uOiAgICAgIGpRdWVyeV9PYmplY3Qge31cclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAgICAgICAgICAgICAgICdyYW5nZXRpbWUyW10nXHJcblx0XHQgKiBcdFx0XHRcdFx0ICAgICB9XHJcblx0XHQgKiBcdFx0XHRcdFx0ICAuLi5cclxuXHRcdCAqIFx0XHRcdFx0XHRcdCAgIHtcclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCdcclxuXHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR0aW1lc19hc19zZWNvbmRzOiAgIFsgMjE2MDAgXVxyXG5cdFx0ICogXHRcdFx0XHRcdFx0ICAgXHRcdGpxdWVyeV9vcHRpb246ICAgICAgalF1ZXJ5X09iamVjdCB7fVxyXG5cdFx0ICogXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICAgICAgICAgICAgICAgJ3N0YXJ0dGltZTJbXSdcclxuXHRcdCAqICBcdFx0XHRcdFx0ICAgIH1cclxuXHRcdCAqIFx0XHRcdFx0XHQgXVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB3cGJjX2dldF9fdGltZV9maWVsZHNfX2luX2Jvb2tpbmdfZm9ybV9fYXNfYXJyKCByZXNvdXJjZV9pZCApe1xyXG5cdFx0ICAgIC8qKlxyXG5cdFx0XHQgKiBGaWVsZHMgd2l0aCAgW10gIGxpa2UgdGhpcyAgIHNlbGVjdFtuYW1lPVwicmFuZ2V0aW1lMVtdXCJdXHJcblx0XHRcdCAqIGl0J3Mgd2hlbiB3ZSBoYXZlICdtdWx0aXBsZScgaW4gc2hvcnRjb2RlOiAgIFtzZWxlY3QqIHJhbmdldGltZSBtdWx0aXBsZSAgXCIwNjowMCAtIDA2OjMwXCIgLi4uIF1cclxuXHRcdFx0ICovXHJcblx0XHRcdHZhciB0aW1lX2ZpZWxkc19hcnI9W1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0W25hbWU9XCJyYW5nZXRpbWUnICsgcmVzb3VyY2VfaWQgKyAnXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0J3NlbGVjdFtuYW1lPVwicmFuZ2V0aW1lJyArIHJlc291cmNlX2lkICsgJ1tdXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0J3NlbGVjdFtuYW1lPVwic3RhcnR0aW1lJyArIHJlc291cmNlX2lkICsgJ1wiXScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cInN0YXJ0dGltZScgKyByZXNvdXJjZV9pZCArICdbXVwiXScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cImVuZHRpbWUnICsgcmVzb3VyY2VfaWQgKyAnXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0J3NlbGVjdFtuYW1lPVwiZW5kdGltZScgKyByZXNvdXJjZV9pZCArICdbXVwiXSdcclxuXHRcdFx0XHRcdFx0XHRcdF07XHJcblxyXG5cdFx0XHR2YXIgdGltZV9maWVsZHNfb2JqX2FyciA9IFtdO1xyXG5cclxuXHRcdFx0Ly8gTG9vcCBhbGwgVGltZSBGaWVsZHNcclxuXHRcdFx0Zm9yICggdmFyIGN0Zj0gMDsgY3RmIDwgdGltZV9maWVsZHNfYXJyLmxlbmd0aDsgY3RmKysgKXtcclxuXHJcblx0XHRcdFx0dmFyIHRpbWVfZmllbGQgPSB0aW1lX2ZpZWxkc19hcnJbIGN0ZiBdO1xyXG5cdFx0XHRcdHZhciB0aW1lX29wdGlvbiA9IGpRdWVyeSggdGltZV9maWVsZCArICcgb3B0aW9uJyApO1xyXG5cclxuXHRcdFx0XHQvLyBMb29wIGFsbCBvcHRpb25zIGluIHRpbWUgZmllbGRcclxuXHRcdFx0XHRmb3IgKCB2YXIgaiA9IDA7IGogPCB0aW1lX29wdGlvbi5sZW5ndGg7IGorKyApe1xyXG5cclxuXHRcdFx0XHRcdHZhciBqcXVlcnlfb3B0aW9uID0galF1ZXJ5KCB0aW1lX2ZpZWxkICsgJyBvcHRpb246ZXEoJyArIGogKyAnKScgKTtcclxuXHRcdFx0XHRcdHZhciB2YWx1ZV9vcHRpb25fc2Vjb25kc19hcnIgPSBqcXVlcnlfb3B0aW9uLnZhbCgpLnNwbGl0KCAnLScgKTtcclxuXHRcdFx0XHRcdHZhciB0aW1lc19hc19zZWNvbmRzID0gW107XHJcblxyXG5cdFx0XHRcdFx0Ly8gR2V0IHRpbWUgYXMgc2Vjb25kc1xyXG5cdFx0XHRcdFx0aWYgKCB2YWx1ZV9vcHRpb25fc2Vjb25kc19hcnIubGVuZ3RoICl7XHRcdFx0XHRcdC8vRml4SW46IDkuOC4xMC4xXHJcblx0XHRcdFx0XHRcdGZvciAoIHZhciBpIGluIHZhbHVlX29wdGlvbl9zZWNvbmRzX2FyciApe1xyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyB2YWx1ZV9vcHRpb25fc2Vjb25kc19hcnJbaV0gPSAnMTQ6MDAgJyAgfCAnIDE2OjAwJyAgIChpZiBmcm9tICdyYW5nZXRpbWUnKSBhbmQgJzE2OjAwJyAgaWYgKHN0YXJ0L2VuZCB0aW1lKVxyXG5cclxuXHRcdFx0XHRcdFx0XHR2YXIgc3RhcnRfZW5kX3RpbWVzX2FyciA9IHZhbHVlX29wdGlvbl9zZWNvbmRzX2FyclsgaSBdLnRyaW0oKS5zcGxpdCggJzonICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHZhciB0aW1lX2luX3NlY29uZHMgPSBwYXJzZUludCggc3RhcnRfZW5kX3RpbWVzX2FyclsgMCBdICkgKiA2MCAqIDYwICsgcGFyc2VJbnQoIHN0YXJ0X2VuZF90aW1lc19hcnJbIDEgXSApICogNjA7XHJcblxyXG5cdFx0XHRcdFx0XHRcdHRpbWVzX2FzX3NlY29uZHMucHVzaCggdGltZV9pbl9zZWNvbmRzICk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHR0aW1lX2ZpZWxkc19vYmpfYXJyLnB1c2goIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J25hbWUnICAgICAgICAgICAgOiBqUXVlcnkoIHRpbWVfZmllbGQgKS5hdHRyKCAnbmFtZScgKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3ZhbHVlX29wdGlvbl8yNGgnOiBqcXVlcnlfb3B0aW9uLnZhbCgpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanF1ZXJ5X29wdGlvbicgICA6IGpxdWVyeV9vcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0aW1lc19hc19zZWNvbmRzJzogdGltZXNfYXNfc2Vjb25kc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIHRpbWVfZmllbGRzX29ial9hcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0XHQvKipcclxuXHRcdFx0ICogRGlzYWJsZSBIVE1MIG9wdGlvbnMgYW5kIGFkZCBib29rZWQgQ1NTIGNsYXNzXHJcblx0XHRcdCAqXHJcblx0XHRcdCAqIEBwYXJhbSB0aW1lX2ZpZWxkc19vYmpfYXJyICAgICAgLSB0aGlzIHZhbHVlIGlzIGZyb20gIHRoZSBmdW5jOiAgXHR3cGJjX2dldF9fdGltZV9maWVsZHNfX2luX2Jvb2tpbmdfZm9ybV9fYXNfYXJyKCByZXNvdXJjZV9pZCApXHJcblx0XHRcdCAqIFx0XHRcdFx0XHRbXHJcblx0XHRcdCAqIFx0XHRcdFx0XHQgXHQgICB7XHRqcXVlcnlfb3B0aW9uOiAgICAgIGpRdWVyeV9PYmplY3Qge31cclxuXHRcdFx0ICogXHRcdFx0XHRcdFx0XHRcdG5hbWU6ICAgICAgICAgICAgICAgJ3JhbmdldGltZTJbXSdcclxuXHRcdFx0ICogXHRcdFx0XHRcdFx0XHRcdHRpbWVzX2FzX3NlY29uZHM6ICAgWyAyMTYwMCwgMjM0MDAgXVxyXG5cdFx0XHQgKiBcdFx0XHRcdFx0XHRcdFx0dmFsdWVfb3B0aW9uXzI0aDogICAnMDY6MDAgLSAwNjozMCdcclxuXHRcdFx0ICogXHQgIFx0XHRcdFx0XHRcdCAgICBkaXNhYmxlZCA9IDFcclxuXHRcdFx0ICogXHRcdFx0XHRcdCAgICAgfVxyXG5cdFx0XHQgKiBcdFx0XHRcdFx0ICAuLi5cclxuXHRcdFx0ICogXHRcdFx0XHRcdFx0ICAge1x0anF1ZXJ5X29wdGlvbjogICAgICBqUXVlcnlfT2JqZWN0IHt9XHJcblx0XHRcdCAqIFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAgICAgICAgICAgICAgICdzdGFydHRpbWUyW10nXHJcblx0XHRcdCAqIFx0XHRcdFx0XHRcdFx0XHR0aW1lc19hc19zZWNvbmRzOiAgIFsgMjE2MDAgXVxyXG5cdFx0XHQgKiBcdFx0XHRcdFx0XHRcdFx0dmFsdWVfb3B0aW9uXzI0aDogICAnMDY6MDAnXHJcblx0XHRcdCAqICAgXHRcdFx0XHRcdFx0XHRkaXNhYmxlZCA9IDBcclxuXHRcdFx0ICogIFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHQgKiBcdFx0XHRcdFx0IF1cclxuXHRcdFx0ICpcclxuXHRcdFx0ICovXHJcblx0XHRcdGZ1bmN0aW9uIHdwYmNfX2h0bWxfX3RpbWVfZmllbGRfb3B0aW9uc19fc2V0X2Rpc2FibGVkKCB0aW1lX2ZpZWxkc19vYmpfYXJyICl7XHJcblxyXG5cdFx0XHRcdHZhciBqcXVlcnlfb3B0aW9uO1xyXG5cclxuXHRcdFx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCB0aW1lX2ZpZWxkc19vYmpfYXJyLmxlbmd0aDsgaSsrICl7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGpxdWVyeV9vcHRpb24gPSB0aW1lX2ZpZWxkc19vYmpfYXJyWyBpIF0uanF1ZXJ5X29wdGlvbjtcclxuXHJcblx0XHRcdFx0XHRpZiAoIDEgPT0gdGltZV9maWVsZHNfb2JqX2FyclsgaSBdLmRpc2FibGVkICl7XHJcblx0XHRcdFx0XHRcdGpxdWVyeV9vcHRpb24ucHJvcCggJ2Rpc2FibGVkJywgdHJ1ZSApOyBcdFx0Ly8gTWFrZSBkaXNhYmxlIHNvbWUgb3B0aW9uc1xyXG5cdFx0XHRcdFx0XHRqcXVlcnlfb3B0aW9uLmFkZENsYXNzKCAnYm9va2VkJyApOyAgICAgICAgICAgXHQvLyBBZGQgXCJib29rZWRcIiBDU1MgY2xhc3NcclxuXHJcblx0XHRcdFx0XHRcdC8vIGlmIHRoaXMgYm9va2VkIGVsZW1lbnQgc2VsZWN0ZWQgLS0+IHRoZW4gZGVzZWxlY3QgIGl0XHJcblx0XHRcdFx0XHRcdGlmICgganF1ZXJ5X29wdGlvbi5wcm9wKCAnc2VsZWN0ZWQnICkgKXtcclxuXHRcdFx0XHRcdFx0XHRqcXVlcnlfb3B0aW9uLnByb3AoICdzZWxlY3RlZCcsIGZhbHNlICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGpxdWVyeV9vcHRpb24ucGFyZW50KCkuZmluZCggJ29wdGlvbjpub3QoW2Rpc2FibGVkXSk6Zmlyc3QnICkucHJvcCggJ3NlbGVjdGVkJywgdHJ1ZSApLnRyaWdnZXIoIFwiY2hhbmdlXCIgKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGpxdWVyeV9vcHRpb24ucHJvcCggJ2Rpc2FibGVkJywgZmFsc2UgKTsgIFx0XHQvLyBNYWtlIGFjdGl2ZSBhbGwgdGltZXNcclxuXHRcdFx0XHRcdFx0anF1ZXJ5X29wdGlvbi5yZW1vdmVDbGFzcyggJ2Jvb2tlZCcgKTsgICBcdFx0Ly8gUmVtb3ZlIGNsYXNzIFwiYm9va2VkXCJcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIGlmIHRoaXMgdGltZV9yYW5nZSB8IFRpbWVfU2xvdCBpcyBGdWxsIERheSAgYm9va2VkXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gdGltZXNsb3RfYXJyX2luX3NlY29uZHNcdFx0LSBbIDM2MDExLCA4NjQwMCBdXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19pc190aGlzX3RpbWVzbG90X19mdWxsX2RheV9ib29rZWQoIHRpbWVzbG90X2Fycl9pbl9zZWNvbmRzICl7XHJcblxyXG5cdFx0aWYgKFxyXG5cdFx0XHRcdCggdGltZXNsb3RfYXJyX2luX3NlY29uZHMubGVuZ3RoID4gMSApXHJcblx0XHRcdCYmICggcGFyc2VJbnQoIHRpbWVzbG90X2Fycl9pbl9zZWNvbmRzWyAwIF0gKSA8IDMwIClcclxuXHRcdFx0JiYgKCBwYXJzZUludCggdGltZXNsb3RfYXJyX2luX3NlY29uZHNbIDEgXSApID4gICggKDI0ICogNjAgKiA2MCkgLSAzMCkgKVxyXG5cdFx0KXtcclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gUyBlIGwgZSBjIHQgZSBkICAgIEQgYSB0IGUgcyAgLyAgVCBpIG0gZSAtIEYgaSBlIGwgZCBzXHJcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0LyoqXHJcblx0ICogIEdldCBhbGwgc2VsZWN0ZWQgZGF0ZXMgaW4gU1FMIGZvcm1hdCBsaWtlIHRoaXMgWyBcIjIwMjMtMDgtMjNcIiwgXCIyMDIzLTA4LTI0XCIgLCAuLi4gXVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0ICogQHJldHVybnMge1tdfVx0XHRcdFsgXCIyMDIzLTA4LTIzXCIsIFwiMjAyMy0wOC0yNFwiLCBcIjIwMjMtMDgtMjVcIiwgXCIyMDIzLTA4LTI2XCIsIFwiMjAyMy0wOC0yN1wiLCBcIjIwMjMtMDgtMjhcIiwgXCIyMDIzLTA4LTI5XCIgXVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZ2V0X19zZWxlY3RlZF9kYXRlc19zcWxfX2FzX2FyciggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHR2YXIgc2VsZWN0ZWRfZGF0ZXNfYXJyID0gW107XHJcblx0XHRzZWxlY3RlZF9kYXRlc19hcnIgPSBqUXVlcnkoICcjZGF0ZV9ib29raW5nJyArIHJlc291cmNlX2lkICkudmFsKCkuc3BsaXQoJywnKTtcclxuXHJcblx0XHRpZiAoIHNlbGVjdGVkX2RhdGVzX2Fyci5sZW5ndGggKXtcdFx0XHRcdFx0Ly9GaXhJbjogOS44LjEwLjFcclxuXHRcdFx0Zm9yICggdmFyIGkgaW4gc2VsZWN0ZWRfZGF0ZXNfYXJyICl7XHJcblx0XHRcdFx0c2VsZWN0ZWRfZGF0ZXNfYXJyWyBpIF0gPSBzZWxlY3RlZF9kYXRlc19hcnJbIGkgXS50cmltKCk7XHJcblx0XHRcdFx0c2VsZWN0ZWRfZGF0ZXNfYXJyWyBpIF0gPSBzZWxlY3RlZF9kYXRlc19hcnJbIGkgXS5zcGxpdCggJy4nICk7XHJcblx0XHRcdFx0aWYgKCBzZWxlY3RlZF9kYXRlc19hcnJbIGkgXS5sZW5ndGggPiAxICl7XHJcblx0XHRcdFx0XHRzZWxlY3RlZF9kYXRlc19hcnJbIGkgXSA9IHNlbGVjdGVkX2RhdGVzX2FyclsgaSBdWyAyIF0gKyAnLScgKyBzZWxlY3RlZF9kYXRlc19hcnJbIGkgXVsgMSBdICsgJy0nICsgc2VsZWN0ZWRfZGF0ZXNfYXJyWyBpIF1bIDAgXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBSZW1vdmUgZW1wdHkgZWxlbWVudHMgZnJvbSBhbiBhcnJheVxyXG5cdFx0c2VsZWN0ZWRfZGF0ZXNfYXJyID0gc2VsZWN0ZWRfZGF0ZXNfYXJyLmZpbHRlciggZnVuY3Rpb24gKCBuICl7IHJldHVybiBwYXJzZUludChuKTsgfSApO1xyXG5cclxuXHRcdHNlbGVjdGVkX2RhdGVzX2Fyci5zb3J0KCk7XHJcblxyXG5cdFx0cmV0dXJuIHNlbGVjdGVkX2RhdGVzX2FycjtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgYWxsIHRpbWUgZmllbGRzIGluIHRoZSBib29raW5nIGZvcm0gYXMgYXJyYXkgIG9mIG9iamVjdHNcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSByZXNvdXJjZV9pZFxyXG5cdCAqIEBwYXJhbSBpc19vbmx5X3NlbGVjdGVkX3RpbWVcclxuXHQgKiBAcmV0dXJucyBbXVxyXG5cdCAqXHJcblx0ICogXHRcdEV4YW1wbGU6XHJcblx0ICogXHRcdFx0XHRcdFtcclxuXHQgKiBcdFx0XHRcdFx0IFx0ICAge1xyXG5cdCAqIFx0XHRcdFx0XHRcdFx0XHR2YWx1ZV9vcHRpb25fMjRoOiAgICcwNjowMCAtIDA2OjMwJ1xyXG5cdCAqIFx0XHRcdFx0XHRcdFx0XHR0aW1lc19hc19zZWNvbmRzOiAgIFsgMjE2MDAsIDIzNDAwIF1cclxuXHQgKiBcdFx0XHRcdFx0IFx0ICAgXHRcdGpxdWVyeV9vcHRpb246ICAgICAgalF1ZXJ5X09iamVjdCB7fVxyXG5cdCAqIFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAgICAgICAgICAgICAgICdyYW5nZXRpbWUyW10nXHJcblx0ICogXHRcdFx0XHRcdCAgICAgfVxyXG5cdCAqIFx0XHRcdFx0XHQgIC4uLlxyXG5cdCAqIFx0XHRcdFx0XHRcdCAgIHtcclxuXHQgKiBcdFx0XHRcdFx0XHRcdFx0dmFsdWVfb3B0aW9uXzI0aDogICAnMDY6MDAnXHJcblx0ICogXHRcdFx0XHRcdFx0XHRcdHRpbWVzX2FzX3NlY29uZHM6ICAgWyAyMTYwMCBdXHJcblx0ICogXHRcdFx0XHRcdFx0ICAgXHRcdGpxdWVyeV9vcHRpb246ICAgICAgalF1ZXJ5X09iamVjdCB7fVxyXG5cdCAqIFx0XHRcdFx0XHRcdFx0XHRuYW1lOiAgICAgICAgICAgICAgICdzdGFydHRpbWUyW10nXHJcblx0ICogIFx0XHRcdFx0XHQgICAgfVxyXG5cdCAqIFx0XHRcdFx0XHQgXVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZ2V0X19zZWxlY3RlZF90aW1lX2ZpZWxkc19faW5fYm9va2luZ19mb3JtX19hc19hcnIoIHJlc291cmNlX2lkLCBpc19vbmx5X3NlbGVjdGVkX3RpbWUgPSB0cnVlICl7XHJcblx0XHQvKipcclxuXHRcdCAqIEZpZWxkcyB3aXRoICBbXSAgbGlrZSB0aGlzICAgc2VsZWN0W25hbWU9XCJyYW5nZXRpbWUxW11cIl1cclxuXHRcdCAqIGl0J3Mgd2hlbiB3ZSBoYXZlICdtdWx0aXBsZScgaW4gc2hvcnRjb2RlOiAgIFtzZWxlY3QqIHJhbmdldGltZSBtdWx0aXBsZSAgXCIwNjowMCAtIDA2OjMwXCIgLi4uIF1cclxuXHRcdCAqL1xyXG5cdFx0dmFyIHRpbWVfZmllbGRzX2Fycj1bXHJcblx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0W25hbWU9XCJyYW5nZXRpbWUnICsgcmVzb3VyY2VfaWQgKyAnXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cInJhbmdldGltZScgKyByZXNvdXJjZV9pZCArICdbXVwiXScsXHJcblx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0W25hbWU9XCJzdGFydHRpbWUnICsgcmVzb3VyY2VfaWQgKyAnXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cInN0YXJ0dGltZScgKyByZXNvdXJjZV9pZCArICdbXVwiXScsXHJcblx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0W25hbWU9XCJlbmR0aW1lJyArIHJlc291cmNlX2lkICsgJ1wiXScsXHJcblx0XHRcdFx0XHRcdFx0XHQnc2VsZWN0W25hbWU9XCJlbmR0aW1lJyArIHJlc291cmNlX2lkICsgJ1tdXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdCdzZWxlY3RbbmFtZT1cImR1cmF0aW9udGltZScgKyByZXNvdXJjZV9pZCArICdcIl0nLFxyXG5cdFx0XHRcdFx0XHRcdFx0J3NlbGVjdFtuYW1lPVwiZHVyYXRpb250aW1lJyArIHJlc291cmNlX2lkICsgJ1tdXCJdJ1xyXG5cdFx0XHRcdFx0XHRcdF07XHJcblxyXG5cdFx0dmFyIHRpbWVfZmllbGRzX29ial9hcnIgPSBbXTtcclxuXHJcblx0XHQvLyBMb29wIGFsbCBUaW1lIEZpZWxkc1xyXG5cdFx0Zm9yICggdmFyIGN0Zj0gMDsgY3RmIDwgdGltZV9maWVsZHNfYXJyLmxlbmd0aDsgY3RmKysgKXtcclxuXHJcblx0XHRcdHZhciB0aW1lX2ZpZWxkID0gdGltZV9maWVsZHNfYXJyWyBjdGYgXTtcclxuXHJcblx0XHRcdHZhciB0aW1lX29wdGlvbjtcclxuXHRcdFx0aWYgKCBpc19vbmx5X3NlbGVjdGVkX3RpbWUgKXtcclxuXHRcdFx0XHR0aW1lX29wdGlvbiA9IGpRdWVyeSggJyNib29raW5nX2Zvcm0nICsgcmVzb3VyY2VfaWQgKyAnICcgKyB0aW1lX2ZpZWxkICsgJyBvcHRpb246c2VsZWN0ZWQnICk7XHRcdFx0Ly8gRXhjbHVkZSBjb25kaXRpb25hbCAgZmllbGRzLCAgYmVjYXVzZSBvZiB1c2luZyAnI2Jvb2tpbmdfZm9ybTMgLi4uJ1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRpbWVfb3B0aW9uID0galF1ZXJ5KCAnI2Jvb2tpbmdfZm9ybScgKyByZXNvdXJjZV9pZCArICcgJyArIHRpbWVfZmllbGQgKyAnIG9wdGlvbicgKTtcdFx0XHRcdC8vIEFsbCAgdGltZSBmaWVsZHNcclxuXHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdC8vIExvb3AgYWxsIG9wdGlvbnMgaW4gdGltZSBmaWVsZFxyXG5cdFx0XHRmb3IgKCB2YXIgaiA9IDA7IGogPCB0aW1lX29wdGlvbi5sZW5ndGg7IGorKyApe1xyXG5cclxuXHRcdFx0XHR2YXIganF1ZXJ5X29wdGlvbiA9IGpRdWVyeSggdGltZV9vcHRpb25bIGogXSApO1x0XHQvLyBHZXQgb25seSAgc2VsZWN0ZWQgb3B0aW9ucyBcdC8valF1ZXJ5KCB0aW1lX2ZpZWxkICsgJyBvcHRpb246ZXEoJyArIGogKyAnKScgKTtcclxuXHRcdFx0XHR2YXIgdmFsdWVfb3B0aW9uX3NlY29uZHNfYXJyID0ganF1ZXJ5X29wdGlvbi52YWwoKS5zcGxpdCggJy0nICk7XHJcblx0XHRcdFx0dmFyIHRpbWVzX2FzX3NlY29uZHMgPSBbXTtcclxuXHJcblx0XHRcdFx0Ly8gR2V0IHRpbWUgYXMgc2Vjb25kc1xyXG5cdFx0XHRcdGlmICggdmFsdWVfb3B0aW9uX3NlY29uZHNfYXJyLmxlbmd0aCApe1x0XHRcdFx0IFx0Ly9GaXhJbjogOS44LjEwLjFcclxuXHRcdFx0XHRcdGZvciAoIHZhciBpIGluIHZhbHVlX29wdGlvbl9zZWNvbmRzX2FyciApe1xyXG5cclxuXHRcdFx0XHRcdFx0Ly8gdmFsdWVfb3B0aW9uX3NlY29uZHNfYXJyW2ldID0gJzE0OjAwICcgIHwgJyAxNjowMCcgICAoaWYgZnJvbSAncmFuZ2V0aW1lJykgYW5kICcxNjowMCcgIGlmIChzdGFydC9lbmQgdGltZSlcclxuXHJcblx0XHRcdFx0XHRcdHZhciBzdGFydF9lbmRfdGltZXNfYXJyID0gdmFsdWVfb3B0aW9uX3NlY29uZHNfYXJyWyBpIF0udHJpbSgpLnNwbGl0KCAnOicgKTtcclxuXHJcblx0XHRcdFx0XHRcdHZhciB0aW1lX2luX3NlY29uZHMgPSBwYXJzZUludCggc3RhcnRfZW5kX3RpbWVzX2FyclsgMCBdICkgKiA2MCAqIDYwICsgcGFyc2VJbnQoIHN0YXJ0X2VuZF90aW1lc19hcnJbIDEgXSApICogNjA7XHJcblxyXG5cdFx0XHRcdFx0XHR0aW1lc19hc19zZWNvbmRzLnB1c2goIHRpbWVfaW5fc2Vjb25kcyApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dGltZV9maWVsZHNfb2JqX2Fyci5wdXNoKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmFtZScgICAgICAgICAgICA6IGpRdWVyeSggJyNib29raW5nX2Zvcm0nICsgcmVzb3VyY2VfaWQgKyAnICcgKyB0aW1lX2ZpZWxkICkuYXR0ciggJ25hbWUnICksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndmFsdWVfb3B0aW9uXzI0aCc6IGpxdWVyeV9vcHRpb24udmFsKCksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanF1ZXJ5X29wdGlvbicgICA6IGpxdWVyeV9vcHRpb24sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndGltZXNfYXNfc2Vjb25kcyc6IHRpbWVzX2FzX3NlY29uZHNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHQvLyBUZXh0OiAgIFtzdGFydHRpbWVdIC0gW2VuZHRpbWVdIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdFx0dmFyIHRleHRfdGltZV9maWVsZHNfYXJyPVtcclxuXHRcdFx0XHRcdFx0XHRcdFx0J2lucHV0W25hbWU9XCJzdGFydHRpbWUnICsgcmVzb3VyY2VfaWQgKyAnXCJdJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0J2lucHV0W25hbWU9XCJlbmR0aW1lJyArIHJlc291cmNlX2lkICsgJ1wiXScsXHJcblx0XHRcdFx0XHRcdFx0XHRdO1xyXG5cdFx0Zm9yICggdmFyIHRmPSAwOyB0ZiA8IHRleHRfdGltZV9maWVsZHNfYXJyLmxlbmd0aDsgdGYrKyApe1xyXG5cclxuXHRcdFx0dmFyIHRleHRfanF1ZXJ5ID0galF1ZXJ5KCAnI2Jvb2tpbmdfZm9ybScgKyByZXNvdXJjZV9pZCArICcgJyArIHRleHRfdGltZV9maWVsZHNfYXJyWyB0ZiBdICk7XHRcdFx0XHRcdFx0XHRcdC8vIEV4Y2x1ZGUgY29uZGl0aW9uYWwgIGZpZWxkcywgIGJlY2F1c2Ugb2YgdXNpbmcgJyNib29raW5nX2Zvcm0zIC4uLidcclxuXHRcdFx0aWYgKCB0ZXh0X2pxdWVyeS5sZW5ndGggPiAwICl7XHJcblxyXG5cdFx0XHRcdHZhciB0aW1lX19oX21fX2FyciA9IHRleHRfanF1ZXJ5LnZhbCgpLnRyaW0oKS5zcGxpdCggJzonICk7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vICcxNDowMCdcclxuXHRcdFx0XHRpZiAoIDAgPT0gdGltZV9faF9tX19hcnIubGVuZ3RoICl7XHJcblx0XHRcdFx0XHRjb250aW51ZTtcdFx0XHRcdFx0XHRcdFx0XHQvLyBOb3QgZW50ZXJlZCB0aW1lIHZhbHVlIGluIGEgZmllbGRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCAxID09IHRpbWVfX2hfbV9fYXJyLmxlbmd0aCApe1xyXG5cdFx0XHRcdFx0aWYgKCAnJyA9PT0gdGltZV9faF9tX19hcnJbIDAgXSApe1xyXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcdFx0XHRcdFx0XHRcdFx0Ly8gTm90IGVudGVyZWQgdGltZSB2YWx1ZSBpbiBhIGZpZWxkXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aW1lX19oX21fX2FyclsgMSBdID0gMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dmFyIHRleHRfdGltZV9pbl9zZWNvbmRzID0gcGFyc2VJbnQoIHRpbWVfX2hfbV9fYXJyWyAwIF0gKSAqIDYwICogNjAgKyBwYXJzZUludCggdGltZV9faF9tX19hcnJbIDEgXSApICogNjA7XHJcblxyXG5cdFx0XHRcdHZhciB0ZXh0X3RpbWVzX2FzX3NlY29uZHMgPSBbXTtcclxuXHRcdFx0XHR0ZXh0X3RpbWVzX2FzX3NlY29uZHMucHVzaCggdGV4dF90aW1lX2luX3NlY29uZHMgKTtcclxuXHJcblx0XHRcdFx0dGltZV9maWVsZHNfb2JqX2Fyci5wdXNoKCB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbmFtZScgICAgICAgICAgICA6IHRleHRfanF1ZXJ5LmF0dHIoICduYW1lJyApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3ZhbHVlX29wdGlvbl8yNGgnOiB0ZXh0X2pxdWVyeS52YWwoKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdqcXVlcnlfb3B0aW9uJyAgIDogdGV4dF9qcXVlcnksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndGltZXNfYXNfc2Vjb25kcyc6IHRleHRfdGltZXNfYXNfc2Vjb25kc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB0aW1lX2ZpZWxkc19vYmpfYXJyO1xyXG5cdH1cclxuXHJcblxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFMgVSBQIFAgTyBSIFQgICAgZm9yICAgIEMgQSBMIEUgTiBEIEEgUlxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IENhbGVuZGFyIGRhdGVwaWNrICBJbnN0YW5jZVxyXG5cdCAqIEBwYXJhbSByZXNvdXJjZV9pZCAgb2YgYm9va2luZyByZXNvdXJjZVxyXG5cdCAqIEByZXR1cm5zIHsqfG51bGx9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19jYWxlbmRhcl9fZ2V0X2luc3QoIHJlc291cmNlX2lkICl7XHJcblxyXG5cdFx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIChyZXNvdXJjZV9pZCkgKXtcclxuXHRcdFx0cmVzb3VyY2VfaWQgPSAnMSc7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCBqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCApLmxlbmd0aCA+IDAgKXtcclxuXHRcdFx0cmV0dXJuIGpRdWVyeS5kYXRlcGljay5fZ2V0SW5zdCggalF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS5nZXQoIDAgKSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVW5zZWxlY3QgIGFsbCBkYXRlcyBpbiBjYWxlbmRhciBhbmQgdmlzdWFsbHkgdXBkYXRlIHRoaXMgY2FsZW5kYXJcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSByZXNvdXJjZV9pZFx0XHRJRCBvZiBib29raW5nIHJlc291cmNlXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHRcdHRydWUgb24gc3VjY2VzcyB8IGZhbHNlLCAgaWYgbm8gc3VjaCAgY2FsZW5kYXJcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2NhbGVuZGFyX191bnNlbGVjdF9hbGxfZGF0ZXMoIHJlc291cmNlX2lkICl7XHJcblxyXG5cdFx0aWYgKCAndW5kZWZpbmVkJyA9PT0gdHlwZW9mIChyZXNvdXJjZV9pZCkgKXtcclxuXHRcdFx0cmVzb3VyY2VfaWQgPSAnMSc7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGluc3QgPSB3cGJjX2NhbGVuZGFyX19nZXRfaW5zdCggcmVzb3VyY2VfaWQgKVxyXG5cclxuXHRcdGlmICggbnVsbCAhPT0gaW5zdCApe1xyXG5cclxuXHRcdFx0Ly8gVW5zZWxlY3QgYWxsIGRhdGVzIGFuZCBzZXQgIHByb3BlcnRpZXMgb2YgRGF0ZXBpY2tcclxuXHRcdFx0alF1ZXJ5KCAnI2RhdGVfYm9va2luZycgKyByZXNvdXJjZV9pZCApLnZhbCggJycgKTsgICAgICAvL0ZpeEluOiA1LjQuM1xyXG5cdFx0XHRpbnN0LnN0YXlPcGVuID0gZmFsc2U7XHJcblx0XHRcdGluc3QuZGF0ZXMgPSBbXTtcclxuXHRcdFx0alF1ZXJ5LmRhdGVwaWNrLl91cGRhdGVEYXRlcGljayggaW5zdCApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2xlYXIgZGF5cyBoaWdobGlnaHRpbmcgaW4gQWxsIG9yIHNwZWNpZmljIENhbGVuZGFyc1xyXG5cdCAqXHJcbiAgICAgKiBAcGFyYW0gcmVzb3VyY2VfaWQgIC0gY2FuIGJlIHNraXBlZCB0byAgY2xlYXIgaGlnaGxpZ2h0aW5nIGluIGFsbCBjYWxlbmRhcnNcclxuICAgICAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfY2FsZW5kYXJzX19jbGVhcl9kYXlzX2hpZ2hsaWdodGluZyggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHRpZiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YgKCByZXNvdXJjZV9pZCApICl7XHJcblxyXG5cdFx0XHRqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCArICcgLmRhdGVwaWNrLWRheXMtY2VsbC1vdmVyJyApLnJlbW92ZUNsYXNzKCAnZGF0ZXBpY2stZGF5cy1jZWxsLW92ZXInICk7XHRcdC8vIENsZWFyIGluIHNwZWNpZmljIGNhbGVuZGFyXHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0alF1ZXJ5KCAnLmRhdGVwaWNrLWRheXMtY2VsbC1vdmVyJyApLnJlbW92ZUNsYXNzKCAnZGF0ZXBpY2stZGF5cy1jZWxsLW92ZXInICk7XHRcdFx0XHRcdFx0XHRcdC8vIENsZWFyIGluIGFsbCBjYWxlbmRhcnNcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNjcm9sbCB0byBzcGVjaWZpYyBtb250aCBpbiBjYWxlbmRhclxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHRcdElEIG9mIHJlc291cmNlXHJcblx0ICogQHBhcmFtIHllYXJcdFx0XHRcdC0gcmVhbCB5ZWFyICAtIDIwMjNcclxuXHQgKiBAcGFyYW0gbW9udGhcdFx0XHRcdC0gcmVhbCBtb250aCAtIDEyXHJcblx0ICogQHJldHVybnMge2Jvb2xlYW59XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19jYWxlbmRhcl9fc2Nyb2xsX3RvKCByZXNvdXJjZV9pZCwgeWVhciwgbW9udGggKXtcclxuXHJcblx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKHJlc291cmNlX2lkKSApeyByZXNvdXJjZV9pZCA9ICcxJzsgfVxyXG5cdFx0dmFyIGluc3QgPSB3cGJjX2NhbGVuZGFyX19nZXRfaW5zdCggcmVzb3VyY2VfaWQgKVxyXG5cdFx0aWYgKCBudWxsICE9PSBpbnN0ICl7XHJcblxyXG5cdFx0XHR5ZWFyICA9IHBhcnNlSW50KCB5ZWFyICk7XHJcblx0XHRcdG1vbnRoID0gcGFyc2VJbnQoIG1vbnRoICkgLSAxO1x0XHQvLyBJbiBKUyBkYXRlLCAgbW9udGggLTFcclxuXHJcblx0XHRcdGluc3QuY3Vyc29yRGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdC8vIEluIHNvbWUgY2FzZXMsICB0aGUgc2V0RnVsbFllYXIgY2FuICBzZXQgIG9ubHkgWWVhciwgIGFuZCBub3QgdGhlIE1vbnRoIGFuZCBkYXkgICAgICAvL0ZpeEluOjYuMi4zLjVcclxuXHRcdFx0aW5zdC5jdXJzb3JEYXRlLnNldEZ1bGxZZWFyKCB5ZWFyLCBtb250aCwgMSApO1xyXG5cdFx0XHRpbnN0LmN1cnNvckRhdGUuc2V0TW9udGgoIG1vbnRoICk7XHJcblx0XHRcdGluc3QuY3Vyc29yRGF0ZS5zZXREYXRlKCAxICk7XHJcblxyXG5cdFx0XHRpbnN0LmRyYXdNb250aCA9IGluc3QuY3Vyc29yRGF0ZS5nZXRNb250aCgpO1xyXG5cdFx0XHRpbnN0LmRyYXdZZWFyID0gaW5zdC5jdXJzb3JEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblxyXG5cdFx0XHRqUXVlcnkuZGF0ZXBpY2suX25vdGlmeUNoYW5nZSggaW5zdCApO1xyXG5cdFx0XHRqUXVlcnkuZGF0ZXBpY2suX2FkanVzdEluc3REYXRlKCBpbnN0ICk7XHJcblx0XHRcdGpRdWVyeS5kYXRlcGljay5fc2hvd0RhdGUoIGluc3QgKTtcclxuXHRcdFx0alF1ZXJ5LmRhdGVwaWNrLl91cGRhdGVEYXRlcGljayggaW5zdCApO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJcyB0aGlzIGRhdGUgc2VsZWN0YWJsZSBpbiBjYWxlbmRhciAobWFpbmx5IGl0J3MgbWVhbnMgQVZBSUxBQkxFIGRhdGUpXHJcblx0ICpcclxuXHQgKiBAcGFyYW0ge2ludHxzdHJpbmd9IHJlc291cmNlX2lkXHRcdDFcclxuXHQgKiBAcGFyYW0ge3N0cmluZ30gc3FsX2NsYXNzX2RheVx0XHQnMjAyMy0wOC0xMSdcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cdFx0XHRcdFx0dHJ1ZSB8IGZhbHNlXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19pc190aGlzX2RheV9zZWxlY3RhYmxlKCByZXNvdXJjZV9pZCwgc3FsX2NsYXNzX2RheSApe1xyXG5cclxuXHRcdC8vIEdldCBEYXRhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHR2YXIgZGF0ZV9ib29raW5nc19vYmogPSBfd3BiYy5ib29raW5nc19pbl9jYWxlbmRhcl9fZ2V0X2Zvcl9kYXRlKCByZXNvdXJjZV9pZCwgc3FsX2NsYXNzX2RheSApO1xyXG5cclxuXHRcdHZhciBpc19kYXlfc2VsZWN0YWJsZSA9ICggcGFyc2VJbnQoIGRhdGVfYm9va2luZ3Nfb2JqWyAnZGF5X2F2YWlsYWJpbGl0eScgXSApID4gMCApO1xyXG5cclxuXHRcdGlmICggJ2F2YWlsYWJsZScgIT0gZGF0ZV9ib29raW5nc19vYmpbICdzdW1tYXJ5J11bJ3N0YXR1c19mb3JfZGF5JyBdICl7XHJcblxyXG5cdFx0XHR2YXIgaXNfc2V0X3BlbmRpbmdfZGF5c19zZWxlY3RhYmxlID0gX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdwZW5kaW5nX2RheXNfc2VsZWN0YWJsZScgKTtcdFx0Ly8gc2V0IHBlbmRpbmcgZGF5cyBzZWxlY3RhYmxlICAgICAgICAgIC8vRml4SW46IDguNi4xLjE4XHJcblxyXG5cdFx0XHRzd2l0Y2ggKCBkYXRlX2Jvb2tpbmdzX29ialsgJ3N1bW1hcnknXVsnc3RhdHVzX2Zvcl9ib29raW5ncycgXSApe1xyXG5cdFx0XHRcdGNhc2UgJ3BlbmRpbmcnOlxyXG5cdFx0XHRcdC8vIFNpdHVhdGlvbnMgZm9yIFwiY2hhbmdlLW92ZXJcIiBkYXlzOlxyXG5cdFx0XHRcdGNhc2UgJ3BlbmRpbmdfcGVuZGluZyc6XHJcblx0XHRcdFx0Y2FzZSAncGVuZGluZ19hcHByb3ZlZCc6XHJcblx0XHRcdFx0Y2FzZSAnYXBwcm92ZWRfcGVuZGluZyc6XHJcblx0XHRcdFx0XHRpc19kYXlfc2VsZWN0YWJsZSA9IChpc19kYXlfc2VsZWN0YWJsZSkgPyB0cnVlIDogaXNfc2V0X3BlbmRpbmdfZGF5c19zZWxlY3RhYmxlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBpc19kYXlfc2VsZWN0YWJsZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIGRhdGUgdG8gY2hlY2sgSU4gYXJyYXkgb2Ygc2VsZWN0ZWQgZGF0ZXNcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSB7ZGF0ZX1qc19kYXRlX3RvX2NoZWNrXHRcdC0gSlMgRGF0ZVx0XHRcdC0gc2ltcGxlICBKYXZhU2NyaXB0IERhdGUgb2JqZWN0XHJcblx0ICogQHBhcmFtIHtbXX0ganNfZGF0ZXNfYXJyXHRcdFx0LSBbIEpTRGF0ZSwgLi4uIF0gICAtIGFycmF5ICBvZiBKUyBkYXRlc1xyXG5cdCAqIEByZXR1cm5zIHtib29sZWFufVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfaXNfdGhpc19kYXlfYW1vbmdfc2VsZWN0ZWRfZGF5cygganNfZGF0ZV90b19jaGVjaywganNfZGF0ZXNfYXJyICl7XHJcblxyXG5cdFx0Zm9yICggdmFyIGRhdGVfaW5kZXggPSAwOyBkYXRlX2luZGV4IDwganNfZGF0ZXNfYXJyLmxlbmd0aCA7IGRhdGVfaW5kZXgrKyApeyAgICAgXHRcdFx0XHRcdFx0XHRcdFx0Ly9GaXhJbjogOC40LjUuMTZcclxuXHRcdFx0aWYgKCAoIGpzX2RhdGVzX2FyclsgZGF0ZV9pbmRleCBdLmdldEZ1bGxZZWFyKCkgPT09IGpzX2RhdGVfdG9fY2hlY2suZ2V0RnVsbFllYXIoKSApICYmXHJcblx0XHRcdFx0ICgganNfZGF0ZXNfYXJyWyBkYXRlX2luZGV4IF0uZ2V0TW9udGgoKSA9PT0ganNfZGF0ZV90b19jaGVjay5nZXRNb250aCgpICkgJiZcclxuXHRcdFx0XHQgKCBqc19kYXRlc19hcnJbIGRhdGVfaW5kZXggXS5nZXREYXRlKCkgPT09IGpzX2RhdGVfdG9fY2hlY2suZ2V0RGF0ZSgpICkgKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAgZmFsc2U7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgU1FMIENsYXNzIERhdGUgJzIwMjMtMDgtMDEnIGZyb20gIEpTIERhdGVcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBkYXRlXHRcdFx0XHRKUyBEYXRlXHJcblx0ICogQHJldHVybnMge3N0cmluZ31cdFx0JzIwMjMtMDgtMTInXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19fZ2V0X19zcWxfY2xhc3NfZGF0ZSggZGF0ZSApe1xyXG5cclxuXHRcdHZhciBzcWxfY2xhc3NfZGF5ID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgJy0nO1xyXG5cdFx0XHRzcWxfY2xhc3NfZGF5ICs9ICggKCBkYXRlLmdldE1vbnRoKCkgKyAxICkgPCAxMCApID8gJzAnIDogJyc7XHJcblx0XHRcdHNxbF9jbGFzc19kYXkgKz0gKCBkYXRlLmdldE1vbnRoKCkgKyAxICkgKyAnLSdcclxuXHRcdFx0c3FsX2NsYXNzX2RheSArPSAoIGRhdGUuZ2V0RGF0ZSgpIDwgMTAgKSA/ICcwJyA6ICcnO1xyXG5cdFx0XHRzcWxfY2xhc3NfZGF5ICs9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cclxuXHRcdFx0cmV0dXJuIHNxbF9jbGFzc19kYXk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgVEQgQ2xhc3MgRGF0ZSAnMS0zMS0yMDIzJyBmcm9tICBKUyBEYXRlXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gZGF0ZVx0XHRcdFx0SlMgRGF0ZVxyXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XHRcdCcxLTMxLTIwMjMnXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19fZ2V0X190ZF9jbGFzc19kYXRlKCBkYXRlICl7XHJcblxyXG5cdFx0dmFyIHRkX2NsYXNzX2RheSA9IChkYXRlLmdldE1vbnRoKCkgKyAxKSArICctJyArIGRhdGUuZ2V0RGF0ZSgpICsgJy0nICsgZGF0ZS5nZXRGdWxsWWVhcigpO1x0XHRcdFx0XHRcdFx0XHQvLyAnMS05LTIwMjMnXHJcblxyXG5cdFx0cmV0dXJuIHRkX2NsYXNzX2RheTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCBkYXRlIHBhcmFtcyBmcm9tICBzdHJpbmcgZGF0ZVxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGRhdGVcdFx0XHRzdHJpbmcgZGF0ZSBsaWtlICczMS41LjIwMjMnXHJcblx0ICogQHBhcmFtIHNlcGFyYXRvclx0XHRkZWZhdWx0ICcuJyAgY2FuIGJlIHNraXBwZWQuXHJcblx0ICogQHJldHVybnMgeyAge2RhdGU6IG51bWJlciwgbW9udGg6IG51bWJlciwgeWVhcjogbnVtYmVyfSAgfVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfX2dldF9fZGF0ZV9wYXJhbXNfX2Zyb21fc3RyaW5nX2RhdGUoIGRhdGUgLCBzZXBhcmF0b3Ipe1xyXG5cclxuXHRcdHNlcGFyYXRvciA9ICggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAoc2VwYXJhdG9yKSApID8gc2VwYXJhdG9yIDogJy4nO1xyXG5cclxuXHRcdHZhciBkYXRlX2FyciA9IGRhdGUuc3BsaXQoIHNlcGFyYXRvciApO1xyXG5cdFx0dmFyIGRhdGVfb2JqID0ge1xyXG5cdFx0XHQneWVhcicgOiAgcGFyc2VJbnQoIGRhdGVfYXJyWyAyIF0gKSxcclxuXHRcdFx0J21vbnRoJzogKHBhcnNlSW50KCBkYXRlX2FyclsgMSBdICkgLSAxKSxcclxuXHRcdFx0J2RhdGUnIDogIHBhcnNlSW50KCBkYXRlX2FyclsgMCBdIClcclxuXHRcdH07XHJcblx0XHRyZXR1cm4gZGF0ZV9vYmo7XHRcdC8vIGZvciBcdFx0ID0gbmV3IERhdGUoIGRhdGVfb2JqLnllYXIgLCBkYXRlX29iai5tb250aCAsIGRhdGVfb2JqLmRhdGUgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFkZCBTcGluIExvYWRlciB0byAgY2FsZW5kYXJcclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2NhbGVuZGFyX19sb2FkaW5nX19zdGFydCggcmVzb3VyY2VfaWQgKXtcclxuXHRcdGlmICggISBqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCApLm5leHQoKS5oYXNDbGFzcyggJ3dwYmNfc3BpbnNfbG9hZGVyX3dyYXBwZXInICkgKXtcclxuXHRcdFx0alF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS5hZnRlciggJzxkaXYgY2xhc3M9XCJ3cGJjX3NwaW5zX2xvYWRlcl93cmFwcGVyXCI+PGRpdiBjbGFzcz1cIndwYmNfc3BpbnNfbG9hZGVyXCI+PC9kaXY+PC9kaXY+JyApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCAhIGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkuaGFzQ2xhc3MoICd3cGJjX2NhbGVuZGFyX2JsdXJfc21hbGwnICkgKXtcclxuXHRcdFx0alF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS5hZGRDbGFzcyggJ3dwYmNfY2FsZW5kYXJfYmx1cl9zbWFsbCcgKTtcclxuXHRcdH1cclxuXHRcdHdwYmNfY2FsZW5kYXJfX2JsdXJfX3N0YXJ0KCByZXNvdXJjZV9pZCApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlIFNwaW4gTG9hZGVyIHRvICBjYWxlbmRhclxyXG5cdCAqIEBwYXJhbSByZXNvdXJjZV9pZFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfY2FsZW5kYXJfX2xvYWRpbmdfX3N0b3AoIHJlc291cmNlX2lkICl7XHJcblx0XHRqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCArICcgKyAud3BiY19zcGluc19sb2FkZXJfd3JhcHBlcicgKS5yZW1vdmUoKTtcclxuXHRcdGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkucmVtb3ZlQ2xhc3MoICd3cGJjX2NhbGVuZGFyX2JsdXJfc21hbGwnICk7XHJcblx0XHR3cGJjX2NhbGVuZGFyX19ibHVyX19zdG9wKCByZXNvdXJjZV9pZCApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQWRkIEJsdXIgdG8gIGNhbGVuZGFyXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19jYWxlbmRhcl9fYmx1cl9fc3RhcnQoIHJlc291cmNlX2lkICl7XHJcblx0XHRpZiAoICEgalF1ZXJ5KCAnI2NhbGVuZGFyX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS5oYXNDbGFzcyggJ3dwYmNfY2FsZW5kYXJfYmx1cicgKSApe1xyXG5cdFx0XHRqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCApLmFkZENsYXNzKCAnd3BiY19jYWxlbmRhcl9ibHVyJyApO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVtb3ZlIEJsdXIgaW4gIGNhbGVuZGFyXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19jYWxlbmRhcl9fYmx1cl9fc3RvcCggcmVzb3VyY2VfaWQgKXtcclxuXHRcdGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkucmVtb3ZlQ2xhc3MoICd3cGJjX2NhbGVuZGFyX2JsdXInICk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgTG9vayAgb2YgY2FsZW5kYXJcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSByZXNvdXJjZV9pZFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfY2FsZW5kYXJfX3VwZGF0ZV9sb29rKCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRcdHZhciBpbnN0ID0gd3BiY19jYWxlbmRhcl9fZ2V0X2luc3QoIHJlc291cmNlX2lkICk7XHJcblxyXG5cdFx0alF1ZXJ5LmRhdGVwaWNrLl91cGRhdGVEYXRlcGljayggaW5zdCApO1xyXG5cdH1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gUyBVIFAgUCBPIFIgVCAgICBNIEEgVCBIXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogTWVyZ2Ugc2V2ZXJhbCAgaW50ZXJzZWN0ZWQgaW50ZXJ2YWxzIG9yIHJldHVybiBub3QgaW50ZXJzZWN0ZWQ6ICAgICAgICAgICAgICAgICAgICAgICAgW1sxLDNdLFsyLDZdLFs4LDEwXSxbMTUsMThdXSAgLT4gICBbWzEsNl0sWzgsMTBdLFsxNSwxOF1dXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIFtdIGludGVydmFsc1x0XHRcdCBbIFsxLDNdLFsyLDRdLFs2LDhdLFs5LDEwXSxbMyw3XSBdXHJcblx0XHQgKiBAcmV0dXJucyBbXVx0XHRcdFx0XHQgWyBbMSw4XSxbOSwxMF0gXVxyXG5cdFx0ICpcclxuXHRcdCAqIEV4bWFtcGxlOiB3cGJjX2ludGVydmFsc19fbWVyZ2VfaW5lcnNlY3RlZCggIFsgWzEsM10sWzIsNF0sWzYsOF0sWzksMTBdLFszLDddIF0gICk7XHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHdwYmNfaW50ZXJ2YWxzX19tZXJnZV9pbmVyc2VjdGVkKCBpbnRlcnZhbHMgKXtcclxuXHJcblx0XHRcdGlmICggISBpbnRlcnZhbHMgfHwgaW50ZXJ2YWxzLmxlbmd0aCA9PT0gMCApe1xyXG5cdFx0XHRcdHJldHVybiBbXTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG1lcmdlZCA9IFtdO1xyXG5cdFx0XHRpbnRlcnZhbHMuc29ydCggZnVuY3Rpb24gKCBhLCBiICl7XHJcblx0XHRcdFx0cmV0dXJuIGFbIDAgXSAtIGJbIDAgXTtcclxuXHRcdFx0fSApO1xyXG5cclxuXHRcdFx0dmFyIG1lcmdlZEludGVydmFsID0gaW50ZXJ2YWxzWyAwIF07XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IDE7IGkgPCBpbnRlcnZhbHMubGVuZ3RoOyBpKysgKXtcclxuXHRcdFx0XHR2YXIgaW50ZXJ2YWwgPSBpbnRlcnZhbHNbIGkgXTtcclxuXHJcblx0XHRcdFx0aWYgKCBpbnRlcnZhbFsgMCBdIDw9IG1lcmdlZEludGVydmFsWyAxIF0gKXtcclxuXHRcdFx0XHRcdG1lcmdlZEludGVydmFsWyAxIF0gPSBNYXRoLm1heCggbWVyZ2VkSW50ZXJ2YWxbIDEgXSwgaW50ZXJ2YWxbIDEgXSApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRtZXJnZWQucHVzaCggbWVyZ2VkSW50ZXJ2YWwgKTtcclxuXHRcdFx0XHRcdG1lcmdlZEludGVydmFsID0gaW50ZXJ2YWw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRtZXJnZWQucHVzaCggbWVyZ2VkSW50ZXJ2YWwgKTtcclxuXHRcdFx0cmV0dXJuIG1lcmdlZDtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBJcyAyIGludGVydmFscyBpbnRlcnNlY3RlZDogICAgICAgWzM2MDExLCA4NjM5Ml0gICAgPD0+ICAgIFsxLCA0MzE5Ml0gID0+ICB0cnVlICAgICAgKCBpbnRlcnNlY3RlZCApXHJcblx0XHQgKlxyXG5cdFx0ICogR29vZCBleHBsYW5hdGlvbiAgaGVyZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMjY5NDM0L3doYXRzLXRoZS1tb3N0LWVmZmljaWVudC13YXktdG8tdGVzdC1pZi10d28tcmFuZ2VzLW92ZXJsYXBcclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0gIGludGVydmFsX0EgICAtIFsgMzYwMTEsIDg2MzkyIF1cclxuXHRcdCAqIEBwYXJhbSAgaW50ZXJ2YWxfQiAgIC0gWyAgICAgMSwgNDMxOTIgXVxyXG5cdFx0ICpcclxuXHRcdCAqIEByZXR1cm4gYm9vbFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB3cGJjX2ludGVydmFsc19faXNfaW50ZXJzZWN0ZWQoIGludGVydmFsX0EsIGludGVydmFsX0IgKSB7XHJcblxyXG5cdFx0XHRpZiAoXHJcblx0XHRcdFx0XHQoIDAgPT0gaW50ZXJ2YWxfQS5sZW5ndGggKVxyXG5cdFx0XHRcdCB8fCAoIDAgPT0gaW50ZXJ2YWxfQi5sZW5ndGggKVxyXG5cdFx0XHQpe1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0aW50ZXJ2YWxfQVsgMCBdID0gcGFyc2VJbnQoIGludGVydmFsX0FbIDAgXSApO1xyXG5cdFx0XHRpbnRlcnZhbF9BWyAxIF0gPSBwYXJzZUludCggaW50ZXJ2YWxfQVsgMSBdICk7XHJcblx0XHRcdGludGVydmFsX0JbIDAgXSA9IHBhcnNlSW50KCBpbnRlcnZhbF9CWyAwIF0gKTtcclxuXHRcdFx0aW50ZXJ2YWxfQlsgMSBdID0gcGFyc2VJbnQoIGludGVydmFsX0JbIDEgXSApO1xyXG5cclxuXHRcdFx0dmFyIGlzX2ludGVyc2VjdGVkID0gTWF0aC5tYXgoIGludGVydmFsX0FbIDAgXSwgaW50ZXJ2YWxfQlsgMCBdICkgLSBNYXRoLm1pbiggaW50ZXJ2YWxfQVsgMSBdLCBpbnRlcnZhbF9CWyAxIF0gKTtcclxuXHJcblx0XHRcdC8vIGlmICggMCA9PSBpc19pbnRlcnNlY3RlZCApIHtcclxuXHRcdFx0Ly9cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1Y2ggcmFuZ2VzIGdvaW5nIG9uZSBhZnRlciBvdGhlciwgZS5nLjogWyAxMiwgMTUgXSBhbmQgWyAxNSwgMjEgXVxyXG5cdFx0XHQvLyB9XHJcblxyXG5cdFx0XHRpZiAoIGlzX2ludGVyc2VjdGVkIDwgMCApIHtcclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgICAvLyBJTlRFUlNFQ1RFRFxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7ICAgICAgICAgICAgICAgICAgICAgICAvLyBOb3QgaW50ZXJzZWN0ZWRcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBHZXQgdGhlIGNsb3NldHMgQUJTIHZhbHVlIG9mIGVsZW1lbnQgaW4gYXJyYXkgdG8gdGhlIGN1cnJlbnQgbXlWYWx1ZVxyXG5cdFx0ICpcclxuXHRcdCAqIEBwYXJhbSBteVZhbHVlIFx0LSBpbnQgZWxlbWVudCB0byBzZWFyY2ggY2xvc2V0IFx0XHRcdDRcclxuXHRcdCAqIEBwYXJhbSBteUFycmF5XHQtIGFycmF5IG9mIGVsZW1lbnRzIHdoZXJlIHRvIHNlYXJjaCBcdFs1LDgsMSw3XVxyXG5cdFx0ICogQHJldHVybnMgaW50XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0NVxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB3cGJjX2dldF9hYnNfY2xvc2VzdF92YWx1ZV9pbl9hcnIoIG15VmFsdWUsIG15QXJyYXkgKXtcclxuXHJcblx0XHRcdGlmICggbXlBcnJheS5sZW5ndGggPT0gMCApeyBcdFx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlIGFycmF5IGlzIGVtcHR5IC0+IHJldHVybiAgdGhlIG15VmFsdWVcclxuXHRcdFx0XHRyZXR1cm4gbXlWYWx1ZTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0dmFyIG9iaiA9IG15QXJyYXlbIDAgXTtcclxuXHRcdFx0dmFyIGRpZmYgPSBNYXRoLmFicyggbXlWYWx1ZSAtIG9iaiApOyAgICAgICAgICAgICBcdC8vIEdldCBkaXN0YW5jZSBiZXR3ZWVuICAxc3QgZWxlbWVudFxyXG5cdFx0XHR2YXIgY2xvc2V0VmFsdWUgPSBteUFycmF5WyAwIF07ICAgICAgICAgICAgICAgICAgIFx0XHRcdC8vIFNhdmUgMXN0IGVsZW1lbnRcclxuXHJcblx0XHRcdGZvciAoIHZhciBpID0gMTsgaSA8IG15QXJyYXkubGVuZ3RoOyBpKysgKXtcclxuXHRcdFx0XHRvYmogPSBteUFycmF5WyBpIF07XHJcblxyXG5cdFx0XHRcdGlmICggTWF0aC5hYnMoIG15VmFsdWUgLSBvYmogKSA8IGRpZmYgKXsgICAgIFx0XHRcdC8vIHdlIGZvdW5kIGNsb3NlciB2YWx1ZSAtPiBzYXZlIGl0XHJcblx0XHRcdFx0XHRkaWZmID0gTWF0aC5hYnMoIG15VmFsdWUgLSBvYmogKTtcclxuXHRcdFx0XHRcdGNsb3NldFZhbHVlID0gb2JqO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGNsb3NldFZhbHVlO1xyXG5cdFx0fVxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgVCBPIE8gTCBUIEkgUCBTXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHQvKipcclxuXHQgKiBEZWZpbmUgdG9vbHRpcCB0byBzaG93LCAgd2hlbiAgbW91c2Ugb3ZlciBEYXRlIGluIENhbGVuZGFyXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gIHRvb2x0aXBfdGV4dFx0XHRcdC0gVGV4dCB0byBzaG93XHRcdFx0XHQnQm9va2VkIHRpbWU6IDEyOjAwIC0gMTM6MDA8YnI+Q29zdDogJDIwLjAwJ1xyXG5cdCAqIEBwYXJhbSAgcmVzb3VyY2VfaWRcdFx0XHQtIElEIG9mIGJvb2tpbmcgcmVzb3VyY2VcdCcxJ1xyXG5cdCAqIEBwYXJhbSAgdGRfY2xhc3NcdFx0XHRcdC0gU1FMIGNsYXNzXHRcdFx0XHRcdCcxLTktMjAyMydcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cdFx0XHRcdFx0LSBkZWZpbmVkIHRvIHNob3cgb3Igbm90XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19zZXRfdG9vbHRpcF9fX2Zvcl9fY2FsZW5kYXJfZGF0ZSggdG9vbHRpcF90ZXh0LCByZXNvdXJjZV9pZCwgdGRfY2xhc3MgKXtcclxuXHJcblx0XHQvL1RPRE86IG1ha2UgZXNjYXBpbmcgb2YgdGV4dCBmb3IgcXVvdCBzeW1ib2xzLCAgYW5kIEpTL0hUTUwuLi5cclxuXHJcblx0XHRqUXVlcnkoICcjY2FsZW5kYXJfYm9va2luZycgKyByZXNvdXJjZV9pZCArICcgdGQuY2FsNGRhdGUtJyArIHRkX2NsYXNzICkuYXR0ciggJ2RhdGEtY29udGVudCcsIHRvb2x0aXBfdGV4dCApO1xyXG5cclxuXHRcdHZhciB0ZF9lbCA9IGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICsgJyB0ZC5jYWw0ZGF0ZS0nICsgdGRfY2xhc3MgKS5nZXQoIDAgKTtcdFx0XHRcdFx0Ly9GaXhJbjogOS4wLjEuMVxyXG5cclxuXHRcdGlmIChcclxuXHRcdFx0ICAgKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mKHRkX2VsKSApXHJcblx0XHRcdCYmICggdW5kZWZpbmVkID09IHRkX2VsLl90aXBweSApXHJcblx0XHRcdCYmICggJycgIT09IHRvb2x0aXBfdGV4dCApXHJcblx0XHQpe1xyXG5cclxuXHRcdFx0d3BiY190aXBweSggdGRfZWwgLCB7XHJcblx0XHRcdFx0XHRjb250ZW50KCByZWZlcmVuY2UgKXtcclxuXHJcblx0XHRcdFx0XHRcdHZhciBwb3BvdmVyX2NvbnRlbnQgPSByZWZlcmVuY2UuZ2V0QXR0cmlidXRlKCAnZGF0YS1jb250ZW50JyApO1xyXG5cclxuXHRcdFx0XHRcdFx0cmV0dXJuICc8ZGl2IGNsYXNzPVwicG9wb3ZlciBwb3BvdmVyX3RpcHB5XCI+J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQrICc8ZGl2IGNsYXNzPVwicG9wb3Zlci1jb250ZW50XCI+J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsgcG9wb3Zlcl9jb250ZW50XHJcblx0XHRcdFx0XHRcdFx0XHRcdCsgJzwvZGl2PidcclxuXHRcdFx0XHRcdFx0XHQgKyAnPC9kaXY+JztcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRhbGxvd0hUTUwgICAgICAgIDogdHJ1ZSxcclxuXHRcdFx0XHRcdHRyaWdnZXJcdFx0XHQgOiAnbW91c2VlbnRlciBmb2N1cycsXHJcblx0XHRcdFx0XHRpbnRlcmFjdGl2ZSAgICAgIDogZmFsc2UsXHJcblx0XHRcdFx0XHRoaWRlT25DbGljayAgICAgIDogdHJ1ZSxcclxuXHRcdFx0XHRcdGludGVyYWN0aXZlQm9yZGVyOiAxMCxcclxuXHRcdFx0XHRcdG1heFdpZHRoICAgICAgICAgOiA1NTAsXHJcblx0XHRcdFx0XHR0aGVtZSAgICAgICAgICAgIDogJ3dwYmMtdGlwcHktdGltZXMnLFxyXG5cdFx0XHRcdFx0cGxhY2VtZW50ICAgICAgICA6ICd0b3AnLFxyXG5cdFx0XHRcdFx0ZGVsYXlcdFx0XHQgOiBbNDAwLCAwXSxcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL0ZpeEluOiA5LjQuMi4yXHJcblx0XHRcdFx0XHQvL2RlbGF5XHRcdFx0IDogWzAsIDk5OTk5OTk5OTldLFx0XHRcdFx0XHRcdC8vIERlYnVnZSAgdG9vbHRpcFxyXG5cdFx0XHRcdFx0aWdub3JlQXR0cmlidXRlcyA6IHRydWUsXHJcblx0XHRcdFx0XHR0b3VjaFx0XHRcdCA6IHRydWUsXHRcdFx0XHRcdFx0XHRcdC8vWydob2xkJywgNTAwXSwgLy8gNTAwbXMgZGVsYXlcdFx0XHRcdC8vRml4SW46IDkuMi4xLjVcclxuXHRcdFx0XHRcdGFwcGVuZFRvOiAoKSA9PiBkb2N1bWVudC5ib2R5LFxyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJldHVybiAgdHJ1ZTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gIGZhbHNlO1xyXG5cdH1cclxuIiwiLyoqXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqXHRpbmNsdWRlcy9fX2pzL2NhbC9kYXlzX3NlbGVjdF9jdXN0b20uanNcclxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICovXHJcblxyXG4vL0ZpeEluOiA5LjguOS4yXHJcblxyXG4vKipcclxuICogUmUtSW5pdCBDYWxlbmRhciBhbmQgUmUtUmVuZGVyIGl0LlxyXG4gKlxyXG4gKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX19yZV9pbml0KCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHQvLyBSZW1vdmUgQ0xBU1MgIGZvciBhYmlsaXR5IHRvIHJlLXJlbmRlciBhbmQgcmVpbml0IGNhbGVuZGFyLlxyXG5cdGpRdWVyeSggJyNjYWxlbmRhcl9ib29raW5nJyArIHJlc291cmNlX2lkICkucmVtb3ZlQ2xhc3MoICdoYXNEYXRlcGljaycgKTtcclxuXHR3cGJjX2NhbGVuZGFyX3Nob3coIHJlc291cmNlX2lkICk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogUmUtSW5pdCBwcmV2aW91c2x5ICBzYXZlZCBkYXlzIHNlbGVjdGlvbiAgdmFyaWFibGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX2RheXNfc2VsZWN0X19yZV9pbml0KCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ3NhdmVkX3ZhcmlhYmxlX19fZGF5c19zZWxlY3RfaW5pdGlhbCdcclxuXHRcdCwge1xyXG5cdFx0XHQnZHluYW1pY19fZGF5c19taW4nICAgICAgICA6IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZHluYW1pY19fZGF5c19taW4nICksXHJcblx0XHRcdCdkeW5hbWljX19kYXlzX21heCcgICAgICAgIDogX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkeW5hbWljX19kYXlzX21heCcgKSxcclxuXHRcdFx0J2R5bmFtaWNfX2RheXNfc3BlY2lmaWMnICAgOiBfd3BiYy5jYWxlbmRhcl9fZ2V0X3BhcmFtX3ZhbHVlKCByZXNvdXJjZV9pZCwgJ2R5bmFtaWNfX2RheXNfc3BlY2lmaWMnICksXHJcblx0XHRcdCdkeW5hbWljX193ZWVrX2RheXNfX3N0YXJ0JzogX3dwYmMuY2FsZW5kYXJfX2dldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkeW5hbWljX193ZWVrX2RheXNfX3N0YXJ0JyApLFxyXG5cdFx0XHQnZml4ZWRfX2RheXNfbnVtJyAgICAgICAgICA6IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZml4ZWRfX2RheXNfbnVtJyApLFxyXG5cdFx0XHQnZml4ZWRfX3dlZWtfZGF5c19fc3RhcnQnICA6IF93cGJjLmNhbGVuZGFyX19nZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZml4ZWRfX3dlZWtfZGF5c19fc3RhcnQnIClcclxuXHRcdH1cclxuXHQpO1xyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBTZXQgU2luZ2xlIERheSBzZWxlY3Rpb24gLSBhZnRlciBwYWdlIGxvYWRcclxuICpcclxuICogQHBhcmFtIHJlc291cmNlX2lkXHRcdElEIG9mIGJvb2tpbmcgcmVzb3VyY2VcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX3JlYWR5X2RheXNfc2VsZWN0X19zaW5nbGUoIHJlc291cmNlX2lkICl7XHJcblxyXG5cdC8vIFJlLWRlZmluZSBzZWxlY3Rpb24sIG9ubHkgYWZ0ZXIgcGFnZSBsb2FkZWQgd2l0aCBhbGwgaW5pdCB2YXJzXHJcblx0alF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHRcdC8vIFdhaXQgMSBzZWNvbmQsIGp1c3QgdG8gIGJlIHN1cmUsIHRoYXQgYWxsIGluaXQgdmFycyBkZWZpbmVkXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHR3cGJjX2NhbF9kYXlzX3NlbGVjdF9fc2luZ2xlKCByZXNvdXJjZV9pZCApO1xyXG5cclxuXHRcdH0sIDEwMDApO1xyXG5cdH0pO1xyXG59XHJcblxyXG4vKipcclxuICogU2V0IFNpbmdsZSBEYXkgc2VsZWN0aW9uXHJcbiAqIENhbiBiZSBydW4gYXQgYW55ICB0aW1lLCAgd2hlbiAgY2FsZW5kYXIgZGVmaW5lZCAtIHVzZWZ1bCBmb3IgY29uc29sZSBydW4uXHJcbiAqXHJcbiAqIEBwYXJhbSByZXNvdXJjZV9pZFx0XHRJRCBvZiBib29raW5nIHJlc291cmNlXHJcbiAqL1xyXG5mdW5jdGlvbiB3cGJjX2NhbF9kYXlzX3NlbGVjdF9fc2luZ2xlKCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtZXRlcnMoIHJlc291cmNlX2lkLCB7J2RheXNfc2VsZWN0X21vZGUnOiAnc2luZ2xlJ30gKTtcclxuXHJcblx0d3BiY19jYWxfZGF5c19zZWxlY3RfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcblx0d3BiY19jYWxfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLyoqXHJcbiAqIFNldCBNdWx0aXBsZSBEYXlzIHNlbGVjdGlvbiAgLSBhZnRlciBwYWdlIGxvYWRcclxuICpcclxuICogQHBhcmFtIHJlc291cmNlX2lkXHRcdElEIG9mIGJvb2tpbmcgcmVzb3VyY2VcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX3JlYWR5X2RheXNfc2VsZWN0X19tdWx0aXBsZSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0Ly8gUmUtZGVmaW5lIHNlbGVjdGlvbiwgb25seSBhZnRlciBwYWdlIGxvYWRlZCB3aXRoIGFsbCBpbml0IHZhcnNcclxuXHRqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0Ly8gV2FpdCAxIHNlY29uZCwganVzdCB0byAgYmUgc3VyZSwgdGhhdCBhbGwgaW5pdCB2YXJzIGRlZmluZWRcclxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuXHJcblx0XHRcdHdwYmNfY2FsX2RheXNfc2VsZWN0X19tdWx0aXBsZSggcmVzb3VyY2VfaWQgKTtcclxuXHJcblx0XHR9LCAxMDAwKTtcclxuXHR9KTtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBTZXQgTXVsdGlwbGUgRGF5cyBzZWxlY3Rpb25cclxuICogQ2FuIGJlIHJ1biBhdCBhbnkgIHRpbWUsICB3aGVuICBjYWxlbmRhciBkZWZpbmVkIC0gdXNlZnVsIGZvciBjb25zb2xlIHJ1bi5cclxuICpcclxuICogQHBhcmFtIHJlc291cmNlX2lkXHRcdElEIG9mIGJvb2tpbmcgcmVzb3VyY2VcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX2RheXNfc2VsZWN0X19tdWx0aXBsZSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0X3dwYmMuY2FsZW5kYXJfX3NldF9wYXJhbWV0ZXJzKCByZXNvdXJjZV9pZCwgeydkYXlzX3NlbGVjdF9tb2RlJzogJ211bHRpcGxlJ30gKTtcclxuXHJcblx0d3BiY19jYWxfZGF5c19zZWxlY3RfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcblx0d3BiY19jYWxfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcbn1cclxuXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBTZXQgRml4ZWQgRGF5cyBzZWxlY3Rpb24gd2l0aCAgMSBtb3VzZSBjbGljayAgLSBhZnRlciBwYWdlIGxvYWRcclxuICpcclxuICogQGludGVnZXIgcmVzb3VyY2VfaWRcdFx0XHQtIDFcdFx0XHRcdCAgIC0tIElEIG9mIGJvb2tpbmcgcmVzb3VyY2UgKGNhbGVuZGFyKSAtXHJcbiAqIEBpbnRlZ2VyIGRheXNfbnVtYmVyXHRcdFx0LSAzXHRcdFx0XHQgICAtLSBudW1iZXIgb2YgZGF5cyB0byAgc2VsZWN0XHQtXHJcbiAqIEBhcnJheSB3ZWVrX2RheXNfX3N0YXJ0XHQtIFstMV0gfCBbIDEsIDVdICAgLS0gIHsgLTEgLSBBbnkgfCAwIC0gU3UsICAxIC0gTW8sICAyIC0gVHUsIDMgLSBXZSwgNCAtIFRoLCA1IC0gRnIsIDYgLSBTYXQgfVxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19jYWxfcmVhZHlfZGF5c19zZWxlY3RfX2ZpeGVkKCByZXNvdXJjZV9pZCwgZGF5c19udW1iZXIsIHdlZWtfZGF5c19fc3RhcnQgPSBbLTFdICl7XHJcblxyXG5cdC8vIFJlLWRlZmluZSBzZWxlY3Rpb24sIG9ubHkgYWZ0ZXIgcGFnZSBsb2FkZWQgd2l0aCBhbGwgaW5pdCB2YXJzXHJcblx0alF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cclxuXHRcdC8vIFdhaXQgMSBzZWNvbmQsIGp1c3QgdG8gIGJlIHN1cmUsIHRoYXQgYWxsIGluaXQgdmFycyBkZWZpbmVkXHJcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblxyXG5cdFx0XHR3cGJjX2NhbF9kYXlzX3NlbGVjdF9fZml4ZWQoIHJlc291cmNlX2lkLCBkYXlzX251bWJlciwgd2Vla19kYXlzX19zdGFydCApO1xyXG5cclxuXHRcdH0sIDEwMDApO1xyXG5cdH0pO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIFNldCBGaXhlZCBEYXlzIHNlbGVjdGlvbiB3aXRoICAxIG1vdXNlIGNsaWNrXHJcbiAqIENhbiBiZSBydW4gYXQgYW55ICB0aW1lLCAgd2hlbiAgY2FsZW5kYXIgZGVmaW5lZCAtIHVzZWZ1bCBmb3IgY29uc29sZSBydW4uXHJcbiAqXHJcbiAqIEBpbnRlZ2VyIHJlc291cmNlX2lkXHRcdFx0LSAxXHRcdFx0XHQgICAtLSBJRCBvZiBib29raW5nIHJlc291cmNlIChjYWxlbmRhcikgLVxyXG4gKiBAaW50ZWdlciBkYXlzX251bWJlclx0XHRcdC0gM1x0XHRcdFx0ICAgLS0gbnVtYmVyIG9mIGRheXMgdG8gIHNlbGVjdFx0LVxyXG4gKiBAYXJyYXkgd2Vla19kYXlzX19zdGFydFx0LSBbLTFdIHwgWyAxLCA1XSAgIC0tICB7IC0xIC0gQW55IHwgMCAtIFN1LCAgMSAtIE1vLCAgMiAtIFR1LCAzIC0gV2UsIDQgLSBUaCwgNSAtIEZyLCA2IC0gU2F0IH1cclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX2RheXNfc2VsZWN0X19maXhlZCggcmVzb3VyY2VfaWQsIGRheXNfbnVtYmVyLCB3ZWVrX2RheXNfX3N0YXJ0ID0gWy0xXSApe1xyXG5cclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtZXRlcnMoIHJlc291cmNlX2lkLCB7J2RheXNfc2VsZWN0X21vZGUnOiAnZml4ZWQnfSApO1xyXG5cclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtZXRlcnMoIHJlc291cmNlX2lkLCB7J2ZpeGVkX19kYXlzX251bSc6IHBhcnNlSW50KCBkYXlzX251bWJlciApfSApO1x0XHRcdC8vIE51bWJlciBvZiBkYXlzIHNlbGVjdGlvbiB3aXRoIDEgbW91c2UgY2xpY2tcclxuXHRfd3BiYy5jYWxlbmRhcl9fc2V0X3BhcmFtZXRlcnMoIHJlc291cmNlX2lkLCB7J2ZpeGVkX193ZWVrX2RheXNfX3N0YXJ0Jzogd2Vla19kYXlzX19zdGFydH0gKTsgXHQvLyB7IC0xIC0gQW55IHwgMCAtIFN1LCAgMSAtIE1vLCAgMiAtIFR1LCAzIC0gV2UsIDQgLSBUaCwgNSAtIEZyLCA2IC0gU2F0IH1cclxuXHJcblx0d3BiY19jYWxfZGF5c19zZWxlY3RfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcblx0d3BiY19jYWxfX3JlX2luaXQoIHJlc291cmNlX2lkICk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuLyoqXHJcbiAqIFNldCBSYW5nZSBEYXlzIHNlbGVjdGlvbiAgd2l0aCAgMiBtb3VzZSBjbGlja3MgIC0gYWZ0ZXIgcGFnZSBsb2FkXHJcbiAqXHJcbiAqIEBpbnRlZ2VyIHJlc291cmNlX2lkXHRcdFx0LSAxXHRcdFx0XHQgICBcdFx0LS0gSUQgb2YgYm9va2luZyByZXNvdXJjZSAoY2FsZW5kYXIpXHJcbiAqIEBpbnRlZ2VyIGRheXNfbWluXHRcdFx0LSA3XHRcdFx0XHQgICBcdFx0LS0gTWluIG51bWJlciBvZiBkYXlzIHRvIHNlbGVjdFxyXG4gKiBAaW50ZWdlciBkYXlzX21heFx0XHRcdC0gMzBcdFx0XHQgICBcdFx0LS0gTWF4IG51bWJlciBvZiBkYXlzIHRvIHNlbGVjdFxyXG4gKiBAYXJyYXkgZGF5c19zcGVjaWZpY1x0XHRcdC0gW10gfCBbNywxNCwyMSwyOF1cdFx0LS0gUmVzdHJpY3Rpb24gZm9yIFNwZWNpZmljIG51bWJlciBvZiBkYXlzIHNlbGVjdGlvblxyXG4gKiBAYXJyYXkgd2Vla19kYXlzX19zdGFydFx0XHQtIFstMV0gfCBbIDEsIDVdICAgXHRcdC0tICB7IC0xIC0gQW55IHwgMCAtIFN1LCAgMSAtIE1vLCAgMiAtIFR1LCAzIC0gV2UsIDQgLSBUaCwgNSAtIEZyLCA2IC0gU2F0IH1cclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfY2FsX3JlYWR5X2RheXNfc2VsZWN0X19yYW5nZSggcmVzb3VyY2VfaWQsIGRheXNfbWluLCBkYXlzX21heCwgZGF5c19zcGVjaWZpYyA9IFtdLCB3ZWVrX2RheXNfX3N0YXJ0ID0gWy0xXSApe1xyXG5cclxuXHQvLyBSZS1kZWZpbmUgc2VsZWN0aW9uLCBvbmx5IGFmdGVyIHBhZ2UgbG9hZGVkIHdpdGggYWxsIGluaXQgdmFyc1xyXG5cdGpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuXHJcblx0XHQvLyBXYWl0IDEgc2Vjb25kLCBqdXN0IHRvICBiZSBzdXJlLCB0aGF0IGFsbCBpbml0IHZhcnMgZGVmaW5lZFxyXG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xyXG5cclxuXHRcdFx0d3BiY19jYWxfZGF5c19zZWxlY3RfX3JhbmdlKCByZXNvdXJjZV9pZCwgZGF5c19taW4sIGRheXNfbWF4LCBkYXlzX3NwZWNpZmljLCB3ZWVrX2RheXNfX3N0YXJ0ICk7XHJcblx0XHR9LCAxMDAwKTtcclxuXHR9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFNldCBSYW5nZSBEYXlzIHNlbGVjdGlvbiAgd2l0aCAgMiBtb3VzZSBjbGlja3NcclxuICogQ2FuIGJlIHJ1biBhdCBhbnkgIHRpbWUsICB3aGVuICBjYWxlbmRhciBkZWZpbmVkIC0gdXNlZnVsIGZvciBjb25zb2xlIHJ1bi5cclxuICpcclxuICogQGludGVnZXIgcmVzb3VyY2VfaWRcdFx0XHQtIDFcdFx0XHRcdCAgIFx0XHQtLSBJRCBvZiBib29raW5nIHJlc291cmNlIChjYWxlbmRhcilcclxuICogQGludGVnZXIgZGF5c19taW5cdFx0XHQtIDdcdFx0XHRcdCAgIFx0XHQtLSBNaW4gbnVtYmVyIG9mIGRheXMgdG8gc2VsZWN0XHJcbiAqIEBpbnRlZ2VyIGRheXNfbWF4XHRcdFx0LSAzMFx0XHRcdCAgIFx0XHQtLSBNYXggbnVtYmVyIG9mIGRheXMgdG8gc2VsZWN0XHJcbiAqIEBhcnJheSBkYXlzX3NwZWNpZmljXHRcdFx0LSBbXSB8IFs3LDE0LDIxLDI4XVx0XHQtLSBSZXN0cmljdGlvbiBmb3IgU3BlY2lmaWMgbnVtYmVyIG9mIGRheXMgc2VsZWN0aW9uXHJcbiAqIEBhcnJheSB3ZWVrX2RheXNfX3N0YXJ0XHRcdC0gWy0xXSB8IFsgMSwgNV0gICBcdFx0LS0gIHsgLTEgLSBBbnkgfCAwIC0gU3UsICAxIC0gTW8sICAyIC0gVHUsIDMgLSBXZSwgNCAtIFRoLCA1IC0gRnIsIDYgLSBTYXQgfVxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19jYWxfZGF5c19zZWxlY3RfX3JhbmdlKCByZXNvdXJjZV9pZCwgZGF5c19taW4sIGRheXNfbWF4LCBkYXlzX3NwZWNpZmljID0gW10sIHdlZWtfZGF5c19fc3RhcnQgPSBbLTFdICl7XHJcblxyXG5cdF93cGJjLmNhbGVuZGFyX19zZXRfcGFyYW1ldGVycyggIHJlc291cmNlX2lkLCB7J2RheXNfc2VsZWN0X21vZGUnOiAnZHluYW1pYyd9ICApO1xyXG5cdF93cGJjLmNhbGVuZGFyX19zZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZHluYW1pY19fZGF5c19taW4nICAgICAgICAgLCBwYXJzZUludCggZGF5c19taW4gKSAgKTsgICAgICAgICAgIFx0XHQvLyBNaW4uIE51bWJlciBvZiBkYXlzIHNlbGVjdGlvbiB3aXRoIDIgbW91c2UgY2xpY2tzXHJcblx0X3dwYmMuY2FsZW5kYXJfX3NldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkeW5hbWljX19kYXlzX21heCcgICAgICAgICAsIHBhcnNlSW50KCBkYXlzX21heCApICApOyAgICAgICAgICBcdFx0Ly8gTWF4LiBOdW1iZXIgb2YgZGF5cyBzZWxlY3Rpb24gd2l0aCAyIG1vdXNlIGNsaWNrc1xyXG5cdF93cGJjLmNhbGVuZGFyX19zZXRfcGFyYW1fdmFsdWUoIHJlc291cmNlX2lkLCAnZHluYW1pY19fZGF5c19zcGVjaWZpYycgICAgLCBkYXlzX3NwZWNpZmljICApO1x0ICAgICAgXHRcdFx0XHQvLyBFeGFtcGxlIFs1LDddXHJcblx0X3dwYmMuY2FsZW5kYXJfX3NldF9wYXJhbV92YWx1ZSggcmVzb3VyY2VfaWQsICdkeW5hbWljX193ZWVrX2RheXNfX3N0YXJ0JyAsIHdlZWtfZGF5c19fc3RhcnQgICk7ICBcdFx0XHRcdFx0Ly8geyAtMSAtIEFueSB8IDAgLSBTdSwgIDEgLSBNbywgIDIgLSBUdSwgMyAtIFdlLCA0IC0gVGgsIDUgLSBGciwgNiAtIFNhdCB9XHJcblxyXG5cdHdwYmNfY2FsX2RheXNfc2VsZWN0X19yZV9pbml0KCByZXNvdXJjZV9pZCApO1xyXG5cdHdwYmNfY2FsX19yZV9pbml0KCByZXNvdXJjZV9pZCApO1xyXG59XHJcbiIsIi8qKlxyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKlx0aW5jbHVkZXMvX19qcy9jYWxfYWp4X2xvYWQvd3BiY19jYWxfYWp4LmpzXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAqL1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vICBBIGogYSB4ICAgIEwgbyBhIGQgICAgQyBhIGwgZSBuIGQgYSByICAgIEQgYSB0IGFcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiB3cGJjX2NhbGVuZGFyX19sb2FkX2RhdGFfX2FqeCggcGFyYW1zICl7XHJcblxyXG5cdC8vRml4SW46IDkuOC42LjJcclxuXHR3cGJjX2NhbGVuZGFyX19sb2FkaW5nX19zdGFydCggcGFyYW1zWydyZXNvdXJjZV9pZCddICk7XHJcblx0aWYgKCB3cGJjX2JhbGFuY2VyX19pc193YWl0KCBwYXJhbXMgLCAnd3BiY19jYWxlbmRhcl9fbG9hZF9kYXRhX19hangnICkgKXtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdC8vRml4SW46IDkuOC42LjJcclxuXHR3cGJjX2NhbGVuZGFyX19ibHVyX19zdG9wKCBwYXJhbXNbJ3Jlc291cmNlX2lkJ10gKTtcclxuXHJcblxyXG4vLyBjb25zb2xlLmdyb3VwRW5kKCk7IGNvbnNvbGUudGltZSgncmVzb3VyY2VfaWRfJyArIHBhcmFtc1sncmVzb3VyY2VfaWQnXSk7XHJcbmNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQoICdXUEJDX0FKWF9DQUxFTkRBUl9MT0FEJyApOyBjb25zb2xlLmxvZyggJyA9PSBCZWZvcmUgQWpheCBTZW5kIC0gY2FsZW5kYXJzX2FsbF9fZ2V0KCkgPT0gJyAsIF93cGJjLmNhbGVuZGFyc19hbGxfX2dldCgpICk7XHJcblxyXG5cdC8vIFN0YXJ0IEFqYXhcclxuXHRqUXVlcnkucG9zdCggd3BiY19nbG9iYWwxLndwYmNfYWpheHVybCxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRhY3Rpb24gICAgICAgICAgOiAnV1BCQ19BSlhfQ0FMRU5EQVJfTE9BRCcsXHJcblx0XHRcdFx0XHR3cGJjX2FqeF91c2VyX2lkOiBfd3BiYy5nZXRfc2VjdXJlX3BhcmFtKCAndXNlcl9pZCcgKSxcclxuXHRcdFx0XHRcdG5vbmNlICAgICAgICAgICA6IF93cGJjLmdldF9zZWN1cmVfcGFyYW0oICdub25jZScgKSxcclxuXHRcdFx0XHRcdHdwYmNfYWp4X2xvY2FsZSA6IF93cGJjLmdldF9zZWN1cmVfcGFyYW0oICdsb2NhbGUnICksXHJcblxyXG5cdFx0XHRcdFx0Y2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMgOiBwYXJhbXMgXHRcdFx0XHRcdFx0Ly8gVXN1YWxseSBsaWtlOiB7ICdyZXNvdXJjZV9pZCc6IDEsICdtYXhfZGF5c19jb3VudCc6IDM2NSB9XHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0LyoqXHJcblx0XHRcdFx0ICogUyB1IGMgYyBlIHMgc1xyXG5cdFx0XHRcdCAqXHJcblx0XHRcdFx0ICogQHBhcmFtIHJlc3BvbnNlX2RhdGFcdFx0LVx0aXRzIG9iamVjdCByZXR1cm5lZCBmcm9tICBBamF4IC0gY2xhc3MtbGl2ZS1zZWFyY2gucGhwXHJcblx0XHRcdFx0ICogQHBhcmFtIHRleHRTdGF0dXNcdFx0LVx0J3N1Y2Nlc3MnXHJcblx0XHRcdFx0ICogQHBhcmFtIGpxWEhSXHRcdFx0XHQtXHRPYmplY3RcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHRmdW5jdGlvbiAoIHJlc3BvbnNlX2RhdGEsIHRleHRTdGF0dXMsIGpxWEhSICkge1xyXG4vLyBjb25zb2xlLnRpbWVFbmQoJ3Jlc291cmNlX2lkXycgKyByZXNwb25zZV9kYXRhWydyZXNvdXJjZV9pZCddKTtcclxuY29uc29sZS5sb2coICcgPT0gUmVzcG9uc2UgV1BCQ19BSlhfQ0FMRU5EQVJfTE9BRCA9PSAnLCByZXNwb25zZV9kYXRhICk7IGNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcblx0XHRcdFx0XHQvL0ZpeEluOiA5LjguNi4yXHJcblx0XHRcdFx0XHR2YXIgYWp4X3Bvc3RfZGF0YV9fcmVzb3VyY2VfaWQgPSB3cGJjX2dldF9yZXNvdXJjZV9pZF9fZnJvbV9hanhfcG9zdF9kYXRhX3VybCggdGhpcy5kYXRhICk7XHJcblx0XHRcdFx0XHR3cGJjX2JhbGFuY2VyX19jb21wbGV0ZWQoIGFqeF9wb3N0X2RhdGFfX3Jlc291cmNlX2lkICwgJ3dwYmNfY2FsZW5kYXJfX2xvYWRfZGF0YV9fYWp4JyApO1xyXG5cclxuXHRcdFx0XHRcdC8vIFByb2JhYmx5IEVycm9yXHJcblx0XHRcdFx0XHRpZiAoICh0eXBlb2YgcmVzcG9uc2VfZGF0YSAhPT0gJ29iamVjdCcpIHx8IChyZXNwb25zZV9kYXRhID09PSBudWxsKSApe1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGpxX25vZGUgID0gd3BiY19nZXRfY2FsZW5kYXJfX2pxX25vZGVfX2Zvcl9tZXNzYWdlcyggdGhpcy5kYXRhICk7XHJcblx0XHRcdFx0XHRcdHZhciBtZXNzYWdlX3R5cGUgPSAnaW5mbyc7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoICcnID09PSByZXNwb25zZV9kYXRhICl7XHJcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2VfZGF0YSA9ICdUaGUgc2VydmVyIHJlc3BvbmRzIHdpdGggYW4gZW1wdHkgc3RyaW5nLiBUaGUgc2VydmVyIHByb2JhYmx5IHN0b3BwZWQgd29ya2luZyB1bmV4cGVjdGVkbHkuIDxicj5QbGVhc2UgY2hlY2sgeW91ciA8c3Ryb25nPmVycm9yLmxvZzwvc3Ryb25nPiBpbiB5b3VyIHNlcnZlciBjb25maWd1cmF0aW9uIGZvciByZWxhdGl2ZSBlcnJvcnMuJztcclxuXHRcdFx0XHRcdFx0XHRtZXNzYWdlX3R5cGUgPSAnd2FybmluZyc7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8vIFNob3cgTWVzc2FnZVxyXG5cdFx0XHRcdFx0XHR3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCByZXNwb25zZV9kYXRhICwgeyAndHlwZScgICAgIDogbWVzc2FnZV90eXBlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJzogeydqcV9ub2RlJzoganFfbm9kZSwgJ3doZXJlJzogJ2FmdGVyJ30sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpc19hcHBlbmQnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc3R5bGUnICAgIDogJ3RleHQtYWxpZ246bGVmdDsnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgIDogMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gU2hvdyBDYWxlbmRhclxyXG5cdFx0XHRcdFx0d3BiY19jYWxlbmRhcl9fbG9hZGluZ19fc3RvcCggcmVzcG9uc2VfZGF0YVsgJ3Jlc291cmNlX2lkJyBdICk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHRcdFx0Ly8gQm9va2luZ3MgLSBEYXRlc1xyXG5cdFx0XHRcdFx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX3NldF9kYXRlcyggIHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXSwgcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWydkYXRlcyddICApO1xyXG5cclxuXHRcdFx0XHRcdC8vIEJvb2tpbmdzIC0gQ2hpbGQgb3Igb25seSBzaW5nbGUgYm9va2luZyByZXNvdXJjZSBpbiBkYXRlc1xyXG5cdFx0XHRcdFx0X3dwYmMuYm9va2luZ19fc2V0X3BhcmFtX3ZhbHVlKCByZXNwb25zZV9kYXRhWyAncmVzb3VyY2VfaWQnIF0sICdyZXNvdXJjZXNfaWRfYXJyX19pbl9kYXRlcycsIHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ3Jlc291cmNlc19pZF9hcnJfX2luX2RhdGVzJyBdICk7XHJcblxyXG5cdFx0XHRcdFx0Ly8gQWdncmVnYXRlIGJvb2tpbmcgcmVzb3VyY2VzLCAgaWYgYW55ID9cclxuXHRcdFx0XHRcdF93cGJjLmJvb2tpbmdfX3NldF9wYXJhbV92YWx1ZSggcmVzcG9uc2VfZGF0YVsgJ3Jlc291cmNlX2lkJyBdLCAnYWdncmVnYXRlX3Jlc291cmNlX2lkX2FycicsIHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2FnZ3JlZ2F0ZV9yZXNvdXJjZV9pZF9hcnInIF0gKTtcclxuXHRcdFx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdFx0XHQvLyBVcGRhdGUgY2FsZW5kYXJcclxuXHRcdFx0XHRcdHdwYmNfY2FsZW5kYXJfX3VwZGF0ZV9sb29rKCByZXNwb25zZV9kYXRhWyAncmVzb3VyY2VfaWQnIF0gKTtcclxuXHJcblxyXG5cdFx0XHRcdFx0aWYgKFxyXG5cdFx0XHRcdFx0XHRcdCggJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAocmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnYWp4X2FmdGVyX2FjdGlvbl9tZXNzYWdlJyBdKSApXHJcblx0XHRcdFx0XHRcdCAmJiAoICcnICE9IHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2FqeF9hZnRlcl9hY3Rpb25fbWVzc2FnZScgXS5yZXBsYWNlKCAvXFxuL2csIFwiPGJyIC8+XCIgKSApXHJcblx0XHRcdFx0XHQpe1xyXG5cclxuXHRcdFx0XHRcdFx0dmFyIGpxX25vZGUgID0gd3BiY19nZXRfY2FsZW5kYXJfX2pxX25vZGVfX2Zvcl9tZXNzYWdlcyggdGhpcy5kYXRhICk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBTaG93IE1lc3NhZ2VcclxuXHRcdFx0XHRcdFx0d3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZSggcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnYWp4X2FmdGVyX2FjdGlvbl9tZXNzYWdlJyBdLnJlcGxhY2UoIC9cXG4vZywgXCI8YnIgLz5cIiApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0eyAgICd0eXBlJyAgICAgOiAoICd1bmRlZmluZWQnICE9PSB0eXBlb2YoIHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2FqeF9hZnRlcl9hY3Rpb25fbWVzc2FnZV9zdGF0dXMnIF0gKSApXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgPyByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2Vfc3RhdHVzJyBdIDogJ2luZm8nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJzogeydqcV9ub2RlJzoganFfbm9kZSwgJ3doZXJlJzogJ2FmdGVyJ30sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpc19hcHBlbmQnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc3R5bGUnICAgIDogJ3RleHQtYWxpZ246bGVmdDsnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgIDogMTAwMDBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQvL2pRdWVyeSggJyNhamF4X3Jlc3BvbmQnICkuaHRtbCggcmVzcG9uc2VfZGF0YSApO1x0XHQvLyBGb3IgYWJpbGl0eSB0byBzaG93IHJlc3BvbnNlLCBhZGQgc3VjaCBESVYgZWxlbWVudCB0byBwYWdlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQgICkuZmFpbCggZnVuY3Rpb24gKCBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKSB7ICAgIGlmICggd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUubG9nICl7IGNvbnNvbGUubG9nKCAnQWpheF9FcnJvcicsIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApOyB9XHJcblxyXG5cdFx0XHRcdFx0dmFyIGFqeF9wb3N0X2RhdGFfX3Jlc291cmNlX2lkID0gd3BiY19nZXRfcmVzb3VyY2VfaWRfX2Zyb21fYWp4X3Bvc3RfZGF0YV91cmwoIHRoaXMuZGF0YSApO1xyXG5cdFx0XHRcdFx0d3BiY19iYWxhbmNlcl9fY29tcGxldGVkKCBhanhfcG9zdF9kYXRhX19yZXNvdXJjZV9pZCAsICd3cGJjX2NhbGVuZGFyX19sb2FkX2RhdGFfX2FqeCcgKTtcclxuXHJcblx0XHRcdFx0XHQvLyBHZXQgQ29udGVudCBvZiBFcnJvciBNZXNzYWdlXHJcblx0XHRcdFx0XHR2YXIgZXJyb3JfbWVzc2FnZSA9ICc8c3Ryb25nPicgKyAnRXJyb3IhJyArICc8L3N0cm9uZz4gJyArIGVycm9yVGhyb3duIDtcclxuXHRcdFx0XHRcdGlmICgganFYSFIuc3RhdHVzICl7XHJcblx0XHRcdFx0XHRcdGVycm9yX21lc3NhZ2UgKz0gJyAoPGI+JyArIGpxWEhSLnN0YXR1cyArICc8L2I+KSc7XHJcblx0XHRcdFx0XHRcdGlmICg0MDMgPT0ganFYSFIuc3RhdHVzICl7XHJcblx0XHRcdFx0XHRcdFx0ZXJyb3JfbWVzc2FnZSArPSAnPGJyPiBQcm9iYWJseSBub25jZSBmb3IgdGhpcyBwYWdlIGhhcyBiZWVuIGV4cGlyZWQuIFBsZWFzZSA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgb25jbGljaz1cImphdmFzY3JpcHQ6bG9jYXRpb24ucmVsb2FkKCk7XCI+cmVsb2FkIHRoZSBwYWdlPC9hPi4nO1xyXG5cdFx0XHRcdFx0XHRcdGVycm9yX21lc3NhZ2UgKz0gJzxicj4gT3RoZXJ3aXNlLCBwbGVhc2UgY2hlY2sgdGhpcyA8YSBzdHlsZT1cImZvbnQtd2VpZ2h0OiA2MDA7XCIgaHJlZj1cImh0dHBzOi8vd3Bib29raW5nY2FsZW5kYXIuY29tL2ZhcS9yZXF1ZXN0LWRvLW5vdC1wYXNzLXNlY3VyaXR5LWNoZWNrL1wiPnRyb3VibGVzaG9vdGluZyBpbnN0cnVjdGlvbjwvYT4uPGJyPidcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dmFyIG1lc3NhZ2Vfc2hvd19kZWxheSA9IDMwMDA7XHJcblx0XHRcdFx0XHRpZiAoIGpxWEhSLnJlc3BvbnNlVGV4dCApe1xyXG5cdFx0XHRcdFx0XHRlcnJvcl9tZXNzYWdlICs9ICcgJyArIGpxWEhSLnJlc3BvbnNlVGV4dDtcclxuXHRcdFx0XHRcdFx0bWVzc2FnZV9zaG93X2RlbGF5ID0gMTA7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlcnJvcl9tZXNzYWdlID0gZXJyb3JfbWVzc2FnZS5yZXBsYWNlKCAvXFxuL2csIFwiPGJyIC8+XCIgKTtcclxuXHJcblx0XHRcdFx0XHR2YXIganFfbm9kZSAgPSB3cGJjX2dldF9jYWxlbmRhcl9fanFfbm9kZV9fZm9yX21lc3NhZ2VzKCB0aGlzLmRhdGEgKTtcclxuXHJcblx0XHRcdFx0XHQvKipcclxuXHRcdFx0XHRcdCAqIElmIHdlIG1ha2UgZmFzdCBjbGlja2luZyBvbiBkaWZmZXJlbnQgcGFnZXMsXHJcblx0XHRcdFx0XHQgKiB0aGVuIHVuZGVyIGNhbGVuZGFyIHdpbGwgc2hvdyBlcnJvciBtZXNzYWdlIHdpdGggIGVtcHR5ICB0ZXh0LCBiZWNhdXNlIGFqYXggd2FzIG5vdCByZWNlaXZlZC5cclxuXHRcdFx0XHRcdCAqIFRvICBub3Qgc2hvdyBzdWNoIHdhcm5pbmdzIHdlIGFyZSBzZXQgZGVsYXkgIGluIDMgc2Vjb25kcy4gIHZhciBtZXNzYWdlX3Nob3dfZGVsYXkgPSAzMDAwO1xyXG5cdFx0XHRcdFx0ICovXHJcblx0XHRcdFx0XHR2YXIgY2xvc2VkX3RpbWVyID0gc2V0VGltZW91dCggZnVuY3Rpb24gKCl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFNob3cgTWVzc2FnZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2UoIGVycm9yX21lc3NhZ2UgLCB7ICd0eXBlJyAgICAgOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnOiB7J2pxX25vZGUnOiBqcV9ub2RlLCAnd2hlcmUnOiAnYWZ0ZXInfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaXNfYXBwZW5kJzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc3R5bGUnICAgIDogJ3RleHQtYWxpZ246bGVmdDsnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdjc3NfY2xhc3MnOid3cGJjX2ZlX21lc3NhZ2VfYWx0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgIDogMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9ICxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIHBhcnNlSW50KCBtZXNzYWdlX3Nob3dfZGVsYXkgKSAgICk7XHJcblxyXG5cdFx0XHQgIH0pXHJcblx0ICAgICAgICAgIC8vIC5kb25lKCAgIGZ1bmN0aW9uICggZGF0YSwgdGV4dFN0YXR1cywganFYSFIgKSB7ICAgaWYgKCB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cgKXsgY29uc29sZS5sb2coICdzZWNvbmQgc3VjY2VzcycsIGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSICk7IH0gICAgfSlcclxuXHRcdFx0ICAvLyAuYWx3YXlzKCBmdW5jdGlvbiAoIGRhdGFfanFYSFIsIHRleHRTdGF0dXMsIGpxWEhSX2Vycm9yVGhyb3duICkgeyAgIGlmICggd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUubG9nICl7IGNvbnNvbGUubG9nKCAnYWx3YXlzIGZpbmlzaGVkJywgZGF0YV9qcVhIUiwgdGV4dFN0YXR1cywganFYSFJfZXJyb3JUaHJvd24gKTsgfSAgICAgfSlcclxuXHRcdFx0ICA7ICAvLyBFbmQgQWpheFxyXG59XHJcblxyXG5cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTdXBwb3J0XHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgQ2FsZW5kYXIgalF1ZXJ5IG5vZGUgZm9yIHNob3dpbmcgbWVzc2FnZXMgZHVyaW5nIEFqYXhcclxuXHQgKiBUaGlzIHBhcmFtZXRlcjogICBjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtc1tyZXNvdXJjZV9pZF0gICBwYXJzZWQgZnJvbSB0aGlzLmRhdGEgQWpheCBwb3N0ICBkYXRhXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gYWp4X3Bvc3RfZGF0YV91cmxfcGFyYW1zXHRcdCAnYWN0aW9uPVdQQkNfQUpYX0NBTEVOREFSX0xPQUQuLi4mY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMlNUJyZXNvdXJjZV9pZCU1RD0yJmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zJTVCYm9va2luZ19oYXNoJTVEPSZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcydcclxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVx0JycjY2FsZW5kYXJfYm9va2luZzEnICB8ICAgJy5ib29raW5nX2Zvcm1fZGl2JyAuLi5cclxuXHQgKlxyXG5cdCAqIEV4YW1wbGUgICAgdmFyIGpxX25vZGUgID0gd3BiY19nZXRfY2FsZW5kYXJfX2pxX25vZGVfX2Zvcl9tZXNzYWdlcyggdGhpcy5kYXRhICk7XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19nZXRfY2FsZW5kYXJfX2pxX25vZGVfX2Zvcl9tZXNzYWdlcyggYWp4X3Bvc3RfZGF0YV91cmxfcGFyYW1zICl7XHJcblxyXG5cdFx0dmFyIGpxX25vZGUgPSAnLmJvb2tpbmdfZm9ybV9kaXYnO1xyXG5cclxuXHRcdHZhciBjYWxlbmRhcl9yZXNvdXJjZV9pZCA9IHdwYmNfZ2V0X3Jlc291cmNlX2lkX19mcm9tX2FqeF9wb3N0X2RhdGFfdXJsKCBhanhfcG9zdF9kYXRhX3VybF9wYXJhbXMgKTtcclxuXHJcblx0XHRpZiAoIGNhbGVuZGFyX3Jlc291cmNlX2lkID4gMCApe1xyXG5cdFx0XHRqcV9ub2RlID0gJyNjYWxlbmRhcl9ib29raW5nJyArIGNhbGVuZGFyX3Jlc291cmNlX2lkO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBqcV9ub2RlO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCByZXNvdXJjZSBJRCBmcm9tIGFqeCBwb3N0IGRhdGEgdXJsICAgdXN1YWxseSAgZnJvbSAgdGhpcy5kYXRhICA9ICdhY3Rpb249V1BCQ19BSlhfQ0FMRU5EQVJfTE9BRC4uLiZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcyU1QnJlc291cmNlX2lkJTVEPTImY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMlNUJib29raW5nX2hhc2glNUQ9JmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zJ1xyXG5cdCAqXHJcblx0ICogQHBhcmFtIGFqeF9wb3N0X2RhdGFfdXJsX3BhcmFtc1x0XHQgJ2FjdGlvbj1XUEJDX0FKWF9DQUxFTkRBUl9MT0FELi4uJmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zJTVCcmVzb3VyY2VfaWQlNUQ9MiZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcyU1QmJvb2tpbmdfaGFzaCU1RD0mY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMnXHJcblx0ICogQHJldHVybnMge2ludH1cdFx0XHRcdFx0XHQgMSB8IDAgIChpZiBlcnJyb3IgdGhlbiAgMClcclxuXHQgKlxyXG5cdCAqIEV4YW1wbGUgICAgdmFyIGpxX25vZGUgID0gd3BiY19nZXRfY2FsZW5kYXJfX2pxX25vZGVfX2Zvcl9tZXNzYWdlcyggdGhpcy5kYXRhICk7XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19nZXRfcmVzb3VyY2VfaWRfX2Zyb21fYWp4X3Bvc3RfZGF0YV91cmwoIGFqeF9wb3N0X2RhdGFfdXJsX3BhcmFtcyApe1xyXG5cclxuXHRcdC8vIEdldCBib29raW5nIHJlc291cmNlIElEIGZyb20gQWpheCBQb3N0IFJlcXVlc3QgIC0+IHRoaXMuZGF0YSA9ICdhY3Rpb249V1BCQ19BSlhfQ0FMRU5EQVJfTE9BRC4uLiZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcyU1QnJlc291cmNlX2lkJTVEPTImY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXMlNUJib29raW5nX2hhc2glNUQ9JmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zJ1xyXG5cdFx0dmFyIGNhbGVuZGFyX3Jlc291cmNlX2lkID0gd3BiY19nZXRfdXJpX3BhcmFtX2J5X25hbWUoICdjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtc1tyZXNvdXJjZV9pZF0nLCBhanhfcG9zdF9kYXRhX3VybF9wYXJhbXMgKTtcclxuXHRcdGlmICggKG51bGwgIT09IGNhbGVuZGFyX3Jlc291cmNlX2lkKSAmJiAoJycgIT09IGNhbGVuZGFyX3Jlc291cmNlX2lkKSApe1xyXG5cdFx0XHRjYWxlbmRhcl9yZXNvdXJjZV9pZCA9IHBhcnNlSW50KCBjYWxlbmRhcl9yZXNvdXJjZV9pZCApO1xyXG5cdFx0XHRpZiAoIGNhbGVuZGFyX3Jlc291cmNlX2lkID4gMCApe1xyXG5cdFx0XHRcdHJldHVybiBjYWxlbmRhcl9yZXNvdXJjZV9pZDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIDA7XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHBhcmFtZXRlciBmcm9tIFVSTCAgLSAgcGFyc2UgVVJMIHBhcmFtZXRlcnMsICBsaWtlIHRoaXM6IGFjdGlvbj1XUEJDX0FKWF9DQUxFTkRBUl9MT0FELi4uJmNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zJTVCcmVzb3VyY2VfaWQlNUQ9MiZjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcyU1QmJvb2tpbmdfaGFzaCU1RD0mY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXNcclxuXHQgKiBAcGFyYW0gbmFtZSAgcGFyYW1ldGVyICBuYW1lLCAgbGlrZSAnY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXNbcmVzb3VyY2VfaWRdJ1xyXG5cdCAqIEBwYXJhbSB1cmxcdCdwYXJhbWV0ZXIgIHN0cmluZyBVUkwnXHJcblx0ICogQHJldHVybnMge3N0cmluZ3xudWxsfSAgIHBhcmFtZXRlciB2YWx1ZVxyXG5cdCAqXHJcblx0ICogRXhhbXBsZTogXHRcdHdwYmNfZ2V0X3VyaV9wYXJhbV9ieV9uYW1lKCAnY2FsZW5kYXJfcmVxdWVzdF9wYXJhbXNbcmVzb3VyY2VfaWRdJywgdGhpcy5kYXRhICk7ICAtPiAnMidcclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2dldF91cmlfcGFyYW1fYnlfbmFtZSggbmFtZSwgdXJsICl7XHJcblxyXG5cdFx0dXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KCB1cmwgKTtcclxuXHJcblx0XHRuYW1lID0gbmFtZS5yZXBsYWNlKCAvW1xcW1xcXV0vZywgJ1xcXFwkJicgKTtcclxuXHRcdHZhciByZWdleCA9IG5ldyBSZWdFeHAoICdbPyZdJyArIG5hbWUgKyAnKD0oW14mI10qKXwmfCN8JCknICksXHJcblx0XHRcdHJlc3VsdHMgPSByZWdleC5leGVjKCB1cmwgKTtcclxuXHRcdGlmICggIXJlc3VsdHMgKSByZXR1cm4gbnVsbDtcclxuXHRcdGlmICggIXJlc3VsdHNbIDIgXSApIHJldHVybiAnJztcclxuXHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoIHJlc3VsdHNbIDIgXS5yZXBsYWNlKCAvXFwrL2csICcgJyApICk7XHJcblx0fVxyXG5cclxuXHJcbi8vVE9ETzogcmVtb3ZlIHZhcnM6ICAgICAgIGJrXzJjbGlja3NfbW9kZV9kYXlzX3N0YXJ0LCBia18xY2xpY2tfbW9kZV9kYXlzX3N0YXJ0ICAgICBkYXRlMmFwcHJvdmUgICBkYXRlX2FwcHJvdmVkIiwiLyoqXHJcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gKlx0aW5jbHVkZXMvX19qcy9mcm9udF9lbmRfbWVzc2FnZXMvd3BiY19mZV9tZXNzYWdlcy5qc1xyXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICovXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gU2hvdyBNZXNzYWdlcyBhdCBGcm9udC1FZG4gc2lkZVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbi8qKlxyXG4gKiBTaG93IG1lc3NhZ2UgaW4gY29udGVudFxyXG4gKlxyXG4gKiBAcGFyYW0gbWVzc2FnZVx0XHRcdFx0TWVzc2FnZSBIVE1MXHJcbiAqIEBwYXJhbSBwYXJhbXMgPSB7XHJcbiAqXHRcdFx0XHRcdFx0XHRcdCd0eXBlJyAgICAgOiAnd2FybmluZycsXHRcdFx0XHRcdFx0XHQvLyAnZXJyb3InIHwgJ3dhcm5pbmcnIHwgJ2luZm8nIHwgJ3N1Y2Nlc3MnXHJcbiAqXHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnIDoge1xyXG4gKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2pxX25vZGUnIDogJycsXHRcdFx0XHQvLyBhbnkgalF1ZXJ5IG5vZGUgZGVmaW5pdGlvblxyXG4gKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3doZXJlJyAgIDogJ2luc2lkZSdcdFx0Ly8gJ2luc2lkZScgfCAnYmVmb3JlJyB8ICdhZnRlcicgfCAncmlnaHQnIHwgJ2xlZnQnXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSxcclxuICpcdFx0XHRcdFx0XHRcdFx0J2lzX2FwcGVuZCc6IHRydWUsXHRcdFx0XHRcdFx0XHRcdC8vIEFwcGx5ICBvbmx5IGlmIFx0J3doZXJlJyAgIDogJ2luc2lkZSdcclxuICpcdFx0XHRcdFx0XHRcdFx0J3N0eWxlJyAgICA6ICd0ZXh0LWFsaWduOmxlZnQ7JyxcdFx0XHRcdC8vIHN0eWxlcywgaWYgbmVlZGVkXHJcbiAqXHRcdFx0XHRcdFx0XHQgICAgJ2Nzc19jbGFzcyc6ICcnLFx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgZXhhbXBsZSBjYW4gIGJlOiAnd3BiY19mZV9tZXNzYWdlX2FsdCdcclxuICpcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICA6IDAsXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaG93IG1hbnkgbWljcm9zZWNvbmQgdG8gIHNob3csICBpZiAwICB0aGVuICBzaG93IGZvcmV2ZXJcclxuICpcdFx0XHRcdFx0XHRcdFx0J2lmX3Zpc2libGVfbm90X3Nob3cnOiBmYWxzZVx0XHRcdFx0XHQvLyBpZiB0cnVlLCAgdGhlbiBkbyBub3Qgc2hvdyBtZXNzYWdlLCAgaWYgcHJldmlvcyBtZXNzYWdlIHdhcyBub3QgaGlkZWQgKG5vdCBhcHBseSBpZiAnd2hlcmUnICAgOiAnaW5zaWRlJyApXHJcbiAqXHRcdFx0XHR9O1xyXG4gKiBFeGFtcGxlczpcclxuICogXHRcdFx0dmFyIGh0bWxfaWQgPSB3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCAnWW91IGNhbiB0ZXN0IGRheXMgc2VsZWN0aW9uIGluIGNhbGVuZGFyJywge30gKTtcclxuICpcclxuICpcdFx0XHR2YXIgbm90aWNlX21lc3NhZ2VfaWQgPSB3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCBtZXNzYWdlX3ZlcmlmX3JlcXVyZWQsIHsgJ3R5cGUnOiAnd2FybmluZycsICdkZWxheSc6IDEwMDAwLCAnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IHRydWUsXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICdzaG93X2hlcmUnOiB7J3doZXJlJzogJ3JpZ2h0JywgJ2pxX25vZGUnOiBlbCx9IH0gKTtcclxuICpcclxuICpcdFx0XHR3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2UnIF0ucmVwbGFjZSggL1xcbi9nLCBcIjxiciAvPlwiICksXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgICAndHlwZScgICAgIDogKCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mKCByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2Vfc3RhdHVzJyBdICkgKVxyXG4gKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgPyByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2Vfc3RhdHVzJyBdIDogJ2luZm8nLFxyXG4gKlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnOiB7J2pxX25vZGUnOiBqcV9ub2RlLCAnd2hlcmUnOiAnYWZ0ZXInfSxcclxuICpcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnY3NzX2NsYXNzJzond3BiY19mZV9tZXNzYWdlX2FsdCcsXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICA6IDEwMDAwXHJcbiAqXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuICpcclxuICpcclxuICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG4gKi9cclxuZnVuY3Rpb24gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZSggbWVzc2FnZSwgcGFyYW1zID0ge30gKXtcclxuXHJcblx0dmFyIHBhcmFtc19kZWZhdWx0ID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0J3R5cGUnICAgICA6ICd3YXJuaW5nJyxcdFx0XHRcdFx0XHRcdC8vICdlcnJvcicgfCAnd2FybmluZycgfCAnaW5mbycgfCAnc3VjY2VzcydcclxuXHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnIDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdqcV9ub2RlJyA6ICcnLFx0XHRcdFx0Ly8gYW55IGpRdWVyeSBub2RlIGRlZmluaXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd2hlcmUnICAgOiAnaW5zaWRlJ1x0XHQvLyAnaW5zaWRlJyB8ICdiZWZvcmUnIHwgJ2FmdGVyJyB8ICdyaWdodCcgfCAnbGVmdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdFx0XHRcdCdpc19hcHBlbmQnOiB0cnVlLFx0XHRcdFx0XHRcdFx0XHQvLyBBcHBseSAgb25seSBpZiBcdCd3aGVyZScgICA6ICdpbnNpZGUnXHJcblx0XHRcdFx0XHRcdFx0XHQnc3R5bGUnICAgIDogJ3RleHQtYWxpZ246bGVmdDsnLFx0XHRcdFx0Ly8gc3R5bGVzLCBpZiBuZWVkZWRcclxuXHRcdFx0XHRcdFx0XHQgICAgJ2Nzc19jbGFzcyc6ICcnLFx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgZXhhbXBsZSBjYW4gIGJlOiAnd3BiY19mZV9tZXNzYWdlX2FsdCdcclxuXHRcdFx0XHRcdFx0XHRcdCdkZWxheScgICAgOiAwLFx0XHRcdFx0XHRcdFx0XHRcdC8vIGhvdyBtYW55IG1pY3Jvc2Vjb25kIHRvICBzaG93LCAgaWYgMCAgdGhlbiAgc2hvdyBmb3JldmVyXHJcblx0XHRcdFx0XHRcdFx0XHQnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IGZhbHNlLFx0XHRcdFx0XHQvLyBpZiB0cnVlLCAgdGhlbiBkbyBub3Qgc2hvdyBtZXNzYWdlLCAgaWYgcHJldmlvcyBtZXNzYWdlIHdhcyBub3QgaGlkZWQgKG5vdCBhcHBseSBpZiAnd2hlcmUnICAgOiAnaW5zaWRlJyApXHJcblx0XHRcdFx0XHRcdFx0XHQnaXNfc2Nyb2xsJzogdHJ1ZVx0XHRcdFx0XHRcdFx0XHQvLyBpcyBzY3JvbGwgIHRvICB0aGlzIGVsZW1lbnRcclxuXHRcdFx0XHRcdFx0fTtcclxuXHRmb3IgKCB2YXIgcF9rZXkgaW4gcGFyYW1zICl7XHJcblx0XHRwYXJhbXNfZGVmYXVsdFsgcF9rZXkgXSA9IHBhcmFtc1sgcF9rZXkgXTtcclxuXHR9XHJcblx0cGFyYW1zID0gcGFyYW1zX2RlZmF1bHQ7XHJcblxyXG4gICAgdmFyIHVuaXF1ZV9kaXZfaWQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgdW5pcXVlX2Rpdl9pZCA9ICd3cGJjX25vdGljZV8nICsgdW5pcXVlX2Rpdl9pZC5nZXRUaW1lKCk7XHJcblxyXG5cdHBhcmFtc1snY3NzX2NsYXNzJ10gKz0gJyB3cGJjX2ZlX21lc3NhZ2UnO1xyXG5cdGlmICggcGFyYW1zWyd0eXBlJ10gPT0gJ2Vycm9yJyApe1xyXG5cdFx0cGFyYW1zWydjc3NfY2xhc3MnXSArPSAnIHdwYmNfZmVfbWVzc2FnZV9lcnJvcic7XHJcblx0XHRtZXNzYWdlID0gJzxpIGNsYXNzPVwibWVudV9pY29uIGljb24tMXggd3BiY19pY25fcmVwb3J0X2dtYWlsZXJyb3JyZWRcIj48L2k+JyArIG1lc3NhZ2U7XHJcblx0fVxyXG5cdGlmICggcGFyYW1zWyd0eXBlJ10gPT0gJ3dhcm5pbmcnICl7XHJcblx0XHRwYXJhbXNbJ2Nzc19jbGFzcyddICs9ICcgd3BiY19mZV9tZXNzYWdlX3dhcm5pbmcnO1xyXG5cdFx0bWVzc2FnZSA9ICc8aSBjbGFzcz1cIm1lbnVfaWNvbiBpY29uLTF4IHdwYmNfaWNuX3dhcm5pbmdcIj48L2k+JyArIG1lc3NhZ2U7XHJcblx0fVxyXG5cdGlmICggcGFyYW1zWyd0eXBlJ10gPT0gJ2luZm8nICl7XHJcblx0XHRwYXJhbXNbJ2Nzc19jbGFzcyddICs9ICcgd3BiY19mZV9tZXNzYWdlX2luZm8nO1xyXG5cdH1cclxuXHRpZiAoIHBhcmFtc1sndHlwZSddID09ICdzdWNjZXNzJyApe1xyXG5cdFx0cGFyYW1zWydjc3NfY2xhc3MnXSArPSAnIHdwYmNfZmVfbWVzc2FnZV9zdWNjZXNzJztcclxuXHRcdG1lc3NhZ2UgPSAnPGkgY2xhc3M9XCJtZW51X2ljb24gaWNvbi0xeCB3cGJjX2ljbl9kb25lX291dGxpbmVcIj48L2k+JyArIG1lc3NhZ2U7XHJcblx0fVxyXG5cclxuXHR2YXIgc2Nyb2xsX3RvX2VsZW1lbnQgPSAnPGRpdiBpZD1cIicgKyB1bmlxdWVfZGl2X2lkICsgJ19zY3JvbGxcIiBzdHlsZT1cImRpc3BsYXk6bm9uZTtcIj48L2Rpdj4nO1xyXG5cdG1lc3NhZ2UgPSAnPGRpdiBpZD1cIicgKyB1bmlxdWVfZGl2X2lkICsgJ1wiIGNsYXNzPVwid3BiY19mcm9udF9lbmRfX21lc3NhZ2UgJyArIHBhcmFtc1snY3NzX2NsYXNzJ10gKyAnXCIgc3R5bGU9XCInICsgcGFyYW1zWyAnc3R5bGUnIF0gKyAnXCI+JyArIG1lc3NhZ2UgKyAnPC9kaXY+JztcclxuXHJcblxyXG5cdHZhciBqcV9lbF9tZXNzYWdlID0gZmFsc2U7XHJcblx0dmFyIGlzX3Nob3dfbWVzc2FnZSA9IHRydWU7XHJcblxyXG5cdGlmICggJ2luc2lkZScgPT09IHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ3doZXJlJyBdICl7XHJcblxyXG5cdFx0aWYgKCBwYXJhbXNbICdpc19hcHBlbmQnIF0gKXtcclxuXHRcdFx0alF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuYXBwZW5kKCBzY3JvbGxfdG9fZWxlbWVudCApO1xyXG5cdFx0XHRqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5hcHBlbmQoIG1lc3NhZ2UgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLmh0bWwoIHNjcm9sbF90b19lbGVtZW50ICsgbWVzc2FnZSApO1xyXG5cdFx0fVxyXG5cclxuXHR9IGVsc2UgaWYgKCAnYmVmb3JlJyA9PT0gcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnd2hlcmUnIF0gKXtcclxuXHJcblx0XHRqcV9lbF9tZXNzYWdlID0galF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuc2libGluZ3MoICdbaWRePVwid3BiY19ub3RpY2VfXCJdJyApO1xyXG5cdFx0aWYgKCAocGFyYW1zWyAnaWZfdmlzaWJsZV9ub3Rfc2hvdycgXSkgJiYgKGpxX2VsX21lc3NhZ2UuaXMoICc6dmlzaWJsZScgKSkgKXtcclxuXHRcdFx0aXNfc2hvd19tZXNzYWdlID0gZmFsc2U7XHJcblx0XHRcdHVuaXF1ZV9kaXZfaWQgPSBqUXVlcnkoIGpxX2VsX21lc3NhZ2UuZ2V0KCAwICkgKS5hdHRyKCAnaWQnICk7XHJcblx0XHR9XHJcblx0XHRpZiAoIGlzX3Nob3dfbWVzc2FnZSApe1xyXG5cdFx0XHRqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5iZWZvcmUoIHNjcm9sbF90b19lbGVtZW50ICk7XHJcblx0XHRcdGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLmJlZm9yZSggbWVzc2FnZSApO1xyXG5cdFx0fVxyXG5cclxuXHR9IGVsc2UgaWYgKCAnYWZ0ZXInID09PSBwYXJhbXNbICdzaG93X2hlcmUnIF1bICd3aGVyZScgXSApe1xyXG5cclxuXHRcdGpxX2VsX21lc3NhZ2UgPSBqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5uZXh0QWxsKCAnW2lkXj1cIndwYmNfbm90aWNlX1wiXScgKTtcclxuXHRcdGlmICggKHBhcmFtc1sgJ2lmX3Zpc2libGVfbm90X3Nob3cnIF0pICYmIChqcV9lbF9tZXNzYWdlLmlzKCAnOnZpc2libGUnICkpICl7XHJcblx0XHRcdGlzX3Nob3dfbWVzc2FnZSA9IGZhbHNlO1xyXG5cdFx0XHR1bmlxdWVfZGl2X2lkID0galF1ZXJ5KCBqcV9lbF9tZXNzYWdlLmdldCggMCApICkuYXR0ciggJ2lkJyApO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCBpc19zaG93X21lc3NhZ2UgKXtcclxuXHRcdFx0alF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuYmVmb3JlKCBzY3JvbGxfdG9fZWxlbWVudCApO1x0XHQvLyBXZSBuZWVkIHRvICBzZXQgIGhlcmUgYmVmb3JlKGZvciBoYW5keSBzY3JvbGwpXHJcblx0XHRcdGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLmFmdGVyKCBtZXNzYWdlICk7XHJcblx0XHR9XHJcblxyXG5cdH0gZWxzZSBpZiAoICdyaWdodCcgPT09IHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ3doZXJlJyBdICl7XHJcblxyXG5cdFx0anFfZWxfbWVzc2FnZSA9IGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLm5leHRBbGwoICcud3BiY19mcm9udF9lbmRfX21lc3NhZ2VfY29udGFpbmVyX3JpZ2h0JyApLmZpbmQoICdbaWRePVwid3BiY19ub3RpY2VfXCJdJyApO1xyXG5cdFx0aWYgKCAocGFyYW1zWyAnaWZfdmlzaWJsZV9ub3Rfc2hvdycgXSkgJiYgKGpxX2VsX21lc3NhZ2UuaXMoICc6dmlzaWJsZScgKSkgKXtcclxuXHRcdFx0aXNfc2hvd19tZXNzYWdlID0gZmFsc2U7XHJcblx0XHRcdHVuaXF1ZV9kaXZfaWQgPSBqUXVlcnkoIGpxX2VsX21lc3NhZ2UuZ2V0KCAwICkgKS5hdHRyKCAnaWQnICk7XHJcblx0XHR9XHJcblx0XHRpZiAoIGlzX3Nob3dfbWVzc2FnZSApe1xyXG5cdFx0XHRqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5iZWZvcmUoIHNjcm9sbF90b19lbGVtZW50ICk7XHRcdC8vIFdlIG5lZWQgdG8gIHNldCAgaGVyZSBiZWZvcmUoZm9yIGhhbmR5IHNjcm9sbClcclxuXHRcdFx0alF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuYWZ0ZXIoICc8ZGl2IGNsYXNzPVwid3BiY19mcm9udF9lbmRfX21lc3NhZ2VfY29udGFpbmVyX3JpZ2h0XCI+JyArIG1lc3NhZ2UgKyAnPC9kaXY+JyApO1xyXG5cdFx0fVxyXG5cdH0gZWxzZSBpZiAoICdsZWZ0JyA9PT0gcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnd2hlcmUnIF0gKXtcclxuXHJcblx0XHRqcV9lbF9tZXNzYWdlID0galF1ZXJ5KCBwYXJhbXNbICdzaG93X2hlcmUnIF1bICdqcV9ub2RlJyBdICkuc2libGluZ3MoICcud3BiY19mcm9udF9lbmRfX21lc3NhZ2VfY29udGFpbmVyX2xlZnQnICkuZmluZCggJ1tpZF49XCJ3cGJjX25vdGljZV9cIl0nICk7XHJcblx0XHRpZiAoIChwYXJhbXNbICdpZl92aXNpYmxlX25vdF9zaG93JyBdKSAmJiAoanFfZWxfbWVzc2FnZS5pcyggJzp2aXNpYmxlJyApKSApe1xyXG5cdFx0XHRpc19zaG93X21lc3NhZ2UgPSBmYWxzZTtcclxuXHRcdFx0dW5pcXVlX2Rpdl9pZCA9IGpRdWVyeSgganFfZWxfbWVzc2FnZS5nZXQoIDAgKSApLmF0dHIoICdpZCcgKTtcclxuXHRcdH1cclxuXHRcdGlmICggaXNfc2hvd19tZXNzYWdlICl7XHJcblx0XHRcdGpRdWVyeSggcGFyYW1zWyAnc2hvd19oZXJlJyBdWyAnanFfbm9kZScgXSApLmJlZm9yZSggc2Nyb2xsX3RvX2VsZW1lbnQgKTtcdFx0Ly8gV2UgbmVlZCB0byAgc2V0ICBoZXJlIGJlZm9yZShmb3IgaGFuZHkgc2Nyb2xsKVxyXG5cdFx0XHRqUXVlcnkoIHBhcmFtc1sgJ3Nob3dfaGVyZScgXVsgJ2pxX25vZGUnIF0gKS5iZWZvcmUoICc8ZGl2IGNsYXNzPVwid3BiY19mcm9udF9lbmRfX21lc3NhZ2VfY29udGFpbmVyX2xlZnRcIj4nICsgbWVzc2FnZSArICc8L2Rpdj4nICk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRpZiAoICAgKCBpc19zaG93X21lc3NhZ2UgKSAgJiYgICggcGFyc2VJbnQoIHBhcmFtc1sgJ2RlbGF5JyBdICkgPiAwICkgICApe1xyXG5cdFx0dmFyIGNsb3NlZF90aW1lciA9IHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeSggJyMnICsgdW5pcXVlX2Rpdl9pZCApLmZhZGVPdXQoIDE1MDAgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9ICwgcGFyc2VJbnQoIHBhcmFtc1sgJ2RlbGF5JyBdICkgICApO1xyXG5cclxuXHRcdHZhciBjbG9zZWRfdGltZXIyID0gc2V0VGltZW91dCggZnVuY3Rpb24gKCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoICcjJyArIHVuaXF1ZV9kaXZfaWQgKS50cmlnZ2VyKCAnaGlkZScgKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LCAoIHBhcnNlSW50KCBwYXJhbXNbICdkZWxheScgXSApICsgMTUwMSApICk7XHJcblx0fVxyXG5cclxuXHQvLyBDaGVjayAgaWYgc2hvd2VkIG1lc3NhZ2UgaW4gc29tZSBoaWRkZW4gcGFyZW50IHNlY3Rpb24gYW5kIHNob3cgaXQuIEJ1dCBpdCBtdXN0ICBiZSBsb3dlciB0aGFuICcud3BiY19jb250YWluZXInXHJcblx0dmFyIHBhcmVudF9lbHMgPSBqUXVlcnkoICcjJyArIHVuaXF1ZV9kaXZfaWQgKS5wYXJlbnRzKCkubWFwKCBmdW5jdGlvbiAoKXtcclxuXHRcdGlmICggKCFqUXVlcnkoIHRoaXMgKS5pcyggJ3Zpc2libGUnICkpICYmIChqUXVlcnkoICcud3BiY19jb250YWluZXInICkuaGFzKCB0aGlzICkpICl7XHJcblx0XHRcdGpRdWVyeSggdGhpcyApLnNob3coKTtcclxuXHRcdH1cclxuXHR9ICk7XHJcblxyXG5cdGlmICggcGFyYW1zWyAnaXNfc2Nyb2xsJyBdICl7XHJcblx0XHR3cGJjX2RvX3Njcm9sbCggJyMnICsgdW5pcXVlX2Rpdl9pZCArICdfc2Nyb2xsJyApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHVuaXF1ZV9kaXZfaWQ7XHJcbn1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEVycm9yIG1lc3NhZ2UuIFx0UHJlc2V0IG9mIHBhcmFtZXRlcnMgZm9yIHJlYWwgbWVzc2FnZSBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBlbFx0XHQtIGFueSBqUXVlcnkgbm9kZSBkZWZpbml0aW9uXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcdC0gTWVzc2FnZSBIVE1MXHJcblx0ICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX2Vycm9yKCBqcV9ub2RlLCBtZXNzYWdlICl7XHJcblxyXG5cdFx0dmFyIG5vdGljZV9tZXNzYWdlX2lkID0gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0eXBlJyAgICAgICAgICAgICAgIDogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdkZWxheScgICAgICAgICAgICAgIDogMTAwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJyAgICAgICAgICA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3aGVyZScgIDogJ3JpZ2h0JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdqcV9ub2RlJzoganFfbm9kZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAgIH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xyXG5cdFx0cmV0dXJuIG5vdGljZV9tZXNzYWdlX2lkO1xyXG5cdH1cclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEVycm9yIG1lc3NhZ2UgVU5ERVIgZWxlbWVudC4gXHRQcmVzZXQgb2YgcGFyYW1ldGVycyBmb3IgcmVhbCBtZXNzYWdlIGZ1bmN0aW9uLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGVsXHRcdC0gYW55IGpRdWVyeSBub2RlIGRlZmluaXRpb25cclxuXHQgKiBAcGFyYW0gbWVzc2FnZVx0LSBNZXNzYWdlIEhUTUxcclxuXHQgKiBAcmV0dXJucyBzdHJpbmcgIC0gSFRNTCBJRFx0XHRvciAwIGlmIG5vdCBzaG93aW5nIGR1cmluZyB0aGlzIHRpbWUuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZV9fZXJyb3JfdW5kZXJfZWxlbWVudCgganFfbm9kZSwgbWVzc2FnZSwgbWVzc2FnZV9kZWxheSApe1xyXG5cclxuXHRcdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiAobWVzc2FnZV9kZWxheSkgKXtcclxuXHRcdFx0bWVzc2FnZV9kZWxheSA9IDBcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbm90aWNlX21lc3NhZ2VfaWQgPSB3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3R5cGUnICAgICAgICAgICAgICAgOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICAgICAgICAgICAgOiBtZXNzYWdlX2RlbGF5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2lmX3Zpc2libGVfbm90X3Nob3cnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Nob3dfaGVyZScgICAgICAgICAgOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd2hlcmUnICA6ICdhZnRlcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanFfbm9kZSc6IGpxX25vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdHJldHVybiBub3RpY2VfbWVzc2FnZV9pZDtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBFcnJvciBtZXNzYWdlIFVOREVSIGVsZW1lbnQuIFx0UHJlc2V0IG9mIHBhcmFtZXRlcnMgZm9yIHJlYWwgbWVzc2FnZSBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBlbFx0XHQtIGFueSBqUXVlcnkgbm9kZSBkZWZpbml0aW9uXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcdC0gTWVzc2FnZSBIVE1MXHJcblx0ICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX2Vycm9yX2Fib3ZlX2VsZW1lbnQoIGpxX25vZGUsIG1lc3NhZ2UsIG1lc3NhZ2VfZGVsYXkgKXtcclxuXHJcblx0XHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKG1lc3NhZ2VfZGVsYXkpICl7XHJcblx0XHRcdG1lc3NhZ2VfZGVsYXkgPSAxMDAwMFxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBub3RpY2VfbWVzc2FnZV9pZCA9IHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2UoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndHlwZScgICAgICAgICAgICAgICA6ICdlcnJvcicsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgICAgICAgICAgICA6IG1lc3NhZ2VfZGVsYXksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJyAgICAgICAgICA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3aGVyZScgIDogJ2JlZm9yZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanFfbm9kZSc6IGpxX25vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdHJldHVybiBub3RpY2VfbWVzc2FnZV9pZDtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBXYXJuaW5nIG1lc3NhZ2UuIFx0UHJlc2V0IG9mIHBhcmFtZXRlcnMgZm9yIHJlYWwgbWVzc2FnZSBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBlbFx0XHQtIGFueSBqUXVlcnkgbm9kZSBkZWZpbml0aW9uXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcdC0gTWVzc2FnZSBIVE1MXHJcblx0ICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX3dhcm5pbmcoIGpxX25vZGUsIG1lc3NhZ2UgKXtcclxuXHJcblx0XHR2YXIgbm90aWNlX21lc3NhZ2VfaWQgPSB3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3R5cGUnICAgICAgICAgICAgICAgOiAnd2FybmluZycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgICAgICAgICAgICA6IDEwMDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2lmX3Zpc2libGVfbm90X3Nob3cnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Nob3dfaGVyZScgICAgICAgICAgOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd2hlcmUnICA6ICdyaWdodCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanFfbm9kZSc6IGpxX25vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdHJldHVybiBub3RpY2VfbWVzc2FnZV9pZDtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBXYXJuaW5nIG1lc3NhZ2UgVU5ERVIgZWxlbWVudC4gXHRQcmVzZXQgb2YgcGFyYW1ldGVycyBmb3IgcmVhbCBtZXNzYWdlIGZ1bmN0aW9uLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGVsXHRcdC0gYW55IGpRdWVyeSBub2RlIGRlZmluaXRpb25cclxuXHQgKiBAcGFyYW0gbWVzc2FnZVx0LSBNZXNzYWdlIEhUTUxcclxuXHQgKiBAcmV0dXJucyBzdHJpbmcgIC0gSFRNTCBJRFx0XHRvciAwIGlmIG5vdCBzaG93aW5nIGR1cmluZyB0aGlzIHRpbWUuXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZV9fd2FybmluZ191bmRlcl9lbGVtZW50KCBqcV9ub2RlLCBtZXNzYWdlICl7XHJcblxyXG5cdFx0dmFyIG5vdGljZV9tZXNzYWdlX2lkID0gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZShcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0eXBlJyAgICAgICAgICAgICAgIDogJ3dhcm5pbmcnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICAgICAgICAgICAgOiAxMDAwMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpZl92aXNpYmxlX25vdF9zaG93JzogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnICAgICAgICAgIDoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3doZXJlJyAgOiAnYWZ0ZXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2pxX25vZGUnOiBqcV9ub2RlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XHJcblx0XHRyZXR1cm4gbm90aWNlX21lc3NhZ2VfaWQ7XHJcblx0fVxyXG5cclxuXHJcblx0LyoqXHJcblx0ICogV2FybmluZyBtZXNzYWdlIEFCT1ZFIGVsZW1lbnQuIFx0UHJlc2V0IG9mIHBhcmFtZXRlcnMgZm9yIHJlYWwgbWVzc2FnZSBmdW5jdGlvbi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBlbFx0XHQtIGFueSBqUXVlcnkgbm9kZSBkZWZpbml0aW9uXHJcblx0ICogQHBhcmFtIG1lc3NhZ2VcdC0gTWVzc2FnZSBIVE1MXHJcblx0ICogQHJldHVybnMgc3RyaW5nICAtIEhUTUwgSURcdFx0b3IgMCBpZiBub3Qgc2hvd2luZyBkdXJpbmcgdGhpcyB0aW1lLlxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX3dhcm5pbmdfYWJvdmVfZWxlbWVudCgganFfbm9kZSwgbWVzc2FnZSApe1xyXG5cclxuXHRcdHZhciBub3RpY2VfbWVzc2FnZV9pZCA9IHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2UoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQndHlwZScgICAgICAgICAgICAgICA6ICd3YXJuaW5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdkZWxheScgICAgICAgICAgICAgIDogMTAwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnaWZfdmlzaWJsZV9ub3Rfc2hvdyc6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJyAgICAgICAgICA6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd3aGVyZScgIDogJ2JlZm9yZScsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnanFfbm9kZSc6IGpxX25vZGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdHJldHVybiBub3RpY2VfbWVzc2FnZV9pZDtcclxuXHR9XHJcblxyXG5cclxuLyoqXHJcbiAqIFNjcm9sbCB0byBzcGVjaWZpYyBlbGVtZW50XHJcbiAqXHJcbiAqIEBwYXJhbSBqcV9ub2RlXHRcdFx0XHRcdHN0cmluZyBvciBqUXVlcnkgZWxlbWVudCwgIHdoZXJlIHNjcm9sbCAgdG9cclxuICogQHBhcmFtIGV4dHJhX3NoaWZ0X29mZnNldFx0XHRpbnQgc2hpZnQgb2Zmc2V0IGZyb20gIGpxX25vZGVcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfZG9fc2Nyb2xsKCBqcV9ub2RlICwgZXh0cmFfc2hpZnRfb2Zmc2V0ID0gMCApe1xyXG5cclxuXHRpZiAoICFqUXVlcnkoIGpxX25vZGUgKS5sZW5ndGggKXtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblx0dmFyIHRhcmdldE9mZnNldCA9IGpRdWVyeSgganFfbm9kZSApLm9mZnNldCgpLnRvcDtcclxuXHJcblx0aWYgKCB0YXJnZXRPZmZzZXQgPD0gMCApe1xyXG5cdFx0aWYgKCAwICE9IGpRdWVyeSgganFfbm9kZSApLm5leHRBbGwoICc6dmlzaWJsZScgKS5sZW5ndGggKXtcclxuXHRcdFx0dGFyZ2V0T2Zmc2V0ID0galF1ZXJ5KCBqcV9ub2RlICkubmV4dEFsbCggJzp2aXNpYmxlJyApLmZpcnN0KCkub2Zmc2V0KCkudG9wO1xyXG5cdFx0fSBlbHNlIGlmICggMCAhPSBqUXVlcnkoIGpxX25vZGUgKS5wYXJlbnQoKS5uZXh0QWxsKCAnOnZpc2libGUnICkubGVuZ3RoICl7XHJcblx0XHRcdHRhcmdldE9mZnNldCA9IGpRdWVyeSgganFfbm9kZSApLnBhcmVudCgpLm5leHRBbGwoICc6dmlzaWJsZScgKS5maXJzdCgpLm9mZnNldCgpLnRvcDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGlmICggalF1ZXJ5KCAnI3dwYWRtaW5iYXInICkubGVuZ3RoID4gMCApe1xyXG5cdFx0dGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gNTAgLSA1MDtcclxuXHR9IGVsc2Uge1xyXG5cdFx0dGFyZ2V0T2Zmc2V0ID0gdGFyZ2V0T2Zmc2V0IC0gMjAgLSA1MDtcclxuXHR9XHJcblx0dGFyZ2V0T2Zmc2V0ICs9IGV4dHJhX3NoaWZ0X29mZnNldDtcclxuXHJcblx0Ly8gU2Nyb2xsIG9ubHkgIGlmIHdlIGRpZCBub3Qgc2Nyb2xsIGJlZm9yZVxyXG5cdGlmICggISBqUXVlcnkoICdodG1sLGJvZHknICkuaXMoICc6YW5pbWF0ZWQnICkgKXtcclxuXHRcdGpRdWVyeSggJ2h0bWwsYm9keScgKS5hbmltYXRlKCB7c2Nyb2xsVG9wOiB0YXJnZXRPZmZzZXR9LCA1MDAgKTtcclxuXHR9XHJcbn1cclxuXHJcbiJdLCJmaWxlIjoiX2Rpc3QvYWxsL19vdXQvd3BiY19hbGwuanMifQ==;
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/js/client.js?ver=10.0 
var date_approved = [];
var date2approve = [];


////////////////////////////////////////////////////////////////////////////
// Days Selections - support functions
////////////////////////////////////////////////////////////////////////////

/**
 * Get first day of selection
 *
 * @param dates
 * @returns {string|*}
 */
function get_first_day_of_selection(dates) {

    // Multiple days selections
    if ( dates.indexOf( ',' ) != -1 ){
        var dates_array = dates.split( /,\s*/ );
        var length = dates_array.length;
        var element = null;
        var new_dates_array = [];

        for ( var i = 0; i < length; i++ ){

            element = dates_array[ i ].split( /\./ );

            new_dates_array[ new_dates_array.length ] = element[ 2 ] + '.' + element[ 1 ] + '.' + element[ 0 ];       //2013.12.20
        }
        new_dates_array.sort();

        element = new_dates_array[ 0 ].split( /\./ );

        return element[ 2 ] + '.' + element[ 1 ] + '.' + element[ 0 ];                    //20.12.2013
    }

    // Range days selection
    if ( dates.indexOf( ' - ' ) != -1 ){
        var start_end_date = dates.split( " - " );
        return start_end_date[ 0 ];
    }

    // Single day selection
    return dates;                                                               //20.12.2013
}

// Get last day of selection
function get_last_day_of_selection(dates) {

    // Multiple days selections
    if ( dates.indexOf(',') != -1 ){
        var dates_array =dates.split(/,\s*/);
        var length = dates_array.length;
        var element = null;
        var new_dates_array = [];

        for (var i = 0; i < length; i++) {

          element = dates_array[i].split(/\./);

          new_dates_array[new_dates_array.length] = element[2]+'.' + element[1]+'.' + element[0];       //2013.12.20
        }
        new_dates_array.sort();

        element = new_dates_array[(new_dates_array.length-1)].split(/\./);

        return element[2]+'.' + element[1]+'.' + element[0];                    //20.12.2013
    }

    // Range days selection
    if ( dates.indexOf(' - ') != -1 ){
        var start_end_date = dates.split(" - ");
        return start_end_date[(start_end_date.length-1)];
    }

    // Single day selection
    return dates;                                                               //20.12.2013
}


/**
 * Check ID of selected additional calendars
 *
 * @param int bk_type
 * @returns array
 */
function wpbc_get_arr_of_selected_additional_calendars( bk_type ){                                                      //FixIn: 8.5.2.26

    var selected_additionl_calendars = [];

    // Checking according additional calendars
    if ( document.getElementById( 'additional_calendars' + bk_type ) != null ){

        var id_additional_str = document.getElementById( 'additional_calendars' + bk_type ).value;
        var id_additional_arr = id_additional_str.split( ',' );

        var is_all_additional_days_unselected = true;

        for ( var ia = 0; ia < id_additional_arr.length; ia++ ){
            if ( document.getElementById( 'date_booking' + id_additional_arr[ ia ] ).value != '' ){
                selected_additionl_calendars.push( id_additional_arr[ ia ] );
            }
        }
    }
    return selected_additionl_calendars;
}

////////////////////////////////////////////////////////////////////////////
// Submit Booking Data
////////////////////////////////////////////////////////////////////////////

// Check fields at form and then send request
function mybooking_submit( submit_form , bk_type, wpdev_active_locale){

    var target_elm = jQuery( ".booking_form_div" ).trigger( "booking_form_submit_click", [bk_type, submit_form, wpdev_active_locale] );     //FixIn: 8.8.3.13
    if  (
            ( jQuery( target_elm ).find( 'input[name="booking_form_show_summary"]' ).length > 0 )
         && ( 'pause_submit' === jQuery( target_elm ).find( 'input[name="booking_form_show_summary"]' ).val() )
        )
    {
        return false;
    }

    //FixIn: 8.4.0.2
    var is_error = wpbc_check_errors_in_booking_form( bk_type );
    if ( is_error ) { return false; }

    // Show message if no selected days in Calendar(s)
    if (document.getElementById('date_booking' + bk_type).value == '')  {

        var arr_of_selected_additional_calendars = wpbc_get_arr_of_selected_additional_calendars( bk_type );            //FixIn: 8.5.2.26

        if ( arr_of_selected_additional_calendars.length == 0 ) {
            wpbc_front_end__show_message__error_under_element( '#booking_form_div' + bk_type + ' .bk_calendar_frame', message_verif_selectdts, 3000 );
            return;
        }
    }

    var count = submit_form.elements.length;
    var formdata = '';
    var inp_value;
    var element;
    var el_type;


        //FixIn:6.1.1.3
    if( typeof( wpbc_is_this_time_selection_not_available ) == 'function' ) {

        if ( document.getElementById('date_booking' + bk_type).value == '' )  {         // Primary calendar not selected.

            if ( document.getElementById('additional_calendars' + bk_type ) != null ) { // Checking additional calendars.

                var id_additional_str = document.getElementById('additional_calendars' + bk_type).value; //Loop have to be here based on , sign
                var id_additional_arr = id_additional_str.split(',');
                var is_times_dates_ok = false;
                for ( var ia=0;ia<id_additional_arr.length;ia++ ) {
                    if (
                            ( document.getElementById('date_booking' + id_additional_arr[ia] ).value != '' )
                         && ( ! wpbc_is_this_time_selection_not_available( id_additional_arr[ia], submit_form.elements ) )
                       ){
                        is_times_dates_ok = true;
                    }
                }
                if ( ! is_times_dates_ok ) return;
            }
        } else {                                                                        //Primary calendar selected.
            if ( wpbc_is_this_time_selection_not_available( bk_type, submit_form.elements ) )
                return;
        }
    }



    // Serialize form here
    for ( var i = 0; i < count; i++ ){  //FixIn: 9.1.5.1
        element = submit_form.elements[i];

        if ( jQuery( element ).closest( '.booking_form_garbage' ).length ) {
            continue;       // Skip elements from garbage                                           //FixIn: 7.1.2.14
        }

        if (
               ( element.type !== 'button' )
            && ( element.type !== 'hidden' )
            && ( element.name !== ( 'date_booking' + bk_type ) )
            // && ( jQuery( element ).is( ':visible' ) )                                            //FixIn: 7.2.1.12.2 // Its prevent of saving hints,  and some other hidden element
        ) {           // Skip buttons and hidden element - type                                     //FixIn: 7.2.1.12


            // Get Element Value
            if ( element.type == 'checkbox' ){

                if (element.value == '') {
                    inp_value = element.checked;
                } else {
                    if (element.checked) inp_value = element.value;
                    else inp_value = '';
                }

            } else if ( element.type == 'radio' ) {

                if (element.checked) {
                    inp_value = element.value;
                } else {
                        // Check  if this radio required,  and if it does not check,  then show warning, otherwise if it is not required or some other option checked skip this loop
                        // We need to  check  it here, because radio have the several  options with  same name and type, and otherwise we will save several options with  selected and empty values.
                    if (                                                        //FixIn: 7.0.1.62
                           ( element.className.indexOf('wpdev-validates-as-required') !== -1 )
                        && ( jQuery( element ).is( ':visible' ) )                                            //FixIn: 7.2.1.12.2 // Its prevent of saving hints,  and some other hidden element
                        && ( ! jQuery(':radio[name="'+element.name+'"]', submit_form).is(":checked") ) ) {
                        wpbc_front_end__show_message__warning( element, message_verif_requred_for_radio_box );   		//FixIn: 8.5.1.3
                        return;
                    }
                    continue;
                }
            } else {
                inp_value = element.value;
            }

            // Get value in selectbox of multiple selection
            if (element.type =='select-multiple') {
                inp_value = jQuery('[name="'+element.name+'"]').val() ;
                if (( inp_value == null ) || (inp_value.toString() == '' ))
                    inp_value='';
            }

            // Make validation  only  for visible elements
            if ( jQuery( element ).is( ':visible' ) ) {                                             //FixIn: 7.2.1.12.2


                // Recheck for max num. available visitors selection
                if ( typeof (wpbc__is_less_than_required__of_max_available_slots__bl) == 'function' ){
                    if ( wpbc__is_less_than_required__of_max_available_slots__bl( bk_type, element ) ){
                        return;
                    }
                }


                // Phone validation
                /*if ( element.name == ('phone'+bk_type) ) {
                    // we validate a phone number of 10 digits with no comma, no spaces, no punctuation and there will be no + sign in front the number - See more at: http://www.w3resource.com/javascript/form/phone-no-validation.php#sthash.U9FHwcdW.dpuf
                    var reg =  /^\d{10}$/;
                    var message_verif_phone = "Please enter correctly phone number";
                    if ( inp_value != '' )
                        if(reg.test(inp_value) == false) {wpbc_front_end__show_message__warning( element , message_verif_phone );return;}
                }*/

                // Validation Check --- Requred fields
                if ( element.className.indexOf('wpdev-validates-as-required') !== -1 ){
                    if  ((element.type =='checkbox') && ( element.checked === false)) {
                        if ( ! jQuery(':checkbox[name="'+element.name+'"]', submit_form).is(":checked") ) {
                            wpbc_front_end__show_message__warning( element , message_verif_requred_for_check_box );   		//FixIn: 8.5.1.3
                            return;
                        }
                    }
                    if  (element.type =='radio') {
                        if ( ! jQuery(':radio[name="'+element.name+'"]', submit_form).is(":checked") ) {
                            wpbc_front_end__show_message__warning( element , message_verif_requred_for_radio_box );   		//FixIn: 8.5.1.3
                            return;
                        }
                    }

                    if (  (element.type != 'checkbox') && (element.type != 'radio') && ( '' === wpbc_trim( inp_value ) )  ){       //FixIn: 8.8.1.3   //FixIn:7.0.1.39       //FixIn: 8.7.11.12
                        wpbc_front_end__show_message__warning( element , message_verif_requred );   		//FixIn: 8.5.1.3
                        return;
                    }
                }

                // Validation Check --- Email correct filling field
                if ( element.className.indexOf('wpdev-validates-as-email') !== -1 ){
                    inp_value = inp_value.replace(/^\s+|\s+$/gm,'');                // Trim  white space //FixIn: 5.4.5
                    var reg = /^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;
                    if ( inp_value != '' )
                        if(reg.test(inp_value) == false) {
                            wpbc_front_end__show_message__warning( element , message_verif_emeil );   		//FixIn: 8.5.1.3
                            return;
                        }
                }

                // Validation Check --- Same Email Field
                if ( ( element.className.indexOf('wpdev-validates-as-email') !== -1 ) && ( element.className.indexOf('same_as_') !== -1 ) ) {

                    // Get  the name of Primary Email field from the "same_as_NAME" class
                    var primary_email_name = element.className.match(/same_as_([^\s])+/gi);
                    if (primary_email_name != null) { // We found
                        primary_email_name = primary_email_name[0].substr(8);

                        // Recehck if such primary email field exist in the booking form
                        if (jQuery('[name="' + primary_email_name + bk_type + '"]').length > 0) {

                            // Recheck the values of the both emails, if they do  not equla show warning
                            if ( jQuery('[name="' + primary_email_name + bk_type + '"]').val() !== inp_value ) {
                                wpbc_front_end__show_message__warning( element , message_verif_same_emeil  );   		//FixIn: 8.5.1.3
                                return;
                            }
                        }
                    }
                    // Skip one loop for the email veryfication field
                    continue;                                                                                           //FixIn: 8.1.2.15
                }

            }

            // Get Form Data
            if ( element.name !== ('captcha_input' + bk_type) ) {
                if (formdata !=='') formdata +=  '~';                                                // next field element

                el_type = element.type;
                if ( element.className.indexOf('wpdev-validates-as-email') !== -1 )  el_type='email';
                if ( element.className.indexOf('wpdev-validates-as-coupon') !== -1 ) el_type='coupon';

                inp_value = inp_value + '';
                inp_value = inp_value.replace(new RegExp("\\^",'g'), '&#94;'); // replace registered characters
                inp_value = inp_value.replace(new RegExp("~",'g'), '&#126;'); // replace registered characters

                inp_value = inp_value.replace(/"/g, '&#34;'); // replace double quot
                inp_value = inp_value.replace(/'/g, '&#39;'); // replace single quot

                formdata += el_type + '^' + element.name + '^' + inp_value ;                    // element attr
            }
        }

    }  // End Fields Loop


    // TODO: here was function  for 'Check if visitor finish  dates selection.


    // Cpatch  verify
    var captcha = document.getElementById('wpdev_captcha_challenge_' + bk_type);

    //Disable Submit button
    if (captcha != null)  form_submit_send( bk_type, formdata, captcha.value, document.getElementById('captcha_input' + bk_type).value ,wpdev_active_locale);
    else                  form_submit_send( bk_type, formdata, '',            '' ,                                                      wpdev_active_locale);
    return;
}


// Gathering params for sending Ajax request and then send it
function form_submit_send( bk_type, formdata, captcha_chalange, user_captcha ,wpdev_active_locale){

    //document.getElementById('submiting' + bk_type).innerHTML = '<div style="height:20px;width:100%;text-align:center;margin:15px auto;"><img style="vertical-align:middle;box-shadow:none;width:14px;" src="'+wpdev_bk_plugin_url+'/assets/img/ajax-loader.gif"><//div>';

    var my_booking_form = '';
    var my_booking_hash = '';
    if (document.getElementById('booking_form_type' + bk_type) != undefined)
        my_booking_form =document.getElementById('booking_form_type' + bk_type).value;

    if ( wpdev_bk_edit_id_hash != '' ) my_booking_hash = wpdev_bk_edit_id_hash;

    var is_send_emeils = 1;
    if ( jQuery('#is_send_email_for_pending').length ) {
        is_send_emeils = jQuery( '#is_send_email_for_pending' ).is( ':checked' );       //FixIn: 8.7.9.5
        if ( false === is_send_emeils ) { is_send_emeils = 0; }
        else                            { is_send_emeils = 1; }
    }

    if ( document.getElementById('date_booking' + bk_type).value != '' )        //FixIn:6.1.1.3
        send_ajax_submit(bk_type,formdata,captcha_chalange,user_captcha,is_send_emeils,my_booking_hash,my_booking_form,wpdev_active_locale   ); // Ajax sending request
    else {
        jQuery('#booking_form_div' + bk_type ).hide();
        jQuery('#submiting' + bk_type ).hide();
    }

    var formdata_additional_arr;
    var formdata_additional;
    var my_form_field;
    var id_additional;
    var id_additional_str;
    var id_additional_arr;
    if (document.getElementById('additional_calendars' + bk_type) != null ) {

        id_additional_str = document.getElementById('additional_calendars' + bk_type).value; //Loop have to be here based on , sign
        id_additional_arr = id_additional_str.split(',');


        //TODO: remove this spinner and add the new !!!
        //FixIn: 8.5.2.26
        if ( ! jQuery( '#booking_form_div' + bk_type ).is( ':visible' ) ) {
            jQuery( '#booking_form_div' + bk_type ).after(
                '<div class="wpbc_submit_spinner" style="height:20px;width:100%;text-align:center;margin:15px auto;"><img style="vertical-align:middle;box-shadow:none;width:14px;" src="'+wpdev_bk_plugin_url+'/assets/img/ajax-loader.gif"></div>'
            );
        }



        for (var ia=0;ia<id_additional_arr.length;ia++) {
            formdata_additional_arr = formdata;
            formdata_additional = '';
            id_additional = id_additional_arr[ia];


            formdata_additional_arr = formdata_additional_arr.split('~');
            for (var j=0;j<formdata_additional_arr.length;j++) {
                my_form_field = formdata_additional_arr[j].split('^');
                if (formdata_additional !=='') formdata_additional +=  '~';

                if (my_form_field[1].substr( (my_form_field[1].length -2),2)=='[]')
                  my_form_field[1] = my_form_field[1].substr(0, (my_form_field[1].length - (''+bk_type).length ) - 2 ) + id_additional + '[]';
                else
                  my_form_field[1] = my_form_field[1].substr(0, (my_form_field[1].length - (''+bk_type).length ) ) + id_additional ;


                formdata_additional += my_form_field[0] + '^' + my_form_field[1] + '^' + my_form_field[2];
            }

            if ( jQuery('#gateway_payment_forms' + bk_type).length > 0 ) {         // If Payment form  for main  booking resources is showing then append payment form  for additional  calendars.
                jQuery('#gateway_payment_forms' + bk_type).after('<div id="gateway_payment_forms'+id_additional+'"></div>');
                jQuery('#gateway_payment_forms' + bk_type).after('<div id="ajax_respond_insert'+id_additional+'" style="display:none;"></div>');
            }
            //FixIn: 8.5.2.17
            send_ajax_submit( id_additional ,formdata_additional,captcha_chalange,user_captcha,is_send_emeils,my_booking_hash,my_booking_form ,wpdev_active_locale  );  // Submit
        }
    }
}


//<![CDATA[
function send_ajax_submit( resource_id, formdata, captcha_chalange, user_captcha, is_send_emeils, my_booking_hash, my_booking_form, wpdev_active_locale ){

    // Disable Submit | Show spin loader
    wpbc_booking_form__on_submit__ui_elements_disable( resource_id )


    var is_exit = wpbc_ajx_booking__create( {
                                'resource_id'              : resource_id,
                                'dates_ddmmyy_csv'         : document.getElementById( 'date_booking' + resource_id ).value,
                                'formdata'                 : formdata,
                                'booking_hash'             : my_booking_hash,
                                'custom_form'              : my_booking_form,
                                'aggregate_resource_id_arr': ( ( null !== _wpbc.booking__get_param_value( resource_id, 'aggregate_resource_id_arr' ))
                                                                        ? _wpbc.booking__get_param_value( resource_id, 'aggregate_resource_id_arr' ).join( ',' ) : ''),


                                'captcha_chalange'   : captcha_chalange,
                                'captcha_user_input' : user_captcha,

                                'is_emails_send'     : is_send_emeils,
                                'active_locale'      : wpdev_active_locale
                            } );
    if ( true === is_exit ){
        return;
    }
}
//]]>

////////////////////////////////////////////////////////////////////////////


// Hint labels inside of input boxes
jQuery(document).ready( function(){

    jQuery('div.inside_hint').on( 'click', function(){                   //FixIn: 8.7.11.12
            jQuery(this).css('visibility', 'hidden').siblings('.has-inside-hint').trigger( 'focus' );   //FixIn: 8.7.11.12
    });

    jQuery('input.has-inside-hint').on( 'blur', function(){                   //FixIn: 8.7.11.12
        if ( this.value == '' )
            jQuery(this).siblings('.inside_hint').css('visibility', '');
    }).on( 'focus', function(){                                                 //FixIn: 8.7.11.12
            jQuery(this).siblings('.inside_hint').css('visibility', 'hidden');
    });

    jQuery('.booking_form_div input[type=button]').prop("disabled", false);
});



// Support Functions

//FixIn: 8.8.1.3
/**
 * Trim  strings and array joined with  (,)
 *
 * @param string_to_trim   string / array
 * @returns string
 */
function wpbc_trim( string_to_trim ){

    if ( Array.isArray( string_to_trim ) ){
        string_to_trim = string_to_trim.join( ',' );
    }

    if ( 'string' == typeof (string_to_trim) ){
        string_to_trim = string_to_trim.trim();
    }

    return string_to_trim;
}


function wpdev_in_array (array_here, p_val) {
   for(var i = 0, l = array_here.length; i < l; i++) {
       if(array_here[i] == p_val) {
           return true;
       }
   }
   return false;
}


function days_between(date1, date2) {

    // The number of milliseconds in one day
    var ONE_DAY = 1000 * 60 * 60 * 24;

    // Convert both dates to milliseconds
    var date1_ms = date1.getTime();
    var date2_ms = date2.getTime();

    // Calculate the difference in milliseconds
    var difference_ms =  date1_ms - date2_ms;

    // Convert back to days and return
    return Math.round(difference_ms/ONE_DAY);

}





//FixIn: 8.4.0.2
/**
 * Check errors in booking form  fields, and show warnings if some errors exist.
 * Check  errors,  like not selected dates or not filled requred form  fields, or not correct entering email or phone fields,  etc...
 *
 * @param bk_type  int (ID of booking resource)
 */
function wpbc_check_errors_in_booking_form( bk_type ) {

    var is_error_in_field = false;  // By default all  is good - no error

    var my_form = jQuery( '#booking_form' + bk_type );

    if ( my_form.length ) {

        var fields_with_errors_arr = [];

        // Pseudo-selector that get form elements <input , <textarea , <select, <button...
        my_form.find( ':input' ).each( function( index, el ) {

            // Skip some elements
            var skip_elements = [ 'hidden', 'button' ];

            if (  -1 == skip_elements.indexOf( jQuery( el ).attr( 'type' ) )  ){

				// Check Calendar Dates Selection
                if ( ( 'date_booking' + bk_type ) == jQuery( el ).attr( 'name' ) ) {

                    // Show Warning only  if the calendar visible ( we are at step with  calendar)
                    if (
                            (  ( jQuery( '#calendar_booking' + bk_type ).is( ':visible' )  ) && ( '' == jQuery( el ).val() )  )
                         && ( wpbc_get_arr_of_selected_additional_calendars( bk_type ).length == 0 )                    //FixIn: 8.5.2.26
                    ){            //FixIn: 8.4.4.5

                        var notice_message_id = wpbc_front_end__show_message__error_under_element( '#booking_form_div' + bk_type + ' .bk_calendar_frame', message_verif_selectdts , 3000 );

						//wpbc_do_scroll('#calendar_booking' + bk_type);            // Scroll to the calendar    		//FixIn: 8.5.1.3
						is_error_in_field = true;    // Error
                    }
                }

                // Check only visible elements at this step
                if ( jQuery( el ).is( ':visible' )  ){
// console.log( '|id, type, val, visible|::', jQuery( el ).attr( 'name' ), '|' + jQuery( el ).attr( 'type' ) + '|', jQuery( el ).val(), jQuery( el ).is( ':visible' ) );

					// Is Required
					if ( jQuery( el ).hasClass( 'wpdev-validates-as-required' ) ){

						// Checkboxes
						if ( 'checkbox' == jQuery( el ).attr( 'type' ) ){

                            if (
                                    ( ! jQuery( el ).is( ':checked' ))
                                 && ( ! jQuery( ':checkbox[name="' + el.name + '"]', my_form ).is( ":checked" ) )       //FixIn: 8.5.2.12
                            ){
                                var checkbox_parent_element;

                                if ( jQuery( el ).parents( '.wpdev-form-control-wrap' ).length > 0 ){

                                    checkbox_parent_element = jQuery( el ).parents( '.wpdev-form-control-wrap' );

                                } else if ( jQuery( el ).parents( '.controls' ).length > 0 ){

                                    checkbox_parent_element = jQuery( el ).parents( '.controls' );

                                } else {

                                    checkbox_parent_element = jQuery( el );
                                }
                                var notice_message_id = wpbc_front_end__show_message__warning( checkbox_parent_element, message_verif_requred_for_check_box );

                                fields_with_errors_arr.push( el );
								is_error_in_field = true;    // Error
							}

							// Radio boxes
						} else if ( 'radio' == jQuery( el ).attr( 'type' ) ){

							if ( !jQuery( ':radio[name="' + jQuery( el ).attr( 'name' ) + '"]', my_form ).is( ':checked' ) ){
                                var notice_message_id = wpbc_front_end__show_message__warning( jQuery( el ).parents('.wpdev-form-control-wrap'), message_verif_requred_for_radio_box );
                                fields_with_errors_arr.push( el );
								is_error_in_field = true;    // Error
							}

							// Other elements
						} else {

							var inp_value = jQuery( el ).val();

                            if ( '' === wpbc_trim( inp_value ) ){                                                       //FixIn: 8.8.1.3        //FixIn: 8.7.11.12

                                var notice_message_id = wpbc_front_end__show_message__warning( el, message_verif_requred );

                                fields_with_errors_arr.push( el );
								is_error_in_field = true;    // Error
							}
						}
					}

					// Validate Email
					if ( jQuery( el ).hasClass( 'wpdev-validates-as-email' ) ){
						var inp_value = jQuery( el ).val();
						inp_value = inp_value.replace( /^\s+|\s+$/gm, '' );                // Trim  white space //FixIn: 5.4.5
						var reg = /^([A-Za-z0-9_\-\.\+])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/;
						if ( (inp_value != '') && (reg.test( inp_value ) == false) ){

                            var notice_message_id = wpbc_front_end__show_message__warning( el, message_verif_emeil );
                            fields_with_errors_arr.push( el );
							is_error_in_field = true;    // Error
						}
					}

					// Validate For digit entering - for example for - Phone
					// <p>Digit Field:<br />[text* dig_field class:validate_as_digit] </p>
					// <p>Phone:<br />[text* phone class:validate_digit_8] </p>

					var classList = jQuery( el ).attr( 'class' );

					if ( classList ){

						classList = classList.split( /\s+/ );

                        jQuery.each( classList, function ( cl_index, cl_item ){

                            ////////////////////////////////////////////////////////////////////////////////////////////

                            // Validate field value as "Date"   [CSS class - 'validate_as_digit']
                            if ( 'validate_as_date' === cl_item ) {

                                // Valid values: 09-25-2018, 09/25/2018, 09-25-2018,  31-9-1918  ---   m/d/Y, m.d.Y, m-d-Y, d/m/Y, d.m.Y, d-m-Y
                                var regex = new RegExp( '^[0-3]?\\d{1}[\\/\\.\\-]+[0-3]?\\d{1}[\\/\\.\\-]+[0-2]+\\d{3}$' );       // Check for Date 09/25/2018
                                var message_verif_phone = 'This field must be valid date like this ' + '09/25/2018';
                                var inp_value = jQuery( el ).val();

                                if (  ( inp_value != '' ) && ( regex.test( inp_value ) == false )  ){
                                    wpbc_front_end__show_message__warning( el, message_verif_phone );
                                    fields_with_errors_arr.push( el );
                                    is_error_in_field = true;    // Error
                                }
                            }

                            ////////////////////////////////////////////////////////////////////////////////////////////

                            // Validate field value as "DIGIT"   [CSS class - 'validate_as_digit']
                            if ( 'validate_as_digit' === cl_item ) {

                                var regex = new RegExp( '^[0-9]+\\.?[0-9]*$' );       // Check for digits
                                var message_verif_phone = 'This field must contain only digits';
                                var inp_value = jQuery( el ).val();

                                if (  ( inp_value != '' ) && ( regex.test( inp_value ) == false )  ){
                                    wpbc_front_end__show_message__warning( el, message_verif_phone );
                                    fields_with_errors_arr.push( el );
                                    is_error_in_field = true;    // Error
                                }
                            }

                            ////////////////////////////////////////////////////////////////////////////////////////////

                            // Validate field value as "Phone" number or any other valid number wth specific number of digits [CSS class - 'validate_digit_8' || 'validate_digit_10' ]
                            var is_validate_digit = cl_item.substring( 0, 15 );

                            // Check  if class start  with 'validate_digit_'
                            if ( 'validate_digit_' === is_validate_digit ){

                                // Get  number of digit in class: validate_digit_8 => 8 or validate_digit_10 => 10
                                var digits_to_check = parseInt( cl_item.substring( 15 ) );

                                // Check  about any errors in
                                if ( !isNaN( digits_to_check ) ){

                                    var regex = new RegExp( '^\\d{' + digits_to_check + '}$' );       // We was valid it as parseInt - only integer variable - digits_to_check
                                    var message_verif_phone = 'This field must contain ' + digits_to_check + ' digits';
                                    var inp_value = jQuery( el ).val();

									if (  ( inp_value != '' ) && ( regex.test( inp_value ) == false )  ){
                                        wpbc_front_end__show_message__warning( el, message_verif_phone );
                                        fields_with_errors_arr.push( el );
                                        is_error_in_field = true;    // Error
                                    }
                                }
                            }

                            ////////////////////////////////////////////////////////////////////////////////////////////

                        });
    				}
                }
			}
        } );

        if ( fields_with_errors_arr.length > 0 ){
            jQuery( fields_with_errors_arr[ 0 ] ).trigger( 'focus' );    //FixIn: 9.3.1.9
        }
	}

    return is_error_in_field;
}


//FixIn: 8.4.4.4
function bk_calendar_step_click( el ){
    var br_id = jQuery( el ).closest( 'form' ).find( 'input[name^="bk_type"]' ).val();
    var is_error = wpbc_check_errors_in_booking_form( br_id );
    if ( is_error ){
        return false;
    }
    if ( br_id != undefined ){
        jQuery( "#booking_form" + br_id + " .bk_calendar_step" ).css( {"display": "none"} );
        jQuery( "#booking_form" + br_id + " .bk_form_step" ).css( {"display": "block"} );
    } else {
        jQuery( ".bk_calendar_step" ).css( {"display": "none"} );
        jQuery( ".bk_form_step" ).css( {"display": "block"} );
    }
}

function bk_form_step_click( el ){
    var br_id = jQuery( el ).closest( 'form' ).find( 'input[name^="bk_type"]' ).val();
    var is_error = false; // wpbc_check_errors_in_booking_form( br_id );          //FixIn: 8.4.5.6
    if ( is_error ){
        return false;
    }
    if ( br_id != undefined ){
        jQuery( "#booking_form" + br_id + " .bk_calendar_step" ).css( {"display": "block"} );
        jQuery( "#booking_form" + br_id + " .bk_form_step" ).css( {"display": "none"} );
        wpbc_do_scroll( "#bklnk" + br_id );
    } else {
        jQuery( ".bk_calendar_step" ).css( {"display": "block"} );
        jQuery( ".bk_form_step" ).css( {"display": "none"} );
    }
}

//FixIn: 8.6.1.15
/**
 * Go to next  specific step in Wizard style booking form, with
 * check all required elements specific step, otherwise show warning message!
 *
 * @param el
 * @param step_num
 * @returns {boolean}
 */
function wpbc_wizard_step( el, step_num, step_from ){
    var br_id = jQuery( el ).closest( 'form' ).find( 'input[name^="bk_type"]' ).val();

    //FixIn: 8.8.1.5
    if ( ( undefined == step_from ) || ( step_num > step_from ) ){
        if ( 1 != step_num ){                                                                       //FixIn: 8.7.7.8
            var is_error = wpbc_check_errors_in_booking_form( br_id );
            if ( is_error ){
                return false;
            }
        }
    }

    if ( wpbc_is_some_elements_visible( br_id, ['rangetime', 'durationtime', 'starttime', 'endtime'] ) ){
        if ( wpbc_is_this_time_selection_not_available( br_id, document.getElementById( 'booking_form' + br_id ) ) ){
            return false;
        }
    }

    if ( br_id != undefined ){
        jQuery( "#booking_form" + br_id + " .wpbc_wizard_step" ).css( {"display": "none"} );
        jQuery( "#booking_form" + br_id + " .wpbc_wizard_step" + step_num ).css( {"display": "block"} );
    }
}


//FixIn: 8.6.1.15
/**
 * Check if at least  one element from  array  of  elements names in booking form  visible  or not.
 * Usage Example:   if ( wpbc_is_some_elements_visible( br_id, ['rangetime', 'durationtime', 'starttime', 'endtime'] ) ){ ... }
 *
 * @param bk_type
 * @param elements_names
 * @returns {boolean}
 */
function wpbc_is_some_elements_visible( bk_type, elements_names ){

    var is_some_elements_visible = false;

    var my_form = jQuery( '#booking_form' + bk_type );

    if ( my_form.length ){

        // Pseudo-selector that get form elements <input , <textarea , <select, <button...
        my_form.find( ':input' ).each( function ( index, el ){

            // Skip some elements
            var skip_elements = ['hidden', 'button'];

            if ( -1 == skip_elements.indexOf( jQuery( el ).attr( 'type' ) ) ){

                for ( var ei = 0; ei < ( elements_names.length - 1) ; ei++ ){

                    // Check Calendar Dates Selection
                    if ( (elements_names[ ei ] + bk_type) == jQuery( el ).attr( 'name' ) ){

                        if ( jQuery( el ).is( ':visible' ) ){
                            is_some_elements_visible = true;
                        }
                    }
                }
            }
        } );
    }
    return is_some_elements_visible;
}

//FixIn: 9.2.3.4
/**
 * Select dates in calendar
 *
 * @param int       resource_id             1
 * @param array     selected_dates          [ [ 2022, "09", 20 ], [ 2022, "09", 21 ], ... ]
 */
function wpbc_select_days_in_calendar( resource_id, selected_dates ){

    //clearTimeout( timeout_DSwindow );

    var inst = jQuery.datepick._getInst( document.getElementById( 'calendar_booking' + resource_id ) );
    inst.dates = [];
    var original_array = [];
    var date;

    var bk_inputing = document.getElementById( 'date_booking' + resource_id );
    var bk_distinct_dates = [];

    if ( 0 ){                                                                   // Select  one additional day in calendar, during editing of booking  //FixIn: 6.2.3.6
        var last_selected_date = new Date();
        last_selected_date.setFullYear( parseInt( selected_dates[ selected_dates.length - 1 ][ 0 ] ) );
        last_selected_date.setMonth( parseInt( selected_dates[ selected_dates.length - 1 ][ 1 ] - 1 ) );
        last_selected_date.setDate( parseInt( selected_dates[ selected_dates.length - 1 ][ 2 ] ) );
        last_selected_date.setHours( 0 );
        last_selected_date.setMinutes( 0 );
        last_selected_date.setSeconds( 0 );
        var last_selected_next_date = new Date( last_selected_date.getTime() + 1000 * 60 * 60 * 24 );
        selected_dates.push( new Array( last_selected_next_date.getFullYear(), (last_selected_next_date.getMonth() + 1), last_selected_next_date.getDate() ) );
    }

    for ( var i = 0; i < selected_dates.length; i++ ){

        var dta = selected_dates[ i ];

        date = new Date();
        date.setFullYear( dta[ 0 ], (dta[ 1 ] - 1), dta[ 2 ] );    // get date
        original_array.push( jQuery.datepick._restrictMinMax( inst, jQuery.datepick._determineDate( inst, date, null ) ) ); //add date

        // Add leading 0 for number from 1 to 9                                                                 //FixIn: 8.0.2.2
        dta[ 2 ] = parseInt( dta[ 2 ] );
        if ( dta[ 2 ] < 10 ){
            dta[ 2 ] = '0' + dta[ 2 ];
        }
        dta[ 1 ] = parseInt( dta[ 1 ] );
        if ( dta[ 1 ] < 10 ){
            dta[ 1 ] = '0' + dta[ 1 ];
        }
        if ( !wpdev_in_array( bk_distinct_dates, dta[ 2 ] + '.' + dta[ 1 ] + '.' + dta[ 0 ] ) )
            bk_distinct_dates.push( dta[ 2 ] + '.' + dta[ 1 ] + '.' + dta[ 0 ] );
    }

    for ( var j = 0; j < original_array.length; j++ ){       //loop array of dates
        if ( original_array[ j ] != -1 ) inst.dates.push( original_array[ j ] );
    }
    var dateStr = (inst.dates.length == 0 ? '' : jQuery.datepick._formatDate( inst, inst.dates[ 0 ] )); // Get first date
    for ( i = 1; i < inst.dates.length; i++ )
        dateStr += jQuery.datepick._get( inst, 'multiSeparator' ) + jQuery.datepick._formatDate( inst, inst.dates[ i ] );  // Gathering all dates
    jQuery( '#date_booking' + resource_id ).val( dateStr ); // Fill the input box

    if ( original_array.length > 0 ){ // Set showing of start month
        inst.cursorDate = original_array[ 0 ];
        inst.drawMonth = inst.cursorDate.getMonth();
        inst.drawYear = inst.cursorDate.getFullYear();
    }

    // Update calendar
    jQuery.datepick._notifyChange( inst );
    jQuery.datepick._adjustInstDate( inst );
        jQuery.datepick._showDate( inst );
    jQuery.datepick._updateDatepick( inst );

    if ( bk_inputing != null )
        bk_inputing.value = bk_distinct_dates.join( ', ' );


    if ( typeof (check_condition_sections_in_bkform) == 'function' ){
        check_condition_sections_in_bkform( jQuery( '#date_booking' + resource_id ).val(), resource_id );
    }


    if ( typeof (showCostHintInsideBkForm) == 'function' ){
        showCostHintInsideBkForm( resource_id );
    }
};
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/includes/_capacity/_out/create_booking.js?ver=10.0 
"use strict"; // ---------------------------------------------------------------------------------------------------------------------
//  A j a x    A d d    N e w    B o o k i n g
// ---------------------------------------------------------------------------------------------------------------------

/**
 * Submit new booking
 *
 * @param params   =     {
                                'resource_id'        : resource_id,
                                'dates_ddmmyy_csv'   : document.getElementById( 'date_booking' + resource_id ).value,
                                'formdata'           : formdata,
                                'booking_hash'       : my_booking_hash,
                                'custom_form'        : my_booking_form,

                                'captcha_chalange'   : captcha_chalange,
                                'captcha_user_input' : user_captcha,

                                'is_emails_send'     : is_send_emeils,
                                'active_locale'      : wpdev_active_locale
						}
 *
 */

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function wpbc_ajx_booking__create(params) {
  console.groupCollapsed('WPBC_AJX_BOOKING__CREATE');
  console.groupCollapsed('== Before Ajax Send ==');
  console.log(params);
  console.groupEnd();
  params = wpbc_captcha__simple__maybe_remove_in_ajx_params(params); // Start Ajax

  jQuery.post(wpbc_global1.wpbc_ajaxurl, {
    action: 'WPBC_AJX_BOOKING__CREATE',
    wpbc_ajx_user_id: _wpbc.get_secure_param('user_id'),
    nonce: _wpbc.get_secure_param('nonce'),
    wpbc_ajx_locale: _wpbc.get_secure_param('locale'),
    calendar_request_params: params
    /**
     *  Usually  params = { 'resource_id'        : resource_id,
     *						'dates_ddmmyy_csv'   : document.getElementById( 'date_booking' + resource_id ).value,
     *						'formdata'           : formdata,
     *						'booking_hash'       : my_booking_hash,
     *						'custom_form'        : my_booking_form,
     *
     *						'captcha_chalange'   : captcha_chalange,
     *						'user_captcha'       : user_captcha,
     *
     *						'is_emails_send'     : is_send_emeils,
     *						'active_locale'      : wpdev_active_locale
     *				}
     */

  },
  /**
   * S u c c e s s
   *
   * @param response_data		-	its object returned from  Ajax - class-live-searcg.php
   * @param textStatus		-	'success'
   * @param jqXHR				-	Object
   */
  function (response_data, textStatus, jqXHR) {
    console.log(' == Response WPBC_AJX_BOOKING__CREATE == ');

    for (var obj_key in response_data) {
      console.groupCollapsed('==' + obj_key + '==');
      console.log(' : ' + obj_key + ' : ', response_data[obj_key]);
      console.groupEnd();
    }

    console.groupEnd(); // <editor-fold     defaultstate="collapsed"     desc=" = Error Message! Server response with String.  ->  E_X_I_T  "  >
    // -------------------------------------------------------------------------------------------------
    // This section execute,  when server response with  String instead of Object -- Usually  it's because of mistake in code !
    // -------------------------------------------------------------------------------------------------

    if (_typeof(response_data) !== 'object' || response_data === null) {
      var calendar_id = wpbc_get_resource_id__from_ajx_post_data_url(this.data);
      var jq_node = '#booking_form' + calendar_id;

      if ('' == response_data) {
        response_data = '<strong>' + 'Error! Server respond with empty string!' + '</strong> ';
      } // Show Message


      wpbc_front_end__show_message(response_data, {
        'type': 'error',
        'show_here': {
          'jq_node': jq_node,
          'where': 'after'
        },
        'is_append': true,
        'style': 'text-align:left;',
        'delay': 0
      }); // Enable Submit | Hide spin loader

      wpbc_booking_form__on_response__ui_elements_enable(calendar_id);
      return;
    } // </editor-fold>
    // <editor-fold     defaultstate="collapsed"     desc="  ==  This section execute,  when we have KNOWN errors from Booking Calendar.  ->  E_X_I_T  "  >
    // -------------------------------------------------------------------------------------------------
    // This section execute,  when we have KNOWN errors from Booking Calendar
    // -------------------------------------------------------------------------------------------------


    if ('ok' != response_data['ajx_data']['status']) {
      switch (response_data['ajx_data']['status_error']) {
        case 'captcha_simple_wrong':
          wpbc_captcha__simple__update({
            'resource_id': response_data['resource_id'],
            'url': response_data['ajx_data']['captcha__simple']['url'],
            'challenge': response_data['ajx_data']['captcha__simple']['challenge'],
            'message': response_data['ajx_data']['ajx_after_action_message'].replace(/\n/g, "<br />")
          });
          break;

        case 'resource_id_incorrect':
          // Show Error Message - incorrect  booking resource ID during submit of booking.
          var message_id = wpbc_front_end__show_message(response_data['ajx_data']['ajx_after_action_message'].replace(/\n/g, "<br />"), {
            'type': 'undefined' !== typeof response_data['ajx_data']['ajx_after_action_message_status'] ? response_data['ajx_data']['ajx_after_action_message_status'] : 'warning',
            'delay': 0,
            'show_here': {
              'where': 'after',
              'jq_node': '#booking_form' + params['resource_id']
            }
          });
          break;

        case 'booking_can_not_save':
          // We can not save booking, because dates are booked or can not save in same booking resource all the dates
          var message_id = wpbc_front_end__show_message(response_data['ajx_data']['ajx_after_action_message'].replace(/\n/g, "<br />"), {
            'type': 'undefined' !== typeof response_data['ajx_data']['ajx_after_action_message_status'] ? response_data['ajx_data']['ajx_after_action_message_status'] : 'warning',
            'delay': 0,
            'show_here': {
              'where': 'after',
              'jq_node': '#booking_form' + params['resource_id']
            }
          }); // Enable Submit | Hide spin loader

          wpbc_booking_form__on_response__ui_elements_enable(response_data['resource_id']);
          break;

        default:
          // <editor-fold     defaultstate="collapsed"                        desc=" = For debug only ? --  Show Message under the form = "  >
          // --------------------------------------------------------------------------------------------------------------------------------
          if ('undefined' !== typeof response_data['ajx_data']['ajx_after_action_message'] && '' != response_data['ajx_data']['ajx_after_action_message'].replace(/\n/g, "<br />")) {
            var calendar_id = wpbc_get_resource_id__from_ajx_post_data_url(this.data);
            var jq_node = '#booking_form' + calendar_id;
            var ajx_after_booking_message = response_data['ajx_data']['ajx_after_action_message'].replace(/\n/g, "<br />");
            console.log(ajx_after_booking_message);
            /**
             * // Show Message
            	var ajx_after_action_message_id = wpbc_front_end__show_message( ajx_after_booking_message,
            								{
            									'type' : ('undefined' !== typeof (response_data[ 'ajx_data' ][ 'ajx_after_action_message_status' ]))
            											? response_data[ 'ajx_data' ][ 'ajx_after_action_message_status' ] : 'info',
            									'delay'    : 10000,
            									'show_here': {
            													'jq_node': jq_node,
            													'where'  : 'after'
            												 }
            								} );
             */
          }

        // </editor-fold>
      } // -------------------------------------------------------------------------------------------------
      // Reactivate calendar again ?
      // -------------------------------------------------------------------------------------------------
      // Enable Submit | Hide spin loader


      wpbc_booking_form__on_response__ui_elements_enable(response_data['resource_id']); // Unselect  dates

      wpbc_calendar__unselect_all_dates(response_data['resource_id']); // 'resource_id'    => $params['resource_id'],
      // 'booking_hash'   => $booking_hash,
      // 'request_uri'    => $_SERVER['REQUEST_URI'],                                            // Is it the same as window.location.href or
      // 'custom_form'    => $params['custom_form'],                                             // Optional.
      // 'aggregate_resource_id_str' => implode( ',', $params['aggregate_resource_id_arr'] )     // Optional. Resource ID   from  aggregate parameter in shortcode.
      // Load new data in calendar.

      wpbc_calendar__load_data__ajx({
        'resource_id': response_data['resource_id'] // It's from response ...AJX_BOOKING__CREATE of initial sent resource_id
        ,
        'booking_hash': response_data['ajx_cleaned_params']['booking_hash'] // ?? we can not use it,  because HASH chnaged in any  case!
        ,
        'request_uri': response_data['ajx_cleaned_params']['request_uri'],
        'custom_form': response_data['ajx_cleaned_params']['custom_form'] // Aggregate booking resources,  if any ?
        ,
        'aggregate_resource_id_str': _wpbc.booking__get_param_value(response_data['resource_id'], 'aggregate_resource_id_arr').join(',')
      }); // Exit

      return;
    } // </editor-fold>

    /*
    	// Show Calendar
    	wpbc_calendar__loading__stop( response_data[ 'resource_id' ] );
    
    	// -------------------------------------------------------------------------------------------------
    	// Bookings - Dates
    	_wpbc.bookings_in_calendar__set_dates(  response_data[ 'resource_id' ], response_data[ 'ajx_data' ]['dates']  );
    
    	// Bookings - Child or only single booking resource in dates
    	_wpbc.booking__set_param_value( response_data[ 'resource_id' ], 'resources_id_arr__in_dates', response_data[ 'ajx_data' ][ 'resources_id_arr__in_dates' ] );
    	// -------------------------------------------------------------------------------------------------
    
    	// Update calendar
    	wpbc_calendar__update_look( response_data[ 'resource_id' ] );
    */
    // Hide spin loader


    wpbc_booking_form__spin_loader__hide(response_data['resource_id']); // Hide booking form

    wpbc_booking_form__animated__hide(response_data['resource_id']); // Show Confirmation | Payment section

    wpbc_show_thank_you_message_after_booking(response_data);
    setTimeout(function () {
      wpbc_do_scroll('#wpbc_scroll_point_' + response_data['resource_id'], 10);
    }, 500);
  }).fail( // <editor-fold     defaultstate="collapsed"                        desc=" = This section execute,  when  NONCE field was not passed or some error happened at  server! = "  >
  function (jqXHR, textStatus, errorThrown) {
    if (window.console && window.console.log) {
      console.log('Ajax_Error', jqXHR, textStatus, errorThrown);
    } // -------------------------------------------------------------------------------------------------
    // This section execute,  when  NONCE field was not passed or some error happened at  server!
    // -------------------------------------------------------------------------------------------------
    // Get Content of Error Message


    var error_message = '<strong>' + 'Error!' + '</strong> ' + errorThrown;

    if (jqXHR.status) {
      error_message += ' (<b>' + jqXHR.status + '</b>)';

      if (403 == jqXHR.status) {
        error_message += '<br> Probably nonce for this page has been expired. Please <a href="javascript:void(0)" onclick="javascript:location.reload();">reload the page</a>.';
        error_message += '<br> Otherwise, please check this <a style="font-weight: 600;" href="https://wpbookingcalendar.com/faq/request-do-not-pass-security-check/">troubleshooting instruction</a>.<br>';
      }
    }

    if (jqXHR.responseText) {
      // Escape tags in Error message
      error_message += '<br><strong>Response</strong><div style="padding: 0 10px;margin: 0 0 10px;border-radius:3px; box-shadow:0px 0px 1px #a3a3a3;">' + jqXHR.responseText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;") + '</div>';
    }

    error_message = error_message.replace(/\n/g, "<br />");
    var calendar_id = wpbc_get_resource_id__from_ajx_post_data_url(this.data);
    var jq_node = '#booking_form' + calendar_id; // Show Message

    wpbc_front_end__show_message(error_message, {
      'type': 'error',
      'show_here': {
        'jq_node': jq_node,
        'where': 'after'
      },
      'is_append': true,
      'style': 'text-align:left;',
      'delay': 0
    }); // Enable Submit | Hide spin loader

    wpbc_booking_form__on_response__ui_elements_enable(calendar_id);
  } // </editor-fold>
  ) // .done(   function ( data, textStatus, jqXHR ) {   if ( window.console && window.console.log ){ console.log( 'second success', data, textStatus, jqXHR ); }    })
  // .always( function ( data_jqXHR, textStatus, jqXHR_errorThrown ) {   if ( window.console && window.console.log ){ console.log( 'always finished', data_jqXHR, textStatus, jqXHR_errorThrown ); }     })
  ; // End Ajax

  return true;
} // <editor-fold     defaultstate="collapsed"                        desc="  ==  CAPTCHA ==  "  >

/**
 * Update image in captcha and show warning message
 *
 * @param params
 *
 * Example of 'params' : {
 *							'resource_id': response_data[ 'resource_id' ],
 *							'url'        : response_data[ 'ajx_data' ][ 'captcha__simple' ][ 'url' ],
 *							'challenge'  : response_data[ 'ajx_data' ][ 'captcha__simple' ][ 'challenge' ],
 *							'message'    : response_data[ 'ajx_data' ][ 'ajx_after_action_message' ].replace( /\n/g, "<br />" )
 *						}
 */


function wpbc_captcha__simple__update(params) {
  document.getElementById('captcha_input' + params['resource_id']).value = '';
  document.getElementById('captcha_img' + params['resource_id']).src = params['url'];
  document.getElementById('wpdev_captcha_challenge_' + params['resource_id']).value = params['challenge']; // Show warning 		After CAPTCHA Img

  var message_id = wpbc_front_end__show_message__warning('#captcha_input' + params['resource_id'] + ' + img', params['message']); // Animate

  jQuery('#' + message_id + ', ' + '#captcha_input' + params['resource_id']).fadeOut(350).fadeIn(300).fadeOut(350).fadeIn(400).animate({
    opacity: 1
  }, 4000); // Focus text  field

  jQuery('#captcha_input' + params['resource_id']).trigger('focus'); //FixIn: 8.7.11.12
  // Enable Submit | Hide spin loader

  wpbc_booking_form__on_response__ui_elements_enable(params['resource_id']);
}
/**
 * If the captcha elements not exist  in the booking form,  then  remove parameters relative captcha
 * @param params
 * @returns obj
 */


function wpbc_captcha__simple__maybe_remove_in_ajx_params(params) {
  if (!wpbc_captcha__simple__is_exist_in_form(params['resource_id'])) {
    delete params['captcha_chalange'];
    delete params['captcha_user_input'];
  }

  return params;
}
/**
 * Check if CAPTCHA exist in the booking form
 * @param resource_id
 * @returns {boolean}
 */


function wpbc_captcha__simple__is_exist_in_form(resource_id) {
  return 0 !== jQuery('#wpdev_captcha_challenge_' + resource_id).length || 0 !== jQuery('#captcha_input' + resource_id).length;
} // </editor-fold>
// <editor-fold     defaultstate="collapsed"                        desc="  ==  Send Button | Form Spin Loader  ==  "  >

/**
 * Disable Send button  |  Show Spin Loader
 *
 * @param resource_id
 */


function wpbc_booking_form__on_submit__ui_elements_disable(resource_id) {
  // Disable Submit
  wpbc_booking_form__send_button__disable(resource_id); // Show Spin loader in booking form

  wpbc_booking_form__spin_loader__show(resource_id);
}
/**
 * Enable Send button  |   Hide Spin Loader
 *
 * @param resource_id
 */


function wpbc_booking_form__on_response__ui_elements_enable(resource_id) {
  // Enable Submit
  wpbc_booking_form__send_button__enable(resource_id); // Hide Spin loader in booking form

  wpbc_booking_form__spin_loader__hide(resource_id);
}
/**
 * Enable Submit button
 * @param resource_id
 */


function wpbc_booking_form__send_button__enable(resource_id) {
  // Activate Send button
  jQuery('#booking_form_div' + resource_id + ' input[type=button]').prop("disabled", false);
  jQuery('#booking_form_div' + resource_id + ' button').prop("disabled", false);
}
/**
 * Disable Submit button  and show  spin
 *
 * @param resource_id
 */


function wpbc_booking_form__send_button__disable(resource_id) {
  // Disable Send button
  jQuery('#booking_form_div' + resource_id + ' input[type=button]').prop("disabled", true);
  jQuery('#booking_form_div' + resource_id + ' button').prop("disabled", true);
}
/**
 * Show booking form  Spin Loader
 * @param resource_id
 */


function wpbc_booking_form__spin_loader__show(resource_id) {
  // Show Spin Loader
  jQuery('#booking_form' + resource_id).after('<div id="wpbc_booking_form_spin_loader' + resource_id + '" class="wpbc_booking_form_spin_loader" style="position: relative;"><div class="wpbc_spins_loader_wrapper"><div class="wpbc_spins_loader_mini"></div></div></div>');
}
/**
 * Remove / Hide booking form  Spin Loader
 * @param resource_id
 */


function wpbc_booking_form__spin_loader__hide(resource_id) {
  // Remove Spin Loader
  jQuery('#wpbc_booking_form_spin_loader' + resource_id).remove();
}
/**
 * Hide booking form wth animation
 *
 * @param resource_id
 */


function wpbc_booking_form__animated__hide(resource_id) {
  // jQuery( '#booking_form' + resource_id ).slideUp(  1000
  // 												, function (){
  //
  // 														// if ( document.getElementById( 'gateway_payment_forms' + response_data[ 'resource_id' ] ) != null ){
  // 														// 	wpbc_do_scroll( '#submiting' + resource_id );
  // 														// } else
  // 														if ( jQuery( '#booking_form' + resource_id ).parent().find( '.submiting_content' ).length > 0 ){
  // 															//wpbc_do_scroll( '#booking_form' + resource_id + ' + .submiting_content' );
  //
  // 															 var hideTimeout = setTimeout(function () {
  // 																				  wpbc_do_scroll( jQuery( '#booking_form' + resource_id ).parent().find( '.submiting_content' ).get( 0 ) );
  // 																				}, 100);
  //
  // 														}
  // 												  }
  // 										);
  jQuery('#booking_form' + resource_id).hide(); // var hideTimeout = setTimeout( function (){
  //
  // 	if ( jQuery( '#booking_form' + resource_id ).parent().find( '.submiting_content' ).length > 0 ){
  // 		var random_id = Math.floor( (Math.random() * 10000) + 1 );
  // 		jQuery( '#booking_form' + resource_id ).parent().before( '<div id="scroll_to' + random_id + '"></div>' );
  // 		console.log( jQuery( '#scroll_to' + random_id ) );
  //
  // 		wpbc_do_scroll( '#scroll_to' + random_id );
  // 		//wpbc_do_scroll( jQuery( '#booking_form' + resource_id ).parent().get( 0 ) );
  // 	}
  // }, 500 );
} // </editor-fold>
// <editor-fold     defaultstate="collapsed"                        desc="  ==  Mini Spin Loader  ==  "  >

/**
 * Show mini Spin Loader
 * @param parent_html_id
 */


function wpbc__spin_loader__mini__show(parent_html_id) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '#0071ce';

  if ('undefined' !== typeof color && '' != color) {
    color = 'border-color:' + color + ';';
  } // Show Spin Loader


  jQuery('#' + parent_html_id).after('<div id="wpbc_mini_spin_loader' + parent_html_id + '" class="wpbc_booking_form_spin_loader" style="position: relative;min-height: 2.8rem;"><div class="wpbc_spins_loader_wrapper"><div class="wpbc_one_spin_loader_mini 0wpbc_spins_loader_mini" style="' + color + '"></div></div></div>');
}
/**
 * Remove / Hide mini Spin Loader
 * @param parent_html_id
 */


function wpbc__spin_loader__mini__hide(parent_html_id) {
  // Remove Spin Loader
  jQuery('#wpbc_mini_spin_loader' + parent_html_id).remove();
} // </editor-fold>
//TODO: what  about showing only  Thank you. message without payment forms.

/**
 * Show 'Thank you'. message and payment forms
 *
 * @param response_data
 */


function wpbc_show_thank_you_message_after_booking(response_data) {
  if ('undefined' !== typeof response_data['ajx_confirmation']['ty_is_redirect'] && 'undefined' !== typeof response_data['ajx_confirmation']['ty_url'] && 'page' == response_data['ajx_confirmation']['ty_is_redirect'] && '' != response_data['ajx_confirmation']['ty_url']) {
    window.location.href = response_data['ajx_confirmation']['ty_url'];
    return;
  }

  var resource_id = response_data['resource_id'];
  var confirm_content = '';

  if ('undefined' === typeof response_data['ajx_confirmation']['ty_message']) {
    response_data['ajx_confirmation']['ty_message'] = '';
  }

  if ('undefined' === typeof response_data['ajx_confirmation']['ty_payment_payment_description']) {
    response_data['ajx_confirmation']['ty_payment_payment_description'] = '';
  }

  if ('undefined' === typeof response_data['ajx_confirmation']['payment_cost']) {
    response_data['ajx_confirmation']['payment_cost'] = '';
  }

  if ('undefined' === typeof response_data['ajx_confirmation']['ty_payment_gateways']) {
    response_data['ajx_confirmation']['ty_payment_gateways'] = '';
  }

  var ty_message_hide = '' == response_data['ajx_confirmation']['ty_message'] ? 'wpbc_ty_hide' : '';
  var ty_payment_payment_description_hide = '' == response_data['ajx_confirmation']['ty_payment_payment_description'].replace(/\\n/g, '') ? 'wpbc_ty_hide' : '';
  var ty_booking_costs_hide = '' == response_data['ajx_confirmation']['payment_cost'] ? 'wpbc_ty_hide' : '';
  var ty_payment_gateways_hide = '' == response_data['ajx_confirmation']['ty_payment_gateways'].replace(/\\n/g, '') ? 'wpbc_ty_hide' : '';

  if ('wpbc_ty_hide' != ty_payment_gateways_hide) {
    jQuery('.wpbc_ty__content_text.wpbc_ty__content_gateways').html(''); // Reset  all  other possible gateways before showing new one.
  }

  confirm_content += "<div id=\"wpbc_scroll_point_".concat(resource_id, "\"></div>");
  confirm_content += "  <div class=\"wpbc_after_booking_thank_you_section\">";
  confirm_content += "    <div class=\"wpbc_ty__message ".concat(ty_message_hide, "\">").concat(response_data['ajx_confirmation']['ty_message'], "</div>");
  confirm_content += "    <div class=\"wpbc_ty__container\">";
  confirm_content += "      <div class=\"wpbc_ty__header\">".concat(response_data['ajx_confirmation']['ty_message_booking_id'], "</div>");
  confirm_content += "      <div class=\"wpbc_ty__content\">";
  confirm_content += "        <div class=\"wpbc_ty__content_text wpbc_ty__payment_description ".concat(ty_payment_payment_description_hide, "\">").concat(response_data['ajx_confirmation']['ty_payment_payment_description'].replace(/\\n/g, ''), "</div>");
  confirm_content += "      \t<div class=\"wpbc_ty__content_text wpbc_cols_2\">".concat(response_data['ajx_confirmation']['ty_customer_details'], "</div>");
  confirm_content += "      \t<div class=\"wpbc_ty__content_text wpbc_cols_2\">".concat(response_data['ajx_confirmation']['ty_booking_details'], "</div>");
  confirm_content += "        <div class=\"wpbc_ty__content_text wpbc_ty__content_costs ".concat(ty_booking_costs_hide, "\">").concat(response_data['ajx_confirmation']['ty_booking_costs'], "</div>");
  confirm_content += "        <div class=\"wpbc_ty__content_text wpbc_ty__content_gateways ".concat(ty_payment_gateways_hide, "\">").concat(response_data['ajx_confirmation']['ty_payment_gateways'].replace(/\\n/g, '').replace(/ajax_script/gi, 'script'), "</div>");
  confirm_content += "      </div>";
  confirm_content += "    </div>";
  confirm_content += "</div>";
  jQuery('#booking_form' + resource_id).after(confirm_content);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluY2x1ZGVzL19jYXBhY2l0eS9fc3JjL2NyZWF0ZV9ib29raW5nLmpzIl0sIm5hbWVzIjpbIndwYmNfYWp4X2Jvb2tpbmdfX2NyZWF0ZSIsInBhcmFtcyIsImNvbnNvbGUiLCJncm91cENvbGxhcHNlZCIsImxvZyIsImdyb3VwRW5kIiwid3BiY19jYXB0Y2hhX19zaW1wbGVfX21heWJlX3JlbW92ZV9pbl9hanhfcGFyYW1zIiwialF1ZXJ5IiwicG9zdCIsIndwYmNfZ2xvYmFsMSIsIndwYmNfYWpheHVybCIsImFjdGlvbiIsIndwYmNfYWp4X3VzZXJfaWQiLCJfd3BiYyIsImdldF9zZWN1cmVfcGFyYW0iLCJub25jZSIsIndwYmNfYWp4X2xvY2FsZSIsImNhbGVuZGFyX3JlcXVlc3RfcGFyYW1zIiwicmVzcG9uc2VfZGF0YSIsInRleHRTdGF0dXMiLCJqcVhIUiIsIm9ial9rZXkiLCJjYWxlbmRhcl9pZCIsIndwYmNfZ2V0X3Jlc291cmNlX2lkX19mcm9tX2FqeF9wb3N0X2RhdGFfdXJsIiwiZGF0YSIsImpxX25vZGUiLCJ3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlIiwid3BiY19ib29raW5nX2Zvcm1fX29uX3Jlc3BvbnNlX191aV9lbGVtZW50c19lbmFibGUiLCJ3cGJjX2NhcHRjaGFfX3NpbXBsZV9fdXBkYXRlIiwicmVwbGFjZSIsIm1lc3NhZ2VfaWQiLCJhanhfYWZ0ZXJfYm9va2luZ19tZXNzYWdlIiwid3BiY19jYWxlbmRhcl9fdW5zZWxlY3RfYWxsX2RhdGVzIiwid3BiY19jYWxlbmRhcl9fbG9hZF9kYXRhX19hangiLCJib29raW5nX19nZXRfcGFyYW1fdmFsdWUiLCJqb2luIiwid3BiY19ib29raW5nX2Zvcm1fX3NwaW5fbG9hZGVyX19oaWRlIiwid3BiY19ib29raW5nX2Zvcm1fX2FuaW1hdGVkX19oaWRlIiwid3BiY19zaG93X3RoYW5rX3lvdV9tZXNzYWdlX2FmdGVyX2Jvb2tpbmciLCJzZXRUaW1lb3V0Iiwid3BiY19kb19zY3JvbGwiLCJmYWlsIiwiZXJyb3JUaHJvd24iLCJ3aW5kb3ciLCJlcnJvcl9tZXNzYWdlIiwic3RhdHVzIiwicmVzcG9uc2VUZXh0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwic3JjIiwid3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZV9fd2FybmluZyIsImZhZGVPdXQiLCJmYWRlSW4iLCJhbmltYXRlIiwib3BhY2l0eSIsInRyaWdnZXIiLCJ3cGJjX2NhcHRjaGFfX3NpbXBsZV9faXNfZXhpc3RfaW5fZm9ybSIsInJlc291cmNlX2lkIiwibGVuZ3RoIiwid3BiY19ib29raW5nX2Zvcm1fX29uX3N1Ym1pdF9fdWlfZWxlbWVudHNfZGlzYWJsZSIsIndwYmNfYm9va2luZ19mb3JtX19zZW5kX2J1dHRvbl9fZGlzYWJsZSIsIndwYmNfYm9va2luZ19mb3JtX19zcGluX2xvYWRlcl9fc2hvdyIsIndwYmNfYm9va2luZ19mb3JtX19zZW5kX2J1dHRvbl9fZW5hYmxlIiwicHJvcCIsImFmdGVyIiwicmVtb3ZlIiwiaGlkZSIsIndwYmNfX3NwaW5fbG9hZGVyX19taW5pX19zaG93IiwicGFyZW50X2h0bWxfaWQiLCJjb2xvciIsIndwYmNfX3NwaW5fbG9hZGVyX19taW5pX19oaWRlIiwibG9jYXRpb24iLCJocmVmIiwiY29uZmlybV9jb250ZW50IiwidHlfbWVzc2FnZV9oaWRlIiwidHlfcGF5bWVudF9wYXltZW50X2Rlc2NyaXB0aW9uX2hpZGUiLCJ0eV9ib29raW5nX2Nvc3RzX2hpZGUiLCJ0eV9wYXltZW50X2dhdGV3YXlzX2hpZGUiLCJodG1sIl0sIm1hcHBpbmdzIjoiQUFBQSxhLENBRUE7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUNBLFNBQVNBLHdCQUFULENBQW1DQyxNQUFuQyxFQUEyQztBQUUzQ0MsRUFBQUEsT0FBTyxDQUFDQyxjQUFSLENBQXdCLDBCQUF4QjtBQUNBRCxFQUFBQSxPQUFPLENBQUNDLGNBQVIsQ0FBd0Isd0JBQXhCO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0UsR0FBUixDQUFhSCxNQUFiO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0csUUFBUjtBQUVDSixFQUFBQSxNQUFNLEdBQUdLLGdEQUFnRCxDQUFFTCxNQUFGLENBQXpELENBUDBDLENBUzFDOztBQUNBTSxFQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBYUMsWUFBWSxDQUFDQyxZQUExQixFQUNHO0FBQ0NDLElBQUFBLE1BQU0sRUFBWSwwQkFEbkI7QUFFQ0MsSUFBQUEsZ0JBQWdCLEVBQUVDLEtBQUssQ0FBQ0MsZ0JBQU4sQ0FBd0IsU0FBeEIsQ0FGbkI7QUFHQ0MsSUFBQUEsS0FBSyxFQUFhRixLQUFLLENBQUNDLGdCQUFOLENBQXdCLE9BQXhCLENBSG5CO0FBSUNFLElBQUFBLGVBQWUsRUFBR0gsS0FBSyxDQUFDQyxnQkFBTixDQUF3QixRQUF4QixDQUpuQjtBQU1DRyxJQUFBQSx1QkFBdUIsRUFBR2hCO0FBRTFCO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBckJJLEdBREg7QUF5Qkc7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSSxZQUFXaUIsYUFBWCxFQUEwQkMsVUFBMUIsRUFBc0NDLEtBQXRDLEVBQThDO0FBQ2xEbEIsSUFBQUEsT0FBTyxDQUFDRSxHQUFSLENBQWEsMkNBQWI7O0FBQ0EsU0FBTSxJQUFJaUIsT0FBVixJQUFxQkgsYUFBckIsRUFBb0M7QUFDbkNoQixNQUFBQSxPQUFPLENBQUNDLGNBQVIsQ0FBd0IsT0FBT2tCLE9BQVAsR0FBaUIsSUFBekM7QUFDQW5CLE1BQUFBLE9BQU8sQ0FBQ0UsR0FBUixDQUFhLFFBQVFpQixPQUFSLEdBQWtCLEtBQS9CLEVBQXNDSCxhQUFhLENBQUVHLE9BQUYsQ0FBbkQ7QUFDQW5CLE1BQUFBLE9BQU8sQ0FBQ0csUUFBUjtBQUNBOztBQUNESCxJQUFBQSxPQUFPLENBQUNHLFFBQVIsR0FQa0QsQ0FVN0M7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBTSxRQUFPYSxhQUFQLE1BQXlCLFFBQTFCLElBQXdDQSxhQUFhLEtBQUssSUFBL0QsRUFBc0U7QUFFckUsVUFBSUksV0FBVyxHQUFHQyw0Q0FBNEMsQ0FBRSxLQUFLQyxJQUFQLENBQTlEO0FBQ0EsVUFBSUMsT0FBTyxHQUFHLGtCQUFrQkgsV0FBaEM7O0FBRUEsVUFBSyxNQUFNSixhQUFYLEVBQTBCO0FBQ3pCQSxRQUFBQSxhQUFhLEdBQUcsYUFBYSwwQ0FBYixHQUEwRCxZQUExRTtBQUNBLE9BUG9FLENBUXJFOzs7QUFDQVEsTUFBQUEsNEJBQTRCLENBQUVSLGFBQUYsRUFBa0I7QUFBRSxnQkFBYSxPQUFmO0FBQ2xDLHFCQUFhO0FBQUMscUJBQVdPLE9BQVo7QUFBcUIsbUJBQVM7QUFBOUIsU0FEcUI7QUFFbEMscUJBQWEsSUFGcUI7QUFHbEMsaUJBQWEsa0JBSHFCO0FBSWxDLGlCQUFhO0FBSnFCLE9BQWxCLENBQTVCLENBVHFFLENBZXJFOztBQUNBRSxNQUFBQSxrREFBa0QsQ0FBRUwsV0FBRixDQUFsRDtBQUNBO0FBQ0EsS0FoQzRDLENBaUM3QztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxRQUFLLFFBQVFKLGFBQWEsQ0FBRSxVQUFGLENBQWIsQ0FBNkIsUUFBN0IsQ0FBYixFQUF1RDtBQUV0RCxjQUFTQSxhQUFhLENBQUUsVUFBRixDQUFiLENBQTZCLGNBQTdCLENBQVQ7QUFFQyxhQUFLLHNCQUFMO0FBQ0NVLFVBQUFBLDRCQUE0QixDQUFFO0FBQ3RCLDJCQUFlVixhQUFhLENBQUUsYUFBRixDQUROO0FBRXRCLG1CQUFlQSxhQUFhLENBQUUsVUFBRixDQUFiLENBQTZCLGlCQUE3QixFQUFrRCxLQUFsRCxDQUZPO0FBR3RCLHlCQUFlQSxhQUFhLENBQUUsVUFBRixDQUFiLENBQTZCLGlCQUE3QixFQUFrRCxXQUFsRCxDQUhPO0FBSXRCLHVCQUFlQSxhQUFhLENBQUUsVUFBRixDQUFiLENBQTZCLDBCQUE3QixFQUEwRFcsT0FBMUQsQ0FBbUUsS0FBbkUsRUFBMEUsUUFBMUU7QUFKTyxXQUFGLENBQTVCO0FBT0E7O0FBRUQsYUFBSyx1QkFBTDtBQUE2QztBQUM1QyxjQUFJQyxVQUFVLEdBQUdKLDRCQUE0QixDQUFFUixhQUFhLENBQUUsVUFBRixDQUFiLENBQTZCLDBCQUE3QixFQUEwRFcsT0FBMUQsQ0FBbUUsS0FBbkUsRUFBMEUsUUFBMUUsQ0FBRixFQUNyQztBQUNDLG9CQUFVLGdCQUFnQixPQUFRWCxhQUFhLENBQUUsVUFBRixDQUFiLENBQTZCLGlDQUE3QixDQUF6QixHQUNMQSxhQUFhLENBQUUsVUFBRixDQUFiLENBQTZCLGlDQUE3QixDQURLLEdBQzhELFNBRnhFO0FBR0MscUJBQWEsQ0FIZDtBQUlDLHlCQUFhO0FBQUUsdUJBQVMsT0FBWDtBQUFvQix5QkFBVyxrQkFBa0JqQixNQUFNLENBQUUsYUFBRjtBQUF2RDtBQUpkLFdBRHFDLENBQTdDO0FBT0E7O0FBRUQsYUFBSyxzQkFBTDtBQUE0QztBQUMzQyxjQUFJNkIsVUFBVSxHQUFHSiw0QkFBNEIsQ0FBRVIsYUFBYSxDQUFFLFVBQUYsQ0FBYixDQUE2QiwwQkFBN0IsRUFBMERXLE9BQTFELENBQW1FLEtBQW5FLEVBQTBFLFFBQTFFLENBQUYsRUFDckM7QUFDQyxvQkFBVSxnQkFBZ0IsT0FBUVgsYUFBYSxDQUFFLFVBQUYsQ0FBYixDQUE2QixpQ0FBN0IsQ0FBekIsR0FDTEEsYUFBYSxDQUFFLFVBQUYsQ0FBYixDQUE2QixpQ0FBN0IsQ0FESyxHQUM4RCxTQUZ4RTtBQUdDLHFCQUFhLENBSGQ7QUFJQyx5QkFBYTtBQUFFLHVCQUFTLE9BQVg7QUFBb0IseUJBQVcsa0JBQWtCakIsTUFBTSxDQUFFLGFBQUY7QUFBdkQ7QUFKZCxXQURxQyxDQUE3QyxDQURELENBU0M7O0FBQ0EwQixVQUFBQSxrREFBa0QsQ0FBRVQsYUFBYSxDQUFFLGFBQUYsQ0FBZixDQUFsRDtBQUVBOztBQUdEO0FBRUM7QUFDQTtBQUNBLGNBQ0ksZ0JBQWdCLE9BQVFBLGFBQWEsQ0FBRSxVQUFGLENBQWIsQ0FBNkIsMEJBQTdCLENBQTFCLElBQ0ssTUFBTUEsYUFBYSxDQUFFLFVBQUYsQ0FBYixDQUE2QiwwQkFBN0IsRUFBMERXLE9BQTFELENBQW1FLEtBQW5FLEVBQTBFLFFBQTFFLENBRmIsRUFHQztBQUVBLGdCQUFJUCxXQUFXLEdBQUdDLDRDQUE0QyxDQUFFLEtBQUtDLElBQVAsQ0FBOUQ7QUFDQSxnQkFBSUMsT0FBTyxHQUFHLGtCQUFrQkgsV0FBaEM7QUFFQSxnQkFBSVMseUJBQXlCLEdBQUdiLGFBQWEsQ0FBRSxVQUFGLENBQWIsQ0FBNkIsMEJBQTdCLEVBQTBEVyxPQUExRCxDQUFtRSxLQUFuRSxFQUEwRSxRQUExRSxDQUFoQztBQUVBM0IsWUFBQUEsT0FBTyxDQUFDRSxHQUFSLENBQWEyQix5QkFBYjtBQUVBO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1M7O0FBQ0Q7QUFuRUYsT0FGc0QsQ0F5RXREO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQUosTUFBQUEsa0RBQWtELENBQUVULGFBQWEsQ0FBRSxhQUFGLENBQWYsQ0FBbEQsQ0E3RXNELENBK0V0RDs7QUFDQWMsTUFBQUEsaUNBQWlDLENBQUVkLGFBQWEsQ0FBRSxhQUFGLENBQWYsQ0FBakMsQ0FoRnNELENBa0Z0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0FlLE1BQUFBLDZCQUE2QixDQUFFO0FBQ3hCLHVCQUFnQmYsYUFBYSxDQUFFLGFBQUYsQ0FETCxDQUM2QjtBQUQ3QjtBQUV4Qix3QkFBZ0JBLGFBQWEsQ0FBRSxvQkFBRixDQUFiLENBQXNDLGNBQXRDLENBRlEsQ0FFK0M7QUFGL0M7QUFHeEIsdUJBQWdCQSxhQUFhLENBQUUsb0JBQUYsQ0FBYixDQUFzQyxhQUF0QyxDQUhRO0FBSXhCLHVCQUFnQkEsYUFBYSxDQUFFLG9CQUFGLENBQWIsQ0FBc0MsYUFBdEMsQ0FKUSxDQUtsQjtBQUxrQjtBQU14QixxQ0FBOEJMLEtBQUssQ0FBQ3FCLHdCQUFOLENBQWdDaEIsYUFBYSxDQUFFLGFBQUYsQ0FBN0MsRUFBZ0UsMkJBQWhFLEVBQThGaUIsSUFBOUYsQ0FBbUcsR0FBbkc7QUFOTixPQUFGLENBQTdCLENBekZzRCxDQWtHdEQ7O0FBQ0E7QUFDQSxLQTdJNEMsQ0ErSTdDOztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVLOzs7QUFDQUMsSUFBQUEsb0NBQW9DLENBQUVsQixhQUFhLENBQUUsYUFBRixDQUFmLENBQXBDLENBbks2QyxDQXFLN0M7O0FBQ0FtQixJQUFBQSxpQ0FBaUMsQ0FBRW5CLGFBQWEsQ0FBRSxhQUFGLENBQWYsQ0FBakMsQ0F0SzZDLENBd0s3Qzs7QUFDQW9CLElBQUFBLHlDQUF5QyxDQUFFcEIsYUFBRixDQUF6QztBQUVBcUIsSUFBQUEsVUFBVSxDQUFFLFlBQVc7QUFDdEJDLE1BQUFBLGNBQWMsQ0FBRSx3QkFBd0J0QixhQUFhLENBQUUsYUFBRixDQUF2QyxFQUEwRCxFQUExRCxDQUFkO0FBQ0EsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQU1BLEdBak5KLEVBa05NdUIsSUFsTk4sRUFtTks7QUFDQSxZQUFXckIsS0FBWCxFQUFrQkQsVUFBbEIsRUFBOEJ1QixXQUE5QixFQUE0QztBQUFLLFFBQUtDLE1BQU0sQ0FBQ3pDLE9BQVAsSUFBa0J5QyxNQUFNLENBQUN6QyxPQUFQLENBQWVFLEdBQXRDLEVBQTJDO0FBQUVGLE1BQUFBLE9BQU8sQ0FBQ0UsR0FBUixDQUFhLFlBQWIsRUFBMkJnQixLQUEzQixFQUFrQ0QsVUFBbEMsRUFBOEN1QixXQUE5QztBQUE4RCxLQUFoSCxDQUU3QztBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsUUFBSUUsYUFBYSxHQUFHLGFBQWEsUUFBYixHQUF3QixZQUF4QixHQUF1Q0YsV0FBM0Q7O0FBQ0EsUUFBS3RCLEtBQUssQ0FBQ3lCLE1BQVgsRUFBbUI7QUFDbEJELE1BQUFBLGFBQWEsSUFBSSxVQUFVeEIsS0FBSyxDQUFDeUIsTUFBaEIsR0FBeUIsT0FBMUM7O0FBQ0EsVUFBSSxPQUFPekIsS0FBSyxDQUFDeUIsTUFBakIsRUFBeUI7QUFDeEJELFFBQUFBLGFBQWEsSUFBSSxzSkFBakI7QUFDQUEsUUFBQUEsYUFBYSxJQUFJLGtMQUFqQjtBQUNBO0FBQ0Q7O0FBQ0QsUUFBS3hCLEtBQUssQ0FBQzBCLFlBQVgsRUFBeUI7QUFDeEI7QUFDQUYsTUFBQUEsYUFBYSxJQUFJLG1JQUFtSXhCLEtBQUssQ0FBQzBCLFlBQU4sQ0FBbUJqQixPQUFuQixDQUEyQixJQUEzQixFQUFpQyxPQUFqQyxFQUN4SUEsT0FEd0ksQ0FDaEksSUFEZ0ksRUFDMUgsTUFEMEgsRUFFeElBLE9BRndJLENBRWhJLElBRmdJLEVBRTFILE1BRjBILEVBR3hJQSxPQUh3SSxDQUdoSSxJQUhnSSxFQUcxSCxRQUgwSCxFQUl4SUEsT0FKd0ksQ0FJaEksSUFKZ0ksRUFJMUgsT0FKMEgsQ0FBbkksR0FLWixRQUxMO0FBTUE7O0FBQ0RlLElBQUFBLGFBQWEsR0FBR0EsYUFBYSxDQUFDZixPQUFkLENBQXVCLEtBQXZCLEVBQThCLFFBQTlCLENBQWhCO0FBRUEsUUFBSVAsV0FBVyxHQUFHQyw0Q0FBNEMsQ0FBRSxLQUFLQyxJQUFQLENBQTlEO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLGtCQUFrQkgsV0FBaEMsQ0EzQjZDLENBNkI3Qzs7QUFDQUksSUFBQUEsNEJBQTRCLENBQUVrQixhQUFGLEVBQWtCO0FBQUUsY0FBYSxPQUFmO0FBQ2xDLG1CQUFhO0FBQUMsbUJBQVduQixPQUFaO0FBQXFCLGlCQUFTO0FBQTlCLE9BRHFCO0FBRWxDLG1CQUFhLElBRnFCO0FBR2xDLGVBQWEsa0JBSHFCO0FBSWxDLGVBQWE7QUFKcUIsS0FBbEIsQ0FBNUIsQ0E5QjZDLENBb0M3Qzs7QUFDQUUsSUFBQUEsa0RBQWtELENBQUVMLFdBQUYsQ0FBbEQ7QUFDRyxHQTFQUCxDQTJQSTtBQTNQSixJQTZQVTtBQUNOO0FBOVBKLEdBVjBDLENBeVFuQzs7QUFFUCxTQUFPLElBQVA7QUFDQSxDLENBR0E7O0FBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQyxTQUFTTSw0QkFBVCxDQUF1QzNCLE1BQXZDLEVBQStDO0FBRTlDOEMsRUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXlCLGtCQUFrQi9DLE1BQU0sQ0FBRSxhQUFGLENBQWpELEVBQXFFZ0QsS0FBckUsR0FBNkUsRUFBN0U7QUFDQUYsRUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXlCLGdCQUFnQi9DLE1BQU0sQ0FBRSxhQUFGLENBQS9DLEVBQW1FaUQsR0FBbkUsR0FBeUVqRCxNQUFNLENBQUUsS0FBRixDQUEvRTtBQUNBOEMsRUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXlCLDZCQUE2Qi9DLE1BQU0sQ0FBRSxhQUFGLENBQTVELEVBQWdGZ0QsS0FBaEYsR0FBd0ZoRCxNQUFNLENBQUUsV0FBRixDQUE5RixDQUo4QyxDQU05Qzs7QUFDQSxNQUFJNkIsVUFBVSxHQUFHcUIscUNBQXFDLENBQUUsbUJBQW1CbEQsTUFBTSxDQUFFLGFBQUYsQ0FBekIsR0FBNkMsUUFBL0MsRUFBeURBLE1BQU0sQ0FBRSxTQUFGLENBQS9ELENBQXRELENBUDhDLENBUzlDOztBQUNBTSxFQUFBQSxNQUFNLENBQUUsTUFBTXVCLFVBQU4sR0FBbUIsSUFBbkIsR0FBMEIsZ0JBQTFCLEdBQTZDN0IsTUFBTSxDQUFFLGFBQUYsQ0FBckQsQ0FBTixDQUErRW1ELE9BQS9FLENBQXdGLEdBQXhGLEVBQThGQyxNQUE5RixDQUFzRyxHQUF0RyxFQUE0R0QsT0FBNUcsQ0FBcUgsR0FBckgsRUFBMkhDLE1BQTNILENBQW1JLEdBQW5JLEVBQXlJQyxPQUF6SSxDQUFrSjtBQUFDQyxJQUFBQSxPQUFPLEVBQUU7QUFBVixHQUFsSixFQUFnSyxJQUFoSyxFQVY4QyxDQVc5Qzs7QUFDQWhELEVBQUFBLE1BQU0sQ0FBRSxtQkFBbUJOLE1BQU0sQ0FBRSxhQUFGLENBQTNCLENBQU4sQ0FBcUR1RCxPQUFyRCxDQUE4RCxPQUE5RCxFQVo4QyxDQVl1QztBQUdyRjs7QUFDQTdCLEVBQUFBLGtEQUFrRCxDQUFFMUIsTUFBTSxDQUFFLGFBQUYsQ0FBUixDQUFsRDtBQUNBO0FBR0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsU0FBU0ssZ0RBQVQsQ0FBMkRMLE1BQTNELEVBQW1FO0FBRWxFLE1BQUssQ0FBRXdELHNDQUFzQyxDQUFFeEQsTUFBTSxDQUFFLGFBQUYsQ0FBUixDQUE3QyxFQUEwRTtBQUN6RSxXQUFPQSxNQUFNLENBQUUsa0JBQUYsQ0FBYjtBQUNBLFdBQU9BLE1BQU0sQ0FBRSxvQkFBRixDQUFiO0FBQ0E7O0FBQ0QsU0FBT0EsTUFBUDtBQUNBO0FBR0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsU0FBU3dELHNDQUFULENBQWlEQyxXQUFqRCxFQUE4RDtBQUU3RCxTQUNLLE1BQU1uRCxNQUFNLENBQUUsOEJBQThCbUQsV0FBaEMsQ0FBTixDQUFvREMsTUFBM0QsSUFDSSxNQUFNcEQsTUFBTSxDQUFFLG1CQUFtQm1ELFdBQXJCLENBQU4sQ0FBeUNDLE1BRnZEO0FBSUEsQyxDQUVEO0FBR0E7O0FBRUE7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsU0FBU0MsaURBQVQsQ0FBNERGLFdBQTVELEVBQXlFO0FBRXhFO0FBQ0FHLEVBQUFBLHVDQUF1QyxDQUFFSCxXQUFGLENBQXZDLENBSHdFLENBS3hFOztBQUNBSSxFQUFBQSxvQ0FBb0MsQ0FBRUosV0FBRixDQUFwQztBQUNBO0FBRUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0MsU0FBUy9CLGtEQUFULENBQTREK0IsV0FBNUQsRUFBd0U7QUFFdkU7QUFDQUssRUFBQUEsc0NBQXNDLENBQUVMLFdBQUYsQ0FBdEMsQ0FIdUUsQ0FLdkU7O0FBQ0F0QixFQUFBQSxvQ0FBb0MsQ0FBRXNCLFdBQUYsQ0FBcEM7QUFDQTtBQUVBO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxTQUFTSyxzQ0FBVCxDQUFpREwsV0FBakQsRUFBOEQ7QUFFN0Q7QUFDQW5ELEVBQUFBLE1BQU0sQ0FBRSxzQkFBc0JtRCxXQUF0QixHQUFvQyxxQkFBdEMsQ0FBTixDQUFvRU0sSUFBcEUsQ0FBMEUsVUFBMUUsRUFBc0YsS0FBdEY7QUFDQXpELEVBQUFBLE1BQU0sQ0FBRSxzQkFBc0JtRCxXQUF0QixHQUFvQyxTQUF0QyxDQUFOLENBQXdETSxJQUF4RCxDQUE4RCxVQUE5RCxFQUEwRSxLQUExRTtBQUNBO0FBRUQ7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsU0FBU0gsdUNBQVQsQ0FBa0RILFdBQWxELEVBQStEO0FBRTlEO0FBQ0FuRCxFQUFBQSxNQUFNLENBQUUsc0JBQXNCbUQsV0FBdEIsR0FBb0MscUJBQXRDLENBQU4sQ0FBb0VNLElBQXBFLENBQTBFLFVBQTFFLEVBQXNGLElBQXRGO0FBQ0F6RCxFQUFBQSxNQUFNLENBQUUsc0JBQXNCbUQsV0FBdEIsR0FBb0MsU0FBdEMsQ0FBTixDQUF3RE0sSUFBeEQsQ0FBOEQsVUFBOUQsRUFBMEUsSUFBMUU7QUFDQTtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxTQUFTRixvQ0FBVCxDQUErQ0osV0FBL0MsRUFBNEQ7QUFFM0Q7QUFDQW5ELEVBQUFBLE1BQU0sQ0FBRSxrQkFBa0JtRCxXQUFwQixDQUFOLENBQXdDTyxLQUF4QyxDQUNDLDJDQUEyQ1AsV0FBM0MsR0FBeUQsbUtBRDFEO0FBR0E7QUFFRDtBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsU0FBU3RCLG9DQUFULENBQStDc0IsV0FBL0MsRUFBNEQ7QUFFM0Q7QUFDQW5ELEVBQUFBLE1BQU0sQ0FBRSxtQ0FBbUNtRCxXQUFyQyxDQUFOLENBQXlEUSxNQUF6RDtBQUNBO0FBR0Q7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0UsU0FBUzdCLGlDQUFULENBQTRDcUIsV0FBNUMsRUFBeUQ7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQW5ELEVBQUFBLE1BQU0sQ0FBRSxrQkFBa0JtRCxXQUFwQixDQUFOLENBQXdDUyxJQUF4QyxHQW5Cd0QsQ0FxQnhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDLENBQ0Y7QUFHQTs7QUFFQztBQUNGO0FBQ0E7QUFDQTs7O0FBQ0UsU0FBU0MsNkJBQVQsQ0FBd0NDLGNBQXhDLEVBQTRFO0FBQUEsTUFBbkJDLEtBQW1CLHVFQUFYLFNBQVc7O0FBRTNFLE1BQU0sZ0JBQWdCLE9BQVFBLEtBQXpCLElBQXFDLE1BQU1BLEtBQWhELEVBQXdEO0FBQ3ZEQSxJQUFBQSxLQUFLLEdBQUcsa0JBQWtCQSxLQUFsQixHQUEwQixHQUFsQztBQUNBLEdBSjBFLENBSzNFOzs7QUFDQS9ELEVBQUFBLE1BQU0sQ0FBRSxNQUFNOEQsY0FBUixDQUFOLENBQStCSixLQUEvQixDQUNDLG1DQUFtQ0ksY0FBbkMsR0FBb0Qsc01BQXBELEdBQTJQQyxLQUEzUCxHQUFpUSxzQkFEbFE7QUFHQTtBQUVEO0FBQ0Y7QUFDQTtBQUNBOzs7QUFDRSxTQUFTQyw2QkFBVCxDQUF3Q0YsY0FBeEMsRUFBd0Q7QUFFdkQ7QUFDQTlELEVBQUFBLE1BQU0sQ0FBRSwyQkFBMkI4RCxjQUE3QixDQUFOLENBQW9ESCxNQUFwRDtBQUNBLEMsQ0FFRjtBQUVEOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVM1Qix5Q0FBVCxDQUFvRHBCLGFBQXBELEVBQW1FO0FBRWxFLE1BQ00sZ0JBQWdCLE9BQVFBLGFBQWEsQ0FBRSxrQkFBRixDQUFiLENBQXFDLGdCQUFyQyxDQUF6QixJQUNBLGdCQUFnQixPQUFRQSxhQUFhLENBQUUsa0JBQUYsQ0FBYixDQUFxQyxRQUFyQyxDQUR4QixJQUVBLFVBQVVBLGFBQWEsQ0FBRSxrQkFBRixDQUFiLENBQXFDLGdCQUFyQyxDQUZWLElBR0EsTUFBTUEsYUFBYSxDQUFFLGtCQUFGLENBQWIsQ0FBcUMsUUFBckMsQ0FKWCxFQUtDO0FBQ0F5QixJQUFBQSxNQUFNLENBQUM2QixRQUFQLENBQWdCQyxJQUFoQixHQUF1QnZELGFBQWEsQ0FBRSxrQkFBRixDQUFiLENBQXFDLFFBQXJDLENBQXZCO0FBQ0E7QUFDQTs7QUFFRCxNQUFJd0MsV0FBVyxHQUFHeEMsYUFBYSxDQUFFLGFBQUYsQ0FBL0I7QUFDQSxNQUFJd0QsZUFBZSxHQUFFLEVBQXJCOztBQUVBLE1BQUssZ0JBQWdCLE9BQVF4RCxhQUFhLENBQUUsa0JBQUYsQ0FBYixDQUFxQyxZQUFyQyxDQUE3QixFQUFtRjtBQUN6RUEsSUFBQUEsYUFBYSxDQUFFLGtCQUFGLENBQWIsQ0FBcUMsWUFBckMsSUFBc0QsRUFBdEQ7QUFDVDs7QUFDRCxNQUFLLGdCQUFnQixPQUFRQSxhQUFhLENBQUUsa0JBQUYsQ0FBYixDQUFxQyxnQ0FBckMsQ0FBN0IsRUFBd0c7QUFDN0ZBLElBQUFBLGFBQWEsQ0FBRSxrQkFBRixDQUFiLENBQXFDLGdDQUFyQyxJQUEwRSxFQUExRTtBQUNWOztBQUNELE1BQUssZ0JBQWdCLE9BQVFBLGFBQWEsQ0FBRSxrQkFBRixDQUFiLENBQXFDLGNBQXJDLENBQTdCLEVBQXNGO0FBQzVFQSxJQUFBQSxhQUFhLENBQUUsa0JBQUYsQ0FBYixDQUFxQyxjQUFyQyxJQUF3RCxFQUF4RDtBQUNUOztBQUNELE1BQUssZ0JBQWdCLE9BQVFBLGFBQWEsQ0FBRSxrQkFBRixDQUFiLENBQXFDLHFCQUFyQyxDQUE3QixFQUE2RjtBQUNuRkEsSUFBQUEsYUFBYSxDQUFFLGtCQUFGLENBQWIsQ0FBcUMscUJBQXJDLElBQStELEVBQS9EO0FBQ1Q7O0FBQ0QsTUFBSXlELGVBQWUsR0FBVSxNQUFNekQsYUFBYSxDQUFFLGtCQUFGLENBQWIsQ0FBcUMsWUFBckMsQ0FBUCxHQUE4RCxjQUE5RCxHQUErRSxFQUEzRztBQUNBLE1BQUkwRCxtQ0FBbUMsR0FBSyxNQUFNMUQsYUFBYSxDQUFFLGtCQUFGLENBQWIsQ0FBcUMsZ0NBQXJDLEVBQXdFVyxPQUF4RSxDQUFpRixNQUFqRixFQUF5RixFQUF6RixDQUFQLEdBQXdHLGNBQXhHLEdBQXlILEVBQXBLO0FBQ0EsTUFBSWdELHFCQUFxQixHQUFRLE1BQU0zRCxhQUFhLENBQUUsa0JBQUYsQ0FBYixDQUFxQyxjQUFyQyxDQUFQLEdBQWdFLGNBQWhFLEdBQWlGLEVBQWpIO0FBQ0EsTUFBSTRELHdCQUF3QixHQUFPLE1BQU01RCxhQUFhLENBQUUsa0JBQUYsQ0FBYixDQUFxQyxxQkFBckMsRUFBNkRXLE9BQTdELENBQXNFLE1BQXRFLEVBQThFLEVBQTlFLENBQVAsR0FBNkYsY0FBN0YsR0FBOEcsRUFBaEo7O0FBRUEsTUFBSyxrQkFBa0JpRCx3QkFBdkIsRUFBaUQ7QUFDaER2RSxJQUFBQSxNQUFNLENBQUUsa0RBQUYsQ0FBTixDQUE2RHdFLElBQTdELENBQW1FLEVBQW5FLEVBRGdELENBQ3lCO0FBQ3pFOztBQUVETCxFQUFBQSxlQUFlLDBDQUFrQ2hCLFdBQWxDLGNBQWY7QUFDQWdCLEVBQUFBLGVBQWUsNERBQWY7QUFDQUEsRUFBQUEsZUFBZSxnREFBd0NDLGVBQXhDLGdCQUE0RHpELGFBQWEsQ0FBRSxrQkFBRixDQUFiLENBQXFDLFlBQXJDLENBQTVELFdBQWY7QUFDR3dELEVBQUFBLGVBQWUsNENBQWY7QUFDQUEsRUFBQUEsZUFBZSxtREFBMEN4RCxhQUFhLENBQUMsa0JBQUQsQ0FBYixDQUFrQyx1QkFBbEMsQ0FBMUMsV0FBZjtBQUNBd0QsRUFBQUEsZUFBZSw0Q0FBZjtBQUNIQSxFQUFBQSxlQUFlLHNGQUE4RUUsbUNBQTlFLGdCQUFzSDFELGFBQWEsQ0FBRSxrQkFBRixDQUFiLENBQXFDLGdDQUFyQyxFQUF3RVcsT0FBeEUsQ0FBaUYsTUFBakYsRUFBeUYsRUFBekYsQ0FBdEgsV0FBZjtBQUNHNkMsRUFBQUEsZUFBZSx1RUFBNkR4RCxhQUFhLENBQUMsa0JBQUQsQ0FBYixDQUFrQyxxQkFBbEMsQ0FBN0QsV0FBZjtBQUNBd0QsRUFBQUEsZUFBZSx1RUFBNkR4RCxhQUFhLENBQUMsa0JBQUQsQ0FBYixDQUFrQyxvQkFBbEMsQ0FBN0QsV0FBZjtBQUNId0QsRUFBQUEsZUFBZSxnRkFBd0VHLHFCQUF4RSxnQkFBa0czRCxhQUFhLENBQUUsa0JBQUYsQ0FBYixDQUFxQyxrQkFBckMsQ0FBbEcsV0FBZjtBQUNBd0QsRUFBQUEsZUFBZSxtRkFBMkVJLHdCQUEzRSxnQkFBd0c1RCxhQUFhLENBQUUsa0JBQUYsQ0FBYixDQUFxQyxxQkFBckMsRUFBNkRXLE9BQTdELENBQXNFLE1BQXRFLEVBQThFLEVBQTlFLEVBQW1GQSxPQUFuRixDQUE0RixlQUE1RixFQUE2RyxRQUE3RyxDQUF4RyxXQUFmO0FBQ0c2QyxFQUFBQSxlQUFlLGtCQUFmO0FBQ0FBLEVBQUFBLGVBQWUsZ0JBQWY7QUFDSEEsRUFBQUEsZUFBZSxZQUFmO0FBRUNuRSxFQUFBQSxNQUFNLENBQUUsa0JBQWtCbUQsV0FBcEIsQ0FBTixDQUF3Q08sS0FBeEMsQ0FBK0NTLGVBQS9DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAgQSBqIGEgeCAgICBBIGQgZCAgICBOIGUgdyAgICBCIG8gbyBrIGkgbiBnXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHJcbi8qKlxyXG4gKiBTdWJtaXQgbmV3IGJvb2tpbmdcclxuICpcclxuICogQHBhcmFtIHBhcmFtcyAgID0gICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmVzb3VyY2VfaWQnICAgICAgICA6IHJlc291cmNlX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRlc19kZG1teXlfY3N2JyAgIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICdkYXRlX2Jvb2tpbmcnICsgcmVzb3VyY2VfaWQgKS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9ybWRhdGEnICAgICAgICAgICA6IGZvcm1kYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdib29raW5nX2hhc2gnICAgICAgIDogbXlfYm9va2luZ19oYXNoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXN0b21fZm9ybScgICAgICAgIDogbXlfYm9va2luZ19mb3JtLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FwdGNoYV9jaGFsYW5nZScgICA6IGNhcHRjaGFfY2hhbGFuZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcHRjaGFfdXNlcl9pbnB1dCcgOiB1c2VyX2NhcHRjaGEsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpc19lbWFpbHNfc2VuZCcgICAgIDogaXNfc2VuZF9lbWVpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGl2ZV9sb2NhbGUnICAgICAgOiB3cGRldl9hY3RpdmVfbG9jYWxlXHJcblx0XHRcdFx0XHRcdH1cclxuICpcclxuICovXHJcbmZ1bmN0aW9uIHdwYmNfYWp4X2Jvb2tpbmdfX2NyZWF0ZSggcGFyYW1zICl7XHJcblxyXG5jb25zb2xlLmdyb3VwQ29sbGFwc2VkKCAnV1BCQ19BSlhfQk9PS0lOR19fQ1JFQVRFJyApO1xyXG5jb25zb2xlLmdyb3VwQ29sbGFwc2VkKCAnPT0gQmVmb3JlIEFqYXggU2VuZCA9PScgKTtcclxuY29uc29sZS5sb2coIHBhcmFtcyApO1xyXG5jb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG5cdHBhcmFtcyA9IHdwYmNfY2FwdGNoYV9fc2ltcGxlX19tYXliZV9yZW1vdmVfaW5fYWp4X3BhcmFtcyggcGFyYW1zICk7XHJcblxyXG5cdC8vIFN0YXJ0IEFqYXhcclxuXHRqUXVlcnkucG9zdCggd3BiY19nbG9iYWwxLndwYmNfYWpheHVybCxcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRhY3Rpb24gICAgICAgICAgOiAnV1BCQ19BSlhfQk9PS0lOR19fQ1JFQVRFJyxcclxuXHRcdFx0XHRcdHdwYmNfYWp4X3VzZXJfaWQ6IF93cGJjLmdldF9zZWN1cmVfcGFyYW0oICd1c2VyX2lkJyApLFxyXG5cdFx0XHRcdFx0bm9uY2UgICAgICAgICAgIDogX3dwYmMuZ2V0X3NlY3VyZV9wYXJhbSggJ25vbmNlJyApLFxyXG5cdFx0XHRcdFx0d3BiY19hanhfbG9jYWxlIDogX3dwYmMuZ2V0X3NlY3VyZV9wYXJhbSggJ2xvY2FsZScgKSxcclxuXHJcblx0XHRcdFx0XHRjYWxlbmRhcl9yZXF1ZXN0X3BhcmFtcyA6IHBhcmFtc1xyXG5cclxuXHRcdFx0XHRcdC8qKlxyXG5cdFx0XHRcdFx0ICogIFVzdWFsbHkgIHBhcmFtcyA9IHsgJ3Jlc291cmNlX2lkJyAgICAgICAgOiByZXNvdXJjZV9pZCxcclxuXHRcdFx0XHRcdCAqXHRcdFx0XHRcdFx0J2RhdGVzX2RkbW15eV9jc3YnICAgOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2RhdGVfYm9va2luZycgKyByZXNvdXJjZV9pZCApLnZhbHVlLFxyXG5cdFx0XHRcdFx0ICpcdFx0XHRcdFx0XHQnZm9ybWRhdGEnICAgICAgICAgICA6IGZvcm1kYXRhLFxyXG5cdFx0XHRcdFx0ICpcdFx0XHRcdFx0XHQnYm9va2luZ19oYXNoJyAgICAgICA6IG15X2Jvb2tpbmdfaGFzaCxcclxuXHRcdFx0XHRcdCAqXHRcdFx0XHRcdFx0J2N1c3RvbV9mb3JtJyAgICAgICAgOiBteV9ib29raW5nX2Zvcm0sXHJcblx0XHRcdFx0XHQgKlxyXG5cdFx0XHRcdFx0ICpcdFx0XHRcdFx0XHQnY2FwdGNoYV9jaGFsYW5nZScgICA6IGNhcHRjaGFfY2hhbGFuZ2UsXHJcblx0XHRcdFx0XHQgKlx0XHRcdFx0XHRcdCd1c2VyX2NhcHRjaGEnICAgICAgIDogdXNlcl9jYXB0Y2hhLFxyXG5cdFx0XHRcdFx0ICpcclxuXHRcdFx0XHRcdCAqXHRcdFx0XHRcdFx0J2lzX2VtYWlsc19zZW5kJyAgICAgOiBpc19zZW5kX2VtZWlscyxcclxuXHRcdFx0XHRcdCAqXHRcdFx0XHRcdFx0J2FjdGl2ZV9sb2NhbGUnICAgICAgOiB3cGRldl9hY3RpdmVfbG9jYWxlXHJcblx0XHRcdFx0XHQgKlx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0ICovXHJcblx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0LyoqXHJcblx0XHRcdFx0ICogUyB1IGMgYyBlIHMgc1xyXG5cdFx0XHRcdCAqXHJcblx0XHRcdFx0ICogQHBhcmFtIHJlc3BvbnNlX2RhdGFcdFx0LVx0aXRzIG9iamVjdCByZXR1cm5lZCBmcm9tICBBamF4IC0gY2xhc3MtbGl2ZS1zZWFyY2cucGhwXHJcblx0XHRcdFx0ICogQHBhcmFtIHRleHRTdGF0dXNcdFx0LVx0J3N1Y2Nlc3MnXHJcblx0XHRcdFx0ICogQHBhcmFtIGpxWEhSXHRcdFx0XHQtXHRPYmplY3RcclxuXHRcdFx0XHQgKi9cclxuXHRcdFx0XHRmdW5jdGlvbiAoIHJlc3BvbnNlX2RhdGEsIHRleHRTdGF0dXMsIGpxWEhSICkge1xyXG5jb25zb2xlLmxvZyggJyA9PSBSZXNwb25zZSBXUEJDX0FKWF9CT09LSU5HX19DUkVBVEUgPT0gJyApO1xyXG5mb3IgKCB2YXIgb2JqX2tleSBpbiByZXNwb25zZV9kYXRhICl7XHJcblx0Y29uc29sZS5ncm91cENvbGxhcHNlZCggJz09JyArIG9ial9rZXkgKyAnPT0nICk7XHJcblx0Y29uc29sZS5sb2coICcgOiAnICsgb2JqX2tleSArICcgOiAnLCByZXNwb25zZV9kYXRhWyBvYmpfa2V5IF0gKTtcclxuXHRjb25zb2xlLmdyb3VwRW5kKCk7XHJcbn1cclxuY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuXHJcblx0XHRcdFx0XHQvLyA8ZWRpdG9yLWZvbGQgICAgIGRlZmF1bHRzdGF0ZT1cImNvbGxhcHNlZFwiICAgICBkZXNjPVwiID0gRXJyb3IgTWVzc2FnZSEgU2VydmVyIHJlc3BvbnNlIHdpdGggU3RyaW5nLiAgLT4gIEVfWF9JX1QgIFwiICA+XHJcblx0XHRcdFx0XHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdFx0XHQvLyBUaGlzIHNlY3Rpb24gZXhlY3V0ZSwgIHdoZW4gc2VydmVyIHJlc3BvbnNlIHdpdGggIFN0cmluZyBpbnN0ZWFkIG9mIE9iamVjdCAtLSBVc3VhbGx5ICBpdCdzIGJlY2F1c2Ugb2YgbWlzdGFrZSBpbiBjb2RlICFcclxuXHRcdFx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0XHRcdGlmICggKHR5cGVvZiByZXNwb25zZV9kYXRhICE9PSAnb2JqZWN0JykgfHwgKHJlc3BvbnNlX2RhdGEgPT09IG51bGwpICl7XHJcblxyXG5cdFx0XHRcdFx0XHR2YXIgY2FsZW5kYXJfaWQgPSB3cGJjX2dldF9yZXNvdXJjZV9pZF9fZnJvbV9hanhfcG9zdF9kYXRhX3VybCggdGhpcy5kYXRhICk7XHJcblx0XHRcdFx0XHRcdHZhciBqcV9ub2RlID0gJyNib29raW5nX2Zvcm0nICsgY2FsZW5kYXJfaWQ7XHJcblxyXG5cdFx0XHRcdFx0XHRpZiAoICcnID09IHJlc3BvbnNlX2RhdGEgKXtcclxuXHRcdFx0XHRcdFx0XHRyZXNwb25zZV9kYXRhID0gJzxzdHJvbmc+JyArICdFcnJvciEgU2VydmVyIHJlc3BvbmQgd2l0aCBlbXB0eSBzdHJpbmchJyArICc8L3N0cm9uZz4gJyA7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gU2hvdyBNZXNzYWdlXHJcblx0XHRcdFx0XHRcdHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2UoIHJlc3BvbnNlX2RhdGEgLCB7ICd0eXBlJyAgICAgOiAnZXJyb3InLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJzogeydqcV9ub2RlJzoganFfbm9kZSwgJ3doZXJlJzogJ2FmdGVyJ30sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpc19hcHBlbmQnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc3R5bGUnICAgIDogJ3RleHQtYWxpZ246bGVmdDsnLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgIDogMFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0XHQvLyBFbmFibGUgU3VibWl0IHwgSGlkZSBzcGluIGxvYWRlclxyXG5cdFx0XHRcdFx0XHR3cGJjX2Jvb2tpbmdfZm9ybV9fb25fcmVzcG9uc2VfX3VpX2VsZW1lbnRzX2VuYWJsZSggY2FsZW5kYXJfaWQgKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gPC9lZGl0b3ItZm9sZD5cclxuXHJcblxyXG5cdFx0XHRcdFx0Ly8gPGVkaXRvci1mb2xkICAgICBkZWZhdWx0c3RhdGU9XCJjb2xsYXBzZWRcIiAgICAgZGVzYz1cIiAgPT0gIFRoaXMgc2VjdGlvbiBleGVjdXRlLCAgd2hlbiB3ZSBoYXZlIEtOT1dOIGVycm9ycyBmcm9tIEJvb2tpbmcgQ2FsZW5kYXIuICAtPiAgRV9YX0lfVCAgXCIgID5cclxuXHRcdFx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0XHRcdC8vIFRoaXMgc2VjdGlvbiBleGVjdXRlLCAgd2hlbiB3ZSBoYXZlIEtOT1dOIGVycm9ycyBmcm9tIEJvb2tpbmcgQ2FsZW5kYXJcclxuXHRcdFx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0XHRcdFx0XHRpZiAoICdvaycgIT0gcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnc3RhdHVzJyBdICkge1xyXG5cclxuXHRcdFx0XHRcdFx0c3dpdGNoICggcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnc3RhdHVzX2Vycm9yJyBdICl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdGNhc2UgJ2NhcHRjaGFfc2ltcGxlX3dyb25nJzpcclxuXHRcdFx0XHRcdFx0XHRcdHdwYmNfY2FwdGNoYV9fc2ltcGxlX191cGRhdGUoIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQncmVzb3VyY2VfaWQnOiByZXNwb25zZV9kYXRhWyAncmVzb3VyY2VfaWQnIF0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3VybCcgICAgICAgIDogcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnY2FwdGNoYV9fc2ltcGxlJyBdWyAndXJsJyBdLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdjaGFsbGVuZ2UnICA6IHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2NhcHRjaGFfX3NpbXBsZScgXVsgJ2NoYWxsZW5nZScgXSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbWVzc2FnZScgICAgOiByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2UnIF0ucmVwbGFjZSggL1xcbi9nLCBcIjxiciAvPlwiIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjYXNlICdyZXNvdXJjZV9pZF9pbmNvcnJlY3QnOlx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU2hvdyBFcnJvciBNZXNzYWdlIC0gaW5jb3JyZWN0ICBib29raW5nIHJlc291cmNlIElEIGR1cmluZyBzdWJtaXQgb2YgYm9va2luZy5cclxuXHRcdFx0XHRcdFx0XHRcdHZhciBtZXNzYWdlX2lkID0gd3BiY19mcm9udF9lbmRfX3Nob3dfbWVzc2FnZSggcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnYWp4X2FmdGVyX2FjdGlvbl9tZXNzYWdlJyBdLnJlcGxhY2UoIC9cXG4vZywgXCI8YnIgLz5cIiApLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0eXBlJyA6ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIChyZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2Vfc3RhdHVzJyBdKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2FqeF9hZnRlcl9hY3Rpb25fbWVzc2FnZV9zdGF0dXMnIF0gOiAnd2FybmluZycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZGVsYXknICAgIDogMCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnOiB7ICd3aGVyZSc6ICdhZnRlcicsICdqcV9ub2RlJzogJyNib29raW5nX2Zvcm0nICsgcGFyYW1zWyAncmVzb3VyY2VfaWQnIF0gfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRjYXNlICdib29raW5nX2Nhbl9ub3Rfc2F2ZSc6XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBXZSBjYW4gbm90IHNhdmUgYm9va2luZywgYmVjYXVzZSBkYXRlcyBhcmUgYm9va2VkIG9yIGNhbiBub3Qgc2F2ZSBpbiBzYW1lIGJvb2tpbmcgcmVzb3VyY2UgYWxsIHRoZSBkYXRlc1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIG1lc3NhZ2VfaWQgPSB3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2UnIF0ucmVwbGFjZSggL1xcbi9nLCBcIjxiciAvPlwiICksXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3R5cGUnIDogKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgKHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2FqeF9hZnRlcl9hY3Rpb25fbWVzc2FnZV9zdGF0dXMnIF0pKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnYWp4X2FmdGVyX2FjdGlvbl9tZXNzYWdlX3N0YXR1cycgXSA6ICd3YXJuaW5nJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdkZWxheScgICAgOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3Nob3dfaGVyZSc6IHsgJ3doZXJlJzogJ2FmdGVyJywgJ2pxX25vZGUnOiAnI2Jvb2tpbmdfZm9ybScgKyBwYXJhbXNbICdyZXNvdXJjZV9pZCcgXSB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vIEVuYWJsZSBTdWJtaXQgfCBIaWRlIHNwaW4gbG9hZGVyXHJcblx0XHRcdFx0XHRcdFx0XHR3cGJjX2Jvb2tpbmdfZm9ybV9fb25fcmVzcG9uc2VfX3VpX2VsZW1lbnRzX2VuYWJsZSggcmVzcG9uc2VfZGF0YVsgJ3Jlc291cmNlX2lkJyBdICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdC8vIDxlZGl0b3ItZm9sZCAgICAgZGVmYXVsdHN0YXRlPVwiY29sbGFwc2VkXCIgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPVwiID0gRm9yIGRlYnVnIG9ubHkgPyAtLSAgU2hvdyBNZXNzYWdlIHVuZGVyIHRoZSBmb3JtID0gXCIgID5cclxuXHRcdFx0XHRcdFx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0KCAndW5kZWZpbmVkJyAhPT0gdHlwZW9mIChyZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2UnIF0pIClcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICYmICggJycgIT0gcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnYWp4X2FmdGVyX2FjdGlvbl9tZXNzYWdlJyBdLnJlcGxhY2UoIC9cXG4vZywgXCI8YnIgLz5cIiApIClcclxuXHRcdFx0XHRcdFx0XHRcdCl7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgY2FsZW5kYXJfaWQgPSB3cGJjX2dldF9yZXNvdXJjZV9pZF9fZnJvbV9hanhfcG9zdF9kYXRhX3VybCggdGhpcy5kYXRhICk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhciBqcV9ub2RlID0gJyNib29raW5nX2Zvcm0nICsgY2FsZW5kYXJfaWQ7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgYWp4X2FmdGVyX2Jvb2tpbmdfbWVzc2FnZSA9IHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2FqeF9hZnRlcl9hY3Rpb25fbWVzc2FnZScgXS5yZXBsYWNlKCAvXFxuL2csIFwiPGJyIC8+XCIgKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCBhanhfYWZ0ZXJfYm9va2luZ19tZXNzYWdlICk7XHJcblxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKipcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICogLy8gU2hvdyBNZXNzYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIGFqeF9hZnRlcl9hY3Rpb25fbWVzc2FnZV9pZCA9IHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2UoIGFqeF9hZnRlcl9ib29raW5nX21lc3NhZ2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd0eXBlJyA6ICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIChyZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdhanhfYWZ0ZXJfYWN0aW9uX21lc3NhZ2Vfc3RhdHVzJyBdKSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnYWp4X2FmdGVyX2FjdGlvbl9tZXNzYWdlX3N0YXR1cycgXSA6ICdpbmZvJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2RlbGF5JyAgICA6IDEwMDAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnc2hvd19oZXJlJzoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdqcV9ub2RlJzoganFfbm9kZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnd2hlcmUnICA6ICdhZnRlcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICovXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHQvLyA8L2VkaXRvci1mb2xkPlxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHRcdFx0XHQvLyBSZWFjdGl2YXRlIGNhbGVuZGFyIGFnYWluID9cclxuXHRcdFx0XHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHRcdFx0XHQvLyBFbmFibGUgU3VibWl0IHwgSGlkZSBzcGluIGxvYWRlclxyXG5cdFx0XHRcdFx0XHR3cGJjX2Jvb2tpbmdfZm9ybV9fb25fcmVzcG9uc2VfX3VpX2VsZW1lbnRzX2VuYWJsZSggcmVzcG9uc2VfZGF0YVsgJ3Jlc291cmNlX2lkJyBdICk7XHJcblxyXG5cdFx0XHRcdFx0XHQvLyBVbnNlbGVjdCAgZGF0ZXNcclxuXHRcdFx0XHRcdFx0d3BiY19jYWxlbmRhcl9fdW5zZWxlY3RfYWxsX2RhdGVzKCByZXNwb25zZV9kYXRhWyAncmVzb3VyY2VfaWQnIF0gKTtcclxuXHJcblx0XHRcdFx0XHRcdC8vICdyZXNvdXJjZV9pZCcgICAgPT4gJHBhcmFtc1sncmVzb3VyY2VfaWQnXSxcclxuXHRcdFx0XHRcdFx0Ly8gJ2Jvb2tpbmdfaGFzaCcgICA9PiAkYm9va2luZ19oYXNoLFxyXG5cdFx0XHRcdFx0XHQvLyAncmVxdWVzdF91cmknICAgID0+ICRfU0VSVkVSWydSRVFVRVNUX1VSSSddLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSXMgaXQgdGhlIHNhbWUgYXMgd2luZG93LmxvY2F0aW9uLmhyZWYgb3JcclxuXHRcdFx0XHRcdFx0Ly8gJ2N1c3RvbV9mb3JtJyAgICA9PiAkcGFyYW1zWydjdXN0b21fZm9ybSddLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wdGlvbmFsLlxyXG5cdFx0XHRcdFx0XHQvLyAnYWdncmVnYXRlX3Jlc291cmNlX2lkX3N0cicgPT4gaW1wbG9kZSggJywnLCAkcGFyYW1zWydhZ2dyZWdhdGVfcmVzb3VyY2VfaWRfYXJyJ10gKSAgICAgLy8gT3B0aW9uYWwuIFJlc291cmNlIElEICAgZnJvbSAgYWdncmVnYXRlIHBhcmFtZXRlciBpbiBzaG9ydGNvZGUuXHJcblxyXG5cdFx0XHRcdFx0XHQvLyBMb2FkIG5ldyBkYXRhIGluIGNhbGVuZGFyLlxyXG5cdFx0XHRcdFx0XHR3cGJjX2NhbGVuZGFyX19sb2FkX2RhdGFfX2FqeCgge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICAncmVzb3VyY2VfaWQnIDogcmVzcG9uc2VfZGF0YVsgJ3Jlc291cmNlX2lkJyBdXHRcdFx0XHRcdFx0XHQvLyBJdCdzIGZyb20gcmVzcG9uc2UgLi4uQUpYX0JPT0tJTkdfX0NSRUFURSBvZiBpbml0aWFsIHNlbnQgcmVzb3VyY2VfaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCwgJ2Jvb2tpbmdfaGFzaCc6IHJlc3BvbnNlX2RhdGFbICdhanhfY2xlYW5lZF9wYXJhbXMnIF1bJ2Jvb2tpbmdfaGFzaCddIFx0Ly8gPz8gd2UgY2FuIG5vdCB1c2UgaXQsICBiZWNhdXNlIEhBU0ggY2huYWdlZCBpbiBhbnkgIGNhc2UhXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQsICdyZXF1ZXN0X3VyaScgOiByZXNwb25zZV9kYXRhWyAnYWp4X2NsZWFuZWRfcGFyYW1zJyBdWydyZXF1ZXN0X3VyaSddXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQsICdjdXN0b21fZm9ybScgOiByZXNwb25zZV9kYXRhWyAnYWp4X2NsZWFuZWRfcGFyYW1zJyBdWydjdXN0b21fZm9ybSddXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQWdncmVnYXRlIGJvb2tpbmcgcmVzb3VyY2VzLCAgaWYgYW55ID9cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCwgJ2FnZ3JlZ2F0ZV9yZXNvdXJjZV9pZF9zdHInIDogX3dwYmMuYm9va2luZ19fZ2V0X3BhcmFtX3ZhbHVlKCByZXNwb25zZV9kYXRhWyAncmVzb3VyY2VfaWQnIF0sICdhZ2dyZWdhdGVfcmVzb3VyY2VfaWRfYXJyJyApLmpvaW4oJywnKVxyXG5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9ICk7XHJcblx0XHRcdFx0XHRcdC8vIEV4aXRcclxuXHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC8vIDwvZWRpdG9yLWZvbGQ+XHJcblxyXG5cclxuLypcclxuXHQvLyBTaG93IENhbGVuZGFyXHJcblx0d3BiY19jYWxlbmRhcl9fbG9hZGluZ19fc3RvcCggcmVzcG9uc2VfZGF0YVsgJ3Jlc291cmNlX2lkJyBdICk7XHJcblxyXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBCb29raW5ncyAtIERhdGVzXHJcblx0X3dwYmMuYm9va2luZ3NfaW5fY2FsZW5kYXJfX3NldF9kYXRlcyggIHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXSwgcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWydkYXRlcyddICApO1xyXG5cclxuXHQvLyBCb29raW5ncyAtIENoaWxkIG9yIG9ubHkgc2luZ2xlIGJvb2tpbmcgcmVzb3VyY2UgaW4gZGF0ZXNcclxuXHRfd3BiYy5ib29raW5nX19zZXRfcGFyYW1fdmFsdWUoIHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXSwgJ3Jlc291cmNlc19pZF9hcnJfX2luX2RhdGVzJywgcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAncmVzb3VyY2VzX2lkX2Fycl9faW5fZGF0ZXMnIF0gKTtcclxuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdC8vIFVwZGF0ZSBjYWxlbmRhclxyXG5cdHdwYmNfY2FsZW5kYXJfX3VwZGF0ZV9sb29rKCByZXNwb25zZV9kYXRhWyAncmVzb3VyY2VfaWQnIF0gKTtcclxuKi9cclxuXHJcblx0XHRcdFx0XHQvLyBIaWRlIHNwaW4gbG9hZGVyXHJcblx0XHRcdFx0XHR3cGJjX2Jvb2tpbmdfZm9ybV9fc3Bpbl9sb2FkZXJfX2hpZGUoIHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXSApO1xyXG5cclxuXHRcdFx0XHRcdC8vIEhpZGUgYm9va2luZyBmb3JtXHJcblx0XHRcdFx0XHR3cGJjX2Jvb2tpbmdfZm9ybV9fYW5pbWF0ZWRfX2hpZGUoIHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXSApO1xyXG5cclxuXHRcdFx0XHRcdC8vIFNob3cgQ29uZmlybWF0aW9uIHwgUGF5bWVudCBzZWN0aW9uXHJcblx0XHRcdFx0XHR3cGJjX3Nob3dfdGhhbmtfeW91X21lc3NhZ2VfYWZ0ZXJfYm9va2luZyggcmVzcG9uc2VfZGF0YSApO1xyXG5cclxuXHRcdFx0XHRcdHNldFRpbWVvdXQoIGZ1bmN0aW9uICgpe1xyXG5cdFx0XHRcdFx0XHR3cGJjX2RvX3Njcm9sbCggJyN3cGJjX3Njcm9sbF9wb2ludF8nICsgcmVzcG9uc2VfZGF0YVsgJ3Jlc291cmNlX2lkJyBdLCAxMCApO1xyXG5cdFx0XHRcdFx0fSwgNTAwICk7XHJcblxyXG5cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHQgICkuZmFpbChcclxuXHRcdFx0XHQgIC8vIDxlZGl0b3ItZm9sZCAgICAgZGVmYXVsdHN0YXRlPVwiY29sbGFwc2VkXCIgICAgICAgICAgICAgICAgICAgICAgICBkZXNjPVwiID0gVGhpcyBzZWN0aW9uIGV4ZWN1dGUsICB3aGVuICBOT05DRSBmaWVsZCB3YXMgbm90IHBhc3NlZCBvciBzb21lIGVycm9yIGhhcHBlbmVkIGF0ICBzZXJ2ZXIhID0gXCIgID5cclxuXHRcdFx0XHQgIGZ1bmN0aW9uICgganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duICkgeyAgICBpZiAoIHdpbmRvdy5jb25zb2xlICYmIHdpbmRvdy5jb25zb2xlLmxvZyApeyBjb25zb2xlLmxvZyggJ0FqYXhfRXJyb3InLCBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKTsgfVxyXG5cclxuXHRcdFx0XHRcdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFx0XHRcdC8vIFRoaXMgc2VjdGlvbiBleGVjdXRlLCAgd2hlbiAgTk9OQ0UgZmllbGQgd2FzIG5vdCBwYXNzZWQgb3Igc29tZSBlcnJvciBoYXBwZW5lZCBhdCAgc2VydmVyIVxyXG5cdFx0XHRcdFx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRcdFx0XHRcdC8vIEdldCBDb250ZW50IG9mIEVycm9yIE1lc3NhZ2VcclxuXHRcdFx0XHRcdHZhciBlcnJvcl9tZXNzYWdlID0gJzxzdHJvbmc+JyArICdFcnJvciEnICsgJzwvc3Ryb25nPiAnICsgZXJyb3JUaHJvd24gO1xyXG5cdFx0XHRcdFx0aWYgKCBqcVhIUi5zdGF0dXMgKXtcclxuXHRcdFx0XHRcdFx0ZXJyb3JfbWVzc2FnZSArPSAnICg8Yj4nICsganFYSFIuc3RhdHVzICsgJzwvYj4pJztcclxuXHRcdFx0XHRcdFx0aWYgKDQwMyA9PSBqcVhIUi5zdGF0dXMgKXtcclxuXHRcdFx0XHRcdFx0XHRlcnJvcl9tZXNzYWdlICs9ICc8YnI+IFByb2JhYmx5IG5vbmNlIGZvciB0aGlzIHBhZ2UgaGFzIGJlZW4gZXhwaXJlZC4gUGxlYXNlIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBvbmNsaWNrPVwiamF2YXNjcmlwdDpsb2NhdGlvbi5yZWxvYWQoKTtcIj5yZWxvYWQgdGhlIHBhZ2U8L2E+Lic7XHJcblx0XHRcdFx0XHRcdFx0ZXJyb3JfbWVzc2FnZSArPSAnPGJyPiBPdGhlcndpc2UsIHBsZWFzZSBjaGVjayB0aGlzIDxhIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDtcIiBocmVmPVwiaHR0cHM6Ly93cGJvb2tpbmdjYWxlbmRhci5jb20vZmFxL3JlcXVlc3QtZG8tbm90LXBhc3Mtc2VjdXJpdHktY2hlY2svXCI+dHJvdWJsZXNob290aW5nIGluc3RydWN0aW9uPC9hPi48YnI+J1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAoIGpxWEhSLnJlc3BvbnNlVGV4dCApe1xyXG5cdFx0XHRcdFx0XHQvLyBFc2NhcGUgdGFncyBpbiBFcnJvciBtZXNzYWdlXHJcblx0XHRcdFx0XHRcdGVycm9yX21lc3NhZ2UgKz0gJzxicj48c3Ryb25nPlJlc3BvbnNlPC9zdHJvbmc+PGRpdiBzdHlsZT1cInBhZGRpbmc6IDAgMTBweDttYXJnaW46IDAgMCAxMHB4O2JvcmRlci1yYWRpdXM6M3B4OyBib3gtc2hhZG93OjBweCAwcHggMXB4ICNhM2EzYTM7XCI+JyArIGpxWEhSLnJlc3BvbnNlVGV4dC5yZXBsYWNlKC8mL2csIFwiJmFtcDtcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLnJlcGxhY2UoLzwvZywgXCImbHQ7XCIpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0IC5yZXBsYWNlKC8+L2csIFwiJmd0O1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCAucmVwbGFjZSgvXCIvZywgXCImcXVvdDtcIilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgLnJlcGxhY2UoLycvZywgXCImIzM5O1wiKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCsnPC9kaXY+JztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVycm9yX21lc3NhZ2UgPSBlcnJvcl9tZXNzYWdlLnJlcGxhY2UoIC9cXG4vZywgXCI8YnIgLz5cIiApO1xyXG5cclxuXHRcdFx0XHRcdHZhciBjYWxlbmRhcl9pZCA9IHdwYmNfZ2V0X3Jlc291cmNlX2lkX19mcm9tX2FqeF9wb3N0X2RhdGFfdXJsKCB0aGlzLmRhdGEgKTtcclxuXHRcdFx0XHRcdHZhciBqcV9ub2RlID0gJyNib29raW5nX2Zvcm0nICsgY2FsZW5kYXJfaWQ7XHJcblxyXG5cdFx0XHRcdFx0Ly8gU2hvdyBNZXNzYWdlXHJcblx0XHRcdFx0XHR3cGJjX2Zyb250X2VuZF9fc2hvd19tZXNzYWdlKCBlcnJvcl9tZXNzYWdlICwgeyAndHlwZScgICAgIDogJ2Vycm9yJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdzaG93X2hlcmUnOiB7J2pxX25vZGUnOiBqcV9ub2RlLCAnd2hlcmUnOiAnYWZ0ZXInfSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdpc19hcHBlbmQnOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J3N0eWxlJyAgICA6ICd0ZXh0LWFsaWduOmxlZnQ7JyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdkZWxheScgICAgOiAwXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSApO1xyXG5cdFx0XHRcdFx0Ly8gRW5hYmxlIFN1Ym1pdCB8IEhpZGUgc3BpbiBsb2FkZXJcclxuXHRcdFx0XHRcdHdwYmNfYm9va2luZ19mb3JtX19vbl9yZXNwb25zZV9fdWlfZWxlbWVudHNfZW5hYmxlKCBjYWxlbmRhcl9pZCApO1xyXG5cdFx0XHQgIFx0IH1cclxuXHRcdFx0XHQgLy8gPC9lZGl0b3ItZm9sZD5cclxuXHRcdFx0ICApXHJcblx0ICAgICAgICAgIC8vIC5kb25lKCAgIGZ1bmN0aW9uICggZGF0YSwgdGV4dFN0YXR1cywganFYSFIgKSB7ICAgaWYgKCB3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS5sb2cgKXsgY29uc29sZS5sb2coICdzZWNvbmQgc3VjY2VzcycsIGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSICk7IH0gICAgfSlcclxuXHRcdFx0ICAvLyAuYWx3YXlzKCBmdW5jdGlvbiAoIGRhdGFfanFYSFIsIHRleHRTdGF0dXMsIGpxWEhSX2Vycm9yVGhyb3duICkgeyAgIGlmICggd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUubG9nICl7IGNvbnNvbGUubG9nKCAnYWx3YXlzIGZpbmlzaGVkJywgZGF0YV9qcVhIUiwgdGV4dFN0YXR1cywganFYSFJfZXJyb3JUaHJvd24gKTsgfSAgICAgfSlcclxuXHRcdFx0ICA7ICAvLyBFbmQgQWpheFxyXG5cclxuXHRyZXR1cm4gdHJ1ZTtcclxufVxyXG5cclxuXHJcblx0Ly8gPGVkaXRvci1mb2xkICAgICBkZWZhdWx0c3RhdGU9XCJjb2xsYXBzZWRcIiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M9XCIgID09ICBDQVBUQ0hBID09ICBcIiAgPlxyXG5cclxuXHQvKipcclxuXHQgKiBVcGRhdGUgaW1hZ2UgaW4gY2FwdGNoYSBhbmQgc2hvdyB3YXJuaW5nIG1lc3NhZ2VcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBwYXJhbXNcclxuXHQgKlxyXG5cdCAqIEV4YW1wbGUgb2YgJ3BhcmFtcycgOiB7XHJcblx0ICpcdFx0XHRcdFx0XHRcdCdyZXNvdXJjZV9pZCc6IHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXSxcclxuXHQgKlx0XHRcdFx0XHRcdFx0J3VybCcgICAgICAgIDogcmVzcG9uc2VfZGF0YVsgJ2FqeF9kYXRhJyBdWyAnY2FwdGNoYV9fc2ltcGxlJyBdWyAndXJsJyBdLFxyXG5cdCAqXHRcdFx0XHRcdFx0XHQnY2hhbGxlbmdlJyAgOiByZXNwb25zZV9kYXRhWyAnYWp4X2RhdGEnIF1bICdjYXB0Y2hhX19zaW1wbGUnIF1bICdjaGFsbGVuZ2UnIF0sXHJcblx0ICpcdFx0XHRcdFx0XHRcdCdtZXNzYWdlJyAgICA6IHJlc3BvbnNlX2RhdGFbICdhanhfZGF0YScgXVsgJ2FqeF9hZnRlcl9hY3Rpb25fbWVzc2FnZScgXS5yZXBsYWNlKCAvXFxuL2csIFwiPGJyIC8+XCIgKVxyXG5cdCAqXHRcdFx0XHRcdFx0fVxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfY2FwdGNoYV9fc2ltcGxlX191cGRhdGUoIHBhcmFtcyApe1xyXG5cclxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnY2FwdGNoYV9pbnB1dCcgKyBwYXJhbXNbICdyZXNvdXJjZV9pZCcgXSApLnZhbHVlID0gJyc7XHJcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2NhcHRjaGFfaW1nJyArIHBhcmFtc1sgJ3Jlc291cmNlX2lkJyBdICkuc3JjID0gcGFyYW1zWyAndXJsJyBdO1xyXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoICd3cGRldl9jYXB0Y2hhX2NoYWxsZW5nZV8nICsgcGFyYW1zWyAncmVzb3VyY2VfaWQnIF0gKS52YWx1ZSA9IHBhcmFtc1sgJ2NoYWxsZW5nZScgXTtcclxuXHJcblx0XHQvLyBTaG93IHdhcm5pbmcgXHRcdEFmdGVyIENBUFRDSEEgSW1nXHJcblx0XHR2YXIgbWVzc2FnZV9pZCA9IHdwYmNfZnJvbnRfZW5kX19zaG93X21lc3NhZ2VfX3dhcm5pbmcoICcjY2FwdGNoYV9pbnB1dCcgKyBwYXJhbXNbICdyZXNvdXJjZV9pZCcgXSArICcgKyBpbWcnLCBwYXJhbXNbICdtZXNzYWdlJyBdICk7XHJcblxyXG5cdFx0Ly8gQW5pbWF0ZVxyXG5cdFx0alF1ZXJ5KCAnIycgKyBtZXNzYWdlX2lkICsgJywgJyArICcjY2FwdGNoYV9pbnB1dCcgKyBwYXJhbXNbICdyZXNvdXJjZV9pZCcgXSApLmZhZGVPdXQoIDM1MCApLmZhZGVJbiggMzAwICkuZmFkZU91dCggMzUwICkuZmFkZUluKCA0MDAgKS5hbmltYXRlKCB7b3BhY2l0eTogMX0sIDQwMDAgKTtcclxuXHRcdC8vIEZvY3VzIHRleHQgIGZpZWxkXHJcblx0XHRqUXVlcnkoICcjY2FwdGNoYV9pbnB1dCcgKyBwYXJhbXNbICdyZXNvdXJjZV9pZCcgXSApLnRyaWdnZXIoICdmb2N1cycgKTsgICAgXHRcdFx0XHRcdFx0XHRcdFx0Ly9GaXhJbjogOC43LjExLjEyXHJcblxyXG5cclxuXHRcdC8vIEVuYWJsZSBTdWJtaXQgfCBIaWRlIHNwaW4gbG9hZGVyXHJcblx0XHR3cGJjX2Jvb2tpbmdfZm9ybV9fb25fcmVzcG9uc2VfX3VpX2VsZW1lbnRzX2VuYWJsZSggcGFyYW1zWyAncmVzb3VyY2VfaWQnIF0gKTtcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBJZiB0aGUgY2FwdGNoYSBlbGVtZW50cyBub3QgZXhpc3QgIGluIHRoZSBib29raW5nIGZvcm0sICB0aGVuICByZW1vdmUgcGFyYW1ldGVycyByZWxhdGl2ZSBjYXB0Y2hhXHJcblx0ICogQHBhcmFtIHBhcmFtc1xyXG5cdCAqIEByZXR1cm5zIG9ialxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfY2FwdGNoYV9fc2ltcGxlX19tYXliZV9yZW1vdmVfaW5fYWp4X3BhcmFtcyggcGFyYW1zICl7XHJcblxyXG5cdFx0aWYgKCAhIHdwYmNfY2FwdGNoYV9fc2ltcGxlX19pc19leGlzdF9pbl9mb3JtKCBwYXJhbXNbICdyZXNvdXJjZV9pZCcgXSApICl7XHJcblx0XHRcdGRlbGV0ZSBwYXJhbXNbICdjYXB0Y2hhX2NoYWxhbmdlJyBdO1xyXG5cdFx0XHRkZWxldGUgcGFyYW1zWyAnY2FwdGNoYV91c2VyX2lucHV0JyBdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHBhcmFtcztcclxuXHR9XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVjayBpZiBDQVBUQ0hBIGV4aXN0IGluIHRoZSBib29raW5nIGZvcm1cclxuXHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB3cGJjX2NhcHRjaGFfX3NpbXBsZV9faXNfZXhpc3RfaW5fZm9ybSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQoMCAhPT0galF1ZXJ5KCAnI3dwZGV2X2NhcHRjaGFfY2hhbGxlbmdlXycgKyByZXNvdXJjZV9pZCApLmxlbmd0aClcclxuXHRcdFx0XHRcdCB8fCAoMCAhPT0galF1ZXJ5KCAnI2NhcHRjaGFfaW5wdXQnICsgcmVzb3VyY2VfaWQgKS5sZW5ndGgpXHJcblx0XHRcdFx0KTtcclxuXHR9XHJcblxyXG5cdC8vIDwvZWRpdG9yLWZvbGQ+XHJcblxyXG5cclxuXHQvLyA8ZWRpdG9yLWZvbGQgICAgIGRlZmF1bHRzdGF0ZT1cImNvbGxhcHNlZFwiICAgICAgICAgICAgICAgICAgICAgICAgZGVzYz1cIiAgPT0gIFNlbmQgQnV0dG9uIHwgRm9ybSBTcGluIExvYWRlciAgPT0gIFwiICA+XHJcblxyXG5cdC8qKlxyXG5cdCAqIERpc2FibGUgU2VuZCBidXR0b24gIHwgIFNob3cgU3BpbiBMb2FkZXJcclxuXHQgKlxyXG5cdCAqIEBwYXJhbSByZXNvdXJjZV9pZFxyXG5cdCAqL1xyXG5cdGZ1bmN0aW9uIHdwYmNfYm9va2luZ19mb3JtX19vbl9zdWJtaXRfX3VpX2VsZW1lbnRzX2Rpc2FibGUoIHJlc291cmNlX2lkICl7XHJcblxyXG5cdFx0Ly8gRGlzYWJsZSBTdWJtaXRcclxuXHRcdHdwYmNfYm9va2luZ19mb3JtX19zZW5kX2J1dHRvbl9fZGlzYWJsZSggcmVzb3VyY2VfaWQgKTtcclxuXHJcblx0XHQvLyBTaG93IFNwaW4gbG9hZGVyIGluIGJvb2tpbmcgZm9ybVxyXG5cdFx0d3BiY19ib29raW5nX2Zvcm1fX3NwaW5fbG9hZGVyX19zaG93KCByZXNvdXJjZV9pZCApO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRW5hYmxlIFNlbmQgYnV0dG9uICB8ICAgSGlkZSBTcGluIExvYWRlclxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0ICovXHJcblx0ZnVuY3Rpb24gd3BiY19ib29raW5nX2Zvcm1fX29uX3Jlc3BvbnNlX191aV9lbGVtZW50c19lbmFibGUocmVzb3VyY2VfaWQpe1xyXG5cclxuXHRcdC8vIEVuYWJsZSBTdWJtaXRcclxuXHRcdHdwYmNfYm9va2luZ19mb3JtX19zZW5kX2J1dHRvbl9fZW5hYmxlKCByZXNvdXJjZV9pZCApO1xyXG5cclxuXHRcdC8vIEhpZGUgU3BpbiBsb2FkZXIgaW4gYm9va2luZyBmb3JtXHJcblx0XHR3cGJjX2Jvb2tpbmdfZm9ybV9fc3Bpbl9sb2FkZXJfX2hpZGUoIHJlc291cmNlX2lkICk7XHJcblx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogRW5hYmxlIFN1Ym1pdCBidXR0b25cclxuXHRcdCAqIEBwYXJhbSByZXNvdXJjZV9pZFxyXG5cdFx0ICovXHJcblx0XHRmdW5jdGlvbiB3cGJjX2Jvb2tpbmdfZm9ybV9fc2VuZF9idXR0b25fX2VuYWJsZSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHRcdC8vIEFjdGl2YXRlIFNlbmQgYnV0dG9uXHJcblx0XHRcdGpRdWVyeSggJyNib29raW5nX2Zvcm1fZGl2JyArIHJlc291cmNlX2lkICsgJyBpbnB1dFt0eXBlPWJ1dHRvbl0nICkucHJvcCggXCJkaXNhYmxlZFwiLCBmYWxzZSApO1xyXG5cdFx0XHRqUXVlcnkoICcjYm9va2luZ19mb3JtX2RpdicgKyByZXNvdXJjZV9pZCArICcgYnV0dG9uJyApLnByb3AoIFwiZGlzYWJsZWRcIiwgZmFsc2UgKTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIERpc2FibGUgU3VibWl0IGJ1dHRvbiAgYW5kIHNob3cgIHNwaW5cclxuXHRcdCAqXHJcblx0XHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gd3BiY19ib29raW5nX2Zvcm1fX3NlbmRfYnV0dG9uX19kaXNhYmxlKCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRcdFx0Ly8gRGlzYWJsZSBTZW5kIGJ1dHRvblxyXG5cdFx0XHRqUXVlcnkoICcjYm9va2luZ19mb3JtX2RpdicgKyByZXNvdXJjZV9pZCArICcgaW5wdXRbdHlwZT1idXR0b25dJyApLnByb3AoIFwiZGlzYWJsZWRcIiwgdHJ1ZSApO1xyXG5cdFx0XHRqUXVlcnkoICcjYm9va2luZ19mb3JtX2RpdicgKyByZXNvdXJjZV9pZCArICcgYnV0dG9uJyApLnByb3AoIFwiZGlzYWJsZWRcIiwgdHJ1ZSApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogU2hvdyBib29raW5nIGZvcm0gIFNwaW4gTG9hZGVyXHJcblx0XHQgKiBAcGFyYW0gcmVzb3VyY2VfaWRcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gd3BiY19ib29raW5nX2Zvcm1fX3NwaW5fbG9hZGVyX19zaG93KCByZXNvdXJjZV9pZCApe1xyXG5cclxuXHRcdFx0Ly8gU2hvdyBTcGluIExvYWRlclxyXG5cdFx0XHRqUXVlcnkoICcjYm9va2luZ19mb3JtJyArIHJlc291cmNlX2lkICkuYWZ0ZXIoXHJcblx0XHRcdFx0JzxkaXYgaWQ9XCJ3cGJjX2Jvb2tpbmdfZm9ybV9zcGluX2xvYWRlcicgKyByZXNvdXJjZV9pZCArICdcIiBjbGFzcz1cIndwYmNfYm9va2luZ19mb3JtX3NwaW5fbG9hZGVyXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7XCI+PGRpdiBjbGFzcz1cIndwYmNfc3BpbnNfbG9hZGVyX3dyYXBwZXJcIj48ZGl2IGNsYXNzPVwid3BiY19zcGluc19sb2FkZXJfbWluaVwiPjwvZGl2PjwvZGl2PjwvZGl2PidcclxuXHRcdFx0KTtcclxuXHRcdH1cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFJlbW92ZSAvIEhpZGUgYm9va2luZyBmb3JtICBTcGluIExvYWRlclxyXG5cdFx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHdwYmNfYm9va2luZ19mb3JtX19zcGluX2xvYWRlcl9faGlkZSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHRcdC8vIFJlbW92ZSBTcGluIExvYWRlclxyXG5cdFx0XHRqUXVlcnkoICcjd3BiY19ib29raW5nX2Zvcm1fc3Bpbl9sb2FkZXInICsgcmVzb3VyY2VfaWQgKS5yZW1vdmUoKTtcclxuXHRcdH1cclxuXHJcblxyXG5cdFx0LyoqXHJcblx0XHQgKiBIaWRlIGJvb2tpbmcgZm9ybSB3dGggYW5pbWF0aW9uXHJcblx0XHQgKlxyXG5cdFx0ICogQHBhcmFtIHJlc291cmNlX2lkXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHdwYmNfYm9va2luZ19mb3JtX19hbmltYXRlZF9faGlkZSggcmVzb3VyY2VfaWQgKXtcclxuXHJcblx0XHRcdC8vIGpRdWVyeSggJyNib29raW5nX2Zvcm0nICsgcmVzb3VyY2VfaWQgKS5zbGlkZVVwKCAgMTAwMFxyXG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQsIGZ1bmN0aW9uICgpe1xyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaWYgKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2dhdGV3YXlfcGF5bWVudF9mb3JtcycgKyByZXNwb25zZV9kYXRhWyAncmVzb3VyY2VfaWQnIF0gKSAhPSBudWxsICl7XHJcblx0XHRcdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBcdHdwYmNfZG9fc2Nyb2xsKCAnI3N1Ym1pdGluZycgKyByZXNvdXJjZV9pZCApO1xyXG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gfSBlbHNlXHJcblx0XHRcdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeSggJyNib29raW5nX2Zvcm0nICsgcmVzb3VyY2VfaWQgKS5wYXJlbnQoKS5maW5kKCAnLnN1Ym1pdGluZ19jb250ZW50JyApLmxlbmd0aCA+IDAgKXtcclxuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly93cGJjX2RvX3Njcm9sbCggJyNib29raW5nX2Zvcm0nICsgcmVzb3VyY2VfaWQgKyAnICsgLnN1Ym1pdGluZ19jb250ZW50JyApO1xyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgdmFyIGhpZGVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQgIHdwYmNfZG9fc2Nyb2xsKCBqUXVlcnkoICcjYm9va2luZ19mb3JtJyArIHJlc291cmNlX2lkICkucGFyZW50KCkuZmluZCggJy5zdWJtaXRpbmdfY29udGVudCcgKS5nZXQoIDAgKSApO1xyXG5cdFx0XHQvLyBcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSwgMTAwKTtcclxuXHRcdFx0Ly9cclxuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0Ly8gXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdC8vIFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdGpRdWVyeSggJyNib29raW5nX2Zvcm0nICsgcmVzb3VyY2VfaWQgKS5oaWRlKCk7XHJcblxyXG5cdFx0XHQvLyB2YXIgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCBmdW5jdGlvbiAoKXtcclxuXHRcdFx0Ly9cclxuXHRcdFx0Ly8gXHRpZiAoIGpRdWVyeSggJyNib29raW5nX2Zvcm0nICsgcmVzb3VyY2VfaWQgKS5wYXJlbnQoKS5maW5kKCAnLnN1Ym1pdGluZ19jb250ZW50JyApLmxlbmd0aCA+IDAgKXtcclxuXHRcdFx0Ly8gXHRcdHZhciByYW5kb21faWQgPSBNYXRoLmZsb29yKCAoTWF0aC5yYW5kb20oKSAqIDEwMDAwKSArIDEgKTtcclxuXHRcdFx0Ly8gXHRcdGpRdWVyeSggJyNib29raW5nX2Zvcm0nICsgcmVzb3VyY2VfaWQgKS5wYXJlbnQoKS5iZWZvcmUoICc8ZGl2IGlkPVwic2Nyb2xsX3RvJyArIHJhbmRvbV9pZCArICdcIj48L2Rpdj4nICk7XHJcblx0XHRcdC8vIFx0XHRjb25zb2xlLmxvZyggalF1ZXJ5KCAnI3Njcm9sbF90bycgKyByYW5kb21faWQgKSApO1xyXG5cdFx0XHQvL1xyXG5cdFx0XHQvLyBcdFx0d3BiY19kb19zY3JvbGwoICcjc2Nyb2xsX3RvJyArIHJhbmRvbV9pZCApO1xyXG5cdFx0XHQvLyBcdFx0Ly93cGJjX2RvX3Njcm9sbCggalF1ZXJ5KCAnI2Jvb2tpbmdfZm9ybScgKyByZXNvdXJjZV9pZCApLnBhcmVudCgpLmdldCggMCApICk7XHJcblx0XHRcdC8vIFx0fVxyXG5cdFx0XHQvLyB9LCA1MDAgKTtcclxuXHRcdH1cclxuXHQvLyA8L2VkaXRvci1mb2xkPlxyXG5cclxuXHJcblx0Ly8gPGVkaXRvci1mb2xkICAgICBkZWZhdWx0c3RhdGU9XCJjb2xsYXBzZWRcIiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2M9XCIgID09ICBNaW5pIFNwaW4gTG9hZGVyICA9PSAgXCIgID5cclxuXHJcblx0XHQvKipcclxuXHRcdCAqIFNob3cgbWluaSBTcGluIExvYWRlclxyXG5cdFx0ICogQHBhcmFtIHBhcmVudF9odG1sX2lkXHJcblx0XHQgKi9cclxuXHRcdGZ1bmN0aW9uIHdwYmNfX3NwaW5fbG9hZGVyX19taW5pX19zaG93KCBwYXJlbnRfaHRtbF9pZCAsIGNvbG9yID0gJyMwMDcxY2UnICl7XHJcblxyXG5cdFx0XHRpZiAoICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIChjb2xvcikpICYmICgnJyAhPSBjb2xvcikgKXtcclxuXHRcdFx0XHRjb2xvciA9ICdib3JkZXItY29sb3I6JyArIGNvbG9yICsgJzsnO1xyXG5cdFx0XHR9XHJcblx0XHRcdC8vIFNob3cgU3BpbiBMb2FkZXJcclxuXHRcdFx0alF1ZXJ5KCAnIycgKyBwYXJlbnRfaHRtbF9pZCApLmFmdGVyKFxyXG5cdFx0XHRcdCc8ZGl2IGlkPVwid3BiY19taW5pX3NwaW5fbG9hZGVyJyArIHBhcmVudF9odG1sX2lkICsgJ1wiIGNsYXNzPVwid3BiY19ib29raW5nX2Zvcm1fc3Bpbl9sb2FkZXJcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTttaW4taGVpZ2h0OiAyLjhyZW07XCI+PGRpdiBjbGFzcz1cIndwYmNfc3BpbnNfbG9hZGVyX3dyYXBwZXJcIj48ZGl2IGNsYXNzPVwid3BiY19vbmVfc3Bpbl9sb2FkZXJfbWluaSAwd3BiY19zcGluc19sb2FkZXJfbWluaVwiIHN0eWxlPVwiJytjb2xvcisnXCI+PC9kaXY+PC9kaXY+PC9kaXY+J1xyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8qKlxyXG5cdFx0ICogUmVtb3ZlIC8gSGlkZSBtaW5pIFNwaW4gTG9hZGVyXHJcblx0XHQgKiBAcGFyYW0gcGFyZW50X2h0bWxfaWRcclxuXHRcdCAqL1xyXG5cdFx0ZnVuY3Rpb24gd3BiY19fc3Bpbl9sb2FkZXJfX21pbmlfX2hpZGUoIHBhcmVudF9odG1sX2lkICl7XHJcblxyXG5cdFx0XHQvLyBSZW1vdmUgU3BpbiBMb2FkZXJcclxuXHRcdFx0alF1ZXJ5KCAnI3dwYmNfbWluaV9zcGluX2xvYWRlcicgKyBwYXJlbnRfaHRtbF9pZCApLnJlbW92ZSgpO1xyXG5cdFx0fVxyXG5cclxuXHQvLyA8L2VkaXRvci1mb2xkPlxyXG5cclxuLy9UT0RPOiB3aGF0ICBhYm91dCBzaG93aW5nIG9ubHkgIFRoYW5rIHlvdS4gbWVzc2FnZSB3aXRob3V0IHBheW1lbnQgZm9ybXMuXHJcbi8qKlxyXG4gKiBTaG93ICdUaGFuayB5b3UnLiBtZXNzYWdlIGFuZCBwYXltZW50IGZvcm1zXHJcbiAqXHJcbiAqIEBwYXJhbSByZXNwb25zZV9kYXRhXHJcbiAqL1xyXG5mdW5jdGlvbiB3cGJjX3Nob3dfdGhhbmtfeW91X21lc3NhZ2VfYWZ0ZXJfYm9va2luZyggcmVzcG9uc2VfZGF0YSApe1xyXG5cclxuXHRpZiAoXHJcbiBcdFx0ICAgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgKHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAndHlfaXNfcmVkaXJlY3QnIF0pKVxyXG5cdFx0JiYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgKHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAndHlfdXJsJyBdKSlcclxuXHRcdCYmICgncGFnZScgPT0gcmVzcG9uc2VfZGF0YVsgJ2FqeF9jb25maXJtYXRpb24nIF1bICd0eV9pc19yZWRpcmVjdCcgXSlcclxuXHRcdCYmICgnJyAhPSByZXNwb25zZV9kYXRhWyAnYWp4X2NvbmZpcm1hdGlvbicgXVsgJ3R5X3VybCcgXSlcclxuXHQpe1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZV9kYXRhWyAnYWp4X2NvbmZpcm1hdGlvbicgXVsgJ3R5X3VybCcgXTtcclxuXHRcdHJldHVybjtcclxuXHR9XHJcblxyXG5cdHZhciByZXNvdXJjZV9pZCA9IHJlc3BvbnNlX2RhdGFbICdyZXNvdXJjZV9pZCcgXVxyXG5cdHZhciBjb25maXJtX2NvbnRlbnQgPScnO1xyXG5cclxuXHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAndHlfbWVzc2FnZScgXSkgKXtcclxuXHRcdFx0XHRcdCAgXHRcdFx0IHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAndHlfbWVzc2FnZScgXSA9ICcnO1xyXG5cdH1cclxuXHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAndHlfcGF5bWVudF9wYXltZW50X2Rlc2NyaXB0aW9uJyBdICkgKXtcclxuXHRcdCBcdFx0XHQgIFx0XHRcdCByZXNwb25zZV9kYXRhWyAnYWp4X2NvbmZpcm1hdGlvbicgXVsgJ3R5X3BheW1lbnRfcGF5bWVudF9kZXNjcmlwdGlvbicgXSA9ICcnO1xyXG5cdH1cclxuXHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgKHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAncGF5bWVudF9jb3N0JyBdICkgKXtcclxuXHRcdFx0XHRcdCAgXHRcdFx0IHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAncGF5bWVudF9jb3N0JyBdID0gJyc7XHJcblx0fVxyXG5cdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiAocmVzcG9uc2VfZGF0YVsgJ2FqeF9jb25maXJtYXRpb24nIF1bICd0eV9wYXltZW50X2dhdGV3YXlzJyBdICkgKXtcclxuXHRcdFx0XHRcdCAgXHRcdFx0IHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAndHlfcGF5bWVudF9nYXRld2F5cycgXSA9ICcnO1xyXG5cdH1cclxuXHR2YXIgdHlfbWVzc2FnZV9oaWRlIFx0XHRcdFx0XHRcdD0gKCcnID09IHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAndHlfbWVzc2FnZScgXSkgPyAnd3BiY190eV9oaWRlJyA6ICcnO1xyXG5cdHZhciB0eV9wYXltZW50X3BheW1lbnRfZGVzY3JpcHRpb25faGlkZSBcdD0gKCcnID09IHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAndHlfcGF5bWVudF9wYXltZW50X2Rlc2NyaXB0aW9uJyBdLnJlcGxhY2UoIC9cXFxcbi9nLCAnJyApKSA/ICd3cGJjX3R5X2hpZGUnIDogJyc7XHJcblx0dmFyIHR5X2Jvb2tpbmdfY29zdHNfaGlkZSBcdFx0XHRcdD0gKCcnID09IHJlc3BvbnNlX2RhdGFbICdhanhfY29uZmlybWF0aW9uJyBdWyAncGF5bWVudF9jb3N0JyBdKSA/ICd3cGJjX3R5X2hpZGUnIDogJyc7XHJcblx0dmFyIHR5X3BheW1lbnRfZ2F0ZXdheXNfaGlkZSBcdFx0XHQ9ICgnJyA9PSByZXNwb25zZV9kYXRhWyAnYWp4X2NvbmZpcm1hdGlvbicgXVsgJ3R5X3BheW1lbnRfZ2F0ZXdheXMnIF0ucmVwbGFjZSggL1xcXFxuL2csICcnICkpID8gJ3dwYmNfdHlfaGlkZScgOiAnJztcclxuXHJcblx0aWYgKCAnd3BiY190eV9oaWRlJyAhPSB0eV9wYXltZW50X2dhdGV3YXlzX2hpZGUgKXtcclxuXHRcdGpRdWVyeSggJy53cGJjX3R5X19jb250ZW50X3RleHQud3BiY190eV9fY29udGVudF9nYXRld2F5cycgKS5odG1sKCAnJyApO1x0Ly8gUmVzZXQgIGFsbCAgb3RoZXIgcG9zc2libGUgZ2F0ZXdheXMgYmVmb3JlIHNob3dpbmcgbmV3IG9uZS5cclxuXHR9XHJcblxyXG5cdGNvbmZpcm1fY29udGVudCArPSBgPGRpdiBpZD1cIndwYmNfc2Nyb2xsX3BvaW50XyR7cmVzb3VyY2VfaWR9XCI+PC9kaXY+YDtcclxuXHRjb25maXJtX2NvbnRlbnQgKz0gYCAgPGRpdiBjbGFzcz1cIndwYmNfYWZ0ZXJfYm9va2luZ190aGFua195b3Vfc2VjdGlvblwiPmA7XHJcblx0Y29uZmlybV9jb250ZW50ICs9IGAgICAgPGRpdiBjbGFzcz1cIndwYmNfdHlfX21lc3NhZ2UgJHt0eV9tZXNzYWdlX2hpZGV9XCI+JHtyZXNwb25zZV9kYXRhWyAnYWp4X2NvbmZpcm1hdGlvbicgXVsgJ3R5X21lc3NhZ2UnIF19PC9kaXY+YDtcclxuICAgIGNvbmZpcm1fY29udGVudCArPSBgICAgIDxkaXYgY2xhc3M9XCJ3cGJjX3R5X19jb250YWluZXJcIj5gO1xyXG4gICAgY29uZmlybV9jb250ZW50ICs9IGAgICAgICA8ZGl2IGNsYXNzPVwid3BiY190eV9faGVhZGVyXCI+JHtyZXNwb25zZV9kYXRhWydhanhfY29uZmlybWF0aW9uJ11bJ3R5X21lc3NhZ2VfYm9va2luZ19pZCddfTwvZGl2PmA7XHJcbiAgICBjb25maXJtX2NvbnRlbnQgKz0gYCAgICAgIDxkaXYgY2xhc3M9XCJ3cGJjX3R5X19jb250ZW50XCI+YDtcclxuXHRjb25maXJtX2NvbnRlbnQgKz0gYCAgICAgICAgPGRpdiBjbGFzcz1cIndwYmNfdHlfX2NvbnRlbnRfdGV4dCB3cGJjX3R5X19wYXltZW50X2Rlc2NyaXB0aW9uICR7dHlfcGF5bWVudF9wYXltZW50X2Rlc2NyaXB0aW9uX2hpZGV9XCI+JHtyZXNwb25zZV9kYXRhWyAnYWp4X2NvbmZpcm1hdGlvbicgXVsgJ3R5X3BheW1lbnRfcGF5bWVudF9kZXNjcmlwdGlvbicgXS5yZXBsYWNlKCAvXFxcXG4vZywgJycgKX08L2Rpdj5gO1xyXG4gICAgY29uZmlybV9jb250ZW50ICs9IGAgICAgICBcdDxkaXYgY2xhc3M9XCJ3cGJjX3R5X19jb250ZW50X3RleHQgd3BiY19jb2xzXzJcIj4ke3Jlc3BvbnNlX2RhdGFbJ2FqeF9jb25maXJtYXRpb24nXVsndHlfY3VzdG9tZXJfZGV0YWlscyddfTwvZGl2PmA7XHJcbiAgICBjb25maXJtX2NvbnRlbnQgKz0gYCAgICAgIFx0PGRpdiBjbGFzcz1cIndwYmNfdHlfX2NvbnRlbnRfdGV4dCB3cGJjX2NvbHNfMlwiPiR7cmVzcG9uc2VfZGF0YVsnYWp4X2NvbmZpcm1hdGlvbiddWyd0eV9ib29raW5nX2RldGFpbHMnXX08L2Rpdj5gO1xyXG5cdGNvbmZpcm1fY29udGVudCArPSBgICAgICAgICA8ZGl2IGNsYXNzPVwid3BiY190eV9fY29udGVudF90ZXh0IHdwYmNfdHlfX2NvbnRlbnRfY29zdHMgJHt0eV9ib29raW5nX2Nvc3RzX2hpZGV9XCI+JHtyZXNwb25zZV9kYXRhWyAnYWp4X2NvbmZpcm1hdGlvbicgXVsgJ3R5X2Jvb2tpbmdfY29zdHMnIF19PC9kaXY+YDtcclxuXHRjb25maXJtX2NvbnRlbnQgKz0gYCAgICAgICAgPGRpdiBjbGFzcz1cIndwYmNfdHlfX2NvbnRlbnRfdGV4dCB3cGJjX3R5X19jb250ZW50X2dhdGV3YXlzICR7dHlfcGF5bWVudF9nYXRld2F5c19oaWRlfVwiPiR7cmVzcG9uc2VfZGF0YVsgJ2FqeF9jb25maXJtYXRpb24nIF1bICd0eV9wYXltZW50X2dhdGV3YXlzJyBdLnJlcGxhY2UoIC9cXFxcbi9nLCAnJyApLnJlcGxhY2UoIC9hamF4X3NjcmlwdC9naSwgJ3NjcmlwdCcgKX08L2Rpdj5gO1xyXG4gICAgY29uZmlybV9jb250ZW50ICs9IGAgICAgICA8L2Rpdj5gO1xyXG4gICAgY29uZmlybV9jb250ZW50ICs9IGAgICAgPC9kaXY+YDtcclxuXHRjb25maXJtX2NvbnRlbnQgKz0gYDwvZGl2PmA7XHJcblxyXG4gXHRqUXVlcnkoICcjYm9va2luZ19mb3JtJyArIHJlc291cmNlX2lkICkuYWZ0ZXIoIGNvbmZpcm1fY29udGVudCApO1xyXG59XHJcbiJdLCJmaWxlIjoiaW5jbHVkZXMvX2NhcGFjaXR5L19vdXQvY3JlYXRlX2Jvb2tpbmcuanMifQ==;
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/js/wpbc_times.js?ver=10.0 
var time_buffer_value = 0;					// Customization of bufer time for DAN
var is_check_start_time_gone = false;		// Check  start time or end time for the time, which is gone already TODAY.
var start_time_checking_index;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Get dots for partially  booked dates.
 *    For parent booking resources with  specific capacity,
 *    System do not show partially booked dates,  if at least one child booking resource fully  available
 *    Otherwise it show maximum number of time-slot in one specific child booking resource
 *
 * @param param_calendar_id				ID of booking resource
 * @param my_thisDateTime				timestamp of date
 * @returns {string}
 */
function wpbc_show_date_info_top( param_calendar_id, my_thisDateTime ){

	var resource_id = parseInt( param_calendar_id.replace( "calendar_booking", '' ) );

	// console.log( _wpbc.bookings_in_calendar__get( resource_id ) );		// for debug

	// 1. Get child booking resources  or single booking resource  that  exist  in dates :	[1] | [1,14,15,17]
	var child_resources_arr = wpbc_clone_obj( _wpbc.booking__get_param_value( resource_id, 'resources_id_arr__in_dates' ) );

	// '2023-08-21'
	var sql_date = wpbc__get__sql_class_date( new Date( my_thisDateTime ) );

	var child_resource_id;
	var merged_seconds;
	var dots_count = 0;

	var dots_in__resources = [];

	// Loop all resources ID
	for ( var res_key in child_resources_arr ){

		child_resource_id = child_resources_arr[ res_key ];

		// _wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[12].booked_time_slots.merged_seconds		= [ "07:00:11 - 07:30:02", "10:00:11 - 00:00:00" ]
		// _wpbc.bookings_in_calendar__get_for_date(2,'2023-08-21')[2].booked_time_slots.merged_seconds			= [  [ 25211, 27002 ], [ 36011, 86400 ]  ]

		if ( false !== _wpbc.bookings_in_calendar__get_for_date( resource_id, sql_date ) ){
			merged_seconds = _wpbc.bookings_in_calendar__get_for_date( resource_id, sql_date )[ child_resource_id ].booked_time_slots.merged_seconds;		// [  [ 25211, 27002 ], [ 36011, 86400 ]  ]
		} else {
			merged_seconds = [];
		}

		if ( 0 === merged_seconds.length ){
			return ''; 																		// Day available
		}

		for ( var i = 0; i < merged_seconds.length; i++ ){
			if ( ! wpbc_is_this_timeslot__full_day_booked( merged_seconds[i] ) ){			// Check  if this fully  booked date. If yes,  then  do not count it
				dots_count++;
			}
		}

		dots_in__resources.push( dots_count );
		dots_count = 0;
	}

	var dots_count_max = Math.max.apply( Math, dots_in__resources );						// Get maximum value in array [ 1, 5, 3]  ->  5

	var dot_content = '';
	for ( var d = 0; d < dots_count_max; d++ ){
		dot_content += '&centerdot;';
	}

	dot_content = ( '' !== dot_content ) ? '<div class="wpbc_time_dots">' + dot_content + '</div>' : '';

	return dot_content;
}


function wpbc_show_date_info_bottom( param_calendar_id, my_thisDateTime ) {

	if ( typeof( wpbc_show_day_cost_in_date_bottom ) == 'function' ) {

		return wpbc_show_day_cost_in_date_bottom( param_calendar_id, my_thisDateTime );

	} else {
		return '';
	}
}



/**
 * Hide Tippy tooltip on scroll, to prevent issue on mobile touch devices of showing tooltip at top left corner!
 * @param evt
 */
jQuery( window ).on( 'scroll', function ( event ){													//FixIn: 9.2.1.5	//FixIn: 9.4.3.3
	if ( 'function' === typeof( wpbc_tippy ) ){
		wpbc_tippy.hideAll();
	}
} );


/**
 * Check if in booking form  exist  times fields for booking for specific time-slot
 * @param resource_id
 * @param form_elements
 * @returns {boolean}
 */
function wpbc_is_time_field_in_booking_form( resource_id, form_elements ){											//FixIn: 8.2.1.28

	var count = form_elements.length;
	var start_time = false;
	var end_time = false;
	var duration = false;
	var element;

	/**
	 *  Get from booking form  'rangetime', 'durationtime', 'starttime', 'endtime',  if exists.
	 */
	for ( var i = 0; i < count; i++ ){

		element = form_elements[ i ];

		// Skip elements from garbage
		if ( jQuery( element ).closest( '.booking_form_garbage' ).length ){											//FixIn: 7.1.2.14
			continue;
		}

		if (
			   ( element.name != undefined )
			&& ( element.name.indexOf( 'hint' ) !== -1 )				//FixIn: 9.5.5.2
		){
			var my_element = element.name; //.toString();
			if ( my_element.indexOf( 'rangetime' ) !== -1 ){                       	// Range Time

				return true;
			}
			if ( (my_element.indexOf( 'durationtime' ) !== -1) ){                	// Duration
				duration = element.value;
			}
			if ( my_element.indexOf( 'starttime' ) !== -1 ){                     	// Start Time
				start_time = element.value;
			}
			if ( my_element.indexOf( 'endtime' ) !== -1 ){                        	// End Time
				end_time = element.value;
			}
		}
	}

	// Duration get Values
	if ( ( duration !== false ) && ( start_time !== false ) ){  // we have Duration and Start time
		return true;
	}

	if ( ( start_time !== false ) && ( end_time !== false ) ){  // we have End time and Start time
		return true;
	}

	return false;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//TODO: Continue Refactoring here 2018-04-21
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	//PS: This function  from ../booking/inc/js/personal.js
	function wpbc_is_this_time_selection_not_available( resource_id, form_elements ){

		// Skip this checking if we are in the Admin  panel at Add booking page
		if ( location.href.indexOf( 'page=wpbc-new' ) > 0 ) {
			return false;
		}

		var count = form_elements.length;
		var start_time = false;
		var end_time = false;
		var duration = false;
		var element;
		var element_start = false;
		var element_end = false;
		var element_duration = false;
		var element_rangetime = false;

		/**
		 *  Get from booking form  'rangetime', 'durationtime', 'starttime', 'endtime',  if exists.
		 */
		for ( var i = 0; i < count; i++ ){

			element = form_elements[ i ];

			// Skip elements from garbage
			if ( jQuery( element ).closest( '.booking_form_garbage' ).length ){											//FixIn: 7.1.2.14
				continue;
			}

			if (
				   ( element.name != undefined )
				&& ( element.name.indexOf( 'hint' ) === -1 )				//FixIn: 9.5.5.2		//FixIn: 9.6.3.9
			){
				var my_element = element.name; //.toString();
				if ( my_element.indexOf( 'rangetime' ) !== -1 ){                       	// Range Time
					if ( element.value == '' ){                                 										//FixIn: 7.0.Beta.19
					 	var notice_message_id = wpbc_front_end__show_message__warning( element, message_verif_requred );
						return true;
					}
					var my_rangetime = element.value.split( '-' );
					if ( my_rangetime.length > 1 ){
						start_time = my_rangetime[ 0 ].replace( /(^\s+)|(\s+$)/g, "" ); 	// Trim
						end_time = my_rangetime[ 1 ].replace( /(^\s+)|(\s+$)/g, "" );
						element_rangetime = element;
					}
				}
				if ( (my_element.indexOf( 'durationtime' ) !== -1) ){                	// Duration
					duration = element.value;
					element_duration = element;
				}
				if ( my_element.indexOf( 'starttime' ) !== -1 ){                     	// Start Time
					start_time = element.value;
					element_start = element;
				}
				if ( my_element.indexOf( 'endtime' ) !== -1 ){                        	// End Time
					end_time = element.value;
					element_end = element;
				}
			}
		}


		// Duration get Values
		if ( (duration !== false) && (start_time !== false) ){  // we have Duration and Start time so  try to get End time

			var mylocalstarttime = start_time.split( ':' );
			var d = new Date( 1980, 1, 1, mylocalstarttime[ 0 ], mylocalstarttime[ 1 ], 0 );

			var my_duration = duration.split( ':' );
			my_duration = my_duration[ 0 ] * 60 * 60 * 1000 + my_duration[ 1 ] * 60 * 1000;
			d.setTime( d.getTime() + my_duration );

			var my_hours = d.getHours();
			if ( my_hours < 10 ) my_hours = '0' + (my_hours + '');
			var my_minutes = d.getMinutes();
			if ( my_minutes < 10 ) my_minutes = '0' + (my_minutes + '');

			// We are get end time
			end_time = (my_hours + '') + ':' + (my_minutes + '');
			if ( end_time == '00:00' ) end_time = '23:59';
		}


		if ( (start_time === false) || (end_time === false) ){                     // We do not have Start or End time or Both of them, so do not check it

			return false;

		} else {

			var valid_time = true;
			if ( (start_time == '') || (end_time == '') ) valid_time = false;

			if ( !isValidTimeTextField( start_time ) ) valid_time = false;
			if ( !isValidTimeTextField( end_time ) ) valid_time = false;

			if ( valid_time === true )
				if (
					(typeof(checkRecurentTimeInside) == 'function') &&
					(typeof(is_booking_recurrent_time) !== 'undefined') &&
					(is_booking_recurrent_time == true)
				){                                                                // Recheck Time here !!!
					valid_time = checkRecurentTimeInside( [ start_time, end_time ], resource_id );
				} else {

					if ( typeof(checkTimeInside) == 'function' ){
						valid_time = checkTimeInside( start_time, true, resource_id );
					}

					if ( valid_time === true ){
						if ( typeof(checkTimeInside) == 'function' ){
							valid_time = checkTimeInside( end_time, false, resource_id );
						}
					}
				}

			if ( valid_time !== true ){
				//return false;                                                  // do not show warning for setting pending days selectable,  if making booking for time-slot   //FixIn: 7.0.1.23
				if ( (is_booking_used_check_in_out_time) && (element_start !== false) && (element_end !== false) ){      //FixIn:6.1.1.1
					wpbc_front_end__show_message__warning_under_element( '#date_booking' + resource_id, message_checkinouttime_error  );
				}
				if ( element_rangetime !== false ){ wpbc_front_end__show_message__warning_under_element( element_rangetime, message_rangetime_error ); }
				if ( element_duration !== false ){  wpbc_front_end__show_message__warning_under_element( element_duration, message_durationtime_error ); }
				if ( element_start !== false ){ 	wpbc_front_end__show_message__warning_under_element( element_start, message_starttime_error ); }
				if ( element_end !== false ){ 		wpbc_front_end__show_message__warning_under_element( element_end, message_endtime_error ); }

				return true;

			} else {
				return false;
			}

		}


	}


	function isTimeTodayGone( myTime, sort_date_array ){
		var date_to_check = sort_date_array[ 0 ];
		if ( is_check_start_time_gone == false ){
			date_to_check = sort_date_array[ (sort_date_array.length - 1) ];
		}

		if ( parseInt( date_to_check[ 0 ] ) < parseInt( wpbc_today[ 0 ] ) ) return true;
		if ( (parseInt( date_to_check[ 0 ] ) == parseInt( wpbc_today[ 0 ] )) && (parseInt( date_to_check[ 1 ] ) < parseInt( wpbc_today[ 1 ] )) )
			return true;
		if ( (parseInt( date_to_check[ 0 ] ) == parseInt( wpbc_today[ 0 ] )) && (parseInt( date_to_check[ 1 ] ) == parseInt( wpbc_today[ 1 ] )) && (parseInt( date_to_check[ 2 ] ) < parseInt( wpbc_today[ 2 ] )) )
			return true;
		if ( (parseInt( date_to_check[ 0 ] ) == parseInt( wpbc_today[ 0 ] )) &&
			(parseInt( date_to_check[ 1 ] ) == parseInt( wpbc_today[ 1 ] )) &&
			(parseInt( date_to_check[ 2 ] ) == parseInt( wpbc_today[ 2 ] )) ){
			var mytime_value = myTime.split( ":" );
			mytime_value = mytime_value[ 0 ] * 60 + parseInt( mytime_value[ 1 ] );

			var current_time_value = wpbc_today[ 3 ] * 60 + parseInt( wpbc_today[ 4 ] );

			if ( current_time_value > mytime_value ) return true;

		}
		return false;
	}


	function checkTimeInside( mytime, is_start_time, bk_type ){

		var my_dates_str = document.getElementById( 'date_booking' + bk_type ).value;                 // GET DATES From TEXTAREA

		return checkTimeInsideProcess( mytime, is_start_time, bk_type, my_dates_str );

	}


	function checkRecurentTimeInside( my_rangetime, bk_type ){

		var valid_time = true;
		var my_dates_str = document.getElementById( 'date_booking' + bk_type ).value;                 // GET DATES From TEXTAREA
		// recurrent time check for all days in loop

		var date_array = my_dates_str.split( ", " );
		if ( date_array.length == 2 ){ // This recheck is need for editing booking, with single day
			if ( date_array[ 0 ] == date_array[ 1 ] ){
				date_array = [ date_array[ 0 ] ];
			}
		}
		var temp_date_str = '';
		for ( var i = 0; i < date_array.length; i++ ){  // Get SORTED selected days array
			temp_date_str = date_array[ i ];
			if ( checkTimeInsideProcess( my_rangetime[ 0 ], true, bk_type, temp_date_str ) == false ) valid_time = false;
			if ( checkTimeInsideProcess( my_rangetime[ 1 ], false, bk_type, temp_date_str ) == false ) valid_time = false;

		}

		return valid_time;
	}


// Function check start and end time at selected days
	function checkTimeInsideProcess( mytime, is_start_time, bk_type, my_dates_str ){
		var i, h, s, m;	//FixIn: 9.1.5.1

		var date_array = my_dates_str.split( ", " );
		if ( date_array.length == 2 ){ // This recheck is need for editing booking, with single day
			if ( date_array[ 0 ] == date_array[ 1 ] ){
				date_array = [ date_array[ 0 ] ];
			}
		}

		var temp_elemnt;
		var td_class;
		var sort_date_array = [];
		var work_date_array = [];
		var times_array = [];
		var is_check_for_time;

		for ( var i = 0; i < date_array.length; i++ ){  // Get SORTED selected days array
			temp_elemnt = date_array[ i ].split( "." );
			sort_date_array[ i ] = [ temp_elemnt[ 2 ], temp_elemnt[ 1 ] + '', temp_elemnt[ 0 ] + '' ]; // [2009,7,1],...
		}
		sort_date_array.sort();                                                                   // SORT    D a t e s
		for ( i = 0; i < sort_date_array.length; i++ ){                                  // trnasform to integers
			sort_date_array[ i ] = [ parseInt( sort_date_array[ i ][ 0 ] * 1 ), parseInt( sort_date_array[ i ][ 1 ] * 1 ), parseInt( sort_date_array[ i ][ 2 ] * 1 ) ]; // [2009,7,1],...
		}

		if ( ((is_check_start_time_gone) && (is_start_time)) ||
			((!is_check_start_time_gone) && (!is_start_time)) ){

			if ( isTimeTodayGone( mytime, sort_date_array ) ) return false;
		}
		//  CHECK FOR BOOKING INSIDE OF     S E L E C T E D    DAY RANGE AND FOR TOTALLY BOOKED DAYS AT THE START AND END OF RANGE
		work_date_array = sort_date_array;
		for ( var j = 0; j < work_date_array.length; j++ ){
			td_class = work_date_array[ j ][ 1 ] + '-' + work_date_array[ j ][ 2 ] + '-' + work_date_array[ j ][ 0 ];

			if ( (j == 0) || (j == (work_date_array.length - 1)) ) is_check_for_time = true;         // Check for time only start and end time
			else is_check_for_time = false;

			// Get dates and time from pending dates
			if ( typeof(date2approve[ bk_type ]) !== 'undefined' ){
				if ( (typeof(date2approve[ bk_type ][ td_class ]) !== 'undefined') ){
					if ( ! is_check_for_time ){
						return false;
					} // its mean that this date is booked inside of range selected dates
					if ( (date2approve[ bk_type ][ td_class ][ 0 ][ 3 ] != 0) || (date2approve[ bk_type ][ td_class ][ 0 ][ 4 ] != 0) ){
						// Evrything good - some time is booked check later
					} else {
						return false;
					} // its mean that this date tottally booked
				}
			}

			// Get dates and time from pending dates
			if ( typeof(date_approved[ bk_type ]) !== 'undefined' ){
				if ( (typeof(date_approved[ bk_type ][ td_class ]) !== 'undefined') ){
					if ( !is_check_for_time ){
						return false;
					} // its mean that this date is booked inside of range selected dates
					if ( (date_approved[ bk_type ][ td_class ][ 0 ][ 3 ] != 0) || (date_approved[ bk_type ][ td_class ][ 0 ][ 4 ] != 0) ){
						// Evrything good - some time is booked check later
					} else {
						return false;
					} // its mean that this date tottally booked
				}
			}
		}  ///////////////////////////////////////////////////////////////////////////////////////////////////////


		// Check    START   OR    END   time for time no in correct fee range
		if ( is_start_time ) work_date_array = sort_date_array[ 0 ];
		else work_date_array = sort_date_array[ sort_date_array.length - 1 ];

		td_class = work_date_array[ 1 ] + '-' + work_date_array[ 2 ] + '-' + work_date_array[ 0 ];

		// Get dates and time from pending dates
		if ( typeof(date2approve[ bk_type ]) !== 'undefined' )
			if ( typeof(date2approve[ bk_type ][ td_class ]) !== 'undefined' )
				for ( i = 0; i < date2approve[ bk_type ][ td_class ].length; i++ ){
					h = date2approve[ bk_type ][ td_class ][ i ][ 3 ];
					if ( h < 10 ) h = '0' + h;
					if ( h == 0 ) h = '00';
					m = date2approve[ bk_type ][ td_class ][ i ][ 4 ];
					if ( m < 10 ) m = '0' + m;
					if ( m == 0 ) m = '00';
					s = date2approve[ bk_type ][ td_class ][ i ][ 5 ];

//Customization of bufer time for DAN
					if ( s == '02' ){
						m = (m * 1) + time_buffer_value;
						if ( m > 59 ){
							m = m - 60;
							h = (h * 1) + 1;
						}
						if ( m < 10 ) m = '0' + m;
					}

					times_array[ times_array.length ] = [ h, m, s ];
				}

		// Get dates and time from pending dates
		if ( typeof(date_approved[ bk_type ]) !== 'undefined' )
			if ( typeof(date_approved[ bk_type ][ td_class ]) !== 'undefined' )
				for ( i = 0; i < date_approved[ bk_type ][ td_class ].length; i++ ){
					h = date_approved[ bk_type ][ td_class ][ i ][ 3 ];
					if ( h < 10 ) h = '0' + h;
					if ( h == 0 ) h = '00';
					m = date_approved[ bk_type ][ td_class ][ i ][ 4 ];
					if ( m < 10 ) m = '0' + m;
					if ( m == 0 ) m = '00';
					s = date_approved[ bk_type ][ td_class ][ i ][ 5 ];

//Customization of bufer time for DAN
					if ( s == '02' ){
						m = (m * 1) + time_buffer_value;
						if ( m > 59 ){
							m = m - 60;
							h = (h * 1) + 1;
						}
						if ( m < 10 ) m = '0' + m;
					}


					times_array[ times_array.length ] = [ h, m, s ];
				}


		times_array.sort();                     // SORT TIMES

		var times_in_day = [];                  // array with all times
		var times_in_day_interval_marks = [];   // array with time interval marks 1- stsrt time 2 - end time


		for ( i = 0; i < times_array.length; i++ ){
			s = times_array[ i ][ 2 ];         // s = 2 - end time,   s = 1 - start time
			// Start close interval
			if ( (s == 2) && (i == 0) ){
				times_in_day[ times_in_day.length ] = 0;
				times_in_day_interval_marks[ times_in_day_interval_marks.length ] = 1;
			}
			// Normal
			times_in_day[ times_in_day.length ] = times_array[ i ][ 0 ] * 60 + parseInt( times_array[ i ][ 1 ] );
			times_in_day_interval_marks[ times_in_day_interval_marks.length ] = s;
			// End close interval
			if ( (s == 1) && (i == (times_array.length - 1)) ){
				times_in_day[ times_in_day.length ] = (24 * 60);
				times_in_day_interval_marks[ times_in_day_interval_marks.length ] = 2;
			}
		}

		// Get time from entered time
		var mytime_value = mytime.split( ":" );
		mytime_value = mytime_value[ 0 ] * 60 + parseInt( mytime_value[ 1 ] );

//alert('My time:'+ mytime_value + '  List of times: '+ times_in_day + '  Saved indexes: ' + start_time_checking_index + ' Days: ' + sort_date_array ) ;

		var start_i = 0;
		if ( start_time_checking_index != undefined )
			if ( start_time_checking_index[ 0 ] != undefined )
				if ( (!is_start_time) && (sort_date_array.length == 1) ){
					start_i = start_time_checking_index[ 0 ];
					/*start_i++;*/
				}
		i = start_i;

		// Main checking inside a day
		for ( i = start_i; i < times_in_day.length; i++ ){
			times_in_day[ i ] = parseInt( times_in_day[ i ] );
			mytime_value = parseInt( mytime_value );
			if ( is_start_time ){
				if ( mytime_value > times_in_day[ i ] ){
					// Its Ok, lets Loop to next item
				} else if ( mytime_value == times_in_day[ i ] ){
					if ( times_in_day_interval_marks[ i ] == 1 ){
						return false;     //start time is begin with some other interval
					} else {
						if ( (i + 1) <= (times_in_day.length - 1) ){
							if ( times_in_day[ i + 1 ] <= mytime_value ) return false;  //start time  is begin with next elemnt interval
							else {                                                 // start time from end of some other
								if ( sort_date_array.length > 1 )
									if ( (i + 1) <= (times_in_day.length - 1) ) return false;   // Its mean that we make end booking at some other day then this and we have some booking time at this day after start booking  - its wrong
								start_time_checking_index = [ i, td_class, mytime_value ];
								return true;
							}
						}
						if ( sort_date_array.length > 1 )
							if ( (i + 1) <= (times_in_day.length - 1) ) return false;   // Its mean that we make end booking at some other day then this and we have some booking time at this day after start booking  - its wrong
						start_time_checking_index = [ i, td_class, mytime_value ];
						return true;                                            // start time from end of some other
					}
				} else if ( mytime_value < times_in_day[ i ] ){
					if ( times_in_day_interval_marks[ i ] == 2 ){
						return false;     // start time inside of some interval
					} else {
						if ( sort_date_array.length > 1 )
							if ( (i + 1) <= (times_in_day.length - 1) ) return false;   // Its mean that we make end booking at some other day then this and we have some booking time at this day after start booking  - its wrong
						start_time_checking_index = [ i, td_class, mytime_value ];
						return true;
					}
				}
			} else {
				if ( sort_date_array.length == 1 ){

					if ( start_time_checking_index != undefined )
						if ( start_time_checking_index[ 2 ] != undefined )

							if ( (start_time_checking_index[ 2 ] == times_in_day[ i ]) && (times_in_day_interval_marks[ i ] == 2) ){    // Good, because start time = end of some other interval and we need to get next interval for current end time.
							} else if ( times_in_day[ i ] < mytime_value ) return false;                 // some interval begins before end of curent "end time"
							else {
								if ( start_time_checking_index[ 2 ] >= mytime_value ) return false;  // we are select only one day and end time is earlythe starttime its wrong
								return true;                                                    // if we selected only one day so evrything is fine and end time no inside some other intervals
							}
				} else {
					if ( times_in_day[ i ] < mytime_value ) return false;                 // Some other interval start before we make end time in the booking at the end day selection
					else return true;
				}

			}
		}

		if ( is_start_time ) start_time_checking_index = [ i, td_class, mytime_value ];
		else {
			if ( start_time_checking_index != undefined )
				if ( start_time_checking_index[ 2 ] != undefined )
					if ( (sort_date_array.length == 1) && (start_time_checking_index[ 2 ] >= mytime_value) ) return false;  // we are select only one day and end time is earlythe starttime its wrong
		}
		return true;
	}


	//PS: This function  from ../booking/inc/js/personal.js
	function isValidTimeTextField( timeStr ){
		// Checks if time is in HH:MM AM/PM format.
		// The seconds and AM/PM are optional.

		var timePat = /^(\d{1,2}):(\d{2})(\s?(AM|am|PM|pm))?$/;

		var matchArray = timeStr.match( timePat );
		if ( matchArray == null ){
			return false; //("<?php _e('Time is not in a valid format. Use this format HH:MM or HH:MM AM/PM'); ?>");
		}
		var hour = matchArray[ 1 ];
		var minute = matchArray[ 2 ];
		var ampm = matchArray[ 4 ];

		if ( ampm == "" ){
			ampm = null
		}

		if ( hour < 0 || hour > 24 ){		//FixIn: 8.3.1.1
			return false; //("<?php _e('Hour must be between 1 and 12. (or 0 and 23 for military time)'); ?>");
		}
		if ( hour > 12 && ampm != null ){
			return false; //("<?php _e('You can not specify AM or PM for military time.'); ?>");
		}
		if ( minute < 0 || minute > 59 ){
			return false; //("<?php _e('Minute must be between 0 and 59.'); ?>");
		}
		return true;
	};
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/js/wpbc_time-selector.js?ver=10.0 
//FixIn: 8.7.11.10
(function ( $ ){

	$.fn.extend( {

		wpbc_timeselector: function (){

			var times_options = [];

			this.each( function (){

				var el = $( this );

				// On new days click we are searching for old time items,  and remove them from this booking form
				if ( el.parent().find( '.wpbc_times_selector' ).length ) {
					el.parent().find( '.wpbc_times_selector' ).remove();
				}

				el.find( 'option' ).each( function ( ind ){

					times_options.push( {
										  title   : jQuery( this ).text()
										, value   : jQuery( this ).val()
										, disabled: jQuery( this ).is( ':disabled' )
										, selected: jQuery( this ).is( ':selected' )
										} );

				} );

				var times_options_html = $.fn.wpbc_timeselector.format( times_options );

				el.after( times_options_html );

				el.next('.wpbc_times_selector').find('div').not('.wpbc_time_picker_disabled').on( "click", function() {

					// Get data value of clicked DIV time-slot
					var selected_value = jQuery( this ).attr( 'data-value' );

					// Remove previos selected class
					jQuery( this ).parent( '.wpbc_times_selector' ).find( '.wpbc_time_selected' ).removeClass( 'wpbc_time_selected' );
					// Set  time item with  selected Class
					jQuery( this ).addClass('wpbc_time_selected');

					el.find( 'option' ).prop( 'selected', false );
					// Find option in selectbox with this value
					el.find( 'option[value="' + selected_value + '"]' ).prop( 'selected', true );

					el.trigger( 'change' );
				});

				el.hide();

				times_options = [];
			} );

			return this;				// Chain
		}
	} );


	// Get HTML structure of times selection
	$.fn.wpbc_timeselector.format = function ( el_arr ) {

		var select_div = '';
		var css_class='';

		$.each( el_arr, function (index, el_item){

			if ( !el_item.disabled ){

				if (el_item.selected){
					css_class = 'wpbc_time_selected';
				} else {
					css_class = '';
				}

				select_div += '<div '
									+ ' data-value="' + el_item.value + '" '
									+ ' class="' + css_class + '" '
					         + '>'
									+ el_item.title
							 + '</div>'
			} else {
				// Uncomment row bellow to Show booked time slots as unavailable RED slots		//FixIn: 9.9.0.2
				// select_div += '<div class="wpbc_time_picker_disabled">' + el_item.title + '</div>';
			}

		} );

		if ( '' == select_div ){
			select_div = '<span class="wpbc_no_time_pickers">'
							+ 'No available times'
					   + '</span>'
		}
		return '<div class="wpbc_times_selector">' + select_div + '</div>';
	}


})( jQuery );



jQuery(document).ready(function(){

//	 setTimeout( function ( ) {					// Need to  have some delay  for loading of all  times in Garbage

			// Load after page loaded
			jQuery( 'select[name^="rangetime"]' ).wpbc_timeselector();
			jQuery( 'select[name^="starttime"]' ).wpbc_timeselector();
			jQuery( 'select[name^="endtime"]' ).wpbc_timeselector();
			jQuery( 'select[name^="durationtime"]' ).wpbc_timeselector();

			// This hook loading after each day selection																//FixIn: 8.7.11.9
			jQuery( ".booking_form_div" ).on( 'wpbc_hook_timeslots_disabled', function ( event, bk_type, all_dates ){
				jQuery( '#booking_form_div' + bk_type + ' select[name^="rangetime"]' ).wpbc_timeselector();
				jQuery( '#booking_form_div' + bk_type + ' select[name^="starttime"]' ).wpbc_timeselector();
				jQuery( '#booking_form_div' + bk_type + ' select[name^="endtime"]' ).wpbc_timeselector();
				jQuery( '#booking_form_div' + bk_type + ' select[name^="durationtime"]' ).wpbc_timeselector();
			} );

//	}, 1000 );

});
// source --> https://www.hwanil.ms.kr/wp-content/plugins/booking/core/timeline/v2/_out/timeline_v2.js?ver=10.0 
"use strict";

function wpbc_flextimeline_nav(timeline_obj, nav_step) {
  jQuery(".wpbc_timeline_front_end").trigger("timeline_nav", [timeline_obj, nav_step]); //FixIn:7.0.1.48
  // jQuery( '#'+timeline_obj.html_client_id + ' .wpbc_tl_prev,#'+timeline_obj.html_client_id + ' .wpbc_tl_next').remove();
  // jQuery('#'+timeline_obj.html_client_id + ' .wpbc_tl_title').html( '<span class="glyphicon glyphicon-refresh wpbc_spin"></span> &nbsp Loading...' );      // '<div style="height:20px;width:100%;text-align:center;margin:15px auto;">Loading ... <img style="vertical-align:middle;box-shadow:none;width:14px;" src="'+wpdev_bk_plugin_url+'/assets/img/ajax-loader.gif"><//div>'

  jQuery('#' + timeline_obj.html_client_id + ' .flex_tl_prev,#' + timeline_obj.html_client_id + ' .flex_tl_next').remove();
  jQuery('#' + timeline_obj.html_client_id + ' .flex_tl_title').html('<span class="glyphicon glyphicon-refresh wpbc_spin"></span> &nbsp Loading...'); // '<div style="height:20px;width:100%;text-align:center;margin:15px auto;">Loading ... <img style="vertical-align:middle;box-shadow:none;width:14px;" src="'+wpdev_bk_plugin_url+'/assets/img/ajax-loader.gif"><//div>'
  //Deprecated: FixIn: 9.0.1.1.1
  // if ( 'function' === typeof( jQuery(".popover_click.popover_bottom" ).popover )  )       //FixIn: 7.0.1.2  - 2016-12-10
  //     jQuery('.popover_click.popover_bottom').popover( 'hide' );                      //Hide all opned popovers

  jQuery.ajax({
    url: wpbc_ajaxurl,
    type: 'POST',
    success: function success(data, textStatus) {
      // Note,  here we direct show HTML to TimeLine frame
      if (textStatus == 'success') {
        jQuery('#' + timeline_obj.html_client_id + ' .wpbc_timeline_ajax_replace').html(data);
        return true;
      }
    },
    error: function error(XMLHttpRequest, textStatus, errorThrown) {
      window.status = 'Ajax Error! Status: ' + textStatus;
      alert('Ajax Error! Status: ' + XMLHttpRequest.status + ' ' + XMLHttpRequest.statusText);
    },
    // beforeSend: someFunction,
    data: {
      action: 'WPBC_FLEXTIMELINE_NAV',
      timeline_obj: timeline_obj,
      nav_step: nav_step,
      wpdev_active_locale: wpbc_active_locale,
      wpbc_nonce: document.getElementById('wpbc_nonce_' + timeline_obj.html_client_id).value
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvcmUvdGltZWxpbmUvdjIvX3NyYy90aW1lbGluZV92Mi5qcyJdLCJuYW1lcyI6WyJ3cGJjX2ZsZXh0aW1lbGluZV9uYXYiLCJ0aW1lbGluZV9vYmoiLCJuYXZfc3RlcCIsImpRdWVyeSIsInRyaWdnZXIiLCJodG1sX2NsaWVudF9pZCIsInJlbW92ZSIsImh0bWwiLCJhamF4IiwidXJsIiwid3BiY19hamF4dXJsIiwidHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwidGV4dFN0YXR1cyIsImVycm9yIiwiWE1MSHR0cFJlcXVlc3QiLCJlcnJvclRocm93biIsIndpbmRvdyIsInN0YXR1cyIsImFsZXJ0Iiwic3RhdHVzVGV4dCIsImFjdGlvbiIsIndwZGV2X2FjdGl2ZV9sb2NhbGUiLCJ3cGJjX2FjdGl2ZV9sb2NhbGUiLCJ3cGJjX25vbmNlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOztBQUNBLFNBQVNBLHFCQUFULENBQWdDQyxZQUFoQyxFQUE4Q0MsUUFBOUMsRUFBd0Q7QUFFcERDLEVBQUFBLE1BQU0sQ0FBRSwwQkFBRixDQUFOLENBQXFDQyxPQUFyQyxDQUE4QyxjQUE5QyxFQUErRCxDQUFFSCxZQUFGLEVBQWdCQyxRQUFoQixDQUEvRCxFQUZvRCxDQUVnRDtBQUVwRztBQUNBOztBQUVBQyxFQUFBQSxNQUFNLENBQUUsTUFBSUYsWUFBWSxDQUFDSSxjQUFqQixHQUFrQyxrQkFBbEMsR0FBcURKLFlBQVksQ0FBQ0ksY0FBbEUsR0FBbUYsZ0JBQXJGLENBQU4sQ0FBNkdDLE1BQTdHO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQyxNQUFJRixZQUFZLENBQUNJLGNBQWpCLEdBQWtDLGlCQUFuQyxDQUFOLENBQTRERSxJQUE1RCxDQUFrRSw4RUFBbEUsRUFSb0QsQ0FRcUc7QUFHN0o7QUFDQTtBQUNBOztBQUVJSixFQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBWTtBQUNSQyxJQUFBQSxHQUFHLEVBQUVDLFlBREc7QUFFUkMsSUFBQUEsSUFBSSxFQUFDLE1BRkc7QUFHUkMsSUFBQUEsT0FBTyxFQUFFLGlCQUFXQyxJQUFYLEVBQWlCQyxVQUFqQixFQUE2QjtBQUFrQztBQUM1RCxVQUFJQSxVQUFVLElBQUksU0FBbEIsRUFBNkI7QUFDekJYLFFBQUFBLE1BQU0sQ0FBQyxNQUFNRixZQUFZLENBQUNJLGNBQW5CLEdBQW9DLDhCQUFyQyxDQUFOLENBQTRFRSxJQUE1RSxDQUFrRk0sSUFBbEY7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNKLEtBUkQ7QUFTUkUsSUFBQUEsS0FBSyxFQUFHLGVBQVdDLGNBQVgsRUFBMkJGLFVBQTNCLEVBQXVDRyxXQUF2QyxFQUFtRDtBQUMvQ0MsTUFBQUEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLHlCQUF5QkwsVUFBekM7QUFDQU0sTUFBQUEsS0FBSyxDQUFFLHlCQUF5QkosY0FBYyxDQUFDRyxNQUF4QyxHQUFpRCxHQUFqRCxHQUF1REgsY0FBYyxDQUFDSyxVQUF4RSxDQUFMO0FBQ0gsS0FaRDtBQWFSO0FBQ0FSLElBQUFBLElBQUksRUFBQztBQUNHUyxNQUFBQSxNQUFNLEVBQWMsdUJBRHZCO0FBRUdyQixNQUFBQSxZQUFZLEVBQVFBLFlBRnZCO0FBR0dDLE1BQUFBLFFBQVEsRUFBWUEsUUFIdkI7QUFJR3FCLE1BQUFBLG1CQUFtQixFQUFDQyxrQkFKdkI7QUFLR0MsTUFBQUEsVUFBVSxFQUFVQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQWUxQixZQUFZLENBQUNJLGNBQXBELEVBQW9FdUI7QUFMM0Y7QUFkRyxHQUFaO0FBc0JIIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmZ1bmN0aW9uIHdwYmNfZmxleHRpbWVsaW5lX25hdiggdGltZWxpbmVfb2JqLCBuYXZfc3RlcCApe1xyXG5cclxuICAgIGpRdWVyeSggXCIud3BiY190aW1lbGluZV9mcm9udF9lbmRcIiApLnRyaWdnZXIoIFwidGltZWxpbmVfbmF2XCIgLCBbIHRpbWVsaW5lX29iaiwgbmF2X3N0ZXAgXSApOyAgICAgICAgLy9GaXhJbjo3LjAuMS40OFxyXG5cclxuICAgIC8vIGpRdWVyeSggJyMnK3RpbWVsaW5lX29iai5odG1sX2NsaWVudF9pZCArICcgLndwYmNfdGxfcHJldiwjJyt0aW1lbGluZV9vYmouaHRtbF9jbGllbnRfaWQgKyAnIC53cGJjX3RsX25leHQnKS5yZW1vdmUoKTtcclxuICAgIC8vIGpRdWVyeSgnIycrdGltZWxpbmVfb2JqLmh0bWxfY2xpZW50X2lkICsgJyAud3BiY190bF90aXRsZScpLmh0bWwoICc8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tcmVmcmVzaCB3cGJjX3NwaW5cIj48L3NwYW4+ICZuYnNwIExvYWRpbmcuLi4nICk7ICAgICAgLy8gJzxkaXYgc3R5bGU9XCJoZWlnaHQ6MjBweDt3aWR0aDoxMDAlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbjoxNXB4IGF1dG87XCI+TG9hZGluZyAuLi4gPGltZyBzdHlsZT1cInZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3gtc2hhZG93Om5vbmU7d2lkdGg6MTRweDtcIiBzcmM9XCInK3dwZGV2X2JrX3BsdWdpbl91cmwrJy9hc3NldHMvaW1nL2FqYXgtbG9hZGVyLmdpZlwiPjwvL2Rpdj4nXHJcblxyXG4gICAgalF1ZXJ5KCAnIycrdGltZWxpbmVfb2JqLmh0bWxfY2xpZW50X2lkICsgJyAuZmxleF90bF9wcmV2LCMnK3RpbWVsaW5lX29iai5odG1sX2NsaWVudF9pZCArICcgLmZsZXhfdGxfbmV4dCcpLnJlbW92ZSgpO1xyXG4gICAgalF1ZXJ5KCcjJyt0aW1lbGluZV9vYmouaHRtbF9jbGllbnRfaWQgKyAnIC5mbGV4X3RsX3RpdGxlJykuaHRtbCggJzxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHdwYmNfc3BpblwiPjwvc3Bhbj4gJm5ic3AgTG9hZGluZy4uLicgKTsgICAgICAvLyAnPGRpdiBzdHlsZT1cImhlaWdodDoyMHB4O3dpZHRoOjEwMCU7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luOjE1cHggYXV0bztcIj5Mb2FkaW5nIC4uLiA8aW1nIHN0eWxlPVwidmVydGljYWwtYWxpZ246bWlkZGxlO2JveC1zaGFkb3c6bm9uZTt3aWR0aDoxNHB4O1wiIHNyYz1cIicrd3BkZXZfYmtfcGx1Z2luX3VybCsnL2Fzc2V0cy9pbWcvYWpheC1sb2FkZXIuZ2lmXCI+PC8vZGl2PidcclxuXHJcblxyXG4vL0RlcHJlY2F0ZWQ6IEZpeEluOiA5LjAuMS4xLjFcclxuLy8gaWYgKCAnZnVuY3Rpb24nID09PSB0eXBlb2YoIGpRdWVyeShcIi5wb3BvdmVyX2NsaWNrLnBvcG92ZXJfYm90dG9tXCIgKS5wb3BvdmVyICkgICkgICAgICAgLy9GaXhJbjogNy4wLjEuMiAgLSAyMDE2LTEyLTEwXHJcbi8vICAgICBqUXVlcnkoJy5wb3BvdmVyX2NsaWNrLnBvcG92ZXJfYm90dG9tJykucG9wb3ZlciggJ2hpZGUnICk7ICAgICAgICAgICAgICAgICAgICAgIC8vSGlkZSBhbGwgb3BuZWQgcG9wb3ZlcnNcclxuXHJcbiAgICBqUXVlcnkuYWpheCh7XHJcbiAgICAgICAgdXJsOiB3cGJjX2FqYXh1cmwsXHJcbiAgICAgICAgdHlwZTonUE9TVCcsXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKCBkYXRhLCB0ZXh0U3RhdHVzICl7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZSwgIGhlcmUgd2UgZGlyZWN0IHNob3cgSFRNTCB0byBUaW1lTGluZSBmcmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0ZXh0U3RhdHVzID09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoJyMnICsgdGltZWxpbmVfb2JqLmh0bWxfY2xpZW50X2lkICsgJyAud3BiY190aW1lbGluZV9hamF4X3JlcGxhY2UnICkuaHRtbCggZGF0YSApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAgZnVuY3Rpb24gKCBYTUxIdHRwUmVxdWVzdCwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zdGF0dXMgPSAnQWpheCBFcnJvciEgU3RhdHVzOiAnICsgdGV4dFN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICBhbGVydCggJ0FqYXggRXJyb3IhIFN0YXR1czogJyArIFhNTEh0dHBSZXF1ZXN0LnN0YXR1cyArICcgJyArIFhNTEh0dHBSZXF1ZXN0LnN0YXR1c1RleHQgKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gYmVmb3JlU2VuZDogc29tZUZ1bmN0aW9uLFxyXG4gICAgICAgIGRhdGE6e1xyXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAgICAgICAgICAgICAnV1BCQ19GTEVYVElNRUxJTkVfTkFWJyxcclxuICAgICAgICAgICAgICAgIHRpbWVsaW5lX29iajogICAgICAgdGltZWxpbmVfb2JqLFxyXG4gICAgICAgICAgICAgICAgbmF2X3N0ZXA6ICAgICAgICAgICBuYXZfc3RlcCxcclxuICAgICAgICAgICAgICAgIHdwZGV2X2FjdGl2ZV9sb2NhbGU6d3BiY19hY3RpdmVfbG9jYWxlLFxyXG4gICAgICAgICAgICAgICAgd3BiY19ub25jZTogICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3BiY19ub25jZV8nKyB0aW1lbGluZV9vYmouaHRtbF9jbGllbnRfaWQpLnZhbHVlXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbiJdLCJmaWxlIjoiY29yZS90aW1lbGluZS92Mi9fb3V0L3RpbWVsaW5lX3YyLmpzIn0=;