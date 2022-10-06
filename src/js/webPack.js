function myModule() {
	this.hello = function() {
		console.log('1');
	};
	this.good = function() {
		console.log('2');
	};

}

module.exports = myModule;