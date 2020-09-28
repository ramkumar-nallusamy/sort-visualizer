import React, { Component } from 'react'

interface IMyComponentProps { getChild:any; }

export class HeapSort extends Component <IMyComponentProps> {
   
    array: any;
    toStart:any = this.heapSort();
    interval: any;
    
    constructor(props:IMyComponentProps) { super(props) }
    heapify(arr:any,length:number,splitValue:number) { // to heap the array.
        let largest = splitValue;
        let left = splitValue * 2 + 1;
        let right = left + 1;
        if (left< length && arr[left] > arr[largest]) { 
            this.toCreateElements(arr,left,largest)
            largest = left ;
        }
        if (right < length && arr[right] > arr [largest]) { 
            this.toCreateElements(arr,right,largest)
            largest = right;
        }
        if (largest != splitValue) {
            [arr[splitValue],arr[largest]] = [arr[largest],arr[splitValue]]
            this.heapify(arr,length,largest);
        }
    }
    *heapSort(arr?:any) {
        arr = this.array;
        let length = arr.length;
        let splitValue = Math.floor(length/2 - 1);
        let unSortArrLength = length - 1;
        while (splitValue >= 0) {
            this.heapify(arr,length,splitValue)
            splitValue--;
            yield;
        }
        while(unSortArrLength >= 0) {
            [arr[0],arr[unSortArrLength]] = [arr[unSortArrLength],arr[0]];
            this.heapify(arr,unSortArrLength,0);
            unSortArrLength--;
            yield;
        }
        this.toCreateElements(arr,"sorted"); // while calling this method will understand the array is sorted
        this.toStart = undefined; // for destruct the generator.
        clearInterval(this.interval) 
        return arr;
    }
    toCall(arr:any,timer:number) {
        this.array = arr;
        this.toStart = this.heapSort(); // for reset the generator.
        this.interval = setInterval( () => {
            if (this.toStart) {
                this.toStart.next(); // Resume the stopped function.
            }
        }, timer)
    }
    toCreateElements(array:any,i?:any,j?:any) { this.props.getChild(array,i,j) } // evertime while calling this method UI element will create for the array.
    render() {return (<></>)}
}

export default HeapSort
