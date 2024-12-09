/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('shopping_cart', (table) => {
    table.increments('id').primary().notNullable()
    table.text('name', 128).notNullable()
    table.integer('quantity').notNullable()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('shopping_cart')
};
