ARTIFACT_INCLUDES = bin config public src templates vendor composer.json composer.lock symfony.lock
ARTIFACT_EXCLUDES = public/images/.gitkeep

.PHONY: build
build: project.tar.gz

.PHONY: clean
clean:
	@rm -rf project.tar.gz vendor node_modules public/build public/bundles var

.PHONY: deploy
deploy: project.tar.gz .deploy/hosts .deploy/playbook.yaml
	@ansible-playbook -i .deploy/hosts .deploy/playbook.yaml

project.tar.gz: vendor public/build
	@echo "Creating deployment artifact out of current directory"
	@echo $(ARTIFACT_EXCLUDES) | xargs -n1 echo "--exclude" | xargs tar czf project.tar.gz $(ARTIFACT_INCLUDES) --owner 0 --group 0 --anchored
	@printf "Successfully built deployment artifact named \033[32;49mproject.tar.gz\033[39m.\n"

vendor: composer.lock
	composer install --no-dev --no-scripts --no-interaction --optimize-autoloader

public/build: assets node_modules
	yarn build

node_modules:
	yarn
