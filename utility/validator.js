const checkAllowedFilters = value => {
    const _allowedFilters = {
        'year': 1,
        'colorway': 1,
        'tags': 1, 
        'brand': 1,
        'category': 1,
        'features': 1
    }
    return typeof _allowedFilters[value] !== 'undefined'
}

const checkImport = importData => {
    let isValid = true
    for (const key of Object.keys(importData)) {
        // check that the keys are all valid filters
        if (!checkAllowedFilters(key)) {
            isValid = false
            break
        }
        // check the contents of each filter's values
        if (!Array.isArray(importData[key]) || importData[key].length < 1) {
            isValid = false
            break
        }
    }
    return isValid
}

module.exports = {
    checkAllowedFilters: checkAllowedFilters,
    checkImport: checkImport
}