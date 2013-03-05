//code by ldub
//many thanks to the kind folks who wrote this MDN page: 
// - https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/Bitwise_Operators

function add(left, right) {
    while (right) {
        var carry = left & right;
        left = left ^ right;
        right = carry << 1;
    }
    return left;
}

function negative(num) {
	return add(~num, 1);
}

function subtract(left, right) {
	return add(left, negative(right));
}

function multiply(left, right) {
	//if right < 0, then the for loop will never run.
	// the easiest way to fix this is to negate right, and then negate the result
	var negateResult = false;
	if (right < 0) {
		right = negative(right);
		negateResult = true;
	}

	var result = 0;
	for (var i = 0; i < right; i ++) {
		result += left;
	}
	return negateResult ? negative(result) : result;
}

function divide(left, right) {
	if (left === 0) {
		return 0;
	}
	if (right === 0) {
		return NaN;
	}
	
	//if either parameter is negative, this loop doesnt work.
	//in reality, the loop only works if both parameters are positive, so we take the absolute value of both
	// and figure out when to negate the result
	var negateResult = false;
	if (left < 0) {
		negateResult = !negateResult;
		left = negative(left);
	}
	if (right < 0) {
		negateResult = !negateResult;
		right = negative(right);
	}

  	var result = 0;
  	while(left >= right) {
      left = subtract(left, right);
      result = add(result,1);
  	}
  	return negateResult ? negative(result) : result;
}

function square(a) {
	return multiply(a,a);
}