// seeders/20250731175000-seed-materials.ts
'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('materials', [
      {
        course_id: 1,
        type: 'pdf',
        title: 'Apostila de Administração - Módulo 1',
        url: 'https://example.com/materials/adm-mod1.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 2,
        type: 'video',
        title: 'Introdução à Lógica de Programação',
        url: 'https://example.com/videos/intro-logica.mp4',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('materials', null, {});
  },
};
