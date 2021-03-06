import React, { CSSProperties } from "react";

export interface ButtonProps {
  label?: string;
  icon?: string | React.SVGAttributes<SVGElement>;
  iconPosition?: 'left' | 'right';
  outlined?:boolean;
  raised?:boolean;
  touch?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
}

export type ButtonElement = React.ReactElement<ButtonProps, 'button'> | React.ReactElement<ButtonProps, 'a'>;