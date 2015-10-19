'use strict';
var $ = require('jquery');

var $submit = $('#submit');
var $subtotal = $('#subtotal');
var $state = $('#state');
var $result = $('#result');


$submit.on('submit', function (e) {
	e.preventDefault();
	var defaultTax = 0;
	var wisconsin = $state.val().toUpperCase();

	var defaultSub = parseFloat($subtotal.val());
	$result.html('Before Tax Amt: $' + defaultSub.toFixed(2) + ' State: ' + $state.val() + ' Total: $' + defaultSub.toFixed(2));
	
	if (wisconsin === 'WI' || wisconsin === 'WISCONSIN' || wisconsin === 'wisconsin' || wisconsin === 'Wi') {
		defaultTax = 0.055;
		var totalTax = defaultSub * defaultTax;
		var total = totalTax + defaultSub;
		$result.html('Before Tax Amt: $' + defaultSub.toFixed(2) + ' State: ' + $state.val() + ' Subtotal: $' + defaultSub.toFixed(2) +' Tax Amount: $' + totalTax + ' Total: $' + parseFloat(Math.round(total * 100) / 100).toFixed(2));
	}
});