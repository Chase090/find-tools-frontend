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
    return dispatch =>{ 
    fetch(url + `/${id}`, {
        method: 'DELETE', 
    })
    dispatch(deleteTool(id))
    }
}
// --------------
// export const toolsMarkedUnavaliable = (tool) => {
//     return (dispatch) => {
//         const configObj = {
//             method: 'PATCH',
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json"
//             },
//             body: JSON.stringify(tool)
//         }

//         fetch(`${url}/${tool.id}`, configObj)
//         .then(resp => resp.json())
//         .then(data => {
//             const tool = data.data
//             const cheese = {id: parseInt(tool.id), ...tool.attributes}

//             dispatch(updateAvailable(cheese))
//         })
//     }
// }