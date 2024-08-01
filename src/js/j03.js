class SistemaEscolar {
    mostrarMenu() {
        const menu = `
        ====================
           SISTEMA ESCOLAR
        ====================
        1. Cadastrar novo estudante
        2. Listar todos os estudantes
        3. Atualizar dados de um estudante
        4. Excluir um estudante
        5. Sair
        ====================
        `;
        console.log(menu);
    }

    opcaoInvalida() {
        console.log("Opção inválida, por favor selecione uma opção válida.");
    }
    cadastrar() {
        console.log("Por favor, insira os dados do estudante:");
        const nome = prompt("Nome do estudante:");
        const idade = prompt("Idade do estudante:");
        const curso = prompt("Curso do estudante:");

        const novoEstudante = new Estudante(nome, idade, curso);
        console.log("Estudante cadastrado com sucesso:", novoEstudante);
    }

    cadastrar() {
        console.log("Função de cadastrar selecionada")
    }
    listar() {
        console.log("Função de listar selecionada")
    }
    atualizar() {
        console.log("Função de atualizar selecionada")
    }
    excluir() {
        console.log("Função de excluir selecionada")
    }
    main() {
        this.mostrarMenu();
        const opcao = 1; // Exemplo: usuário escolhe a opção 1

        switch (opcao) {
            case 1:
                this.cadastrar();
                break;
            case 2:
                this.listar();
                break;
            case 3:
                this.atualizar();
                break;
            case 4:
                this.excluir();
                break;
            case 5:
                console.log("Saindo do sistema...");
                break;
            default:
                this.opcaoInvalida();
            // Por exemplo, capturar a entrada do usuário e chamar o método correspondente.
        }

    }
}
    // Instanciando a classe e chamando o método main.
    const sistema = new SistemaEscolar();
sistema.main();
