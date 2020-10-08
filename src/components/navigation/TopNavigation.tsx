import React, { Component} from 'react';
import './styles.scss';

interface IMyComponentProps {
    sendData:any
    startSorting:any
    updateData:any
}

interface IMyComponentState {
    value: any;
    type:any;
    method:any;
}
export class TopNavigation extends Component <IMyComponentProps, IMyComponentState> {
    
    constructor(props:IMyComponentProps) {
        super(props)
    
        this.state = { // default values of random array.
             value : 50,
             type:100,
             method:'Insertion Sort'
        } 
    }

    changeSize = (event:any) => { // changing the array size.
        if (event.target.value <= 100) {
            this.setState({value:event.target.value});
            this.props.sendData({            
                value : event.target.value,
                type: this.state.type,
                method: this.state.method})
        }
        else {
            this.setState({value:100});
            this.props.sendData({            
                value : 100,
                type: this.state.type,
                method: this.state.method})
        }
    }
    gerateArray = () => {
        this.props.sendData(this.state)
    }
    startSort = () => {
        this.props.startSorting()
    }
    changeType = (event:any) => { // change the array method.
        this.setState({method:event.target.value})
        this.props.sendData({            
            value : this.state.value,
            type:this.state.type,
            method:event.target.value})
    }
    changeSpeed = (event:any) => {  // change the speed type of the array.
        this.setState({type:parseInt(event.target.value)}) 
        this.props.updateData({            
            value : this.state.value,
            type:parseInt(event.target.value),
            method: this.state.method})
    }
    render() {
        return (
            <nav className='d-flex justify-content-around'>
                <button className='my-auto px-3' onClick={this.gerateArray}>Generate new Array</button>
                <section className='d-flex'>
                    <label className='my-auto mr-3' >Enter number of Elements in Array</label>
                    <input type='text' className='formControl' value={this.state.value} onChange={this.changeSize} />
                </section>
                <section className='d-flex'>
                    <label className='my-auto mr-2'>Speed:</label>
                    <select className='pr-3' id='speed' value ={this.state.type} onChange = {this.changeSpeed}>
                        <option value={1000} >1000 msec</option>
                        <option value={500}>500 msec</option>
                        <option value={100}>100 msec</option>
                        <option value={10}>10 msec</option>
                    </select>
                </section>
                <section className='d-flex'>
                    <label className='my-auto mr-2'>sort Type:</label>
                    <select className='d-flex justify-content-around text-decoration-none mb-0 pr-1' value={this.state.method} onChange = {this.changeType}>
                        <option value='Bubble Sort'>Bubble sort</option>
                        <option value='Heap Sort'>Heap sort</option>
                        <option value='Insertion Sort'>Insertion sort</option>
                        <option value='Merge Sort'>Merge sort</option>
                        {/* <option value='Quick Sort'>Quick sort</option> */}
                        <option value='selection Sort'>Selection sort</option>
                    </select>
                </section>
                <button className='my-auto px-3'onClick={this.startSort} >Start</button>
            </nav>
        )
    }
}

export default TopNavigation
