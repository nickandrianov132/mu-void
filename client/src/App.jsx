import { BrowserRouter } from 'react-router';
import NavBar from './components/NavBar';
import Body from './components/Body';
import Footer from './components/Footer';
import './styles/App.css';
import { useGetUserDetailsQuery } from './services/userApi';
import { useEffect } from 'react';
import Spinner from './components/Spinner';

function App() {
const {data, error, isLoading, isSuccess, refetch} = useGetUserDetailsQuery()

  useEffect(() => {
    refetch()
  }, [])

  if(isLoading) {
    return (
      <Spinner/>
    )
  }
  return (
    <>
      <BrowserRouter>
          <NavBar/>
      <div className='app_container'>
          <Body />
      </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
