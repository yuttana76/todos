#!/bin/bash
echo 'run after_install.sh: ' >> /home/ec2-user/todos/deploy.log

echo 'cd /home/ec2-user/nodejs-server-cicd' >> /home/ec2-user/todos/deploy.log
cd /home/ec2-user/todos >> /home/ec2-user/todos/deploy.log

echo 'npm install' >> /home/ec2-user/todos/deploy.log 
npm install >> /home/ec2-user/todos/deploy.log