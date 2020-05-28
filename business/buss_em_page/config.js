const config = {
 
  encoding: "UTF-8",

  max_number: 17,

  showMessage: false,

  // Auto Sort by Time
  // Please ensure using standard datetime format (YYYY-MM-DD HH:MM) when this term is enabled!!!
  auto_sort: false,

  timeFormat: "%Y-%m-%d",

  reverse: false,

  divide_by: "type",

  divide_color_by: "type",

  color: {
    Chinese: "#1177CC",
    Japanese: "#667788"
  },


  changeable_color: false,

  divide_changeable_color_by_type: false,
  color_range: ["#ff7e5f", "#feb47b"],

  
  itemLabel: "左侧文字",


  typeLabel: "右侧文字",

  item_x: 100,

  
  interval_time: 1,


  text_y: -50,


  text_x: 1000,

  offset: 350,


  display_barInfo: 0,


  use_counter: false,

  step: 1,


  // Formatted value
  format: ",.2f",

  postfix: "",


  deformat: function(val, postfix) {
    return Number(val.replace(postfix, "").replace(/\,/g, ""));
  },

  // The space between left, right, top and bottom of the chart
  left_margin: 165,
  right_margin: 165,
  top_margin: 40,
  bottom_margin: 20,

  // Whether to open the time label.
  dateLabel_switch: true,

  dateLabel_x: null,
  dateLabel_y: null,

  allow_up: false,

  always_up: false,

  enter_from_0: true,

  //if all the Numbers are too big to pull apart, turn this on and transform the origin to (minimum) *2- (maximum)
  big_value: true,

  use_semilogarithmic_coordinate: false,

  long: false,

  wait: 0,

  // Control the switching animation speed multiplier separately
  update_rate: 0.8,

  // Turn on uniform animation
  // animation:'linear',
  showLabel: false,

  labelx: -10,

  use_img: false,

  background_color: "#DEE1DD",

  rounded_rectangle: false,

  // Whether to display the X-axis axis
  show_x_tick: true,

  // limit bar info display length
  bar_name_max: 80
};
