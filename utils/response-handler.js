const responseData = function (response, statusCode, value) {
    var data = {
        success: true,
        data: value
    };

    response.status(statusCode).json(data);
    response.end();
};

const responseMessage = function (response, statusCode, message) {
    var data = {
        success: true,
        message: message
    };

    response.status(statusCode).json(data);
    response.end();
};

module.exports = { responseData, responseMessage };