const { description } = require('../../package')

module.exports = {
  title: 'SIPKK V 4.0',
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
      "/": [
        {
          title: "",
          collapsable: false,
          sidebarDepth: 1,
          children: [["/", "Home"]]
        },
        {
          title: "Pengenalan",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ["/guide/introduction", "📱Aplikasi SIPKK"],
            ["/guide/dfr", "📋 Daftar Isi"],
            ["/guide/pengantar", "🙌 Kata Pengantar"],
          
          ]
        },
        {
          title: "Informasi",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ["/info/level", "👤 Level User"],
            ["/info/definisi", "🔡 Definisi dan Pengertian"],
            ["/info/langkah", "📑 Langkah Awal"],
            ["/info/faq", "❓FAQ"],
          ]
        },
        {
          title: "Dokumentasi",
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ["/docs/awal", "📄 Awal Konfigurasi"],
            ["/docs/pm", "💻 BMN Peralatan dan Mesin"],
            ["/docs/gedung", "🏢 BMN Gedung"],
            ["/docs/kendaraan", "🚗 BMN Kendaraan"],
            ["/docs/runeg", "🏠 BMN Rumah Negara"],
            ["/docs/kabkota", "🧭 Kab/Kota Layanan"],
            ["/docs/unduh", "🔽 Unduh Dokumen"]
          ]
        },
        {
          title: "Modul Tagihan",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["/docs/tagihan1", "📑 Modul Tagihan UP TUP LS"],
            ["/docs/tagihan1", "📑 Modul Tagihan GUP GUPn PTUP"],         
          ]
        },
        {
          title: "Modul Tagihan Pajak",
          collapsable: false,
          sidebarDepth: 2,
          children: [
            ["/info/level", "📑 "],         
          ]
        }
      ]
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/plugin-toc'
  ]
}
