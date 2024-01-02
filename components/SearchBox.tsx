import { useRef } from 'react'
import { Input, Button } from '@nextui-org/react'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
    const searchInput = useRef<HTMLInputElement>(null)

    function handleSearch() {
        if (searchInput.current) {
            window.location.href = `/courses/search?search=${searchInput.current.value}`
        }
    }
    
    return (
        <div className="flex gap-1 sm:ms-4">
            <Input
                ref={searchInput}
                classNames={{
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                placeholder="Serach courses..."
                size="sm"
                type="search"
                onKeyDown={(e) => { if (e.key === 'Enter') handleSearch() }}
            />
            <Button 
                isIconOnly 
                variant='light'
                onClick={() => handleSearch()}
            >
                <SearchIcon />
            </Button>
        </div>
    )
}
