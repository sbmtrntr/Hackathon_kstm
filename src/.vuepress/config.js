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
      { text: 'Slides', link: '/slides/' },
      { text: 'Blog', link: '/posts/' }
    ],
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
          },
          {
            title: 'Advent Calender',
            children:[
              ['https://qiita.com/advent-calendar/2020/kstm', '2020'],
              ['https://qiita.com/advent-calendar/2019/kstm', '2019'],
              ['https://qiita.com/advent-calendar/2018/kstm', '2018'],
              ['https://qiita.com/advent-calendar/2017/kstm', '2017'],
              ['https://qiita.com/advent-calendar/2016/kstm', '2016']
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
  }
}

