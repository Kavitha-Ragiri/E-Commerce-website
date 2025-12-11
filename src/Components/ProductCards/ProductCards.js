import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ProductCards.css';

function ProductCards({product}) {

  // console.log(product);
  return (
    <Card style={{ width: '200px' , height:"250px", backgroundColor:"	#E8E8E8"}}>
      <Link className='text-link' to={`/product/${product.id}`} >
      <Card.Img variant="top" src={product.thumbnail} style={{height:"100px", width:"100px"}} />
      <Card.Body>
        <Card.Title style={{fontSize:"17px"}}>{product.title}</Card.Title>
        <Card.Text style={{fontSize:"14px"}}>
                Price: $<b style={{color:"red"}}>{product.price}</b>
        </Card.Text>
        <Card.Text style={{fontSize:"14px"}}>
            Category: <b>{product.category}</b> 
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
  );
}

export default ProductCards;