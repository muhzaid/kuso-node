import Home from '../components/Home'
import Networks from '../components/Networks'
import Contact from '../components/Contact'
import Theme from '../components/Theme'

export default function Main() {
 return (
  <main className='overflow-x-hidden bg-slate-50 dark:bg-slate-800 dark:text-slate-50 lg:px-36'>
   <Home />
   <Networks />
   <Contact />
   <Theme />
  </main>
 )
}
