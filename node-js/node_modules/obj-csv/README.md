# obj-csv
Coverts a JavaScript object into a csv String.

## How to use

Install the module:
```javascript
npm install obj-csv --save
```

```javascript
//import the module to your project
var objToCsv = require('obj-csv');

//convert a object
var users = [{
	personal_info: {
		firstName: 'Sebastian',
		lastName: 'Vizcaino',
		phonenumber: '+573192399909'
	}
}, {
	personal_info: {
		firstName: 'Annie',
		lastName: 'Black',
		phonenumber: '+1234567086'
	}
}];

//objToCsv(object_to_convert, choose_fields_to_be_included_in_csv, callback);
objToCsv(users, ['personal_info.firstName', 'personal_info.lastName', 'personal_info.phonenumber'], function(err, csv) {
	console.log(csv);
});

```

Output:
```javascript
"personal_info.firstName","personal_info.lastName","personal_info.phonenumber"
"Sebastian","Vizcaino","+573192399909"
"Annie","Black","+1234567086"
```

## How to use along with restize

Code below add the possibility to export server response.

```javascript
var objToCsv = require('obj-csv');

//post middleware for list operation
var Tocsv = function(req, res, next) {
	var csv_query = (req.query._csv) ? req.query._csv.split('|') : [];
	if (csv_query.length > 0) {
		jsonToCsv(res.locals.data, csv_query, function(err, csv) {
			res.attachment('file.csv');
			res.locals.data = csv;
			next();
		});
	} else {
		next();
	}
};

...
// restize configuration
this.config = {
	model: User,
    fields: '-salt -hash -password',
    display_field: "%name",
    post: {
		list: Tocsv
	}
};
...
```

### Example:

Using the code above:

GET /api/users?_csv=personal_info.firstName|personal_info.lastName

will response with a .csv file with all the users with their first name and last name.


## License
[MIT](https://github.com/elvizcacho/obj-csv/blob/master/LICENSE)

