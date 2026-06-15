'use client'

import { useEffect, useState } from 'react';

interface Repo {
    name: string
    description: string
}

export default function App() {  
    const [repos, setRepos] = useState<Repo[]>([]); 
    const [filteredRepos, setFilteredRepos] = useState<Repo[]>([]);
    const [search, setSearch] = useState('')
    
    useEffect(() => {
        fetch('https://api.github.com/users/Wiliami/repos')
        .then(response => response.json())
        .then(data => setRepos(data))
    })

    useEffect(() => {
        setFilteredRepos(repos.filter(repo => repo.name.includes(search)))
    }, [search])

    return (
        <div>
            <input 
                type="text"
                name='search'
                placeholder='Buscar...'
                onChange={e => setSearch(e.target.value)}
                value={search}
            />

            {search.length > 0 ? (
                <ul>
                    {filteredRepos.map(repo => {
                        return (
                            <li key={repo.name}>
                                {repo.name}
                            </li>
                        )
                    })}
                </ul>  
            ) : (
                <ul>
                    {repos.map(repo => {
                        return (
                            <li key={repo.name}>{repo.name}</li>
                        )
                    })}
                </ul> 
            )}
        </div>
    )
}


/* 
1 - Buscar dados de uma API externa
2 - Exibir os dados na tela
3 - Crir botão de pesquisa
4 - Pegar o valor do input
5 - Filtrar dados
*/