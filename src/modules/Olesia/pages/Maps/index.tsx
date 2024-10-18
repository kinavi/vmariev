import { useState } from 'react';
import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';
import { isInRadius } from '../../geo';
import { Toolbar } from './chunks/Toolbar';

import { GiftCardModal } from './chunks/GiftCardModal';
import { Link } from 'react-router-dom';
import { Icon } from '../../../../ui/components/Icon';
import { NAVIGATION } from '../../constants';
import { GiftType } from './types';
import { MapsContainer } from './styled';
import { GIFT } from './constants';

export const Maps = () => {
  const [position, setPosition] = useState<[number, number]>([55.75, 37.57]);
  const [selectedGift, setSelectedGift] = useState<GiftType | undefined>(
    undefined
  );

  if ('geolocation' in navigator) {
    console.log('Geolocation is available');
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const targetLat = 56.715907;
          const targetLon = 60.064951;
          const userLat = position.coords.latitude;
          const userLon = position.coords.longitude;
          setPosition([position.coords.latitude, position.coords.longitude]);
          const inArea = isInRadius(userLat, userLon, targetLat, targetLon, 1);
          console.log(`Latitude: ${userLat}, Longitude: ${userLon}`);
          if (inArea) {
            console.log('Пользователь находится в пределах области (5 метров)');
          } else {
            console.log('Пользователь за пределами области');
          }
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              console.log('User denied the request for Geolocation.');
              break;
            case error.POSITION_UNAVAILABLE:
              console.log('Location information is unavailable.');
              break;
            case error.TIMEOUT:
              console.log('The request to get user location timed out.');
              break;
            default:
              console.log('An unknown error occurred.');
              break;
          }
        },
        {
          enableHighAccuracy: true, // Для более точного местоположения (может замедлить запрос)
          timeout: 5000, // Максимальное время ожидания (в миллисекундах)
          maximumAge: 0, // Максимальный возраст кэшированных данных
        }
      );
    }
  } else {
    console.log('Geolocation is not supported by this browser.');
  }

  return (
    <GiftCardModal
      onClose={() => setSelectedGift(undefined)}
      card={selectedGift}
    >
      <MapsContainer>
        <div className="maps__title">
          <Link to={NAVIGATION.main}>
            <Icon type="ChevronLeft" />
          </Link>
          <div style={{ textAlign: 'center', flexGrow: '1' }}>
            Карта сюрпризов
          </div>
        </div>
        <Toolbar
          onSelect={setSelectedGift}
          position={position}
          gifts={GIFT.sort(
            (a, b) =>
              new Date(a.availabilityDate).getTime() -
              new Date(b.availabilityDate).getTime()
          )}
        />
        <YMaps query={{ apikey: process.env.REACT_MAPS_KEY }}>
          <Map
            defaultState={{ center: position, zoom: 10 }}
            width={'100vw'}
            height={'100vh'}
          >
            {GIFT.map((item) => (
              <Placemark
                key={item.title}
                geometry={item.position}
                options={
                  {
                    // iconLayout: layout,
                    // 'default#image'
                    // iconImageHref: gift,
                    // iconLayout: template,
                  }
                }
              />
            ))}
            <ZoomControl
              options={{ position: { left: '16px', top: '16px' } }}
            />
          </Map>
        </YMaps>
      </MapsContainer>
    </GiftCardModal>
  );
};
