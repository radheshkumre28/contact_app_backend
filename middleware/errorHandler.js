const {constants} = require('../constants')

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
             title:"Validation Failed",
             message: err.message, 
             stackTrace: 
             err.stack
            });
            break;
        case constants.NOT_FOUND:
            res.json({
            title:"Not Found", 
            message: err.message, 
            stackTrace: err.stack
        }); 
        case constants.UNAUTHORIZED:
            res.json({
            title:"Unauthorized", 
            message: err.message, 
            stackTrace: err.stack
        });
        case constants.FORBIDEN:
            res.json({
            title:"Forbiden", 
            message: err.message, 
            stackTrace: err.stack
        });
        case constants.TO_MANY_REQUEST:
            res.json({
            title:"To many request", 
            message: err.message, 
            stackTrace: err.stack
        });
        case constants.INTERNAL_SERVER_ERROR:
            res.json({
            title:"Internal server error", 
            message: err.message, 
            stackTrace: err.stack
        });
        default:
            console.log(statusCode)
            console.log('No Error, All good!')
            break;
    }
    
}

module.exports = {errorHandler}