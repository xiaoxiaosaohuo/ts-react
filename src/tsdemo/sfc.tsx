import * as React from 'react';
export interface ButtonProps {
    children: string;
    handleClick(e:React.MouseEvent):void;
} 
const ButtonSFC:React.SFC<ButtonProps> = (props:ButtonProps)=>{
    const{handleClick,children } = props;
    return(
        <div onClick={handleClick}>
        点我{children}
        </div>
    )
}
export default ButtonSFC;

