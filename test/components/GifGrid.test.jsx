import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

//Simular la respuesta de un Hook
jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en el componente GifGrid', () => {
    const category = 'One Punch'

    test('Debe de mostrar el loading inicialmente', ()=>{

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category } />)
        //screen.debug()

        expect( screen.getByText('Cargando') ) 
        expect( screen.getByText(category) ) 
    })

    test('Debe mostrar items cuando se cargan las imagenes', ()=>{
        const gifs = [
            {
                id: "ABC",
                title: "on Punch",
                url: "https://felipe.com"
            },
            {
                id: "DEF",
                title: "Mark",
                url: "https://felipe.coms"
            },
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={ category } />)
        expect( screen.getAllByRole('img').length ).toBe(2)

    })

})