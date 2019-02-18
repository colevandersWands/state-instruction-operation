/* computation: st -> op -> st -> ... -> op -> st
  basically, what you saw before. but now with these words
  
*/

// exercise: combo expansion and step-through
//  kinna like expansions but for more whole scripts scripts
//  operations are now entire statements, and state is global not just step_n vars
// works really well with pythontutor
// they're given scripts with fixed values
//  don't do too many of these
//  this ex won't have a dynamic portion, defeats the purpose
{
  {
    let a = 3;
    let b = 2;
    const x = a % b;
    let y = a - x;
    const g = [a, b, x, y]
    y = g[b]
    g.pop();
    var s = g;
  }
  {
      const  frames = {global: {s: undefined}};
      const objects = {};
    
    let a = 3;
      frames.global.a = 3;

    let b = 2;
      frames.global.b = 2;

    const x = a % b;
      frames.global.x = 1;

    let y = a - x;
      frames.global.y = 2;

    const g = [a, b, x, y]
      objects.arr_1 = [3, 2, 1, 2]
      frames.global.g = 'arr_1'

    y = g[b]
      frames.global.y = 1

    g.pop();
      objects.arr_1 = [3, 2, 1]

    var s = g;
      frames.global.s = 'arr_1'
  }
  { // or
    // operation                state
                                const frames = {global: {s: undefined}};
                                const objects = {};
    let a = 3;                  frames.global.a = 3;
    let b = 2;                  frames.global.b = 2;
    const x = a % b;            frames.global.x = 1;
    let y = a - x;              frames.global.y = 2;
    const g = [a, b, x, y];     objects.arr_1 = [3, 2, 1, 2]
                                frames.global.g = 'arr_1'
    y = g[b];                   frames.global.y = 1
    g.pop();                    objects.arr_1 = [3, 2, 1]
    var s = g;                  frames.global.s = 'arr_1'
  }
  { // or
                                const frames = {global: {s: undefined}};
                                const objects = {};

    let a = 3;                  frames.global.a = 3;

    let b = 2;                  frames.global.b = 2;

    const x = a % b;            frames.global.x = 1;

    let y = a - x;              frames.global.y = 2;

    const g = [a, b, x, y];     objects.arr_1 = [3, 2, 1, 2]
                                  frames.global.g = 'arr_1'

    y = g[b];                   frames.global.y = 1

    g.pop();                    objects.arr_1 = [3, 2, 1]

    var s = g;                  frames.global.s = 'arr_1'
  }
  { // or ... naht so much.  script should be primary
    // state                          operation
    const frames = {
      global: {s: undefined}
    };
    const objects = {};               let a = 3;
    frames.global.a = 3;              let b = 2;
    frames.global.b = 2;              const x = a % b;
    frames.global.x = 1;              let y = a - x;
    frames.global.y = 2;              const g = [a, b, x, y];
    objects.arr_1 = [3, 2, 1, 2]
    frames.global.g = 'arr_1'

    y = g[b];                   frames.global.y = 1

    g.pop();                    objects.arr_1 = [3, 2, 1]

    var s = g;                  frames.global.s = 'arr_1'
  }
}











