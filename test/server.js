var expect  = require("chai").expect;
var should = require("chai").should();
var request = require("request");

describe("Server response", function() {
    var url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";
    it("returns status 500", function(done) {
      request(url, function(error, response, body) {
        
        done();
      });
    });
});
