var helpers = require('./helpers');
var game = require("../src/game");

var describe = helpers.describe;
var context = helpers.context;
var it = helpers.it;

describe("Game", function() {
  describe("#step", function() {
    it("advances", function(assert) {
      var t0 = [];
      var t1 = game.Game.step(t0);
      assert.equal(t0, t1, "Optional message if the test fails");
    });

    context("square of cells", function() {
      it("stays the same", function(assert) {
        // Feel free to change the input type!
        var t0 = [
          [1, 1],
          [1, 1],
        ];
        var t1 = game.Game.step(t0);
        assert.equal(t0, t1);
      });
    });

    context("blinker bar", function() {
      it("blinks", function(assert) {
        // Feel free to change the input type!
        var t0 = [
          [0, 0, 0],
          [1, 1, 1],
          [0, 0, 0],
        ];
        var t1 = game.Game.step(t0);
        // Somehow test that the 3 cells "blinked" to be vertical
        assert.equal(t1, []);

        var t2 = game.Game.step(t1);
        // Expect the cells "blink back" to the starting positions
        assert.equal(t2, t0);
      });
    });
  });
});
