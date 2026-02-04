import React, { Component } from "react";

class ClassBaseHooks extends Component {
     constructor(props) {
          super(props);
          this.state = { count: 0 };
     }

     componentDidMount() {
          console.log("Mounted!");
     }

     componentDidUpdate() {
          console.log("Updated!");
     }

     componentWillUnmount() {
          console.log("Unmounted!");
     }

     increment = () => {
          this.setState({ count: this.state.count + 1 });
     };

     decrement = () => {
          if (this.state.count > 0) {
               this.setState({ count: this.state.count - 1 });
          } else {
               alert("Count cannot be less than 0");
          }
     };

     render() {
          return (
               <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
                         <h1 className="text-2xl font-bold text-indigo-600 mb-4">Counter</h1>
                         <p className="text-lg mb-4">Count: {this.state.count}</p>
                         <div className="flex flex-row justify-between ">
                              <button
                                   onClick={this.increment}
                                   className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                              >
                                   Increase
                              </button>

                              <button
                                   onClick={this.decrement}
                                   className="  px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition"
                              >
                                   decrement
                              </button>
                         </div>
                    </div>
               </div>
          );
     }
}

export default ClassBaseHooks;
