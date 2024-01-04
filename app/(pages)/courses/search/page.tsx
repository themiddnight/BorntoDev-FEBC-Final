// search page

interface Props {
    params: {}
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(props: Props) {
    const searchParams = props.searchParams;
    const search = searchParams['search'];
    return {
        title: `Search: ${search} - Ake's FEBC Finale Project`,
        description: `Search results of ${search}`,
        openGraph: {
            type: 'website',
            locale: 'th_TH',
            url: 'https://ake-febc-final.vercel.app/',
            title: `Search: ${search} - Ake's FEBC Finale Project`,
            description: `Search results of ${search}`,
            images: [
                {
                    url: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200',
                    width: 1200,
                    height: 630,
                    alt: 'Og Image Alt',
                },
            ],
        },
    }
}

export default function SearchPage(props: Props) {
    const searchParams = props.searchParams;
    const search = searchParams['search'];
    return <>
        <p className="text-center py-48">Search: {search}</p>
    </>
}