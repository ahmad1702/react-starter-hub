import bg from './assets/img/bg.gif'
import GlobalSearch from './components/GlobalSearch'
import GoogleApps from './components/GoogleApps'
import ModalSearchContainer from './components/ModalSearchContainer'
import ShortCutMenuComponent from './components/ShortCutMenu'
import Title from './components/Title'
import { useShortcuts } from './providers/ShortcutProvider'

const adjustedHalfHeight = 'h-[calc(50vh-1.25rem)]'
const App = () => {
  const { shortcuts } = useShortcuts()

  return (
    <div className='min-h-screen p-5' style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <ModalSearchContainer />
      <section className={`${adjustedHalfHeight} flex flex-col items-center justify-center`}>
        <GoogleApps />
        <div className='w-[50vw]'>
          <Title />
          <GlobalSearch />
        </div>
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