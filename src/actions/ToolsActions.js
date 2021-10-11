const url = "http://localhost:3001/tools"

export const loadTools = (tools) => ({type: "GET_TOOLS", payload: tools})
// export const loadMarked = (marked) => ({type: "GET_MARKED", payload: marked})
export const updateAvailable = (updatedTool) => ({type: "UPDATE_TOOL", payload: updatedTool})

export const deleteTool = (id) => ({type: "DELETE_TOOL", payload: id})


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
            

           dispatch(loadTools(toolsArray))
        })
    }
}


export const toolsMarkedUnavaliable = (id) => {
    return (dispatch) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
        }

        fetch(`${url}/${id}`, configObj)
        .then(resp => resp.json())
        .then(data => dispatch(deleteTool(id)))
    }
}