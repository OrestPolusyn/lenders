<?php

/**
 * Contact Page ACF Fields
 */

if (!function_exists('acf_add_local_field_group')) {
  return;
}

acf_add_local_field_group(array(
  'key' => 'group_contact_page',
  'title' => 'Contact Page Settings',
  'fields' => array(
    // Header Section
    array(
      'key' => 'tab_contact_header',
      'label' => 'Header Section',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_contact_slogan',
      'label' => 'Slogan',
      'name' => 'contact_slogan',
      'type' => 'text',
      'default_value' => 'get in touch',
      'required' => 1,
    ),
    array(
      'key' => 'field_contact_title',
      'label' => 'Main Title',
      'name' => 'contact_title',
      'type' => 'text',
      'default_value' => 'Apply Now & Get Started',
      'required' => 1,
    ),
    array(
      'key' => 'field_contact_subtitle',
      'label' => 'Subtitle',
      'name' => 'contact_subtitle',
      'type' => 'textarea',
      'rows' => 3,
      'default_value' => 'Take the first step towards your dream home. Fill out the form below and our team will reach out to you within 24 hours.',
      'required' => 1,
    ),

    // Form Section
    array(
      'key' => 'tab_contact_form',
      'label' => 'Form Section',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_contact_form_title',
      'label' => 'Form Title',
      'name' => 'contact_form_title',
      'type' => 'text',
      'default_value' => 'Contact Information',
    ),
    array(
      'key' => 'field_contact_form_subtitle',
      'label' => 'Form Subtitle',
      'name' => 'contact_form_subtitle',
      'type' => 'text',
      'default_value' => 'Fill out the form and we\'ll be in touch soon.',
    ),
    array(
      'key' => 'field_contact_form_button',
      'label' => 'Submit Button Text',
      'name' => 'contact_form_button',
      'type' => 'text',
      'default_value' => 'Submit Application',
    ),
    array(
      'key' => 'field_contact_form_note',
      'label' => 'Form Note',
      'name' => 'contact_form_note',
      'type' => 'text',
      'default_value' => 'Text us to schedule an appointment.',
    ),

    // Contact Info Tab
    array(
      'key' => 'tab_contact_info',
      'label' => 'Contact Information',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_contact_phone',
      'label' => 'Phone Number',
      'name' => 'contact_phone',
      'type' => 'text',
      'default_value' => '1-800-123-4567',
      'required' => 1,
    ),
    array(
      'key' => 'field_contact_phone_formatted',
      'label' => 'Phone (Formatted)',
      'name' => 'contact_phone_formatted',
      'type' => 'text',
      'default_value' => '(800) 123-4567',
      'instructions' => 'Formatted version for display',
    ),
    array(
      'key' => 'field_contact_email',
      'label' => 'Email Address',
      'name' => 'contact_email',
      'type' => 'email',
      'default_value' => 'info@thelenders.com',
      'required' => 1,
    ),
    array(
      'key' => 'field_contact_address_street',
      'label' => 'Street Address',
      'name' => 'contact_address_street',
      'type' => 'text',
      'default_value' => '123 Main Street',
      'required' => 1,
    ),
    array(
      'key' => 'field_contact_address_city',
      'label' => 'City',
      'name' => 'contact_address_city',
      'type' => 'text',
      'default_value' => 'New York',
      'required' => 1,
    ),
    array(
      'key' => 'field_contact_address_state',
      'label' => 'State',
      'name' => 'contact_address_state',
      'type' => 'text',
      'default_value' => 'NY',
      'required' => 1,
    ),
    array(
      'key' => 'field_contact_address_zip',
      'label' => 'ZIP Code',
      'name' => 'contact_address_zip',
      'type' => 'text',
      'default_value' => '10001',
      'required' => 1,
    ),
    array(
      'key' => 'field_contact_address_full',
      'label' => 'Full Address (for Map)',
      'name' => 'contact_address_full',
      'type' => 'textarea',
      'rows' => 2,
      'default_value' => '123 Main Street, New York, NY 10001',
      'instructions' => 'Complete address for Google Maps link',
    ),

    // Business Hours
    array(
      'key' => 'tab_contact_hours',
      'label' => 'Business Hours',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_contact_hours_weekdays',
      'label' => 'Weekdays',
      'name' => 'contact_hours_weekdays',
      'type' => 'text',
      'default_value' => 'Monday - Friday',
    ),
    array(
      'key' => 'field_contact_hours_time',
      'label' => 'Hours',
      'name' => 'contact_hours_time',
      'type' => 'text',
      'default_value' => '9:00 AM - 6:00 PM',
    ),

    // Card Texts
    array(
      'key' => 'tab_contact_cards',
      'label' => 'Contact Cards',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_contact_card_phone_title',
      'label' => 'Phone Card Title',
      'name' => 'contact_card_phone_title',
      'type' => 'text',
      'default_value' => 'Call Us',
    ),
    array(
      'key' => 'field_contact_card_email_title',
      'label' => 'Email Card Title',
      'name' => 'contact_card_email_title',
      'type' => 'text',
      'default_value' => 'Email Us',
    ),
    array(
      'key' => 'field_contact_card_email_subtitle',
      'label' => 'Email Card Subtitle',
      'name' => 'contact_card_email_subtitle',
      'type' => 'text',
      'default_value' => 'We\'ll respond within 24 hours',
    ),
    array(
      'key' => 'field_contact_card_visit_title',
      'label' => 'Visit Card Title',
      'name' => 'contact_card_visit_title',
      'type' => 'text',
      'default_value' => 'Visit Us',
    ),

    // Map
    array(
      'key' => 'tab_contact_map',
      'label' => 'Map Settings',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_contact_maps_url',
      'label' => 'Google Maps URL',
      'name' => 'contact_maps_url',
      'type' => 'url',
      'instructions' => 'Link to your location on Google Maps',
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'page_template',
        'operator' => '==',
        'value' => 'default',
      ),
      array(
        'param' => 'page',
        'operator' => '==',
        'value' => get_page_by_path('contact')->ID ?? 0,
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'normal',
  'style' => 'default',
  'label_placement' => 'top',
  'active' => true,
  'show_in_rest' => 1,
));
