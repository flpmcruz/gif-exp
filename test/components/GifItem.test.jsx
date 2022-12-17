import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Prueba de GifItem", () => {

  const title = "Hola soy un titulo";
  const url = "https://media4.giphy.com/media/l3vRlt8kty8KKeHni/giphy.gif?cid=790b7611e464637aa4f68dcd0ae2195408b5514d9a482640&rid=giphy.gif&ct=g";

  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    
    expect( container ).toMatchSnapshot();
  });

  test("Debe mostrar la imagen de la URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    //screen.debug()

    //expect( screen.getByRole('img').src).toBe(url)
    //expect( screen.getByRole('img').alt).toBe(title)
    const { src, alt } = screen.getByRole('img')
    expect( src ).toBe( url )
    expect( alt ).toBe( alt )
  });

  test('Debe mostrar el titulo en el componente', () => { 
    render(<GifItem title={title} url={url} />);
    expect( screen.getByText( title ) ).toBeTruthy()
   })

});
