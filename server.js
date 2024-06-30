const args = process.argv.slice(2),
    express = require('express'),
    http = require('http').Server(
        express().use('/', express.static('./webroot'))
    );

let port = 8000,
    portIndex = args.indexOf('--port');
if (portIndex !== -1) {
    const newPort = parseInt(args[portIndex+1]);

    !isNaN(newPort) && (port = newPort);
}

http.listen(port);
console.log(`Listening on http://localhost:${port}`);