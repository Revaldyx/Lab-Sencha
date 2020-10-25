Ext.define('myapp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onClickButton: function(){
        Ext.Msg.confirm('Logout', 'Apakah anda mau Logout?', 'onConfirm', this); 
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            localStorage.removeItem('loggedIn'); //remove session login
            this.getView().destroy(); //destroy tampilan main.js
            Ext.getCmp('formlogin').destroy(); //destroy isi formlogin
            this.overlay = Ext.Viewport.add({ //membuat viewport login
                xtype: 'login',
                floated: true,
                showAnimation: {
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'
                },
                width: "100%",
                height: "100%",
                scrollable: true
            });
            Ext.Msg.alert('Logout', 'Berhasil Logout.', Ext.emptyFn);
            this.overlay.show();
        }
    },
    onInputChange: function(newValue, oldValue){
        keyword = Ext.getCmp('search').getValue();
        personnelStore = Ext.getStore('personnel');
        personnelStore.filter('name', keyword);
    },
    
});
