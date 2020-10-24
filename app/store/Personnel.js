Ext.define('myapp.store.Personnel', {
    extend: 'Ext.data.Store',
    storeId: 'personnel',

    alias: 'store.personnel',

    fields: [
       'no', 'name', 'email', 'phone'
    ],

    data: { items: [
        {no:'1', name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", gambar:'/resources/tes.png' },
        {no:'2', name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", gambar:'/resources/tes.png'  },
        {no:'3', name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", gambar:'/resources/tes.png' },
        {no:'4', name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", gambar:'/resources/tes.png' }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
