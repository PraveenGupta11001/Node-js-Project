# Conveting the json data into the csv file format by Using Node js

*********************************************************************************************************************************************
*********************************************************************************************************************************************

**1. Write a program to GET random data of an user and write it in a File named
users.csv. Each GET request must have an interval time of 1 second and append the
information in a comma separated format. You can use any open source mock rest
 api endpoints available on the internet or use Random Data API
 (https://random-data-api.com/documentation) . 


Answer 1 : 
program is written using node js is the runtime of javascript built with chrome v8 engine
require modules for completing the task and you must have node js installed in your 
operating system if not then, go to this link and download and install it in your system : 

-> https://nodejs.org/en/download/    

according to your operating system.


Avoid this if you don't have any errors or missing dependency

## <b> very Important </b> - 
> open your terminal and run these command only when code <b>is not working</b> 
and showing any types of errors : 

    npm init
    npm install json2csv
    npm install cross-fetch
    npm install csv-parser
    npm i obj-csv
    npm install prompt-sync

These are six modules of node js that are used in given assignment
I already include those dependencies if not shown in your package.json
for any reason then only run those npm commands for installing those 
modules as your dependencies.

## Now if you don't face any errors or missing modules or dependencies then, let's check out the codes of assignment.

open your terminal at this folder path and run those three assignment files
## Answer 1 : run command
> C:\Users\yourSystemName\Desktop\YourFolderName\node-js> node jsonToCsv.js

your file path may be different so check your directory.

after running the command you have output : 

    Enter the number of users you want in csv file : 10 
    file saved
    File appended successfully
    File appended successfully
    File appended successfully
    File appended successfully
    File appended successfully
    File appended successfully
    File appended successfully
    File appended successfully
    File appended successfully

I enter 10 users so, I have 10 users in my users.csv file that is created on your folder
in the name of <b> "users.csv"</b>;

you can check the these file where random users were put after every second that is 
appended.

> Now first question is solved.
    
*********************************************************************************************************************************************
*********************************************************************************************************************************************

## Question : A. Write a program to read users.csv and create users-sorted.csv by applying
> sorting algorithm on firstName / Name / Username (Field of your choice
based on your dataset) [4 marks]


Answer A.  run command
    
    C:\Users\yourSystemName\Desktop\YourFolderName\node-js> node sortUsers.js

your file path may be different so check your directory.

after running the command you have output : 
> The sorting is done and sorted_users.csv file is created successfully by first_name.

*Now you can check the file named sorted_users.csv and you find it is sorted by first_name
from **users.csv**.

> Now question is solved.

*********************************************************************************************************************************************
*********************************************************************************************************************************************

## Question : B.Write a program to Input Id or Username of an user and return the details of
## that user in the output of the program [4 marks].

****Answer B. Answer A. run command

    > C:\Users\yourSystemName\Desktop\YourFolderName\node-js> node first_nameSearch.js

your file path may be different so check your directory.

after running the command you have output : 
    
    The List of first Name you can search for :
    Guy
    Woodrow
    Diana
    Darren
    Dorthea
    Kendall
    Keren
    Donnie
    Joey
    Jay
    Enter the first name of the person and search data related to it : **Jay**   > //This is my input and name is case sensitive so check for sure
    
    You Enter the name is Jay and the data is :
    {
      id: '6447',
      uid: '8f9275bd-53be-4961-9f3a-ddb7007ee466',
      password: 'ZPiRfcNJQn',
      first_name: **'Jay'**,      > // here is the first name of jay and other informations related to it.
      last_name: 'Ortiz',
      username: 'jay.ortiz',
      email: 'jay.ortiz@email.com',
      avatar: 'https://robohash.org/laboriosamlaudantiumimpedit.png?size=300x300&set=set1',
      gender: 'Agender',
      phone_number: '+242 1-560-464-1361 x7334',
      social_insurance_number: '566994034',
      date_of_birth: '1997-06-01',
      employment: '{"title":"Investor Coordinator","key_skill":"Technical savvy"}',
      address: '{"city":"West Porter","street_name":"Madalene Junctions","street_address":"848 Scarlett Springs","zip_code":"86435-9086","state":"Delaware","country":"United States","coordinates":{"lat":-54.168591538043415,"lng":177.04246999849374}}',
      credit_card: '{"cc_number":"5332-9823-3465-1590"}',
      subscription: '{"plan":"Essential","status":"Blocked","payment_method":"Paypal","term":"Annual"}'
    }
            
*****Now question has solved.

*********************************************************************************************************************************************
*********************************************************************************************************************************************

> I really enjoyed solving these question and I say these is not easy but still like and I have difficulties but after solving I enjoyed and like it.
