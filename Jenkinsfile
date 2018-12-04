pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'echo "building app'
      }
      stage('Testing') {
        sh 'npm run dev'
    }
  }
}
