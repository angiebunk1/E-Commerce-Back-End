const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [
      Product
    ]
  })
  .then((dbCategoryData) => {
    res.json(dbCategoryData)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    include: [
      Product
    ],
    where: {
      id: req.params.id
    }
  })
  .then((dbCategoryData) => {
    res.json(dbCategoryData)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then((dbCategoryData) => {
    res.json(dbCategoryData)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((dbCategoryData) => {
    res.json(dbCategoryData)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.delete({
    where: {
      id: req.params.id
    }
  })
  .then((dbCategoryData) => {
    res.json(dbCategoryData)
  })
});

module.exports = router;
