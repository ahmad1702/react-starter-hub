/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from 'react'
import useShortCutSearchFilters from '../hooks/useShortCutSearchFilters'
import { useShortcuts } from '../providers/ShortcutProvider'
import { Shortcut } from '../types/types'



const ModalSearch = () => {
    const [searchInput, setSearchInput] = useState<string>('')
    const searchInputRef = useRef<HTMLInputElement>(null)
    const { shortcuts } = useShortcuts()

    useEffect(() => {
        console.log('mounted')
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const delayFocusInput = setTimeout(() => {
            searchInputRef.current?.focus()
        }, 100)

        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => searchInputRef.current?.focus()
    }, [])
    const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value)
    }

    let results: Shortcut[] = []
    if (searchInput.length > 0) {
        results = useShortCutSearchFilters(searchInput, shortcuts);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (results.length > 0 && results[0].link) {
            window.open(results[0].link, '_self')
            // window.location.href = results[0].item.link
        } else {
            // console.log(`https://www.google.com/search?q=${searchInput}`)
            // window.location.href = `https://www.google.com/search?q=${searchInput}`
            window.open(`https://www.google.com/search?q=${searchInput}`, '_self')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-lg w-full"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                />
            </form>
            <div className="p-5">
                {results.length > 0 ? (
                    <>
                        <h3 className="text-2xl font-bold">Results</h3>
                        {results.map(item => (
                            <a
                                href={item.link}
                                key={item.title}
                                onKeyDown={(e) => e.key === ' ' && (window.location.href = item.link)}
                                className={'result-container mt-2 px-5 py-4 w-full rounded-xl shadow-md bg-base-100 hover:p-6 focus:p-6 hover:bg-primary hover:text-white focus:bg-primary focus:text-white outline-none duration-300 cursor-pointer active:scale-95 select-none flex items-center justify-between'} type='button'
                            >
                                <div className="flex flex-col items-start">
                                    <div className="font-extrabold text-xl">{item.title}</div>
                                    <div className="text-xs text-left w-80 whitespace-nowrap text-ellipsis overflow-hidden">{item.description}</div>
                                </div>
                                <svg className="w-6 h-6 duration-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                                </svg>
                            </a>
                        ))}
                    </>
                ) : (
                    <div className="bg-base-300/10 rounded-xl">
                        <div
                            className="h-64 text-base-100/60 rounded-xl p-5 flex flex-col items-center justify-center"
                            style={{
                                background: 'linear-gradient(135deg, currentColor 25%, transparent 25%) -100px 0,linear-gradient(225deg, currentColor 25%, transparent 25%) -100px 0,linear-gradient(315deg, currentColor 25%, transparent 25%),linear-gradient(45deg, currentColor 25%, transparent 25%)',
                                backgroundSize: 'calc(2 * 100px) calc(2 * 100px)',
                            }}
                        >
                            <div className={'text-neutral-content text-center font-bold text-2xl'}>
                                {searchInput.length > 0 ? `Hit Enter to search "${searchInput}" on Google` : 'Search for anything pertaining to this site in the input above !'}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default ModalSearch