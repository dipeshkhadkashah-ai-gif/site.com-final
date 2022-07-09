const Job = require('../models/jobModel');

//create Job
const createJob = async(req, res) => {
    try{
        const job = await Job.create(req.body)
        res.status(201).json({
            success: true, 
            message:"Job created!",
            job
        })
    }catch(error) {
        res.status(500).json({
            success: false,
            message:"Failed to add job!"
        })
    }


}

//Update the job application
const updateJob = async(req, res) => {
    try{
        let job = await Job.findById(req.params.id)
        if(!job) {
            res.json('Job not applied')
        }
        job = await Job.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true
        })
        res.status(200).json(job)
    }catch(error){
        console.log(error)
        res.send(error)
    }
}

//Delete the job applications
const deleteJob = async(req, res) => {
    const job = await Job.findById(req.params.id)
    if(!job){
        res.json("Job not applied")
    }
    await job.remove()
    res.json({
        message: "Job Deleted"
    })
}

module.exports = {createJob, updateJob, deleteJob}; 