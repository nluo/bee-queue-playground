var Queue = require('bee-queue');
var queue = Queue('pubsub');

queue.on('ready', function () {
  queue.process(function (job, done) {
    console.log('worker 1 processing job id: ' + job.id);
    done(null, parseInt(job.data.x) + parseInt(job.data.y));
  });

  console.log('processing jobs...');
});
