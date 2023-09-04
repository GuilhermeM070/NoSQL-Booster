db.runCommand( { collMod: "clientes",
  validator:{
            $jsonSchema: {
              bsonType: "object",
              "additionalProperties": false,
              required: ["_id", "nome", "cpf",  "status_civil", "data_nascimento", "endereco", "genero", "profissao"],
              properties: {
                 _id:{
                     bsonType: "objectId",
                     description: "informe corretamente o endereco do cliente"
                 },
                 nome: {
                    bsonType: "string",
                    maxLength: 150, 
                    description: "informe corretamente o nome do cliente"
                 },
                 cpf: {
                    bsonType: "string"
                    maxLength: 14,
                    minLength: 14,
                    description: "informe corretamente o cpf do cliente"
                 },
                 status_civil: {
                    enum: [ "Solteiro(a)", "Casado(a)", "Separado(a)", "Divorciado(a)", "Viúvo(a)" ],
                    description: "informe corretamente o status civil do cliente"
                 },
                 data_nascimento: {
                    bsonType: ["string", "null"],
                    description: "informe corretamente a data de nascimento do cliente"
                 },
                 endereco: {
                    bsonType: "string",
                    description: "informe corretamente o endereço do cliente"
                 },
                 genero: {
                    bsonType: "string",
                    description: "informe corretamente o genero do cliente"
                 },
                 profissao: {
                    bsonType: "string",
                    description: "informe corretamente o profissao do cliente"
                }
  }
})