
export const setCats = (cats) => ({type: "GOT_CATS", payload: cats})

export const fetchCategory = () => {
    return(dispatch) => {

        fetch('http://localhost:3001/categories')
        .then(resp => resp.json())
        .then(data => {
            const cats = data.data.map(cat => cat.attributes)
            dispatch(setCats(cats))
        })

    }
}

// why thunk, returns a function for the action creator