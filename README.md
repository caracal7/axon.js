# axon.js

Lightweight javascript reactive programming library

## Browser

```html
<!DOCTYPE html>
<html>
<head>
    <script src="axon.js"></script>
</head>
<body>
    <script>

        const axon = new Axon();

        axon.b = a => a + 1;
        axon.c = b => b + 1;
        axon.d = a => a + 1;
        axon.e = (b, d) => b + d;

        axon.log = e => console.warn('Answer of life is', e);

        axon.a = 5;

    </script>
</body>
</html>

```

## Node.js

### Installation

```
npm i @caracal7/axon.js
```

### Usage

```javascript
const Axon = require('@caracal7/axon.js');

const axon = new Axon();

axon.b = a => a + 1;
axon.c = b => b + 1;
axon.d = a => a + 1;
axon.e = (b, d) => b + d;

axon.log = e => console.warn('Answer of life is', e);

axon.a = 5;
```

## Credits

Library was inspired by [`topologica`](https://github.com/datavis-tech/topologica).

<a href="http://js.org" target="_blank" title="JS.ORG | JavaScript Community">
<img src="http://logo.js.org/dark_horz.png" width="102" alt="JS.ORG Logo"/></a>
