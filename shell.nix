{ pkgs ? import <nixpkgs> {} }:
let
  pythonPackages = pkgs.python3Packages;
  hydra-sdk-src = builtins.fetchGit {
    url = "https://github.com/TuxCoder/sdk.git";
  };
  hydra-sdk = with pythonPackages; buildPythonPackage rec {
    name = "hydra-sdk";
    src = "${hydra-sdk-src}/clients/hydra/python";
    buildInputs = [ certifi python-dateutil urllib3 ];
    propagatedBuildInputs = [ pytest ];
  };
in
  pkgs.mkShell {
    # nativeBuildInputs is usually what you want -- tools you need to run
    nativeBuildInputs = with pythonPackages; [
        flask
        flask-restx
        pytest
        flask-swagger-ui
        flask_sqlalchemy
        authlib
        requests
        hydra-sdk
    ] ++ (with pkgs.nodePackages; [
        pkgs.nodejs
        npm
        node2nix
        pkgs.openapi-generator-cli
    ]);
}