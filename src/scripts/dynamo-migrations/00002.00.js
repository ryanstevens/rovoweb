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

  
  const userModels = await Promise.all(users.map(async function(item) {
    let user = new User(Object.assign({user_uuid: node_uuid.v4()}, item));
    let userSaver = util.promisify(user.save.bind(user));
    await userSaver();
    return user;
  }))


  const bizModels = await Promise.all(bizes.map(async function(item) {

    const userToAdd = Array.apply(null, Array(item.user_count)).map(u => draw(users));

    const biz = new Business(Object.assign({ biz_uuid: node_uuid.v4(), social: userToAdd}, item));
    const bizSave = util.promisify(biz.save.bind(biz));
    await bizSave(); 
    return biz;
  }))
  
  // var items = Array.apply(null, Array(30));
  // items = items.map(item => draw(experiences));
  
  const contentModels = await Promise.all(experiences.map(async function(item) {
    
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

/*
Rodney's choreo was awesome!	#country #linedancing #dariusrucker
Gettin' hyphy with e-40	#country #twostepping #jonpardi
Breakin a sweat with this choreo	#countrywestern #bestshot #jimmyallen
So much fun!	#twostepping #flips #dips
Finally dancing again after tweaking my back a little	#aerials #swing #twostepping
This was FAST but so much fun!!	#thomasrhett #countrymusic #linedancing
Learned my first hip-hop routine. Woo!	#countrygirl #lukebryan #linedance
One of the classes at the studio	#lonelydrum #aarongoodvin #countrydance
Great job everyone! Love you all!!!	#e40 #hyphy #hiphop
Class was lit!	#bayarea #hipop #warriors
Fun times with Lo	#bigbank #yg #hiphop
Amazing class with amazing people	#levelup #dancechallenge #ciara
NAILED IT!!!	#heelsclass #hiphop #levelup 
Tonight was freaking awesome	#inmyfeelings #drake #hiphop
Always a blast with this crew	#2am #sagethegemini #masterclass
This was my favorite!!!	#masterclass #hiphop #yg
Props to everyone in my class tonight. Thank you!	#bigbank #masterclass #hiphop
*/

const bizes = [
  {
    name: 'Dance Dance Rev',
    address: '235 Mission St, San Francisco, CA 94107',
    claimed: false,
    user_count: 15,
    image: 'http://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png'
  },
  {
    name: 'Full Out Studio',
    address: '530 Kansas St, Oakland, CA 94107',
    claimed: false,
    user_count: 50,
    image: 'http://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png'
  },
  {
    name: 'Millennium Dance Complex',
    address: '2433 La Palma Ave, Anahiem, CA 94107',
    claimed: true,
    user_count: 92,
    image: 'http://www.traveller.com.au/content/dam/images/g/u/n/q/h/0/image.related.articleLeadwide.620x349.gunpvd.png/1488330286332.png'
  },
]

const names = [
  'Ryan',
  'Josh',
  'Marley',
  'Bill',
  'Bradley',
  'Jillian',
  'Mary',
  'Meek',
  'Kaitlyn',
  'Ram',
  'Victor',
  'Kara',
  'Karen',
  'Rachel',
  'Megan'
]


const profilePics = [
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/36087262_10156565682907853_6079430408242462720_o.jpg?_nc_cat=111&oh=a2572c86e9fc1849fcb655b0385c6bfc&oe=5C204987',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/33720243_10102903071293768_1085495792279486464_o.jpg?_nc_cat=101&oh=d5232c16fc5f4ef27f9255470a301f37&oe=5C541BFD',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/28058881_10213319358972785_488206189497018399_n.jpg?_nc_cat=104&oh=566da8a5041d2f040edd2b5cc314873b&oe=5C600E39',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/31478691_2129371253770044_2333503691278962091_n.jpg?_nc_cat=107&oh=cded870a240fd5cd7712a62539183259&oe=5C48BEF2',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/32267060_1994904897186195_7478463842536652800_n.jpg?_nc_cat=103&oh=f4376d3f53014d33f5a46c51e6aee314&oe=5C4BAF9D',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/29694808_10211772052925041_7492817198038122496_o.jpg?_nc_cat=102&oh=8af6de538b02d0416c2abaf8a9451c6e&oe=5C5839C9',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/10368967_255263651349490_5465266482380662768_o.jpg?_nc_cat=100&oh=ef07e6c771492b5f9b34f80c960c1c53&oe=5C5D3D2F',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/37639539_1921132264575756_970540962537275392_o.jpg?_nc_cat=108&oh=bce6a7de7e436f899b0fbadc333d40e7&oe=5C4C1F66',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/18425005_1435929766430535_4849905424183127915_n.jpg?_nc_cat=105&oh=48d588b0c2bfce9eab518160c510d160&oe=5C55F941',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/28161973_10156255017263593_2833981761480425620_o.jpg?_nc_cat=103&oh=cbf331066d504d71270a66d38a08a58d&oe=5C1EE728',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/267351_10151788752251308_1259317711_n.jpg?_nc_cat=104&oh=6d05d7d6e27dc4f90145a41a05e5a407&oe=5C5B8957',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/16195442_1007561682721408_7715902749479245782_n.jpg?_nc_cat=111&oh=a9d68565d4a62b5b41eaa1de618df490&oe=5C5FE11F',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/18077388_10212029928120897_9101243567354285272_o.jpg?_nc_cat=103&oh=7fbd8cac635acc49c0e33c3c994ca8eb&oe=5C579322',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/39258904_599452720452151_2113716537809436672_n.jpg?_nc_cat=109&oh=1440a847ba78dadd50ba4eee2cb05f0a&oe=5C16E390',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/27867691_10211759212920390_8794659101637411637_n.jpg?_nc_cat=111&oh=5227ce3664b019edc29dde5ae426b707&oe=5C56A937',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-1/c0.50.1536.1536/14124975_10210358704783534_5457991234772354720_o.jpg?_nc_cat=111&oh=31bbf684b77e6cdc49ba5a1e2b0d7773&oe=5C507168',
  'https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/11149428_10153288250002853_3243845050802111230_n.jpg?_nc_cat=103&oh=197e3560fb51f8ec3c9165fe59146012&oe=5C513827'
]


const users = [];
names.forEach(name => {
  profilePics.forEach(thumb => {
    users.push({
      provider_user_id: name +':' + users.length,
      name,
      thumb
    })
  })
})

const youTubes = [
  'yGXv6-jU7LU',
  'yGXv6-jU7LU',
  'jsMfE-UrO30',
  'fTqKoMm--Yc',
  'ahufEhWcUkI',
  '86gOSIDS6OQ',
  'OU6HqH4KhCQ',
  '92VNSTsAmgg',
  'zUSvieorPGk',
  'w0zsMoxTjJ0',
  '97RCMzQKjbg',
  'u7Dlc_NKlFo',
  'i7nkLEeA0Cg',
  'ritTgYWpBYg',
  'EcuPdQlsbDY',
  '6LXO11ikOGQ',
  'dV4dLXAbGKo'
 // '<iframe width="200" height="200" src="https://www.youtube.com/embed/yGXv6-jU7LU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
]

const experiences = youTubes.map(tube => {
  return {
    "title": "So FUN!!!",
    "image_id": 1,
    "hashtags": ["dance", "yoga"],
    "video_id": tube,
    "fileLocation": `https://img.youtube.com/vi/${tube}/0.jpg`,
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
});

// const experiencesw = [
//   {
//     "title": "So FUN!!!",
//     "image_id": 1,
//     "hashtags": ["dance", "yoga"],
//     "asset_type": 'video',
//     "fileLocation": youTubes[0],
//     "location": 
//       {
//         "city": "san francisco",
//         "state": "ca"
//       },
//     "uploadDate": "10/01/18",
//     "uploadTime": "12:00:00pm",
//     "likes": "42",
//     "shares": "10",
//     "comments": 
//       {
//         "user1": "really fun event!",
//         "user2": "cool =D"
//       }
//   },
  
//   {
//     "title": "Pretty great",
//     "image_id": 1,
//     "hashtags": ["dance", "yoga"],
//     "asset_type": 'image',
//     "fileLocation": 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&h=350',
//     "location": 
//       {
//         "city": "san francisco",
//         "state": "ca"
//       },
//     "uploadDate": "10/01/18",
//     "uploadTime": "12:00:00pm",
//     "likes": "42",
//     "shares": "10",
//     "comments": 
//       {
//         "user1": "really fun event!",
//         "user2": "cool =D"
//       }
//   }
// ]
