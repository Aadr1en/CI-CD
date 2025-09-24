import { Container, Server, GitBranch, Zap, Shield, Cloud } from 'lucide-react';

function App() {
  const features = [
    {
      icon: <Container className="w-8 h-8 text-blue-500" />,
      title: "Docker",
      description: "Containerisation avec build multi-étapes optimisé"
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: "Ansible",
      description: "Automatisation du déploiement et configuration"
    },
    {
      icon: <GitBranch className="w-8 h-8 text-orange-500" />,
      title: "Jenkins",
      description: "Pipeline CI/CD avec tests et déploiement automatique"
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: "Kubernetes",
      description: "Orchestration et gestion des containers"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "React",
      description: "Interface utilisateur moderne et responsive"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Production Ready",
      description: "Configuration optimisée pour la production"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <Container className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-2xl font-bold text-gray-900">DevOps React App</h1>
            </div>
            <div className="flex space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                Production Ready
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                v1.0.0
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Application React avec Stack DevOps Complète
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un projet moderne intégrant Docker, Ansible, Jenkins et Kubernetes pour 
            un déploiement automatisé et scalable en production.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Architecture Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Architecture DevOps</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-8">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-2">
                <GitBranch className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Source Code</span>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-orange-100 p-4 rounded-full mb-2">
                <Zap className="w-8 h-8 text-orange-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Jenkins CI/CD</span>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 p-4 rounded-full mb-2">
                <Container className="w-8 h-8 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Docker Build</span>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-red-100 p-4 rounded-full mb-2">
                <Server className="w-8 h-8 text-red-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Ansible Deploy</span>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex flex-col items-center">
              <div className="bg-green-100 p-4 rounded-full mb-2">
                <Cloud className="w-8 h-8 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-900">Kubernetes</span>
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-green-600">✓</div>
            <div className="text-sm text-gray-600">Build Status</div>
            <div className="font-medium text-gray-900">Passing</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-gray-600">Test Coverage</div>
            <div className="font-medium text-gray-900">All Tests Pass</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-sm text-gray-600">Replicas</div>
            <div className="font-medium text-gray-900">Running</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <div className="text-2xl font-bold text-orange-600">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
            <div className="font-medium text-gray-900">Last 30 days</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>© 2025 DevOps React App. Built with React, Docker, Ansible, Jenkins & Kubernetes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;