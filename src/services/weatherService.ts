export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
  };
  current: {
    temp_f: number;
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_mph: number;
    wind_kph: number;
  };
}

export interface LocationData {
  latitude: number;
  longitude: number;
}

export class WeatherService {
  private apiKey: string;
  private baseUrl = 'https://api.weatherapi.com/v1';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async getCurrentWeather(location: string): Promise<WeatherData> {
    const response = await fetch(
      `${this.baseUrl}/current.json?key=${this.apiKey}&q=${location}&aqi=no`
    );
    
    if (!response.ok) {
      throw new Error(`Weather API error: ${response.status}`);
    }
    
    return response.json();
  }

  async getCurrentWeatherByCoords(lat: number, lon: number): Promise<WeatherData> {
    return this.getCurrentWeather(`${lat},${lon}`);
  }

  static async getCurrentLocation(): Promise<LocationData> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error('Geolocation is not supported by this browser.'));
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          reject(error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000, // 5 minutes
        }
      );
    });
  }
}