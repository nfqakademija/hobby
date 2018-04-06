set :application, 'kickstart'
set :repo_url, '#'

set :deploy_to, '/home/kickstart/'

set :archive_cache, true
set :branch, 'master'
set :scm, :rsync
set :exclude, ['.git', 'node_modules', 'public/index.php']

set :linked_files, fetch(:linked_files, []).push('.env')
set :linked_dirs, fetch(:linked_dirs, []).push('var/logs')
