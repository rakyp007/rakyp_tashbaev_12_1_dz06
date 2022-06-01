import React, { useEffect, useState } from 'react'
import Users from '../../components/users/Users'

const URl = 'https://jsonplaceholder.typicode.com/users'

function MainPage() {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch(URl)
			.then(response => response.json())
			.then(data => setData(data))
	})

	return (
		<>
			<table border='10'>
				<tr>
					<td>Name</td>
					<td>Email</td>
					<td>userName</td>
				</tr>
				<tr>
					<Users data={data}/>
				</tr>
			</table>
		</>
	)
}
export default MainPage