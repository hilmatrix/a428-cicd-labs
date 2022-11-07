node {
	docker.image('node:lts-bullseye-slim').inside('-p 3000:3000' ) {
		withEnv(['CI="true"']) {
			stage('Build') { 
				checkout scm
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
				sh 'aws s3api put-object --bucket hilmatrix-react-app --key ReactApp.tgz  --body ReactApp.tgz'
				sh 'aws deploy create-deployment --application-name ReactApp --ignore-application-stop-failures --deployment-group-name ReactApp-DeploymentGroup --s3-location bucket=hilmatrix-react-app,bundleType=tgz,key=ReactApp.tgz'
			}
		}
    }
}
