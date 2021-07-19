const logger = require('../network/log')

exports.success = function (req, res, message, status) {
    res.status(status || 200).send({
        error: '',
        body: message
    })
}

exports.error = function (req, res, message, status, details) {
    logger.error('[response error] ' + details)

    res.status(status || 500).send({
        error: message,
        body: ''
    })
}

exports.warning = function (req, res, message, status, details) {
    logger.warning('[response warning] ' + details)

    res.status(status || 200).send({
        error: message,
        body: ''
    })
}