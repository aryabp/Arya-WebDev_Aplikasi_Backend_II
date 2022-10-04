const express = require("express");
const router = express.Router();
const { urlController } = require("../controllers");
const { urlValidation } = require("../validators");
//const { body, param, validationResult } = require('express-validator');

//router.route("/").get(urlController.getUrls);
/*
// Example with route /:name in longer version
router.route("/:name").get(
    param('name').isLength({min: 5}),
    (req, res, next) => {
        const error = validationResult(req);
        if(!error.isEmpty()) {
            return res.status(400).json({errors: error.array()});
        }
        next();
    },
    urlController.getUrlByName);
*/
// Example with route /:name in shorter version
// router.route("/:name").get(urlValidation.getUrlByName, urlController.getUrlByName);
/*
router.route("/insert").post(urlValidation.insertUrl, urlController.insertUrl);
router.route("/delete").delete(urlValidation.deleteUrl, urlController.deleteUrl);
router.route("/update").patch(urlValidation.updateUrl, urlController.updateUrl);
*/

// Service for CASE STUDY TASK
//i.	GET semua praktikan
router.route("/").get(urlController.getUrls);
//ii.	GET seorang praktikan berdasarkan nama
router.route("/getbyname").get(urlValidation.getUrlByName,urlController.getUrlByName);
//iii.	GET seorang praktikan berdasarkan email dan telepon
router.route("/getbymail&phone").get(urlValidation.getUrlByMailAndPhone,urlController.getUrlByMailAndPhone);
//iv.	PATCH seorang praktikan berdasarkan nama
router.route("/updatebyname").patch(urlValidation.patchUrlByName,urlController.patchUrlByName);
//v.	DELETE seorang praktikan berdasarkan email
router.route("/deletebymail").delete(urlValidation.deleteUrlByMail,urlController.deleteUrlByMail);
//vi.	CREATE seorang praktikan
router.route("/createpraktikan").post(urlValidation.createpraktikan,urlController.createpraktikan);
//vii.	CREATE lebih dari satu praktikan (Bulk Insert)
router.route("/createBULKpraktikan").post(urlValidation.createBULKpraktikan,urlController.createBULKpraktikan);

module.exports = router;