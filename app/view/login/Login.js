Ext.define('OfidiaDashboard.view.login.Login', {
    extend: 'Ext.window.Window',
    xtype: 'login',

    requires: [
        'OfidiaDashboard.view.login.LoginController',
        'Ext.form.Panel'
    ],

    controller: 'login',
    bodyPadding: 10,
    title: 'Login',
    closable: false,
    autoShow: true,

    items: {
        xtype: 'form',
        reference: 'form',
		bodyPadding: 10,
        items: [{
            xtype: 'textfield',
            name: 'username',
            fieldLabel: 'Username',
            allowBlank: false
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: 'Password',
            allowBlank: false
        }, {
            xtype: 'displayfield',
            hideEmptyLabel: false,
            value: 'Inserisci i dati richiesti'
        }],
        buttons: [{
            text: 'Login',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }]
    }
});