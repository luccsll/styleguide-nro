import formatDateInfo from './utils.js';

export function _setStep(id, stepsArray, infoProcess) {
    const stepsContainer = id;
    stepsContainer.empty();

    stepsArray.forEach((step, index) => {
        const date = new Date(step.deadline);
        const { resultDate, progressWidth, barColor } = formatDateInfo(date);

        let structStep = `
        <li class="stepNro" data-id="${index + 1}" data-deadline="${step.deadline}">
            <span class="infoClickHover" data-id="${index + 1}">Clique aqui para mais informações</span>
            <div class="progress progressNro">
                <div class="progress-bar progressBarNro"
                     role="progressbar"
                     data-target="${progressWidth}"
                     data-color="${barColor}"
                     aria-valuemin="0" aria-valuemax="100"
                     style="width:0%">
                </div>
            </div>
            <div class="stepContent">
                <h2 class="stepContentActivity">${step.activity}</h2>
                <div class="stepContentInfo">`;


        var responsible = ''
        
        if (step.responsible) responsible = step.responsible.length > 14 ? step.responsible.substring(0, 14) + '...' : step.responsible 

        if (step.responsible == null) {
            structStep += `<p class="stepContentOwner" style="visibility: hidden;">${responsible}</p>`;
        } else {
            structStep += `<p class="stepContentOwner">${responsible}</p>`;
        }

        if (step.deadline == null) {
            structStep += `<p class="stepContentDeadline" style="visibility: hidden;"><span class="stepContentTime">${resultDate}</span></p>`;
        } else {
            structStep += `<p class="stepContentDeadline"><span class="stepContentTime">${resultDate}</span></p>`;
        }

        structStep += `</div></div></li>`;

        stepsContainer.append(structStep);
    });

    $('.infoClickHover').on('click', function () {
        const stepId = $(this).data('id');
        const stepData = stepsArray[stepId - 1];

        const structure = `
            <div class="backgroundModal" id="modalStep${stepId}">
                <div class="contentModal">
                    <div class="contentModalHeader">
                        <h1 class="contentModalTitle">${stepData.activity} <button class="buttonCloseModalStep"><i class="flaticon flaticon-close icon-md" aria-hidden="true"></i></button></h1>
                        <p class="contentModalSubtitle">${infoProcess[0].nameProcess}</p>
                    </div>
                    <div class="contentModalBody">
                        <div class="contentModalRow">
                            <div class="contentModalItem">
                                <p class="subtitleModalItem">Descrição da etapa</p>
                                <p class="textContentModal">${stepData.description}</p>
                            </div>
                            <div class="contentModalItem">
                                <p class="subtitleModalItem">Prazo de atendimento</p>
                                <p class="textContentModal">${stepData.deadline ? new Date(stepData.deadline).toLocaleString() : 'Sem prazo definido'}</p>
                            </div>
                        </div>
                        <div class="contentModalRow">
                            <div class="contentModalItem">
                                <p class="subtitleModalItem">Responsável pela etapa</p>
                                <div class="contentModalItem-profile">
                                    <img src="ft.png" class="photoModalStep">
                                    <div class="contentModalItem-text">
                                        <a class="modalStepName" href="https://concessionariarota156340.fluig.cloudtotvs.com.br:1700/portal/p/1/social/lucassilva" target="_blank">${stepData.responsible || 'Não definido'}</a>
                                         ${ stepData.typeResponsible === 'user' ? `<p class="modalStepPosition">Usuário</p>` : ''}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        $('body').append(structure);
        $('#modalStep' + stepId).show();

        $('.buttonCloseModalStep').on('click', function () {
            $('#modalStep' + stepId).remove();
        });
    });
}

export function _setStepActive(id, idElem) {
    let delay = 600;

    for (let step of id.children()) {
        const $step = $(step);
        $step.removeClass('stepActiveNro');

        setTimeout(() => {
            const stepId = $step.data('id');
            const $progressBar = $step.find('.progressBarNro');
            const deadlineStr = $step.data('deadline');

            if (stepId < idElem) {
                $step.addClass('stepCompletNro');
            } else if (stepId === idElem) {
                $step.addClass('stepActiveNro');

                if (!deadlineStr) {
                    $progressBar.css({
                        width: '100%',
                        backgroundColor: 'white'
                    });
                    return;
                }
            }

            const deadline = new Date(deadlineStr);
            const now = new Date();

            if (stepId < idElem) {
                $progressBar.css('width', '100%');
                setTimeout(() => {
                    $step.find('.stepContentDeadline').text('Concluído');
                }, 1900);

            } else if (stepId === idElem) {
                const currentDateOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());

                const totalMs = deadline.getTime() - currentDateOnly.getTime();
                const passadoMs = now.getTime() - currentDateOnly.getTime();

                let width = 0;
                let color = 'white';

                if (now >= deadline) {
                    width = 100;
                    color = 'var(--color-danger) !important';
                } else {
                    width = ((passadoMs / totalMs) * 100).toFixed(1);
                    const restante = 100 - width;

                    if (restante > 50) {
                        color = 'white';
                    } else if (restante > 15) {
                        color = 'var(--color-warning) !important';
                    } else if (restante > 0) {
                        color = 'var(--color-nro-06) !important';
                    } else {
                        color = 'var(--color-danger) !important';
                    }
                }

                $progressBar.css({
                    width: `${width}%`,
                    backgroundColor: color
                });
            }

        }, delay);

        delay += 1900;
    }
}