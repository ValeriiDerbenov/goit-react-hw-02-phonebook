import { Component } from "react";
import PropTypes from 'prop-types';


export default class Filter extends Component {
	static propTypes = {
		onFilter: PropTypes.func.isRequired,
		filter: PropTypes.string,
	};

	render() {

		return (
			<label htmlFor="">
				Find contacts by name
				<input type="text" onChange={this.props.onFilter} value={this.props.filter}  />
			</label>
		)
	}

}