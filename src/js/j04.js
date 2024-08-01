class SistemaEscolar {
    constructor() {
        this.estudantes = [];
    }

    cadastrar() {
        const nome = prompt("Digite o nome do estudante:");
        const idade = prompt("Digite a idade do estudante:");
        // Outras informações podem ser solicitadas aqui

        this.estudantes.push({ nome, idade });
        console.log("Estudante cadastrado com sucesso!");
    }

    listar() {
        console.log("Lista de Estudantes:");
        this.estudantes.forEach((estudante, index) => {
            console.log(`Estudante ${index + 1}: ${estudante.nome} - Idade: ${estudante.idade}`);
        });
    }

    atualizar() {
        this.listar();
        const indice = prompt("Selecione o número do estudante que deseja atualizar:");
        const nome = prompt("Digite o novo nome do estudante:");
        const idade = prompt("Digite a nova idade do estudante:");

        this.estudantes[indice - 1] = { nome, idade };
        console.log("Informações do estudante atualizadas com sucesso!");
    }

    excluir() {
        this.listar();
        const indice = prompt("Selecione o número do estudante que deseja excluir:");

        this.estudantes.splice(indice - 1, 1);
        console.log("Estudante excluído com sucesso!");
    }

    main() {
        let opcao;

        do {
            this.mostrarMenu();
           let input = prompt("Escolha uma opção:");
while (isNaN(input)) {
    input = prompt("Por favor, digite um número para escolher uma opção:");
}
opcao = parseInt(input);


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
            }
        } while (opcao !== 5);
    }

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
}

const sistema = new SistemaEscolar();
sistema.main();

