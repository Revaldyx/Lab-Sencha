Ext.define('myapp.view.chart.ColumnController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.column-chart',

    onDownload: function() {
        var chart = this.lookupReference('chart');

        if (Ext.os.is.Desktop) {
            chart.download({
                filename: 'Jumlah Karyawan PT.Maju Mundur'
            });
        } else {
            chart.preview();
        }
    },
});