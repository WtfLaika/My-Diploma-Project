import './App.css';
import Navigation from './components/Navigation';
import ButtonHeader from './components/ButtonHeader';
import ButtonVideo from './components/ButtonVideo';
import TourCard from './components/TourCard';
import SocialSites from './components/SocialSites';
import BigTourCard from './components/BigTourCard';
import Consultation from './components/Consultation';
import Footer from './components/Footer';

function App() {
  const secondWindowPict = {
    card: ['20-22', 'Июля', "Экскурсия по центру Киева",'all-tour'],
    text: ["Посмотрите все наши туры", 'Красивые пейзажные места, памятники архитектуры, удивительная природа, модерновые постройки и многое другое', 'Смотреть все']
  };
  const lastWindowPict = {
    card: ['Отзыв', "Елена Иванова", "Пожалуй,это был самый интересный город, который я когда-либо посещала",'review'],
    text: ['Что пишут участники наших экскурсий','87% участников приходят по личной рекомендации от друзей. А каждый 4-ый путешествует с нами больше 2-х раз!','Читать отзывы']
  };
  return (
    <div className='container'>
      <header>
        <Navigation></Navigation>
        <div className="header-title">
          <div className='header-title_main'>Открой для себя Киев
          </div>
          <div className='header-title_subtitle'>Авторские экскурсии по уголкам
            Киева от Дениса Шмагайла</div>
        </div>
        <div className='main_header'>
          <div className='header_buttons'>
            <ButtonHeader></ButtonHeader>
            <ButtonVideo></ButtonVideo>
          </div>
          <TourCard></TourCard>
          <SocialSites position={"header"}></SocialSites>
          <a name="all-tours"></a>
        </div>

      </header>
      <main >
        <BigTourCard object={secondWindowPict}></BigTourCard>
        <Consultation></Consultation>
        <a name="review"></a><BigTourCard object={lastWindowPict}></BigTourCard>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
