
/* PESQUISA DE CURSOS */

const formulario = document.querySelector("#form-pesquisa");
const campoCurso = document.querySelector("#curso");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const curso = campoCurso.value.trim();

    if (curso === "") {
        resultado.textContent = "Digite o nome de um curso.";
        campoCurso.focus();
        return;
    }

    resultado.textContent = `Sua pesquisa foi realizada com sucesso: ${curso}`;
});


/* FILTRO DE CURSOS POR CATEGORIA */

const filtroCategoria = document.querySelector("#filtro-categoria");
const cursos = document.querySelectorAll(".curso-card");

filtroCategoria.addEventListener("change", function () {

    const categoriaSelecionada = filtroCategoria.value;

    cursos.forEach(function (curso) {

        const categoriaCurso = curso.dataset.categoria;

        if (
            categoriaSelecionada === "todos" ||
            categoriaCurso === categoriaSelecionada
        ) {
            curso.style.display = "block";
        } else {
            curso.style.display = "none";
        }

    });

});
