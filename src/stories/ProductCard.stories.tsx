import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductCard } from '..';


export default {
    title: 'Product Card',
    component: ProductCard,
    argTypes: {
      location:{type:"string"},
      price:{type:'number'},
      image:{type:'string'},
      type:{type:'string'}

    }
   
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => <ProductCard {...args} ></ProductCard>;
export const Variants = Template.bind({});
Variants.args = {
 location:'banglore',
 price:2500,
 image:"https://i0.wp.com/civillane.com/wp-content/uploads/2022/03/2BHK-Interior-Design-Cost-In-Pune.jpg?fit=900%2C615&ssl=1",

type:'2 BHK'


};

