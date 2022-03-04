import React from "react";


class InputTool extends React.Component {
    state = {
        count: 0,
        query: ""
    }


    handleOnChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        
        this.setState({
            query: value
        })
        console.log(this.state)
    }
  
 
    // increments the count on submit 
    // count retains reincrements
    // then clears
    handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.query.length)
        const input = this.state.query.length

        this.setState(prevState => ({
            count: prevState.count += input,
            query: ""
        }))

        console.log(this.state)
    }



    render() {
        return (
            <>
<p>{this.state.count}</p>
<form onSubmit={this.handleOnSubmit}>
                        
                            
                <input onChange={this.handleOnChange} value={this.state.query} type="text"/>

                <button type="submit" value="submit">asdf</button>

                </form>
            </>
        )
    }
}


export default InputTool