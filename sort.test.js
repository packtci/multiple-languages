var test = require('tape');

var sort = require('./sort');

test('sort should return a sorted list of names', function (t) {
    t.plan(1);

    var actual = sort([
        {
            name: 'Johnny'
        },
        {
            name: 'Rambo'
        },
        {
            name: 'Goner'
        },
        {
            name: 'Sapo'
        },
        {
            name: 'Donnie'
        }
    ]);
    var expected = [
        {
            name: 'Donnie'
        },
        {
            name: 'Goner'
        },
        {
            name: 'Johnny'
        },
        {
            name: 'Rambo'
        },
        {
            name: 'Sapo'
        }
    ];
    t.deepEqual(actual, expected, 'Should return sorted');
});