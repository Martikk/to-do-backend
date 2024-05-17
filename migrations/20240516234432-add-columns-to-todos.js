'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Todos', 'due_date', {
      type: Sequelize.DATE,
      allowNull: true,
    });
    await queryInterface.addColumn('Todos', 'category', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Todos', 'priority', {
      type: Sequelize.ENUM('High', 'Medium', 'Low'),
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Todos', 'due_date');
    await queryInterface.removeColumn('Todos', 'category');
    await queryInterface.removeColumn('Todos', 'priority');
  }
};
