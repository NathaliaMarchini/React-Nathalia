import { useState } from "react"

export function CadastroNews() {
   // Estado inicial do formulário
   const initilform = {
    nome: "",
    email: "",
    telefone: "",
    endereco: ""
   } 

    //Estado do formulário
    const [formState, setformState] = useState(initilform);

    //função para lidar com a alteração de cvampos de entrada
    const handleInput = (event) =>{
        //obter o elemento da entrada atual
        const target = event.currentTarget;

        // Extrair o valor e o nome do campo de entrada
        const { value, name } = target;

        //atualizar o estado do formulário com os novos valores
        setformState({...formState, [name]: value}); 
    }

    const exemploTarget = (event) =>{
        console.log("Elemento clicado: ", event.target);// esse pega apenas um elemento, que éo que foi clicado
        console.log("Elemento Atual: ", event.currentTarget);// esse pega o conjunto de elementos
    }


    // Função para lidar com a submissão 
    const handleSubmit = (event) =>{
        event.preventDefault();

        const formGeneral = {
            nome: formState.nome,
            email: formState.email,
            telefone: formState.telefone,
            endereco: formState.endereco,
            createdAt: new Date(),
        }

        const requestOptions = {
            method: "POST",
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(formGeneral),
        }

        fetch('http://localhost:7000/news', requestOptions)
        .then((response) => response.json())
        .then((data) => setformState(data))

        //limpar os campos do formulário
        setformState({...initilform})


        console.log(formState);
    }

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        value={formState.nome}
                        onChange={handleInput}
                        placeholder="Digite seu nome"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        value={formState.email}
                        onChange={handleInput}
                        placeholder="Digite seu email"
                    />
                </div>

                <div className="form-control">
                    <label htmlFor="Telefone">Telefone:</label>
                    <input
                        type="text"
                        name="telefone"
                        id="telefone"
                        value={formState.telefone}
                        onChange={handleInput}
                        placeholder="Digite seu telefone"
                    />
                </div>

                
                <div className="form-control">
                    <label htmlFor="Endereço">Endereço:</label>
                    <input
                        type="text"
                        name="endereco"
                        id="endereco"
                        value={formState.endereco}
                        onChange={handleInput}
                        placeholder="Digite seu endereco"
                    />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>

        </section>
    )
}