// Initialize global collection object
Questions = new Mongo.Collection('questions');


// lib runs everywhere - check for server
if (Meteor.isServer) {

	// only seed empty database
	if (Questions.find().count() === 0) {

	  Questions.insert(
	    {text: "Seed Question?"}
	  );
	}	
}


Meteor.methods({
	'insertQuestion': function(q) {
		Questions.insert(q)
	}
});