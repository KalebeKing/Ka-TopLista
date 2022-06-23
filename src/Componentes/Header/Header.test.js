
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe('Header components', () =>{
    it('should render the correct header', async () =>{
        render(<Header />)
        
        const logoImage = await screen.findByAltText('Logotipo minha lista')
        expect(logoImage).toBeInTheDocument()
    })
})