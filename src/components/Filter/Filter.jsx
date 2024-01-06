import { Component } from "react";
import PropTypes from 'prop-types';


export default class Filter extends Component {
	static propTypes = {
		onFilter: PropTypes.func.isRequired,
		filter: PropTypes.string,
	};

	render() {
		const { filter, onFilter } = this.props;
		return (
			<label>
				Find contacts by name
				<input 
				placeholder="Search"
				type="text" 
				onChange={onFilter} value={filter}  />
			</label>
		)
	}

}