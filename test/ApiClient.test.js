import {ApiClient} from '../src/app/ApiClient';

describe('ApiClient testing', () => {

    describe('getLines function testing', () => {
        const mockResponse = {"result":[{"values":[{"value":"123","key":"linia"}]},{"values":[{"value":"138","key":"linia"}]},{"values":[{"value":"166","key":"linia"}]},{"values":[{"value":"509","key":"linia"}]},{"values":[{"value":"N02","key":"linia"}]}]} ;
        beforeEach(() => {
            fetch.resetMocks();
        })

        test.only('returns array of lines', async () => {
            fetch.mockOnce(mockResponse)
            const apiClient = new ApiClient('https://api.um.warszawa.pl/api/', 'aaa');
            expect(await apiClient.getLines('7013', '01')).toEqual(['123', '125', '138', '136', '147', '166', '202', '509', 'N02', 'N03', 'N21', 'N71']);            
        });

    })
})
