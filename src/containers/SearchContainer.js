import React from "react";
import { connect } from "react-redux";
class SearchContainer extends React.Component {

    state = {
        query: "",
        tools: []
    }

    


}

const mapStateToProps = (store) => {
    return{
        tools: store.tools
    }
}


export default connect(mapStateToProps)(SearchContainer)