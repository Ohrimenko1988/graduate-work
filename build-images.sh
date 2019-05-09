#!/bin/bash
WORK_DIR=$(pwd)
FRONTEND_DIR="$WORK_DIR/frontend"
FRONTEND_IMAGE_NAME="bujhtr5555/graduate-work-frontend:latest"

BACKEND_DIR="$WORK_DIR/backend"
BACKEND_IMAGE_NAME="bujhtr5555/graduate-work-backend:latest"

echo "Login to docker"
docker login -u $1 -p$2

echo "Build 'Frontend' image"
cd $FRONTEND_DIR
docker build -t $FRONTEND_IMAGE_NAME ./

echo "Build 'Backend' image"
cd $BACKEND_DIR
docker build -t $BACKEND_IMAGE_NAME ./

echo "Push images to dockerhub"
docker push $FRONTEND_IMAGE_NAME
docker push $BACKEND_IMAGE_NAME
