import logo from './logo.svg';
import './App.css';
import Header from './components/common/header/header.tsx';
import FeedbackForm from './components/feedback/feedback-form.tsx';
import FeedbackCard from './components/feedback-card/feedback-card.tsx';


function App() {
  return (
    <>
    <Header />
    <div className="main">
      < FeedbackForm/>

      <FeedbackCard/>
    </div>
    </>
  );
}

export default App;
