#!/usr/bin/bash

CHROME_SANDBOX_PATH=./node_modules/electron/dist/chrome-sandbox

sudo chown -R root $CHROME_SANDBOX_PATH

sudo chmod 4755 $CHROME_SANDBOX_PATH

electron . --trace-warnings

