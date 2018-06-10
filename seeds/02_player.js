exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('player').del()
        .then(function () {
            // Inserts seed entries
            return knex('player').insert([{
                id: 1,
                playerName: 'Ellie',
                gamesPlayed: [1, 2, 3]
            },{
                id: 2,
                playerName: 'Jacqueline',
                gamesPlayed: [2, 3]
            },{
                id: 3,
                playerName: 'Colemen',
                gamesPlayed: [1, 3]
            }]);
        }).then(() => {
            return knex.raw("ALTER SEQUENCE player_id_seq RESTART WITH 4;");
        });
};