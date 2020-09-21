import React, { Component } from 'react'

interface IMyComponentProps {getChild:any;}
export class BubbleSort extends Component <IMyComponentProps> {
    array: any = [];
    interval: any;
    sort = this.gen()
    constructor(props:IMyComponentProps) {super(props)}
    *gen(){   
        let len = this.array.length;
        for (let i=len;i>0;i--) {
            for (let j=0;j<i;j++) {
                if (this.array[j]>this.array[j+1]) {
                    let temp = this.array[j];
                    this.array[j] = this.array[j+1];
                    this.array[j+1] = temp;
                    this.toCreateElements(this.array,i,j)
                    yield;
                }
                if (i === 1) {
                    clearInterval(this.interval)
                    this.toCreateElements(this.array,"sorted");
                }
            }
        }
        this.sort = this.gen()
    }
    toSort(array:any,timer:any) {
        this.array = array;
        this.interval = setInterval( () => {this.sort.next()},timer)}
    toCreateElements(array:any,i?:any,j?:any) {i === 1 && j === 0 ? this.toCreateElements(array,-1,-1): this.props.getChild(array,i,j);}
    render() {return (<></>)}
}
export default BubbleSort
