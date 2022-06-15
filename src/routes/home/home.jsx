import Directory from '../../components/directory/directory';

const categories = [
  {
    id: 'rty6tyh',
    title: 'Armor',
    imgURL: '/categories/armor.jpg',
  },
  {
    id: '76568r7',
    title: 'Potions',
    imgURL:
      '/categories/potions.png',
  },
  {
    id: '45ty45',
    title: 'Scrolls',
    imgURL:
      '/categories/scroll.jpg',
  },
  {
    id: '435eyrty',
    title: 'Martial Melee Weapons',
    imgURL:
      '/categories/melee_weapons.png',
  },
  {
    id: '45yyt45',
    title: 'Musical Instruments',
    imgURL:
      '/categories/musical_instruments.jpg',
  },
];

const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
