test("TestAdd", function() {
	equal(42, add(45, -3));
	equal(10, add(9,   1));
	equal(-5, add(-3, -2));
	equal(0,  add(0,   0));
	equal(1,  add(0,   1));
});

test("TestNegative", function() {
	equal(-5, negative(5));
	equal(5,  negative(-5));
});

test("TestSubtract", function() {	
	equal(-5, subtract(3,  8));
	equal(5,  subtract(8,  3));
	equal(0,  subtract(0,  0));
	equal(5,  subtract(0, -5));
});

test("TestMultiply", function() {
	equal(24,  multiply(3,   8));
	equal(-24, multiply(-3,  8));
	equal(-24, multiply(3,  -8));
	equal(0,   multiply(0,   68));
	equal(0,   multiply(0,  -68));
	equal(24,  multiply(-3, -8));
});

test("TestDivide", function() {
	equal(5,    divide(20,  4));
	equal(4,    divide(20,  5));
	equal(0,    divide(4,   20));
	equal(-5,   divide(-20, 4));
	equal(-5,   divide(20, -4));
	equal(true, isNaN(divide(20,0)));
	equal(0,    divide(0,20));
});

test("TestSquare", function() {
	equal(25, square(5));
	equal(25, square(-5));
	equal(0, square(0));
});