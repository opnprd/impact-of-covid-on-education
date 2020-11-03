import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';
import autoPreprocess from 'svelte-preprocess';
import styles from 'rollup-plugin-styles';

const production = !process.env.ROLLUP_WATCH;

function serve() {
  let server;

  function toExit() {
    if (server) server.kill(0);
  }

  return {
    writeBundle() {
      if (server) return;
      server = require('child_process').spawn(
        'npm',
        ['run', 'start', '--', '--dev', '--host', '0.0.0.0'],
        {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true,
        }
      );

      process.on('SIGTERM', toExit);
      process.on('exit', toExit);
    },
  };
}

export default {
  input: 'src/main.js',
  output: {
    sourcemap: true,
    format: 'iife',
    name: 'app',
    file: 'docs/bundle.js',
  },
  plugins: [
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
    svelte({
      dev: !production,
      preprocess: autoPreprocess(),
      emitCss: true,
    }),
    styles({
      mode: 'extract',
      sourceMap: true,
      minimize: production,
    }),
    html({
      title: 'Data about Children in Lockdown',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }),
    copy({
      targets: [
        { src: 'src/data/', dest: 'docs/' },
        { src: 'src/CNAME', dest: 'docs/' },
      ],
    }),
    !production && serve(),
    !production && livereload('docs'),
    production && terser(),
  ],
  watch: {
    include: 'src/**',
  },
};
