module.exports = function(number, name, group, club) {
	this.number = (number = typeof number !== 'undefined' ? number : '');
	this.name = (name = typeof name !== 'undefined' ? name : '');
	this.group = (group = typeof group !== 'undefined' ? group : '');
	this.club = (club = typeof club !== 'undefined' ? club : '')
	this.id = null;

	this.isset = function(){
		if (this.number != '' || this.name != '' || this.group != '' || this.club != '') {
			return true;
		}
		return false;
	}

	this.setId = function(id){
		this.id = id;

		return this;
	}
}