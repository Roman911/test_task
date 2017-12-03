<?php

function register_style() {
  wp_register_style( 'my-styles', get_template_directory_uri() .
                   '/style.css' );
  wp_enqueue_style( 'my-styles' );
}

add_action( 'wp_enqueue_scripts', 'register_style' );

function load_my_script() {
  wp_register_script( 'my-script', get_template_directory_uri() .
                   '/vendors.js' );
  wp_enqueue_script( 'my-script' );
}

add_action( 'wp_enqueue_scripts', 'load_my_script' );