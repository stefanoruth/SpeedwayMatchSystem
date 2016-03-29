module.exports = function(number, name, group, club) {
	this.number = (number = typeof number !== 'undefined' ? number : null);
	this.name = (name = typeof name !== 'undefined' ? name : null);
	this.group = (group = typeof group !== 'undefined' ? group : null);
	this.club = (club = typeof club !== 'undefined' ? club : null);

	this.isset = function(){
		if (this.number != null || this.name != null || this.group != null || this.club != null) {
			return true;
		}
		return false;
	}
}