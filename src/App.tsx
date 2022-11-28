import { useState } from 'react'
import bg from './assets/img/bg.gif'
import GlobalSearch from './components/GlobalSearch'
import GoogleApps from './components/GoogleApps'
import ModalSearchContainer from './components/ModalSearchContainer'
import Settings from './components/Settings'
import ShortCutMenuComponent from './components/ShortCutMenu'
import Title from './components/Title'
import { useShortcuts } from './providers/ShortcutProvider'

const adjustedHalfHeight = 'h-[calc(50vh-1.25rem)]'
const App = () => {
  const [isModalSearchOpen, setIsModalSearchOpen] = useState(false)
  const { shortcuts } = useShortcuts()

  return (
    <div className='min-h-screen p-5' style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <ModalSearchContainer open={isModalSearchOpen} setOpen={setIsModalSearchOpen} />
      <section className={`${adjustedHalfHeight} flex flex-col items-center justify-between`}>
        <div className='w-full flex items-center justify-between'>
          <div className='flex'>
            <Settings />
            <button
              onClick={() => setIsModalSearchOpen(true)}
              className='btn btn-ghost btn-xl p-3 font-bold text-xl h-auto bg-base-100/30 backdrop-blur-md m-1 flex items-center'
            >
              <svg className='h-6 w-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <kbd className="font-semibold text-sm ml-2 mt-0.5">
                <abbr title="Command" className="no-underline">⌘</abbr>
                K
              </kbd>
            </button>
          </div>
          <GoogleApps />
        </div>
        <div className='w-[50vw]'>
          <Title />
          <GlobalSearch />
        </div>
        <div></div>
      </section>
      <section className={`${adjustedHalfHeight} w-full bg-base-200/70 backdrop-blur-md rounded-xl p-5 flex gap-3 overflow-x-auto`}>
        {shortcuts.map(shortCutMenu => (
          <ShortCutMenuComponent shortCutMenu={shortCutMenu} />
        ))}
      </section>
    </div>
  )
}

export default App;