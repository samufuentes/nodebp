module.exports = function (mongoose){
	var Types = mongoose.Schema.Types;
	var Meetup = new mongoose.Schema(
	{
		id: Types.ObjectId,
		name: {type:String, index:true},
		location: {
			name: String,
			code: String
		},
		owner: {
			name: String,
			email: String
		},
		players: Array,
		when: Date
	}
	);

	return mongoose.model('Meetup', Meetup);
}
