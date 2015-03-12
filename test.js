var test  = require('tape'),
    copyOf = require('./.');

test('copyOf', function(t) {
  t.plan(4);

  t.equal(copyOf('Moby Dick'), 'Copy of Moby Dick');
  t.equal(copyOf(copyOf('Moby Dick')), 'Copy 2 of Moby Dick');
  t.equal(copyOf(copyOf(copyOf('Moby Dick'))), 'Copy 3 of Moby Dick');
  t.equal(copyOf('Copy 999 of Moby What'), 'Copy 1000 of Moby What');
});
