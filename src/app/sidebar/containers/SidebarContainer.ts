import { AppState } from "../../../setup/configureReducer";
import SidebarProps from "../components/SidebarProps";
import { AnyAction } from "redux";
import { doLoadMapData } from "../../../actions";
import { ThunkDispatch } from "redux-thunk";
import { connect } from "react-redux";
import Sidebar from "../components/Sidebar";

const mapStateToProps =  (state : AppState) : Partial<SidebarProps> => {
    return {}
}

const mapDispatchToProps = (dispatch : ThunkDispatch<AppState, undefined, AnyAction>) : Partial<SidebarProps>  => {
    return {
        loadMapData : (selectedGuest : string) => {
            dispatch(doLoadMapData(selectedGuest));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar);