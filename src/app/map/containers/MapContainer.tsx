import { AppState } from "../../../setup/configureReducer";
import MapProps from "../components/MapProps";
import { connect } from "react-redux";
import Map from "../components/Map";
import { setCenter } from "../../../actions";

const mapStateToProps = (state : AppState) : Partial<MapProps> => {
    console.log("RESSD")
    console.log(state)
    console.log("STATE")
    console.log(state.selectedGuestData)
    return {
        selectedGuestData : state.selectedGuestData,
        zoomDegree : state.zoomDegree,
        center : state.center
    }
}

const mapDispatchToProps = (dispatch) : Partial<MapProps>  => {
    return {
        setCenter : (center : [number, number]) => {
            dispatch(setCenter(center));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);