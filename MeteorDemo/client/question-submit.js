Template.question_submit.events({
	'submit form': function(ev, template) {
		// get value
		var txt = ev.target.question.value;

		// insert into database
		Questions.insert({
			text: txt,
			author: Meteor.user().username
		});

		// clean up after ourselves
		ev.target.question.value = "";
		ev.preventDefault();
	}
});