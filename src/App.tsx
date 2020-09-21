import React from 'react';
import './App.css';
import TopNavigation from './components/navigation/TopNavigation';
import Main from './components/main/Main';

interface IMyComponentProps {}

interface IMyComponentState {
  receivedvalue: any
}

class App extends React.Component <IMyComponentProps, IMyComponentState>{

  refElement:any;

  constructor(props:IMyComponentProps) {
    super(props);

    this.state = {
      receivedvalue : 30
    };
  }
  setRef = (element:any) => { // this method for creating reference for main component
    this.refElement = element
  }
  getData = (value:any) => { // get data from top navigation component.
    this.setState({receivedvalue:value})
    this.refElement.createRandomArray(value)
  }
  updateData = (value:any) => {
    this.setState({receivedvalue:value});
    this.refElement.updateData(value)
  }
  toMainStart = () => {
    this.refElement.callSort()
  }
  render() {
    return(
      <main>
        <TopNavigation sendData ={this.getData} updateData = {this.updateData} startSorting={this.toMainStart}/>
        <Main ref = {this.setRef}/>
      </main>
    )
  }
}

export default App;
