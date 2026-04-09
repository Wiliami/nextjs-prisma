## 📁 Fluxo de tarefa em duas pastas no Google Drive: 
    1. "EXTRATO 2026" → contém arquivos de extrato bancário (PDF), adicionados de vez em quando nessa pasta.
    2. "EXTRATOS CAIXA EM EXCEL" → contém planilhas organizadas por ano, já estruturadas previamente.

# Objetivo:
Automatizar a atualização da planilha de 2026 com base nos extratos adicionados.

# Estrutura dos dados:
    1. A planilha está divida em duas seções:
     - ENTRADAS ALUNOS POR PIX OU DEPÓSITO		
     - ENTRADAS ALUNOS AUTOMÁTICAS - CIELO		
    2. Na seção ENTRADAS ALUNOS POR PIX OU DEPÓSITO, você irá preencher com os dados do extrato bancário (PDF) da seguinte forma:
        - Colunas: 
            - Lançamentos (datas): Os dados dessa coluna deverão ser adicionados na coluna Data Movimento da planilha
            - Nr. Doc: Os dados dessa coluna deverão ser adicionados na coluna Nº Documento da planilha
            - Histórico/Complemento: Se os dados desta coluna iniciarem com "CRED PIX CHAVE", eles devem ser inseridos na coluna Histórico da planilha 
            - Favorecido: Os dados dessa coluna deverão ser adicionados na coluna Nome Depositador da planilha
            - Valor: Se o valor desta coluna estiver acompanhado da letra “C”, ele deve ser inserido na coluna Nome Depositador da planilha.
    3. Na seção ENTRADAS ALUNOS AUTOMÁTICAS - CIELO, você irá preencher com os dados do extrato bancário (PDF) da seguinte forma:
        - Colunas: 
            - Lançamentos (datas): os dados dessa coluna deverão ser adicionados na coluna Data Movimento da planilha
            - Nr. Doc: Os dados dessa coluna deverão ser adicionados na coluna Nº Documento da planilha
            - Histórico/Complemento: Se os dados desta coluna NÃO iniciarem com “CRED PIX CHAVE”, eles devem ser inseridos na coluna Histórico da planilha
            - Favorecido: Os dados dessa coluna deverão ser adicionados na coluna Nome Depositador da planilha
            - Valor: Se o valor desta coluna estiver acompanhado da letra “C”, ele deve ser inserido na coluna Nome Depositador da planilha.

# Regras de execução:
Sempre que um novo arquivo for adicionado na pasta "EXTRATO 2026":
    1. Identifique o mês e ano do extrato.
    2. Acesse a planilha correspondente ao ano 2026 na pasta "EXTRATOS CAIXA EM EXCEL".
    3. Dentro da planilha, localize a aba correspondente ao mês no formato:
        - MM - MÊS ANO (ex: 03 - MARÇO 2026)
    4. Extraia os dados do extrato conforme o tópico Estrutura do dados:
    5. Insira os dados na aba correta da planilha, respeitando:
        - Estrutura existente
        - Formatação 
        - Ordem dos dados
    6. Caminho das pastas no google drive do extrato bancário (PDF) e planilha: 
        - 📁 Extrato bancário (PDF): FINANCEIRO > EXTRATOS BANCÁRIOS > EXTRATOS EM PDF > CAIXA ECONÔMICA - UNIT > EXTRATO 2026
        - 📁 Planilha (EXTRATOS CAIXA EM EXCEL): FINANCEIRO > EXTRATOS BANCÁRIOS > EXTRATOS CAIXA EM EXCEL

# Restrições importantes:
    ❌ NÃO criar novas planilhas
    ❌ NÃO alterar a estrutura existente da planilha
    ❌ NÃO sobrescrever dados já preenchidos (apenas adicionar novos registros)
    ❌ NÃO converter o extrato bancário (PDF) para planilha, apenas extrair os dados e preencher na planilha existente
    ❌ NÃO excluir ou substituir nenhum arquivo das pastas
    ✅ Apenas atualizar/preencher a aba correta com os dados do extrato

# Observações:
    - Considere que os extratos podem ser adicionados em qualquer momento.
    - O processo deve ser repetido automaticamente para cada novo arquivo.

