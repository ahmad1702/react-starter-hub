import React, { createContext, useContext, useState } from 'react';
import useLocalStorageState from 'use-local-storage-state';
import SHORTCUTS from '../api/shortcuts';
import { ShortCutMenu } from '../types/types';

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
    const [shortcuts, setShortcuts] = useLocalStorageState<ShortCutMenu[]>('shortcuts', {
        defaultValue: SHORTCUTS
    })

    // useEffect(() => {
    //     const jsonCall = async () => {
    //         const parsedShortcuts = await getShortCuts()
    //         if (parsedShortcuts.length > 0) {
    //             setShortcuts(parsedShortcuts)
    //         }
    //     }
    //     jsonCall()
    // }, [])

    const providerValue = { shortcuts, setShortcuts }

    return (
        <ShortcutsContext.Provider value={providerValue}>
            {children}
        </ShortcutsContext.Provider>
    )
}

export default ShortcutsProvider