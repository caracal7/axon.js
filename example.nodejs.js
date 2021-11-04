const Axon = require('@caracal7/axon.js');

const axon = new Axon();

axon.b = a => a + 1;
axon.c = (b) => b + 1;
axon.d = (a) => a + 1;
axon.e = (b, d) => b + d;

axon.log = e => console.warn('Answer of life is', e);

axon.a = 5;
