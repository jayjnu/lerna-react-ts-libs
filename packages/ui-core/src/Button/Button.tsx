import React from 'react';
import {Button as MuiButton} from '@material-ui/core';
import {Mail} from '@material-ui/icons';

export type ButtonProps = {};

export const Button: React.FC<ButtonProps> = (props) => {
  return (
      <MuiButton>
        <Mail/>
        {props.children}
      </MuiButton>
  );
};
