const dynamo_utils = require('dynamo-utils');
const node_uuid = require('node-uuid');
const util = require('util');


function draw(arr) {
  const mod = arr.length;
  const item = arr[Math.round((Math.random() * 10000)) % mod];
  return item;
}

module.exports = async function() {

  const Content = dynamo_utils.getModel('Content');
  const Business = dynamo_utils.getModel('Business');
  const User = dynamo_utils.getModel('User');

  const bizModels = await Promise.all(bizes.map(async function(item) {
    const biz = new Business(Object.assign({ biz_uuid: node_uuid.v4()}, item));
    const bizSave = util.promisify(biz.save.bind(biz));
    await bizSave(); 
    return biz;
  }))
  

  const userModels = await Promise.all(users.map(async function(item) {
    let user = new User(Object.assign({user_uuid: node_uuid.v4()}, item));
    let userSaver = util.promisify(user.save.bind(user));
    await userSaver();
    return user;
  }))

  var items = Array.apply(null, Array(30));
  items = items.map(item => draw(experiences));
  
  const contentModels = await Promise.all(items.map(async function(item) {
    
    const content = new Content(Object.assign({}, {
      content_uuid: node_uuid.v4()
    },item, {
      biz_uuid : draw(bizModels).biz_uuid,
      user_uuid: draw(userModels).user_uuid
    }));
    
    const saver = util.promisify(content.save.bind(content));
    await saver();
    return content;
  }))

}

const bizes = [
  {
    name: 'Dance Dance Rev',
    image: 'http://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png'
  }
]

const users = [
  {
    provider_user_id: 'josh',
    name: 'Josh',
    thumb: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320/p320x320/11796443_992218744142684_2426826529674625047_n.jpg?_nc_cat=110&oh=fdad7d5fd23e971f8ad89e98659b7546&oe=5C1574EB'
  },
  {
    provider_user_id: 'marley',
    name: 'Marley', 
    thumb: 'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-1/37758485_1992232784141248_4964422156210405376_n.jpg?_nc_cat=110&oh=38e3db2fe38f982741e5dd680260b438&oe=5C1A2D2A'
  }
]

const experiences = [
  {
    "title": "So FUN!!!",
    "image_id": 1,
    "hashtags": ["dance", "yoga"],
    "fileLocation": "https://gazettereview.com/wp-content/uploads/2015/05/cat.jpg",
    "location": 
      {
        "city": "san francisco",
        "state": "ca"
      },
    "uploadDate": "10/01/18",
    "uploadTime": "12:00:00pm",
    "likes": "42",
    "shares": "10",
    "comments": 
      {
        "user1": "really fun event!",
        "user2": "cool =D"
      }
  },
  
  {
    "title": "Pretty great",
    "image_id": 1,
    "hashtags": ["dance", "yoga"],
    "fileLocation": 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350',
    "location": 
      {
        "city": "san francisco",
        "state": "ca"
      },
    "uploadDate": "10/01/18",
    "uploadTime": "12:00:00pm",
    "likes": "42",
    "shares": "10",
    "comments": 
      {
        "user1": "really fun event!",
        "user2": "cool =D"
      }
  }
]