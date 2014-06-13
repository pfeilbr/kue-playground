# [Kue](https://github.com/learnboost/kue) Playground

Playground for learning / playing with [Kue](https://github.com/learnboost/kue).  Kue is a priority job queue for node.

## Running

	redis-server # start redis server
	node index.js -m process # run job processor
	node index.js -m create # run job creator in another terminal