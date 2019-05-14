import { AppState } from "../../../setup/configureReducer";
import MapProps from "../components/MapProps";
import { connect } from "react-redux";
import Map from "../components/Map";
import { setCenter, showModal } from "../../../actions";

const mapStateToProps = (state : AppState) : Partial<MapProps> => {
    
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
        },
        showDetails : () => {
            dispatch(showModal());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);