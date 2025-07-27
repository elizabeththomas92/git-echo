#!/usr/bin/env node

const path = require("path");
const { startWatcher } = require("../lib/watcher");

const watchPath = process.argv[2] || ".";

console.log(`Watching changes in: ${path.resolve(watchPath)}`);
startWatcher(watchPath);
