# HowTo
To run the test-case:
```bash
git clone https://github.com/tex0l/bug-report-rollup.git
git checkout origin/other-bug
npm install
npm start
cat build/dest.js
```

# TLDR

Input:
```javascript
function TEST (arg) {
  if (test) return
  var selected
  for (var i = 0, l = arg.length; i < l; i++) {
    console.log(i)
  }
}
```

Actual output:
```javascript
function TEST(arg){if(!test)for(var selected,i=0,l=arg.length;i<undefined;i++)console.log(i)}

```

Expected output:
```javascript
function TEST(arg){if(!test)for(var selected,i=0,l=arg.length;i<l;i++)console.log(i)}

```
