from microbill.app import app


# Name is only set to main when file is explicitly run (not on imports):
if __name__ == '__main__':
    app.run(port=5100, debug=True)
