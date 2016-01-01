// view.js - Rendering functions

// Define view as a module in wits.
var wits = wits || {};
(function(view) {

var PAD_X = 10.5,
    PAD_Y = 10.5,
    RADIUS = 27,
    HEX_DY = (RADIUS * Math.sqrt(3) / 2),
    DEPTH = 5;

// renderBoard :: Board -> View -> IO ()
view.renderBoard = function(board) {
  var context = board.context;
  context.fillStyle = "#000000";
  context.fillRect(0, 0, board.canvas.width, board.canvas.height);
};

// End module definition for view.
})(wits.view || (wits.view = {}));
