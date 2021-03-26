
const formats = {
    'mm/dd/yyyy' : '',
    'dd/mm/yyyy' : '',
    'yyyy/mm/dd' : '',
    'mm-dd-yyyy' : '',
    'dd-mm-yyyy' : '',
    'yyyy-mm-dd' : ''
}

let validate = (value, options)=>{
    var options = options || {}
    var format = options.format
 
    format = format || 'mm/dd/yyyy'

    if(!formats.hasOwnProperty(format)) return false;

    format = format.replace(/\-/g, "/");
    return (isDate(value,format))
}

 isDate = (pValue, format) => {
    var currVal = pValue;
    if (currVal == '') return false;

    var rxDatePattern = '';
    
    if(format === 'yyyy/mm/dd')
       rxDatePattern = /^(\d{4})(\/|-)(\d{1,2})(\/|-)(\d{2})$/
    else
        rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex

    var dtArray = currVal.match(rxDatePattern); // is format OK?
     
    if (dtArray == null) return false;

    //Checks for mm/dd/yyyy format.
    if(format === 'mm/dd/yyyy'){
        dtMonth = dtArray[1];
        dtDay = dtArray[3];
        dtYear = dtArray[5];
    }
    //Checks for dd/mm/yyyy format.
    else if(format === 'dd/mm/yyyy'){
        dtMonth = dtArray[3];
        dtDay = dtArray[1];
        dtYear = dtArray[5];
    }
    //Checks for yyyy/mm/dd format.
    else if(format === 'yyyy/mm/dd'){
        dtMonth = dtArray[3];
        dtDay = dtArray[5];
        dtYear = dtArray[1];
    }
    else return false;

    if (dtMonth < 1 || dtMonth > 12) return false;
    else if (dtDay < 1 || dtDay > 31) return false;
    else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31) return false;
    else if (dtMonth == 2) {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap)) {
            return false;
        }
        else if (dtYear < 1753)  return false;
    }
    else if (dtYear < 1753) return false;
    return true;
};

exports.validate = validate;