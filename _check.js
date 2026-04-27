const path = require('path');
process.env.NX_PROJECT_GLOB_CACHE = 'false';
const { ExecutorContext } = require('@nx/devkit');
const impl = require('@nx/angular/src/executors/application/application.impl').default;
const ctx = {
  root: process.cwd(),
  cwd: process.cwd(),
  projectName: 'doc',
  workspace: undefined,
  configurationName: 'development',
  isVerbose: true,
  projectsConfigurations: { projects: { doc: { root: 'apps/doc', sourceRoot: 'apps/doc/src' } } },
  nxJsonConfiguration: {}
};
const opts = require('./apps/doc/project.json').targets.build.options;
const dev = require('./apps/doc/project.json').targets.build.configurations.development;
(async () => {
  try {
    const it = impl({ ...opts, ...dev }, ctx);
    for await (const v of it) {
      console.log('YIELD:', JSON.stringify(v, null, 2));
      break;
    }
    console.log('DONE');
  } catch (e) {
    console.error('ERR:', e);
  }
})();
