const { Architect } = require('@angular-devkit/architect');
const { TestingArchitectHost } = require('@angular-devkit/architect/testing');
const { schema } = require('@angular-devkit/core');

(async () => {
  try {
    const sr = new schema.CoreSchemaRegistry();
    sr.addPostTransform(schema.transforms.addUndefinedDefaults);
    const host = new TestingArchitectHost(process.cwd(), process.cwd());
    const architect = new Architect(host, sr);
    host.addBuilderFromPackage('@angular/build');
    const run = await architect.scheduleBuilder('@angular/build:application', {
      outputPath: 'dist/apps/doc-test',
      index: 'apps/doc/src/index.html',
      browser: 'apps/doc/src/main.ts',
      polyfills: ['zone.js'],
      tsConfig: 'apps/doc/tsconfig.app.json',
      inlineStyleLanguage: 'scss',
      assets: [{ glob: '**/*', input: 'apps/doc/public' }],
      styles: ['apps/doc/src/styles.scss'],
      scripts: [],
      optimization: false,
      extractLicenses: false,
      sourceMap: true,
    });
    const r = await run.result;
    console.log('result:', r);
    await run.stop();
  } catch (err) {
    console.error('CAUGHT:', err);
  }
})();
