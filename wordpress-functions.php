<?php
/**
 * Custom Post Types and REST API Configuration для Lenders
 * 
 * Скопіюйте цей код в functions.php вашої WordPress теми
 * WordPress Admin → Appearance → Theme File Editor → functions.php
 */

// =====================================================
// 1. FAQ Custom Post Type
// =====================================================
function create_faq_post_type() {
    register_post_type('faq', array(
        'labels' => array(
            'name' => 'FAQ',
            'singular_name' => 'FAQ Item',
            'add_new' => 'Add New FAQ',
            'add_new_item' => 'Add New FAQ Item',
            'edit_item' => 'Edit FAQ',
            'new_item' => 'New FAQ',
            'view_item' => 'View FAQ',
            'search_items' => 'Search FAQ',
            'not_found' => 'No FAQ found',
            'not_found_in_trash' => 'No FAQ found in trash',
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,  // ⚠️ ОБОВ'ЯЗКОВО для REST API
        'rest_base' => 'faq',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports' => array('title', 'editor', 'custom-fields'),
        'menu_icon' => 'dashicons-editor-help',
        'menu_position' => 5,
        'rewrite' => array('slug' => 'faq'),
        'capability_type' => 'post',
        'show_in_menu' => true,
    ));
}
add_action('init', 'create_faq_post_type');

// =====================================================
// 2. Loan Programs Custom Post Type
// =====================================================
function create_loan_programs_post_type() {
    register_post_type('loan_programs', array(
        'labels' => array(
            'name' => 'Loan Programs',
            'singular_name' => 'Loan Program',
            'add_new' => 'Add New Program',
            'add_new_item' => 'Add New Loan Program',
            'edit_item' => 'Edit Program',
            'new_item' => 'New Program',
            'view_item' => 'View Program',
            'search_items' => 'Search Programs',
            'not_found' => 'No programs found',
            'not_found_in_trash' => 'No programs found in trash',
        ),
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,  // ⚠️ ОБОВ'ЯЗКОВО для REST API
        'rest_base' => 'loan-programs',
        'rest_controller_class' => 'WP_REST_Posts_Controller',
        'supports' => array('title', 'editor', 'thumbnail', 'custom-fields', 'excerpt'),
        'menu_icon' => 'dashicons-money-alt',
        'menu_position' => 6,
        'rewrite' => array('slug' => 'loan-programs'),
        'capability_type' => 'post',
        'show_in_menu' => true,
    ));
}
add_action('init', 'create_loan_programs_post_type');

// =====================================================
// 3. Enable CORS for REST API (Development)
// =====================================================
function add_cors_http_header() {
    // ⚠️ Для продакшену замініть * на конкретний домен
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
    header("Access-Control-Allow-Credentials: true");
}
add_action('init', 'add_cors_http_header');

// =====================================================
// 4. Expose ACF fields in REST API
// =====================================================
function create_ACF_meta_in_REST() {
    // Типи постів які треба виключити
    $postypes_to_exclude = ['acf-field-group', 'acf-field'];
    
    // Додаткові типи які треба включити
    $extra_postypes_to_include = ['page'];
    
    // Отримати всі custom post types
    $post_types = array_diff(
        get_post_types(['_builtin' => false], 'names'),
        $postypes_to_exclude
    );
    
    // Додати page до списку
    $post_types = array_merge($post_types, $extra_postypes_to_include);
    
    // Зареєструвати ACF поля для кожного типу
    foreach ($post_types as $post_type) {
        register_rest_field($post_type, 'acf', [
            'get_callback' => 'expose_ACF_fields',
            'update_callback' => null,
            'schema' => null,
        ]);
    }
}

function expose_ACF_fields($object) {
    $ID = $object['id'];
    return get_fields($ID);
}

add_action('rest_api_init', 'create_ACF_meta_in_REST');

// =====================================================
// 5. Додаткові налаштування REST API
// =====================================================

// Збільшити ліміт постів на сторінку
function increase_rest_posts_per_page($args, $request) {
    $args['posts_per_page'] = 100; // Максимум 100 постів
    return $args;
}
add_filter('rest_faq_query', 'increase_rest_posts_per_page', 10, 2);
add_filter('rest_loan_programs_query', 'increase_rest_posts_per_page', 10, 2);

// =====================================================
// 6. Flush rewrite rules on theme activation
// =====================================================
function lenders_rewrite_flush() {
    create_faq_post_type();
    create_loan_programs_post_type();
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'lenders_rewrite_flush');

// =====================================================
// Кінець коду
// =====================================================
