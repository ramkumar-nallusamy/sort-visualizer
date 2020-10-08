import React, { Component } from 'react'

interface IMyComponentProps {
    getChild:any;
  }

export class QuickSort extends Component <IMyComponentProps> {

    array: any;
    timer: number | undefined;
    toSort:any = this.start();
    interval: any;
    constructor(props:IMyComponentProps) { super(props) }
    
    *start() {
        if (!this.array || this.array.length <= 1) {
            return this.array
        }
        var stack = []
        var low = 0
        var high = this.array.length - 1
        stack.push([low, high])
        while (stack.length) {
            let range:any = stack.pop()
            low = range[0]
            high = range[1]
            yield;
            this.toCreateElements(this.array,low,high)
            if (low < high) {
                let pivot = this.array[low];
                let i = low;
                let j = high;
                while (i<j) {
                    do {
                        i++;
                    }
                    while(this.array[i]< pivot);
                    do {
                        j--;
                    }
                    while(this.array[j] > pivot);
                    
                    if (i<j && this.array[i] > pivot && this.array[j] < pivot) {
                        [this.array[i],this.array[j]] = [this.array[j],this.array[i]];
                        console.log("inside swapped")
                        i++;
                        j--;
                    }
                }
                [this.array[low],this.array[j]] = [this.array[j],this.array[low]];
                console.log("outside swapped")
                stack.push([low,j]);
                stack.push([j+1,high])
            }
        }
        this.toCreateElements(this.array);
        return this.array
    }
    // partition(items:any, left:any, right:any) {
    //     var pivot   = items[Math.floor((right + left) / 2)] //middle element is selected as a pivot.
    //     return new Promise( (res:any) => {
    //         setTimeout( () => {
    //             return new Promise( (res) => {
    //                 while (left <= right) {
    //                     while (items[left] < pivot) {
    //                         left++;
    //                     }
    //                     while (items[right] > pivot) {
    //                         right--;
    //                     }
    //                     if (left <= right) {
    //                         [items[left],items[right]] = [items[right],items[left]] // swap left and rigt elements.
    //                         this.toCreateElements(items,left,right);
    //                         left++;
    //                         right--;
    //                     }
    //                 }
    //             })
    //         },500)
    //         res(left);
    //         console.log("returned partition")
    //     })
    // }
    // quickSort(items:any, left:any, right:any) {
    //     var index:any;
    //     if (items.length > 1) {
    //         setTimeout(async() => { // delay for every iterations.
    //             await this.partition(items, left, right)
    //             .then( (data) => {
    //                 index = data;
    //                 console.log(index)
    //             })
    //             if (left < index - 1) { //more elements on the left side of the pivot
    //                 this.quickSort(items, left, index - 1);
    //             }
    //             if (index < right) { //more elements on the right side of the pivot
    //                 this.quickSort(items, index, right);
    //             }
    //         }, this.timer);
    //     }
    // }
    toCreateElements(array:any,i?:any,j?:any) {
        this.props.getChild(array,i,j); // evertime while calling this method UI element will create for the array.
    }
    sort(array:any,timer:number) {
        this.toSort = this.start();
        this.array = array; 
        this.toSort.next();
        this.interval = setInterval ( () => {
                this.toSort.next();
        },timer)
    }
    // sort(array:any,timer:number) {
    //     this.timer = timer; // for reset timers.
    //     this.quickSort(array,0,array.length -1)
    // }
    render() { return (<></>) }
}

export default QuickSort
// if (low < high) {
//     var pivot = Math.floor((low + high) / 2)
//     stack.push([low, pivot])
//     stack.push([pivot+1, high])
//     console.log(low,high);
//     [this.array[pivot],this.array[high]] = [this.array[high],this.array[pivot]];
//     while (low < high) {
//         yield;
//         while (this.array[low] < this.array[pivot]) {
//             low++ ;
//         }
//         while (this.array[high] > this.array[pivot]) {
//             high-- ;
//         }
//         if (this.array[low] >= this.array[pivot] && this.array[high] <= this.array[pivot]) {
//             [this.array[low],this.array[high]] = [this.array[high],this.array[low]]
//             this.toCreateElements(this.array,low,high)
            
//         }
//         console.log("called working")
//     }
//     [this.array[low],this.array[pivot]] = [this.array[pivot],this.array[low]]
// }