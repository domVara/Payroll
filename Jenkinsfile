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
                sh "docker build -t finalcountdown/server .",
                sh "cd client",
                sh "docker build -t finalcountdown/client ."
            }
        }
        stage('Test') {
            steps {
                sh "docker run -d finalcountdown/server .",
                sh "docker run -d finalcountdown/client ."
            }
        }
    }
}
