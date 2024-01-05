


export const ContactList =(({contacts}) => {
	const elements = contacts.map(({id, name, number}) => <li key={id}>{name}, {number}</li>)
	return (
		<ul>
			{elements}
		</ul>
	)});