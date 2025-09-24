#!/bin/bash

echo " Configuration du projet React DevOps"

# Vérification des prérequis
echo " Vérification des prérequis..."

command -v docker >/dev/null 2>&1 || { echo " Docker n'est pas installé"; exit 1; }
command -v kubectl >/dev/null 2>&1 || { echo " kubectl n'est pas installé"; exit 1; }
command -v ansible >/dev/null 2>&1 || { echo " Ansible n'est pas installé"; exit 1; }

echo " Tous les prérequis sont installés"

# Copie du fichier d'environnement
if [ ! -f .env ]; then
    cp .env.example .env
    echo " Fichier .env créé. Veuillez le configurer avec vos valeurs."
fi

# Installation des dépendances
echo " Installation des dépendances..."
npm install

echo " Configuration terminée!"
echo ""
echo "Prochaines étapes:"
echo "1. Configurez le fichier .env avec vos valeurs"
echo "2. Lancez 'npm run dev' pour le développement"
echo "3. Ou 'docker-compose up' pour tester avec Docker"