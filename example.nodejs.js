const Axon = require('axon.js');

const axon = new Axon();

axon.b = a => a + 1;
axon.c = (b) => b + 1;
axon.d = (a) => a + 1;
axon.e = (b, d) => b + d;

axon.log = e => console.warn(e);

axon.a = 5;
