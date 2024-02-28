import "./style.css";
export const Lista = () => {

    const lista =[
        {
            nome: "Projeto",
            responsavel: "Nathalia",
            valor: 1200
        },
        {
            nome: "Projeto do mar",
            responsavel: "Fonseca",
            valor: 4000
        },
        {
            nome: "Nathalia",
            responsavel: "Eu",
            valor: 2000
        },
        {
            nome: "Fernanda",
            responsavel: "Pedro",
            valor: 990
        }
    ]

    return (
        <main className="lista">
            <section className="content-list">
                <h1>Lista</h1>
                <img src="https://fastly.picsum.photos/id/93/300/250.jpg?hmac=46cU5zEC6sSqvfbGVMhqXRsWrxO1D7XbNvwkAIVmqns" alt="Imagem" />

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit qui ad! Atque fugiat aut fugitcommodi quis consequunturomnis, obcaecati sint maiores dignissimos dolorem fuga qui ipsam similique tempora.
                </p>
            </section>
            
            <section className="list-names">
                <h1>Lista Nomes</h1>


                <article className="content-listagem">
                    {lista.map((item, index) =>{
                        return(
                            <div key={index} className="listagem">
                                <strong>Nome: </strong > <span>{item.nome}</span>
                                <strong>Responsável </strong > <span>{item.responsavel}</span>
                                <strong>Valor: </strong> <span>{item.valor}</span>
                            </div>
                        )
                    })}
                    

                </article>
            </section>
        </main>
    )
}