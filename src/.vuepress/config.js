module.exports = {
  title: 'kstm',
  dest: 'docs/',
  head: [
    ['link', { rel: 'icon', type: 'image/svg', href: '/kstm.svg'}]
  ],
  themeConfig: {
    logo: '/kstm.svg',
    search: false,
    nav: [
      { text: 'kstmについて', link: '/aboutus' },
      { text: 'Join', link: '/join' },
      { text: 'Contact', link: '/contact' },
      { text: 'Slide', link: '/slides/' },
      { text: 'Blog', link: '/posts/' }
    ],
    
    // HACK: 自動でインデックスできると楽
    // sidebar: [
    //   {
    //     title: 'Blog',
    //     path: '/posts/',
    //     children: [
    //       '/posts/geekhaku',
    //       '/posts/ictsc-2020',
    //       '/posts/generate_bacon',
    //       '/posts/advent-calendar-2018',
    //       '/posts/kstm_network',
    //       '/posts/kstm-activity-2017',
    //       '/posts/advent-calendar-2017',
    //       '/posts/kstmztp20171208',
    //       '/posts/isucon7q',
    //       '/posts/20171029-candle',
    //       '/posts/isucon6q',
    //       '/posts/bbq-2016',
    //       '/posts/kodomo-programming-nagano-2',
    //       '/posts/ictsc6',
    //       '/posts/icfpc-2016',
    //       '/posts/kodomo-programming-nagano-1',
    //       '/posts/icpc-2016-tsukuba',
    //       '/posts/kodomo-programming-urugi',
    //     ]
    //   },
    //   {
    //     title: 'Slides',
    //     path: 'slides',
    //     children: []
    //   }
    // ]
    sidebar: {
      '/posts/': [
        {
          title: 'Blog',
          children:[
            'geekhaku',
            'ictsc-2020',
            'generate_bacon',
            'advent-calendar-2018',
            'kstm_network',
            'kstm-activity-2017',
            'advent-calendar-2017',
            'kstmztp20171208',
            'isucon7q',
            '20171029-candle',
            'isucon6q',
            'bbq-2016',
            'kodomo-programming-nagano-2',
            'ictsc6',
            'icfpc-2016',
            'kodomo-programming-nagano-1',
            'icpc-2016-tsukuba',
            'kodomo-programming-urugi',
            ]
          }
      ],

      '/slides/':[
        {
          title: '2023',
          children: [
            '2023/a',
            '2023/b',
          ]
        },
        {
          title: '2022',
          children: [
            '2022/c',
            '2022/d',
          ]
        }
      ]
    }
    // slideでもsidebar使いたいけど自動でインデックスできないと厳しい。
  }
}

