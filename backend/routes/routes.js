module.exports = server => {

    const connection = require('../database/connection');
    
    server.get('/', (require, response) => {
        response.json({message: 'Bem vindo ao catálogo de séries e filmes'})
    })

    server.get('/games', (require, response) => {
        const sql = '';
        connection.query(sql, (error, res) => {
            if (error){
                return error;
            } console.log("games: ", res);
            response.json(res)
        })
    })
};
