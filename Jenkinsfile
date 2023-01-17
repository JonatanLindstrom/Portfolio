@Library("HomelabLib") _
pipeline {
  agent none
  stages {
    stage('Integration tests') {
      agent { label 'jenkinsagent' }
      tools {
        nodejs 'node-18.12.1'
      }
      stages {
        stage('Install pnpm') {
          steps {
            sh "npm install -g pnpm"
          }
        }
        stage('Install dependencies') {
          steps {
            sh "pnpm install"
          }
        }
        stage('Test & Lint') {
          parallel {
            stage('Unittests') {
              steps {
                sh "pnpm run test:unit"
              }
            }
            stage('Lint') {
              steps {
                sh "pnpm run lint"
              }
            }
          }
        }
      }
    }
    stage('Dockerize') {
      agent {
        kubernetes {
          yaml """
    kind: Pod
    spec:
      containers:
      - name: kaniko
        image: gcr.io/kaniko-project/executor:debug
        imagePullPolicy: Always
        command:
        - sleep
        args:
        - 9999999
        volumeMounts:
          - name: jenkins-docker-cfg
            mountPath: /kaniko/.docker
      volumes:
      - name: jenkins-docker-cfg
        projected:
          sources:
          - secret:
              name: docker-credentials
              items:
                - key: .dockerconfigjson
                  path: config.json
    """
        }
      }
      steps {
        container(name: 'kaniko', shell: '/busybox/sh') {
          sh '''#!/busybox/sh
            echo "FROM jenkins/inbound-agent:latest" > Dockerfile
            /kaniko/executor --context `pwd` --destination jonatanlindstrom/portfolio:latest
          '''
        }
      }
    }
    stage('Deploy') {
      agent { label 'jenkinsagent'}
      stages {
        stage('Deploy to kubernetes') {
          steps {
            withKubeConfig([credentialsId: "jenkins-k3s-admin-token", clusterName: 'homelab', contextName: 'homelab', namespace: "portfolio"]) {
              sh 'kubectl apply -f deploy/prod.yml'
            }
          }
        }
      }
    }
  }
  post {
    failure {
      notifySlackFailedJob()
    }
  }
}