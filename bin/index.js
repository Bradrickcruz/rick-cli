#!/usr/bin/env node

// boas libs para lidar com os args
// arg
// yargs
// commander
// lib "chalk" permite adicionar cores ao terminal
// lib pkg-up permite que se busque o package.json mais proximo da execução
// lib "find-up" é mais generica, e permite procurar qualquer
//pasta ou arquivo nos diretorios e sub-diretorios do projeto
// a lib "cosmiconfig" permite encontrar diversos arquivos de configuração
// a lib "ajv" valida formatos de arquivos json
const arg = require('arg');
const logger = require('../src/logger')('bin');
const getConfig = require('../src/config/config-mgr');
const start = require('../src/commands/start');

logger.debug('rick-cli is working!!!');
try {
  const arguments = arg({
    '--start': Boolean,
    '--build': Boolean,
  });

  if (arguments['--start']) {
    const config = getConfig();
    start(config);
  }
  if (arguments['--build']) {
    console.log('building the app');
  }
} catch (err) {
  if (err.code === 'ARG_UNKNOWN_OPTION') {
    logger.warning(e.message);
    howToUse();
  }
}

function howToUse() {
  console.log(`rick-CLI [CMD]
  --start\tstarts the APP
  --build\tbuilds the app`);
}
