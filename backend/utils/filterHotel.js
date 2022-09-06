const Hotel = require("../models/Hotel");

// class HotelFilters {
//   constructor(query, queryStr) {
//     this.query = query;
//     this.queryStr = queryStr;
//   }

//   // bairshilaar haih
//   search() {
//     const keyword = this.queryStr.location
//       ? {
//           location: { $regex: this.queryStr.location, $options: "i" },
//         }
//       : {};

//     console.log(`search queryStr : ${JSON.stringify(this.queryStr.location)}`);
//     this.query = this.query.find({ ...keyword });
//     return this.query;
//   }

//   // shvvh
//   filter() {
//     const copyQueryStr = { ...this.queryStr };

//     // zarim talbaruudiig hasah
//     let removeFields = ["location", "page", "limit"];
//     removeFields.forEach((field) => delete copyQueryStr[field]);

//     let queryStr = JSON.stringify(copyQueryStr);
//     queryStr = queryStr.replace(/\b(gt|gte|lt\lte)\b/g, (key) => `$${key}`);
//     console.log(`filter queryStr: ${queryStr}`);

//     this.query = this.query.find(JSON.parse(queryStr));
//     return this.query;
//   }

//   sort() {
//     const sort = this.queryStr;
//     // zarim talbaruudiig hasah
//     let removeFields = ["location", "page", "limit",];
//     removeFields.forEach((field) => delete copyQueryStr[field]);

//   }

//   select(){
//     const selectField = this.queryStr.select;
//     thi
//   }

//   // huudaslalt
//   pagination() {
//     const page = parseInt(this.queryStr.page) || 1;
//     const pageLimit = parseInt(this.queryStr.limit) || 2;
//     const skip = (page - 1) * pageLimit;
//     this.query = this.query.skip(skip).limit(pageLimit);
//     return this.query;
//   }
// }

// module.exports = HotelFilters;

const filter = (query, queryStr) => {
  // zarim talbaruudiig hasah
  const select = queryStr.select;
  const sort = queryStr.sort;
  const page = parseInt(this.queryStr.page) || 1;
  const pageLimit = parseInt(this.queryStr.limit) || 50;

  let removeFields = ["page", "limit", "sort", "select"];
  removeFields.forEach((field) => delete copyQueryStr[field]);

  const skip = (page - 1) * pageLimit;

  return query
    .find(queryStr)
    .select(select)
    .sort(sort)
    .skip(skip)
    .limit(pageLimit);
};

module.exports = filter;
