const router = require("express").Router();
const {
  createHotel,
  getHotel,
  getAllHotels,
  updateHotel,
} = require("../controllers/hotelController");

router.route("/hotels").post(createHotel).get(getAllHotels);
router.route("/hotels/:id").get(getHotel);
module.exports = router;
