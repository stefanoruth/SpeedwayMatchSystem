var expect = require('chai').expect;
var chai = require('chai');
var RaceMatch = require('../lib/RaceMatch.js');

describe('Demo Race', function(){
	it('a race object', function(){
		var match = new RaceMatch();
		expect(match.title).to.be.a('string');
		expect(match.title).to.equal('Speedway');
	});

	it('checks the number of drivers', function(){
		var match = new RaceMatch();
		match.setDrivers(4);

		expect(match.drivers).to.have.length(4);
	})

	it('should run a 4 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(4).race()).eql([
			[1,4,2,3],
			[2,1,3,4],
			[3,2,4,1],
			[4,3,1,2],
		]);
	});

	it('should run a 5 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(5).race()).eql([
			[1,5,3,4],
			[2,1,4,5],
			[3,2,5,1],
			[4,3,1,2],
			[5,4,2,3],
		]);
	});

	it('should run a 6 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(6).race()).eql([
			[1,6,4,2],
			[2,1,5,3],
			[3,2,6,4],
			[4,3,1,5],
			[5,4,2,6],
			[6,5,3,1],
		]);
	});

	it('should run a 7 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(7).race()).eql([
			[1,7,5,2],
			[2,1,6,3],
			[3,2,7,4],
			[4,3,1,5],
			[5,4,2,6],
			[6,5,3,7],
			[7,6,4,1],
		]);
	});

	it('should run a 8 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(8).race()).eql([
			[1,8,6,3],
			[2,1,7,4],
			[3,2,8,5],
			[4,3,1,6],
			[5,4,2,7],
			[6,5,3,8],
			[7,6,4,1],
			[8,7,5,2],
		]);
	});

	it('should run a 9 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(9).race()).eql([
			[1,9,7,4],
			[2,1,8,5],
			[3,2,9,6],
			[4,3,1,7],
			[5,4,2,8],
			[6,5,3,9],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
		]);
	});

	it('should run a 10 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(10).race()).eql([
			[1,10,8,5],
			[2,1,9,6],
			[3,2,10,7],
			[4,3,1,8],
			[5,4,2,9],
			[6,5,3,10],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
		]);
	});

	it('should run a 11 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(11).race()).eql([
			[1,11,9,6],
			[2,1,10,7],
			[3,2,11,8],
			[4,3,1,9],
			[5,4,2,10],
			[6,5,3,11],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
		]);
	});

	it('should run a 12 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(12).race()).eql([
			[1,12,10,7],
			[2,1,11,8],
			[3,2,12,9],
			[4,3,1,10],
			[5,4,2,11],
			[6,5,3,12],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
			[12,11,9,6],
		]);
	});

	it('should run a 13 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(13).race()).eql([
			[1,13,11,8],
			[2,1,12,9],
			[3,2,13,10],
			[4,3,1,11],
			[5,4,2,12],
			[6,5,3,13],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
			[12,11,9,6],
			[13,12,10,7],
		]);
	});

	it('should run a 14 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(14).race()).eql([
			[1,14,12,9],
			[2,1,13,10],
			[3,2,14,11],
			[4,3,1,12],
			[5,4,2,13],
			[6,5,3,14],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
			[12,11,9,6],
			[13,12,10,7],
			[14,13,11,8],
		]);
	});

	it('should run a 15 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(15).race()).eql([
			[1,15,13,10],
			[2,1,14,11],
			[3,2,15,12],
			[4,3,1,13],
			[5,4,2,14],
			[6,5,3,15],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
			[12,11,9,6],
			[13,12,10,7],
			[14,13,11,8],
			[15,14,12,9],
		]);
	});

	it('should run a 16 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(16).race()).eql([
			[1,16,14,11],
			[2,1,15,12],
			[3,2,16,13],
			[4,3,1,14],
			[5,4,2,15],
			[6,5,3,16],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
			[12,11,9,6],
			[13,12,10,7],
			[14,13,11,8],
			[15,14,12,9],
			[16,15,13,10],
		]);
	});

	it('should run a 17 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(17).race()).eql([
			[1,17,15,12],
			[2,1,16,13],
			[3,2,17,14],
			[4,3,1,15],
			[5,4,2,16],
			[6,5,3,17],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
			[12,11,9,6],
			[13,12,10,7],
			[14,13,11,8],
			[15,14,12,9],
			[16,15,13,10],
			[17,16,14,11],
		]);
	});

	it('should run a 18 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(18).race()).eql([
			[1,18,16,13],
			[2,1,17,14],
			[3,2,18,15],
			[4,3,1,16],
			[5,4,2,17],
			[6,5,3,18],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
			[12,11,9,6],
			[13,12,10,7],
			[14,13,11,8],
			[15,14,12,9],
			[16,15,13,10],
			[17,16,14,11],
			[18,17,15,12],
		]);
	});

	it('should run a 19 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(19).race()).eql([
			[1,19,17,14],
			[2,1,18,15],
			[3,2,19,16],
			[4,3,1,17],
			[5,4,2,18],
			[6,5,3,19],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
			[12,11,9,6],
			[13,12,10,7],
			[14,13,11,8],
			[15,14,12,9],
			[16,15,13,10],
			[17,16,14,11],
			[18,17,15,12],
			[19,18,16,13],
		]);
	});

	it('should run a 20 persons race', function(){
		var match = new RaceMatch();
		
		expect(match.setDrivers(20).race()).eql([
			[1,20,18,15],
			[2,1,19,16],
			[3,2,20,17],
			[4,3,1,18],
			[5,4,2,19],
			[6,5,3,20],
			[7,6,4,1],
			[8,7,5,2],
			[9,8,6,3],
			[10,9,7,4],
			[11,10,8,5],
			[12,11,9,6],
			[13,12,10,7],
			[14,13,11,8],
			[15,14,12,9],
			[16,15,13,10],
			[17,16,14,11],
			[18,17,15,12],
			[19,18,16,13],
			[20,19,17,14],
		]);
	});
});