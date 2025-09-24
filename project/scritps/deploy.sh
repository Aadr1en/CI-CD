#!/bin/bash

set -e

echo " Déploiement de l'application React DevOps"

# Variables
ENVIRONMENT=${1:-staging}
VERSION=${2:-$(git rev-parse --short HEAD)}

echo " Configuration:"
echo "  - Environnement: $ENVIRONMENT"
echo "  - Version: $VERSION"

# Build Docker
echo " Build de l'image Docker..."
docker build -t $DOCKER_REGISTRY/$IMAGE_NAME:$VERSION .
docker tag $DOCKER_REGISTRY/$IMAGE_NAME:$VERSION $DOCKER_REGISTRY/$IMAGE_NAME:latest

# Push vers le registry
echo " Push vers le registry..."
docker push $DOCKER_REGISTRY/$IMAGE_NAME:$VERSION
docker push $DOCKER_REGISTRY/$IMAGE_NAME:latest

# Déploiement avec Ansible
echo " Déploiement avec Ansible..."
ansible-playbook -i ansible/inventory.yml ansible/playbook.yml \
  --extra-vars "namespace=$ENVIRONMENT app_version=$VERSION"

echo " Déploiement terminé!"
echo " Application disponible sur: https://$APP_DOMAIN"