var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);


describe('GroceryList', function () {
    it('should list ALL GroceryList on /GroceryList GET', function (done) {
        chai.request(server)
            .get('/groceryLists')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('should list a SINGLE GroceryList on /groceryLists/<id> GET');
    it('should add a SINGLE GroceryList on /groceryLists POST');
    it('should update a SINGLE GroceryList on /groceryLists/<id> PUT');
    it('should delete a SINGLE GroceryList on /groceryLists/<id> DELETE');
});