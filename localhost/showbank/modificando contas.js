db.runCommand({collMod:"contas", 
    validator:{
              $jsonSchema: {
                bsonType: "object",
                required: ["_id", "Numero_Conta", "Tipo", "CPF", "Valor", "Agência"],
                properties: {
                     _id:{
                     bsonType: "objectId",
                     description: "informe corretamente o endereco do cliente"
                    },
                     Numero_Conta: {
                      bsonType: "string",
                      description: "Informe corretamente o numero da conta"
                   },
                   Tipo: {
                      enum: [ "Conta corrente", "Conta poupança", "Conta salário" ],
                      description: "informe corretamente o tipo da conta"
                   },
                   CPF: {
                      bsonType: "string" ,
                      maxLength: 14,
                      minLength: 14,
                      description: "informe corretamente o cpf do cliente na conta"
                   },
                   Valor: {
                       bsonType: "double",
                       description: "informe corretamente o valor da conta",
                   }
                   Agência: {
                       bsonType: "string",
                       description: "informe corretamente a agencia",
                   }
                }
              }
          }
})