import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas en gifs', ()=>{

    test('Debe retornar un arreglo de gif', async() => { 
        const category = 'One Punch'
        const gifs = await getGifs(category)
        expect(gifs.length).toBeGreaterThan(0)
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
     })
})