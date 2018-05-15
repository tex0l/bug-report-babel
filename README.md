# HowTo
To run the test-case:
```bash
git clone https://github.com/tex0l/bug-report-rollup.git
npm install
npm start
cat build/dest.js
```

# TLDR

Input:
```javascript
global.foo=()=>{return!1,null};
```

Actual output:
```javascript
'use strict';

global.foo=()=>{returnnull};

```

Expected output:
```javascript
'use strict';

global.foo=()=>{return null};

```
