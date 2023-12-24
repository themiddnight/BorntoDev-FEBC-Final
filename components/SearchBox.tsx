import React from 'react'
import { Input, Button } from '@nextui-org/react'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBox() {
    return (
        <div className="flex flex-1 justify-end gap-1 gap-0 sm:ms-4">
            <Input
                classNames={{
                    base: "max-w-full sm:max-w-[18rem] h-10",
                    mainWrapper: "h-full",
                    input: "text-small",
                    inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                }}
                fullWidth
                placeholder="Serach courses..."
                size="sm"
                type="search"
            />
            <Button isIconOnly variant='light'>
                <SearchIcon />
            </Button>
        </div>
    )
}
