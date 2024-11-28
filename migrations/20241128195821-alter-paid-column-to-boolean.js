'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Passo 1: Criar uma nova tabela com o campo `paid` como booleano
    await queryInterface.createTable('job_temp', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      contractid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contract',
          key: 'id',
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      operationdate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paymentdate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      paid: {
        type: Sequelize.BOOLEAN, // Alterado para BOOLEAN
        allowNull: false,
        defaultValue: false, // Definindo um valor padrão
      },
    });

    // Passo 2: Copiar os dados da tabela antiga para a nova tabela
    await queryInterface.sequelize.query(`
      INSERT INTO job_temp (id, contractid, description, operationdate, paymentdate, price, paid)
      SELECT id, contractid, description, operationdate, paymentdate, price, paid
      FROM job
    `);

    // Passo 3: Excluir a tabela antiga
    await queryInterface.dropTable('job');

    // Passo 4: Renomear a nova tabela para o nome da tabela original
    await queryInterface.renameTable('job_temp', 'job');
  },

  down: async (queryInterface, Sequelize) => {
    // Caso a migration precise ser revertida
    await queryInterface.createTable('job_temp', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      contractid: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Contract',
          key: 'id',
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      operationdate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      paymentdate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      paid: {
        type: Sequelize.INTEGER, // Voltando para INTEGER
        allowNull: false,
      },
    });

    // Copiar os dados de volta para a tabela antiga
    await queryInterface.sequelize.query(`
      INSERT INTO job_temp (id, contractid, description, operationdate, paymentdate, price, paid)
      SELECT id, contractid, description, operationdate, paymentdate, price, paid
      FROM job
    `);

    // Excluir a tabela original
    await queryInterface.dropTable('job');

    // Renomear a tabela temporária para o nome original
    await queryInterface.renameTable('job_temp', 'job');
  }
};
