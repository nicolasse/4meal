const recipes = {
  smoothie: {
    name: 'Fruit smoothie',
    category: 'snack',
    description: 'Cold smoothie',
    ingredients: [
      { name: 'vanilla yogurt', amount: 1, measure: 'cup'},
      { name: 'strawberries', amount: 1, measure: 'cup' },
      { name: 'banana', amount: 1, measure: 'unity' },
      { name: 'orange', amount: 1, measure: 'quarter' }
      ],
    directions: [
        { step: 1, description: 'Put the yogurt in a cup' },
        { step: 2, description: 'Put the frozen strawberries' },
        { step: 3, description: 'Put the frozen banana' },
        { step: 4, description: 'Put a quarter cup of orange juice' },
        { step: 5, description: 'Blend until smooth' }
      ],

  },
  frittata: {
    name: 'Chessy frittata',
    category: 'complex',
    description: 'Simple lunch dish',
    ingredients: [
      { name: 'spring onion', amount: 1, measure: 'unity'},
      { name: 'peas', amount: 4, measure: 'tablespoon' },
      { name: 'courgette', amount: 1, measure: 'unity' },
      { name: 'ham', amount: 2, measure: 'slice' },
      { name: 'feta cheese', amount: 100, measure: 'gr' },
      { name: 'eggs', amount: 4, measure: 'unity' }
    ],
    directions: [
      { step: 1, description: 'Switch the oven on to 180C' },
      { step: 2, description: 'Spin or cut up the spring onions and put them in a bowl' },
      { step: 3, description: 'Add the peas to the bowl' },
      { step: 4, description: 'Grate the halved courgette with the ends cut off using your rotary grater, one half at a time, then add it to the bowl' },
      { step: 5, description: 'Cut the ham into pieces with your scissors, if you do this over the bowl it will fall straight in' },
      { step: 6, description: 'Break the feta into the bowl by crumbling it with your hands' },
      { step: 7, description: 'Crack the eggs into a bowl and, if any bits of shell fall in, scoop them out with a spoon. Whisk the eggs until the yolks are mixed into the white' },
      { step: 8, description: 'Pour the eggs into the other bowl and stir. Brush a round ovenproof dish, about 16cm across, with oil. Tip everything into the dish. Put the dish in the oven for 30 minutes or until the egg is set. Serve with salad and crusty bread.' }
    ]

  }
}

module.exports = recipes
