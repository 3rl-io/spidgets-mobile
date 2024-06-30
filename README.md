# spidgets-mobile

Example app for AR in a web browser on Android

<a href="https://3rl.io/compat/" target="_blank">Live Demo</a>

<img src="https://github.com/3rl-io/spidgets-3dof/blob/master/docs/readme-assets/3dof.gif?raw=true" alt="spidgets-3dof gif" width="700"/>

---

## Usage

Get the webserver ready and start server.js. Requires [Bun](https://bun.sh/docs/installation) (also works with node/npm). You may need `sudo` for the second step:

```
bun install
bun server.js
```

then browse to http://localhost:8000

Options:
- Change port with the `--port` flag e.g. `bin/ar-server --port 3000`
- Some third party websites (e.g. YouTube) need [this extension](https://chromewebstore.google.com/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe) in order to bypass restrictions caused by iframe headers. This may violate third party TOS or void warranties. Use at your own risk. On Android, extensions seem to only be available with Kiwi or Yandex browsers.

---

## How it works

Front-end in [webroot/index.html](https://github.com/3rl-io/spidgets-3dof/blob/master/webroot/index.html) uses `spidgets-core` to position the widgets and convert `deviceorientation` events in the browser to matrix3d calculations to simulate 3D space
