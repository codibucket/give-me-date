# validate-date
This package will validate the input date.

# install
`npm install validate-date`

# usage
``` javascript
var vd = require('validate-date');
vd.validate('12/12/2021'); // sample output →  true  (default date format mm/dd/yyyy)
## default options
the exported function takes an option **object** with 1 property and one input value(date)
- `format` : date format (possible values mm/dd/yyyy, dd/mm/yyyy, yyyy/mm/dd, mm-dd-yyyy, dd-mm-yyyy, 
                          yyyy-mm-dd)
```

### Examples

``` javascript
// this is the functionality i like the most
var vd = require('validate-date');
var options = {
  format:  'mm/dd/yyyy'  
}
vd.validate('12/12/2021') // example outputs → true
vd.validate('02/30/2021') // example outputs → false  * february month does not have 30 days
```
#### If your application uses the date format mm/dd/yyyy by default then no need to pass option.

``` javascript
var vd = require('validate-date');
vd.validate('12/12/2021')  // example outputs → true
```

- format `mm/dd/yyyy`

``` javascript
var vd = require('validate-date');
var options = {
  format: 'mm/dd/yyyy' // example 
}
vd.validate('01/01/2020', options) // example output → true
vd.validate('13/01/2020', options) // example output → false
```
- format `dd/mm/yyyy`

``` javascript
var vd = require('validate-date');
var options = {
  format: 'dd/mm/yyyy' // example 
}
vd.validate('01/01/2020', options) // example output → true
vd.validate('01/15/2020', options) // example output → false
```
- format `yyyy/mm/dd`

``` javascript
var vd = require('validate-date');
var options = {
  format: 'yyyy/mm/dd' // example 
}
vd.validate('2020/01/05', options) // example output → true
vd.validate('2020/02/30', options) // example output → false (30th date for febrary month)
```
## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


