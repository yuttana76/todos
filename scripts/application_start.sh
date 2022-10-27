#!/bin/bash

echo 'run application_start.sh: ' >> /home/ec2-user/todos/deploy.log

echo 'pm2 restart nodejs-express-app' >> /home/ec2-user/todos/deploy.log
pm2 restart nodejs-express-app >> /home/ec2-user/todos/deploy.log