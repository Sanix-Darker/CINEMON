#!/usr/bin/bash

_react_app () {
    cd app
    yarn start
}

_electron () {
    sleep 20

    CHROME_SANDBOX_PATH=./node_modules/electron/dist/chrome-sandbox
    sudo chown -R root $CHROME_SANDBOX_PATH
    sudo chmod 4755 $CHROME_SANDBOX_PATH
    # We run electron with the set on on warning
    electron . --trace-warnings
}

_main () {
    ## headless function running in the same process but
    ## with parralellism

    # We start the react app
    _react_app &
    # We start eletron app
    _electron &

    # we wait so that we can close everything anytime
    wait
}

_main
