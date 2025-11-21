<?php

/**
 * WordPress REST API Configuration
 * 
 * CORS, ACF в REST API, custom endpoints
 */

// ============================================
// Enable CORS for Astro
// ============================================
function lenders_enable_cors()
{
  $origin = get_http_origin();
  $allowed_origins = array(
    'http://localhost:4321',
    'http://localhost:3000',
    'https://leanders.markupers.com.ua',
    'https://www.leanders.markupers.com.ua',
  );

  if (in_array($origin, $allowed_origins)) {
    header("Access-Control-Allow-Origin: $origin");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");
  }
}
add_action('rest_api_init', 'lenders_enable_cors');

// ============================================
// Expose ACF Fields in REST API
// ============================================
function lenders_register_acf_to_rest()
{
  // Для сторінок
  register_rest_field('page', 'acf', array(
    'get_callback' => function ($object) {
      return get_fields($object['id']);
    },
    'schema' => null,
  ));

  // Для постів
  register_rest_field('post', 'acf', array(
    'get_callback' => function ($object) {
      return get_fields($object['id']);
    },
    'schema' => null,
  ));

  // Для FAQ
  register_rest_field('faq', 'acf', array(
    'get_callback' => function ($object) {
      return get_fields($object['id']);
    },
    'schema' => null,
  ));

  // Для Loan Programs
  register_rest_field('loan_programs', 'acf', array(
    'get_callback' => function ($object) {
      return get_fields($object['id']);
    },
    'schema' => null,
  ));
}
add_action('rest_api_init', 'lenders_register_acf_to_rest');

// ============================================
// Custom REST Endpoint for Theme Options
// ============================================
function lenders_register_theme_options_endpoint()
{
  register_rest_route('lenders/v1', '/theme-options', array(
    'methods' => 'GET',
    'callback' => function () {
      return array(
        'site_url' => get_field('site_url', 'option'),
        'company_name' => get_field('company_name', 'option'),
        'company_phone' => get_field('company_phone', 'option'),
        'company_email' => get_field('company_email', 'option'),
        'company_address' => get_field('company_address', 'option'),
        'social' => array(
          'facebook' => get_field('social_facebook', 'option'),
          'twitter' => get_field('social_twitter', 'option'),
          'linkedin' => get_field('social_linkedin', 'option'),
          'instagram' => get_field('social_instagram', 'option'),
        ),
      );
    },
    'permission_callback' => '__return_true',
  ));
}
add_action('rest_api_init', 'lenders_register_theme_options_endpoint');

/**
 * Register WordPress Menus REST API Endpoint
 */
function lenders_register_menus_endpoint()
{
  register_rest_route('lenders/v1', '/menu/(?P<location>[a-zA-Z0-9_-]+)', array(
    'methods' => 'GET',
    'callback' => 'lenders_get_menu_by_location',
    'permission_callback' => '__return_true',
  ));
}

function lenders_get_menu_by_location($request)
{
  $location = $request['location'];

  $locations = get_nav_menu_locations();
  if (!isset($locations[$location])) {
    return new WP_Error('no_menu', 'Menu not found for this location', array('status' => 404));
  }

  $menu = wp_get_nav_menu_object($locations[$location]);
  if (!$menu) {
    return new WP_Error('no_menu', 'Menu not found', array('status' => 404));
  }

  $menu_items = wp_get_nav_menu_items($menu->term_id);
  if (!$menu_items) {
    return array();
  }

  // Build hierarchical menu structure
  $menu_tree = array();
  $menu_map = array();

  foreach ($menu_items as $item) {
    $menu_map[$item->ID] = array(
      'id' => $item->ID,
      'title' => $item->title,
      'url' => $item->url,
      'target' => $item->target,
      'classes' => implode(' ', $item->classes),
      'parent' => $item->menu_item_parent,
      'children' => array(),
    );
  }

  // Build tree
  foreach ($menu_map as $id => &$item) {
    if ($item['parent'] == 0) {
      $menu_tree[] = &$item;
    } else {
      if (isset($menu_map[$item['parent']])) {
        $menu_map[$item['parent']]['children'][] = &$item;
      }
    }
  }

  return $menu_tree;
}

add_action('rest_api_init', 'lenders_register_menus_endpoint');
