doNothing
=========
A Meteor package adding the global variable `doNothing`, storing a function
doing nothing (`function(){}`).

This is similar to [jQuerys noop function](http://api.jquery.com/jquery.noop/).

Purpose and Motivation
----------------------
Some programmers find it more easy to write `doNothing` than `function(){}`. And
while reading the code, `doNothing` will probably make more sense and be easier
to interpret than `function(){}`. Further more, it seems like there's a [gain in
speed](http://jsperf.com/function-doing-nothing) using `doNothing` (assuming the
variale look up time won't take too long). 