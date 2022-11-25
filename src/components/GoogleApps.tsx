import React, { useState } from 'react'
import { Shortcut } from '../api/shortcuts';
import { urlFromImagePath } from '../utils/utils';

type Props = {}


const APPS: Shortcut[] = [
    {
        title: 'Google Docs',
        link: 'https://docs.google.com',
        imagePath: 'maps.png'
    },
    {
        title: 'Gmail',
        link: 'https://mail.google.com',
        imagePath: 'gmail.png'
    },
    {
        title: 'Google Maps',
        link: 'https://maps.google.com',
        imagePath: 'maps.png'
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

                <div tabIndex={0} className="dropdown-content p-2 shadow bg-base-100/60 backdrop-blur-md rounded-box w-96 grid grid-cols-3 gap-1">
                    {APPS.map(({ title, link, imagePath }) => (
                        <a
                            href={link}
                            className='h-32 group flex flex-col items-center justify-center rounded-xl bg-base-100/60 hover:scale-95 hover:bg-white/30 duration-150'
                        >
                            <img className="h-10 w-10 group-hover:h-16 group-hover:w-16 group-hover:mb-3 text-xs object- object-contain duration-300" src={urlFromImagePath(imagePath, link)} alt={title} />
                            <div>{title}</div>
                        </a>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default GoogleApps