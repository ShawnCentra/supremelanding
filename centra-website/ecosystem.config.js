module.exports = {
  apps : [{
    "name": "centra-website",
    "script": "node_modules/next/dist/bin/next",
    "args": "start",
    "cwd": "./",
    "instances": "max",
    "exec_mode": "cluster"
  }]
}
