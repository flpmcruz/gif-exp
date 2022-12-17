import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en Hook useFetchGifs", () => {
  test("Debe regresar el estado inicial", () => {
    //Para renderizar un Hook
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    const { images, isLoading } = result.current;

    expect( images.length ).toBe(0)
    expect( isLoading ).toBeTruthy()

  });

  test("Debe retronar un arreglo de img y isLoading en False", async() => {
    //Para renderizar un Hook
    const { result } = renderHook(() => useFetchGifs("One Punch"));
    
    //Para esperar un tiempo waitfor retorna una promesa
    await waitFor(
        ()=> expect( result.current.images.length).toBeGreaterThan(0),
        {
            timeout: 6000 //po si quiero lanzar un error en ese tiempo si no ha pasado
        }
    )
    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0)
    expect( isLoading ).toBeFalsy()

  });

});
