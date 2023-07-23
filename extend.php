<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace webdev\twemoji;

use Flarum\Extend;
use s9e\TextFormatter\Configurator;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
       ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Formatter)
        ->configure(function (Configurator $config) {
            $config->Emoticons->add(':)', '🙂');
            $config->Emoticons->add(':D', '😃');
            $config->Emoticons->add(':P', '😛');
            $config->Emoticons->add(':(', '🙁');
            $config->Emoticons->add(':|', '😐');
            $config->Emoticons->add(';)', '😉');
            $config->Emoticons->add(':\'(', '😢');
            $config->Emoticons->add(':O', '😮');
            $config->Emoticons->add('>:(', '😡');
        }),

    (new Extend\Settings)
        ->serializeToForum('flarum-twemoji.base','flarum-twemoji.base')
        ->serializeToForum('flarum-twemoji.folder','flarum-twemoji.folder')
        ->serializeToForum('flarum-twemoji.ext','flarum-twemoji.ext')
        ->serializeToForum('flarum-twemoji.disable_autocomplete','flarum-twemoji.disable_autocomplete'),

    new Extend\Locales(__DIR__.'/locale'),
];
