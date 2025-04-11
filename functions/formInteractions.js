export function _suggestionComment(arraySuggestions, activity) {

    Object.entries(arraySuggestions).forEach(([key, { field, suggestions }]) => {
        if (parseInt(key) === activity) {
            let containerSuggestion = `<ul class="commentSuggestion-list" id="commentSuggestion-list" ${field.includes("negativeReason") ? 'style="margin: 0 auto;"' : ''}>`;

            Object.entries(suggestions).forEach(([action, suggestionList]) => {
                suggestionList.forEach((suggestion) => {
                    containerSuggestion += `<li class='commentSuggestion-item' data-action="${action}">${suggestion}</li>`;
                });
            });

            containerSuggestion += '</ul>';

            var structHtml = `<div class="commentSuggestion" id="commentSuggestions${activity}">
                                <p class="commentSuggestion-title">Sugestões de comentários</p>
                                ${containerSuggestion}
                              </div>`;

            $('#' + field).after(structHtml);
        }
    });

    $('.commentSuggestion-item').each(function () {
        var action = $(this).attr('data-action');
        action === 'aprove' ? $(this).show() : $(this).hide();
    });

    $('input[type="radio"]').on('change', function () {
        if ($(this).val() === 'Não' && $(this).is(':checked')) {

            $('.commentSuggestion-item').each(function () {
                var action = $(this).data('action');
                if (action === 'reprove') {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        } else if ($(this).val() === 'Sim' && $(this).is(':checked')) {

            $('.commentSuggestion-item').each(function () {
                var action = $(this).data('action');
                if (action === 'aprove') {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        } else {
            $('.commentSuggestion-item').show();
        }
    });

    $('.commentSuggestion-item').on('click', function () {
        var inputed = $("#" + $(this).closest('.form-group').find('textarea').attr('id'));

        if (inputed.val() == '' || inputed.val() == null) {
            inputed.val($(this).text());
        } else {
            inputed.val('');
            inputed.val($(this).text());
        }
    });
}

export function _toggleNegativeField(radioName, fieldId) {
    if ($(`input[name="${radioName}"]:checked`).val() == 'Não') {
        $(`#${fieldId}`).addClass('fieldRequired');
    } else {
        $(`#${fieldId}`).removeClass('fieldRequired');
    }
}