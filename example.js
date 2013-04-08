var Examples = (function () {
  var self = {};
  self.init = function () {
    var paper = Raphael.fromJquery($('#example'));

    var data = [];
    for(var i=0;i<100;i++) {
      data.push(Math.floor(Math.random() * 100));
    }

    paper.sparkline(data);
  };
  
  self.init2 = function() {
    var paper = Raphael.fromJquery($('#example2'));

    paper.sparkline([50,50,50]);
  };
  return self;
}());
