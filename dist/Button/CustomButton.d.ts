import React from 'react';
/**
  color data type for all component
 */
/**
 * CustomButton properties.
 */
export interface ICustomButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    /**
       background color
       */
    backgroundColor?: string;
    /**
       Text color
       */
    color?: string;
    /**
       Size of button
       */
    size?: 'large' | 'middle' | 'small';
    /**
     * Shapes
     */
    shape?: 'default' | 'circle' | 'round';
    /**
       Height of button
       */
    height?: string;
    /**
       Width of Button
       */
    width?: string;
    /**
       Function for onClick
       */
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    /**
       value
       */
    value?: string | number;
    /** type of the button (antd) */
    htmlType?: 'submit' | 'reset' | 'button';
}
/**
 CustomButton component
 */
export declare const CustomButton: React.FunctionComponent<ICustomButtonProps>;
