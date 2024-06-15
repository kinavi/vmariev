import { paths } from '../../../../api-types';


export type StartTrack200ResponseType = paths['/api/manager/time/tracks/start']['post']['responses']['200']['content']['application/json']
export type StartTrack240ResponseType = paths['/api/manager/time/tracks/start']['post']['responses']['240']['content']['application/json']

export type StartTrackBodyType = paths['/api/manager/time/tracks/start']['post']['requestBody']['content']['application/json']

export type StopTrack200ResponseType = paths['/api/manager/time/tracks/stop']['put']['responses']['200']['content']['application/json']
export type StopTrack240ResponseType = paths['/api/manager/time/tracks/stop']['put']['responses']['240']['content']['application/json']

export type StoptTrackBodyType = paths['/api/manager/time/tracks/stop']['put']['requestBody']['content']['application/json']

export type TrackDataType =StartTrack200ResponseType['data']