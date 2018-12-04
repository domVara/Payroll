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
                sh "apt install docker"
                sh "docker build -t finalcountdown/server"
                sh "cd client"
                sh "docker build -t finalcountdown/client"
            }
        }
        stage('Test') {
            steps {
                sh "docker start -d finalcountdown/client"
                sh "docker start -d finalcountdown/server"
            }
        }
    }
}
