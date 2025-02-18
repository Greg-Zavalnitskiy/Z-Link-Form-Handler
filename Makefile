# Makefile

# Variables
PROJECT_NAME=Z-Link-Form-Handler
DIST_DIR=dist

# Targets
.PHONY: all clean build deploy

all: build

clean:
    rm -rf $(DIST_DIR)

build:
    npx tsc

deploy: build
    cd $(DIST_DIR) && zip -r function.zip .
    aws lambda update-function-code --function-name $(PROJECT_NAME) --zip-file fileb://$(DIST_DIR)/function.zip