"use strict"

const mariadb = require('mariadb');

class DBConn {
    constructor(query, params) {
        this.query = query
        this.params = params||""
        this.pool = mariadb.createPool({
            host: process.env.DB_HOST, 
            port: process.env.DB_PORT,
            user: process.env.DB_USER, 
            password: process.env.DB_PASS,
            connectionLimit: 5
        });
    }

    async execute() {
        let conn, rows
        try{
            conn = await this.pool.getConnection();
            conn.query('use ssab');
            if(this.params){
                rows = await conn.query(this.query,this.params);
            } else {
                rows = await conn.query(this.query);
            }
        }
        catch(err){
            console.log("=========================")
            console.log("DB ERROR :: ",err)
            console.log("=========================")
        }
        finally{
            if (conn) conn.end();
            return rows;
        }
    }
    
}

module.exports = DBConn