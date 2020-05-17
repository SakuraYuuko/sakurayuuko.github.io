'use strict'

function rubyb (args) {
    let splited = args.join(' ').split('|');
    let ori = splited[0].trim();
    let katana = ori;
    if (splited.length>1){
        katana = splited[1].trim();
    }
    let gin = katana;
    return `<ruby>${ori}<rp> (</rp><rt style="font-size: 0.75em;">${gin}</rt><rp>) </rp></ruby>`;
}

function stgame (args) {
    let appid = args[0];
    return `<iframe title="Steam store widget" class="store-widget" data-src="https://store.steampowered.com/widget/${appid}" style="border:0;overflow: hidden;background-color: transparent;" src="https://store.steampowered.com/widget/${appid}/" width="100%" height="190"></iframe>`;
}

function heimu (args,content) {
    return `<span class="heimu" title="${args[0]?args[0]:'你知道的太多了'}">${content}</span>`;
}

hexo.extend.tag.register('ruby', rubyb)
hexo.extend.tag.register('stgame', stgame)
hexo.extend.tag.register('heimu', heimu, { ends: true })