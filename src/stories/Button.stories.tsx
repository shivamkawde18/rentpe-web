import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomButton } from '..';

export default {
    title: 'Button',
    component: CustomButton,
    argTypes: {
        backgroundColor: { control: 'color' },
        height: { type: 'string' },
        width: { type: 'string' },
        color: { control: 'color' },
        size: { options: ['large', 'middle', 'small'], control: { type: 'select' } }
    }
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = (args) => <CustomButton {...args}>hello joveo</CustomButton>;
export const Variants = Template.bind({});
Variants.args = {
    size: 'middle',
    shape: 'default'
};
