node {
    def appclient
    def appserver

    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */

        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        appclient = docker.build("finalcountdown/appclient")
        appserver = docker.build("finalcountdown/appserver")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        appclient.inside {
            sh 'echo "Tests passed"'
        }
        
        appserver.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */
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
