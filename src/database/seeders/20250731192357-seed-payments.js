// seeders/20250731171000-seed-payments.ts
'use strict';

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('payments', [
      {
        enrollment_id: 1,
        due_date: '2025-03-10',
        amount: 450.00,
        status: 'paid',
        paid_at: new Date('2025-03-05'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        enrollment_id: 2,
        due_date: '2025-09-10',
        amount: 450.00,
        status: 'pending',
        paid_at: null,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('payments', null, {});
  },
};
