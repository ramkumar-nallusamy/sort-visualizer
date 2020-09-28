import React, { Component } from 'react'

interface IMyComponentProps {getChild:any;}

export class InsertionSort extends Component <IMyComponentProps> {

    interval:any; array = [];
    toSort = this.start();
    constructor(props:IMyComponentProps) { super(props) }
    *start() {
        let len = this.array.length;
        for (let mainElem=0;mainElem<len-1;mainElem++) { // choosing single element for compare with other.
            this.toCreateElements(this.array,mainElem,mainElem+1)
            if (this.array[mainElem] > this.array[mainElem+1]) { // checking next element for swap.
                let temp = this.array[mainElem];
                this.array[mainElem] = this.array[mainElem+1];
                this.array[mainElem+1] = temp;
                this.toCreateElements(this.array,mainElem,mainElem+1)
                yield;
                for (let comparingElement= mainElem;comparingElement>0;comparingElement--) { // for comparing sorted array element with current element
                    this.toCreateElements(this.array,comparingElement,comparingElement-1)
                    if (this.array[comparingElement]<this.array[comparingElement-1]) {
                        yield;
                        let temp = this.array[comparingElement];
                        this.array[comparingElement] = this.array[comparingElement-1];
                        this.array[comparingElement-1] = temp;
                    }
                }
            }
        } clearInterval(this.interval);
        this.toCreateElements(this.array,"sorted") // inform sorted array.
        this.toSort = this.start();
    }
    sort = (array:any,timer:any) => {this.array = array; this.interval = setInterval ( () => this.toSort.next(),timer)} // calling generator function.
    toCreateElements = (array:any,i?:any,j?:any) => {this.props.getChild(array,i,j);}
    render() {return (<></>)}
    // chrome v8 engine uses this sort.
}
export default InsertionSort
