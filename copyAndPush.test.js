import copyAndPush from './copyAndPush';

describe('copyAndPush', () => {
  it('Returns a new array with all the items in the original array and a new item pushed to the end', () => {
    const numbers = [1, 2, 3];
    const numWithPush = copyAndPush(numbers, 4);
    expect(numWithPush).toEqual([1, 2, 3, 4]);
  });

  it('Makes sure that the original array is unchanged', () => {
    const numbers = [1, 2, 3];
    const numWithPush = copyAndPush(numbers, 100);
    expect(numbers).toEqual([1, 2, 3]);
    expect(numWithPush).toEqual([1, 2, 3, 100]);
  });

});

