import Presenter from "../../src/components/presenter"
import ReactTestUtils from "react-dom/test-utils"

describe("Presenter component", () => {
	let stubbedMessage = "some bullshit"
	let clickSpy = jest.fn()

	beforeEach(() => {
		document.body.appendChild(document.createElement("main"))
		ReactDOM.render(<Presenter text={stubbedMessage} clickEvent={clickSpy} />, $("main"))
	})

	test("renders the message", () => {
		expect($$("h1").length).toBe(1)
		expect($("h1").innerHTML).toEqual(stubbedMessage)
	})

	test("fires the handler on click", () => {
		ReactTestUtils.Simulate.click($("button"))
		expect(clickSpy.mock.calls.length).toBe(1)
	})
})