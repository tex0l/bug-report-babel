const babel = require('@babel/core')
const jetpack = require('fs-jetpack')
const {promisify} = require('util')

const babelTransform = promisify(babel.transformFile)

const srcDir = jetpack.cwd('./src')
const buildDir = jetpack.cwd('./build')

const minifyOptions = {
  evaluate: true,
  simplify: true,
  mergeVars: true,
  removeUndefined: true,

  deadcode: false,
  booleans: false,
  builtIns: false,
  consecutiveAdds: false,
  flipComparisons: false,
  guards: false,
  infinity: false,
  mangle: false,
  memberExpressions: false,
  numericLiterals: false,
  propertyLiterals: false,
  regexpConstructors: false,
  replace: false,
  simplifyComparisons: false,
  typeConstructors: false,
  undefinedToVoid: false
}

const babelBundle = async (srcPath, destPath) => {
  const res = await babelTransform(srcPath, {
    presets: [['minify', minifyOptions]]
  })
  jetpack.write(destPath, res.code)
}

buildDir.dir('.', {empty: true})

babelBundle(srcDir.path('src.js'), buildDir.path('dest.js'))
