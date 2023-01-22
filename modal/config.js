require('dotenv').config();
const log=console.log;
const path=require('path');
const fs=require('fs-extra');
const mysql=require('mysql2');
const { resolve }=require('path');
const { rejects }=require('assert');

const cs={
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}

const pool=mysql.createPool(cs);

function runsql(sql, values=[]) {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, rows, fields) => {
      if (err) return reject(err.message);
      return resolve(rows, fields)
    })
  })
}

module.exports={
  runsql
}