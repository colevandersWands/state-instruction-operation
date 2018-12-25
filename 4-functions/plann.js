{
  {
    let x = [1,2];
    let y = a(x[0], x[1]);
    x.push(y)
    function a(e, b) {
      return e - b
    }
  }
  { // more 'correct'
      var frames = {global: {a: 'func_a'}}
      var objects = {func_a: 'function a(e, b) {return e - b}'}

    let x = [1,2];
      frames.global.x = 'array';
      objects.array = [1, 2]

    let y = a(x[0], x[1]);
      frames.global.y = -1

    x.push(y)
      objects.array = [1, 2, -1]

    function a(e, b) {
        frames.a = {e: 1, b: 2}

        frames.a.ret_val = 1 - 2; 
      return e - b
    }
  }
  { // more 'correct', other
                                  const frames = {global: {a: 'func_a'}}
                                  const objects = {
                                      func_a: 'function a(e, b) {return e - b}'
                                  }
    let x = [1,2];                frames.global.x = 'array';
                                    objects.array = [1, 2]
    let y = a(x[0], x[1]);        frames.global.y = -1

    x.push(y);                    objects.array = [1, 2, -1]

    function a(e, b) {            frames.a = {e: 1, b: 2}
      return e - b;               frames.a.ret_val = 1 - 2; 
    }
  }
}