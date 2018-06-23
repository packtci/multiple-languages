var test = require('tape');

var average = require('./average');

test('average should return the average of a list of numbers', function (t) {
    t.plan(1);

    var actual = average([1,2,3,4,5]);
    var expected = 3;
    t.equal(actual, expected, "actual should equal expected");
});