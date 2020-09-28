import React, { Component } from 'react'

interface IMyComponentProps {
    getChild:any;
  }

export class QuickSort extends Component <IMyComponentProps> {

    array: any;
    timer: number | undefined;
    constructor(props:IMyComponentProps) { super(props) }
    
    partition(items:any, left:any, right:any) {
        var pivot   = items[Math.floor((right + left) / 2)] //middle element is selected as a pivot.
        while (left <= right) {
            while (items[left] < pivot) {
                left++;
            }
            while (items[right] > pivot) {
                right--;
            }
            if (left <= right) {
                [items[left],items[right]] = [items[right],items[left]] // swap left and rigt elements.
                this.toCreateElements(items,left,right);
                left++;
                right--;
            }
        }
        return left;
    }
    quickSort(items:any, left:any, right:any) {
        var index;
        if (items.length > 1) {
            setTimeout(() => { // delay for every iterations.
                index = this.partition(items, left, right); //index returned from partition
                if (left < index - 1) { //more elements on the left side of the pivot
                    this.quickSort(items, left, index - 1);
                }
                if (index < right) { //more elements on the right side of the pivot
                    this.quickSort(items, index, right);
                }
            }, this.timer);
        }
    }
    toCreateElements(array:any,i?:any,j?:any) {
        this.props.getChild(array,i,j); // evertime while calling this method UI element will create for the array.
    }
    sort(array:any,timer:number) {
        this.timer = timer; // for reset timers.
        this.quickSort(array,0,array.length -1)
    }
    render() { return (<></>) }
}

export default QuickSort
