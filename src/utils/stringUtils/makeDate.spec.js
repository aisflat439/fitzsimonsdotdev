import makeDate from './makeDate';

describe('renders a createdDate as MM/DD/YYYY', () => {
  it('renders a createdDate as MM/DD/YYYY', () => {
    const date = '2020-11-28T18:38:39.715Z';

    expect(makeDate(date)).toBe('November 28, 2020');
  });

  it('renders leading month zeros properly', () => {
    const date = '2020-09-01T18:38:39.715Z';

    expect(makeDate(date)).toBe('September 1, 2020');
  });
});
