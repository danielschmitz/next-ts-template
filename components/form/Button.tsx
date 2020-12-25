import React, { ButtonHTMLAttributes } from 'react';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return <button {...props}>foo</button>;
};

export default Button;
