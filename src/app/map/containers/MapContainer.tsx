import { AppState } from "../../../setup/configureReducer";
import MapProps from "../components/MapProps";
import { connect } from "react-redux";
import Map from "../components/Map";
import { setCenter, showModal, setDetailsForModal } from "../../../actions";
import GeographyData from "../../objects/GeographyData";
import GuestData from "../../objects/GuestData";
import SelectedDetails from "../../objects/SelectedDetails";

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
        showDetails : (details : SelectedDetails) => {
            dispatch(setDetailsForModal(details));
            dispatch(showModal());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Map);