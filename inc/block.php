<?php

if ( !defined('ABSPATH') ) { exit; }

if( !class_exists('DCHBlock') ){
	class DCHBlock {
		public function __construct()
		{
			add_action('init', [$this, 'onInit']);
		}
		function onInit()
		{
			wp_register_style('dch-dual-color-heading-style', DCH_DIR_URL . 'dist/style.css', [], DCH_VERSION); // Style
			wp_register_style('dch-dual-color-heading-editor-style', DCH_DIR_URL . 'dist/editor.css', ['dch-dual-color-heading-style'], DCH_VERSION); // Backend Style

			register_block_type(__DIR__, [
				'editor_style' => 'dch-dual-color-heading-editor-style',
				'render_callback' => [$this, 'render']
			]); // Register Block

			wp_set_script_translations('dch-dual-color-heading-editor-script', 'dual-color-heading', DCH_DIR_PATH . 'languages');
		}

		function render($attributes)
		{
			extract($attributes);

			wp_enqueue_style('dch-dual-color-heading-style');
			wp_enqueue_script('dch-dual-color-heading-script', DCH_DIR_URL . 'dist/script.js', ['react', 'react-dom'], DCH_VERSION, true);
			wp_set_script_translations('dch-dual-color-heading-script', 'dual-color-heading', DCH_DIR_PATH . 'languages');

			$className = $className ?? '';
			$blockClassName = "wp-block-dch-dual-color-heading $className align$align";

			ob_start(); ?>
			<div class='<?php echo esc_attr($blockClassName); ?>' id='dch-dual-color-heading-<?php echo esc_attr($cId) ?>'
				data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>

			<?php return ob_get_clean();
		}
	}
	new DCHBlock();
}
require_once("ExtendMime.php");