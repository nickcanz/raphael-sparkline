Raphael.fn.sparkline = function (data) {
  var paper = this,
      min = Math.min.apply(Math, data),
      max = Math.max.apply(Math, data),
      graph_opts = {
        point_radius: 1,
        padding: {
          top: 5,
          left: 5,
          bottom: 5,
          right: 5
        },
      },
      graph_width = paper.width - graph_opts.padding.left - graph_opts.padding.right,
      graph_height = paper.height - graph_opts.padding.top - graph_opts.padding.bottom,
      padding = graph_opts.padding.left;

  //outline
  paper.rect(0, 0, 200, 50);

  var to_coords = function(value, idx) {
    var step = (graph_width / (data.length-1));
    return {
      y:  -((value-min)/(max-min) * graph_height) + graph_height + graph_opts.padding.top,
      x: padding + idx*step
    };
  };

  var prev_pt;
  _.each(data, function(item, idx) {
    var pt = to_coords(item, idx);
    if(prev_pt) {
      var path = Raphael.format("M{0},{1}L{2},{3}z", prev_pt.x, prev_pt.y, pt.x, pt.y);
      console.log(path);
      paper.path(path);
    }
    paper.circle(pt.x, pt.y, graph_opts.point_radius);
    prev_pt = pt;
  });
};
