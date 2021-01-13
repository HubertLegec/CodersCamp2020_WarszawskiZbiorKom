import {displayTransportLines} from '../src/app/ApiClient'

describe("Function should return endpointURL", function() {
    let displayLines = new displayTransportLines()
    test("Should return correct endpoint", () =>{
        expect(displayLines.createEndpoint("7013", "01", "aa")).toBe(`action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=7013&busstopNr=01&apikey=aa`)
        expect(displayLines.createEndpoint("7502", "05", "asdjkqwe-34653-fds")).toBe(`action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=7502&busstopNr=05&apikey=asdjkqwe-34653-fds`)
        expect(displayLines.createEndpoint("1025", "21", "ashd_sdfg-123sf_123sad")).toBe(`action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=1025&busstopNr=21&apikey=ashd_sdfg-123sf_123sad`)
        expect(displayLines.createEndpoint("3487", "53", "gasdf_435tg3_f8ada-123a")).toBe(`action/dbtimetable_get/?id=88cd555f-6f31-43ca-9de4-66c479ad5942&busstopId=3487&busstopNr=53&apikey=gasdf_435tg3_f8ada-123a`)
    })
});
