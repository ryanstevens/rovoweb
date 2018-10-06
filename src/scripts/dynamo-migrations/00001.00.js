const dynamoUtils = require('dynamo-utils');

module.exports = async function() {

  await dynamoUtils.dropAllTables();
  
  await dynamoUtils.createTable('Business', {
    create: true, // Create table in DB, if it does not exist,
    update: true, // Update remote indexes if they do not match local index structure
    waitForActive: false, // Wait for table to be created before trying to use it
    waitForActiveTimeout: 10, // wait 3 minutes for table to activate
    streamOptions: { // sets table stream options
      enabled: false, // sets if stream is enabled on the table
      type: undefined // sets the stream type (NEW_IMAGE | OLD_IMAGE | NEW_AND_OLD_IMAGES | KEYS_ONLY) (https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_StreamSpecification.html#DDB-Type-StreamSpecification-StreamViewType)
    },
    serverSideEncryption: false // Set SSESpecification.Enabled (server-side encryption) to true or false (default: true)
  });

  await dynamoUtils.createTable('User', {
    create: true, // Create table in DB, if it does not exist,
    update: true, // Update remote indexes if they do not match local index structure
    waitForActive: false, // Wait for table to be created before trying to use it
    waitForActiveTimeout: 10, // wait 3 minutes for table to activate
    streamOptions: { // sets table stream options
      enabled: false, // sets if stream is enabled on the table
      type: undefined // sets the stream type (NEW_IMAGE | OLD_IMAGE | NEW_AND_OLD_IMAGES | KEYS_ONLY) (https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_StreamSpecification.html#DDB-Type-StreamSpecification-StreamViewType)
    },
    serverSideEncryption: false // Set SSESpecification.Enabled (server-side encryption) to true or false (default: true)
  });
  
  await dynamoUtils.createTable('Content', {
    create: true, // Create table in DB, if it does not exist,
    update: true, // Update remote indexes if they do not match local index structure
    waitForActive: false, // Wait for table to be created before trying to use it
    waitForActiveTimeout: 10, // wait 3 minutes for table to activate
    streamOptions: { // sets table stream options
      enabled: false, // sets if stream is enabled on the table
      type: undefined // sets the stream type (NEW_IMAGE | OLD_IMAGE | NEW_AND_OLD_IMAGES | KEYS_ONLY) (https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_StreamSpecification.html#DDB-Type-StreamSpecification-StreamViewType)
    },
    serverSideEncryption: false // Set SSESpecification.Enabled (server-side encryption) to true or false (default: true)
  });
}