import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Button, Form } from "./ContactForm.styled";

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

	contactNameId = nanoid()
	contactPhoneId = nanoid()

	render() {
		const {contactNameId, contactPhoneId} = this;
		return (
			<Form onSubmit={this.handleSubmit}>
				<label htmlFor={contactNameId}>
					Name
					</label>
					<input
					id={contactNameId}
					type="text"
					name="name"
					placeholder="Name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
				/>
				
				<label htmlFor={contactPhoneId}>
					Number
					</label>
					<input 
					id={contactPhoneId}
					type="number"
					name="name"
					placeholder="Phone number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
				/>
				
				<Button type='submit'>Add contact</Button>
			</Form>
		);
	}

}