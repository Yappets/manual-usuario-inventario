// Configuración del manual de usuario de Inventario.
const config = {
  title: 'Sistema de Gestión de Inventario',
  tagline: 'Manual de usuario · Oficinas, relevamiento, existencias y reportes',
  url: 'https://example.com', // Reemplazar por el dominio real al publicar.
  baseUrl: '/',
  onBrokenLinks: 'throw',
  i18n: {defaultLocale: 'es', locales: ['es']},
  presets: [['classic', {
    docs: {routeBasePath: '/', sidebarPath: './sidebars.js', editUrl: undefined},
    blog: false,
    theme: {customCss: './src/css/custom.css'}
  }]],
  themeConfig: {
    navbar: {title: 'Manual de Sistema de Inventario', items: []},
    footer: {style: 'dark', copyright: 'Sistema de Gestión de Inventario · Aguas del Norte'},
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true}
  }
};
export default config;
