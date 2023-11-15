const battleship = require('./battleship.js');

test('test hit increment',() =>{
  const ship = new battleship.Ship();
  const hitCountBefore = ship.hitCount;
  ship.hit();
  expect(ship.hitCount).toBe(hitCountBefore + 1);
});