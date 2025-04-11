export function _handleProcessError(callback) {
	let errorMessage = '';

	if (typeof callback === 'string') {
        errorMessage = callback;
    } else if (typeof callback === 'object' && callback.message) {
        errorMessage = callback.message;
    } else {
        errorMessage = 'Este erro ainda não foi mapeado. Por favor, entre em contato com a equipe de TI para suporte';
    }

    var html = `	<section class="modalMessage" id="modalMessage">
				<div class="containerModalMessage">
					<div class="containerModalMessage-top">
						<img class="illustrationMsgError" src="/style-guide/images/illustrations/caution.svg"
							title="caution">
						<div class="titleModalMessage">
							<h1>Oops!</h1>
							<p>Parece que algo deu errado</p>
						</div>
						<p class="msgContactIT">Por favor, entre em contato com a equipe de <span
								class="fontWeigth">Sistemas TI</span> para suporte ou tente atualizar a
							página em alguns minutos. Estamos aqui para ajudar</p>
					</div>
					<div class="containerModalMessage-bottom">
						<button class="btnBlue-2" onclick="window.location.reload()">Forçar reiniciação da
							pagina</button>
						<div class="containerShowMsgError">
							<p class="btnTextBlue" id="textShowError">Exibir erro</p>

							<div class="containerShowMsgError-content">${errorMessage}</div>
						</div>
					</div>

				</div>
			</section>`

    $('#form').append(html)

    let textShowError = $('#textShowError')
    var div = $('.containerShowMsgError-content');

    textShowError.on('click', function () {

        div.toggleClass('showMsgError')

        if (div.hasClass('showMsgError')) {
            textShowError.text('Ocultar erro')

        } else {
            textShowError.text('Exibir erro')

        }
    })
}