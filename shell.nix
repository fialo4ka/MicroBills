{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    # nativeBuildInputs is usually what you want -- tools you need to run
    nativeBuildInputs = with pkgs.python3Packages; [
        flask
        flask-restx
        pytest
        flask-swagger-ui
        flask_sqlalchemy
        flask-jwt-extended
        pyjwt
    ] ++ (with pkgs.nodePackages; [
        pkgs.nodejs
        npm
        node2nix
    ]);
}