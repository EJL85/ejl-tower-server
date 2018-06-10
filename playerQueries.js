const database = require("./database-connection");

module.exports = {
    list(){
        return database("player").select();
    },
    read(id){
        return database("player").select().where("id", id).first();
    },
    create(player){
        return database("player")
            .insert(player)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, player){
        return database("player")
            .update(player)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id){
        return database("player").delete().where("id", id);
    }
};