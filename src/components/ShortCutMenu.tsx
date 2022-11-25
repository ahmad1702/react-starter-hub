import { useEffect, useState } from 'react'
import { Shortcut, ShortCutMenu } from '../api/shortcuts'
import redaxios from 'redaxios'

type ShortcutStatus = 'default' | 'Not Running' | 'Running'
const ShortCutLink = ({ shortcut }: { shortcut: Shortcut }) => {
    const { title, description, link, imagePath: filename, } = shortcut;
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

    let formattedImageURL = !!filename ? filename : `https://s2.googleusercontent.com/s2/favicons?domain_url=${link}`
    if (!!filename && !filename.includes('https')) {
        const extension = `/assets/shortcut_images/${filename}`
        let rooturl = window.location.origin
        if (rooturl.includes('file://')) {
            const linksplit = window.location.href.split('/')
            rooturl = linksplit.slice(0, linksplit.length - 1).join('/')
        }
        formattedImageURL = rooturl + extension
    }

    return (
        <li className={'w-full overflow-hidden block'}>
            <a href={link} className='w-full flex items-center'>
                {formattedImageURL && (
                    <img className="h-10 w-10 text-xs object- object-contain" src={formattedImageURL} alt={title} />
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
            <ul className="menu bg-base-100 w-80 rounded-box h-[calc(100%-2.5rem)]">
                {shortCutMenu.links.map((shortcut) => (
                    <ShortCutLink shortcut={shortcut} />
                ))}
            </ul>
        </div>
    )
}

export default ShortCutMenuComponent