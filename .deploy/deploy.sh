#!/usr/bin/env bash

# This script deploys to *.projektai.nfqakademija.lt
# This script is intended to be used in Jenkins CI, where Ansible is installed

set -e # Stop on error
set -x # Show commands being executed

# .deploy/ansible_hosts will be generated in Jenkins CI

# Use Ansible to SSH to server, copy files and finish deployment there
ansible-playbook -i .deploy/ansible_hosts .deploy/deploy_playbook.yaml
