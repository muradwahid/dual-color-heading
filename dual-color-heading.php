<?php
/**
 * Plugin Name: Dual Color Heading
 * Description: Highlight content heading with different colors.
 * Version: 1.0.0
 * Author: wpblocksguru
 * Author URI: https://profiles.wordpress.org/wpblocksguru
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: dual-color-heading
 */

if ( !defined('ABSPATH') ) { exit; }

// Constant
define('DCH_VERSION', isset($_SERVER['HTTP_HOST']) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0');
define('DCH_DIR_URL', plugin_dir_url(__FILE__));
define('DCH_DIR_PATH', plugin_dir_path(__FILE__));

require_once DCH_DIR_PATH . 'inc/block.php';