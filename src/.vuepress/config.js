const { description } = require('../../package')

module.exports = {
  title: 'SIPKK',
  description: description,

  head: [
    ['link', { rel: 'icon', href: `/assets/img/favicon.png` }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto+Mono|Montserrat&display=swap' }],
    ['meta', { name: 'theme-color', content: '#005FAC' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  theme: "book",
  themeConfig: {
    enableDarkMode: false,
    logo: '/gambar/logo.jpeg',
    locales: {
      '/': {
        lang: 'en-US',
      }
    },
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nextLinks: false,
    prevLinks: false,
    search: true,
    searchPlaceholder: 'Pencarian...',
    smoothScroll: true,
    nav: [
      {
        text: 'Home',
        link: '/index',
      },
      {
        text: 'Daftar Isi',
        link: '/config/'
      },
      {
        text: 'Dokumentasi',
        link: '/docs/introduction/' // Link ke introduction
      },
      {
        text: 'Aplikasi SIPKK V.4',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/': [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 1,
          children: [["/", "Home"]]
        },
        {
          title: 'Getting Started',
          collapsable: true,
          children: [
            '/guide/introduction', // Contoh file panduan
            '/guide/installation', // Contoh file instalasi
          ]
        },
        {
          title: 'Features',
          collapsable: true,
          children: [
            '/features/feature1',
            '/features/feature2',
          ]
        }
      ],
      '/docs/': [
        {
          title: 'Documentation',
          collapsable: false,
          children: [
            'introduction', // Tambahkan entry ini
            'setup', // File setup tambahan
          ]
        }
      ]
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
