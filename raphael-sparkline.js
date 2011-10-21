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

  var to_coords = function(value, idx) {
    var step = (graph_width / (data.length-1));
    return {
      y:  -((value-min)/(max-min) * graph_height) + graph_height + graph_opts.padding.top,
      x: padding + idx*step
    };
  };

  _.each(data, function(item, idx) {
    var pt = to_coords(item, idx);
    paper.circle(pt.x, pt.y, graph_opts.point_radius);
  });
};
