import { Link } from 'react-router'

export default function Menu(){
    return(
        <nav>
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/users/git">Usuários Git</Link></li>
        </ul>
        </nav>
    )
}