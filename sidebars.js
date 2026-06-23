module.exports = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'introduccion',
      label: 'Introducción',
    },
    {
      type: 'doc',
      id: 'inicio',
      label: 'Inicio',
    },
    {
      type: 'category',
      label: 'Abastecimiento',
      items: [
        'existencias/existencias',
        'existencias/relevar',
        'existencias/egresar',
        'existencias/ver-detalles',
      ],
    },
    {
      type: 'doc',
      id: 'devoluciones',
      label: 'Devoluciones',
    },
  ],
};