pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                git branch: 'AWSBranch',
                    url: 'https://github.com/domVara/payroll.git'
            }
        }
        stage('Build') {     
            steps {   
                sh: "docker build -t finalcountdown/server",
                sh: "cd client"
            }
        } 
        stage('Test') {     
            steps {                
                sh: "docker start -d finalcountdown/client"
            }
        }
    }
}

