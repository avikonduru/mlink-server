const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
	task_id: mongoose.ObjectId,
	type: {
		type: String,
	},
	instruction: {
		type: String,
	},
	params: {},
	urgency: {
		type: String,
	},
	response: {},
	callback_url: {
		type: String,
	},
	status: {
		type: String,
	},
	created_at: {
		type: Date,
		default: Date.now,
	},
	completed_at: {
		type: Date,
	},
});

module.exports = mongoose.model('task', TaskSchema);
