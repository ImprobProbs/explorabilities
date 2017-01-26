const chai = require('chai');
const request = require('request');
const User = require('../server/db/users.js');

describe('Database functionality', function() {
  describe('Users', function() {
    it('It should create a user on a post request to /users/create', function(done) {
      request({
        method: 'POST',
        uri: 'http://127.0.0.1:3000/users/create',
        json: {
          email: 'fortysixandtwo@hotmail.com',
          password: 'acoolpw123!'
        }
      })
      .on('response' , function (res) {
        chai.expect(res.statusCode).to.equal(201);

        User.findOne({
          where: {
            email: 'fortysixandtwo@hotmail.com'
          }
        }).then(function(user) {
          chai.expect(user.email).to.equal('fortysixandtwo@hotmail.com');
          chai.expect(user).to.not.be.undefined;
          user.destroy();
          done();
        });
      });
    });
  });
});
