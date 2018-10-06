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
      domain: 'letsrovo.auth0.com',
      clientID: 's_ZczryHCSHkAjKWyIYbZrKoHIUlnULS',
      clientSecret: 'kQgSDqqaKgqsa6-Dc8OCR80b-XK5wUUO-BQu4OKw8W6hu659oOz_K26yFjMyC8Tx', // Replace this with the client secret for your app
      callbackURL: 'http://localhost:5000/login/callback'
    }
  }
  
}
