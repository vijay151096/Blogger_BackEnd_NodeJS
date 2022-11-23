const filterUsersResult = async(req, res, next) => {
    let userId = req.params.userId;
    if(userId){
        req.query.user = userId
        req.body.user = userId
    }
    let blogId = req.params.blogId;
    if(blogId){
        req.query.blog = blogId;
        req.body.blog = blogId;
    }
    next();
}

module.exports = filterUsersResult