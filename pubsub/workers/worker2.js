var Queue = require('bee-queue');
var queue = Queue('pubsub');

queue.on('ready', function () {
  queue.process(function (job, done) {
    console.log('worker 2 processing job id: ' + job.id);
    done(null, job.data.x + job.data.y);
  });

  console.log('processing jobs...');
});
