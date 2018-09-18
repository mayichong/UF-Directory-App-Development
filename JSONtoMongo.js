'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */

mongoose.connect('mongodb://CEN3031:CEN3031TA@ds259732.mlab.com:59732/ufbootcamp');
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

  //Found this on stackoverflow (https://stackoverflow.com/questions/10058814/get-data-from-fs-readfile) 
  
 fs.readFile('./listings.json', 'utf-8', function read(err,data){
	 
	 if(err){
		throw err;
	}
	
	//read every data in listings.json
	 var listings = JSON.parse(data);
	 //count how many data in listing.json
	 var count = listings.entries.length;
	 //Create a for loop to fill in the list
	for (var i = 0;i < count;i++){
		var listing = listings.entries[i];
	
	
	 //Create newList for input code, name, coordinates and address
	 var newList = new Listing ({
		code: listing.code,
		name: listing.name,
		coordinates: listing.coordinates,
		address: listing.address
	 
	 });
	 
	 //save the newList and check for errors
	 newList.save(function(err){
		 if (err)
			 throw err;
	 });
	}
	 
	 
 });
 
 
 
 
 
/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */
