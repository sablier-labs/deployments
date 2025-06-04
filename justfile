# ---------------------------------------------------------------------------- #
#                                    RECIPES                                   #
# ---------------------------------------------------------------------------- #

# Default recipe
default: full-check

# Check code with Biome
biome-check:
    bun biome check .

# Fix code with Biome and update imports
biome-write:
    bun biome check --write .
    bun biome lint --write --only correctness/noUnusedImports .

# Build the project
build: clean tsc-build
alias b := build

# Clean the dist directory
clean:
    bun rimraf dist

# Run all code checks
full-check: biome-check prettier-check tsc-check
alias c := full-check
alias fc := full-check

# Run all code fixes
full-write: biome-write prettier-write

# Install dependencies
install *args:
    bun install {{ args }}

# Check markdown and yaml files with Prettier
prettier-check:
    bun prettier --cache --check "**/*.{md,yml}"

# Fix markdown and yaml files with Prettier
prettier-write:
    bun prettier --cache --write "**/*.{md,yml}"

# Print available chain arguments
@print thing:
    bun run scripts/print-{{ thing }}.ts

# Setup Husky
setup:
    bun husky

# Run tests
test:
    bun vitest run --silent
alias t := test

# Run tests with UI
test-ui:
    bun vitest --silent --ui

# Run tests in watch mode
test-watch:
    bun vitest --silent

# Build TypeScript
tsc-build:
    bun tsc -p tsconfig.build.json
    bun tsc-alias -p tsconfig.build.json

# Type check TypeScript
tsc-check:
    bun tsc -p tsconfig.json --noEmit
