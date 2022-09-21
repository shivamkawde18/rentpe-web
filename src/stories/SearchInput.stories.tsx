import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchInput } from '..';

export default {
    title: 'Search input',
    component: SearchInput,
    argTypes: {
        palceholder:{type:'string'}
    }
   
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => <SearchInput {...args}></SearchInput>;
export const Variants = Template.bind({});
Variants.args = {
   palceholder:'Enter Text'
};

