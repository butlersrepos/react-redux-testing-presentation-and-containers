import { Provider } from "react-redux"
import Container from "../../src/components/container.jsx"
import ReactTestUtils from "react-dom/test-utils"
import { clickAction } from "../../src/actions"

describe("Container component", () => {
	let statesMesssage = "i am the state!";
	let store = createFakeStore({ message: statesMesssage });

	beforeEach(() => {

		document.body.appendChild(document.createElement("main"))
		ReactDOM.render(
			<Provider store={store}>
				<Container />
			</Provider>,
			$("main")
		)
	})

	test("renders the message in state", () => {
		expect($("h1").innerHTML).toEqual(statesMesssage)
	})

	test("clicking the button dispatches the correct action", () => {
		ReactTestUtils.Simulate.click($("button"))
		expect(dispatchSpy.mock.calls.length).toBe(1)
		expect(dispatchSpy.mock.calls[0][0]).toEqual(clickAction())
	})
})