pipeline {
    stages {
        stage('Clone') {
            steps {
                git branch: 'AWSBranch',
                    url: 'https://github.com/domVara/payroll.git'
            }
        }
        stage('Build') {     
            steps {   
                sh "docker build -t finalcountdown/server"
            }
        } 
        stage('Test') {     
            steps {                
                sh "docker start -d finalcountdown/client"
            }
        }
        stage('Test') {
            steps {
                sh "echo 'done'"
            }
        }
    }
}

