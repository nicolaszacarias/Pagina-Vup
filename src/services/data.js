import foto1 from '../Foto1.jpg';
import foto2 from '../Foto2.jpg';
import foto3 from '../Foto3.jpg';

const products = [
  {
    id: 1,
    name: 'Básico',
    description: 'Incluye diseño gráfico básico y animaciones simples.',
    price: 1000,
    images: [foto1, foto2, foto3],
  },
  {
    id: 2,
    name: 'Premium',
    description: 'Incluye contenido audiovisual, animaciones avanzadas y más.',
    price: 1000,
    images: [foto2, foto2, foto3],
  },
  {
    id: 3,
    name: 'Deluxe',
    description: 'Incluye todo lo anterior + estrategia de contenido.',
    price: 1000,
    images: [foto3, foto2, foto3],
  },
];
export default products
