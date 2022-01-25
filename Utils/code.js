var random_number = require('random-number')

const getCode = () => {
    return random_number({ min:1000, max:9999, integer:true })
}

exports.getCode = getCode