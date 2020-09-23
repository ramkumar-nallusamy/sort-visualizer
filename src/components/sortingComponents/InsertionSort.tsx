import React, { Component } from 'react'

interface IMyComponentProps {getChild:any;}

export class InsertionSort extends Component <IMyComponentProps> {

    interval:any; array = [];
    toSort = this.start();
    constructor(props:IMyComponentProps) { super(props) }
    *start() {
        let len = this.array.length;
        for (let i=0;i<len-1;i++) {
            this.toCreateElements(this.array,i,i+1)
            if (this.array[i] > this.array[i+1]) {
                let temp = this.array[i];
                this.array[i] = this.array[i+1];
                this.array[i+1] = temp;
                this.toCreateElements(this.array,i,i+1)
                yield;
                for (let j= i;j>0;j--) {
                    this.toCreateElements(this.array,j,j-1)
                    if (this.array[j]<this.array[j-1]) {
                        yield;
                        let temp = this.array[j];
                        this.array[j] = this.array[j-1];
                        this.array[j-1] = temp;
                    }
                }
            }
        } clearInterval(this.interval);
        this.toCreateElements(this.array,"sorted")
        this.toSort = this.start();
    }
    sort = (array:any,timer:any) => {this.array = array; this.interval = setInterval ( () => this.toSort.next(),timer)}
    toCreateElements = (array:any,i?:any,j?:any) => {this.props.getChild(array,i,j);}
    render() {return (<></>)}
    // chrome v8 engine uses this sort.
}
export default InsertionSort
