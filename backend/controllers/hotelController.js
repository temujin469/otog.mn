const Hotel = require("../models/hotel");
const CustomError = require("../customErrors");
const asyncHandler = require("express-async-handler");
const { StatusCodes } = require("http-status-codes");
const filter = require("../utils/filterHotel");

//create hotel
exports.createHotel = asyncHandler(async (req, res, next) => {
  const newHotel = await Hotel.create({
    ...req.body,
    createdBy: req.user.userId,
  });

  res.status(StatusCodes.CREATED).json({
    success: true,
    hotel:newHotel,
  });
});

//get all hotels
exports.getAllHotels = asyncHandler(async (req, res, next) => {
  const {page=1,limit = 50} = req.query;

  const hotels = await Hotel.find();
  // const filteredHotels = new FilterHotels(hotels, req.query).search().filter();
  const filteredHotels = filter(hotels,req.query)

  // pagination
  const totalHotels = await Hotel.countDocuments();
  const pageQuantity = Math.ceil(totalHotels/Number(limit));

  if(Number(page) > pageQuantity) throw new CustomError.NotFoundError('хуудас олдсонгүй')

  res.status(StatusCodes.OK).json({
    success: true,
    hotel: {
      filteredHotels,
      totalHotels,
      count:filteredHotels.length,
      pageQuantity
    },
  });
});

// get hotel detail
exports.getHotel = asyncHandler(async (req, res, next) => {
  const hotel = await Hotel.findById(req.params.id);

  if (!hotel) {
    throw new CustomError.NotFoundError(`${req.params.id} -тай Hotel алга`);
  }

  res.status(StatusCodes.OK).json({
    success: true,
    hotel,
  });
});

//update hotel
exports.updateHotel = asyncHandler(async (req, res, next) => {
  const hotel = await Hotel.findById(req.params.id);

  if (!hotel) {
    throw new CustomError.NotFoundError(`${req.params.id} -тай Hotel алга`);
  }

  hotel = await Hotel.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updatedBy: req.userId },
    { new: true }
  );

  res.status(StatusCodes.CREATED).json({
    succces: true,
    hotel,
  });
});
