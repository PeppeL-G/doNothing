Tinytest.add('general', function (test){
	
	// Check that the variable doNothing has been exported.
	test.notEqual(typeof(doNothing), 'undefined')
	
	// Check that the variable doNothing actually is a function.
	test.instanceOf(doNothing, Function)
	
})