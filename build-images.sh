#!/bin/bash
WORK_DIR=$(pwd)

FRONTEND_DIR="$WORK_DIR/frontend"
FRONTEND_IMAGE_NAME="iokhrime/graduate-work-frontend:latest"

BACKEND_DIR="$WORK_DIR/backend"
BACKEND_IMAGE_NAME="iokhrime/graduate-work-backend:latest"

echo "Build 'Frontend' image"
cd $FRONTEND_DIR
docker build -t $FRONTEND_IMAGE_NAME ./

echo "Build 'Backend' image"
cd $BACKEND_DIR
docker build -t $BACKEND_IMAGE_NAME ./
