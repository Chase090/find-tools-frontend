const url = "http://localhost:3001/tools"

export const loadTools = (tools) => ({type: "GET_TOOLS", payload: tools})


export const fetchTools = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const tools = data.data
            const toolsArray = []

            tools.map(tool => {
                return toolsArray.push({...tool.attributes, id: tool.id})
                
            })
            console.log("coming from toolsfetchaction",toolsArray)
            dispatch(loadTools(toolsArray))
        })
    }
}