const advancedResult = (model) => async(req, res, next) => {

    const queryParam = { ...req.query };
    let query = model.find(queryParam)

    //remove certain fields from query params
    let excludeField = ["select", "sort", "page", "limit"]
    await excludeField.forEach(field => {
        delete queryParam[field]
    })

    if(req.query.select){
        query.select(req.query.select.replaceAll(",", " "))
    }

    if(req.query.sort){
        query.sort(req.query.sort.replaceAll(",", " "))
    }
console.log(req.query)
    let page = req.query.page || 1
    let limit = req.query.limit || 5
    let skip = (page - 1) * limit
    query.skip(skip).limit(limit)
    let pagination = {
        page: page,
        limit: limit
    }

    const response = await query;
    res.advancedResult = {
        success: true,
        message: `${model.modelName} details`,
        data: {
            count: await model.countDocuments(),
            pagination,
            response
        }
    }
    next();
}

module.exports = advancedResult