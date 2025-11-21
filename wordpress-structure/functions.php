<?php

/**
 * Theme Functions
 * 
 * Чистий functions.php - тільки include файлів
 */

// Prevent direct access
if (!defined('ABSPATH')) {
  exit;
}

// ============================================
// ACF Fields (Модульна структура)
// ============================================
require_once get_template_directory() . '/includes/acf/loader.php';

// ============================================
// WordPress REST API Configuration
// ============================================
require_once get_template_directory() . '/includes/rest-api-config.php';

// ============================================
// Helper Functions
// ============================================
// require_once get_template_directory() . '/includes/helpers.php';

// ============================================
// Theme Support
// ============================================
function lenders_theme_setup()
{
  // Add theme support
  add_theme_support('post-thumbnails');
  add_theme_support('title-tag');
  add_theme_support('custom-logo');

  // Register nav menus
  register_nav_menus(array(
    'primary' => __('Primary Menu', 'lenders'),
    'footer' => __('Footer Menu', 'lenders'),
  ));
}
add_action('after_setup_theme', 'lenders_theme_setup');
