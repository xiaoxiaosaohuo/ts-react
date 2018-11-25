import * as React from "react";
export interface TitleProps {
  address?: string;
  hide?:boolean;
};
export interface ButtonState {
    on?:boolean,
    value?:string
}
export class Title extends React.Component<TitleProps,{}> {
         render() {
             const { address, hide } = this.props;
             return !hide?<a href={address}>{address}</a>:null;
         }
       }
export class Button extends React.Component<{}, ButtonState> {
    state={
        on:false,
        value:""
    }
    onClick = ()=>{
        this.setState(prevState=>{
            return{
                on:!prevState.on,
            }
        })
    }
    onChange = (e: React.FormEvent<HTMLInputElement>)=>{
        this.setState({
            value: e.currentTarget.value
        })
    }
    componentDidMount(){
        console.log(1)/* tslint:disable-line */
    }
    render() {
        const { on,value } = this.state;
        return <React.Fragment>
             <button onClick={this.onClick}>{on ? "on" : "off"}</button> 
             <input onChange={this.onChange}/>
             <span className="input-value">{value}</span>
            </React.Fragment>
    }
}      
const ReactSFC :React.SFC<{message:string}> =({message})=>{
    return <div className="container">
        <h1>welcome use jest</h1>
        <Button/>
        <Title address="台湾选举" hide={false}/>
        {message}
        <span>第一个span</span>
        <span>第二个span</span>
        <ul className="ul-wrapper">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>;
}

export default ReactSFC