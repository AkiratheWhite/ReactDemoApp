import {useState} from 'react';

const Home = () => {
    //Variables defined in JS is not reactive; the template does not re-render with changes to the variable.
    //We have to use a StateHook.

    const [name, setName] = useState("Jotaro");
    const age = 35;

    const handleClick = () => {
        setName("DIO");
        console.log("Clicked.");
    }

    /*Functions that require arguments to be passed must be wrapped in an anonymous function.
    Not wrapping the function will cause it to be immediately invoked.*/
    const handleClickAgain = (name, e) => {
        setName("Jotaro");
        console.log(`Hello ${name}`, e.target);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {handleClickAgain("Jotaro", e);}}>Click me again.</button>
        </div>
     );
}
 
export default Home;

//Below is the above component converted from a function to a class. They will look the same on a browser.
/*import React from 'react';

class Home extends React.Component {
    state = {
        name: "Jotaro",
        age: 35
    }

    handleClick = () => {
        this.setState({name: "Dio"});
    }

    handleClickAgain = () => {
        this.setState({name: "Jotaro"});
    }

    render() {
        return ( 
            <div className="home">
                <h2>Homepage</h2>
                <p>{this.state.name} is {this.state.age} years old.</p>
                <button onClick={this.handleClick}>Click me</button>
                <button onClick={this.handleClickAgain}>Click me again.</button>
            </div>
         );
    }
}

export default Home;*/