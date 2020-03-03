import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

class Sorter extends Component{
    constructor(){
        super()
        this.state = {
            numbers:[]
        }
    }

    createNumbers(){
        const numbers = [];
        // Max number: 1000, min number: 10
        for (let i = 0; i < 200; i++) {
          numbers.push(Math.floor(Math.random() * (1000) + 10));
        }
        this.setState({
            numbers: numbers
        });
    }

    componentWillMount(){
        this.createNumbers();
    }

    // Function to animate the merge sort
    animate(){
        const swapArray = this.mergeSort(this.state.numbers);

        // Merge sort function will return an array holding all the values that
        // have been swapped and we simply change the styling of the bars
        for(let i = 0; i < swapArray.length; i++){
            const bars = document.getElementsByClassName('bar');
            setTimeout(() => {
                const [bar1Index, bar2Height] = swapArray[i];
                const bar1Style = bars[bar1Index].style;
                bar1Style.height = `${bar2Height/2}px`;
            }, i*5)
        }
    }

    mergeSort(arr){
        const swapArray = [];

        // Trivial base case
        if(arr.length <= 1){
            return arr;
        }

        // Make a copy of the original array
        // to
        const arr2 = arr.slice();

        this.mergeSort2(arr, 0, arr.length - 1, arr2, swapArray);
        return swapArray;
    }

    // Sorting function
    mergeSort2(arr, start, end, arr2, swapArray){

        // Trivial base case
        if(start===end){
            return;
        }

        // Divide and conquer algorithm
        const middle = Math.floor((start+end)/2);
        this.mergeSort2(arr2, start, middle, arr, swapArray);
        this.mergeSort2(arr2, middle+1, end, arr, swapArray);
        this.merge(arr, start, middle, end, arr2, swapArray);
    }

    // Uses indices of the array as opposed to two array halves
    // This is so we know which two values to swap in the actual array
    // making it possible to animate.
    // Modify the array as we go.
    merge(arr, start, middle, end, arr2, swapArray){
        // i variable holds the index of the final merged array
        let i = start;

        // j and k hold the indices of the two arrays we wish to merge together
        let j = start;
        let k = middle+1;

        // Compares numbers in the first half to the numbers in the second half
        while(j <= middle && k <= end){
            if(arr2[j] <= arr2[k]){
                swapArray.push([i, arr2[j]]);
                arr[i++] = arr2[j++];
            }else{
                swapArray.push([i, arr2[k]]);
                arr[i++] = arr2[k++];
            }
        }

        // Get the remaining numbers in first half, if any...
        while(j <= middle){
            swapArray.push([i, arr2[j]]);
            arr[i++] = arr2[j++];
        }

        // Get the remaining numbers in second half, if any...
        while(k <= end){
            swapArray.push([i, arr2[k]]);
            arr[i++] = arr2[k++];
        }
    }

    render(){
        return (
            <div className="App">
              <div style={{display:'flex', margin:'auto', justifyContent:'center', backgroundColor:'#3F2C7F'}}>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}>Kevin Su</h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/TicTacToe'} style={{ color: 'white'}}>Tic-Tac-Toe</Link></h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/Connect4'} style={{ color: 'white'}}>Connect-4</Link></h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/Calculator'} style={{ color: 'white'}}>Calculator</Link></h4>
                <h4 style={{color:'white', marginRight:'20px', marginLeft:'20px'}}><Link to={'/Sorter'} style={{ color: 'white'}}>Sorter</Link></h4>
              </div>
              <header className="App-header">
                <h1 style={{color: 'white'}}>Merge Sorter</h1>
                <div className="container">
                    {this.state.numbers.map((value, id) => (
                      <div className="bar" key={id} style={{backgroundColor: 'white', height: `${value/2}px`}}></div>
                    ))}
                </div>
                <div style={{ display: 'inline-block'}}>
                    <button onClick={() => this.createNumbers()} className="button">Reset</button>
                    <button onClick={() => this.animate()} className="button">Sort</button>
                </div>
              </header>
            </div>
        );
    }
}

export default Sorter;
