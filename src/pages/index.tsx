import MenuAside from '../components/Content/MenuAside/MenuAside'
import Profile from '../components/Content/Profile/Profile'
import  Header  from '../components/Header/Header'

export default function Home() {
  return (
    <div className='flex'>
      <Header />
      <MenuAside />
      <Profile />
    </div>
  )
}