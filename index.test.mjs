import beThere from '.';

describe('passing checks', () => {
  test('empty object', () => {
    beThere({});
  });

  test('primitives', () => {
    beThere(false);
    beThere(0);
    beThere('');
    beThere(Symbol(''));
  });

  test('simple object', () => {
    beThere({ key: 'value' });
  });
});

describe('failures', () => {
  test('null argument', () => {
    expect(() => beThere(null)).toThrow();
  });

  test('undefined argument', () => {
    expect(() => beThere(undefined)).toThrow();
  });

  test('null properties', () => {
    expect(() => beThere({ x: null, y: '', z: null }))
      .toThrow(/null: x, z/);
  });

  test('undefined properties', () => {
    expect(() => beThere({ x: undefined, y: '', z: undefined }))
      .toThrow(/undefined: x, z/);
  });
});
