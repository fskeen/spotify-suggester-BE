
exports.up = function(knex) {
    return knex.schema.createTable('accounts', account => {
        account.increments();
        account.string('name', 255)
            .notNullable();
        account.string('email', 255)
            .notNullable()
            .unique();
        account.string('password', 255)
            .notNullable();
    })
    .createTable('saved_music', list => {
        list.increments();
        list.
    })
};

exports.down = function(knex) {
    knex.schema
  
};
