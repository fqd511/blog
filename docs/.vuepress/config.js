module.exports = {
    title: '511blog',
    description: '大愚乌托邦',
    base: '/',
    configureWebpack: {
        resolve: {
            alias: {
                '@alias': 'path/to/some/dir'
            }
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/511.png' }]
    ],
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2] },
        config: md => {
            // 使用更多的 markdown-it 插件!
            // md.use(require('markdown-it-xxx'))
        }
    },
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            // { text: 'Guide', link: '/guide/' },
            // { text: 'Github', link: 'https://github.com/fqd511' },
            {
                text: '目录',
                items: [
                    { text: 'JavaScript', link: '/JavaScript/' },
                    { text: 'CSS', link: '/CSS/' },
                    { text: 'Go', link: '/Golang/' },
                    { text: 'Vue', link: '/Vue/' }
                ]
            }
        ],
        sidebar: {
            '/JavaScript/': [''],
            '/CSS/': [''],
            '/Go/': [''],
            '/Vue/': [''],
            '/': [
                ['/', '首页'],
                {
                    title: 'JavaScript',
                    children: [
                        '/JavaScript/'
                    ]
                },
                {
                    title: 'CSS',
                    children: [
                        '/CSS/'
                    ]
                },
                {
                    title: 'Vue',
                    children: [
                        '/Vue/'
                    ]
                }
            ],

        },
        sidebarDepth: 2,
        displayAllHeaders: true, // 默认值：false
        lastUpdated: 'Last Updated', // string | boolean
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
                // 如果设置为 true, 默认的文本配置将是: 
                // updatePopup: { 
                //    message: "New content is available.", 
                //    buttonText: "Refresh" 
                // }
        },


        // git 仓库和编辑链接
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://www.beian.miit.gov.cn',
        // repo: 'https://github.com/fqd511/blog',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '粤ICP备17031034号',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        // docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        // docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: ' 粤ICP备17031034号 '
    },
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        // '/': {
        //     lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
        //     title: 'VuePress',
        //     description: 'Vue-powered Static Site Generator'
        // },
        // '/zh/': {
        //     lang: 'zh-CN',
        //     title: 'VuePress',
        //     description: 'Vue 驱动的静态网站生成器'
        // }
    },
}