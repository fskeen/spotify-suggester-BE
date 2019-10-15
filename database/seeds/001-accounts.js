
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('accounts').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('accounts').insert([
        {id: 1, name: 'Eleanor', email: 'garbagebin@gmail.com', password: '$2a$08$USCJTQuc3zX4p8xZql4v4.6PHQYYAvmk/cCxX/faqQCFByY6hPrb.'},
        {id: 2, name: 'Tahani', email: 'tahani@tahani.org', password: '$2a$08$uWLwXvU0nshMAhgHL/YbE.wg0s1cEClBj0s9iug4lPKd2OIOjLosK'},
        {id: 3, name: 'Chidi', email: 'canagonye@melbourne.edu', password: '$2a$08$0LnF.WQsTsEXPx8CdYbTH.bFMHDiY8mmS4w58Z8P2NLQqH6VmXJ1q'},
        {id: 4, name: 'Jason', email: 'XxBlakeBortlesRulesxX@yahoo.com', password: '$2a$08$02QBoBDzBxNTIbGtRYeBguGKrKQnIBkl6c3gU5kye43rQLJ4wL0.O'}
      ]);
    });
};
