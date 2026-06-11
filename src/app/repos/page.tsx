'use client'

import { useEffect, useState } from 'react';

interface Repo {
    name: string
    description: string
}

export default function ReposPage() {
    const [repos, setRepos] = useState<Repo[]>([])
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://api.github.com/users/Wiliami/repos')
        .then(response => response.json())
        .then(data => setRepos(data))
    }, [])
    
     useEffect(() => {
        if(search.length > 0) {
            repos.filter(repo => repo.name.includes(search))
        }
    }, [search])


    return (
        <div>
            <input
                name="search"
                type="text"
                placeholder='Buscar...'
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />

            <ul>
            {repos.map((repo: any) => {
                return (
                    <li key={repo.name}>{repo.name}</li>
                )
            })}
            </ul>
        </div>
    )
} 






/*
1 - Buscar repositórios do github
2 - Exibir repositórios na página 
3 - Filtrar lista
4 - Derived State 
*/