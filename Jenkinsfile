pipeline{
    agent any
    stages{
        stage('Build Docker Image'){
            steps{
                script{
                    def app = docker.build("nodejd:master", ".")                    
                }
            }
        }
        stage('Tests'){
            steps{
                script{
                    docker.image('nodejd:master').inside{
                        sh '''
                        echo 'Test...'
                        npm test
                        '''
                    }
                }
            }
        }
        stage('Deploy Image'){
            steps{
                script{
                    sh '''
                    docker stop nodejd || true
                    docker rm nodejd || true
                    docker rmi nodejd || true
                    docker tag nodejd:master nodejd:prod
                    docker run -d --name nodejd -p 3000:3000 nodejd:prod
                    '''
                }
            }
        }
    }
}
