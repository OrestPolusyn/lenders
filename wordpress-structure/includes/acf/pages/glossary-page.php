<?php

/**
 * Glossary Page ACF Fields
 */

if (!function_exists('acf_add_local_field_group')) {
  return;
}

acf_add_local_field_group(array(
  'key' => 'group_glossary_page',
  'title' => 'Glossary Page Settings',
  'fields' => array(
    array(
      'key' => 'field_glossary_section_title',
      'label' => 'Section Title',
      'name' => 'glossary_section_title',
      'type' => 'text',
      'default_value' => 'Mortgage terms explained',
      'required' => 1,
    ),
    array(
      'key' => 'field_glossary_section_subtitle',
      'label' => 'Section Subtitle',
      'name' => 'glossary_section_subtitle',
      'type' => 'text',
      'default_value' => 'Please click on the letter below to skip to the definition of the word you are looking for.',
      'required' => 1,
    ),
    array(
      'key' => 'field_glossary_terms',
      'label' => 'Glossary Terms',
      'name' => 'glossary_terms',
      'type' => 'repeater',
      'layout' => 'block',
      'button_label' => 'Add Term',
      'min' => 1,
      'sub_fields' => array(
        array(
          'key' => 'field_glossary_term',
          'label' => 'Term',
          'name' => 'term',
          'type' => 'text',
          'required' => 1,
          'placeholder' => 'e.g., Mortgage',
          'wrapper' => array(
            'width' => '50',
          ),
        ),
        array(
          'key' => 'field_glossary_letter',
          'label' => 'Letter',
          'name' => 'letter',
          'type' => 'text',
          'required' => 1,
          'maxlength' => 1,
          'placeholder' => 'A-Z',
          'instructions' => 'First letter of the term (for alphabetical navigation)',
          'wrapper' => array(
            'width' => '50',
          ),
        ),
        array(
          'key' => 'field_glossary_definition',
          'label' => 'Definition',
          'name' => 'definition',
          'type' => 'wysiwyg',
          'required' => 1,
          'tabs' => 'all',
          'toolbar' => 'basic',
          'media_upload' => 0,
          'delay' => 0,
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
        'value' => get_page_by_path('glossary')->ID ?? 0,
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
