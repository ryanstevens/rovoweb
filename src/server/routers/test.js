const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: 'key',
  secretAccessKey: 'secret',
  region: "us-east-1",
  endpoint: "http://localhost:8000"
});

module.exports = function setupRoute({paths, decorators} = boringApp) {

  const { endpoint, get, entrypoint, middleware } = decorators.router;

  @endpoint('/tests')
  class Page {

    @get('/creds')
    creads(req, res) {
      var dynamodb = new AWS.DynamoDB();
      var params = {
          TableName : "Cars",
          KeySchema: [
              { AttributeName: "id", KeyType: "HASH"},  //Partition key
      ],
          AttributeDefinitions: [
              { AttributeName: "id", AttributeType: "N" },
      ],
          ProvisionedThroughput: {
              ReadCapacityUnits: 5,
              WriteCapacityUnits: 5
          }
      };
      dynamodb.createTable(params, function(err, data) {

          var docClient = new AWS.DynamoDB.DocumentClient();
          console.log("Importing Cars into DynamoDB. Please wait.");
          var cars = [
            { "id": 1,
              "type" : "Automatic",
              "name" : "Toyota Yaris",
              "manufacturer" : "Toyota",
              "fuel_type" : "Petrol",
              "description" : "A smooth ride"
            },
            { "id": 2,
              "type" : "Manual",
              "name" : "Volkswagen Golf",
              "manufacturer" : "Volkswagen",
              "fuel_type" : "Petrol",
              "description" : "Good Value"
            }
          ]
          cars.forEach(function(car) {
            console.log(car)
          var params = {
                  TableName: "Cars",
                  Item: {
                      "id": car.id,
                      "type": car.type,
                      "name": car.name,
                      "manufacturer": car.manufacturer,
                      "fuel_type": car.fuel_type,
                      "description": car.description
                  }
              };
          docClient.put(params, function(err, data) {
                if (err) {
                    res.send("Unable to add Car" + car.name +". Error JSON:" + JSON.stringify(err, null, 2));
                } else {
                    res.send("PutItem succeeded:" + car.name);
                }
              });
          });

      });
    }

  }
}
