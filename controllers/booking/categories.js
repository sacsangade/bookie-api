const bookingCategoriesModel = require('../../models/booking/categories');
const bookingCategoriesController = {};

//Add Category
bookingCategoriesController.addCategory  = async (req, res, next) => {
    const categoryNewId = await bookingCategoriesModel.findOne().sort({ _id: -1 }).limit(1);
    let categoryId = 0;
    if(categoryNewId) {
	    const categryFinalId = categoryNewId.categoryid;
	    categoryId = categryFinalId + 1;
	} else {
	    categoryId = 1;
	}
    const { title, description } = req.body;
    var bookingCategoryObject = {
        categoryid: categoryId,
        categorytitle: title,
        categorydescription:description,
    };
    const newBookingCategory = new bookingCategoriesModel(bookingCategoryObject);
    await bookingCategoriesModel.insertOne(newBookingCategory);
    res.status(200).json({'status':'ok'});
};
//Get All Categories
bookingCategoriesController.getAllCategories  = async (req, res, next) => {
    const bookingCategories = await bookingCategoriesModel.find({}).sort({ field: 'asc', _id: -1 });
    if(bookingCategories) {
        res.status(200).json(bookingCategories);
    } else {
        return res.status(401).json({ error: 'No access' });
    }
};
//Get Single Category
bookingCategoriesController.getSingleCategory  = async (req, res, next) => {
    const bookingCategories = await bookingCategoriesModel.findOne({categoryid:req.params.id});
    if(bookingCategories) {
        res.status(200).json(bookingCategories);
    } else {
        return res.status(401).json({ error: 'No access' });
    }
};
//Update Category
bookingCategoriesController.updateCategory = async (req, res, next) => {
    const { title, description } = req.body;
    await bookingCategoriesModel.updateOne({categoryid: req.params.id }, { $set: { categorytitle: title, categorydescription: description } });
    res.status(200).json({'status':'ok'});
};
//Delete Category
bookingCategoriesController.delCategory  = async (req, res, next) => {
    const result = await bookingCategoriesModel.deleteOne({categoryid:req.params.id});
    if(result.deletedCount === 1) {
        res.status(200).json({'status':'ok'});
    } else {
        return res.status(401).json({ error: 'No access' });
    }
};

module.exports = bookingCategoriesController;