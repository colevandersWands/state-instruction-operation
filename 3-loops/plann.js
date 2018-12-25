{
  { // given
    let r = 5;
    let b = 'p';

    for (let i = 0; i < r; i+=2, r++) {
      b += i
    }

    console.log(b)
  }
  { // produce
      var frames = {}
      var objects = {}

    let r = 5;
      frames.global = {}
      frames.global.r = 5

    let b = 'p';
      frames.global.b = 'p'

    {
      let i = 0;
        frames.global.b1_i = 0

      while ( i < r ) {
        b += i
          frames.global.b += frames.global.b1_i
        i+=2, r++;
          frames.global.b1_i += 2
          frames.global.r++
      }
    }

    consle.log(b)
      // statement that does not modify state
  }
  { // produce
                            const frames = {}
                            const objects = {}
    let r = 5;              frames.global = {}
                            frames.global.r = 5
    let b = 'p';            frames.global.b = 'p'
    {
      let i = 0;            frames.global.b1_i = 0
      while ( i < r ) {
        b += i              frames.global.b += frames.global.b1_i
        i+=2, r++;          frames.global.b1_i += 2
                            frames.global.r++
      }
    }

    consle.log(b)
      // statement that does not modify state
  }
}