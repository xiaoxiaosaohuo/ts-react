import * as React from 'react'
import Button from '../tsdemo/state';
import ButtonSFC from '../tsdemo/sfc';
export interface Props {
    message:string
}
export interface State {
    count : number
}
// const Hello: React.SFC<Props> = ({message})=>{
//     return <div>
//         {message}
//     </div>
// }

class Hello extends React.Component<Props,State>{
    constructor(props:any){
        super(props);
        this.state = { count:1 };
    }
    private onClick = (e:React.MouseEvent)=>{
        console.log(e.target)
    }   
    public componentDidMount(){
        // this.state.count=2;
        this.setState({
            count:2
        })
    }
   
    public render(){
        return(
            <div>
                <Button>啊</Button>
                <ButtonSFC handleClick={this.onClick}>adf</ButtonSFC>
            </div>
        )
    }
}

export default Hello