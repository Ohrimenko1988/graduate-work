#!/bin/bash
WORK_DIR=$(pwd)
FRONTEND_DIR="$WORK_DIR/frontend"
BACKEND_DIR="$WORK_DIR/backend"

# run backend
cd $BACKEND_DIR
npm install
npm run start

# run frontend
cd $FRONTEND_DIR
npm install
npm run start
