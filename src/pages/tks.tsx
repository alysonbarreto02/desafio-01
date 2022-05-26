import MenuAside from '../components/Content/MenuAside/MenuAside'
import ProfileAtts from '../components/Content/Profile/ProfileAtts'
import  Header  from '../components/Header/Header'

export default function Home() {
  return (
    <div className='flex'>
      <Header />
      <MenuAside />
      <ProfileAtts />
    </div>
  )
}