import PropTypes from 'prop-types';
import { Component } from "react";
import { nanoid } from "nanoid";
import { Button, Form } from "./ContactForm.styled";

const INITIAL_STATE = {
	name: '',
	number: '',
};

export default class AddContactForm extends Component {
	state = {...INITIAL_STATE	};

	handleSubmit = e => {
		e.preventDefault();
// console.log('this.props :>> ', this.props);
		this.props.onSubmit({...this.state}); 
		const id = nanoid (6);
		const { name, number } = this.state;
    const { onAddContact } = this.props;
		// console.log('name, number :>> ', name, number);
		this.reset();
		onAddContact({id, name, number});
	}

	reset() {
		this.setState({...INITIAL_STATE	})
	}

	contactNameId = nanoid()
	contactPhoneId = nanoid()

	handleChange = ({target}) => {
		// console.log('e.target.value :>> ', e.target.value);
		const {name, value} = target;
		// console.log('onChange');

		this.setState({[name]: value});
	};

	render() {
		const {contactNameId, contactPhoneId, handleSubmit, handleChange} = this;
		const { number, name} =this.state;
		return (
			<Form onSubmit={handleSubmit}>
				<label htmlFor={contactNameId}>
					Name
					</label>
					<input
					id={contactNameId}
					type="text"
					name="name"
					// placeholder="Name"
					required
					onChange={handleChange}
					value={name}
				/>
				
				<label htmlFor={contactPhoneId}>
					Number
					</label>
					<input 
					id={contactPhoneId}
					type="tel"
					name="number"
					// placeholder="Phone number"
					required
					onChange={handleChange}
					value={number}
				/>
				
				<Button type='submit'>Add contact</Button>
			</Form>
		);
	}
}

AddContactForm.propTypes = {
	onAddContact: PropTypes.func,
};