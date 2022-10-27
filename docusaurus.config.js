const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'NebulaGraph 图可视化设计规范',
  tagline: '为搭建图数据可视化平台的交互设计规范指南',
  url: 'https://docs.cifangbifang.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'yyh0808', // Usually your GitHub org/user name.
  projectName: 'blog-graphdocs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/yyh0808/blog-graphdocs/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/yyh0808/blog-graphdocs/tree/master/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'support_us',
        content:
          '🎉 欢迎为开源图可视化设计规范贡献力量！<a target="_blank" rel="noopener noreferrer" href="https://github.com/yyh0808/blog-graphdocs">项目地址🌟</a>',
        backgroundColor: '#F2EAFF',
        textColor: '#6200EA',
        isCloseable: false,
      },
      navbar: {
        title: 'NebulaGraph 图可视化设计规范',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '文档',
          },
          {
            to: '/blog', 
            label: '版本说明', 
            position: 'left'
          },
          {
            href: 'https://github.com/yyh0808/blog-graphdocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '文档',
                to: '/docs/Graph-guideline-basestyle',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '官方论坛',
                href: 'https://discuss.nebula-graph.com.cn',
              },
              {
                label: '官方博客',
                href: 'https://www.nebula-graph.com.cn/posts',
              },
              {
                label: '官方Twitter',
                href: 'https://twitter.com/NebulaGraph',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/yyh0808/blog-graphdocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Xiaolang Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
