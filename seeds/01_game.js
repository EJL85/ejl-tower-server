exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('game').del()
        .then(function () {
            // Inserts seed entries
            return knex('game').insert([{
                id: 1,
                gameName: 'Bloodborne'
            },{
                id: 2,
                gameName: 'Overwatch'
            },{
                id: 3,
                gameName: 'Quake'
            }]);
        }).then(() => {
            return knex.raw("ALTER SEQUENCE game_id_seq RESTART WITH 4;");
        });
};