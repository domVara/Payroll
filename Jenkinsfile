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
                sh "docker build -t finalcountdown/server",
                sh "cd client",
                sh "docker build -t finalcountdown/client"
            }
        } 
        stage('Test') {     
            steps {                
                sh "docker start -d finalcountdown/client",
                sh "docker start -d finalcountdown/server"   
            }
        }
        stage('Test') {
            steps {
                sh "echo "done""
            }
        }
    }
}

