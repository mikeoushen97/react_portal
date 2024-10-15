import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import './AppStyles.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

    return (
        <Router>
            <div className='wrapper'>
                <Header />
                <Main />
                <Footer />
            </div>
        </Router>
    )
}

export default App
