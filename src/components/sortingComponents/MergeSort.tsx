import React, { Component } from 'react';

interface IMyComponentProps {
  getChild:any;
}

interface IMyComponentState {
    sortedData:any;
}

export class MergeSort extends Component <IMyComponentProps, IMyComponentState> {

  array:any = [];
  toSort:any = this.start();
  interval: any;

  *start() {
    //Create two arrays for sorting
    let sorted:any = Array.from(this.array);
    let n = sorted.length;
    let buffer = new Array(n);
    
    for (let size = 1; size < n; size *= 2) {
      for (let leftStart = 0; leftStart < n; leftStart += 2*size) {
        //Get the two sub arrays
        let left = leftStart,
            right = Math.min(left + size, n),
            leftLimit = right,
            rightLimit = Math.min(right + size, n);
        //Merge the sub arrays
        let bufferLeft = left;
        //Compare the two sub arrays and merge them in the sorted order
        while (left < leftLimit && right < rightLimit) {
          if (sorted[left] <= sorted[right]) {
            buffer[bufferLeft++] = sorted[left++];
          } else {
            buffer[bufferLeft++] = sorted[right++];
          }
          yield;
          this.toCreateElements(buffer,left+1,right+1)
        }
      
        //If there are elements in the left sub arrray then add it to the result
        while (left < leftLimit) {
          buffer[bufferLeft++] = sorted[left++];
          yield;
          this.toCreateElements(buffer,left,right)
        }
      
        //If there are elements in the right sub array then add it to the result
        while (right < rightLimit) {
          buffer[bufferLeft++] = sorted[right++];
        }
      }
      //Swap the sorted sub array and merge them
      let temp = sorted;
      sorted = buffer;
      buffer = temp;
    }
    this.toCreateElements(sorted,"sorted");
    clearInterval(this.interval);
    return sorted;
  }

  sort = (array:any,timer:any) => {
    this.toSort = this.start();
    this.array = array; 
    this.toSort.next();
    for (let i=0;i<array.length;i++) {
      this.toSort.next();
    }
    this.interval = setInterval ( () => {
            this.toSort.next();
    },timer)
  }
  toCreateElements(array:any,i?:any,j?:any) {
    i === array.length-2 &&j === 1 ? this.toCreateElements(array,-1,-1): this.props.getChild(array,i,j);
  }
  render() {return (<></>)}
  // mozilla firefox and safari using marge sort as a default sorting algorithm.
}
export default MergeSort
