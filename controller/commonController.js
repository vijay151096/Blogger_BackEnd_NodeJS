const commonController = [];

commonController.updateRecordFeeds = function(model){
    model.modifiedAt = Date.now();
}

module.exports = commonController