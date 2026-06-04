const BOGGO_MENU = [
  {
    category: 'Bagels vegetarianos',
    slug: 'vegetarianos',
    intro: 'Verdes, frescos y con swing propio. Bagels vegetales con mucho carácter Boggo.',
    products: [
      { name: 'Green Cadillac', price: '8,90 €', image: 'GREEN CADILLAC.webp', desc: 'Bagel tostado con aguacate cremoso, tomate fresco, rúcula, queso crema de hierbas y semillas crujientes. Suave, fresco y con mucho estilo.' },
      { name: 'Veggie Jukebox', price: '8,50 €', image: 'VEGGIE JUKEBOX.webp', desc: 'Hummus de garbanzo, berenjena asada, pimiento rojo, espinacas baby y un toque de limón. Un bagel vegetal con ritmo propio.' },
      { name: 'The Garden Bop', price: '8,20 €', image: 'THE GARDEN BOP .webp', desc: 'Queso fresco, pepino, zanahoria laminada, brotes verdes y salsa yogur-lima. Ligero, colorido y muy crunchy.' },
      { name: 'Mushroom Swing', price: '9,20 €', image: 'MUSHROOM SWING.webp', desc: 'Setas salteadas, queso fundente, cebolla caramelizada y rúcula sobre bagel artesanal. Intenso, meloso y muy diner.' }
    ]
  },
  {
    category: 'Bagels fit',
    slug: 'fit',
    intro: 'Energía limpia, equilibrio y sabor para quienes comen rico sin perder el ritmo.',
    products: [
      { name: 'Protein Star', price: '9,40 €', image: 'PROTEIN STAR.webp', desc: 'Bagel integral con huevo, queso fresco, espinacas, tomate y salsa suave de yogur. Energía limpia para seguir bailando.' },
      { name: 'Gym Buddy', price: '9,80 €', image: 'GYM BUDDY.webp', desc: 'Pavo braseado, aguacate, lechuga, tomate y mostaza suave en pan de bagel integral. Equilibrado, sabroso y directo al músculo.' },
      { name: 'Sunny Fit', price: '8,90 €', image: 'SUNNY FIT.webp', desc: 'Claras revueltas, queso bajo en grasa, rúcula, semillas y un toque de pimienta. Simple, ligero y muy efectivo.' },
      { name: 'Avocado Runner', price: '9,30 €', image: 'AVOCADO RUNNER.webp', desc: 'Aguacate, huevo cocido, espinacas, tomate cherry y crema de limón. Fresco, saciante y con espíritu de domingo activo.' }
    ]
  },
  {
    category: 'Bagels con carne',
    slug: 'carnivoros',
    intro: 'Los grandes clásicos de carretera, bacon, pastrami y barbacoa con alma de diner.',
    products: [
      { name: 'Rockabilly Bacon', price: '10,20 €', image: 'ROCKABILLY BACON.webp', desc: 'Bacon crujiente, huevo, cheddar fundido y salsa Boggo especial. El clásico de diner que nunca falla.' },
      { name: 'Hot Rod Chicken', price: '10,50 €', image: 'HOT ROD CHICKEN.webp', desc: 'Pollo especiado, lechuga, tomate, queso cheddar y mayonesa ahumada. Jugoso, potente y con un punto rebelde.' },
      { name: 'Big Boss Pastrami', price: '11,20 €', image: 'BIG BOSS PASTRAMI.webp', desc: 'Pastrami caliente, pepinillos, mostaza antigua y queso fundido. Un bagel intenso para los que vienen con hambre seria.' },
      { name: 'Route 66 BBQ', price: '11,50 €', image: 'RUTA 66 BBQ.webp', desc: 'Ternera deshilachada, salsa BBQ, cebolla crujiente y queso cheddar. Sabor de carretera americana en versión Boggo.' }
    ]
  },
  {
    category: 'Sweet Bagels',
    slug: 'sweet',
    intro: 'Dulces, cremosos y con ese punto de merienda retro que pide foto antes del primer bocado.',
    products: [
      { name: 'Cherry Dream', price: '7,80 €', image: 'CHERRY DREAM.webp', desc: 'Queso crema dulce, mermelada de cereza, crumble de galleta y azúcar glass. Como un postre de película en formato bagel.' },
      { name: 'Choco Twist', price: '7,90 €', image: 'CHOCO TWIST.webp', desc: 'Crema de cacao, plátano, avellanas tostadas y un toque de sal. Dulce, cremoso y peligrosamente adictivo.' },
      { name: 'Apple Pie Bagel', price: '8,20 €', image: 'APPLE PIE BAGEL.webp', desc: 'Manzana caramelizada, canela, crema suave y migas crujientes. Inspirado en la tarta clásica americana.' },
      { name: 'Peanut Love', price: '7,70 €', image: 'PEANUT LOVE.webp', desc: 'Crema de cacahuete, plátano, miel y semillas. Dulce, energético y con alma de merienda retro.' }
    ]
  },
  {
    category: 'Light Bagels',
    slug: 'light',
    intro: 'Más ligeros, igual de Boggo. Frescura, textura y encanto sin pesadez.',
    products: [
      { name: 'Soft Green', price: '7,90 €', image: 'SOFT GREEN.webp', desc: 'Bagel fino con queso fresco, pepino, rúcula, tomate y crema ligera de yogur. Sencillo, fresco y sin pesadez.' },
      { name: 'Fresh Club', price: '8,40 €', image: 'FRESH CLUB.webp', desc: 'Pavo, lechuga, tomate, zanahoria laminada y salsa ligera. El aliado perfecto para comer rico sin pasarse.' },
      { name: 'Mini Diner', price: '7,80 €', image: 'MINI DINER.webp', desc: 'Versión más ligera de nuestro bagel clásico con huevo, queso suave y tomate. Pequeño en calorías, grande en encanto.' },
      { name: 'Summer Hop', price: '8,10 €', image: 'SUMMER HOP.webp', desc: 'Aguacate, brotes verdes, pepino, lima y semillas. Fresco como una tarde de verano con música en la radio.' }
    ]
  },
  {
    category: 'Smoothies',
    slug: 'smoothies',
    intro: 'Batidos cremosos y coloridos para acompañar tu mesa Boggo.',
    products: [
      { name: 'Pink Cadillac', price: '5,90 €', image: 'PINK CADILLAC.webp', desc: 'Fresa, plátano, bebida vegetal y un toque de vainilla. Cremoso, dulce y con color de neón.' },
      { name: 'Green Jive', price: '5,90 €', image: 'GREEN JIVE.webp', desc: 'Espinaca, manzana, kiwi, lima y pepino. Verde, fresco y con energía limpia.' },
      { name: 'Mango Bop', price: '6,20 €', image: 'MANGO BOP.webp', desc: 'Mango, naranja, piña y yogur natural. Tropical, brillante y perfecto para acompañar cualquier bagel.' },
      { name: 'Choco Banana Shake', price: '6,40 €', image: 'CHOCO BANANA SHAKE.webp', desc: 'Plátano, cacao, leche o bebida vegetal y crema de cacahuete. Dulce, denso y muy rock’n’roll.' }
    ]
  }
];

const BOGGO_MERCH = [
  { name: 'Pack Stickers Good Mood', points: 120, desc: 'Pegatinas Boggo para portátil, agenda o botella reutilizable.' },
  { name: 'T-shirt Fresh Bagel', points: 600, desc: 'Camiseta con ilustración central de la mascota Boggo.' },
  { name: 'Gorra Club Boggo', points: 450, desc: 'Gorra verde con bordado frontal de la marca.' },
  { name: 'Lunchera Retro', points: 700, desc: 'Lunchera reutilizable para meriendas con mucho swing.' },
  { name: 'Tote Bag Unboxing', points: 350, desc: 'Bolsa de tela para llevar tu mood Boggo a todas partes.' },
  { name: 'Toalla Road Trip', points: 800, desc: 'Toalla de picnic para tardes de sol, smoothies y bagels.' }
];
