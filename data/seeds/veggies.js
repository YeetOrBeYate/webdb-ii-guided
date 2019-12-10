
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('veggies')
    .truncate()//change del to truncate
    .then(function () {
      // Inserts seed entries
      return knex('veggies').insert([
        { name: 'EggPlant', like_it: true},
        { name: 'Tomato', like_it: false},
        { name: 'Carrot', like_it: null}
      ]);
    });
};
