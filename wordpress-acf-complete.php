<?php

/**
 * ПОВНИЙ набір ACF Fields для Lenders Project
 * 
 * Додайте весь цей код в кінець functions.php вашої WordPress теми
 * Вимоги: ACF плагін активований
 */

if (function_exists('acf_add_local_field_group')):

  // ========================================================================
  // HOME PAGE ACF FIELDS
  // ========================================================================

  acf_add_local_field_group(array(
    'key' => 'group_home_all_sections',
    'title' => 'Home Page - All Sections',
    'fields' => array(

      // ============================================
      // HERO SECTION
      // ============================================
      array(
        'key' => 'tab_hero',
        'label' => 'Hero Section',
        'type' => 'tab',
      ),
      array(
        'key' => 'field_hero_slogan',
        'label' => 'Hero Slogan',
        'name' => 'hero_slogan',
        'type' => 'text',
        'default_value' => 'Leading the way in Home Loans',
      ),
      array(
        'key' => 'field_hero_title',
        'label' => 'Hero Title',
        'name' => 'hero_title',
        'type' => 'text',
        'required' => 1,
        'default_value' => 'THE AMERICAN DREAM',
      ),
      array(
        'key' => 'field_hero_subtitle',
        'label' => 'Hero Subtitle',
        'name' => 'hero_subtitle',
        'type' => 'textarea',
        'rows' => 3,
        'default_value' => 'We Build Dreams, Nurture Families, and Change Lives-One Mortgage at a Time',
      ),
      array(
        'key' => 'field_hero_button_1_text',
        'label' => 'Button 1 Text',
        'name' => 'hero_button_1_text',
        'type' => 'text',
        'default_value' => 'Get Pre-Approved',
      ),
      array(
        'key' => 'field_hero_button_1_url',
        'label' => 'Button 1 URL',
        'name' => 'hero_button_1_url',
        'type' => 'url',
        'default_value' => 'https://1665272.my1003app.com/134607/register',
      ),
      array(
        'key' => 'field_hero_button_2_text',
        'label' => 'Button 2 Text',
        'name' => 'hero_button_2_text',
        'type' => 'text',
        'default_value' => 'Explore Loan Options',
      ),
      array(
        'key' => 'field_hero_button_2_url',
        'label' => 'Button 2 URL',
        'name' => 'hero_button_2_url',
        'type' => 'page_link',
        'post_type' => array('page'),
        'allow_null' => 1,
        'multiple' => 0,
        'instructions' => 'Виберіть сторінку зі списку',
      ),

      // ============================================
      // ABOUT SECTION
      // ============================================
      array(
        'key' => 'tab_about',
        'label' => 'About Section',
        'type' => 'tab',
      ),
      array(
        'key' => 'field_about_slogan',
        'label' => 'About Slogan',
        'name' => 'about_slogan',
        'type' => 'text',
        'default_value' => 'Welcome to The Lenders',
      ),
      array(
        'key' => 'field_about_title',
        'label' => 'About Title',
        'name' => 'about_title',
        'type' => 'text',
        'default_value' => 'our loans will fill yourdreams come true',
      ),
      array(
        'key' => 'field_about_description',
        'label' => 'About Description',
        'name' => 'about_description',
        'type' => 'wysiwyg',
        'default_value' => 'We provide simple, transparent, and stress-free mortgage solutions tailored to your financial goals.',
      ),
      array(
        'key' => 'field_about_years',
        'label' => 'Years of Experience',
        'name' => 'about_years',
        'type' => 'number',
        'default_value' => 25,
        'min' => 0,
      ),
      array(
        'key' => 'field_about_button_text',
        'label' => 'Button Text',
        'name' => 'about_button_text',
        'type' => 'text',
        'default_value' => 'Explore Loans',
      ),
      array(
        'key' => 'field_about_button_url',
        'label' => 'Button URL',
        'name' => 'about_button_url',
        'type' => 'page_link',
        'post_type' => array('page'),
        'allow_null' => 1,
        'multiple' => 0,
        'instructions' => 'Виберіть сторінку зі списку',
      ),
      array(
        'key' => 'field_about_progress_lines',
        'label' => 'Progress Lines',
        'name' => 'about_progress_lines',
        'type' => 'repeater',
        'layout' => 'table',
        'button_label' => 'Add Progress Line',
        'min' => 0,
        'max' => 5,
        'sub_fields' => array(
          array(
            'key' => 'field_about_progress_title',
            'label' => 'Title',
            'name' => 'title',
            'type' => 'text',
            'required' => 1,
          ),
          array(
            'key' => 'field_about_progress_percent',
            'label' => 'Percent',
            'name' => 'percent',
            'type' => 'number',
            'required' => 1,
            'min' => 0,
            'max' => 100,
            'default_value' => 90,
          ),
          array(
            'key' => 'field_about_progress_label',
            'label' => 'Label',
            'name' => 'label',
            'type' => 'text',
            'required' => 1,
            'placeholder' => 'e.g., Up to 90%',
          ),
        ),
      ),

      // ============================================
      // PHILOSOPHY SECTION
      // ============================================
      array(
        'key' => 'tab_philosophy',
        'label' => 'Philosophy Section',
        'type' => 'tab',
      ),
      array(
        'key' => 'field_philosophy_quote',
        'label' => 'Quote',
        'name' => 'philosophy_quote',
        'type' => 'textarea',
        'rows' => 2,
        'default_value' => '"We believe everyone deserves a chance to be approved."',
      ),
      array(
        'key' => 'field_philosophy_slogan',
        'label' => 'Slogan',
        'name' => 'philosophy_slogan',
        'type' => 'text',
        'default_value' => 'Mortgage Lending, Elevated.',
      ),
      array(
        'key' => 'field_philosophy_title',
        'label' => 'Title',
        'name' => 'philosophy_title',
        'type' => 'text',
        'default_value' => 'Why Choose The Lenders',
      ),
      array(
        'key' => 'field_philosophy_description',
        'label' => 'Description',
        'name' => 'philosophy_description',
        'type' => 'wysiwyg',
        'default_value' => 'At The Lenders, we believe every borrower deserves clarity, trust, and a personalized lending experience.',
      ),
      array(
        'key' => 'field_philosophy_values',
        'label' => 'Values',
        'name' => 'philosophy_values',
        'type' => 'repeater',
        'layout' => 'table',
        'button_label' => 'Add Value',
        'sub_fields' => array(
          array(
            'key' => 'field_value_title',
            'label' => 'Title',
            'name' => 'title',
            'type' => 'text',
          ),
          array(
            'key' => 'field_value_description',
            'label' => 'Description',
            'name' => 'description',
            'type' => 'text',
          ),
        ),
      ),
      array(
        'key' => 'field_philosophy_button_text',
        'label' => 'Button Text',
        'name' => 'philosophy_button_text',
        'type' => 'text',
        'default_value' => 'Read Our Story',
      ),
      array(
        'key' => 'field_philosophy_button_url',
        'label' => 'Button URL',
        'name' => 'philosophy_button_url',
        'type' => 'page_link',
        'post_type' => array('page'),
        'allow_null' => 1,
        'multiple' => 0,
        'instructions' => 'Виберіть сторінку зі списку',
      ),

      // ============================================
      // PROCESS SECTION
      // ============================================
      array(
        'key' => 'tab_process',
        'label' => 'Process Section',
        'type' => 'tab',
      ),
      array(
        'key' => 'field_process_slogan',
        'label' => 'Slogan',
        'name' => 'process_slogan',
        'type' => 'text',
        'default_value' => 'how it works',
      ),
      array(
        'key' => 'field_process_title',
        'label' => 'Title',
        'name' => 'process_title',
        'type' => 'text',
        'default_value' => 'Our Working Process',
      ),
      array(
        'key' => 'field_process_description',
        'label' => 'Description',
        'name' => 'process_description',
        'type' => 'textarea',
        'rows' => 2,
      ),
      array(
        'key' => 'field_process_steps',
        'label' => 'Process Steps',
        'name' => 'process_steps',
        'type' => 'repeater',
        'layout' => 'block',
        'button_label' => 'Add Step',
        'sub_fields' => array(
          array(
            'key' => 'field_step_number',
            'label' => 'Step Number',
            'name' => 'step_number',
            'type' => 'number',
            'min' => 1,
          ),
          array(
            'key' => 'field_step_title',
            'label' => 'Title',
            'name' => 'step_title',
            'type' => 'text',
          ),
          array(
            'key' => 'field_step_description',
            'label' => 'Description',
            'name' => 'step_description',
            'type' => 'textarea',
            'rows' => 2,
          ),
        ),
      ),

      // ============================================
      // REVIEWS SECTION
      // ============================================
      array(
        'key' => 'tab_reviews',
        'label' => 'Reviews Section',
        'type' => 'tab',
      ),
      array(
        'key' => 'field_reviews_slogan',
        'label' => 'Slogan',
        'name' => 'reviews_slogan',
        'type' => 'text',
        'default_value' => 'our reviews',
      ),
      array(
        'key' => 'field_reviews_title',
        'label' => 'Title',
        'name' => 'reviews_title',
        'type' => 'text',
        'default_value' => 'What Our Clients Say',
      ),
      array(
        'key' => 'field_reviews_description',
        'label' => 'Description',
        'name' => 'reviews_description',
        'type' => 'textarea',
        'rows' => 2,
        'default_value' => "Don't just take our word for it. Hear from homeowners who trusted us with their mortgage journey.",
      ),
      array(
        'key' => 'field_reviews_list',
        'label' => 'Reviews',
        'name' => 'reviews_list',
        'type' => 'repeater',
        'layout' => 'block',
        'button_label' => 'Add Review',
        'sub_fields' => array(
          array(
            'key' => 'field_reviewer_name',
            'label' => 'Name',
            'name' => 'reviewer_name',
            'type' => 'text',
          ),
          array(
            'key' => 'field_reviewer_position',
            'label' => 'Position/Role',
            'name' => 'reviewer_position',
            'type' => 'text',
          ),
          array(
            'key' => 'field_review_text',
            'label' => 'Review Text',
            'name' => 'review_text',
            'type' => 'textarea',
            'rows' => 4,
          ),
          array(
            'key' => 'field_review_rating',
            'label' => 'Rating',
            'name' => 'review_rating',
            'type' => 'number',
            'min' => 1,
            'max' => 5,
            'default_value' => 5,
          ),
        ),
      ),

      // ============================================
      // CALCULATOR SECTION
      // ============================================
      array(
        'key' => 'tab_calculator',
        'label' => 'Calculator Section',
        'type' => 'tab',
      ),
      array(
        'key' => 'field_calculator_slogan',
        'label' => 'Slogan',
        'name' => 'calculator_slogan',
        'type' => 'text',
        'default_value' => 'calculate your loan',
      ),
      array(
        'key' => 'field_calculator_title',
        'label' => 'Title',
        'name' => 'calculator_title',
        'type' => 'text',
        'default_value' => 'Mortgage Programs Tailored for Every Dream',
      ),
      array(
        'key' => 'field_calculator_description',
        'label' => 'Description',
        'name' => 'calculator_description',
        'type' => 'textarea',
        'rows' => 3,
        'default_value' => 'Use our calculator to estimate your monthly payments and explore our flexible mortgage programs designed to match your unique needs.',
      ),
      array(
        'key' => 'field_calculator_programs_title',
        'label' => 'Programs Title',
        'name' => 'calculator_programs_title',
        'type' => 'text',
        'default_value' => 'Top Programs',
      ),
      array(
        'key' => 'field_calculator_button_text',
        'label' => 'Button Text',
        'name' => 'calculator_button_text',
        'type' => 'text',
        'default_value' => 'view all programs',
      ),

      // ============================================
      // NEWS SECTION
      // ============================================
      array(
        'key' => 'tab_news',
        'label' => 'News Section',
        'type' => 'tab',
      ),
      array(
        'key' => 'field_news_slogan',
        'label' => 'Slogan',
        'name' => 'news_slogan',
        'type' => 'text',
        'default_value' => 'Smart mortgage tips and rate trends.',
      ),
      array(
        'key' => 'field_news_title',
        'label' => 'Title',
        'name' => 'news_title',
        'type' => 'text',
        'default_value' => 'news & insights',
      ),
      array(
        'key' => 'field_news_button_text',
        'label' => 'Button Text',
        'name' => 'news_button_text',
        'type' => 'text',
        'default_value' => 'View All News',
      ),

      // ============================================
      // CTA (GET IN TOUCH) SECTION
      // ============================================
      array(
        'key' => 'tab_cta',
        'label' => 'CTA Section',
        'type' => 'tab',
      ),
      array(
        'key' => 'field_cta_title',
        'label' => 'CTA Title',
        'name' => 'cta_title',
        'type' => 'text',
        'default_value' => 'Begin your home loan process today!',
      ),
      array(
        'key' => 'field_cta_description',
        'label' => 'CTA Description',
        'name' => 'cta_description',
        'type' => 'textarea',
        'rows' => 2,
        'default_value' => 'Get pre-approved with in as little as <br /> 3 minutes.',
      ),
      array(
        'key' => 'field_cta_button_text',
        'label' => 'Button Text',
        'name' => 'cta_button_text',
        'type' => 'text',
        'default_value' => 'Get a Quote Now',
      ),
      array(
        'key' => 'field_cta_button_url',
        'label' => 'Button URL',
        'name' => 'cta_button_url',
        'type' => 'page_link',
        'post_type' => array('page'),
        'allow_null' => 1,
        'multiple' => 0,
        'instructions' => 'Виберіть сторінку зі списку',
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
          'value' => get_page_by_path('home')->ID ?? 0,
        ),
      ),
    ),
    'show_in_rest' => 1,
    'position' => 'normal',
  ));

  // ========================================================================
  // FAQ FIELDS
  // ========================================================================
  acf_add_local_field_group(array(
    'key' => 'group_faq_fields',
    'title' => 'FAQ Fields',
    'fields' => array(
      array(
        'key' => 'field_faq_question',
        'label' => 'Question',
        'name' => 'question',
        'type' => 'text',
        'required' => 1,
      ),
      array(
        'key' => 'field_faq_answer',
        'label' => 'Answer',
        'name' => 'answer',
        'type' => 'wysiwyg',
        'required' => 1,
      ),
      array(
        'key' => 'field_faq_category',
        'label' => 'Category',
        'name' => 'category',
        'type' => 'text',
        'default_value' => 'General',
      ),
      array(
        'key' => 'field_faq_order',
        'label' => 'Order',
        'name' => 'order',
        'type' => 'number',
        'default_value' => 0,
      ),
      array(
        'key' => 'field_faq_featured',
        'label' => 'Featured',
        'name' => 'featured',
        'type' => 'true_false',
        'default_value' => 0,
        'ui' => 1,
      ),
    ),
    'location' => array(
      array(
        array(
          'param' => 'post_type',
          'operator' => '==',
          'value' => 'faq',
        ),
      ),
    ),
    'show_in_rest' => 1,
  ));

  // ========================================================================
  // LOAN PROGRAMS FIELDS
  // ========================================================================
  acf_add_local_field_group(array(
    'key' => 'group_loan_program_fields',
    'title' => 'Loan Program Fields',
    'fields' => array(
      array(
        'key' => 'field_loan_description',
        'label' => 'Description',
        'name' => 'description',
        'type' => 'textarea',
        'required' => 1,
        'rows' => 4,
      ),
      array(
        'key' => 'field_loan_rate',
        'label' => 'Rate',
        'name' => 'rate',
        'type' => 'text',
        'placeholder' => 'e.g., 3.5% - 4.5%',
      ),
      array(
        'key' => 'field_loan_terms',
        'label' => 'Terms',
        'name' => 'terms',
        'type' => 'text',
        'placeholder' => 'e.g., 15 or 30 years',
      ),
      array(
        'key' => 'field_loan_requirements',
        'label' => 'Requirements',
        'name' => 'requirements',
        'type' => 'wysiwyg',
      ),
      array(
        'key' => 'field_loan_benefits',
        'label' => 'Benefits',
        'name' => 'benefits',
        'type' => 'textarea',
        'rows' => 5,
        'instructions' => 'Додайте кожну перевагу з нового рядка',
      ),
      array(
        'key' => 'field_loan_icon',
        'label' => 'Icon',
        'name' => 'icon',
        'type' => 'image',
        'return_format' => 'url',
      ),
    ),
    'location' => array(
      array(
        array(
          'param' => 'post_type',
          'operator' => '==',
          'value' => 'loan_programs',
        ),
      ),
    ),
    'show_in_rest' => 1,
  ));

endif; // function_exists check
