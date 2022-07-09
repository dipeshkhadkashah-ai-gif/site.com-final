const router = require('express').Router(); //creating a router for job 
const Job = require('../models/jobModel'); //importing models
const { createJob, updateJob, deleteJob } = require('../controllers/jobController');

//create a job
router.route('/createjob').post(createJob)

//update job
router.route('/:id').put(updateJob)

//delete a job
router.route('/:id').delete(deleteJob) 

module.exports = router;
