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
    name: 'In The Groove Studios',
    address: '235 Mission St, San Francisco, CA 94107',
    status: 'uncliamed',
    user_count: 3,
    image: 'https://d342jfhztpgus0.cloudfront.net/images/353/353348/7kn8_819-960x960-r.png'  
  },
  {
    name: 'Full Out Studio',
    address: '530 Kansas St, Oakland, CA 94107',
    status: 'uncliamed',
    user_count: 50,
    image: 'data:image/png;base64,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'  
  },
  {
    name: 'Millennium Dance Complex',
    address: '2433 La Palma Ave, Anahiem, CA 94107',
    status: 'claimed',
    user_count: 92,
    image: 'data:image/png;base64,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' 
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

function returnRandomStr(array) {
	return array[Math.floor(Math.random() * array.length)];
}

const titles = [
	"Rodney's choreo was awesome!",
	"Gettin' hyphy with e-40",
	"Breakin a sweat with this choreo",
	"So much fun!",
	"Finally dancing again after tweaking my back a little",
	"This was FAST but so much fun!!",
	"Learned my first hip-hop routine. Woo!",
	"One of the classes at the studio",
	"Great job everyone! Love you all!!!",
	"Class was lit!",
	"Fun times with Lo",
	"Amazing class with amazing people",
	"NAILED IT!!!",
	"Tonight was freaking awesome",
	"Always a blast with this crew",
	"This was my favorite!!!",
	"Props to everyone in my class tonight. Thank you!"
]

const hashtags = [
	"#country",
	"#twostepping",
	"#jonpardi",
	"#countrywestern",
	"#bestshot",
	"#jimmyallen",
	"#twostepping",
	"#flips",
	"#dips",
	"#aerials",
	"#swing",
	"#twostepping",
	"#thomasrhett",
	"#countrymusic",
	"#linedancing",
	"#countrygirl",
	"#lukebryan",
	"#linedance",
	"#lonelydrum",
	"#aarongoodvin",
	"#countrydance",
	"#e40",
	"#hyphy",
	"#hiphop",
	"#bayarea",
	"#hipop",
	"#warriors",
	"#bigbank",
	"#yg",
	"#hiphop",
	"#levelup",
	"#dancechallenge",
	"#ciara",
	"#heelsclass",
	"#hiphop",
	"#levelup",
	"#inmyfeelings",
	"#drake",
	"#hiphop",
	"#2am",
	"#sagethegemini",
	"#masterclass",
	"#masterclass",
	"#hiphop",
	"#yg"
]
const experiences = youTubes.map(tube => {
  return {
    "title": returnRandomStr(titles),
    "image_id": 1,
    "hashtags": [returnRandomStr(hashtags), ' ', returnRandomStr(hashtags)],
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
