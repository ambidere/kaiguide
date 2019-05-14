import { AppState } from "../../../setup/configureReducer";
import MapModalProps from "../components/MapModalProps";
import { hideModal } from "../../../actions";
import MapModal from "../components/MapModal";
import { connect } from "react-redux";

const mapStateToProps = (state : AppState) : Partial<MapModalProps> => {
    return {
        isVisible : state.isModalVisible
    }
}

const mapDispatchToProps = (dispatch) : Partial<MapModalProps> => {
    return {
        onClose : () => {
            dispatch(hideModal());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapModal);