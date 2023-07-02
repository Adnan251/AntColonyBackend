const path = require('path');
const fs = require('fs');
const Pipe = require('../models/Pipelines.js');
const simpleGit = require('simple-git');
const { exec } = require('child_process');

async function executePipe (req, res, next){
    try{
        const pipe = await Pipe.findById({_id : req.body.id});
        if (pipe.name == "repo"){
            const regex = /^(https?:\/\/)?(www\.)?github\.com\/[^\s/]+\/[^\s/]+$/;
            if(regex.test(pipe.script)){
                const dir = path.join(__dirname, '..', 'projects', req.body.name);
                simpleGit().clone(pipe.script, dir).then(() => {
                    const dokFile = path.join(dir, 'Dockerfile');
                    fs.access(dokFile, fs.constants.F_OK, (err) => {
                        if (err) {
                            res.status(400).send(err);
                        } else {
                            res.status(200).send("Success");
                        }
                    });
                })
            }else{
                res.status(400).send("Not a Valid GitHub Url");
            }
        }
        else{
            const dir = path.join(__dirname, '../projects', req.body.name);
            process.chdir(dir);
            exec(pipe.script, (error, stfout, stderr) => {
                if(error){
                    res.status(400).send(error);
                } else {
                    res.status(200).send('Success');
                }
            })
        }
    }
    catch(e){
        console.log(e);
        res.status(500);
        res.end("Error Executing Pipe");
    }
}

module.exports = {
    executePipe: executePipe,
};