import React, { Component } from 'react';

interface IMyComponentProps {
  getChild:any;
}

interface IMyComponentState {
    sortedData:any;
}

export class MergeSort extends Component <IMyComponentProps, IMyComponentState> {

  mergeSort (arr:any):any {
    console.log("Merge sort is under development. in next submit will work properly.")
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2),left,right;
    left = this.mergeSort(arr.slice(0, mid))
    right = this.mergeSort(arr.slice(mid))
    let sorted = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) sorted.push(left.shift());
      else sorted.push(right.shift());
    };
    const value = sorted.concat(left.slice().concat(right.slice()));
    this.toCreateElements(value)
    return value;
  }
  toCreateElements(array:any,i?:any,j?:any) {
    i === array.length-2 &&j === 1 ? this.toCreateElements(array,-1,-1): this.props.getChild(array,i,j);
  }
  render() {
      return (
          <div>
          </div>
      )
  }
  // mozilla firefox and safari using marge sort as a default sorting algorithm.
}
// merge (arr1:any, arr2:any) {
//   let sorted = [];

//   while (arr1.length && arr2.length) {
//     if (arr1[0] < arr2[0]) sorted.push(arr1.shift());
//     else sorted.push(arr2.shift());
//   };
//   const value = sorted.concat(arr1.slice().concat(arr2.slice()));
//   this.toCreateElements(value)
//   console.log(value)
//   return value;
// };

// mergeSort (arr:any):any {
//   console.log(arr)
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2),left,right;
//   left = this.mergeSort(arr.slice(0, mid))
//   right = this.mergeSort(arr.slice(mid))
//   console.log("final call");
//   return this.merge(left,right);
// }
export default MergeSort
