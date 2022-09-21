import { Card, Divider, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { HeartOutlined } from '@ant-design/icons'
export interface IProductCard {
  image: string
  type: string
  price: number
  location: string
}

export const ProductCard = (props: IProductCard) => {
  const { image, location, price, type } = props
  const { Title, Text } = Typography
  const [like, setLike] = useState(false)
  return (
    <Card
      hoverable
      style={{ width: 300 }}
      cover={<img alt='example' src={image} />}
    >
      <Space>
        <Title level={5}>{type}</Title>
        <Divider
          type='vertical'
          style={{ backgroundColor: 'black', width: 2, top: -3 }}
        ></Divider>
        <Title level={5}>{price} / month</Title>
      </Space>
      <br />

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Text keyboard>{location}</Text>
        {like ? (
          <img
            src='https://img.icons8.com/emoji/452/red-heart.png'
            style={{
              height: '50px',
              width: '50px',
              position: 'relative',
              top: '21px',
              left: '21px'
            }}
            onClick={() => {
              setLike(false)
            }}
          />
        ) : (
          <HeartOutlined
            onClick={() => {
              if (!like) setLike(true)
            }}
            style={{
              fontSize: '50px',
              position: 'relative',
              top: '21px',
              left: '21px'
            }}
          />
        )}
      </div>
    </Card>
  )
}
ProductCard.default = {
  image:
    'https://i0.wp.com/civillane.com/wp-content/uploads/2022/03/2BHK-Interior-Design-Cost-In-Pune.jpg?fit=900%2C615&ssl=1',
  type: '2 BHK',
  price: '2500 / month',
  location: 'Banglore'
}
