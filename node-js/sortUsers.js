// cmd - npm install csv-parser
// cmd - npm i obj-csv

// obj-csv module converts javascript object to csv format
var objToCsv = require('obj-csv');

// for performing our operation in csv file like sorting that what we needed for these question
const csv = require('csv-parser')

// file system module of node js
const fs = require('fs');

// for storing the data of csv file for sorting
const results = [];

// read the csv file created in question first
fs.createReadStream('../csv_files/users.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))  //push data into javascript object
    .on('end', () => {
        var x = 0;
        for(var x in results){} //count number of users in csv file
        
        // sorting are done here by changing values
        for(var i = 0; i<x; i++){
            if(results[i].first_name > results[i+1].first_name)
            {
                var temp = results[i];
                results[i] = results[i+1];
                results[i+1] = temp;
                i = -1;
            }

        }

        // module converts javascript object into csv format
        objToCsv(results, ['id', 'uid','password','first_name','last_name','username','email','avatar','gender','phone_number','social_insurance_number','date_of_birth','employment','address','credit_card','subscription'],  function(err, csvFile) {
            
            // after converting write file into sorted_users.csv file in utf-8 format encoding
            fs.writeFileSync('../csv_files/sorted_users.csv', csvFile, 'utf-8', err => {
                if(err)
                console.log('something went wrong')
                else
                console.log('job is really done');
            })
        });

        console.log('The sorting is done and sorted_users.csv file is created successfully by first_name.');
});