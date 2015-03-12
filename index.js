module.exports = function(oldName) {
  var copyOf = /^Copy of /,
      matches,
      n;

  // Copy of X -> Copy 2 of X 
  if (oldName.match(copyOf)) {
    return oldName.replace(copyOf, 'Copy 2 of ');
  }
  // Copy n of X -> Copy n+1 of X
  else if (matches = oldName.match(/^Copy (\d+) of /)) {
    n = 0|matches[1];
    return oldName.replace(matches[0], 'Copy ' + (n + 1) + ' of ');
  }
  // X -> Copy of X
  else {
    return 'Copy of ' + oldName;
  }
}
