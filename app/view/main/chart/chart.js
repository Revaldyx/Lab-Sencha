Ext.define('myapp.view.chart.Column', {
    extend: 'Ext.Panel',
    xtype:'chartss',
    requires: [
        'Ext.chart.CartesianChart',
        'Ext.chart.interactions.ItemEdit',
        'Ext.chart.series.Bar',
        'Ext.chart.axis.Numeric',
        'Ext.chart.axis.Category',
        'myapp.view.chart.ColumnController', 
    ],

    controller: 'column-chart',
    layout: 'fit',

    shadow: true,
    
    items: [{
        xtype: 'toolbar',
        docked: 'top',
        cls: 'charttoolbar',
        items: [{
            xtype: 'spacer'
        }, {
            text: 'Preview',
            iconCls: 'x-fa fa-eye',   // kalo di mobile munculnya preview
            platformConfig: {
                desktop: {
                    text: 'Download',     //kalo di desktop munculnya download
                    iconCls: 'x-fa fa-download'
                }
            },
            handler: 'onDownload' // handler buat dowload di column controllwe
        }, {
            text: 'Reload',
            iconCls: 'x-fa fa-refresh', 
            handler: 'onReloadData' //handler buat reload
        }]
    }, {
        xtype: 'cartesian',
        reference: 'chart',
        store: {
            type: 'karyawan'
        },
        insetPadding: { //padding chart di mobile
            top: 50,
            bottom: 10,
            left: 0,
            right: 10
        },
        platformConfig: {
            desktop: {      // padding chart di desktop
                insetPadding: {
                    top: 50,
                    bottom: 40,
                    left: 20,
                    right: 40
                }
            }
        },
        interactions: [
        //     {
        //     type: 'itemedit',
        //     tooltip: {
        //         renderer: 'onEditTipRender'  //interaksi buat edit column 
        //     },
        //     renderer: 'onColumnEdit'
        // }, 
        {
            type: 'panzoom',
            axes: {
                left: {
                    allowPan: false,
                    allowZoom: false      //buat zoom di mobile
                },
                bottom: {
                    allowPan: true,
                    allowZoom: true
                }
            }
        }],
        axes: [{
            type: 'numeric',
            position: 'left',
            minimum: 10, // minimum angka axes di chart
            titleMargin: 20, //margin di title
            title: {
                text: 'Jumlah karyawan'            //text di axes nya (di samping)
            },
            // listeners: {
            //     rangechange: 'onAxisRangeChange' //ubah range 
            // }
        }, {
            type: 'category',
            position: 'bottom',
            visibleRange: [0, 0.5], //untuk size category di mobile 
            platformConfig: {
                desktop: {
                    visibleRange: [0, 1]  // untuk size category di desktop 
                }
            }
        }],
        series: {
            type: 'bar',
            xField: 'bulan',
            yField: 'jumlah',
            style: {
                minGapWidth: 20 // jarak tiap bar
            },
            highlight: {
                strokeStyle: 'black', // warna jika kita geser ke bar yang di inginkan
                fillStyle: 'gold'
            },
            label: {
                field: 'jumlah',       // label di bar nya
                display: 'insideEnd',
            }
        },
        sprites: {
            type: 'text',
            text: 'Jumlah karyawan di PT. Maju Mundur', //judul chart
            fontSize: 22,
            width: 100,
            height: 30,
            x: 30, // the sprite x position
            y: 30  // the sprite y position
        },
        // listeners: {
        //     afterrender: 'onAfterRender',
        //     beginitemedit: 'onBeginItemEdit',
        //     enditemedit: 'onEndItemEdit'
        // }
    }]

});