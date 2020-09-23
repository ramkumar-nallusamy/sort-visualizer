import React, { Component } from 'react'

interface IMyComponentProps { getChild:any; }

export class HeapSort extends Component <IMyComponentProps> {
   
    array: any;
    toStart:any = this.heapSort();
    
    constructor(props:IMyComponentProps) { super(props) }
    heapify(arr:any,length:number,i:number) {
        let largest = i;
        let left = i * 2 + 1;
        let right = left + 1;
        if (left< length && arr[left] > arr[largest]) { largest = left }
        if (right < length && arr[right] > arr [largest]) { largest = right}
        if (largest != i) {
            [arr[i],arr[largest]] = [arr[largest],arr[i]]
            this.heapify(arr,length,largest);
        }
    }
    *heapSort(arr?:any) {
        arr = this.array;
        let length = arr.length;
        let i = Math.floor(length/2 - 1);
        let k = length - 1;
        while (i >= 0) {
            this.heapify(arr,length,i)
            i--;
            this.toCreateElements(arr,k,i)
            yield;
        }
        while(k >= 0) {
            [arr[0],arr[k]] = [arr[k],arr[0]];
            this.heapify(arr,k,0);
            k--;
            this.toCreateElements(arr,arr[0],k)
            yield;
        }
        this.toCreateElements(arr,"sorted");
        this.toStart = undefined;
        return arr;
    }
    toCall(arr:any,timer:number) {
        this.array = arr;
        this.toStart = this.heapSort();
        setInterval( () => {
            if (this.toStart) {
                this.toStart.next();
            }
        }, timer)
    }
    toCreateElements(array:any,i?:any,j?:any) {
        if (i === "sorted") {
            this.props.getChild(array,i,j)
        }
        else {
            this.props.getChild(array,i,j)
        }
    }
    render() {return (<></>)}
}

export default HeapSort
