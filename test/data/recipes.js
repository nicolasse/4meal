import mongoose from 'mongoose'

exports.ingredients = [
  {
  name: 'vanilla yogurt',
  img_url: 'http://greenleavesandjam.com/wp-content/uploads/2013/09/IMG_7695.jpg',
  },
  {
  name: 'strawberries',
  img_url: 'https://images-na.ssl-images-amazon.com/images/I/71Cfp51ZuzL._SX522_.jpg',
  },
  {
  name: 'banana',
  img_url: 'https://comefruta.es/wp-content/uploads/bananas.jpg',
  },
  {
  name: 'orange',
  img_url: 'http://soappotions.com/wp-content/uploads/2017/10/orange.jpg',
  },
  {
  name: 'spring onion',
  img_url: 'https://cdn.mr-fothergills.co.uk/product-images/op/z/ONI-073z.jpg',
  },
  {
  name: 'peas',
  img_url: 'https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/image_nodes/peas-and-pea-pods.jpg?itok=trD6N79A',
  },
  {
  name: 'courgette',
  img_url: 'http://www.cuisine-de-bebe.com/wp-content/uploads/courgette-babyfood.jpg',
  },
  {
  name: 'ham',
  img_url: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Sugar-Glazed-Ham_EXPS_GHTJM17_709_B03_14_8b-696x696.jpg',
  },
  {
  name: 'cheese',
  img_url: 'https://cdn.shopify.com/s/files/1/0150/0232/products/Pearl_Valley_Swiss_Slices_36762caf-0757-45d2-91f0-424bcacc9892_1024x1024.jpg?v=1534871055',
  },
  {
  name: 'egg',
  img_url: 'https://c.ndtvimg.com/2019-01/750qjpn8_egg-instagram_625x300_14_January_19.jpg?output-quality=70&output-format=webp',
  },
  {
    name:'bacon',
    img_url: 'https://d2qsoa8c1ozss4.cloudfront.net/100x100/app/uploads/2017/04/24170524/ING-bacon-thumb1x1.jpg',
  },
  {
    name: 'baguette',
    img_url: 'https://imgp2.schaer.com/sites/default/files/styles/header_large/public/1998_Baguette%20Casera.jpg?itok=6ktVxB7q'
  },
  {
    name: 'sour cream',
    img_url: 'https://i.blogs.es/c59ad1/crema-agria/1366_2000.jpg'
  },
  {
    name: 'black pepper',
    img_url: 'https://cdn.shopify.com/s/files/1/1481/9186/products/Whole-Black-Pepper-1_b0264136-5dbe-4cff-aa2d-2d203587117f_grande.jpg?v=1532988158',
  },
  {
    name: 'kosher salt',
    img_url: 'https://www.seasalt.com/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/u/pure-ocean-sea-salt-kosher-bulk_bw.jpg'
  },
  {
    name: 'baby spinach',
    img_url: 'https://www.mygreenmart.in/wp-content/uploads/2017/02/BABY-SPINACH.jpg'
  }
]
exports.recipes = {
  smoothie: {
    name: 'Fruit smoothie',
    category: 'snack',
    img_url: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/19/1280x2087/gallery-1462829771-sunshine-daydream.jpg?resize=768:*',
    description: 'Cold smoothie',
    ingredients: [
      { nameId: 'vanilla yogurt', amount: 1, measure: 'cup'},
      { nameId: 'strawberries', amount: 1, measure: 'cup' },
      { nameId: 'banana', amount: 1, measure: 'unity' },
      { nameId: 'orange', amount: 1, measure: 'quarter' }
      ],
    directions: [
        'Put the yogurt in a cup' ,
        'Put the frozen strawberries',
        'Put the frozen banana',
        'Put a quarter cup of orange juice',
        'Blend until smooth'
      ],

  },
  frittata: {
    name: 'Chessy frittata',
    category: 'complex',
    img_url: 'https://www.recipetineats.com/wp-content/uploads/2018/09/Frittata-1-650x813.jpg',
    description: 'Simple lunch dish',
    ingredients: [
      { nameId: 'spring onion', amount: 1, measure: 'unity'},
      { nameId: 'peas', amount: 4, measure: 'tablespoon' },
      { nameId: 'courgette', amount: 1, measure: 'unity' },
      { nameId: 'ham', amount: 2, measure: 'slice' },
      { nameId: 'cheese', amount: 100, measure: 'gr' },
      { nameId: 'egg', amount: 4, measure: 'unity' }
    ],
    directions: [
      'Switch the oven on to 180C',
      'Spin or cut up the spring onions and put them in a bowl',
      'Add the peas to the bowl',
      'Grate the halved courgette with the ends cut off using your rotary grater, one half at a time, then add it to the bowl',
      'Cut the ham into pieces with your scissors, if you do this over the bowl it will fall straight in',
      'Break the feta into the bowl by crumbling it with your hands',
      'Crack the eggs into a bowl and, if any bits of shell fall in, scoop them out with a spoon. Whisk the eggs until the yolks are mixed into the white',
      'Pour the eggs into the other bowl and stir. Brush a round ovenproof dish, about 16cm across, with oil. Tip everything into the dish. Put the dish in the oven for 30 minutes or until the egg is set. Serve with salad and crusty bread.'
    ]

  },
  eggsalad: {
    name: 'Spinach, Bacon, and Fried Egg Salad',
    category: 'snack',
    img_url: 'https://i.pinimg.com/564x/48/38/32/483832993f951cc406d53f8cb698ff39.jpg',
    description: 'This nifty dinner salad reminds us of a deconstructed breakfast sandwich.',
    ingredients: [
      { nameId: 'bacon', amount: 6, measure: 'slice'},
      { nameId: 'baguette', amount: 1, measure: 'unity' },
      { nameId: 'egg', amount: 4, measure: 'unity' },
      { nameId: 'sour cream', amount: 2, measure: 'tablespoon' },
      { nameId: 'black pepper', amount: 1, measure: 'tablespoon' },
      { nameId: 'kosher salt', amount: 1, measure: 'tablespoon' },
      { nameId: 'baby spinach', amount: 150, measure: 'gr' },
      ],
    directions: [
        'Cook bacon in a large nonstick skillet over medium, stirring occasionally, until crisp, 5 to 7 minutes. Using a slotted spoon, transfer bacon to a paper towel–lined plate; reserve drippings in skillet.' ,
        'Add baguette pieces to drippings and cook, tossing occasionally, until golden brown and crisp, 5 to 7 minutes; transfer to a bowl.',
        'Add 1 tablespoon oil to skillet and increase heat to medium-high. Crack eggs into skillet and cook until whites are set, edges are crispy, and yolks are still runny, about 2 minutes. Transfer to a plate.',
        'Combine buttermilk, sour cream, chives, remaining 1 tablespoon oil, pepper, and salt in a small bowl. Divide dressing among plates; top with spinach, bacon, croutons, and eggs.',
      ],

  },
}

