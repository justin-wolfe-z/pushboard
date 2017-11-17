import React, { Component } from 'react'
import {connect} from 'react-redux'

class Editor extends Component {
	render() {
		return (
			<div className='editor'>
				<div>Edit</div>
					<div>icon</div>
					<div>name</div>
					<div>type</div>
					<div>text</div>
			</div>
		)
	}
}

export default Editor