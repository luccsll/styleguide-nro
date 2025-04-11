/**
 * _searchLeader -> Busca a hierarquia de um integrante a partir de um dataset.
 * 
 * @param {string} dataset - Nome do dataset onde serão buscadas as informações.
 * @param {string} searchPara - Matrícula do integrante a ser pesquisado.
 * @param {"all" | "" | "GERENTE" | "DIRETOR"} request - Tipo de líderes desejados. Use "all" para todos ou uma string vazia ("") para padrão ou especifique um cargo como "SUPERVISOR", "COORDENADOR", "GERENTE" ou "DIRETOR" separado por uma virgula.
 * @returns {object} Retorna um objeto contendo a hierarquia do integrante.
 */

export function _searchLeader(dataset, searchParam, request) {
    try {
        var dataset_00 = DatasetFactory.getDataset(dataset, null, new Array(DatasetFactory.createConstraint("MATRICULA", searchParam, searchParam, ConstraintType.MUST)), null);
        var position_00 = dataset_00.values[dataset_00.values.length - 1]
        var nameSolic = position_00['NOME']
        var funcSolic = position_00['FUNCAO']
        var directLeader = position_00['NOME_LIDER']

        const sup = ['SUPERVISOR', 'SUPER', 'SUP', 'SUPV', 'SUPRV', 'SUPRVSR', 'SUPRVISOR', 'SUPRVSR', 'SUPRVSOR'];
        const coord = ['COORDENADOR', 'COORD', 'CDR', 'CDRDR', 'CDRDR'];
        const ger = ['GERENTE', 'GER', 'GRNT', 'GEREN', 'GRNT'];
        const dir = ['DIRETOR', 'DIR', 'DR', 'DRTR', 'DIRE', 'DRTR', 'DIRETOR', 'DIRET'];
        const pres = ['PRESIDENTE', 'PRES', 'PRESID', 'PRESIDNTE', 'PRESIDNT', 'PRESIDENCIA', 'PRESIDÊNCIA']

        let point = '';

        let hasSupervisor = false;
        let hasCoordinator = false;
        let hasGerente = false;
        let hasDiretor = false;
        let hasPresident = true;

        var dataset_01, position_01, funcEmployee_01, nameEmployee_01, secaoEmployee_01, nameLeader_01, chapaEmployee_01
        var dataset_02, position_02, funcEmployee_02, nameEmployee_02, secaoEmployee_02, nameLeader_02, chapaEmployee_02
        var dataset_03, position_03, funcEmployee_03, nameEmployee_03, secaoEmployee_03, nameLeader_03, chapaEmployee_03
        var dataset_04, position_04, funcEmployee_04, nameEmployee_04, secaoEmployee_04, nameLeader_04, chapaEmployee_04
        var dataset_05, position_05, funcEmployee_05, nameEmployee_05, secaoEmployee_05, nameLeader_05, chapaEmployee_05

        var response = new Map();

        //SUPERVISOR
        dataset_01 = DatasetFactory.getDataset(dataset, null, new Array(DatasetFactory.createConstraint("PARAM", directLeader, directLeader, ConstraintType.MUST)), null);
        position_01 = dataset_01.values[dataset_01.values.length - 1]
        funcEmployee_01 = position_01['FUNCAO']
        nameEmployee_01 = position_01['NOME']
        secaoEmployee_01 = position_01['SECAO']
        nameLeader_01 = position_01['NOME_LIDER']
        chapaEmployee_01 = position_01['CHAPA']

        var isSupervisor_01 = sup.some(position => funcEmployee_01.toUpperCase().includes(position));
        var isCoordinator_01 = coord.some(position => funcEmployee_01.toUpperCase().includes(position));
        var isGerente_01 = ger.some(position => funcEmployee_01.toUpperCase().includes(position));
        var isDirector_01 = dir.some(position => funcEmployee_01.toUpperCase().includes(position)) && !pres.some(position => funcEmployee_01.toUpperCase().includes(position));

        if (isSupervisor_01) { hasSupervisor = true }
        if (isCoordinator_01) { hasCoordinator = true }
        if (isGerente_01) { hasGerente = true }
        if (isDirector_01) { hasDiretor = true }

        //COORDENADOR
        dataset_02 = DatasetFactory.getDataset(dataset, null, new Array(DatasetFactory.createConstraint("PARAM", nameLeader_01, nameLeader_01, ConstraintType.MUST)), null);
        position_02 = dataset_02.values[dataset_02.values.length - 1]
        funcEmployee_02 = position_02['FUNCAO']
        nameEmployee_02 = position_02['NOME']
        secaoEmployee_02 = position_02['SECAO']
        nameLeader_02 = position_02['NOME_LIDER']
        chapaEmployee_02 = position_02['CHAPA']

        var isSupervisor_02 = sup.some(position => funcEmployee_02.toUpperCase().includes(position));
        var isCoordinator_02 = coord.some(position => funcEmployee_02.toUpperCase().includes(position));
        var isGerente_02 = ger.some(position => funcEmployee_02.toUpperCase().includes(position));
        var isDirector_02 = dir.some(position => funcEmployee_02.toUpperCase().includes(position)) && !pres.some(position => funcEmployee_02.toUpperCase().includes(position));

        if (isSupervisor_02) { hasSupervisor = true }
        if (isCoordinator_02) { hasCoordinator = true }
        if (isGerente_02) { hasGerente = true }
        if (isDirector_02) { hasDiretor = true }

        //GERENTE
        dataset_03 = DatasetFactory.getDataset(dataset, null, new Array(DatasetFactory.createConstraint("PARAM", nameLeader_02, nameLeader_02, ConstraintType.MUST)), null);
        position_03 = dataset_03.values[dataset_03.values.length - 1]
        funcEmployee_03 = position_03['FUNCAO']
        nameEmployee_03 = position_03['NOME']
        secaoEmployee_03 = position_03['SECAO']
        nameLeader_03 = position_03['NOME_LIDER']
        chapaEmployee_03 = position_03['CHAPA']

        var isSupervisor_03 = sup.some(position => funcEmployee_03.toUpperCase().includes(position));
        var isCoordinator_03 = coord.some(position => funcEmployee_03.toUpperCase().includes(position));
        var isGerente_03 = ger.some(position => funcEmployee_03.toUpperCase().includes(position));
        var isDirector_03 = dir.some(position => funcEmployee_03.toUpperCase().includes(position)) && !pres.some(position => funcEmployee_03.toUpperCase().includes(position));

        if (isSupervisor_03) { hasSupervisor = true }
        if (isCoordinator_03) { hasCoordinator = true }
        if (isGerente_03) { hasGerente = true }
        if (isDirector_03) { hasDiretor = true }

        //DIRETOR
        dataset_04 = DatasetFactory.getDataset(dataset, null, new Array(DatasetFactory.createConstraint("PARAM", nameLeader_03, nameLeader_03, ConstraintType.MUST)), null);
        position_04 = dataset_04.values[dataset_04.values.length - 1]
        funcEmployee_04 = position_04['FUNCAO']
        nameEmployee_04 = position_04['NOME']
        secaoEmployee_04 = position_04['SECAO']
        nameLeader_04 = position_04['NOME_LIDER']
        chapaEmployee_04 = position_04['CHAPA']

        var isSupervisor_04 = sup.some(position => funcEmployee_04.toUpperCase().includes(position));
        var isCoordinator_04 = coord.some(position => funcEmployee_04.toUpperCase().includes(position));
        var isGerente_04 = ger.some(position => funcEmployee_04.toUpperCase().includes(position));
        var isDirector_04 = dir.some(position => funcEmployee_04.toUpperCase().includes(position)) && !pres.some(position => funcEmployee_04.toUpperCase().includes(position));
        var isPresident_04 = pres.some(position => secaoEmployee_04.toUpperCase().includes(position));

        if (isSupervisor_04) { hasSupervisor = true }
        if (isCoordinator_04) { hasCoordinator = true }
        if (isGerente_04) { hasGerente = true }
        if (isDirector_04) { hasDiretor = true }
        if (isPresident_04) { hasPresident = true }

        if (hasDiretor) {
            //PRESIDENTE
            dataset_05 = DatasetFactory.getDataset(dataset, null, new Array(DatasetFactory.createConstraint("PARAM", nameLeader_04, nameLeader_04, ConstraintType.MUST)), null);
            position_05 = dataset_05.values[dataset_05.values.length - 1]
            funcEmployee_05 = position_05['FUNCAO']
            nameEmployee_05 = position_05['NOME']
            secaoEmployee_05 = position_05['SECAO']
            nameLeader_05 = position_05['NOME_LIDER']
            chapaEmployee_05 = position_05['CHAPA']
        }

        const key = `${+hasSupervisor}${+hasCoordinator}${+hasGerente}${+hasDiretor}`;

        const lookupTable = {
            "1111": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'A' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_04, 'MATRICULA': chapaEmployee_04, 'FUNCAO': funcEmployee_04, 'SECAO': secaoEmployee_04, 'LIDER': nameLeader_04 }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_05, 'MATRICULA': chapaEmployee_05, 'FUNCAO': funcEmployee_05, 'SECAO': secaoEmployee_05, 'LIDER': nameLeader_05 }]
            ]),
            "1110": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'B' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_04, 'MATRICULA': chapaEmployee_04, 'FUNCAO': funcEmployee_04, 'SECAO': secaoEmployee_04, 'LIDER': nameLeader_04 }]
            ]),
            "1101": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'C' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L3', { 'DENOMINATION': 'GEREFNTE', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_04, 'MATRICULA': chapaEmployee_04, 'FUNCAO': funcEmployee_04, 'SECAO': secaoEmployee_04, 'LIDER': nameLeader_04 }]
            ]),
            "1100": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'D' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }]
            ]),
            "1011": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'E' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }],
                ['L5', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_04, 'MATRICULA': chapaEmployee_04, 'FUNCAO': funcEmployee_04, 'SECAO': secaoEmployee_04, 'LIDER': nameLeader_04 }]
            ]),
            "1010": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'F' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }]
            ]),
            "1001": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'G' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }]
            ]),
            "1000": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'H' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }]
            ]),
            "0111": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'I' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_04, 'MATRICULA': chapaEmployee_04, 'FUNCAO': funcEmployee_04, 'SECAO': secaoEmployee_04, 'LIDER': nameLeader_04 }]
            ]),
            "0110": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'J' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }]
            ]),
            "0101": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'K' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }]
            ]),
            "0100": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'L' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }]
            ]),
            "0011": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'hasCoordinator': hasCoordinator, 'POINT': 'M' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }]
            ]),
            "0010": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'N' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_03, 'MATRICULA': chapaEmployee_03, 'FUNCAO': funcEmployee_03, 'SECAO': secaoEmployee_03, 'LIDER': nameLeader_03 }]
            ]),
            "0001": response = new Map([
                ['DADOS-SOLIC', { 'NOMESOLIC': nameSolic, 'FUNCSOLIC': funcSolic, 'hasSupervisor': hasSupervisor, 'hasCoordinator': hasCoordinator, 'hasGerente': hasGerente, 'hasDiretor': hasDiretor, 'POINT': 'O' }],
                ['L1', { 'DENOMINATION': 'SUPERVISOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L2', { 'DENOMINATION': 'COORDENADOR', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L3', { 'DENOMINATION': 'GERENTE', 'NOME': null, 'MATRICULA': null, 'FUNCAO': null, 'SECAO': null, 'LIDER': null }],
                ['L4', { 'DENOMINATION': 'DIRETOR', 'NOME': nameEmployee_01, 'MATRICULA': chapaEmployee_01, 'FUNCAO': funcEmployee_01, 'SECAO': secaoEmployee_01, 'LIDER': nameLeader_01 }],
                ['L5', { 'DENOMINATION': 'PRESIDENTE', 'NOME': nameEmployee_02, 'MATRICULA': chapaEmployee_02, 'FUNCAO': funcEmployee_02, 'SECAO': secaoEmployee_02, 'LIDER': nameLeader_02 }]
            ]),
            "0000": console.log("Não tem nenhum cargo acima")
        };

        switch (request) {
            case "all":
                return JSON.stringify(
                    { status: true, data: Object.fromEntries(lookupTable[key]) },
                    null,
                    2
                );

            default:
                response = lookupTable[key]

                const hierarchyOrder = {
                    "L1": "SUPERVISOR",
                    "L2": "COORDENADOR",
                    "L3": "GERENTE",
                    "L4": "DIRETOR",
                    "L5": "PRESIDENTE"
                };

                const hierarchyIndex = {
                    "SUPERVISOR": 1,
                    "COORDENADOR": 2,
                    "GERENTE": 3,
                    "DIRETOR": 4,
                    "PRESIDENTE": 5
                };

                let requestedRoles = Array.isArray(request) ? request : request.split(",").map(role => role.trim().toUpperCase());

                const leaders = [response.get("DADOS-SOLIC")];

                for (const [key, value] of Object.entries(hierarchyOrder)) {
                    const leaderData = response.get(key);

                    for (let requested of requestedRoles) {
                        if (leaderData && leaderData.NOME !== null && requested === value) {
                            if (!leaders.some(leader => leader.NOME === leaderData.NOME)) {
                                leaders.push(leaderData);
                            }
                        }
                    }
                }

                if (leaders.length <= 2) {
                    for (const [key, value] of Object.entries(hierarchyOrder)) {
                        const leaderData = response.get(key);

                        if (leaderData && leaderData.NOME !== null) {
                            if (!leaders.some(leader => leader.NOME === leaderData.NOME)) {
                                leaders.push(leaderData);
                                break;
                            }
                        }
                    }
                }

                leaders.sort((a, b) => {
                    return hierarchyIndex[a.DENOMINATION] - hierarchyIndex[b.DENOMINATION];
                });

                console.table(leaders);

                return JSON.stringify(
                    { status: true, data: leaders },
                    null,
                    2
                );
        }

    } catch (error) {
        return JSON.stringify(
            {
                status: false,
                message: error.message
            },
            null,
            2
        );
    }
}