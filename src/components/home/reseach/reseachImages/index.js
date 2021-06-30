import React, {useState} from "react"
import { Transition } from 'react-transition-group';
import './style.css'

export default class ReseachImages extends React.Component {
    constructor(props) {
        super(props);
        this.setActive = this.setActive.bind(this);
        this.Panel = this.Panel.bind(this);
        this.state = {isActiveArray: [true, false, false, false]};
    }

    setActive(i) {
        let array = [false, false, false, false];
        array[i] = true;
        this.setState({inProp: !this.state.inProp})
        this.setState({isActiveArray: array})
    }
    Panel(isActive, i){
        if (isActive){
            return (
                <Transition in={this.state.isActiveArray[i]}>
                    <button className="panel active" onClick={() => this.setActive(i)}>
                        <h3>Explore The World</h3>
                    </button>
                </Transition>
            )
        }else{
            return (
                <Transition in={this.state.isActiveArray[i]}>
                    <button className="panel" onClick={()=>this.setActive(i)}>
                            <h3>Explore The World</h3>
                    </button>
                </Transition>
            )
        }
    }

    render() {
        let content;  
        content = <div className="container"> {this.state.isActiveArray.map((act, index) => (this.Panel(act, index)))}</div>
        return (
            <div className="reseach_images">
                {content}
            </div>
        );
    }
}