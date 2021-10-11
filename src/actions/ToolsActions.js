const url = "http://localhost:3001/tools"

export const loadTools = (tools) => ({type: "GET_TOOLS", payload: tools})
export const loadMarked = (marked) => ({type: "GET_MARKED", payload: marked})
export const updateAvailable = (updatedTool) => ({type: "UPDATE_TOOL", payload: updatedTool})


export const fetchTools = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const tools = data.data
            const toolsArray = []

            tools.map(tool => {
                return toolsArray.push({...tool.attributes, id: parseInt(tool.id)})
                
            })
            console.log("coming from toolsfetchaction",toolsArray)
            dispatch(loadTools(toolsArray))
        })
    }
}

export const fetchMarkedTools = () => {
    return (dispatch) => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            const tools = data.data
            const toolsArray = []

            tools.map(tool => {
                return toolsArray.push({...tool.attributes, id: parseInt(tool.id)})
                
            })

            toolsArray.filter
            console.log("coming from toolsfetchaction",toolsArray)
            dispatch(loadTools(toolsArray))
        })
    }
}

export const toolsMarkedUnavaliable = (tool) => {
    return (dispatch) => {
        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(tool)
        }

        fetch(`${url}/${tool.id}`, configObj)
        .then(resp => resp.json())
        .then(data => {
            const tool = data.data
            const cheese = {id: parseInt(tool.id), ...tool.attributes}

            dispatch(updateAvailable(cheese))
            // debugger
        })
    }
}