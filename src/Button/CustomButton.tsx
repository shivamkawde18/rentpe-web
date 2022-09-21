import React from 'react'
import { Button } from 'antd'
/**
  color data type for all component
 */
// export type IColorType = `${string}`;

/**
 * CustomButton properties.
 */
export interface ICustomButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /**
     background color
     */
  backgroundColor?: string
  /**
     Text color
     */
  color?: string
  /**
     Size of button
     */
  size?: 'large' | 'middle' | 'small'
  /**
   * Shapes
   */
  shape?: 'default' | 'circle' | 'round'
  /**
     Height of button
     */
  height?: string
  /**
     Width of Button
     */
  width?: string
  /**
     Function for onClick
     */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  /**
     value
     */
  value?: string | number
  /** type of the button (antd) */
  htmlType?: 'submit' | 'reset' | 'button'
}
/**
 CustomButton component
 */
export const CustomButton: React.FunctionComponent<ICustomButtonProps> = (
  props
) => {
  // props Destructuring
  const {
    children,
    backgroundColor,
    color,
    size,
    height,
    width,
    shape,
    htmlType,
    onClick,
    disabled
  } = props
  let antdDefaultProps = {}
  if (htmlType) antdDefaultProps = { htmlType }
  // object for custom css
  const styles: ICustomButtonProps = {
    height: '',
    width: '',
    backgroundColor: '',
    color: ''
  }
  if (size) styles.size = size
  if (color) styles.color = color
  if (backgroundColor) styles.backgroundColor = backgroundColor
  if (height) styles.height = height
  if (width) styles.width = width
  if (shape) styles.shape = shape

  return (
    <Button
      {...antdDefaultProps}
      disabled={disabled}
      shape={shape}
      size={size}
      style={styles}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
CustomButton.displayName = 'CustomButton'
CustomButton.defaultProps = {
  children: 'hii joveo',
  size: 'middle',
  shape: 'default'
}
