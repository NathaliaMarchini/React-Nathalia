import "./style.css";

/* aqui estamos criando uma função para o caso de haver um elemento que iremos utilizar mais de uma vez no index */
export function Header(props){
    
    return(
        <header>
            <div className="container">
                <h1>{props.title}</h1>
                <h2>{props.subTitulo}</h2>
            </div>
        </header>
    )
}
