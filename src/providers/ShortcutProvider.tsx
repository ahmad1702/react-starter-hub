import React, { createContext, useContext, useEffect, useState } from 'react';
import getShortCuts, { ShortCutMenu } from '../api/shortcuts';

type ShortcutsProps = {
    shortcuts: ShortCutMenu[];
    setShortcuts: React.Dispatch<React.SetStateAction<ShortCutMenu[]>>;
}

export const ShortcutsContext = createContext<ShortcutsProps>({
    shortcuts: [],
    setShortcuts: () => null
   
})
export const useShortcuts = () => useContext(ShortcutsContext)

export const ShortcutsProvider = ({ children }: { children: React.ReactNode }) => {
    const [shortcuts, setShortcuts] = useState<ShortCutMenu[]>([])

    useEffect(() => {
        const jsonCall = async () => {
            const parsedShortcuts = await getShortCuts()
            if (parsedShortcuts.length > 0) {
                setShortcuts(parsedShortcuts)
            }
        }
        jsonCall()
    }, [])

    const providerValue = { shortcuts, setShortcuts }

    return (
        <ShortcutsContext.Provider value={providerValue}>
            {children}
        </ShortcutsContext.Provider>
    )
}

export default ShortcutsProvider