#!/usr/bin/env sh

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 16

cd /root/react-app

echo Y | npm run build
echo Y | npm start > /dev/null 2> /dev/null < /dev/null &
