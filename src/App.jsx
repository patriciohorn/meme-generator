import Header from './components/Header';
import Meme from './components/Meme';
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container">
          <Meme />
        </div>
      </section>
    </>
  );
}
