pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''echo "checking dependencies"
npm install '''
      }
    }
    stage('Test') {
      steps {
        sh 'npm run dev'
      }
    }
  }
}