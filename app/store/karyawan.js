Ext.define('myapp.store.karyawan', {
    extend: 'Ext.data.Store',
    alias: 'store.karyawan',
    storeId:'karyawan',
    fields: [
        'bulan',
        'jumlah',
    ],
    data: [
        { bulan: 'Jan', jumlah: 14,  },
        { bulan: 'Feb', jumlah: 16,  },
        { bulan: 'Mar', jumlah: 18,  },
        { bulan: 'Apr', jumlah: 20,  },
        { bulan: 'May', jumlah: 23,  },
        { bulan: 'Jun', jumlah: 26,  },
        { bulan: 'Jul', jumlah: 27,  },
        { bulan: 'Aug', jumlah: 27,  },
        { bulan: 'Sep', jumlah: 26,  },
        { bulan: 'Oct', jumlah: 23,  },
        { bulan: 'Nov', jumlah: 17,  },
        { bulan: 'Dec', jumlah: 14,  }
    ],

    counter: 0,

});