import { connect } from "react-redux";
import Zoom from "../components/Zoom";
import { AppState } from "../../../setup/configureReducer";
import { zoomIn, zoomOut, resetZoom } from "../../../actions";
import ZoomProps from "../components/ZoomProps";

const mapStateToProps = (state : AppState) : Partial<ZoomProps> => {
    return {}
}

const mapDispatchToProps = (dispatch) : Partial<ZoomProps> => {
    return {
        zoomIn : () => {
            dispatch(zoomIn())
        },
        zoomOut : () => {
            dispatch(zoomOut())
        },
        resetZoom : () => {
            dispatch(resetZoom())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Zoom);