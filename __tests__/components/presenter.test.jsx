import Presenter from '../../src/components/presenter.jsx';

describe('Presenter component', () => {
	let stubbedMessage = 'some bullshit'

	beforeEach(() => {
		document.body.appendChild(document.createElement('main'))
		ReactDOM.render(<Presenter text={ stubbedMessage } />, $('main'))
	})

	test('renders the message', () => {
		expect($$('h1').length).toBe(1)
		expect($('h1').innerHTML).toEqual(stubbedMessage)
	})
})