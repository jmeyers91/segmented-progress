const segmentedProgress = require('../index');

describe('Segmented progress', () => {
  test('Should return an array with length equal to the passed segment count', () => {
    expect(segmentedProgress(0, 100, 10).length).toEqual(10);
  });

  test('Should return correct ratios', () => {
    expect(segmentedProgress(0, 100, 10)).toEqual([
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ]);

    expect(segmentedProgress(50, 100, 10)).toEqual([
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      0,
      0,
      0,
    ]);

    expect(segmentedProgress(75, 100, 10)).toEqual([
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.5,
      0,
      0,
    ]);

    expect(segmentedProgress(7.5, 10, 10)).toEqual([
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0.5,
      0,
      0,
    ]);

    expect(segmentedProgress(100, 100, 10)).toEqual([
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
    ]);

    expect(segmentedProgress(20, 50, 5)).toEqual([
      1,
      1,
      0,
      0,
      0,
    ]);
  })
});
