// Aqui definimos o molde do nosso objeto de produto.
// Cada produto OBRIGATORIAMENTE deve ter esses campos e esses tipos:
export interface TipoProduto {
  id: number;          // O número de identificação único
  nome: string;        // O nome do produto em texto
  preco: number;       // O valor em número (sem R$, usamos só números decimais)
  descricao: string;   // Uma explicação curta do item
  avatar: string;      // O link (URL) da imagem que está na internet
}

export interface UsuarioGit{
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string,
  user_view_type: string;
  site_admin: boolean;
}