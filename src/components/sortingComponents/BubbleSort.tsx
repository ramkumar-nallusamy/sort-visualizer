import React, { Component } from 'react'

interface IMyComponentProps {getChild:any;}
export class BubbleSort extends Component <IMyComponentProps> {

    array: any = [];
    interval: any;
    sort:any = this.bubbleSort()

    constructor(props:IMyComponentProps) {super(props)}

    *bubbleSort(){   
        let len = this.array.length;
        for (let i=len;i>0;i--) {
            for (let j=0;j<i;j++) {
                yield;
                if (this.array[j]>this.array[j+1]) {
                    let temp = this.array[j];
                    this.array[j] = this.array[j+1];
                    this.array[j+1] = temp;
                    this.toCreateElements(this.array,j,j+1)
                    yield;
                }
                if (i === 1) {
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
    toCreateElements(array:any,i?:any,j?:any) {i === 1 && j === 0 ? this.toCreateElements(array,-1,-1): this.props.getChild(array,i,j);} // evertime while calling this method UI element will create for the array.
    render() {return (<></>)}
}
export default BubbleSort
