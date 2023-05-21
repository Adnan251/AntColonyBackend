const Project = require('../models/Projects.js');
const User = require('../models/Users.js');
const Pipeline = require('../models/Pipelines.js')
const jwt = require('jsonwebtoken');

async function addProject(req, res, next){
    try{
        const project = await Project.create({
            name: req.body.name,
            language: req.body.language,
            dsl : req.body.dsl
        });
        await User.findOneAndUpdate(
            { _id: req.body._id }, 
            { $push: { projects: project._id } });
        const pipeline = req.body.dsl;

        for(const step in pipeline){
            let pip;
            let input;
            if(typeof pipeline[step] === 'object'){
                for(const nestedS in pipeline[step]){
                    switch(nestedS){
                        case "language":
                            input = pipeline[step][nestedS].script;
                            pip = await Pipeline.create({
                                name: `{$step} language`,
                                script: input
                            });
                            await Project.findOneAndUpdate(
                                { _id: project._id }, 
                                { $push: { segments: pip._id } });
                            break;
                        case "docker":
                            input = pipeline[step][nestedS].script;
                            pip = await Pipeline.create({
                                name: `{$step} docker`,
                                script: input
                            });
                            await Project.findOneAndUpdate(
                                { _id: project._id }, 
                                { $push: { segments: pip._id } });
                            break;
                        case "script":
                            input = pipeline[step][nestedS].script;
                            pip = await Pipeline.create({
                                name: `{$step} script`,
                                script: input
                            });
                            await Project.findOneAndUpdate(
                                { _id: project._id }, 
                                { $push: { segments: pip._id } });
                            break;
                    }

                }
            }
            else{
                input = pipeline.repo;
                pip = await Pipeline.create({
                    name: "repo",
                    script: input
                });
                await Project.findOneAndUpdate(
                    { _id: project._id }, 
                    { $push: { segments: pip._id } });
            }
        }
        const allProjects = await User.findById(req.body._id);
        res.status(200).send(allProjects.projects);
    }
    catch(e){
        console.log(e);
        res.status(500);
        res.end("Error Adding Project")
    }
};

async function deleteProject (req, res, next){
    try{
        const project = await Project.findById(req.body.project_id);
        const list = project.segments;
        console.log(list);
        await Pipeline.deleteMany({_id: {$in: list}});
        await Project.findByIdAndDelete(req.body.project_id);
        await User.findByIdAndUpdate({_id: req.body.user_id}, {$pull: { projects: req.body.project_id }});
        const user = User.findById(req.body.user_id);
        res.status(200).send(user);
    }
    catch(e){
        console.log(e);
        res.status(500);
        res.end("Error Deleting Project");
    }
};

async function getProject(req, res, next){
    try{
        const project = await Project.findById(req.body._id);
        res.status(200).send(project);
    }
    catch(e){
        console.log(e);
        res.status(500);
        res.end("Error Deleting Project");
    }
}

module.exports = {
    addProject: addProject,
    deleteProject : deleteProject,
    getProject : getProject
};