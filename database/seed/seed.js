const faker = require('faker');
const db = require('../models');
const fs = require('fs');

const runningShoes = require('./fakeAdidasData/runningShoes.json');
const runningApperal = require('./fakeAdidasData/runningApperal.json');
const basketballShoes = require('./fakeAdidasData/basketballShoes.json');
const accessories = require('./fakeAdidasData/accessories.json');
const footballCleats = require('./fakeAdidasData/footballCleats.json');

var seedDataFile = __dirname + '/../seedData/seed.csv';
/*
1 - 10 = basketball shoes
11-20 = football shoes
21-30 = sandles and slides
31-40 = soccer
41-50 = original shoes
51-60 = hoodies and sweater
61-70 = running shoes *
71-80 = pants
81-90 = bags and backpacks
91-100 = hats and beanies
*/

const describeRun = ['regular fit', 'lace closure', 'adidas primeknit textile upper', 'responsive'];
const describeBball = [
  'Regular fit with a mid-cut',
  'Cable lacing system with webbing eyelets',
  'Textile mesh upper with lightweight, durable Forgefiber',
  'Rubber outsole with enhanced traction pattern; Geofit padded collar',
  'TPU shank in midfoot for stability and torsion control',
  'Flexible Bounce midsole cushioning',
];
const describeFBall = [
  'Anatomical lace closure',
  'Sprintskin upper',
  'Compression-molded EVA lining',
  'Speed Spat seam tape',
];
const describeApperal = [
  'Regular fit strikes a comfortable balance between loose and snug',
  'This jacket is made with recycled polyester to save resources and decrease emissions',
  'We partner with the Better Cotton Initiative to improve cotton farming globally',
];
const describeAcc = [
  'Reflective details',
  'Medium pre-curved brim',
  'I am seriously overdoing this...',
  'this DB is getting out of hands',
];

const mockSpecifications = (...args) => {
  const tempArr = [];
  const returnArr = [];
  args.forEach((valueArr) => {
    valueArr.forEach((value) => {
      tempArr.push(value);
    });
  });

  // to get 6 elements of arr
  const shuffled = tempArr.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 6);

  selected.map((value) => {
    returnArr.push(value);
  });
  return returnArr;
};



const fakeDataGenerator = (n) => {
  // var total = n
  // var selected = [];

  //   while (total > 0) {
  //     console.log ('***********start***********', selected, '********')
  //     console.log('********total', total, '************')
  //   for (var i = 0; i < 5000; i++) {
  //     var productName = faker.commerce.productName();
  //     var categoryName = faker.commerce.department();
  //     var productType = faker.commerce.product();
  //     var description = faker.lorem.sentence();
  //     var specification = faker.random.words();
  //     var catchphrase = faker.random.word();  
  //     var productDetails = faker.lorem.sentence();
  //     var price = Math.floor(Math.random() * (500 - 50)) + 50;
  //     var image = `https://loremflickr.com/500/400?random=1`

  //     var template = {productName, categoryName, productType, description, specification,
  //     catchphrase, productDetails, price, image}
  //       selected.push(template)  
  //   }

  //   for (var i = 0; i < selected.length; i++) {
  //   fs.appendFile(seedDataFile, `${selected[i]['productName']}|${selected[i]['categoryName']}|${selected[i]['productType']}|${selected[i]['description']}|${selected[i]['specification']}|${selected[i]['catchphrase']}|${selected[i]['productDetails']}|${selected[i]['price']}|${selected[i]['image']}\n`, 'utf-8', (err) => {
  //     if (err) {
  //       console.error(err)
  //     }
  //     })

  //   }
  //   selected = [];
  //   total = total - 10000;
  // }

  const writeFile = fs.createWriteStream (seedDataFile, {flags: 'a'})

  for (var i = 0; i < 1000000; i ++) {
    var productName = faker.commerce.productName();
      var categoryName = faker.commerce.department();
      var productType = faker.commerce.product();
      var description = faker.lorem.sentence();
      var specification = faker.random.words();
      var catchphrase = faker.random.word();  
      var productDetails = faker.lorem.sentence();
      var price = Math.floor(Math.random() * (500 - 50)) + 50;
      var randomimageNum = Math.floor(Math.random() * (1000 - 0)) + 0;
      var image = `https://loremflickr.com/320/240?lock=${randomimageNum}`

      var template = `${productName}|${categoryName}|${productType}|${description}|${specification}|${catchphrase}|${productDetails}|${price}|${image}\n`;
      
      

      writeFile.write(template)

  }
  writeFile.end();

  }

fakeDataGenerator(1000000)

//this is a postgres branch

// id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
// item_name: { type: Sequelize.STRING },
// category_name: { type: Sequelize.STRING },
// product_type: { type: Sequelize.STRING },
// description: { type: Sequelize.STRING(1000) },
// specification: { type: Sequelize.STRING(1000) },
// catchphrase: { type: Sequelize.STRING },
// product_details: { type: Sequelize.STRING },
// price: { type: Sequelize.INTEGER },
// image: { type: Sequelize.STRING(1000) },