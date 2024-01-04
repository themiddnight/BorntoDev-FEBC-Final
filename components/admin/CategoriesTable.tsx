import { useState, useEffect } from "react"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"

import { fetchCategories } from "@/utils/fetching"

import ActionButtons from "./AcrionButtons"
import AddDataButton from "./AddDataButton"

interface Category {
	id: number,
	title: string
}

export default function CategoriesTable() {
    const categoryColumns = [
        { key: 'id', title: 'ID' },
        { key: 'title', title: 'Title' },
        { key: 'actions', title: 'Actions' }
    ]
	const [categories, setCategories] = useState([])

	useEffect(() => {
		fetchCategories().then((data) => setCategories(data))
	}, [])
	return (
		<Table isStriped isHeaderSticky topContent='Categories' bottomContent={<AddDataButton table='categories' />} classNames={{ wrapper: 'p-8' }} aria-label='Categories'>
			<TableHeader columns={categoryColumns}>
				{(columns) => <TableColumn key={columns.key} align='center' className='text-primary'>{columns.title}</TableColumn>}
			</TableHeader>
			<TableBody items={categories}>
				{(category: Category) => (
					<TableRow key={category.id}>
						<TableCell>{category.id}</TableCell>
						<TableCell>{category.title}</TableCell>
						<TableCell>
							<ActionButtons table='categories' id={category.id} />
						</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	)
}