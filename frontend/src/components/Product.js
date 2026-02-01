import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardText } from 'react-bootstrap'
import Rating from './Rating'

function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <CardImg src={product.image}/>
      </a>

      <CardBody>
        <a href={`/product/${product._id}`}>
            <CardTitle as="div">
                <strong>{product.name}</strong>
            </CardTitle>
        </a>

        <CardText as="div">
            <div className='my-3'>
                <Rating value={product.rating} text={`${product.numReviews} review`} color={'#f8e825'}/>
            </div>
        </CardText>

        <CardText as="h3">
            ${product.price}
        </CardText>
      </CardBody>
    </Card>
  )
}

export default Product
