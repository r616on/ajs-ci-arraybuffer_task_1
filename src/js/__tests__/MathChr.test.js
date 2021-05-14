import Daemon from '../person/Daemon';

test('test MathChr stoned set, get', () => {
  const daemon = new Daemon('Lutik');
  daemon.stoned = true;
  expect(daemon.stoned).toBe(true);
});
test('test MathChr stoned set, get no stouned', () => {
  const daemon = new Daemon('Lutik');
  expect(daemon.stoned).toBe(false);
});
test('test MathChr attack set Base', () => {
  const daemon = new Daemon('Lutik');
  expect(daemon.attack).toBe(10);
});
test('test MathChr attack  stoned distance 2', () => {
  const daemon = new Daemon('Lutik');
  daemon.stoned = true;
  daemon.distance = 2;
  expect(daemon.attack).toBe(4);
});
test('test MathChr attack distance 5', () => {
  const daemon = new Daemon('Lutik');
  daemon.distance = 5;
  expect(daemon.attack).toBe(6);
});

test('test MathChr attack distance 2 stoned', () => {
  const daemon = new Daemon('Lutik');
  daemon.attack = 100;
  daemon.distance = 2;
  daemon.stoned = true;
  expect(daemon.attack).toBe(85);
});
