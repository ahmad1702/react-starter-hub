import React, { useState } from 'react'
import { Shortcut } from '../api/shortcuts';

type Props = {}


const APPS: Shortcut[] = [
    {
        title: 'Google Docs',
        link: 'https://docs.google.com',
    },
    {
        title: 'Gmail',
        link: 'https://mail.google.com',
    },
    {
        title: 'Google Maps',
        link: 'https://maps.google.com',
    }
]
const GoogleApps = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <div className='absolute top-7 right-7 dropdown dropdown-end'>
                <label
                    tabIndex={0}
                    onClick={() => setOpen(prev => !prev)}
                    className='drawer-button btn btn-ghost btn-xl p-3 font-bold text-xl h-auto bg-base-100/30 backdrop-blur-md m-1'
                >
                    Apps
                    <svg className="w-10 h-10 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                </label>
                <div tabIndex={0} className="dropdown-content p-2 shadow bg-base-100/60 backdrop-blur-md rounded-box w-52 grid grid-cols-3 gap-1">
                    {APPS.map(({ title, link, imagePath }) => (
                        <a
                            href={link}
                            className='h-32 bg-red-500 flex flex-col items-center justify-center'
                        >
                            <div>{title}</div>
                        </a>
                    ))}
                </div>
            </div>
            <div className="dropdown dropdown-end">
                <label
                    tabIndex={0}
                    className="btn m-1">Click</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                </ul>
            </div>
        </>
    )
}

export default GoogleApps