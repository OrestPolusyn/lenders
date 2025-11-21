<?php

/**
 * ACF Fields for Accessibility Page
 */

if (!function_exists('acf_add_local_field_group')) {
  return;
}

acf_add_local_field_group(array(
  'key' => 'group_accessibility_page',
  'title' => 'Accessibility Page Settings',
  'fields' => array(

    // Main Content
    array(
      'key' => 'tab_accessibility_content',
      'label' => 'Main Content',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_accessibility_commitment_title',
      'label' => 'Commitment Title',
      'name' => 'accessibility_commitment_title',
      'type' => 'text',
      'default_value' => 'Our Commitment to Accessibility',
    ),
    array(
      'key' => 'field_accessibility_commitment_text',
      'label' => 'Commitment Text',
      'name' => 'accessibility_commitment_text',
      'type' => 'textarea',
      'rows' => 3,
      'default_value' => 'The Lenders is committed to ensuring digital accessibility for people with disabilities...',
    ),
    array(
      'key' => 'field_accessibility_conformance_title',
      'label' => 'Conformance Title',
      'name' => 'accessibility_conformance_title',
      'type' => 'text',
      'default_value' => 'Conformance Status',
    ),
    array(
      'key' => 'field_accessibility_conformance_text',
      'label' => 'Conformance Text',
      'name' => 'accessibility_conformance_text',
      'type' => 'textarea',
      'rows' => 3,
      'default_value' => 'We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA...',
    ),

    // Features Section
    array(
      'key' => 'tab_accessibility_features',
      'label' => 'Features',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_accessibility_features_title',
      'label' => 'Features Title',
      'name' => 'accessibility_features_title',
      'type' => 'text',
      'default_value' => 'Accessibility Features',
    ),
    array(
      'key' => 'field_accessibility_features_intro',
      'label' => 'Features Intro',
      'name' => 'accessibility_features_intro',
      'type' => 'text',
      'default_value' => 'Our website includes the following accessibility features:',
    ),
    array(
      'key' => 'field_accessibility_features_list',
      'label' => 'Features List',
      'name' => 'accessibility_features_list',
      'type' => 'repeater',
      'layout' => 'table',
      'button_label' => 'Add Feature',
      'min' => 0,
      'max' => 15,
      'sub_fields' => array(
        array(
          'key' => 'field_accessibility_feature_text',
          'label' => 'Feature',
          'name' => 'text',
          'type' => 'text',
          'required' => 1,
        ),
      ),
    ),

    // Limitations Section
    array(
      'key' => 'tab_accessibility_limitations',
      'label' => 'Limitations',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_accessibility_limitations_title',
      'label' => 'Limitations Title',
      'name' => 'accessibility_limitations_title',
      'type' => 'text',
      'default_value' => 'Known Limitations',
    ),
    array(
      'key' => 'field_accessibility_limitations_text',
      'label' => 'Limitations Text',
      'name' => 'accessibility_limitations_text',
      'type' => 'textarea',
      'rows' => 2,
      'default_value' => 'Despite our best efforts to ensure accessibility...',
    ),
    array(
      'key' => 'field_accessibility_thirdparty_title',
      'label' => 'Third-Party Title',
      'name' => 'accessibility_thirdparty_title',
      'type' => 'text',
      'default_value' => 'Third-Party Content',
    ),
    array(
      'key' => 'field_accessibility_thirdparty_text',
      'label' => 'Third-Party Text',
      'name' => 'accessibility_thirdparty_text',
      'type' => 'textarea',
      'rows' => 2,
      'default_value' => 'Some pages on our website may contain content provided by third parties...',
    ),

    // Feedback Section
    array(
      'key' => 'tab_accessibility_feedback',
      'label' => 'Feedback',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_accessibility_feedback_title',
      'label' => 'Feedback Title',
      'name' => 'accessibility_feedback_title',
      'type' => 'text',
      'default_value' => 'Feedback',
    ),
    array(
      'key' => 'field_accessibility_feedback_intro',
      'label' => 'Feedback Intro',
      'name' => 'accessibility_feedback_intro',
      'type' => 'textarea',
      'rows' => 2,
      'default_value' => 'We welcome your feedback on the accessibility of The Lenders website...',
    ),
    array(
      'key' => 'field_accessibility_feedback_email',
      'label' => 'Feedback Email',
      'name' => 'accessibility_feedback_email',
      'type' => 'email',
      'default_value' => 'accessibility@thelenders.com',
    ),
    array(
      'key' => 'field_accessibility_feedback_phone',
      'label' => 'Feedback Phone',
      'name' => 'accessibility_feedback_phone',
      'type' => 'text',
      'default_value' => '1-800-123-4567',
    ),
    array(
      'key' => 'field_accessibility_feedback_response',
      'label' => 'Response Time Text',
      'name' => 'accessibility_feedback_response',
      'type' => 'textarea',
      'rows' => 2,
      'default_value' => 'We aim to respond to accessibility feedback within 5 business days...',
    ),

    // Technical Section
    array(
      'key' => 'tab_accessibility_technical',
      'label' => 'Technical',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_accessibility_technical_title',
      'label' => 'Technical Title',
      'name' => 'accessibility_technical_title',
      'type' => 'text',
      'default_value' => 'Technical Specifications',
    ),
    array(
      'key' => 'field_accessibility_technical_intro',
      'label' => 'Technical Intro',
      'name' => 'accessibility_technical_intro',
      'type' => 'textarea',
      'rows' => 2,
      'default_value' => 'The accessibility of The Lenders website relies on the following technologies...',
    ),
    array(
      'key' => 'field_accessibility_technical_list',
      'label' => 'Technologies List',
      'name' => 'accessibility_technical_list',
      'type' => 'repeater',
      'layout' => 'table',
      'button_label' => 'Add Technology',
      'min' => 0,
      'max' => 10,
      'sub_fields' => array(
        array(
          'key' => 'field_accessibility_tech_text',
          'label' => 'Technology',
          'name' => 'text',
          'type' => 'text',
          'required' => 1,
        ),
      ),
    ),

    // Assessment Section
    array(
      'key' => 'tab_accessibility_assessment',
      'label' => 'Assessment',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_accessibility_assessment_title',
      'label' => 'Assessment Title',
      'name' => 'accessibility_assessment_title',
      'type' => 'text',
      'default_value' => 'Assessment and Testing',
    ),
    array(
      'key' => 'field_accessibility_assessment_intro',
      'label' => 'Assessment Intro',
      'name' => 'accessibility_assessment_intro',
      'type' => 'text',
      'default_value' => 'The Lenders assesses the accessibility of its website through:',
    ),
    array(
      'key' => 'field_accessibility_assessment_list',
      'label' => 'Assessment Methods',
      'name' => 'accessibility_assessment_list',
      'type' => 'repeater',
      'layout' => 'table',
      'button_label' => 'Add Method',
      'min' => 0,
      'max' => 10,
      'sub_fields' => array(
        array(
          'key' => 'field_accessibility_method_text',
          'label' => 'Method',
          'name' => 'text',
          'type' => 'text',
          'required' => 1,
        ),
      ),
    ),

    // Date Section
    array(
      'key' => 'tab_accessibility_date',
      'label' => 'Date & Note',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_accessibility_date_title',
      'label' => 'Date Title',
      'name' => 'accessibility_date_title',
      'type' => 'text',
      'default_value' => 'Date',
    ),
    array(
      'key' => 'field_accessibility_last_updated',
      'label' => 'Last Updated Date',
      'name' => 'accessibility_last_updated',
      'type' => 'date_picker',
      'display_format' => 'F j, Y',
      'return_format' => 'F j, Y',
    ),
    array(
      'key' => 'field_accessibility_note_text',
      'label' => 'Note Text',
      'name' => 'accessibility_note_text',
      'type' => 'textarea',
      'rows' => 2,
      'default_value' => 'We are continuously working to improve the accessibility of our website...',
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
        'value' => get_page_by_path('accessibility')->ID ?? 0,
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'normal',
  'style' => 'default',
  'active' => true,
));
