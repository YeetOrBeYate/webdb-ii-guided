
exports.up = function(knex) {
    return knex.schema.createTable('fruits', tbl=>{

        //primary key, called 'id', and integer that autoincrements
        tbl.increments();
        
        tbl.string('name', 255)
        .unique() //unique is a contrint for the db to help us
        .notNullable() 
        .index(); //makes searching for vegetables using this column faster
        tbl.float('avgWeightOz');
        tbl.boolean('TasteScale')
        .defaultTo(true)
    
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('veggies')
};
