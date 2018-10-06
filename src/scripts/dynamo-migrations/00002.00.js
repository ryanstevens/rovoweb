const dynamo_utils = require('dynamo-utils');
const node_uuid = require('node-uuid');


module.exports = async function() {

  const Content = dynamo_utils.getModel('Content');

  items.forEach(item => {
    const content = new Content(Object.assign({}, {
      content_uuid: node_uuid.v4()
    },item,  {data: item}));
    
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