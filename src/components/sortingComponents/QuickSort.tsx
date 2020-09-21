import React, { Component } from 'react'

interface IMyComponentProps {
    getChild:any;
  }


export class QuickSort extends Component <IMyComponentProps> {
    array: any;
    timer: number | undefined;
    constructor(props:IMyComponentProps) {
        super(props)
    
        this.state = {}
    }
    swap(items:any, leftIndex:any, rightIndex:any){
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    partition(items:any, left:any, right:any) {
        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        this.toCreateElements(items,left,right)
        return i;
    }
    async quickSort(items:any, left:any, right:any) {
        var index;
        if (items.length > 1) {
            return new Promise(() => {
                setTimeout(() => {
                    index = this.partition(items, left, right); //index returned from partition
                    if (left < index - 1) { //more elements on the left side of the pivot
                        this.quickSort(items, left, index - 1);
                    }
                    if (index < right) { //more elements on the right side of the pivot
                        this.quickSort(items, index, right);
                    }
                }, this.timer);
            })
        }
        this.toCreateElements(items,"sorted")
    }
    toCreateElements(array:any,i?:any,j?:any) {
        i === array.length-2 &&j === 1 ? this.toCreateElements(array,-1,-1): this.props.getChild(array,i,j);
    }
    sort(array:any,timer:number) {
        this.timer = timer
        this.quickSort(array,0,array.length -1);
    }
    render() {
        return (
            <div>
            </div>
        )
    }
}

export default QuickSort
