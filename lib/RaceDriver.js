module.exports = function(id, number, name, group, club) {
	this.id = (id = typeof id !== 'undefined' ? id : null);
	this.number = (number = typeof number !== 'undefined' ? number : null);
	this.name = (name = typeof name !== 'undefined' ? name : null);
	this.group = (group = typeof group !== 'undefined' ? group : null);
	this.club = (club = typeof club !== 'undefined' ? club : null);
}