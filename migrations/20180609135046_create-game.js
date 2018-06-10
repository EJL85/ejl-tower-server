exports.up = function(knex, Promise) {
    return knex.schema.createTable('game', (table) => {
        table.increments();
        table.text('gameName');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('game')
};
