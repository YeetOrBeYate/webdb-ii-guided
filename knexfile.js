/* 
  This file contains instructions knex needs to connect to the database
*/

module.exports = {

  //how to connect to the development database
  development: {
    client: 'sqlite3',
    useNullAsDefault: true, //only need this when using sqlite3
    connection: {
      filename: './data/produce.db3' //where is that database file, where is it going to be place
    },
    migrations:{
      directory: './data/migrations' //will be created automatically
    },
    seeds:{
      directory: './data/seeds' // 
    }
  },
// how to connect to the staging (testing) database


};
