import {getBusDataFromInput} from "../src/app/ApiClient";

describe("Function switch stop name in input into id of this stop", function() {
    beforeEach(() =>{
        const fetchMock = require('fetch-mock-jest');
        global.fetch = jest.fn(() => 
            Promise.resolve({
                json: () => Promise.resolve({"result": [{"values": [{value: '7013', key: 'zespol'}, {value: 'Centrum', key: 'nazwa'}]}]}),
            })
        )
    })
    it("Should return id of bus/tram stop", async () =>{
            const id = await getBusDataFromInput("213a69a2-30fb-4d1e-b819-aa1b5c02f3c6");
            expect(id).toEqual('7013');
    })
});


