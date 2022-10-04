const { param, body, query, check } = require('express-validator');
const { validator } = require('./validator');


const getUrlByName  = [
    body('Nama').isLength({min: 8}),
    validator
]

const getUrlByMailAndPhone  = [
    body('Email').isEmail(),
    body('Telepon').isLength(12),
    validator
]

const patchUrlByName  = [
    body('Nama').isLength({min: 8}),
    body('Jenis kelamin').isIn(['P','L']),
    body('Angkatan').custom((value)=>value>2018 ? true:false),
    body('Email').isEmail(),
    body('Telepon').isLength(12),
    body('Deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

const deleteUrlByMail  = [
    body('Email').isEmail(),
    validator
]

const createpraktikan  = [
    body('Nama').isLength({min: 8}),
    body('Jenis kelamin').isIn(['P','L']),
    body('Angkatan').custom((value)=>value>2018 ? true:false),
    body('Email').isEmail(),
    body('Telepon').isLength(12),
    body('Deskripsi').custom((value)=>value=='' ? false:true),
    validator
]

const createBULKpraktikan  = [
    body('*.Nama').isLength({min: 8}),
    body('*.Jenis kelamin').isIn(['P','L']),
    body('*.Angkatan').custom((value)=>value>2018 ? true:false),
    body('*.Email').isEmail(),
    body('*.Telepon').isLength(12),
    body('*.Deskripsi').custom((value)=>value=='' ? false:true),
    validator
]
/*
const insertUrl =  [
    body('url').isURL(),
    body('name').isLength({min: 5}),
    body('description').isLength({min: 5}),
    validator
]

const deleteUrl = [
    body('url').isURL(),
    validator
]

const updateUrl = [
    body('url').isURL().notEmpty().withMessage('Url is required'),
    body('name').isLength({min: 5}),
    body('description').isLength({min: 5}),
    validator
]
*/
module.exports = {
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