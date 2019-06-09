#!/bin/bash

kubectl create -f k8s-deployment.yaml
FULL_FRONTEND_URL=$(minikube service frontend --url)
echo "=============="
echo $FULL_FRONTEND_URL
FRONTEND_URL_PROTOCOL=$($FULL_FRONTEND_URL | awk -F ":" '{print $1}')
echo $FRONTEND_URL | awk -F ":" '{print $3}'

echo $FRONTEND_URL | awk -F "://" '{print $2}' | awk -F "://" '{print $1}'

# echo $FRONTEND_URL | awk -F ":" '{print $1}'
# echo $FRONTEND_URL | awk -F ":" '{print $1}'
echo "=============="
# echo $(minikube service frontend --url)
# echo $(minikube service backend --url)
