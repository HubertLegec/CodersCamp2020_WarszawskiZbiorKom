import {getLines} from "./searchLinesList";

global.fetch = jest.fn(() => 
    Promise.resolve({
        json: () => Promise.resolve({"result":[{"values":[{"value":"123","key":"linia"}]},{"values":[{"value":"125","key":"linia"}]},{"values":[{"value":"138","key":"linia"}]},{"values":[{"value":"146","key":"linia"}]},{"values":[{"value":"147","key":"linia"}]},{"values":[{"value":"166","key":"linia"}]},{"values":[{"value":"202","key":"linia"}]},{"values":[{"value":"509","key":"linia"}]},{"values":[{"value":"N02","key":"linia"}]},{"values":[{"value":"N03","key":"linia"}]},{"values":[{"value":"N21","key":"linia"}]},{"values":[{"value":"N71","key":"linia"}]}]}),
    })
)

it("bla bla bla", async () =>{
    const list = await getLines("1001", "01","213a69a2-30fb-4d1e-b819-aa1b5c02f3c6");
    setTimeout(expect(list).toEqual("123"),2000)
    
})