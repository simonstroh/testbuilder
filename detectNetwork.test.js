/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num % 2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num % 2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var expect = chai.expect;


  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a lenght of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });


  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten
  // these tests to pass using should syntax, refactor your tests to
  // use either expect or should, but not both.
  var expect = chai.expect;

  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011017340874058')).to.equal('Discover')
  });
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011027834097245087')).to.equal('Discover')
  });
  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6580293785982745')).to.equal('Discover')
  });
  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6509238408720485724')).to.equal('Discover')
  })
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '9385028450973')).to.equal('Discover')
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1938405298745072')).to.equal('Discover')
      });
    })(prefix)
  }
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect

  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork('501834972052')).to.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork('5018349720521')).to.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork('50183497205112')).to.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork('501834972111052')).to.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork('5018349721111052')).to.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork('50183497211111052')).to.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork('501834972011111152')).to.equal('Maestro')
  });
  it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork('5018349721111110512')).to.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork('502034972052')).to.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork('5020034972052')).to.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork('50200034972052')).to.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork('502000034972052')).to.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork('5020000003497052')).to.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork('50200000003497052')).to.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork('502000000003492052')).to.equal('Maestro')
  });
  it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork('5020000000003497052')).to.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork('503834972052')).to.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork('5038234972052')).to.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork('50383149272052')).to.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork('503834119272052')).to.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork('5038341112972052')).to.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork('50383491112172052')).to.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork('503834911112172052')).to.equal('Maestro')
  });
  it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork('5038349711112112052')).to.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork('630434972052')).to.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork('6304034972052')).to.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork('63040034972052')).to.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork('630400034972052')).to.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork('6304000034972052')).to.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork('63040000034972052')).to.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork('630400000034972052')).to.equal('Maestro')
  });
  it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork('6304349720523333333')).to.equal('Maestro')
  });
});

describe('should support China UnionPay', function(){
  var expect = chai.expect
  for(var prefix = 622126; prefix <= 622925; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1304850294')).to.equal('China UnionPay')
      })
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '31471038940')).to.equal('China UnionPay')
      })
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '310928401834')).to.equal('China UnionPay')
      })
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '1309483294854')).to.equal('China UnionPay')
      })
    })(prefix)
  }
  for(var prefix = 624; prefix <= 626; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '1734897129337')).to.equal('China UnionPay')
      })
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '23785027452455')).to.equal('China UnionPay')
      })
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '203750284755555')).to.equal('China UnionPay')
      })
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '2037850298450900')).to.equal('China UnionPay')
      })
    })(prefix)
  }
  for(var prefix = 6282; prefix <= 6288; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix + '429873498275')).to.equal('China UnionPay')
      })
      it('has a prefix of ' + prefix + ' and a length of 17', function() {
        expect(detectNetwork(prefix + '3124380918350')).to.equal('China UnionPay')
      })
      it('has a prefix of ' + prefix + ' and a length of 18', function() {
        expect(detectNetwork(prefix + '31243809318350')).to.equal('China UnionPay')
      })
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix + '312438091833350')).to.equal('China UnionPay')
      })
    })(prefix)
  }
})
describe('should support Switch', function() {
  var expect = chai.expect
  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903209302903093')).to.equal('Switch')
  })
  it('has a prefix of 4903 and a length of 18', function() {
    expect(detectNetwork('490320933302903093')).to.equal('Switch')
  })
  it('has a prefix of 4903 and a length of 19', function() {
    expect(detectNetwork('4903233309302903093')).to.equal('Switch')
  })
  it('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905209302903093')).to.equal('Switch')
  })
  it('has a prefix of 4905 and a length of 18', function() {
    expect(detectNetwork('490555209302903093')).to.equal('Switch')
  })
  it('has a prefix of 4905 and a length of 19', function() {
    expect(detectNetwork('4905555209302903093')).to.equal('Switch')
  })
  it('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911209302903093')).to.equal('Switch')
  })
  it('has a prefix of 4911 and a length of 18', function() {
    expect(detectNetwork('491111209302903093')).to.equal('Switch')
  })
  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911111209302903093')).to.equal('Switch')
  })
  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936209302903093')).to.equal('Switch')
  })
  it('has a prefix of 4936 and a length of 18', function() {
    expect(detectNetwork('493620933302903093')).to.equal('Switch')
  })
  it('has a prefix of 4936 and a length of 19', function() {
    expect(detectNetwork('4936209333302903093')).to.equal('Switch')
  })
  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641829302903093')).to.equal('Switch')
  })
  it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182933302903093')).to.equal('Switch')
  })
  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641829333302903093')).to.equal('Switch')
  })
  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331109302903093')).to.equal('Switch')
  })
  it('has a prefix of 633110 and a length of 18', function() {
    expect(detectNetwork('633110339302903093')).to.equal('Switch')
  })
  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331109333302903093')).to.equal('Switch')
  })
  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333109302903093')).to.equal('Switch')
  })
  it('has a prefix of 6333 and a length of 18', function() {
    expect(detectNetwork('633313309302903093')).to.equal('Switch')
  })
  it('has a prefix of 6333 and a length of 19', function() {
    expect(detectNetwork('6333109333302903093')).to.equal('Switch')
  })
  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759109302903093')).to.equal('Switch')
  })
  it('has a prefix of 6759 and a length of 18', function() {
    expect(detectNetwork('675910933302903093')).to.equal('Switch')
  })
  it('has a prefix of 6759 and a length of 19', function() {
    expect(detectNetwork('6759109303332903093')).to.equal('Switch')
  })
})
