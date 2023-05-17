const foods = [
  { id: '1', name: 'Rendang', origin: 'Padang', category: 'Makanan Utama' },
  { id: '2', name: 'Gudeg', origin: 'Yogyakarta', category: 'Makanan Utama' },
  { id: '3', name: 'Pempek', origin: 'Palembang', category: 'Makanan Utama' },
  { id: '4', name: 'Martabak Manis', origin: 'Bandung', category: 'Dessert' },
  { id: '5', name: 'Nasi Goreng', origin: 'Jakarta', category: 'Makanan Utama' },
  { id: '6', name: 'Sate Ayam', origin: 'Madura', category: 'Makanan Utama' },
  { id: '7', name: 'Bakso', origin: 'Jawa', category: 'Makanan Utama' },
  { id: '8', name: 'Soto Ayam', origin: 'Jawa Tengah', category: 'Makanan Utama' },
  { id: '9', name: 'Ketoprak', origin: 'Betawi', category: 'Makanan Utama' },
  { id: '10', name: 'Bakmi Jawa', origin: 'Jawa Timur', category: 'Makanan Utama' },
  { id: '11', name: 'Nasi Uduk', origin: 'Betawi', category: 'Makanan Utama' },
  { id: '12', name: 'Lontong Sayur', origin: 'Betawi', category: 'Makanan Utama' },
  { id: '13', name: 'Rujak Cingur', origin: 'Jawa Timur', category: 'Makanan Utama' },
  { id: '14', name: 'Pisang Goreng', origin: 'Nasional', category: 'Makanan Ringan' },
  { id: '15', name: 'Kue Lapis', origin: 'Nasional', category: 'Makanan Ringan' },
  { id: '16', name: 'Serabi', origin: 'Nasional', category: 'Makanan Ringan' },
  { id: '17', name: 'Kue Klepon', origin: 'Jawa', category: 'Makanan Ringan' },
  { id: '18', name: 'Cendol', origin: 'Jawa', category: 'Dessert' },
  { id: '19', name: 'Es Campur', origin: 'Nasional', category: 'Dessert' },
  { id: '20', name: 'Es Teler', origin: 'Betawi', category: 'Dessert' },
  { id: '21', name: 'Kerak Telor', origin: 'Betawi', category: 'Makanan Ringan' },
  { id: '22', name: 'Soto Betawi', origin: 'Betawi', category: 'Makanan Utama' }
  ];
  
  const resolvers = {
    Query: {
      getAllFoods: () => foods,
      getFoodById: (_, { id }) => foods.find(food => food.id === id)
    },
    Mutation: {
      addFood: (_, { name, origin, category }) => {
        const id = String(foods.length + 1);
        const newFood = { id, name, origin, category };
        foods.push(newFood);
        return newFood;
      },
      updateFood: (_, { id, name, origin, category }) => {
        const index = foods.findIndex(food => food.id === id);
        if (index !== -1) {
          if (name) foods[index].name = name;
          if (origin) foods[index].origin = origin;
          if (category) foods[index].category = category;
          return foods[index];
        }
        return null;
      },
      deleteFood: (_, { id }) => {
        const index = foods.findIndex(food => food.id === id);
        if (index !== -1) {
          foods.splice(index, 1);
          return id;
        }
        return null;
      }
      
    }
  };
  
  module.exports = resolvers;
  