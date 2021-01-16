const Joi = require('joi');

const annotationValidation = (data) => {
	const schema = Joi.object({
		callback_url: Joi.string().required(),
		instruction: Joi.string(),
		urgency: Joi.string(),
		attachment_type: Joi.string(),
		attachment: Joi.string().required(),
		objects_to_annotate: Joi.array().items(Joi.string()).required(),
		with_labels: Joi.boolean(),
		examples: Joi.array().items(
			Joi.object().keys({
				correct: Joi.boolean().required(),
				image: Joi.string().required(),
				explanation: Joi.string().required(),
			})
		),
	});

	return schema.validate(data);
};

module.exports.annotationValidation = annotationValidation;
