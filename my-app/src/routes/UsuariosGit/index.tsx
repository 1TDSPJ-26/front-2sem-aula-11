import { useEffect, useState } from "react"
import type { UsuarioGit } from "../../types/types";

export default function UsuariosGit() {
    
    const[usuarios, setUsuarios] = useState<UsuarioGit[]>([]);

    useEffect(() => {
        async function loadingData() {
            try{
                const response = await fetch("https://api.github.com/users");
                if (!response.ok) {
                    throw new Error("Falha na requisição da listas de usuários")
                }
                const data:UsuarioGit[] = await response.json();
                console.log(data);
                setUsuarios(data)
            } catch (error) {
                console.error(error);
            }
        }
        loadingData();
    },[])

    return(
        <main>
            <h2>Lista de Usuários do Github</h2>
            <ul>
                {usuarios.map( (u, i)=>(
                    <li key={i}>{u.id} - {u.login} - <a href={u.html_url} target="blank_"><img src={u.avatar_url} alt={u.login} width={30} /></a></li>
                ))}
            </ul>
        </main>
    )
}