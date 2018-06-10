exports.up = function(knex, Promise) {
    return knex.schema.createTable('player', (table) => {
        table.increments();
        table.text('playerName');
        table.specificType('gamesPlayed', 'INT[]');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('player')
};
