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
function test (arg) {
  if (false) return
  var i
  for (var l; i < l; i++) {}
}

```

Actual output:
```javascript
function test(arg){if(true)for(var i,l;i<undefined;i++);}
```

Expected output:
```javascript
function test(arg){if(true)for(var i,l;i<l;i++);}
```
