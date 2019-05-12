import { AppState } from "../../../setup/configureReducer";
import MapProps from "../components/MapProps";
import { connect } from "react-redux";
import Map from "../components/Map";

const mapStateToProps = (state : AppState) : Partial<MapProps> => {
    console.log("RESSD")
    console.log(state)
    console.log("STATE")
    console.log(state.selectedGuestData)
    return {
        selectedGuestData : state.selectedGuestData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);