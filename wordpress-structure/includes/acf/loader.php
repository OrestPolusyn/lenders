<?php

/**
 * ACF Fields Loader
 * 
 * Завантажує всі ACF field groups з модульної структури
 */

if (!function_exists('acf_add_local_field_group')) {
  return;
}

// Pages ACF Fields
$page_files = [
  'home-page.php',
  'about-page.php',
  'contact-page.php',
  'faq-page.php',
  'glossary-page.php',
  'loan-programs-page.php',
];

foreach ($page_files as $file) {
  $filepath = get_template_directory() . '/includes/acf/pages/' . $file;
  if (file_exists($filepath)) {
    require_once $filepath;
  }
}

// Global ACF Fields
$global_files = [
  'header.php',
  'footer.php',
  'theme-options.php',
];

foreach ($global_files as $file) {
  $filepath = get_template_directory() . '/includes/acf/global/' . $file;
  if (file_exists($filepath)) {
    require_once $filepath;
  }
}
