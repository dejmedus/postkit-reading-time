#!/bin/bash
set -e

npm run package

mkdir -p ./test-env
cd ./test-env

[ -f package.json ] || npm init -y
npm pkg set type="module"
npm install ../postkit-reading-time-*.tgz

[ -f index.js ] || cat > index.js << 'EOF'
import { add } from "postkit-reading-time";

console.log(add(1, 2));
