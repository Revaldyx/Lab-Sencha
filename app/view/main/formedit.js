Ext.define('myapp.view.main.formedit', {
    extend: 'Ext.form.Panel',
    xtype: 'formedit',
    //id: 'formedit',
    controller: 'main',
    requires: [
        'myapp.view.main.MainController',
        'Ext.form.FieldSet',
        'Ext.field.Email'
    ],
    shadow: true,
    cls: 'demo-solid-background',
    id: 'basicform',
    items: [
        {
            xtype: 'fieldset',
            id: 'fieldset1',
            title: 'Input Dataan Siswa',
            instructions: 'Please enter the information above.',
            defaults: {
                labelWidth: '35%'
            },
            items: [
                {
                    xtype: 'textfield',
                    revealable: true,
                    name : 'name',
                    label: 'Nama',
                    placeHolder: 'Reza',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true,
                    id:'txtname'
                },
                {
                    xtype: 'emailfield',
                    name: 'email',
                    label: 'Email',
                    placeHolder: 'me@sencha.com',
                    clearIcon: true,
                    id:'txtemail'
                },
                {
                    xtype: 'textfield',
                    revealable: true,
                    name : 'phone',
                    label : 'No HP',
                    placeHolder: '08126862xxxx',
                    autoCapitalize: true,
                    required: true,
                    clearIcon: true,
                    id:'txtphone'
                },
                {
                    xtype: 'selectfield',
                    name: 'jurusan',
                    label: 'Jurusan',
                    required: true,
                    clearIcon: true,
                    id:'txtjurusan',
                    options: [
                        {
                            text: 'Teknik Sipil',
                            value: 'Teknik Sipil'
                        },
                        {
                            text: 'Teknik Perminyakan',
                            value: 'Teknik Perminyakan'
                        },
                        {
                            text: 'Teknik Informatika',
                            value: 'Teknik Informatika'
                        }
                    ]
                },
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
                    text: 'Reset',
                    ui: 'action',
                    handler: function(){
                        Ext.getCmp('basicform').reset();
                    }
                },
                {
                    text: 'Simpan',
                    ui: 'action',
                    formBind: true,
                    handler:'onSaveEdit',
                },
            ]
        }
    ]
});