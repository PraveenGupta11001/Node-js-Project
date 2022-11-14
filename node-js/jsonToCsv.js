// 'json2csv' module converts the json format into csv(comma separated format)



// cmd - npm install json2csv
// cmd - npm install cross-fetch

// this modules converts json format data into csv format and save it
const { Parser } = require('json2csv');

// cross-fetch used for fetch api, introduced in es6 
const fetch = require('cross-fetch').fetch;
const json2csvParser = new Parser();

// file system in node module
let fs = require('fs');

// taking input using prompt-sync module
const ps = require('prompt-sync')
const prompt = ps();

// taking input for number of users required by us
let num = prompt('Enter the number of users you want in csv file : ');

// count how many times needed to perform task
let count = 0;


// set interval sets the time for every 1000ms = 1s gap and call unlimited times
let myInterval = setInterval(

    // this function do the main task i.e., converting json data into csv file format
    function APIToCSV(){

        // check the required number of times needed to put users data into csv file
        if (count > (num - 2)){
            StopInterval();
        }
        // else increment by one
        else{
            count++;
        }

        // store the file location where it gonna save the file users.csv according to question 1 in assignment
        let filename = '../csv_files/users.csv';

        // random user api generator, where we get our random data
        let url = 'https://random-data-api.com/api/v2/users'; 

        // use of fetch api
        fetch(url)
        .then(
            // after taking data in json format using fetch api then take data into json format
            response => {
                return response.json();
            }
        )
        .then( (json) => {
            // parse the data into json, use of module
            const csv = json2csvParser.parse(json);
            

            // fs.existsSync return true if file is already created file if not then false
            if(fs.existsSync(filename)){
                // append file data 
                fs.appendFile(filename, csv, function(err) {
                    if(err){
                        console.log("File cannot be appended");
                    }
                    else {
                        console.log('File appended successfully');
                    }
                });
            }
            else{
                // write file with three parameter for file name with extension , data, what to if success or if failure
                fs.writeFile(filename, csv, function(err) {
                    if (err) throw err;
                    console.log('file saved');
                });
            }}).catch( err => console.log("something went wrong"));
        
        },
// call these function in every 1000ms = 1seconds
1000);

// for stopping the setInterval function of javascript we use clearInterval(intervalName);
function StopInterval() {
    clearInterval(myInterval);
}