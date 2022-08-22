const jwt = require('jsonwebtoken');
class authController{
    static async authController(req, res, next){
        const token = req.header("authorization-token");
        if(!token) return res.status(401).send("Acess Denied");
        try{
            const userVerifed = jwt.verify(token, process.env.TOKEN_SECRET);
            req.user = userVerifed;
            next();
        }
        catch(err){
            res.status(403).send("Acess Denied");
        }
    }
}
module.exports = authController;