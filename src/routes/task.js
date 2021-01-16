const express = require('express');
const router = express.Router();
const {
	annotationValidation,
} = require('../utils/validations/taskValidations');

router.get('/annotation', async (req, res) => {
	//Validate incoming request
	const { error } = annotationValidation(req.body);
	if (error) {
		return res.status(400).send({
			error: error.details[0].message,
			response: {
				statusCode: 400,
			},
		});
	}

	try {
		res.status(200).send({
			response: {
				statusCode: 200,
			},
			body: req.body,
		});
	} catch (err) {
		res.status(500).send({
			error: error.details[0].message,
			response: {
				statusCode: 500,
			},
		});
	}
});

module.exports = router;
