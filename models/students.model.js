var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var studentSchema = new Schema({
	fullName: {
		type: String
	},
	otherIdentifier: {
		type: String
	},
	certificateId: {
		type: String
	},
	email: {
		type: String
	},
	isCertificateEmailed: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Students' ,studentSchema);
