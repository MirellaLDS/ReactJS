import { RepositoryItem } from "./RepositoryItem";

const repository = {
    name : 'Nome',
    description : 'Descrição',
    url : 'www.google.com.br'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de repositório</h1>

            <ul>
                <RepositoryItem repository= {repository} />
                <RepositoryItem />
                <RepositoryItem />
            </ul>
        </section>
    )
}