export default {
  extends: ['stylelint-config-standard'],
  rules: {
    // Allow both .css and .module.css files
    'selector-class-pattern': null,
    // Useful rules for CSS modules
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
}
