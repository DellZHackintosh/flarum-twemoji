import app from 'flarum/app';

app.initializers.add('DaleZ-twemoji', () => {
    app.extensionData.for('DaleZ-twemoji')
    .registerSetting(
        {
            setting: 'flarum-twemoji.base',
            label: app.translator.trans('flarum-twemoji.admin.settings.base'),
            type: 'text',
            help: app.translator.trans('flarum-twemoji.admin.settings.basehelp')[0].replace('$', "'${Version}'"),
            placeholder: app.translator.trans('flarum-twemoji.admin.settings.baseph')
        }
    )
    .registerSetting(
        {
            setting: 'flarum-twemoji.folder',
            label: app.translator.trans('flarum-twemoji.admin.settings.folder'),
            type: 'text',
            placeholder: app.translator.trans('flarum-twemoji.admin.settings.folderph')
        }
    )
    .registerSetting(
        {
            setting: 'flarum-twemoji.ext',
            label: app.translator.trans('flarum-twemoji.admin.settings.ext'),
            type: 'text',
            placeholder: app.translator.trans('flarum-twemoji.admin.settings.extph')
        }
    )
    .registerSetting(
        {
            setting: 'flarum-twemoji.disable_autocomplete',
            label: app.translator.trans('flarum-twemoji.admin.settings.disable_autocomplete'),
            type: 'switch'
        }
    )
})