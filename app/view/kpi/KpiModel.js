Ext.define('OfidiaDashboard.view.kpi.KpiModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.kpi',

    requires: [
        'OfidiaDashboard.model.Average',
        'OfidiaDashboard.store.Average'
    ],

    data: {
        // This property is placed in the ViewModel by routing
        // kpiCategory: null
    },

    stores: {
        averageVM: {
            type: 'average',
            autoLoad: true
        }
    }
});
