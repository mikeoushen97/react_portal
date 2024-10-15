import { Routes, Route } from 'react-router-dom';
import Archive from './Archive/Archive';
import Home from './Home/Home';
import Widgets from '../Widgets/Widgets'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'

export interface MainPagesProps {
    pageName: string;
}

function Main() {

    return (
        <main>
            <Breadcrumbs />
            <Routes>
                <Route path='/home' element={<Home pageName='Главная' />} />
                <Route path='/archive' element={<Archive pageName='Архив' />} />
            </Routes>
            <Widgets />
        </main>
    )
}

export default Main