import { useEffect, useState } from 'react'
import redaxios from 'redaxios'
import { Shortcut, ShortCutMenu } from '../types/types'
import { urlFromImagePath } from '../utils/utils'

type ShortcutStatus = 'default' | 'Not Running' | 'Running'
const ShortCutLink = ({ shortcut }: { shortcut: Shortcut }) => {
    const { title, description, link, imagePath, } = shortcut;
    const [status, setStatus] = useState<ShortcutStatus>('default')
    useEffect(() => {
        if (!link.includes('localhost')) return
        const linkTest = async () => {
            try {
                const res = await redaxios.get(link)
                console.log(res)
                if (res.data) setStatus('Running')
                // if (res.status === 200) {
                // setStatus('Running')
                // }
            } catch (error) {
                setStatus('Not Running')
            }
        }
        linkTest()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let statusColor = 'text-red-300'
    if (status === 'Running') {
        statusColor = 'text-green-600'
    }

    const formattedImageURL = urlFromImagePath(imagePath, link)

    return (
        <li className={'w-full overflow-hidden block'}>
            <a href={link} className='group w-full flex items-center gap-3 py-2 px-5 hover:bg-white/10 duration-150'>
                {formattedImageURL && (
                    <img className="h-7 w-7 group-hover:h-10 group-hover:w-10 duration-150 text-xs object- object-contain" src={formattedImageURL} alt={title} />
                )}
                <div className={'flex flex-col items-start'}>
                    <div className="font-bold">
                        {title}
                        {status !== 'default' && (
                            <span className={`text-xs ml-1 ${statusColor}`}>({status})</span>
                        )}
                    </div>
                    {description && description.length > 0 && (
                        <div className="w-56 text-xs font-light whitespace-nowrap text-ellipsis overflow-hidden">{description}</div>
                    )}
                </div>
            </a>
        </li>
    )
}
type ShortCutMenuProps = {
    shortCutMenu: ShortCutMenu;
}
const ShortCutMenuComponent = ({ shortCutMenu }: ShortCutMenuProps) => {
    return (
        <div className='h-full'>
            <div className={'h-10 font-extrabold text-xl'}>{shortCutMenu.title}</div>
            <ul className="bg-base-100 w-80 rounded-box h-[calc(100%-2.5rem)] overflow-auto">
                {shortCutMenu.links.map((shortcut) => (
                    <ShortCutLink shortcut={shortcut} />
                ))}
            </ul>
        </div>
    )
}

export default ShortCutMenuComponent