pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo "building app"'
      }
      stage('Testing') {
        steps {
          sh 'npm run dev'
        }
    }
  }
}
