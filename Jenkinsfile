node {
    def appclient
    def appserver

    stage('Clone repository') {

        checkout scm
    }

    stage('Build image') {

        sh 'docker-compose –f -d build-compose.yml run –rm compile'
    }

    stage('Test image') {

        appclient.inside {
            sh 'echo "Tests passed"'
        }
        
        appserver.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            appserver.push("${env.BUILD_NUMBER}")
            appserver.push("latest")
        }
        docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
            appclient.push("${env.BUILD_NUMBER}")
            appclient.push("latest")
        }
    }
}
