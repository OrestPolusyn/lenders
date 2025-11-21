<?php

/**
 * FAQ Page ACF Fields
 */

if (!function_exists('acf_add_local_field_group')) {
  return;
}

acf_add_local_field_group(array(
  'key' => 'group_faq_page',
  'title' => 'FAQ Page Settings',
  'fields' => array(
    array(
      'key' => 'field_faq_section_title',
      'label' => 'Section Title',
      'name' => 'faq_section_title',
      'type' => 'text',
      'default_value' => 'Your top questions about home loans, answered',
      'required' => 1,
      'instructions' => 'Main heading for the FAQ section',
    ),
    array(
      'key' => 'field_faq_items',
      'label' => 'FAQ Items',
      'name' => 'faq_items',
      'type' => 'repeater',
      'layout' => 'block',
      'button_label' => 'Add FAQ',
      'min' => 1,
      'sub_fields' => array(
        array(
          'key' => 'field_faq_question',
          'label' => 'Question',
          'name' => 'question',
          'type' => 'text',
          'required' => 1,
          'placeholder' => 'What is a mortgage?',
          'wrapper' => array(
            'width' => '100',
          ),
        ),
        array(
          'key' => 'field_faq_answer',
          'label' => 'Answer',
          'name' => 'answer',
          'type' => 'wysiwyg',
          'required' => 1,
          'tabs' => 'all',
          'toolbar' => 'full',
          'media_upload' => 0,
          'delay' => 0,
          'wrapper' => array(
            'width' => '100',
          ),
        ),
        array(
          'key' => 'field_faq_category',
          'label' => 'Category',
          'name' => 'category',
          'type' => 'text',
          'default_value' => 'General',
          'placeholder' => 'General, Mortgage Basics, Credit, etc.',
          'wrapper' => array(
            'width' => '50',
          ),
        ),
        array(
          'key' => 'field_faq_featured',
          'label' => 'Featured',
          'name' => 'featured',
          'type' => 'true_false',
          'default_value' => 0,
          'ui' => 1,
          'instructions' => 'Mark as important FAQ',
          'wrapper' => array(
            'width' => '50',
          ),
        ),
      ),
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
        'value' => get_page_by_path('faq')->ID ?? 0,
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
