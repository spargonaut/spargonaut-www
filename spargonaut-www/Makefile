SHELL := /bin/bash


.PHONY: run
run:
	hugo server -D

.PHONY: deploy-com
deploy-com:
	hugo --config ./config.toml,./com_domain.toml

.PHONY: deploy-wtf
deploy-wtf:
	hugo --config ./config.toml,./wtf_domain.toml