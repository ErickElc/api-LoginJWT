const Joi = require("@hapi/joi");


class validationControll{
    static registerValidate(data){
        const schema = Joi.object({
            name: Joi.string().required().min(3).max(50),
            age: Joi.string().required().min(2).max(3),
            email: Joi.string().required().min(3).max(50),
            password: Joi.string().required().min(6).max(100)
        });
        return schema.validate(data);
    }
    static loginValidate(data){
        const schema = Joi.object({
            email: Joi.string().required().min(3).max(50),
            password: Joi.string().required().min(6).max(100)
        });
        return schema.validate(data);
    }
}
module.exports = validationControll;