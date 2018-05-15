'use strict'
const rollup = require('rollup')
const babelPlugin = require('rollup-plugin-babel')
const babel = require('@babel/core')
const jetpack = require('fs-jetpack')
const {promisify} = require('util')

const babelTransform = promisify(babel.transformFile)

const srcDir = jetpack.cwd('./src')
const buildDir = jetpack.cwd('./build')

const rollupBabelBundle = async (srcPath, destPath) => {

  const bundle = await rollup.rollup({
    input: srcPath,
    plugins: [
      babelPlugin({
        presets: ['minify']
      })
    ]
  })

  await bundle.write({
    format: 'cjs',
    file: destPath,
  })
}

const babelOnlyBundle = async (srcPath, destPath) => {
  const res = await babelTransform(srcPath, {
    presets: ['minify']
  })
  jetpack.write(destPath, res.code)
}

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

babelOnlyBundle(srcDir.path('src.js'), buildDir.path('dest-babel-only.js'))
rollupOnlyBundle(srcDir.path('src.js'), buildDir.path('dest-rollup-only.js'))
rollupBabelBundle(srcDir.path('src.js'), buildDir.path('dest.js'))


