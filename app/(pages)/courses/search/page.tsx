// search page
'use client'
import { useSearchParams } from "next/navigation"

export default function SearchPage() {
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
    return <>
        <p className="text-center py-48">Search: {search}</p>
    </>
}