(()=>{var t={n:e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},d:(e,a)=>{for(var r in a)t.o(a,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};(()=>{"use strict";t.r(e);const a=flarum.core.compat.app;var r=t.n(a);r().initializers.add("DaleZ-twemoji",(function(){r().extensionData.for("DaleZ-twemoji").registerSetting({setting:"flarum-twemoji.base",label:r().translator.trans("flarum-twemoji.admin.settings.base"),type:"text",help:r().translator.trans("flarum-twemoji.admin.settings.basehelp")[0].replace("$","'${Version}'"),placeholder:r().translator.trans("flarum-twemoji.admin.settings.baseph")}).registerSetting({setting:"flarum-twemoji.folder",label:r().translator.trans("flarum-twemoji.admin.settings.folder"),type:"text",placeholder:r().translator.trans("flarum-twemoji.admin.settings.folderph")}).registerSetting({setting:"flarum-twemoji.ext",label:r().translator.trans("flarum-twemoji.admin.settings.ext"),type:"text",placeholder:r().translator.trans("flarum-twemoji.admin.settings.extph")}).registerSetting({setting:"flarum-twemoji.disable_autocomplete",label:r().translator.trans("flarum-twemoji.admin.settings.disable_autocomplete"),type:"switch"})}))})(),module.exports=e})();
//# sourceMappingURL=admin.js.map