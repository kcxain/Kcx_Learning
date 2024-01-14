// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kcxain\'s Blog',
  staticDirectories: ['static'],
  tagline: '天行健，君子以自强不息。',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://deconx.cn',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kcxain', // Usually your GitHub org/user name.
  projectName: 'Kcx_Learning', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  plugins: [require.resolve("docusaurus-plugin-image-zoom"), 'docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kcxain/Kcx_Learning/tree/master',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // blogSidebarTitle: '最近文章',
          blogSidebarCount: 0,
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl:
            'https://github.com/kcxain/Kcx_Learning/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '潜龙勿用',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        hideOnScroll: true,
        items: [
          {to: '/docs', label: '笔记', position: 'right'},
          {
            label: '博客',
            position: 'right',
            to: '/blog',
            items: [
              {
                label: '归档',
                to: '/blog/archive'
              },
              {
                label: '标签',
                to: '/blog/tags'
              },
            ]
          },
          {to: 'about-me', label: '关于我', position: 'right'},
          {
            label: '更多',
            position: 'right',
            items: [
              {
                label: '读论文',
                href: 'https://kcxain.notion.site/47ce59bd0b5c4ad4b52e3c3e5edcbf1d?v=df363f664ffe493093f511e82d906c82',
              },
              {
                label: '计划复盘',
                href: 'https://kcxain.notion.site/Schedule-97f4f2fd23e94349892d398c7b43bcd1',
              },
            ]
          },
          {
            href: 'https://github.com/kcxain',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
            hideable: true,
            autoCollapseCategories: true,
          },
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: '联系我',
        //     items: [
        //       {
        //         label: 'Email',
        //         href: 'mailto:kcxain@gmail.com'
        //       },
        //       {
        //         label: 'Github',
        //         href: 'https://github.com/kcxain'
        //       },
        //       {
        //         label: '知乎',
        //         href: 'https://www.zhihu.com/people/deconx',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/kecxain',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Kcxain. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust', 'java', 'python', 'go', 'sql'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'WBXP35154X',
        // Public API key: it is safe to commit it
        apiKey: '45a06c3a49a273c8a55c0a335c9e1c03',
        indexName: 'deconx',
        // Optional: see doc section below
        contextualSearch: true,
        // Optional: Algolia search parameters
        searchParameters: {},
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
        //... other Algolia params
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
      socials: {
        github: 'https://github.com/kcxain',
        twitter: 'https://twitter.com/kecxain',
        qq: 'tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=1067017428&website=www.oicqzone.com',
        zhihu: 'https://www.zhihu.com/people/deconx',
      },
    }),
};

module.exports = config;