const router = require('express').Router();
const bookingCategoriesController = require('../controllers/booking/categories');

router.get("/",(req,res)=>{
	res.render("pages/index");
});

router.get("/docs/booking/categories",(req,res)=>{
	res.render("pages/booking/categories");
});

//category 
router.get('/booking/categories', bookingCategoriesController.getAllCategories);
router.get('/booking/category/:id', bookingCategoriesController.getSingleCategory);
router.post('/booking/add-category', bookingCategoriesController.addCategory);
router.put('/booking/edit-category/:id', bookingCategoriesController.updateCategory);
router.delete('/booking/delete-category/:id', bookingCategoriesController.delCategory);

module.exports = router;