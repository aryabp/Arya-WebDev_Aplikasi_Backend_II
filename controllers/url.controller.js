const { urlServices } = require('../services');
const { responseHelper } = require('../helper');

const getUrls = async (req, res) => {
    try {

        const urls = await urlServices.getUrls();
        if(urls instanceof Error) {
            throw new Error(urls);
        } 
        res.status(responseHelper.status.success).json(urls);
        
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getUrlByName = async (req, res) => {
    try {
        const { Nama } = req.body;
        const url = await urlServices.getUrlByName(Nama);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const getUrlByMailAndPhone = async (req, res) => {
    try {
        const { Email,Telepon } = req.body;
        const url = await urlServices.getUrlByMailAndPhone(Email,Telepon);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const patchUrlByName = async (req, res) => {
    try {
        const { Nama,Angkatan,Email,Telepon,Deskripsi } = req.body;
        const url = await urlServices.patchUrlByName(Nama,Angkatan,Email,Telepon,Deskripsi,req.body['Jenis kelamin']);

        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const deleteUrlByMail = async (req, res) => {
    try {
        const { Email } = req.body;
        const url = await urlServices.deleteUrlByMail(Email);
        
        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const createpraktikan = async (req, res) => {
    try {
        const { Nama,Angkatan,Email,Telepon,Deskripsi } = req.body;
        const url = await urlServices.createpraktikan(Nama,Angkatan,Email,Telepon,Deskripsi,req.body['Jenis kelamin']);
        
        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const createBULKpraktikan = async (req, res) => {
    try {
        const url = await urlServices.createBULKpraktikan(JSON.stringify(req.body));
        
        if(url instanceof Error) {
            throw new Error(url);
        }

        res.status(responseHelper.status.success).json(url);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
/*
const insertUrl = async (req, res) => {
    try {

        const { url, name, description } = req.body;
        const result = await urlServices.insertUrl(url, name, description);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}

const deleteUrl = async (req, res) => {
    try {
        const { url } = req.body;
        const result = await urlServices.deleteUrl(url);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
const updateUrl = async (req, res) => {
    try {
        const { url, name, description } = req.body;
        const result = await urlServices.updateUrl(url, name, description);
        if(result instanceof Error) {
            throw new Error(result);
        }
        res.status(responseHelper.status.success).json(result);
    } catch (error) {
        res.status(responseHelper.status.error).json(error.message);
    }
}
*/
module.exports = {
    getUrls,
    getUrlByName,
    getUrlByMailAndPhone,
    patchUrlByName,
    deleteUrlByMail,
    createpraktikan,
    createBULKpraktikan,
    /*
    insertUrl,
    deleteUrl,
    updateUrl
    */
}