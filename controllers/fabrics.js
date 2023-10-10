const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res) => {
    const result = await mongodb.getDatabase().db().collection('fabrics').find();
    result.toArray().then((fabrics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(fabrics);
            
    });
};

const getSingle = async(req, res) => {
    const fabricId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('fabrics').find({_id: fabricId});
    result.toArray().then((fabrics) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(fabrics[0]);
            
    });
};

const createFabric = async(req, res) => {
        const fabric = {        
            fabric: req.body.fabric,
            length: req.body.length,
            width: req.body.width,
            color: req.body.color,        
            weight: req.body.weight,        
            name: req.body.name,      
            composition: req.body.composition,
            email: req.body.email,        
        };
        const response = await mongodb.getDatabase().db().collection('fabrics').insertOne(fabric);
        if(response.acknowledged){
            res.status(204).send();
        } else {
            res.status(503).json(response.error || "Some error occurred while creating the Fabric.");
        }
};

const updateFabric = async(req, res) => {
    const fabricId = new ObjectId(req.params.id);
    const fabric = {        
            fabric: req.body.fabric,
            length: req.body.length,
            width: req.body.width,
            color: req.body.color,        
            weight: req.body.weight,        
            name: req.body.name,      
            composition: req.body.composition,
            email: req.body.email,        
        };
        const response = await mongodb.getDatabase().db().collection('fabrics').replaceOne({_id: fabricId}, fabric);
            if(response.modifiedCount > 0){
            res.status(204).send();
            } else {
            res.status(503).json(response.error || "Some error occurred while updating the Fabric.");
            }
};

const deleteFabric = async(req, res) => {
    const fabricId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('fabrics').deleteOne({_id: fabricId});
    if(response.deleteCount > 0){
        res.status(204).send();
    } else {
        res.status(503).json(response.error || "Some error occurred while deleting the Fabric.");
    }
};

module.exports = {
    getAll,
    getSingle,
    createFabric,
    updateFabric,
    deleteFabric
}