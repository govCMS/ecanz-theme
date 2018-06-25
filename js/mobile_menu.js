/**
 * Mobile Menu.
 */
(function($, Drupal, window, document, undefined) {

  var $widget = null;
  var $button = null;
  var $nav_wrapper = null;
  var menu_toggle_enabled = false;

  function menu_bar_resize() {
    var w = window.innerWidth || document.documentElement.clientWidth;
    if ((w >= 980 ) && menu_toggle_enabled) {
      // Desktop.
      menu_toggle_enabled = false;
      $widget.removeClass('menu-toggle');
      $button.detach();
    }
    else if (( w < 981 ) && !menu_toggle_enabled) {
      // Mobile.
      menu_toggle_enabled = true;
      $widget.addClass('menu-toggle');
      $nav_wrapper.prepend($button);
    }
  }

  function toggle_menu(e) {
    if (menu_toggle_enabled) {
      var was_open = $widget.hasClass('menu-open');
      $widget.toggleClass('menu-open');
      if (was_open) {
        $widget.attr('aria-hidden', 'true');
        $button.removeClass('menu-open').attr('aria-expanded', 'false');
      }
      else {
        $widget.attr('aria-hidden', 'false');
        $button.addClass('menu-open').attr('aria-expanded', 'true');
      }
    }
    e.stopPropagation();
    return false;
  }

  Drupal.behaviors.stay_smart_2017_menu = {
    attach: function(context, settings) {
      $widget = $('#mobile-nav', context);
      if ($widget.length > 0) {
        $button = $('<button class="mobile-expand-menu" aria-controls="' + $widget.attr('id') + '" aria-expanded="false">Toggle menu navigation</button>');
        $nav_wrapper = $('#nav');
        $button.unbind('click', toggle_menu).bind('click', toggle_menu);
        $(window).unbind('resize', menu_bar_resize).bind('resize', menu_bar_resize);
        menu_bar_resize();

        // Adding Secondary nav to mobile menu.
        var $secondary_links = $($('.header__secondary-menu > ul.links', context).html());
        var $widget_list = $widget.children('ul');
        $widget_list.children('li:last-child').removeClass('last');
        $secondary_links.removeClass('first').removeClass('last');
        $widget_list.append($secondary_links);
        $widget_list.children('li:last-child').addClass('last');
      }
    }
  };

})(jQuery, Drupal, this, this.document);

