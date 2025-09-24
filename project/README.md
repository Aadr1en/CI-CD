# React DevOps Application

Une application React moderne avec une stack DevOps complète incluant Docker, Ansible, Jenkins et Kubernetes.

## 🚀 Fonctionnalités

- **React 18** avec TypeScript et Tailwind CSS
- **Containerisation Docker** avec build multi-étapes optimisé
- **Pipeline CI/CD Jenkins** avec tests et déploiement automatique
- **Déploiement Ansible** automatisé
- **Orchestration Kubernetes** avec monitoring et scaling
- **Configuration production-ready** avec sécurité renforcée

## 📋 Prérequis

- Node.js 18+
- Docker & Docker Compose
- Ansible
- Jenkins
- Kubernetes cluster
- kubectl configuré

## 🛠️ Installation

### Développement local

```bash
# Installation des dépendances
npm install

# Démarrage en mode développement
npm run dev

# Build pour production
npm run build
```

### Avec Docker

```bash
# Build de l'image
docker build -t react-devops-app .

# Lancement avec docker-compose
docker-compose up -d
```

## 🐳 Docker

### Build et déploiement

```bash
# Build de l'image
docker build -t react-devops-app:latest .

# Tag pour registry
docker tag react-devops-app:latest your-registry.com/react-devops-app:latest

# Push vers registry
docker push your-registry.com/react-devops-app:latest
```

### Configuration Nginx

L'application utilise Nginx comme serveur web avec :
- Compression Gzip
- Headers de sécurité
- Cache des assets statiques
- Support du client-side routing
- Health check endpoint

## 🔧 Ansible

### Configuration

1. Modifiez `ansible/inventory.yml` avec vos serveurs
2. Adaptez les variables dans `ansible/playbook.yml`

### Déploiement

```bash
# Déploiement sur staging
ansible-playbook -i ansible/inventory.yml ansible/playbook.yml \
  --extra-vars "namespace=staging replicas=1"

# Déploiement sur production
ansible-playbook -i ansible/inventory.yml ansible/playbook.yml \
  --extra-vars "namespace=production replicas=3"
```

## 🚀 Jenkins

### Pipeline CI/CD

Le Jenkinsfile inclut :
- ✅ Checkout du code source
- 📦 Installation des dépendances
- 🧹 Linting du code
- 🏗️ Build de l'application
- 🧪 Tests unitaires et de couverture
- 🔒 Scan de sécurité
- 🐳 Build et push Docker
- 🚀 Déploiement automatisé
- 🔍 Tests d'intégration et smoke tests

### Configuration requise

- Credentials Docker registry
- Kubeconfig pour Kubernetes
- Ansible installé sur l'agent Jenkins

## ☸️ Kubernetes

### Manifests inclus

- `namespace.yml` - Namespace dédié
- `deployment.yml` - Déploiement de l'application
- `service.yml` - Service ClusterIP
- `ingress.yml` - Ingress avec SSL
- `hpa.yml` - Auto-scaling horizontal

### Déploiement

```bash
# Application des manifests
kubectl apply -f k8s/

# Vérification du déploiement
kubectl get pods -n react-app-production
kubectl get services -n react-app-production
```

### Fonctionnalités Kubernetes

- **Health checks** : Liveness et Readiness probes
- **Auto-scaling** : HPA basé sur CPU/mémoire
- **Sécurité** : Security Context, non-root user
- **SSL/TLS** : Certificats automatiques avec cert-manager
- **Monitoring** : Métriques et logs centralisés

## 🔒 Sécurité

### Docker
- Image multi-stage pour réduction de surface d'attaque
- Utilisateur non-root
- Filesystem en lecture seule
- Health checks

### Kubernetes
- Security Context restrictif
- Network Policies
- RBAC
- Secrets management

### Nginx
- Headers de sécurité (CSP, XSS, etc.)
- Rate limiting
- SSL/TLS forcé

## 📊 Monitoring

### Health Checks
- Endpoint `/health` pour les vérifications
- Probes Kubernetes configurées
- Monitoring Jenkins pipeline

### Métriques
- Métriques de performance container
- Logs centralisés
- Alerting sur échecs

## 🚀 Déploiement en production

### Checklist

- [ ] Configurer les variables d'environnement
- [ ] Mettre à jour les URLs dans les manifests
- [ ] Configurer les certificats SSL
- [ ] Vérifier les limites de ressources
- [ ] Tester les health checks
- [ ] Configurer les alertes

### Commandes de déploiement

```bash
# Via Ansible
ansible-playbook -i ansible/inventory.yml ansible/playbook.yml

# Via kubectl
kubectl apply -f k8s/

# Via Jenkins
# Push sur main pour déploiement automatique
```

## 🤝 Contribution

1. Fork du projet
2. Créer une branche feature
3. Commit des changements
4. Push vers la branche
5. Ouvrir une Pull Request

## 📝 License

Ce projet est sous licence MIT.