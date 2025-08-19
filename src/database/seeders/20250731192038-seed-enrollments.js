// seeders/20250731165000-seed-enrollments.ts
'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('enrollments', [
      {
        student_id: 1,
        course_instance_id: 1,
        contract_url: 'https://example.com/contrato_ana.pdf',
        signed_at: new Date('2025-02-01'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        student_id: 2,
        course_instance_id: 2,
        contract_url: 'https://example.com/contrato_lucas.pdf',
        signed_at: new Date('2025-08-01'),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('enrollments', null, {});
  },
};
