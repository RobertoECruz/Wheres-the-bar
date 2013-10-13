from flask import Flask, render_template
app = Flask(__name__)

@app.route('/', methods=['GET'])
def find_bar():
	return render_template('index.html')

app.debug=True
if __name__ == '__main__':
	app.run()
