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
            Ext.Msg.alert('Konfirmasi', 'Username/Password Anda Salah', this).setValue();
        }
    },
   
});
