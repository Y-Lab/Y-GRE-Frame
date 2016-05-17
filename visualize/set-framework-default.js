// set-framework-default.js

$('#main-container').append($('<div>').attr('id', 'passkey-div').addClass('bs-docs-section')
    .append($('<h1>').attr('id', 'passkey-h1').addClass('page-header').append($('<i>').addClass('fa fa-key')).append(' Passkey'))
    .append($('<form>').attr('action', '/framework/').attr('method', 'get')
        .append($('<div>').addClass('form-group')
            .append($('<p>').addClass('text-muted').html('Due to security reasons, your passkey is the only way to access your Y-English GRE Test Preparation Framework. Please keep it safe. If you forget your passkey, you should contact the Y-English staff to help you retrieve it.'))
            .append($('<p>').addClass('text-muted').html('If you have a passkey, you can submit it here.'))
            .append($('<label>').attr('for', 'input-passkey').html('Submit passkey'))
            .append($('<div>').addClass('input-group')
                .append($('<input>').attr('type', 'text').attr('name', 'pk').attr('id', 'input-passkey').addClass('form-control').attr('placeholder', 'Enter passkey here...').attr('value', passkey))
                .append($('<span>').addClass('input-group-btn')
                    .append($('<button>').attr('type', 'submit').attr('id', 'submit-passkey').addClass('btn btn-default').html('Submit'))
                )
            )
        )
    )
);
$('#sidebar-nav-ul').append($('<li>').append($('<a>').attr('href', '#passkey-h1').html('Passkey')));