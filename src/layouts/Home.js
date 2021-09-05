import { connect } from "react-redux"


function Home(props) {
    console.log(props.errorMessage)
    return (
        <h1>{props.errorMessage}</h1>
    )

}


const mapStateToProps = (state) => {
    return {
        errorMessage: state.authReducer.errorMessage
    }
}

export default connect(mapStateToProps, null)(Home)

