const url = "http://localhost:3001/tools"

export const loadTools = (tools) => ({type: "GET_TOOLS", payload: tools})
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
// --------------
export const deletedTool = (id) => {
    let configObj = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }

    return (dispatch) => {
        fetch(url + `/${id}`, configObj)
        .then(resp => resp.json())
        .then(tool => dispatch(deleteTool(id)))
    }
}
