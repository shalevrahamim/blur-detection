const config = require('./config');
const createMonitor = require('./monitor');

const WATCHER = 'watcher';
const AUTOMATIC = 'automatic';

if(config.start === WATCHER)
    createMonitor(config[WATCHER]);