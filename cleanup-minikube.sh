#!/bin/bash

echo "Delete deployment"
kubectl delete deployment frontend

echo "Delete service"
kubectl delete service frontend
