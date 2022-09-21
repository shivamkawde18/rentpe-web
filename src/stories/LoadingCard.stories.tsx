import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LoadingCard } from '..';


export default {
    title: 'Loading Card',
    component: LoadingCard,
    argTypes: {
      location:{type:"string"},
      price:{type:'number'},
      image:{type:'string'},
      type:{type:'string'}

    }
   
} as ComponentMeta<typeof LoadingCard>;

const Template: ComponentStory<typeof LoadingCard> = (args) => <LoadingCard  ></LoadingCard>;
export const Variants = Template.bind({});

