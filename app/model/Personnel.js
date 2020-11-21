Ext.define('MyApp.model.Personnel', {
    
    extend: 'Ext.data.Model',
    fields: [
        { name: 'user_id', type: 'int'},
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'jurusan', type: 'string' },
        { name: 'gambar', type: 'string' },
    ]

});