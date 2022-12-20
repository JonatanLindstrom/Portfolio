pipeline {
  agent { label 'jenkinsagent' }
  stages {
    stage('Install dependencies') {
      steps {
        sh "npm install"
      }
    }
    stage('Test & Lint') {
      parallel {
        steps {
          sh "npm run lint"
        }
        steps {
          sh "npm run test:unit"
        }
      }
    }
    stage('E2E Test') {
      steps {
        sh "npm run dev"
      }
      steps {
        sh "npm run test"
      }
    }
    stage('Build') {
      steps {
        sh "npm run build"
      }
    }
  }
}