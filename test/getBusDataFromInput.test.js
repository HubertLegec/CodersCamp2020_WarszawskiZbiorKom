import {ApiClient, getBusDataFromInput} from "../src/app/ApiClient";

describe("Function switch stop name in input into id of this stop", function() {
    beforeEach(() =>{
        const fetchMock = require('fetch-mock-jest');
        const mockResponse = {"result": [{"values": [{value: '7013', key: 'zespol'}, {value: 'Centrum', key: 'nazwa'}]}]}
        fetchMock.mock('https://api.um.warszawa.pl/api/getId', mockResponse)
        // global.fetch = jest.fn(() => 
        //     Promise.resolve({
        //         json: () => Promise.resolve({"result": [{"values": [{value: '7013', key: 'zespol'}, {value: 'Centrum', key: 'nazwa'}]}]}),
        //     })
        // )
    })
    // it("Should return id of bus/tram stop", async () =>{
    //         const id = await getBusDataFromInput("213a69a2-30fb-4d1e-b819-aa1b5c02f3c6");
    //         expect(id).toEqual('7013');
    // })
    test("Should return id of bus/tram stop", async () =>{
        const response = await getBusDataFromInput('https://api.um.warszawa.pl/api/getId')

        expect(response[0].values[0].value).toBe("7013")
    })
});


