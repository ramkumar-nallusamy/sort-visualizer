import React, { Component } from 'react'
import MergeSort from '../sortingComponents/MergeSort';
import HeapSort from '../sortingComponents/HeapSort';
import InsertionSort from '../sortingComponents/InsertionSort';
import BubbleSort from '../sortingComponents/BubbleSort';
import SelectionSort from '../sortingComponents/selectionSort';
import QuickSort from '../sortingComponents/QuickSort';


interface IMyComponentProps {}

interface IMyComponentState {
    arrayToView:any;
    object:Object;
    randomArray:any;
}

export class Main extends Component <IMyComponentProps, IMyComponentState> {

    arrayItems:any ;
    sortElement:any;
    heapRefElement: any;
    InsertionSortRefElement: any;
    bubbleSortRefElement: any;
    selectionSortRefElement:any;
    quickSortRefElement: any;

    constructor(props:IMyComponentProps) {
        super(props)
        this.state = {
            arrayToView:this.arrayItems,
            object: {
                value:50,
                type:100,
                method: "Insertion Sort"
            },
            randomArray:[],
        }
    }
    toCreateElements(array:any) { // it will create html lists.
        this.arrayItems = array.map( (element:any,index:any) => 
        <li key={index} style={element.style} className='mx-1' data-toggle="tooltip" data-placement="right" title={`value: ${element.value}`}></li>)
        this.setState({arrayToView:this.arrayItems});
    }
    componentDidMount() {
         if (this.state.randomArray.length === 0)  {
             this.createRandomArray(this.state.object);
         }
    }
    createStyles(array:any,first?:any,second?:any) { // set styles for elements.
        let styledArray = [];
        for (let element=0;element<array.length;element++) {
            if (element === first) {
                let obj = {
                    value:array[element],
                    style: {
                        height:`${array[element]}px`,
                        width:'5px',
                        background:"#90EE90",
                        listStyle:'none',
                    }
                }
                styledArray.push(obj)
            }
            else if (element === second) {
                let obj = {
                    value:array[element],
                    style: {
                        height:`${array[element]}px`,
                        width:'5px',
                        background:'red',
                        listStyle:'none',
                    }
                }
                styledArray.push(obj)
            }
            else if (first === "sorted") {
                let obj = {
                    value:array[element],
                    style: {
                        height:`${array[element]}px`,
                        width:'5px',
                        background:"#FF2EC7",
                        listStyle:'none',
                    }
                }
                styledArray.push(obj)
            }
            else {
                let obj = {
                    value:array[element],
                    style: {
                        height:`${array[element]}px`,
                        width:'5px',
                        background:"blue",
                        listStyle:'none',
                    }
                }
                styledArray.push(obj)
            }
        }
        this.toCreateElements(styledArray);
    }
    updateData(data:any) {
        this.setState({object:data})
    }
    callSort() { // calling sort method.
        const object:any = this.state.object;
        const array:any = this.state.randomArray;
        switch(object.method) {
            case "Merge Sort":
                this.sortElement.sort(array,object.type);
                break;
            case "Insertion Sort":
                this.InsertionSortRefElement.sort(array,object.type);
                break;
            case "Bubble Sort":
                this.bubbleSortRefElement.toSort(array,object.type)
                break;
            case "Heap Sort":
                this.heapRefElement.toCall(array,object.type);
                break;  
            case "selection Sort":
                this.selectionSortRefElement.sort(array,object.type);    
                break;
            case "Quick Sort" :
                this.quickSortRefElement.sort(array,object.type)
                break;
        }
    }
    createRandomArray(object:any) {
        let array = [];
        for (let i=0;i<object.value;i++) {
            const value = Math.round(Math.random() * (600 - 100) + 10);
            array.push(value)
        }
        this.createStyles(array)
        this.setState({randomArray:array,object:object})
        
    }
    callMergeSortRef = (element:any) => {
        this.sortElement = element
    }
    heapSortRef = (element:any) => {
        this.heapRefElement = element
    }
    insertionSortRef = (element:any) => {
        this.InsertionSortRefElement = element;
    }
    bubbleSortRef = (element:any) => {
        this.bubbleSortRefElement = element;
    }
    selectionSortRef = (element:any) => {
        this.selectionSortRefElement = element;
    }
    quickSortRef = (element: any) => {
        this.quickSortRefElement = element;
    }
    toViewCallBack = (value:any,i?:any,j?:any) => {
        this.createStyles(value,i,j)
    }
    render() {
        return (
            <div>
                <ul className='d-flex justify-content-center'>{this.arrayItems}</ul>
                <BubbleSort ref={this.bubbleSortRef} getChild={this.toViewCallBack}/>
                <MergeSort ref= {this.callMergeSortRef} getChild={this.toViewCallBack}/>
                <HeapSort ref={this.heapSortRef} getChild={this.toViewCallBack}/>
                <QuickSort ref={this.quickSortRef} getChild={this.toViewCallBack}/>
                <InsertionSort ref={this.insertionSortRef} getChild={this.toViewCallBack}/>
                <SelectionSort ref={this.selectionSortRef} getChild={this.toViewCallBack}/>
            </div>
        )
    }
}

export default Main
