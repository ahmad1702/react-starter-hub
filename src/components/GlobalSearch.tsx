/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from 'react'
import useShortCutSearchFilters from '../hooks/useShortCutSearchFilters'
import { useShortcuts } from '../providers/ShortcutProvider'
import { Shortcut } from '../types/types'
import { urlFromImagePath } from '../utils/utils'

const GlobalSearch = () => {
    const [focusedIndex, setFocusedIndex] = useState<number>(0)
    const [searchInput, setSearchInput] = useState<string>('')
    const searchInputRef = useRef<HTMLInputElement>(null)
    const { shortcuts } = useShortcuts()

    useEffect(() => {
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
        if (results.length > 0 && results[focusedIndex].link) {
            window.open(results[focusedIndex].link, '_self')
        } else {
            window.open(`https://www.google.com/search?q=${searchInput}`, '_self')
        }
    }
    const resultsContainerStyles = 'result-container mt-2 px-5 py-4 w-full rounded-xl shadow-md bg-base-100 hover:p-6 focus:p-6 hover:bg-primary hover:text-white focus:bg-primary focus:text-white outline-none duration-300 cursor-pointer active:scale-95 select-none flex items-center justify-between'
    const firstResultStyles = 'result-container mt-2 w-full rounded-xl shadow-md p-6 bg-primary text-white outline-none duration-300 cursor-pointer active:scale-95 select-none flex items-center justify-between'
    return (
        <div className='relative'>
            <form onSubmit={handleSubmit} className='relative'>
                <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-lg w-full bg-base-100/60 backdrop-blur-md"
                    value={searchInput}
                    onChange={handleSearchInputChange}
                    onBlur={() => setSearchInput('')}
                />
                {searchInput.length > 0 && results.length === 0 && (
                    <img className='h-7 w-7 absolute top-[1.1rem] right-5' src={urlFromImagePath('google.png', '')} alt="" />
                )}
            </form>
            {results.length > 0 && (
                <div className="h-[60vh] overflow-auto p-5 absolute top-20 z-50 bg-base-300/60 backdrop-blur-xl w-full rounded-xl">
                    <h3 className="text-2xl font-bold">Results</h3>
                    {results.map((item, i) => (
                        <a
                            href={item.link}
                            key={item.title}
                            onKeyDown={(e) => e.key === ' ' && (window.location.href = item.link)}
                            className={i === focusedIndex ? firstResultStyles : resultsContainerStyles} type='button'
                            onFocus={(e) => setFocusedIndex(i)}
                            onMouseOver={(e) => setFocusedIndex(i)}
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
                </div>
            )}
        </div>
    )
}

export default GlobalSearch