import { CheckIcon, ChevronDownIcon, Cog6ToothIcon } from '@heroicons/react/24/solid'
import { useTheme } from '../providers/ThemeProvider'
import themes, { DaisyUITheme } from '../styles/themes'
import { toTitleCase } from '../utils/utils'

const ThemePicker = () => {
    const { theme, changeTheme } = useTheme();
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
                <ChevronDownIcon className='w-6 h-6 mr-2' />
                Theme
            </label>
            <div className='h-96 overflow-y-auto overflow-x-hidden dropdown-content'>
                <ul tabIndex={0} className="menu w-52 flex flex-col overflow-y-auto p-2 shadow bg-base-100/60 rounded-box z-[2000] overflow-x-hidden">
                    {themes.map((themeName: DaisyUITheme) => (
                        <li className={`w-full ${theme === themeName && ('text-primary')}`}>
                            <div onClick={() => changeTheme(themeName)}>
                                {toTitleCase(themeName)}
                                {theme === themeName && (
                                    <CheckIcon className='w-4 h-4' />
                                )}
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    )
}

const Settings = () => {
    return (
        <>
            <label htmlFor='settings-modal'
                className='btn btn-ghost btn-xl p-3 font-bold text-xl h-auto bg-base-100/30 backdrop-blur-md m-1 flex items-center border-default'
            >
                <Cog6ToothIcon className='h-6 w-6' />
            </label>
            <input type="checkbox" id="settings-modal" className="modal-toggle" />
            <label htmlFor="settings-modal" className="modal cursor-pointer backdrop-blur-sm">
                <label className="modal-box relative p-10 max-h-[calc(100vh-2rem)] overflow-visible bg-base-200/60 backdrop-blur-md" htmlFor="">
                    <div className='text-3xl font-semibold'>Settings</div>
                    <div className='flex justify-between items-center border-b-2 border-neutral-content/50 py-3'>
                        To Change Theme
                        <ThemePicker />
                    </div>
                </label>
            </label>
        </>
    )
}

export default Settings