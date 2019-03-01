import mongoose from 'mongoose'

exports.ingredients = [
  {
  name: 'vanilla yogurt',
  img_url: '/img.jpg',
  },
  {
  name: 'strawberries',
  img_url: '/img.jpg',
  },
  {
  name: 'banana',
  img_url: '/img.jpg',
  },
  {
  name: 'orange',
  img_url: '/img.jpg',
  },
  {
  name: 'spring onion',
  img_url: '/img.jpg',
  },
  {
  name: 'peas',
  img_url: '/img.jpg',
  },
  {
  name: 'courgette',
  img_url: '/img.jpg',
  },
  {
  name: 'ham',
  img_url: '/img.jpg',
  },
  {
  name: 'cheese',
  img_url: '/img.jpg',
  },
  {
  name: 'egg',
  img_url: '/img.jpg',
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
    img_url: 'https://pioneerwoman.files.wordpress.com/2013/12/frittata1.jpg',
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

  }
}

