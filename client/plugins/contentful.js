const config = require('../../.contentful.json')
const contentful = require('contentful')

module.exports = {
  createClient() {
    return contentful.createClient({
      space: config.CTF_SPACE_ID,
      accessToken: config.CTF_CDA_ACCESS_TOKEN
    })
  }
}
