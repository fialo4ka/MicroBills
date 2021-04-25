Micro Bill API project
***********************************

Description
===========
Project to save and manage each month's bills. Created with REST APIs using Python 3 and Flask.


Installation
============
Run the install.sh script to install the app's dependencies (assumes activated Python3 virtual env):

.. code:: shell

  ./install.sh


Usage
=====
Run the following commands start the server (assumes activated Python3 virtual env):

run nix 
  nix-shell

run api

  cd microbill/
  python main.py

run react app
  
  
  cd reactbill/
  npm start



Tests
=====
Run the install-dev-dependencies.sh script to install the app's dev/tests dependencies (assumes activated Python3 virtual env):

.. code:: shell

  sudo ./install-dev-dependencies.sh
  pip install -r dev-requirements.txt

Run the following command to run smoke tests (server must be running):

.. code:: shell

  newman run tests/smoke-tests.json -e tests/local-environment.json
