db.createCollection("contas",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["Número_Conta", "Tipo", "CPF"],
            properties:{
                Número_Conta:{
                    bsonType: "string",
                    description: "informe corretamente o numero da conta"
                },
                Tipo:{
                    bsonType: "string",
                    enum:["Conta corrente", "Conta poupança", "Conta salário"],
                    description: "informe corretamente o tipo da conta"
                },
                CPF:{
                    bsonType: "string",
                    description: "informe corretamente o cpf do cliente"
                }
            }
        }
    }
    
    
})