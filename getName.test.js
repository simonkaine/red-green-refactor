import getName from './getName';

describe('getName', () => {
  it('Returns the name property of an object', () => {
    const spot = getName({ name: 'spot', age: 5, weight: '20 lbs' });
    expect(spot).toEqual('spot');
  });

  it('Returns the name Aang property of an object', () => {
    const character = getName({ _id: '5cf5679a915ecad153ab68c9', name: 'Aang' });
    expect(character).toEqual('Aang');
  });
});
