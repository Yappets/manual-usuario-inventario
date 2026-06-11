// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manual de Usuario',
  tagline: 'Sistema de Gestión de Inventarios',
  favicon: 'img/logo-inventario.png',

  future: {
    v4: true,
  },

  // Cambiar cuando tengas la URL real de producción
  url: 'https://manual-inventario.example.com',
  baseUrl: '/',

  organizationName: 'aguas-del-norte',
  projectName: 'manual-inventario',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/logo-inventario.png',

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Manual de Usuario',
        logo: {
          alt: 'Logo Sistema de Inventario',
          src: 'img/logo-inventario.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Manual',
            items: [
              {
                label: 'Introducción',
                to: '/docs/introduccion',
              },
              {
                label: 'Inicio',
                to: '/docs/inicio',
              },
              {
                label: 'Existencias',
                to: '/docs/existencias/',
              },
              {
                label: 'Relevar',
                to: '/docs/existencias/relevar',
              },
              {
                label: 'Egresar',
                to: '/docs/existencias/egresar',
              },
              {
                label: 'Ver detalles',
                to: '/docs/existencias/ver-detalles',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Aguas del Norte. Sistema de Gestión de Inventarios.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;