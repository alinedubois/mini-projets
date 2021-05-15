export const WeatherImage = ({description}) => {
    let image = '';
    let weatherDescription = description?.toLowerCase();
    if (weatherDescription?.includes('storm')) {
        image = 'bolt';
    } else if (weatherDescription?.includes('shower')) {
        image = 'cloud-shower-heavy';
    } else if (weatherDescription?.includes('rain') || weatherDescription?.includes('drizzle')) {
        image = 'cloud-rain';
    } else if (weatherDescription?.includes('cloudy')) {
        image = 'cloud';
    } else if (weatherDescription?.includes('snow')) {
        image = 'snowflake';
    } else if (weatherDescription?.includes('sunny')) {
        image = 'sun';
    }
    return <i className={`weather fa fa-${image}`}></i>;
}