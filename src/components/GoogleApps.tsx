import APPS from '../api/apps';
import { urlFromImagePath } from '../utils/utils';

const GoogleApps = () => {
    return (
        <div className='flex items-start'>
            <a
                href="https://mail.google.com"
                className='btn btn-ghost btn-xl p-3 font-bold text-xl h-auto bg-base-100/30 backdrop-blur-md m-1'
            >
                <img className='h-6 mr-2' src={urlFromImagePath('gmail.png', '')} alt="" />
                <div className='h-10 w-0'></div>
                GMAIL
            </a>
            <div className='dropdown dropdown-end'>
                <label
                    tabIndex={0}
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
                            className='h-32 p-2 group flex flex-col items-center justify-center rounded-xl bg-base-100/60 hover:scale-95 hover:bg-white/30 duration-150'
                        >
                            <img className="h-10 w-10 group-hover:h-16 group-hover:w-16 text-xs object- object-contain duration-300" src={urlFromImagePath(imagePath, link)} alt={title} />
                            <div className='text-center leading-5 mt-1'>{title}</div>
                        </a>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default GoogleApps