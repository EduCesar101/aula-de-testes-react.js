import { render } from "@testing-library/react";
import { Formulario } from "./Formulario"
import userEvent from "@testing-library/user-event"

describe('no formulário', () => {
    const mockAoSubmeter = jest.fn();
    
    test('Se os campos estiverem vazios, o botão deve estar desabilitado', () => {
        // ASSERT - aqui organizamos as variáveis do teste
    
        // importa funçõs e renderiza o componente Formulário
        const { getByPlaceholderText, getByRole } = render (<Formulario aoSubmeter={mockAoSubmeter}/>)
    
        // buscar inputs e placeholders
        const inputNome = getByPlaceholderText('Insira o nome do filme aqui')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')
        const botaoAdicionar = getByRole('button')
    
        
    
        expect(inputNome).toBeInTheDocument()
        expect(inputAnoDeLancamento).toBeInTheDocument()
    
        expect(botaoAdicionar).toBeDisabled()
    
        // ACT - simulação das ações de teste
    
        // ASSET - testa as execuções e resultados obtidos
    })

    test('se os inputs estiverem preenchidos, o botão deve estar habilitado', async () => {
        // ASSERT - aqui organizamos as variáveis do teste
    
        // importa funçõs e renderiza o componente Formulário
        const { getByPlaceholderText, getByRole } = render (<Formulario aoSubmeter={mockAoSubmeter}/>)
    
        // buscar inputs e placeholders
        const inputNome = getByPlaceholderText('Insira o nome do filme aqui')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')
        const botaoAdicionar = getByRole('button')
    
        await userEvent.type(inputNome, 'Interestelar')
        await userEvent.type(inputAnoDeLancamento, '2014')
        await userEvent.click(botaoAdicionar)
    
        expect(botaoAdicionar).toBeEnabled()
        // captura do botão adicionar
    
        // expect(inputNome).toBeInTheDocument()
        // expect(inputAnoDeLancamento).toBeInTheDocument()
    
        // expect(botaoAdicionar).toBeDisabled()
    
        // ACT - simulação das ações de teste
    
        // ASSET - testa as execuções e resultados obtidos
    })
})