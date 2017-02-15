'use strict'

const { send } = require('micro')

module.exports = async (request, response) => {
  const payload = {
    'xForwardedFor': request.headers['x-forwarded-for'] || false,
    remoteAddress: request.connection.remoteAddress || false
  }
  send(response, 200, payload)
}
