export function RepositoryItem(props) {
    return (
        <li>
            <strong>{props.repository?.name ?? "Não tem nome"}</strong>
            <p>{props.repository?.description}</p>

            <a href={props.repository?.html_url}>
                Acessar repositório
            </a>
        </li>
    )
}