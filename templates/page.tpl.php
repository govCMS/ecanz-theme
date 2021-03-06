<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
      // Render the sidebars to see if there's anything in them.
      $sidebar_first  = render($page['sidebar_first']);
      $sidebar_second = render($page['sidebar_second']);
 
?>

<header class="header" id="header" role="banner">
  <div class="header__inner">

    <?php if ($secondary_menu): ?>
      <nav class="header__secondary-menu" id="secondary-menu" role="navigation">
        <?php print theme('links__system_secondary_menu', array(
          'links' => $secondary_menu,
          'attributes' => array(
            'class' => array(
              'links',
              'inlineLinks--bordered--double',
              'clearfix',
            ),
          ),
          'heading' => array(
            'text' => isset($secondary_menu_heading) ? $secondary_menu_heading : '',
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>

    <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /></a>
  <?php endif; ?>

  <?php print render($page['header']); ?>
  </div>
</header>

<div id="nav">
<?php print render($page['navigation']); ?>

<div class="search-nav-mobile">
              <a href="#">
                <img src="<?php print base_path().path_to_theme(); ?>/images/icon-search-white-bigger.png" class="showing" alt="Show the site search field">
                <img src="<?php print base_path().path_to_theme(); ?>/images/icon-search-close-cross.png" class="hiding" alt="Hide the site search field">
                <span class="button-text">Search</span>
              </a>
            </div>
</div>

<div id="page">

  <?php print render($page['highlighted']); ?>

  <?php print $breadcrumb; ?>

  <div id="main">

    <?php if ($sidebar_first): ?>
      <aside class="sidebars" role="complementary">
        <?php print $sidebar_first; ?>
      </aside>
    <?php endif; ?>

    <div id="content" class="column" role="main">

      <a href="#skip-link" id="skip-content" class="element-invisible">Go to top of page</a>

      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div>

    <?php if ($sidebar_second): ?>
      <aside class="sidebars" role="complementary">
        <?php print $sidebar_second; ?>
      </aside>
    <?php endif; ?>

  </div>

</div>

  <?php print render($page['footer']); ?>

<?php print render($page['bottom']); ?>
