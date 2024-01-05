


export const ContactList =(({contacts, deleteContact}) => {
	const elements = contacts.map(({id, name, number}) => <li key={id}>{name}, {number} <button onClick={() => deleteContact(id)} type="button">Delete</button></li>)
	return (
		<ul>
			{elements}
		</ul>
	)});