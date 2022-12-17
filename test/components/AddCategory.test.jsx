import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en AddCategory.jsx", () => {
  test("should Debe cambiar el valor en la caja de texto", () => {

    render(<AddCategory onNewCategory={()=>{}}/>)
    const input = screen.getByRole('textbox')

    fireEvent.input( input, {target: {value: 'Felipe'}} )

    expect(input.value).toBe('Felipe')

    //screen.debug()
  });

  test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
    
    const inputValue = 'Felipe'
    //usar jest para enviar funciones
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={ onNewCategory }/>)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input( input, {target: {value: inputValue}} )
    //screen.debug()
    fireEvent.submit( form )

    expect( input.value ).toBe("")
    //probando funciones con jest
    expect( onNewCategory ).toHaveBeenCalled();
    expect( onNewCategory ).toHaveBeenCalledTimes(1);
    expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
   })

   test('No debe llamar onNewCategory si el input esta vacio', () => {

    const inputValue = ''
    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={ onNewCategory }/>)
    //Select del DOM
    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    //Disparar eventos
    fireEvent.input( input, {target: {value: inputValue}} )
    fireEvent.submit( form )

    //expect( onNewCategory ).toHaveBeenCalledTimes(0);
    expect( onNewCategory ).not.toHaveBeenCalled();

   })
});
