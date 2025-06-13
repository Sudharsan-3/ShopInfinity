import { electronics } from './products';

electronics.map(product => (
  <div key={product.id}>
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>₹{product.price}</p>
  </div>
));
