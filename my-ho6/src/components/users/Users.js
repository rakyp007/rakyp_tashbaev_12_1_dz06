
import React from 'react'

export function Users({ data }) {
	return (
		<>
			<td>
				{data.map((key,name) => {
					return (
						<>
							<th key={key}>{name.name}</th>
							<th key={key}>{name.email}</th>
							<th key={key}>{name.userName}</th>
						</>
					)
				})}
			</td>
		</>
	)
}

export default Users;