var m = require('../math')

describe('Testing sum', function(){
  var ans;
  beforeEach(function() {
    ans = m.sum(1, 1)
  });

  it('should add 1 + 1', function() {
    expect(ans).toBe(2);
  });

  // it('should just fail', function() {
  //   expect(true).toBe(false)
  // });
});