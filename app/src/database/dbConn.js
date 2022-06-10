"use strict"

const mariadb = require('mariadb');
const vals = require('../config/consts');

class DBConn {
    constructor(query, params) {
        this.query = query
        this.params = params||""
        this.pool = mariadb.createPool({
            host: vals.DBHost, port:vals.DBPort,
            user: vals.DBUser, password: vals.DBPass,
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
            console.log(err)
            throw err;
        }
        finally{
            if (conn) conn.end();
            return rows;
        }
    }
    
}

module.exports = DBConn