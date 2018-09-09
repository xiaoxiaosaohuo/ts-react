import * as React from 'react'

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
    componentDidMount(){
        // this.state.count=2;
        this.setState({
            count:2
        })
    }
    public render(){
        return(
            <div>
                Hello world
            </div>
        )
    }
}

export default Hello