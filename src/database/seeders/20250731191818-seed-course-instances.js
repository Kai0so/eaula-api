// seeders/20250731163000-seed-course-instances.ts
'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('course_instances', [
      {
        course_id: 1, // precisa bater com um course existente
        year: 2025,
        semester: 1,
        start_date: '2025-02-15',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        course_id: 2,
        year: 2025,
        semester: 2,
        start_date: '2025-08-10',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('course_instances', null, {});
  },
};
