'use strict'
const rollup = require('rollup')
const jetpack = require('fs-jetpack')

const srcDir = jetpack.cwd('./src')
const buildDir = jetpack.cwd('./build')

const rollupOnlyBundle = async (srcPath, destPath) => {

  const bundle = await rollup.rollup({
    input: srcPath
  })

  await bundle.write({
    format: 'cjs',
    file: destPath,
  })
}

buildDir.dir('.', {empty: true})

rollupOnlyBundle(srcDir.path('src.js'), buildDir.path('dest.js'))


