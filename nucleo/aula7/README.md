Comandos para o github:

1) No terminal, entrar na pasta principal onde está o arquivo index.html e digite cada linha de comando:

git init
git add .
git commit -m "primeira publicacao"
git remote add origin https://github.com/7cristovao/turma-dandara.git
git push
git push --set-upstream origin master

CTRL + C (para quem não tiver o usuário configurado)

git config --global
git config --global user.name "seu_nome_de_usuario"
git config --global user.email "sua_senha"
git config --list

git config --global --list

2) Acessar sua pasta principal de estudos para criar sua pasta de projetos e acessá-la
cd ../../../..
mkdir projetos
cd projetos

git clone https://github.com/drebtchinsky/turma-dandara.git

git add .
git fetch (este comando procura atualizacao)
git pull (este comando baixa atualizacao)

3) O GitHub recusará tua senha (será necessário colocar um Token no lugar)

4) No site do GitHub na tua conta para criar o token clique em
> Settings > Developer settings

5) crie e copie o Token

OBS. Para colaboração entre dois usuários, o dono da conta clonada do GitHub precisa autorizar na conta dele teu acesso.
OBS. Vai aparecer uma notificação na tua conta. Aceite o convite. Caso contrário não vai funcionar.

5) No terminal tente mais uma vez agora usando o push

git push

6) Coloque teu login e no campo de senha (será necessário colocar o Token no lugar)



7) para publicar outra coisa que você alterou

git add .
git commit -m "enesima publicacao"
git push


8)  para trocar de branch(galho)

git fetch

git checkout feature/sobre (feature/sobre é apenas o nome da branch)

git branch

9) outros comandos

git checkout master (faz a mudança das branches)
