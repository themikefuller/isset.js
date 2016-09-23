module.exports = function(value) {
    if (typeof value === 'undefined' || value === null) {
        return false;
    } else {
        return true;
    }
};
