import React, { Component } from 'react'
import { clearInterval } from 'timers';


interface IMyComponentProps {getChild:any;}
export class SelectionSort extends Component <IMyComponentProps> {

    array: any; interval:any;
    constructor(props:IMyComponentProps) {super(props)}
    toSort:any = this.start();

    *start () {
        let len = this.array.length, minElement:any, tempIndex = 0, index:any = 0;
        for (let j=0;j<len;j++) {
            minElement = this.array[j];
            for (let i=j;i<len;i++) {
                yield;
                if (minElement>this.array[i]){
                    minElement = this.array[i];
                    index = i;
                }
                this.toCreateElements(this.array,i,j);
            }
            this.array[index] = this.array[tempIndex];
            this.array[tempIndex] = minElement;
            tempIndex++;
        }
        this.toCreateElements(this.array,"sorted");
        this.toSort = undefined;
    }
    sort = (array:any,timer:any) => {
        this.toSort = this.start();
        this.array = array; 
        this.interval = setInterval ( () => {
            if (this.toSort) {
                this.toSort.next()
            }
        },timer)
    }
    toCreateElements(array:any,i?:any,j?:any) {
            this.props.getChild(array,i,j)
    }
    render() {return (<></>)}
}

export default SelectionSort
