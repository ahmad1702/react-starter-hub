import { useEffect, useRef } from 'react';
import ModalSearch from './ModalSearch';

type ModalSearchContainerProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const ModalSearchContainer = ({ open, setOpen }: ModalSearchContainerProps) => {
    const invisibleCheckBoxRef = useRef<HTMLInputElement>(null)

    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && closeMessage()

    const closeMessage = () => {
        setOpen(false)
        document.removeEventListener('keydown', handleEsc)
    }
    const showMessage = () => {
        setOpen(prev => !prev)
        document.addEventListener('keydown', handleEsc)
    }
    const keydownHandler = (e: KeyboardEvent) => {
        if ((e.key === 'k' && e.metaKey) || (e.key === 'k' && e.ctrlKey)) {
            e.preventDefault()
            showMessage()
        }
    };
    useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => {
            document.removeEventListener('keydown', keydownHandler);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <label htmlFor="my-modal-4" className="hidden" ></label>
            <input
                ref={invisibleCheckBoxRef}
                checked={open}
                onChange={(e) => setOpen(e.target.checked)}
                type="checkbox"
                id="my-modal-4"
                className="modal-toggle"
            />
            <label htmlFor="my-modal-4" className="modal cursor-pointer backdrop-blur-sm">
                <label className="modal-box relative p-2 max-h-[calc(100vh-2rem)] overflow-hidden bg-base-200/60 backdrop-blur-md" htmlFor="">
                    {open && (
                        <ModalSearch />
                    )}
                </label>
            </label>
        </>
    )
}

export default ModalSearchContainer