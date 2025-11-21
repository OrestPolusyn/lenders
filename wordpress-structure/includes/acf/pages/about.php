<?php

/**
 * ACF Fields for About Page
 */

if (!function_exists('acf_add_local_field_group')) {
  return;
}

acf_add_local_field_group(array(
  'key' => 'group_about_page',
  'title' => 'About Page Settings',
  'fields' => array(

    // History Section
    array(
      'key' => 'tab_about_history',
      'label' => 'History Section',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_about_history_title',
      'label' => 'History Title',
      'name' => 'about_history_title',
      'type' => 'text',
      'default_value' => 'About our company',
      'required' => 1,
    ),
    array(
      'key' => 'field_about_history_content',
      'label' => 'History Content',
      'name' => 'about_history_content',
      'type' => 'wysiwyg',
      'tabs' => 'visual',
      'toolbar' => 'full',
      'media_upload' => 0,
      'default_value' => '<p>The Leanders was founded with a simple mission: to make the mortgage process transparent, accessible, and stress-free for every client.</p>',
    ),
    array(
      'key' => 'field_about_history_image',
      'label' => 'History Image',
      'name' => 'about_history_image',
      'type' => 'image',
      'return_format' => 'url',
      'preview_size' => 'medium',
    ),

    // Numbers Section
    array(
      'key' => 'tab_about_numbers',
      'label' => 'Numbers Section',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_about_numbers',
      'label' => 'Numbers',
      'name' => 'about_numbers',
      'type' => 'repeater',
      'layout' => 'table',
      'button_label' => 'Add Number',
      'min' => 0,
      'max' => 6,
      'sub_fields' => array(
        array(
          'key' => 'field_about_number_value',
          'label' => 'Value',
          'name' => 'value',
          'type' => 'text',
          'required' => 1,
          'placeholder' => '15k, 2B, 98%',
        ),
        array(
          'key' => 'field_about_number_label',
          'label' => 'Label',
          'name' => 'label',
          'type' => 'text',
          'required' => 1,
          'placeholder' => 'Years Experience',
        ),
      ),
    ),

    // Why Choose Section
    array(
      'key' => 'tab_about_choose',
      'label' => 'Why Choose Us',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_about_choose_slogan',
      'label' => 'Slogan',
      'name' => 'about_choose_slogan',
      'type' => 'text',
      'default_value' => 'our benefits',
    ),
    array(
      'key' => 'field_about_choose_title',
      'label' => 'Title',
      'name' => 'about_choose_title',
      'type' => 'text',
      'default_value' => 'Why Choose Us',
      'required' => 1,
    ),
    array(
      'key' => 'field_about_choose_description',
      'label' => 'Description',
      'name' => 'about_choose_description',
      'type' => 'textarea',
      'rows' => 3,
      'default_value' => 'We\'re more than a mortgage company — we\'re your financial partner.',
    ),
    array(
      'key' => 'field_about_choose_benefits',
      'label' => 'Benefits',
      'name' => 'about_choose_benefits',
      'type' => 'repeater',
      'layout' => 'table',
      'button_label' => 'Add Benefit',
      'min' => 0,
      'max' => 4,
      'sub_fields' => array(
        array(
          'key' => 'field_about_benefit_text',
          'label' => 'Benefit Text',
          'name' => 'text',
          'type' => 'text',
          'required' => 1,
        ),
        array(
          'key' => 'field_about_benefit_icon',
          'label' => 'Icon Type',
          'name' => 'icon',
          'type' => 'select',
          'choices' => array(
            'rates' => 'Lower Rates',
            'quick' => 'Quick & Easy',
          ),
          'default_value' => 'rates',
        ),
      ),
    ),

    // Values Section
    array(
      'key' => 'tab_about_values',
      'label' => 'Values Section',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_about_values_slogan',
      'label' => 'Slogan',
      'name' => 'about_values_slogan',
      'type' => 'text',
      'default_value' => 'Our Values',
    ),
    array(
      'key' => 'field_about_values_title',
      'label' => 'Title',
      'name' => 'about_values_title',
      'type' => 'text',
      'default_value' => 'What Drives Us Forward',
      'required' => 1,
    ),
    array(
      'key' => 'field_about_values_description',
      'label' => 'Description',
      'name' => 'about_values_description',
      'type' => 'textarea',
      'rows' => 2,
      'default_value' => 'Our core values guide everything we do.',
    ),
    array(
      'key' => 'field_about_values_list',
      'label' => 'Values List',
      'name' => 'about_values_list',
      'type' => 'repeater',
      'layout' => 'row',
      'button_label' => 'Add Value',
      'min' => 0,
      'max' => 8,
      'sub_fields' => array(
        array(
          'key' => 'field_about_value_title',
          'label' => 'Title',
          'name' => 'title',
          'type' => 'text',
          'required' => 1,
        ),
        array(
          'key' => 'field_about_value_text',
          'label' => 'Description',
          'name' => 'text',
          'type' => 'textarea',
          'rows' => 2,
          'required' => 1,
        ),
        array(
          'key' => 'field_about_value_icon',
          'label' => 'Icon',
          'name' => 'icon',
          'type' => 'select',
          'choices' => array(
            'trust' => 'Trust & Integrity',
            'client' => 'Client-Focused',
            'expert' => 'Expert Guidance',
            'excellence' => 'Excellence',
            'innovation' => 'Innovation',
            'community' => 'Community',
          ),
          'default_value' => 'trust',
        ),
      ),
    ),

    // CTA Section
    array(
      'key' => 'tab_about_cta',
      'label' => 'CTA Section',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_about_cta_enabled',
      'label' => 'Show CTA Section',
      'name' => 'about_cta_enabled',
      'type' => 'true_false',
      'default_value' => 1,
      'ui' => 1,
    ),

    // Team Members Section
    array(
      'key' => 'tab_about_team',
      'label' => 'Team Members',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_about_team_members',
      'label' => 'Team Members',
      'name' => 'about_team_members',
      'type' => 'repeater',
      'layout' => 'block',
      'button_label' => 'Add Team Member',
      'sub_fields' => array(
        array(
          'key' => 'field_team_member_name',
          'label' => 'Name',
          'name' => 'name',
          'type' => 'text',
        ),
        array(
          'key' => 'field_team_member_position',
          'label' => 'Position',
          'name' => 'position',
          'type' => 'text',
        ),
        array(
          'key' => 'field_team_member_photo',
          'label' => 'Photo',
          'name' => 'photo',
          'type' => 'image',
          'return_format' => 'url',
        ),
        array(
          'key' => 'field_team_member_bio',
          'label' => 'Bio',
          'name' => 'bio',
          'type' => 'textarea',
          'rows' => 4,
        ),
      ),
    ),
    array(
      'key' => 'field_about_timeline',
      'label' => 'Company Timeline',
      'name' => 'about_timeline',
      'type' => 'repeater',
      'layout' => 'table',
      'button_label' => 'Add Timeline Event',
      'sub_fields' => array(
        array(
          'key' => 'field_timeline_year',
          'label' => 'Year',
          'name' => 'year',
          'type' => 'number',
        ),
        array(
          'key' => 'field_timeline_event',
          'label' => 'Event',
          'name' => 'event',
          'type' => 'text',
        ),
      ),
    ),
  ),
  'location' => array(
    array(
      array(
        'param' => 'page',
        'operator' => '==',
        'value' => get_page_by_path('about')->ID ?? 0,
      ),
    ),
  ),
  'show_in_rest' => 1,
));
