import './App.css';
import SignUp from './pages/SignUp';
import girlIllustration from './assets/girl.png';
import HomePage from './pages/HomePage';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userAction } from './store/userSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      //dispatch
      dispatch(userAction.login(user));
    }
  }, [dispatch]);
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  return (

    <Switch>
      <Route path='/' exact >
        <Redirect to="/signup" />
      </Route>
      <Route path='/signup' exact>
        {!isLoggedIn ? <div className='container mt-3'>
          <div className='row'>
            <div className='col-md-5'>
              <SignUp />
            </div>
            <div className='col-md-7'>
              <img className='img-fluid w-100 girlImage' src={girlIllustration} alt='' />
            </div>
          </div>
        </div> : <Redirect to="/homepage" />}
      </Route>
      <Route path="/homepage">
        {isLoggedIn ? <HomePage /> : <Redirect to="/signup" />}
      </Route>
    </Switch>
  );
}

export default App;
