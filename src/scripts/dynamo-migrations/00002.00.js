const dynamo_utils = require('dynamo-utils');
const node_uuid = require('node-uuid');


module.exports = async function() {

  const Content = dynamo_utils.getModel('Content');

  var i= 0;
  items.forEach(item => {
    i++;
    let imageOverride = {}
    if (i % 2 === 0) {
      imageOverride.fileLocation = 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350'
    }
    const content = new Content(Object.assign({}, {
      content_uuid: node_uuid.v4()
    },item, imageOverride));
    
    content.save();
  
  })

}

const items = [
  {
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
    "image_id": 2,
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
    "image_id": 3,
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
  }
]