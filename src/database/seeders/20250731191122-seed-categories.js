// seeders/20250731161000-seed-categories.ts
'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Educação',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Saúde',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Engenharia',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Direito',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Comércio',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Financeiro',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Empresarial',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Ambiental',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Música',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Alimentícia',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Tecnologia',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Social',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Arquitetura',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('categories', null, {});
  },
};
