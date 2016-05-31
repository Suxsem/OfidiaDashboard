Ext.define('OfidiaDashboard.store.Indicator', {
    extend: 'Ext.data.Store',
    alias: 'store.indicator',

    fields: ['description', 'value' ],
    data: [
        { description: 'Android', value: 68.3 },
        { description: 'BlackBerry', value: 1.7 },
        { description: 'iOS', value: 17.9 },
        { description: 'Windows Phone', value: 10.2 },
        { description: 'Others', value: 1.9 }
    ]

});