SHELL := /bin/bash

-include .env

.PHONY: help
help:  # Prints the list of commands available in this Makefile
	@grep -E '^[a-zA-Z\-\_\-]+:.*?#.*$$' $(MAKEFILE_LIST) \
		| sort \
		| sed 's/^Makefile://' \
		| awk 'BEGIN {FS=":.*?#"}; {printf "\033[33m%-30s\033[0m %s\n",$$1,$$2}'

default: help

.PHONY: run
run:		# run the local server
	@hugo server -D

.PHONY: gen-com
gen-com:		# deploy the .com website
	@hugo --config ./config.toml,./com_domain.toml
	@./scripts/reset_footer_and_commit.sh com
	@./scripts/create_archive.sh com

.PHONY: gen-wtf
gen-wtf:		# deploy the .wtf website
	@hugo --config ./config.toml,./wtf_domain.toml
	@./scripts/reset_footer_and_commit.sh wtf
	@./scripts/create_archive.sh wtf

