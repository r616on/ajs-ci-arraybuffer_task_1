import Magician from '../person/Magician';

test('test Magician', () => {
  const data = { inAttack: 10, defence: 40, type: 'Magician' };
  expect(new Magician('pers')).toEqual(expect.objectContaining(data));
});
