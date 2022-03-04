const url = "http://localhost:3001/tools"

export const loadTools = (tools) => ({type: "GET_TOOLS", payload: tools})

export const deleteTool = (id) => ({type: "DELETE_TOOL", payload: id})

export const addTool = (tool) => ({type: "CREATE_TOOL", payload: tool})

export const updatedTool = (tool) => ({type: "UPDATE_TOOL", payload: tool})


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
    return dispatch =>{ 
    fetch(url + `/${id}`, {
        method: 'DELETE', 
    })
    dispatch(deleteTool(id))
    }
}
// --------------
export const createTool = (tool) => {
    return(dispatch) => {
       const configobj = {
           method: 'POST',
           headers: { 'content-type': 'application/json'},
           body: JSON.stringify(tool)
       } 

       fetch(url, configobj)
       .then(res => res.json())
       .then(data => {dispatch(addTool(data))})
    }
}
// --------------
export const updateTool = (tool) => {
    return(dispatch) => {
       const configobj = {
           method: 'PATCH',
           headers: { 'content-type': 'application/json', Accept: "application/json"},
           body: JSON.stringify(tool)
       } 

       fetch(url + `/${tool.id}`, configobj)
       .then(res => res.json())
       .then(data => {
           
            const toolObj = {id: parseInt(data.data.id), ...data.data.attributes}


            dispatch(updatedTool(toolObj))
       })
    }
}