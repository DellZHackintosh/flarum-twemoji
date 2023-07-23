import app from 'flarum/app';

import twemoji from '@twemoji/api';

export const version = /([0-9]+).[0-9]+.[0-9]+/g.exec(twemoji.base)[1];

export default function (n) {
    switch (n) {
        default: case 0:
            return app.forum.attribute("flarum-twemoji.base") ?
            app.forum.attribute("flarum-twemoji.base").replace('${Version}', version) :
            twemoji.base;
            break;

        case 1:
            return app.forum.attribute("flarum-twemoji.folder");
            break;

        case 2:
            return app.forum.attribute("flarum-twemoji.ext");
    }
}