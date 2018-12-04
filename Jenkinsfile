node {
     def appclient
     def appserver

     stage('Clone repository') {
         /* Let's make sure we have the repository cloned to our workspace */

         checkout scm
 pipeline {
     agent any
     environment {
         HOME = '.'
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
     stages {
         stage('Clone') {
             steps {
                 git branch: 'AWSBranch',
                     url: 'https://github.com/domVara/payroll.git'
             }
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
         stage('Build') {
             steps {
                 sh "npm install"
                 sh "cd client"
                 sh "npm install"
             }
         }
         docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
             appclient.push("${env.BUILD_NUMBER}")
             appclient.push("latest")
         stage('Test') {
             steps {
                 sh "echo 'Test done'"
             }
         }
     }
 }
