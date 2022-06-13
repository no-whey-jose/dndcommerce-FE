import Directory from './components/directory/directory';

const categories = [
  {
    id: 'rty6tyh',
    title: 'Armor',
    imgURL: 'https://slyflourish.com/images/heavy_armor.jpg',
  },
  {
    id: '76568r7',
    title: 'Potions',
    imgURL:
      'https://www.nicepng.com/png/detail/152-1527956_potion-of-deaths-postponement-dnd-magic-item-art.png',
  },
  {
    id: '435eyrty',
    title: 'Martial Melee Weapons',
    imgURL:
      'https://www.dungeonsolvers.com/wp-content/uploads/2019/06/weapon.png',
  },
  {
    id: '45yyt45',
    title: 'Musical Instruments',
    imgURL:
      'https://i.pinimg.com/736x/52/12/b9/5212b92cdeb6bd6b556be17d5381edc5--music-instruments-musicals.jpg',
  },
  {
    id: '45ty45',
    title: 'Scrolls',
    imgURL:
      'https://i.pinimg.com/originals/22/c5/f6/22c5f652981ffb54766a9564184fe5b2.jpg',
  },
];

const App = () => {
  return <Directory categories={categories} />;
};

export default App;
