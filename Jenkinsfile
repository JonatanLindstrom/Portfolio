pipeline {
  agent { label 'jenkinsagent' }
  tools {
    nodejs 'node-18.12.1'
  }
  stages {
    stage('Install dependencies') {
      steps {
        sh "npm install"
      }
    }
    stage('Test & Lint') {
      parallel {
        stage('Unittests') {
          steps {
            sh "npm run test:unit"
          }
        }
        stage('Lint') {
          steps {
            sh "npm run lint"
          }
        }
      }
    }
    stage('E2E Test') {
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