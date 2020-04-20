import Joi  from "@hapi/joi";

export const userValidation = (data:any):any => {
    const schema = Joi.object({
        first_name: Joi.string().min(3).required(),
        last_name: Joi.string().min(3).required(),
        location: Joi.string().min(3).required(),
        phone_number: Joi.string().min(10).required(),
        email: Joi.string().min(6).required(),
    })

    return schema.validate(data)
}