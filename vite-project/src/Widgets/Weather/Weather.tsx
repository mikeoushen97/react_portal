import WheatherStyles from './Weather.module.css'

function Weather() {
    return (
        <div className={WheatherStyles["wheather"]}>
            <div className={WheatherStyles["topLine"]}>
                <span></span>
                <div></div>
            </div>
            <div className={WheatherStyles["content"]}>
                <div className={WheatherStyles["temperature"]}>
                    <div className={WheatherStyles["temperatureIcon"]}>
                        <img src="/icons/weather/cloudy.svg" alt="" />
                    </div>
                    <span className={WheatherStyles["temperatureWalue"]}></span>
                </div>
                <span className={WheatherStyles["weatherTextValue"]}>
                    Небольшой дождь
                </span>
                <div className={WheatherStyles["wind"]}>
                    Ветер северо-западный 2 м/с,<br />с порывами до 10 м/c
                </div>
                <button className={WheatherStyles["forecastButton"]}>
                    Прогноз погоды
                </button>
            </div>
            <div className={WheatherStyles["bottomLine"]}>
                <div className={WheatherStyles["infoAlerts"]}>
                    <span className={WheatherStyles["alertName"]}></span>
                </div>
            </div>
        </div>
    )
}

export default Weather