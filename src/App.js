import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAction } from './store/userSlice';
import Routes from './Routes/Routes';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(userAction.login(user));
    }
  }, [dispatch]);
  return (
    <>
      <Routes />
    </>
  )
}

export default App;
