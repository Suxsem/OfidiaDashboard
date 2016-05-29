Ext.define('OfidiaDashboard.model.StockOHLC', {
    extend: 'OfidiaDashboard.model.Base',

    fields: [
        'company',
        'time',
        'open',
        'high',
        'low',
        'close'
    ]
});
