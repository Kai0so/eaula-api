// seeders/20250731173000-seed-grades.ts
'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('grades', [
      {
        enrollment_id: 1,
        test_name: 'Prova 1',
        grade: 8.5,
        date: new Date('2025-04-15'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        enrollment_id: 2,
        test_name: 'Prova 1',
        grade: 9.0,
        date: new Date('2025-09-15'),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('grades', null, {});
  },
};
