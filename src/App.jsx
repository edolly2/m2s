import './App.css';

import Header from './components/Header';
import HomeHero from './components/HomeHero';
import SignInForm from './components/SignInForm';

const App = () => {

  return (
    <div className='App'>
      <Header />
      <HomeHero />
      <SignInForm />
    </div>
  );
};

export default App;
