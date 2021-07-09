import Team from '../set';

test('check class Team add 1 obj', () => {
  const bowman = {};
  const whiteTeam = new Team();
  whiteTeam.add(bowman);
  expect(whiteTeam.members.has(bowman)).toBeTruthy();
});

test('check class Team add 2 equal', () => {
  const bowman = {};
  const whiteTeam = new Team();
  whiteTeam.add(bowman);
  expect(() => { whiteTeam.add(bowman); }).toThrow();
});

test('check class Team add all', () => {
  const bowman = {};
  const wizard = {};
  const archer = {};
  const whiteTeam = new Team();
  whiteTeam.addAll(bowman, wizard, archer, bowman);
  expect(whiteTeam.members.size).toBe(3);
});

test('check class Team toArray()', () => {
  const bowman = {};
  const wizard = {};
  const archer = {};
  const whiteTeam = new Team();
  whiteTeam.addAll(bowman, wizard, archer, bowman);
  whiteTeam.toArray();
  expect(Array.isArray(whiteTeam.members)).toBeTruthy();
});
