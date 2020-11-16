const { rnd, alphaup, alphalow } = require('./utils');
const letters1 = require('./static/letters1');
const letters2 = require('./static/letters2');

module.exports = function getName(length = rnd(12) + 3) {
  if(length < 3 || length > 15)
    throw new Error('Length need min 3 max 15');
    
  const curchar = rnd(26);
  let nam = alphaup(curchar);
  let ran, curar, firstchar, secondchar, nextchar;

  firstchar = curchar;

  ran = rnd(1000);
  secondchar = 0;
  curar = letters1[firstchar];
  while (ran >= curar[secondchar]) secondchar++;
  nam += alphalow(secondchar);

  for (var cnt = 2; cnt < length; cnt++) {
    ran = rnd(1000);
    nextchar = 0;
    curar = letters2[firstchar][secondchar];
    while (ran >= curar[nextchar]) nextchar++;

    firstchar = secondchar;
    secondchar = nextchar;
    nam += alphalow(nextchar);
  }

  return nam
}