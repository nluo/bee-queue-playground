let Queue = require('bee-queue')
let queue = new Queue('example')

let job = queue.createJob({x: 2, y: 3}).save()

job.on('succeeded', function (result) {
    console.log('the job id is ', job.id, ' and result is : ', result)
})

queue.process(function (job, done) {
    console.log('processing job', job.id)
    let result = job.data.x + job.data.y
    return done(null, result)
})

queue.on('ready', function (){
    console.log('queue is ready')
})