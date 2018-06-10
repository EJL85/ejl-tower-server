module.exports = {

    development: {
        client: 'pg',
        connection: "postgres://localhost:/gamers"
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL
    }
};