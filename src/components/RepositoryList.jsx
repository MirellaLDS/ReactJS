import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss';

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]) 

    useEffect(() => {
        fetch('https://api.github.com/users/MirellaLDS/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])

    console.log(repositories)

    return (
        <section className="repository-list">
            <h1>Lista de repositório</h1>

            <ul>
                {repositories.map(repository => <RepositoryItem key={repository.name} repository={repository} />)}
            </ul>
        </section>
    )
}