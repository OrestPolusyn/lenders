<?php

/**
 * Global Theme Options ACF Fields
 * 
 * Доступні на всіх сторінках через options page
 */

if (!function_exists('acf_add_local_field_group')) {
  return;
}

// Create Options Page
if (function_exists('acf_add_options_page')) {
  acf_add_options_page(array(
    'page_title' => 'Theme General Settings',
    'menu_title' => 'Theme Settings',
    'menu_slug' => 'theme-general-settings',
    'capability' => 'edit_posts',
    'redirect' => false,
    'icon_url' => 'dashicons-admin-settings',
  ));
}

acf_add_local_field_group(array(
  'key' => 'group_theme_options',
  'title' => 'Theme Options',
  'fields' => array(

    // Company Info
    array(
      'key' => 'tab_company_info',
      'label' => 'Company Info',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_site_url',
      'label' => 'Site URL',
      'name' => 'site_url',
      'type' => 'url',
      'default_value' => 'https://thelenders.com',
      'instructions' => 'Main website URL (used in emails and external links)',
    ),
    array(
      'key' => 'field_company_name',
      'label' => 'Company Name',
      'name' => 'company_name',
      'type' => 'text',
      'default_value' => 'The Lenders',
    ),
    array(
      'key' => 'field_company_phone',
      'label' => 'Phone Number',
      'name' => 'company_phone',
      'type' => 'text',
    ),
    array(
      'key' => 'field_company_email',
      'label' => 'Email',
      'name' => 'company_email',
      'type' => 'email',
    ),
    array(
      'key' => 'field_company_address',
      'label' => 'Address',
      'name' => 'company_address',
      'type' => 'textarea',
      'rows' => 3,
    ),

    // Social Media
    array(
      'key' => 'tab_social_media',
      'label' => 'Social Media',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_social_facebook',
      'label' => 'Facebook URL',
      'name' => 'social_facebook',
      'type' => 'url',
    ),
    array(
      'key' => 'field_social_twitter',
      'label' => 'Twitter URL',
      'name' => 'social_twitter',
      'type' => 'url',
    ),
    array(
      'key' => 'field_social_linkedin',
      'label' => 'LinkedIn URL',
      'name' => 'social_linkedin',
      'type' => 'url',
    ),
    array(
      'key' => 'field_social_instagram',
      'label' => 'Instagram URL',
      'name' => 'social_instagram',
      'type' => 'url',
    ),

    // SEO
    array(
      'key' => 'tab_seo',
      'label' => 'SEO',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_seo_default_image',
      'label' => 'Default OG Image',
      'name' => 'seo_default_image',
      'type' => 'image',
      'return_format' => 'url',
    ),
    array(
      'key' => 'field_google_analytics',
      'label' => 'Google Analytics ID',
      'name' => 'google_analytics',
      'type' => 'text',
      'placeholder' => 'G-XXXXXXXXXX',
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'options_page',
        'operator' => '==',
        'value' => 'theme-general-settings',
      ),
    ),
  ),
  'show_in_rest' => 1,
));
