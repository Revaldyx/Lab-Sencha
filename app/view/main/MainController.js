Ext.define('myapp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onClickButton: function () {
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
    onInputChange: function (newValue, oldValue) {
        keyword = Ext.getCmp('search').getValue();
        personnelStore = Ext.getStore('personnel');
        personnelStore.filter('name', keyword);
    },

    onReadClicked: function () {
        Ext.getStore('personnel').load();
    },

    onRemoveClick: function (view, recIndex, cellIndex, item, e, record) {
        var id = Ext.getCmp('user_id').getValue();
        var store = Ext.getStore('personnel');
        store.Delete(id);
        var record = store.getById(id);
        Ext.Msg.confirm("Delete Confirmation", "Are you sure to delete this record?", function (btn) {
            if (btn == 'yes')
                record.erase({
                    success: function () {
                        store.remove(record);
                        store.sync();
                    }
                });
        })
    },
    onAddClick: function () {
        var view = this.getView();
        view.getStore().insert(0, { user_id: '', name: '', email: '', phone: '' });
        view.findPlugin('rowediting').startEdit(0, 0);
    },

    onSaveEdit: function() {
        var name = Ext.getCmp('txtname').getValue();
        var email = Ext.getCmp('txtemail').getValue();
        var phone = Ext.getCmp('txtphone').getValue();
        var jurusan = Ext.getCmp('txtjurusan').getValue();
        store = Ext.getStore('personnel');
        record1 = Ext.getCmp('bdv').getSelection();
        index = store.indexOf(record1);
        record = store.getAt(index);
        store.beginUpdate();
        record.set('name', name);
        record.set('email', email);
        record.set('phone', phone);
        record.set('jurusan', jurusan);
        store.endUpdate();
        Ext.Msg.alert('Title', 'Data telah diperbaharui', Ext.emptyFn);
    }
});

function onRemoveClick(user_id) {
    record = Ext.getCmp('bdv').getSelection();
    Ext.Msg.confirm("Delete Confirmation", "Are you sure to delete this record?", function (btn) {
        if (btn == 'yes') {
            Ext.getStore('personnel').remove(record);
            Ext.Msg.alert('Title', 'Data telah dihapus', Ext.emptyFn);
        }
    })
};

function onUpdateClick(user_id) {
    record = Ext.getCmp('bdv').getSelection();
    name = record.data.name;
    email = record.data.email;
    phone = record.data.phone;
    jurusan = record.data.jurusan;
    Ext.getCmp('txtname').setValue(name);
    Ext.getCmp('txtemail').setValue(email);
    Ext.getCmp('txtphone').setValue(phone);
    Ext.getCmp('txtjurusan').setValue(jurusan);
}