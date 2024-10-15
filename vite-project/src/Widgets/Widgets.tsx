import WidgetsStyles from '../Widgets/Widgets.module.css'
import Weather from './Weather/Weather'

function Widgets() {
    return (
        <div className={WidgetsStyles['sideWidgets']}>
            < Weather />
        </div>
    )
}

export default Widgets