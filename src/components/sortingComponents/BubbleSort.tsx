import React, { Component } from 'react'

interface IMyComponentProps {getChild:any;}
export class BubbleSort extends Component <IMyComponentProps> {

    array: any = [];
    interval: any;
    sort:any = this.bubbleSort()

    constructor(props:IMyComponentProps) {super(props)}

    *bubbleSort(){   
        let len = this.array.length;
        for (let mainElem=len;mainElem>0;mainElem--) {
            for (let comparingElem=0;comparingElem<mainElem;comparingElem++) {
                yield;
                if (this.array[comparingElem]>this.array[comparingElem+1]) {
                    let temp = this.array[comparingElem];
                    this.array[comparingElem] = this.array[comparingElem+1];
                    this.array[comparingElem+1] = temp;
                    this.toCreateElements(this.array,comparingElem,comparingElem+1)
                    yield;
                }
                if (mainElem === 1) {
                    clearInterval(this.interval)
                    this.toCreateElements(this.array,"sorted"); // while calling this method will understand the array is sorted
                    this.sort = undefined; // destruct the generator function.
                }
            }
        }
    }
    toSort(array:any,timer:any) {
        this.sort = this.bubbleSort(); // to reset generator.
        this.array = array; // to store random array.
        this.interval = setInterval( () => {
            if (this.sort) {
                this.sort.next() // resume the function.
            }
        },timer)}
    toCreateElements(array:any,red?:any,green?:any) {red === 1 && green === 0 ? this.toCreateElements(array,-1,-1): this.props.getChild(array,red,green);} // evertime while calling this method UI element will create for the array.
    render() {return (<></>)}
}
export default BubbleSort
