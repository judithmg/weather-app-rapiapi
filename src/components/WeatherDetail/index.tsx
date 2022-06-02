import { useEffect, useState } from 'react';
import { WiHumidity, WiMoonset, WiRain, WiStrongWind, WiSunrise } from 'react-icons/wi';
import ReactTooltip from 'react-tooltip';
import ChartComponent from 'src/components/Chart';
import { headers } from 'src/constants/api';
import * as Colors from 'src/constants/colors';
import useFetch from 'src/hooks/useFetch';
import { ForecastDay, Hour, Weather } from 'src/types/weather';
import useStore from '~/src/store/store';
import getForecastUrl from '~/src/utils/getForecastUrl';

import { Card, DailyCard, HourCard, SunriseSunsetCard } from './components/Card';
import Component from './components/Component';
import { HourContainer } from './components/Container';
import Detail from './components/Detail';
import Header from './components/Header';
import Row from './components/Row';
import { H1, H2, H3, IconAndText } from './components/Text';

const WeatherDetail: React.FC = () => {
  const [day, setDay] = useState<ForecastDay>();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: long } }) => {
        setLatitude(lat);
        setLongitude(long);
      },
    );
  }, []);

  const cities = useStore((state) => state.cities);
  const url = getForecastUrl(cities, latitude, longitude);
  const { data, loading } = useFetch<Weather>(url, headers);
  console.log(data);
  const [content, setContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    if (data?.current) {
      setDay(data?.forecast.forecastday[0]);
    }
  }, [data, loading]);

  const getHour = (index: number): string => `${index > 9 ? '' : 0}${index}:00`;

  const onClickForecast = (index: number) =>
    data && setDay(data?.forecast.forecastday[index]);

  const renderTooltipData = (hour: Hour): JSX.Element => {
    return (
      <>
        <p>Precipitation: {hour.chance_of_rain}%</p>
        <p>Wind: {hour.wind_kph} km/h</p>
        <p>Humidity: {hour.humidity}%</p>
        <p>Feels like {hour.feelslike_c} °C</p>
      </>
    );
  };

  const renderHourCard = (hour: Hour, index: number): JSX.Element => (
    <HourCard
      onMouseEnter={() => setContent(renderTooltipData(hour))}
      onMouseLeave={() => setContent(null)}>
      <p>{getHour(index)}</p>
      <img src={hour.condition.icon} alt={hour.condition.text} />
      <p>{hour.temp_c}°C</p>
    </HourCard>
  );

  const renderSunriseSunsetCard = (
    hour: string,
    isSunrise = true,
  ): JSX.Element => (
    <SunriseSunsetCard>
      {isSunrise ? (
        <WiSunrise size={50} color={Colors.sunrise} />
      ) : (
        <WiMoonset size={50} color={Colors.moonset} />
      )}
      <div>
        <p>{isSunrise ? 'Sunrise' : 'Sunset'}</p>
        <p>{hour}</p>
      </div>
    </SunriseSunsetCard>
  );

  const renderForecast = (forecast: ForecastDay, index: number) => (
    <DailyCard onClick={() => onClickForecast(index)} key={forecast.date}>
      <p>{forecast.date}</p>
      <p>
        {forecast.day.mintemp_c}°C | {forecast.day.maxtemp_c}°C
      </p>
      <img src={forecast.day.condition.icon}></img>
    </DailyCard>
  );

  return loading || !day ? (
    <div>Loading...</div>
  ) : (
    <Detail>
      <Component>
        <Header>
          <div>
            <H1>{data?.location.name}</H1>
            <H2>
              {data?.current.temp_c}°C
              <img src={data?.current.condition.icon}></img>
            </H2>
          </div>
          <H3>{data?.current.condition.text}</H3>
        </Header>
      </Component>

      <Component>
        <Card backgroundColor={Colors.green}>
          <h2>Sunrise and Sunset</h2>
          <Row>
            {data && renderSunriseSunsetCard(day?.astro.sunrise)}
            {data && renderSunriseSunsetCard(day?.astro.sunset, false)}
          </Row>
        </Card>
      </Component>

      <Component>
        <Card backgroundColor={Colors.yellow}>
          <IconAndText>
            <WiRain size={30} />
            Precipitation {day?.day.daily_chance_of_rain}%
          </IconAndText>
          <IconAndText>
            <WiHumidity size={30} />
            Humidity {day?.day.avghumidity}%
          </IconAndText>
          <IconAndText>
            <WiStrongWind size={30} />
            Wind {day?.day.maxwind_kph} km/h
          </IconAndText>
        </Card>
      </Component>

      <Component>{data && <ChartComponent hourData={day?.hour} />}</Component>

      <Component>
        <HourContainer data-tip data-for="tooltip">
          {day?.hour.map((hour, index) => renderHourCard(hour, index))}
        </HourContainer>
        {content && <ReactTooltip id="tooltip">{content}</ReactTooltip>}
      </Component>

      <Component>
        <Card backgroundColor={Colors.blue}>
          {data?.forecast.forecastday.map((forecast, index) =>
            renderForecast(forecast, index),
          )}
        </Card>
      </Component>
    </Detail>
  );
};

export default WeatherDetail;
