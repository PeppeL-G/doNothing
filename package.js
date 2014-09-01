Package.describe({
	summary: "Adds the global variable doNothing, storing a function doing nothing.",
	version: "1.0.0",
	git: " \* Fill me in! *\ "
})

Package.onUse(function(api){
	api.versionsFrom('METEOR@0.9.0.1')
	api.addFiles('main.js')
	api.export('doNothing')
})

Package.onTest(function(api){
	api.use('tinytest')
	api.use('peppelg:do-nothing')
	api.addFiles('tests.js')
})