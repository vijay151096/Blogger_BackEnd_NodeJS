const errorHandler = async(err, req, res, next) => {

    if(err.name === "CastError"){
        res.status(400).json({
            success: false,
            error: "Invalid Entries",
            message: err.message
        })
    } if(err.name === "ValidationError"){
        res.status(400).json({
            success: false,
            error: "Validation Failed",
            message: err.message
        })
    } else {
        res.status(500).json({
            success: false,
            error: "Internal Server Error",
            message: err.message
        })
    }

}

module.exports = errorHandler;