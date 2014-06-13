var kue = require('kue'),
		jobs = kue.createQueue(),
		argv = require('minimist')(process.argv.slice(2));

if (argv.m === 'create') {

	for (var i = 0; i < 100; i++) {

		jobs.create('flag-file', {
			id: i + ''
		}).save();

	}

}

if (argv.m === 'process') {
	console.log('waiting to process jobs ...');
	jobs.process('flag-file', function(job, done){
		setTimeout(function() {
			console.log(job.data);
		  done();
		}, 1000 * 5);
	});

	kue.app.listen(3000);
}


