Ext.define('myapp.view.form.login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    controller: 'login',
    title: 'Selamat datang di Myapp',

    requires: [
        'myapp.view.form.loginController',
        'Ext.form.Panel',
    ],
    shadow: true,
    cls: 'demo-solid-background',
    id: 'formlogin',
    items: [
        {
            xtype: 'fieldset',
            id: 'fieldset1',
            title: 'Silakan masukan username dan password',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    name: 'name',
                    label: 'Username',
                    placeHolder: 'Admin',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true
                },
                {
                    xtype: 'passwordfield',
                    revealable: true,
                    name: 'password',
                    placeHolder: 'password',
                    label: 'Password',
                    required: true,
                    clearIcon: true
                }
            ]
        },
        {
            xtype: 'container',
            defaults: {
                xtype: 'button',
                style: 'margin: 1em',
                flex: 1
            },
            layout: {
                type: 'hbox'
            },
            items: [
                {
                    xtype: 'button',
                    text: 'Login',
                    ui: 'action',
                    handler: 'onLogin',
                },
                {
                    text: 'Reset',
                    ui: 'action',
                    style: 'background-color:#E61607;margin:14px;color: white',
                    handler: function () {
                        Ext.getCmp('formlogin').reset();
                    }
                },
                // {
                //     text: 'Daftar',
                //     ui: 'action',
                //     handler: 'onRegis',
                // }
                },
            ]
        }
    ]
});