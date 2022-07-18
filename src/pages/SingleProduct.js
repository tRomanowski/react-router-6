import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  return (
    <section className='section product'>
      <img src={product.image} alt='' />
      <h5>{product.name}</h5>
      <Link to='/products'>back to products</Link>
    </section>
  );
};

export default SingleProduct;
