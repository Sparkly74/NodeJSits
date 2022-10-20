pipeline{
    agent any
    stages{
        stage('Tests'){
            steps{
                script{
                    docker.image('node').inside{
                        c ->
                        echo 'Build...'
                        sh 'npm install'
                        echo 'Test...'
                        sh 'npm test'
                        sh 'docker logs ${c.id}'
                    }
                }
            }
        }
        stage('Build et un push de l\'image docker'){
            steps{
                script{
                    def dockerImage = docker.build("nodejd:latest")
                    dockerImage.push()
                }
            }
        }
        stage('Deploy vers l\'image'){
            steps{
                script{
                    sh 'docker stop nodejd'
                    sh 'docker rm nodejd'
                    sh 'docker rmi nodejd'
                    sh 'docker -t nodejd:prod nodejd:latest'
                    sh 'docker run -d --name nodejd -p 3000:3000 nodejd'
                }
            }
        }
    }
}