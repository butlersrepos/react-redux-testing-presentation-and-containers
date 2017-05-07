import Presenter from "./presenter"
import { connect } from "react-redux"
import { clickAction } from "../actions"

const mapStateToProps = state => ({ text: state.message })
const mapDispatchToProps = dispatch => {
	return {
		clickEvent: () => {
			dispatch(clickAction())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter);