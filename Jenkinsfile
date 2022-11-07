node {
	docker.image('node:lts-bullseye-slim').inside('-p 3000:3000' ) {
		withEnv(['CI="true"']) {
			stage('Build') { 
				sh 'npm install' 
			}
			stage('Test') {
				sh './jenkins/scripts/test.sh'
			}
			stage('Approval') {
				sh 'echo hahaha'
			}
			stage('Deliver') {
				sh 'cd ${WORKSPACE} ; rm -f ReactApp.tgz ; tar -czvf ReactApp.tgz jenkins public src Jenkinsfile package.json  appspec.yml aws'
				
			}
		}
    }
}
