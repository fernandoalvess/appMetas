const { select, input } = require('@inquirer/prompts')

const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})

    if (meta.length == 0) {
        console.log("A meta não pode ser vazia!")
        return
    }
}

const start = async () => {
    while (true) {
        const opcao = await select({
            message: "Menu >",
            choices: [
                {
                    name: "Cadastrar metas",
                    value: "cadastrar"
                },
                {
                    name: "Listar metas",
                    value: "listar"
                },
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })
        
        switch (opcao) {
            case "cadastrar":
                cadastrarMeta()
                break
            case "listar":
                console.log("Listando")
                break
            case "sair":
                console.log("Até mais")
                return
        
        }
    }
}

start()