const assert = require("assert").strict;
var expect = require("chai").expect;
const request = require("request");

describe("API functional test --- API must be running for this test---", () => {
  var urlOne = "http://localhost:3000/api/bins/africa";

  it("test africa endpoint", function(done) {
    request(urlOne, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  var urlTwo = "http://localhost:3000/api/bins/type";
  it("test types endpoint", function(done) {
    request(urlTwo, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
  var urlThree = "http://localhost:3000/api/bins/validate/484162/ghana";
  it("test validation endpoint", function(done) {
    request(urlThree, function(error, response, body) {
      expect(response.body).to.equal('{"validate":{"validated":true}}');
      done();
    });
  });
});
