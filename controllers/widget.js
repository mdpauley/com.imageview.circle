/*
 * Diameter must be an even number. If an odd number it will be lowered 1.
 * Position will only be used for the wrapper.
 *
 *
 */

var attrs = {};
exports.attrs = function(args) {
	attrs = args;
};

exports.init = function(args) {
	var args = arguments[0] || {};
	args = _.defaults(attrs, args);

	args.image = args.image || WPATH( 'images/default.png' );
	
	args.diameter = 2 * Math.floor(args.diameter / 2) || 120;
	args.borderWidth = args.borderWidth || 1; 
	args.borderOffset = args.borderOffset || 4;
	
	args.backgroundColor = args.backgroundColor || randomColor(); 
	args.borderColor = args.borderColor || randomColor();
	args.backgroundColor = args.backgroundColor || randomColor();
	
	args.initials = args.initials || "";
	args.font = args.font || {fontSize: $.imageView.borderRadius, fontWeight: 'bold'};
	
	$.wrapperView.height = $.wrapperView.width = parseInt(args.diameter, 10) + args.borderOffset;
	$.imageView.height = $.imageView.width = parseInt(args.diameter, 10);
	$.labelView.height = $.labelView.width = parseInt(args.diameter, 10);
		
	$.imageView.borderRadius = (parseInt(args.diameter, 10) / 2) || 60;
	$.labelView.borderRadius = (parseInt(args.diameter, 10) / 2) || 60;
	$.wrapperView.borderRadius = (parseInt(args.diameter, 10) / 2) || 62;
	$.wrapperView.borderWidth = args.borderWidth;


	var re = /(.png|.jpg)/;
	if (re.test(args.image) && _.isUndefined(args.name)) {
		$.imageView.image = args.image; 
	} else if (args.initials) {
		$.imageView.visible = false;
		$.labelView.visible = true;
		
		$.labelView.backgroundColor = args.backgroundColor;
		$.labelView.color = args.textColor;
		$.wrapperView.borderColor = args.borderColor;
		$.labelView.font = args.font;
		$.labelView.text = args.initials.toUpperCase();
	}

	_.each(args, function(value, key, list) {
		if (_.indexOf(["bottom", "top", "left", "right","backgroundColor", "borderWidth", "borderColor"], key) > -1) {
			$.wrapperView[key] = value;
		}
	});
};

function randomColor() {
  var c = ['0', '1', '2' ,'3' ,'4' ,'5' ,'6' ,'7' ,'8' ,'9', 'A' ,'B' ,'C' ,'D' ,'E' ,'F'];
  var color = "#";
  for(var i=1; i<=6; i++){
  	r = _.random(0, 15);
  	color += c[r];
  }	
  return color;
}
