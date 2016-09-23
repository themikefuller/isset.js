# isset.js
## I am tired of typing these two commands. Now they are one.

I use these functions often and they make a tedious mess. I am adding them to GitHub because I want a centralized place to download them from on the fly, and I don't ever want to type them again.

# isset

## nodeJS

    module.exports = function(value) {
        if (typeof value === 'undefined' || value === null) {
            return false;
        } else {
            return true;
        }
    };


## JavaScript

    isset = function(value) {
        if (typeof value === 'undefined' || value === null) {
            return false;
        } else {
            return true;
        }
    };


# isnumber

## nodeJS

    module.exports = function(obj) {
      return !isNaN(parseFloat(obj));
    }

    
## JavaScript
  
    var isnumber = function(obj) {
        return !isNaN(parseFloat(obj));
    }
    
