#!/usr/bin/env bash

# Strict mode: https://gist.github.com/vncsna/64825d5609c146e80de8b1fd623011ca
set -euo pipefail

# Define the output directory
UI_DIR="$HOME/Sablier/deployments-ui/src/lib"

# Create the destination directory if it doesn't exist
mkdir -p $UI_DIR

# Copy all files and directories from src to ui/src/lib
cp -r ./src/* $UI_DIR

echo "Files copied successfully from ./src to $UI_DIR"
