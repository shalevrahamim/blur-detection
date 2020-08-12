const watcher = require('watch');
const { spawn } = require('child_process');

const createMonitor = (config) => {
    watcher.createMonitor(config.path, (monitor) => {
        monitor.on("created", (file, stat) => {
            let process = spawn('python', ['./sobel.py', file]);
            process.stdout.on('data', (data) => {
                console.log('data', data.toString());
                process.kill();
            });
        });
    });
};

module.exports = createMonitor;