Node {
	docker.image('node:lts-bullseye-slim').inside('-p 3000:3000' ) {
		stage('Build') { 
			echo "Hilmatrix scripted Jenkinsfile - Build"
			sh 'npm install' 
        }
        stage('Test') {
			echo "Hilmatrix scripted Jenkinsfile - Test"
            sh './jenkins/scripts/test.sh'
        }
    }
}
