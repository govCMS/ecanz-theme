/**
 * Header Search Field.
 */
(function($, Drupal, window, document, undefined) {
    
Drupal.behaviors.ecanz_search = {
  attach: function(context, settings) {
      
$('.search-nav-mobile a').click(function(){
        $(this).toggleClass('open-search');
        $('#block-block-1').toggleClass('open');
		 $('#block-block-1').slideToggle('#block-block-1');
    });
    
	}
};


  /**var $widget = null;
  var $button = null;
  var $nav_wrapper = null;
  var search_toggle_enabled = false;

  function search_bar_resize() {
    alert ('xxx');
    var w = window.innerWidth || document.documentElement.clientWidth;
    if ((w >= 980)  && search_toggle_enabled) {
      // Desktop.
      search_toggle_enabled = false;
      $widget.removeClass('search-toggle');
      $button.detach();
    }
    else if (( w < 981 ) && !search_toggle_enabled) {
      // Mobile.
      search_toggle_enabled = true;
      $widget.addClass('search-toggle');
      $nav_wrapper.prepend($button);
    }
  }

  function toggle_search(e) {
    if (search_toggle_enabled) {
      var was_open = $widget.hasClass('search-open');
      $widget.toggleClass('search-open');
      if (was_open) {
        $widget.attr('aria-hidden', 'true');
        $button.removeClass('search-open').attr('aria-expanded', 'false');
      }
      else {
        $widget.attr('aria-hidden', 'false');
        $button.addClass('search-open').attr('aria-expanded', 'true');
      }
    }
    e.stopPropagation();
    return false;
  }

  Drupal.behaviors.ecanz_search = {
    attach: function(context, settings) {
      $widget = $('#block-block-1', context);
      if ($widget.length > 0) {
        $button = '<button class="mobile-expand-search" aria-controls="' + $widget.attr('id') + '" aria-expanded="false">Toggle search form</button>';
        alert ($button);
        $nav_wrapper = $('#nav').html();
        alert ($nav_wrapper);
       $button.unbind('click', toggle_search).bind('click', toggle_search);
       $(window).unbind('resize', search_bar_resize).bind('resize', search_bar_resize);
        alert('yyyy');
        search_bar_resize();
      }
    }
  };**/

})(jQuery, Drupal, this, this.document);