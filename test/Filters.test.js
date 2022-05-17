const Filters = require("../Filters");
const assert = require("assert").strict;
const readJsonBin = require("../readJsonBin");

readJsonBin.getData("./jsonBin.json").then(d => {
  let binData = {};
  binData.bins = d;

  describe("Filter file unit tests", () => {
    it("test africa filter method", function() {
      let Filter = new Filters(binData.bins);
      let bins = Filter.africa();
      assert.equal(bins.ghana.length, 3);
    });

    it("test types filter method", function() {
      let Filter = new Filters(binData.bins);
      let types = Filter.type();
      assert.equal(types.credit.length, 82);
    });

    it("test validation method", function() {
      let testReq = { params: { bin: "484162", country: "ghana" } };
      let Filter = new Filters(binData.bins);
      let validate = Filter.validate(testReq);
      assert.equal(validate.validated, true);
    });
  });
});
