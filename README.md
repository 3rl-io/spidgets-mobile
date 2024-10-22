# spidgets-mobile

Example app for AR in a web browser on mobile devices with built-in IMU (most phones and tablets; wearables; many laptops).

Works well on Android. Support for other mobile devices in progress. See [notes](#notes)

<img src="https://github.com/3rl-io/spidgets-3dof/blob/master/docs/readme-assets/3dof.gif?raw=true" alt="spidgets-3dof gif" width="700"/>

---

## Usage

The webserver can either be A) run on a separate computer and connect the mobile over network, or B) run locally on the device (e.g. Termux for android)

Requires [Node](https://nodejs.org/en/download/package-manager) (also works with bun, except on Termux)

```
npm install
node server.js

```

then browse to http://localhost:8000

Options:
- Change port with the `--port` flag e.g. `node server.js --port 3000`

---

## How it works

Front-end in [webroot/index.html](https://github.com/3rl-io/spidgets-mobile/blob/master/webroot/index.html) uses `spidgets-core` to position the widgets and convert `deviceorientation` events in the browser to matrix3d calculations to simulate 3D space

---

## Notes

This is a simplified version of spidgets-3dof. If you need a multi-device AR app, use spidgets-3dof as it is more responsive to different device types and configs. This repo is good for mobile-only use cases, including wearables.

Android: Confirmed working on Samsung Dex and Motorola Ready For

iPhone/iPad: Difficult to use since the big screen just mirrors the phone screen and connecting a mouse requires a change to accessibility settings. Has potential to be used with a full-screen browser like Kiosker. An SDK dev may be able to wrap it for AirPlay like SpaceWalker app

Ultrabooks, mobile PC with IMU: These usually have lower polling rates for IMU data, so we would need to add animation to make the motion smooth.