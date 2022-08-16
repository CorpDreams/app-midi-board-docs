/*const langs = [
    { title: 'English', path: '/home', matchPath: /^\/home/ },
    { title: '简体中文', path: '/zh-Hans/', matchPath: /^\/zh-Hans/ },
];*/

const langs = [
    { title: '简体中文', path: '/', matchPath: /^\// },
];

docute.init({
    title: 'MidiBoard Docs',
    // 'edit-link': 'https://github.com/CorpDreams/app-midi-board-docs/blob/gh-pages/README.md',
    icons: [{
        icon: 'github',
        label: '查看本插件的GitHub仓库',
        link: 'https://github.com/CorpDreams/app-midi-board'
    }],
    nav: {
        default: [
            {
                title: '文档', path: '/'
            },
            {
                title: '语言', type: 'dropdown', items: langs
            }
        ]
    }
});