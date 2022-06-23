import { render, screen, fireEvent } from "@testing-library/react"

import List from "./List"

describe('list compo', () => {
    it('new task', () => {
        render(<List />)
        const input = screen.getByPlaceholderText('Adicione as tarefas')
        const botao = screen.getByTestId('add-task')
        
        fireEvent.change(input, {
            target: {
                value: 'estuda react'
            }
        })
        fireEvent.click(botao)
        
        const itemumLista = screen.getByText('estuda react')
        expect(itemumLista).toHaveTextContent('estuda react')

        fireEvent.change(input, {
            target: {
                value: 'estuda js'
            }
        })
        fireEvent.click(botao)
        
        const itemdoisLista = screen.getByText('estuda js')
        expect(itemdoisLista).toHaveTextContent('estuda js')



        
    } )


    it.skip('new not title task', () => {

    })

})