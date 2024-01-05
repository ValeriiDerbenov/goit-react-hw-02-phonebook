import { Component } from "react";
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";
import { Button, Form } from "./ContactForm.styled";

const INITIAL_STATE = {
	name: '',
	number: '',
};

export default class AddContactForm extends Component {
	static propTypes = {
	onAddContact: PropTypes.func.isRequired,	
	};

	state = {...INITIAL_STATE	};

	handleSubmit = e => {
		e.preventDefault();

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
					placeholder="Name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
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
					placeholder="Phone number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
					onChange={handleChange}
					value={number}
				/>
				
				<Button type='submit'>Add contact</Button>
			</Form>
		);
	}

}