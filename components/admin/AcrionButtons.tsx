import { DriveFileRenameOutline as Edit, DeleteOutlineOutlined as Delete } from '@mui/icons-material';
import { Button } from "@nextui-org/react"


export default function ActionButtons({ table, id }: { table: string, id: number }) {
	function handleEdit() {
		console.log(`Edit: ${id} in ${table}`)
	}

	function handleDelete() {
		const confirm = window.confirm(`Are you sure you want to delete ${id} in ${table}?`)
		if (confirm) {
			console.log(`Delete: ${id} in ${table}`)
		}
	}

	return (
		<div>
			<Button variant='light' size='sm' className='mx-1' isIconOnly color='secondary' onClick={() => handleEdit()}>
				<Edit />
			</Button>
			<Button variant='light' size='sm' className='mx-1' isIconOnly color='danger' onClick={() => handleDelete()}>
				<Delete />
			</Button>
		</div>
	)
}