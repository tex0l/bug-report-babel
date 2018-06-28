# HowTo
To run the test-case:
```bash
git clone https://github.com/tex0l/bug-report-babel.git
npm install
npm start
cat build/dest.js
```

# TLDR

Input:
```javascript
function test () {
  if (true) return
  var i
  for (var l=1; i < l; i++) {}
}
```

Actual output:
```javascript
function test(){if(false)for(var i,l=1;i<undefined;i++);}
```

Expected output:
```javascript
function test(){if(false)for(var i,l=1;i<l;i++);}
```
