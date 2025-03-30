esbuildPluginTsc = require('esbuild-plugin-tsc')

require('esbuild').build({
    entryPoints: ['./index.ts'],
    bundle: true,
    platform: 'node',
    outfile: './dist/Form-Handler-bundled.cjs',
    sourcemap: 'inline',
    plugins: [
        esbuildPluginTsc()
    ]
})