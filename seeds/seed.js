/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('shopping_cart').insert([
    {name: 'beef', quantity:'1'},
    {name: 'pork', quantity:'1'},
    {name: 'kale', quantity:'1'},
    {name: 'egg', quantity:'1'},
  ]);
};
