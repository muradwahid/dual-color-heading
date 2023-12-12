<?php
class BPDCHHelloBlock{
	public function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}
	function onInit() {
		wp_register_style( 'bpdch-hello-style', BPDCH_DIR_URL . 'dist/style.css', [ ], BPDCH_VERSION ); // Style
		wp_register_style( 'bpdch-hello-editor-style', BPDCH_DIR_URL . 'dist/editor.css', [ 'bpdch-hello-style' ], BPDCH_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'bpdch-hello-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'bpdch-hello-editor-script', 'textdomain', BPDCH_DIR_PATH . 'languages' );
	}

	function render( $attributes ){
		extract( $attributes );

		wp_enqueue_style( 'bpdch-hello-style' );
		wp_enqueue_script( 'bpdch-hello-script', BPDCH_DIR_URL . 'dist/script.js', [ 'react', 'react-dom' ], BPDCH_VERSION, true );
		wp_set_script_translations( 'bpdch-hello-script', 'textdomain', BPDCH_DIR_PATH . 'languages' );

		$className = $className ?? '';
		$blockClassName = "wp-block-bpdch-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='bpdch-dual-color-heading-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	}
}
new BPDCHHelloBlock();
require_once("ExtendMime.php");