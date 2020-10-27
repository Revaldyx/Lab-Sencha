Ext.define('myapp.view.form.loginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLogin: function () {
        var form = this.getView();
        var me = this;

        var name = form.getFields('name').getValue();
        var password = form.getFields('password').getValue();
        if (name == 'admin' && password == 'admin') {
            Ext.Msg.alert('Login Success', 'You have been logged in');
            form.hide();
        }
        else {
            Ext.Msg.alert('Konfirmasi', 'Username/Password Anda Salah', this);
        }
    },
    // onRegis: function() {
        //             if (!this.overlay) {
        //                 this.overlay = Ext.Viewport.add({
        //                     xtype: 'panel',
        //                     floated: true,
        //                     modal: true,
        //                     hideOnMaskTap: true,
        //                     showAnimation: {
        //                         type: 'popIn',
        //                         duration: 250,
        //                         easing: 'ease-out'
        //                     },
        //                     hideAnimation: {
        //                         type: 'popOut',
        //                         duration: 250,
        //                         easing: 'ease-out'
        //                     },
        //                     centered: true,
        //                     width :"80%",
        //         			height :"80%",
                            
        //                         title: 'Pendaftaran',
        //                         id:'regis',
        //                     	items:[
        //                     		{
        //                     			label:'Nama',
        //                     			xtype:'textfield',
        //                     			name:'username',
        //                     		},
        //                     		{
        //                     			label:'password',
        //                     			xtype:'passwordfield',
        //                     			name:'password',
        //                     		},
        //                     		{
        //                     			label:'Alamat',
        //                     			xtype:'textfield',
        //                     			name:'alamat',
        //                     		},
        //                     		{
        //                     			label:'Pekerjaan',
        //                     			xtype:'textfield',
        //                     			name:'pekerjaan',
        //                     		},
        //                     		{
        //                     			xtype:'button',
        //                 				text: 'Daftar',
        //                 				ui: 'action',
        //                 				handler: function(){
        //                 					Ext.Msg.alert('Register Success','You have been Registered');
        //                 				}
        //             				},
        //             				{
        //                                 xtype:'button',
        //                                 text: 'Kembali',
        //                                 style: 'margin: 1em 0 1em 1em',
        //                                 style:'background-color:#E61607;margin:14px;color: white',
        //                                 ui: 'action',
        //                                 handler: function(){
        //                                     var reg = Ext.getCmp('regis');
        //                                     reg.close();
        //                                   }
        //             				}
        //                     	],
    
    
        //                     scrollable: true
        //                 });
        //             }this.overlay.show();
        // },
   
});
