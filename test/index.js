'use strict';

const test = require('tape');
const isFunction = require('lodash.isfunction');
const almostEqual = require('almost-equal');

const wathen = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(wathen));
});

test('100 for 10', function(t) {
  t.plan(1);
  t.ok(almostEqual(wathen(100, 10), 134, 1));
});

test('100 for 6', function(t) {
  t.plan(1);
  t.ok(almostEqual(wathen(100, 6), 120, 1));
});
