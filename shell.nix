{ pkgs ? import <nixpkgs> {} }:
  pkgs.mkShell {
    # nativeBuildInputs is usually what you want -- tools you need to run
    nativeBuildInputs = with pkgs.python3Packages; [
        flask
        flask-restful
        pytest
        flask-swagger
        flask-swagger-ui
        flask_sqlalchemy
        flask-jwt-extended
        pyjwt
    ];
}