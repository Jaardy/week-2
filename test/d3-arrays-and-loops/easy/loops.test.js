const spy = jest.spyOn(console, 'log');
require('../../../d3-arrays-and-loops/1-easy/loops');

describe('loop', () => {
  it('logs from 0 to 10 in the console', () => {
    expect(spy).toHaveBeenCalledWith('0 loop');
  });
});
