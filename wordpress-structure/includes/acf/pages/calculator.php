<?php

/**
 * ACF Fields for Calculator Page
 * 
 * Поля для сторінки Calculator
 */

if (!function_exists('acf_add_local_field_group')) {
  return;
}

acf_add_local_field_group(array(
  'key' => 'group_calculator_page',
  'title' => 'Calculator Page Settings',
  'fields' => array(

    // Calculator Section
    array(
      'key' => 'tab_calculator_section',
      'label' => 'Calculator Section',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_calculator_title',
      'label' => 'Calculator Title',
      'name' => 'calculator_title',
      'type' => 'text',
      'default_value' => 'Mortgage & Loan Payment Calculator',
      'required' => 1,
    ),
    array(
      'key' => 'field_calculator_description',
      'label' => 'Calculator Description',
      'name' => 'calculator_description',
      'type' => 'textarea',
      'rows' => 3,
      'default_value' => 'Compare different mortgage programs, estimate your monthly payment, and see how much goes toward principal versus interest over the life of the loan.',
    ),
    array(
      'key' => 'field_calculator_disclaimer_title',
      'label' => 'Disclaimer Title',
      'name' => 'calculator_disclaimer_title',
      'type' => 'text',
      'default_value' => 'Disclaimer',
    ),
    array(
      'key' => 'field_calculator_disclaimer_text',
      'label' => 'Disclaimer Text',
      'name' => 'calculator_disclaimer_text',
      'type' => 'wysiwyg',
      'tabs' => 'visual',
      'toolbar' => 'basic',
      'media_upload' => 0,
      'default_value' => 'Information and interactive calculators are made available to you as self-help tools for your independent use and are not intended to provide investment advice. We cannot and do not guarantee their applicability or accuracy in regards to your individual circumstances. All examples are hypothetical and are for illustrative purposes. We encourage you to seek personalized advice from qualified professionals regarding all personal finance issues.',
    ),

    // Button Labels
    array(
      'key' => 'tab_calculator_buttons',
      'label' => 'Button Labels',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_calculator_button_calculate',
      'label' => 'Calculate Button Text',
      'name' => 'calculator_button_calculate',
      'type' => 'text',
      'default_value' => 'Update calculation',
    ),
    array(
      'key' => 'field_calculator_button_send',
      'label' => 'Send Results Button Text',
      'name' => 'calculator_button_send',
      'type' => 'text',
      'default_value' => 'Send my results',
    ),

    // Results Section Labels
    array(
      'key' => 'tab_calculator_results',
      'label' => 'Results Section',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_calculator_monthly_payment_label',
      'label' => 'Monthly Payment Label',
      'name' => 'calculator_monthly_payment_label',
      'type' => 'text',
      'default_value' => 'Estimated monthly payment',
    ),
    array(
      'key' => 'field_calculator_snapshot_title',
      'label' => 'Loan Snapshot Title',
      'name' => 'calculator_snapshot_title',
      'type' => 'text',
      'default_value' => 'Loan snapshot',
    ),
    array(
      'key' => 'field_calculator_lifetime_title',
      'label' => 'Lifetime Cost Title',
      'name' => 'calculator_lifetime_title',
      'type' => 'text',
      'default_value' => 'Lifetime cost overview',
    ),
    array(
      'key' => 'field_calculator_legend_principal',
      'label' => 'Legend - Principal Label',
      'name' => 'calculator_legend_principal',
      'type' => 'text',
      'default_value' => 'Principal',
    ),
    array(
      'key' => 'field_calculator_legend_interest',
      'label' => 'Legend - Interest Label',
      'name' => 'calculator_legend_interest',
      'type' => 'text',
      'default_value' => 'Interest',
    ),

    // CTA Section
    array(
      'key' => 'tab_calculator_cta',
      'label' => 'CTA Section',
      'type' => 'tab',
    ),
    array(
      'key' => 'field_calculator_cta_enabled',
      'label' => 'Show CTA Section',
      'name' => 'calculator_cta_enabled',
      'type' => 'true_false',
      'default_value' => 1,
      'ui' => 1,
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
        'value' => get_page_by_path('calculator')->ID ?? 0,
      ),
    ),
  ),
  'menu_order' => 0,
  'position' => 'normal',
  'style' => 'default',
  'active' => true,
));
