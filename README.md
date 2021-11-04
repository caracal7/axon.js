# axon.js

Lightweight javascript reactive programming library

## Node.js

### Installation

```
npm i axon.js
```

### Usage

```
const Axon = require('axon.js');

const axon = new Axon();

axon.b = a => a + 1;
axon.c = b => b + 1;
axon.d = a => a + 1;
axon.e = (b, d) => b + d;

axon.log = e => console.warn(e);

axon.a = 5;
```

## Credits

Library was inspired by [`topologica`](https://github.com/datavis-tech/topologica).
