import { useEffect, useState } from 'react';

const GameList = () => {

    const [games, setGames] = useState([])
    
    useEffect(async () => {
        const url = "http://localhost:5000/games";
        const res = await fetch(url);
        setGames(await res.json());
    }, [])
    
    return(
            <table className="striped">
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Lançamento</th>
                    <th>Preço</th>
                </tr>
                </thead>

                <tbody>
                {games.map(game => {
                    let type = game.type === 0 ? 'Série' : 'Filme';
                    let formatDate = (game.last_view).split('T', 1)

                    return(
                        <tr key={game.id}>
                            <td>{game.name}</td>
                            <td>{game.categorie}</td>
                            <td>{game.price}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
    )
}

export default GameList;
