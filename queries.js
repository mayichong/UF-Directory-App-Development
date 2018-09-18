var fs = require('fs'),
config = require('./config.js'),
mongoose = require('mongoose'),
Listing = require("./ListingSchema.js");

mongoose.connect('mongodb://CEN3031:CEN3031TA@ds259732.mlab.com:59732/ufbootcamp');



/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   Listing.find({name: "Library West" }, function (err,listing){
	   if (err)
		   throw err;
	   
	   console.log(listing);
   });
   
   
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   
   Listing.remove({code: "CABL"}, function (err,listing){
	   if (err)
		   throw err;
	   console.log("Removed CABL success!");
	   
	   
   });
   
};

var updatePhelpsLab = function() {
  /*
    Phelps Laboratory's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   Listing.findOneAndUpdate ({name:'Phelps Laboratory'},{address:'1953 Museum Rd, Gainesville, FL 32603'}, function (err,listing){
	   if (err)
		   throw err;
	   console.log("Update PhelpsLab success!");
   });
   
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   
   Listing.find({}, function(err,listing){
	   if (err)
		   throw err;
	   console.log(listing);
   });
   
   
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
