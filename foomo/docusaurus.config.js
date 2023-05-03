// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// const lightCodeTheme = require('prism-react-renderer/themes/github');
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'foomo project docs',
  tagline: 'Stuff we wrote, because nobody else wanted to',
  url: "https://www.foomo.org",
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'foomo', // Usually your GitHub org/user name.
  projectName: 'foomo-docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: true,
          editUrl: 'https://github.com/foomo/foomo-docs/tree/main/foomo',
        },
        blog: {
          showReadingTime: false,
          editUrl: 'https://github.com/foomo/foomo-docs/tree/main/foomo',
        },
        pages: {

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
    '@saucelabs/theme-github-codeblock'
  ],//, '@docusaurus/theme-search-algolia'],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        
      },
      algolia: {
        appId: 'SUATUVZDDM',
        // it is ok, for this one to be public ;)
        apiKey: 'bf192386dc479eb899739a77eefe0bf6',
        indexName: 'foomo',
      },
      navbar: {
        title: 'foomo',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'general/index',
            position: 'left',
            label: 'General',
            
          },
          {
            type: 'doc',
            docId: 'frontend/index',
            position: 'left',
            label: 'Frontend',
            
          },
          {
            type: 'doc',
            docId: 'backend/index',
            position: 'left',
            label: 'Backend',
          },
          {
            type: 'doc',
            docId: 'devops/index',
            position: 'left',
            label: 'DevOps',
          },
          {
            type: 'doc',
            docId: 'projects/index',
            position: 'left',
            label: 'Projects',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        
        links: [
          {
            title: 'github',
            items: [
              {
                label: 'https://github.com/foomo',
                to: 'https://github.com/foomo',
                
              },
            ],
          },
          {
            title: 'legal',
            items: [
              {
                label: 'Imprint',
                to: '/etc/imprint',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `© ${new Date().getFullYear()} bestbytes`,
      
      },
      // algolia: {
      //   contextualSearch: true,
      // }
      prism:  {
        additionalLanguages: ['go'],
      },
    }),
};

module.exports = config;
