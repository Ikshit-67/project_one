import Styles from './App.module.scss';
import Header from './components/header/Header';
import Carousel from './components/carousel/Carousel';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className={Styles.App}>
      <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <Header/>
        <Carousel/>
      </div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
