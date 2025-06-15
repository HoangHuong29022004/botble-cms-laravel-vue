<?php

use Botble\Shortcode\View\View;
use Botble\Theme\Theme;

return [

    /*
    |--------------------------------------------------------------------------
    | Inherit from another theme
    |--------------------------------------------------------------------------
    */

    'inherit' => null, //default

    /*
    |--------------------------------------------------------------------------
    | Listener from events
    |--------------------------------------------------------------------------
    |
    | You can hook a theme when event fired on activities
    | this is cool feature to set up a title, meta, default styles and scripts.
    |
    | [Notice] these events can be overridden by package config.
    |
    */

    'events'  => [

        // Before event inherit from package config and the theme that call before,
        // you can use this event to set meta, breadcrumb template or anything
        // you want inheriting.
        'before'             => function (Theme $theme): void {
            // You can remove this line anytime.
        },

        // Listen on event before render a theme,
        // this event should call to assign some assets,
        // breadcrumb template.
        'beforeRenderTheme'  => function (Theme $theme): void {
            // Add jQuery first
            $theme->asset()->container('header')->add('jquery', 'https://code.jquery.com/jquery-3.7.1.min.js');

            // Add Vue - use production version in production
            $vueScript = app()->environment('production')
            ? 'https://unpkg.com/vue@3/dist/vue.global.prod.js'
            : 'https://unpkg.com/vue@3/dist/vue.global.js';
            $theme->asset()->container('header')->add('vue', $vueScript);

            // Add your theme assets
            $theme->asset()->usePath()->add('style', 'css/style.css');
            $theme->asset()->container('header')->usePath()->add('app', 'js/app.js', ['jquery', 'vue']);

            if (function_exists('shortcode')) {
                $theme->composer(['page'], function (View $view) {
                    $view->withShortcodes();
                });
            }
        },

        // Listen on event before render a layout,
        // this should call to assign style, script for a layout.
        'beforeRenderLayout' => [
            'default' => function ($theme): void {
                // $theme->asset()->usePath()->add('ipad', 'css/layouts/ipad.css');
            },
        ],
    ],
];
