var Examples = (function () {
  var self = {};
  self.init = function () {
    var paper = Raphael('example', 200, 50);
    paper.sparkline([5,1,2,3,4,5]);
  };
  return self;
}());
