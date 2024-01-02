import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

export default class AddContactForm extends Component {
	static propTypes = {
	onAddContact: PropTypes.func.isRequired,	
	};

	state = {
		name: '',
		number: '',
	};

	handleSubmit = e => {
		e.preventDefault();

		const id = nanoid (6);
		const { name, number } = this.state;
    const { onAddContact } = this.props;

		onAddContact({id, name, number});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>

			</form>
		);
	}

}