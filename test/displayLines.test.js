import {DOMModifier} from '../src/app/DOMModifier'

describe("Function should create two divs (tram and bus list)", function() {
    const domModifier = new DOMModifier()
    beforeEach(()=>{
        document.body.innerHTML = '<div id="linesList" class="linesList"></div>'
    })
    test("Should create two divs in div id='LinesList'", () =>{
        expect(domModifier.displayLines(["131", "501", "519", "520", "522", "525", "N25", "N31", "N37", "N81"])).toBe(document.body.innerHTML=`<div id="linesList" class="linesList">
        <div class="list" id="tramList"><p>Lista Tramwajów</p></div><div class="list" id="busList"><p>Lista Autobusów</p><p class="elementOfList">131</p><p class="elementOfList">501</p><p class="elementOfList">519</p><p class="elementOfList">520</p><p class="elementOfList">522</p><p class="elementOfList">525</p><p class="elementOfList">N25</p><p class="elementOfList">N31</p><p class="elementOfList">N37</p><p class="elementOfList">N81</p></div></div>`)
    })
});
