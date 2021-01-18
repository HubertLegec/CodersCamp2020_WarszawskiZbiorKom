import {ApiClient} from '../src/app/ApiClient';

describe('ApiClient testing', () => {

    describe('getStops function testing', () => {
        const mockResponse = {"result":[{"values":[{"value":"1001","key":"zespol"},{"value":"01","key":"slupek"},{"value":"Kijowska","key":"nazwa_zespolu"},{"value":"2201","key":"id_ulicy"},{"value":"52.248455","key":"szer_geo"},{"value":"21.044827","key":"dlug_geo"},{"value":"al.Zieleniecka","key":"kierunek"},{"value":"2020-09-14 00:00:00.0","key":"obowiazuje_od"}]},{"values":[{"value":"1001","key":"zespol"},{"value":"02","key":"slupek"},{"value":"Kijowska","key":"nazwa_zespolu"},{"value":"2201","key":"id_ulicy"},{"value":"52.249078","key":"szer_geo"},{"value":"21.044443","key":"dlug_geo"},{"value":"Ząbkowska","key":"kierunek"},{"value":"2020-09-14 00:00:00.0","key":"obowiazuje_od"}]}]};
        beforeEach(() => {
            fetch.resetMocks();
        })

        test('returns Stop objects list', async () => {
            fetch.mockOnce(JSON.stringify(mockResponse));
            const apiClient = new ApiClient('https://api.um.warszawa.pl/api/', 'stops', 'apikey');

            const returnedStops = await apiClient.getStops('stops');
            const stopsNames = returnedStops.map(e => e['name']);
            const stopsNumbers = returnedStops.map(e => e['number']);

            expect(stopsNames).toEqual(['Kijowska', 'Kijowska']);
            expect(stopsNumbers).toEqual(['01', '02']);
        })
    })

    describe('getLines function testing', () => {
        const mockResponse = {"result":[{"values":[{"value":"123","key":"linia"}]},{"values":[{"value":"138","key":"linia"}]},{"values":[{"value":"166","key":"linia"}]},{"values":[{"value":"509","key":"linia"}]},{"values":[{"value":"N02","key":"linia"}]}]} ;
        beforeEach(() => {
            fetch.resetMocks();
        })

        test('returns array of lines', async () => {
            fetch.mockOnce(JSON.stringify(mockResponse));
            const apiClient = new ApiClient('https://api.um.warszawa.pl/api/', 'lines', 'apiKey');

            const returnedLines = await apiClient.getLines("7013", "01")

            expect(returnedLines).toEqual(['123', '138', '166', '509', 'N02']);            
        });

    })

    describe('getVehicles function testing', () => {
        const mockResponse = {"result": [ {"Lines": "112", "VehicleNumber": "5412", "Brigade": "10", "Lat": "52.214798", "Lon": "20.883104", "Time": "2021-01-16 15:19:04"}, {"Lines": "112", "VehicleNumber": "5205", "Brigade": "8", "Lat": "52.196403", "Lon": "20.921614", "Time": "2021-01-15 23:19:32"}]};
        beforeEach(() => {
            fetch.resetMocks();
        })

        test('returns exact vehicle objects', async () => {
            fetch.mockOnce(JSON.stringify(mockResponse));
            const apiClient = new ApiClient('https://api.um.warszawa.pl/api/', 'vehicles', 'apiKey');

            const returnedVehicles = await apiClient.getVehicles(1, 112);
            const vehicleNumbers = returnedVehicles.map(e => e['vehicleNumber']);
            const vehicleBrigades = returnedVehicles.map(e => e['brigade']);

            expect(vehicleNumbers).toEqual(['5412', '5205']);
            expect(vehicleBrigades).toEqual(['10', '8']);
        })

    })
})
