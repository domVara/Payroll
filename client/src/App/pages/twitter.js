var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         'HR2RypCQIo9srhXsjaoaTyhlN',
  consumer_secret:      'ND7BGkHeTpbHLzZBgv74HUhrtLR7JjIRZprLh5l9MI5Phw6c0g',
  access_token:         '328626025-sXNfhcXzREIjS6ydtRndsMnL6MNK2P4PxbEF9afU',
  access_token_secret:  'OL1mr012FQU7YSgGrCbqHsan94TZxeVelNXxxCLY3kF7u',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  //strictSSL:            false,     // optional - requires SSL certificates to be valid.
})

T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
    console.log(data)
  })