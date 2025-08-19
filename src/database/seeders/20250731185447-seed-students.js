// seeders/20250731XXXXXX-seed-students.ts
'use strict';

const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    const password = await bcrypt.hash('senha123', 10);

    await queryInterface.bulkInsert('students', [
      {
        name: 'Ana Clara Souza',
        email: 'ana.clara@example.com',
        cpf: '123.456.789-01',
        birth_date: '2001-05-12',
        phone: '(11) 99999-1234',
        password_hash: password,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Lucas Ribeiro',
        email: 'lucas.r@example.com',
        cpf: '987.654.321-00',
        birth_date: '1999-08-25',
        phone: '(11) 98888-4321',
        password_hash: password,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('students', null, {});
  },
};