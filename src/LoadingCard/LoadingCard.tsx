// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Skeleton, Typography, Divider, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import {
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined
} from '@ant-design/icons'
const { Meta } = Card
export interface ILoadingProps {
  type: string
  location: string
  contactNo: number
  image: string
  price: number
  userName: string
}
export const LoadingCard = (props: ILoadingProps) => {
  const { type, location, contactNo, image, price, userName } = props
  const { Title } = Typography
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])
  return (
      <Card
        style={{ width: 'fit-content', marginTop: 16 }}
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />,
        // ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src={image} style={{ height: 100, width: 100 }} />}
            title={type}
            description='This is the description'
          />
          <Space style={{ paddingTop: 12 }}>
            <Title level={5}>{type}</Title>
            <Divider
              type='vertical'
              style={{ backgroundColor: 'black', width: 2, top: -3 }}
            ></Divider>
            <Title level={5}>{price} / month</Title>
          </Space>
          <br />
          <div style={{ gap: 2 }}>
            <div style={{ display: 'flex', gap: 10 }}>
              <EnvironmentOutlined style={{ fontSize: '20px' }} />{' '}
              <Title level={5}>{location}</Title>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <UserOutlined style={{ fontSize: '20px' }} />{' '}
              <Title style={{ color: 'green' }} level={5}>
                {' '}
                {userName}
              </Title>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <PhoneOutlined style={{ fontSize: '20px' }} />{' '}
              <Title level={5}>
                {' '}
                <a href='tel:123-456-7890'>{contactNo}</a>
              </Title>
            </div>
          </div>
        </Skeleton>
      </Card>

  )
}

export default LoadingCard

LoadingCard.defaultProps = {
  image: 'https://joeschmoe.io/api/v1/random',
  location: 'banglore',
  price: 2500,
  type: '2 BHK',
  contactNo: 964444,
  userName: 'shivam kawde'
}
