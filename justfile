set dotenv-load
set windows-shell := ["powershell.exe", "-NoLogo", "-Command"]

TAG := env_var_or_default("TAG", "latest")

# List all Justfile commands
@list:
    echo "🚧 Listing Justfile commands..."
    just --list

## letta-react commands
@react-install:
    echo "🚧 Installing dependencies for letta-react..."
    cd letta-react && npm install

@generate-packages:
    node ./scripts/generate-packages.js