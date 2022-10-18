const birds = require("../db.json");
const wishlist = [];

module.exports = {
  getAllBirds: (req, res) => {
    res.status(200).send(birds);
  },
  getWishList: (req, res) => {
    res.status(200).send(wishlist);
  },

  deleteBird: (req, res) => {
    const { id } = req.params;
    const index = wishlist.findIndex((wish) => {
      return wish.id === +id;
    });
    if (index === -1) {
      res.sendStatus(400);
      return;
    }
    wishlist.splice(index, 1);

    res.status(200).send(wishlist);
  },

  updateWishList: (req, res) => {
    const id = req.body.bird;
    const birdObject = birds.find((bird) => {
      return bird.id === id;
    });
    console.log(birdObject);
    wishlist.push(birdObject);
    res.status(200).send(wishlist);
  },
};
