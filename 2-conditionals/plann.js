/* state/op with control flow
  like the previous exercise, but now there is control flow
  control flow checks will read from memory, but not modify it
  your computation can now take several different paths
    it's future behavior depends much more on state's record of past events

*/

{
  { // given
    var b = 3;
    const a = 2;
    let c = 0;
    g = [a, b, c];
    c = g.push(c)
    if (c[2] === c) {
      b = a;
    } else {
      b = c
    }
  }
  { // produce
      var frames = {global: {b: undefined, g: undefined}};
      var objects = {};

    var b = 3;
      frames.global.b = 3

    const a = 2;
      frames.global.a = 2

    let c = 0;
      frames.global.c = 0

    var g = [a, b, c];
      frames.global.g = 'objects.array'
      objects.array = [2, 3, 0]

    c = g.push(c)
      frames.global.c = 4
      objects.array = [2, 3, 0, 0]


    // at the conditional, only one path is taken
    if (c[2] === c) { // undefined === 4 -> false
      b = a;
    } else {
      b = c;
        frames.global.b = 4
    }
  }
}