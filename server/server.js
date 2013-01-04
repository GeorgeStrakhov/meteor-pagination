Meteor.startup(function() {

	console.log('running');
	for (var i=0; i<40; i++) {
		Lists.insert({text: "number"+i})
	}
});

Meteor.publish("lists", function(page) {
	if(page) {
		console.log(Number(page));
		var n = Number(page);
	  	return Lists.find({},{limit: n});
	}
});