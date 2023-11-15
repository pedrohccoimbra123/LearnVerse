// Simulação de dados de cursos
const cursos = [
    { 
        nome: "Curso de HTML e CSS", 
        descricao: "Aprenda conceitos de HTML e CSS com Gustavo Guanabara", 
        videoUrl: "https://www.youtube.com/embed/Ejkb_YpuHWs"
    },
    { 
        nome: "100+ Computer Science Concepts Explained", 
        descricao: "Start to understand concepts of Computer Science with Fireship", 
        videoUrl: "https://www.youtube.com/embed/-uleG_Vecis"
    },

    { 
        nome: "MANO REAGE: PERGUNTAS PARA O LUCAS MONTANO", 
        descricao: "Mano deyvin reagindo às perguntas para o Lucas Montano", 
        videoUrl: "https://www.youtube.com/embed/wpT_b6nt5l4"
    }
    ,


    
];


function mostrarCursos() {
    const cursosContainer = document.getElementById('conteudo-dinamico');
    cursosContainer.innerHTML = "";

    cursos.forEach(curso => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${curso.nome}</h3>
            <p>${curso.descricao}</p>
            <p>Módulos: ${curso.modulos}</p>
            <button onclick="mostrarDetalhes('${curso.nome}', '${curso.videoUrl}')">Detalhes</button>
        `;
        cursosContainer.appendChild(div);
    });
}

function mostrarDetalhes(nomeDoCurso, videoUrl) {
    const cursoSelecionado = cursos.find(curso => curso.nome === nomeDoCurso);

    const cursosContainer = document.getElementById('conteudo-dinamico');
    cursosContainer.innerHTML = `
        <h2>${cursoSelecionado.nome}</h2>
        <p>${cursoSelecionado.descricao}</p>
        <p>Módulos: ${cursoSelecionado.modulos}</p>
        <iframe width="560" height="315" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <button onclick="mostrarCursos()">Voltar</button>
    `;
}

function mostrarAjuda(){
    const ajudaContainer = document.getElementById('conteudo-dinamico');
    ajudaContainer.innerHTML = `
        <h2>Contato do Suporte LearnVerse</h2>
        <p>Para entrar em contato com o suporte LearnVerse, envie um e-mail para <a href="mailto:learnverse@support.com">learnverse@support.com</a>.</p>
    `;
}

function mostrarPagina(pagina) {
    if (pagina === 'inicio') {
        const bemVindoContainer = document.getElementById('conteudo-dinamico');
        bemVindoContainer.innerHTML = `
            <h2>Seja bem-vindo à plataforma LearnVerse</h2>
            <p>Aqui na plataforma LearnVerse, você será capaz de se aperfeiçoar para as demandas do mercado de trabalho</p>
        `;
    } else if (pagina === 'cursos') {
        mostrarCursos();
    } else {
        mostrarAjuda();
        
    }
}


function buscarCursos() {
    const termoDeBusca = document.getElementById('barra-de-busca').value.toLowerCase();

    const cursosFiltrados = cursos.filter(curso => curso.nome.toLowerCase().includes(termoDeBusca));

    const cursosContainer = document.getElementById('conteudo-dinamico');
    cursosContainer.innerHTML = "";

    cursosFiltrados.forEach(curso => {
        const div = document.createElement('div');
        div.innerHTML = `
            <h3>${curso.nome}</h3>
            <p>${curso.descricao}</p>
            <p>Módulos: ${curso.modulos}</p>
            <button onclick="mostrarDetalhes('${curso.nome}', '${curso.videoUrl}')">Detalhes</button>
        `;
        cursosContainer.appendChild(div);
    });
}


mostrarPagina('inicio');
