pipeline {
    agent { docker { image 'node:8.11.3' } }
    environment {
        HOME = '.'
    }
    stages {
        stage('Clone') {
            steps {
                git branch: 'AWSBranch',
                    url: 'https://github.com/domVara/payroll.git'
            }
        }
        stage('Build') {
            steps {
                sh "npm install"
            }
        }
    }
}
