import * as React from 'react';
interface State {
    count:number
}
interface  Props {
    children:React.ReactNode
}
export default class Button extends React.Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            count:0
        }
    }
    public componentDidMount(){
        console.log(1)
    }
    public onClick =()=>{
        console.log(1)
    }
    public render(){
        const {children} = this.props;
        return(
            <button onClick={this.onClick}>点我{children}</button>
        )
    }
}