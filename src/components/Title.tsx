import { useRef, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

const Title = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useLocalStorageState<string>('global-page-title', {
        defaultValue: 'Welcome... Starlord'
    })

    const handleEnterEditMode = () => {
        setEditMode(true)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const delayFocus = setTimeout(() => {
            inputRef.current?.focus()
        }, 100)
    }

    return (
        <div className={`${!editMode && 'tooltip hover:tooltip-open tooltip-right'}`} data-tip="Click To Edit Title">
            <div className={`bg-neutral-content/20 backdrop-blur-xl inline-block p-2 rounded-xl mb-3 cursor-pointer`}>
                {editMode ? (
                    <input
                        ref={inputRef}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="text-4xl font-extrabold p-0 outline-none bg-transparent"
                        onBlur={() => setEditMode(false)}
                    />
                ) : (
                    <div
                        onClick={handleEnterEditMode}
                        className='text-4xl font-extrabold'
                    >
                        {title}
                    </div>
                )}
            </div>
        </div>
    )
}
export default Title