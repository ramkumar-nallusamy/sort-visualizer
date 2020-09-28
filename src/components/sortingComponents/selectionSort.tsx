import React, { Component } from 'react'


interface IMyComponentProps {getChild:any;}
export class SelectionSort extends Component <IMyComponentProps> {

    array: any; interval:any;
    constructor(props:IMyComponentProps) {super(props)}
    toSort:any = this.start();

    *start () {
        let len = this.array.length, minElement:any;
        for(let mainElem=0;mainElem<len;mainElem++) {
            minElement = mainElem;
            for (let currentElem=mainElem;currentElem<len;currentElem++) { // to compare the main element with other elements.
                this.toCreateElements(this.array,mainElem,currentElem)
                yield;
                if(this.array[minElement] > this.array[currentElem]) { // to find the min element.
                    minElement = currentElem;
                }
            }
            if (minElement !== mainElem) {  // checking to avoid swap same element.
                this.toCreateElements(this.array,this.array[minElement],this.array[mainElem]);
                [this.array[mainElem],this.array[minElement]] = [this.array[minElement],this.array[mainElem]]
                yield;
            }
        }
        this.toCreateElements(this.array,"sorted"); // for inform array is sorted.
        clearInterval(this.interval);
    }
    sort = (array:any,timer:any) => {
        this.toSort = this.start();
        this.array = array; 
        this.toSort.next();
        this.interval = setInterval ( () => {
                this.toSort.next()
        },timer)
    }
    toCreateElements(array:any,i?:any,j?:any) {
            this.props.getChild(array,i,j) // evertime while calling this method UI element will create for the array.
    }
    render() {return (<></>)}
}

export default SelectionSort
