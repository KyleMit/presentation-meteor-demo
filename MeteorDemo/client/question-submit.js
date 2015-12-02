Template.question_submit.events({
	'submit form': function(ev, template) {
		// get value
		var txt = ev.target.question.value;

		// insert into database
		var question = {
			text: txt,
			author: Meteor.user().username
		}
		Meteor.call('insertQuestion', question)

		// clean up after ourselves
		ev.target.question.value = "";
		ev.preventDefault();
	}
});