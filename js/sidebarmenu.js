(function($, Drupal, window, document, undefined) {

      
    Drupal.behaviors.ecanz_side_menu = {
        attach: function(context, settings) {
       

            $('#block-menu-block-1 .menu-block-wrapper > ul > li.expanded').each(function(){
            
                var $list_item = $(this);
                var $sub_menu = $(this).children('ul.menu');
                $listnumber = $(this).index();
                $sub_menu.attr('id', 'sidebar-submenu-'+ $listnumber);
                
                  
        
                        $list_item.children('a').after('<button class="sidebar-toggle-menu menu-button" aria-controls="' + $sub_menu.attr('id') + '" title="Toggle Menu">Toggle sub menu</button>');
                        $sub_menu.addClass('menu-closed');
                    
                       
                               
            });
            
             $('.menu-button').click(function(){
                                    var $thisbutton = $(this).attr('aria-controls');
                                     $('#'+$thisbutton).toggleClass('menu-closed');
                                     $('#'+$thisbutton).toggleClass('menu-open');
                                });
            
            $('#block-menu-block-1 .menu-block-wrapper > ul > li.expanded > ul > li.expanded').each(function(){
            
                var $third_level = $(this).children('ul.menu');
                $thirdlevel_listnumber = $(this).index();
                $third_level.attr('id', 'sidebar-thirdlevel-'+ $thirdlevel_listnumber);
            
                $(this).children('a').after('<button class="sidebar-toggle-menu third-level-button" aria-controls="' + $third_level.attr('id') + '" title="Toggle Menu">Toggle sub menu</button>');
                $third_level.addClass('menu-closed');
                
                               
            
            });
            
             $('.third-level-button').click(function(){
                    var $thisbutton = $(this).attr('aria-controls');
                    $('#'+$thisbutton).toggleClass('menu-closed');
                    $('#'+$thisbutton).toggleClass('menu-open');
            });
        }
    
    };
})(jQuery, Drupal, this, this.document);