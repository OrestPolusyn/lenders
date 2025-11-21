<?php

/**
 * ACF Field Group: Loan Programs Page
 * 
 * Repeater with loan programs
 * All data on one page for JS interactivity
 */

if (function_exists('acf_add_local_field_group')) {
  acf_add_local_field_group(array(
    'key' => 'group_loan_programs_page',
    'title' => 'Loan Programs Page Settings',
    'fields' => array(
      // Page Title & Meta
      array(
        'key' => 'field_loan_page_title',
        'label' => 'Page Title',
        'name' => 'page_title',
        'type' => 'text',
        'default_value' => 'Mortgage Programs Designed for Every Homebuyer',
        'placeholder' => 'Main page title',
      ),
      array(
        'key' => 'field_loan_page_description',
        'label' => 'Page Description',
        'name' => 'page_description',
        'type' => 'textarea',
        'rows' => 3,
        'default_value' => 'At The Lenders, we offer a comprehensive suite of mortgage solutions built to match your goals, lifestyle, and financial path.',
      ),

      // Loan Programs Repeater
      array(
        'key' => 'field_loan_programs',
        'label' => 'Loan Programs',
        'name' => 'loan_programs',
        'type' => 'repeater',
        'layout' => 'block',
        'button_label' => 'Add Loan Program',
        'sub_fields' => array(
          // Basic Info
          array(
            'key' => 'field_loan_slug',
            'label' => 'Slug/Icon',
            'name' => 'slug',
            'type' => 'select',
            'required' => 1,
            'instructions' => 'Select icon for the program. Used for CSS classes and URL parameters.',
            'choices' => array(
              'conventional' => 'Conventional',
              'fha' => 'FHA',
              'va' => 'VA',
              'jumbo' => 'Jumbo',
              'refinance-purchase' => 'Refinance & Purchase',
              'primary-home' => 'Primary Home',
              'secondary-home' => 'Secondary Home',
              'investment-property' => 'Investment Property',
              'self-employed' => 'Self-Employed',
              'first-time' => 'First-Time Homebuyer',
              'reverse-mortgage' => 'Reverse Mortgage',
            ),
            'allow_null' => 0,
            'ui' => 1,
          ),
          array(
            'key' => 'field_loan_title',
            'label' => 'Title',
            'name' => 'title',
            'type' => 'text',
            'required' => 1,
            'placeholder' => 'Conventional Loans',
            'instructions' => 'Program name for card',
          ),

          // Description Tab
          array(
            'key' => 'field_loan_description_tab',
            'label' => 'Description',
            'type' => 'tab',
            'placement' => 'top',
          ),
          array(
            'key' => 'field_loan_description',
            'label' => 'Program Description',
            'name' => 'description',
            'type' => 'wysiwyg',
            'required' => 1,
            'instructions' => 'Full program description with formatting',
            'default_value' => '',
            'tabs' => 'all',
            'toolbar' => 'full',
            'media_upload' => 1,
            'delay' => 0,
          ),

          // Comparison Table Tab
          array(
            'key' => 'field_loan_comparison_tab',
            'label' => 'Comparison Table',
            'type' => 'tab',
            'placement' => 'top',
          ),
          array(
            'key' => 'field_loan_comparison',
            'label' => 'Comparison Table Data',
            'name' => 'comparison',
            'type' => 'group',
            'layout' => 'block',
            'instructions' => 'Short facts for program comparison table',
            'sub_fields' => array(
              array(
                'key' => 'field_loan_down_payment',
                'label' => 'Down Payment',
                'name' => 'down_payment',
                'type' => 'text',
                'placeholder' => '3-20%',
              ),
              array(
                'key' => 'field_loan_ideal_for_short',
                'label' => 'Ideal For (Short)',
                'name' => 'ideal_for_short',
                'type' => 'text',
                'placeholder' => 'Most buyers with good credit',
              ),
              array(
                'key' => 'field_loan_credit_range',
                'label' => 'Credit Range',
                'name' => 'credit_range',
                'type' => 'text',
                'placeholder' => '620+',
              ),
              array(
                'key' => 'field_loan_max_size',
                'label' => 'Max Loan Size',
                'name' => 'max_loan_size',
                'type' => 'text',
                'placeholder' => 'Standard',
              ),
            ),
          ),
        ),
      ),
    ),
    'location' => array(
      array(
        array(
          'param' => 'page',
          'operator' => '==',
          'value' => get_page_by_path('loan-programs')->ID ?? 0,
        ),
      ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
  ));
}
