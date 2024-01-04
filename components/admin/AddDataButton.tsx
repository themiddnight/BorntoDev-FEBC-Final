import { Button } from "@nextui-org/react"

export default function AddButton({ table }: { table: string }) {
	function handleAdd() {
		console.log(`Add new ${table}`)
	}

	return (
		<Button variant='flat' color='success' className='w-[150px]' onClick={() => handleAdd()}>
			Add Data
		</Button>
	)
}