pipeline {
    agent any
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
                sh "docker build -t finalcountdown/server ."
            }
        }
    }
}
