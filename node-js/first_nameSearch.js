// cmd - npm install prompt-sync
const csv = require('csv-parser')
const ps = require('prompt-sync')
const prompt = ps();
const fs = require('fs');
const results = [];

let flag = false;

fs.createReadStream('../csv_files/users.csv')
    .pipe(csv({}))
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log('The List of first Name you can search for : ');

        // print all first name we have in csv files 
        for(var x in results)
            console.log(results[x].first_name);
            
        // take input from real-time user for first_name search
        let input = prompt('Enter the first name of the person and search data related to it : ');

        // search the first_name in csv file and output it's all data
        for(var x in results){
            if(results[x].first_name == input){
                console.log(`You Enter the name is ${input} and the data is : `);
                console.log(results[x]);
                flag = true;
                break;
            }
        }

        if(flag == false)
            console.log('looks like you entered the invalid first_name, please check and run again the file');
});