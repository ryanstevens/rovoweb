module.exports = {
  boring: {
    app: {
      port: 5000
    },
    logger: {
      name: 'rovoweb',
      level: 'debug'
    }
  },
  connections: {
    dynamodb: {
      local: true,
      accessKeyId: 'key',
      secretAccessKey: 'secret',
      region: 'us-east-1'
    },
    auth0: {
      domain: 'test',
      clientID: 'test',
      clientSecret: 'test', // Replace this with the client secret for your app
      callbackURL: 'test.com'
    }
  }
  
}
