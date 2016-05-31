Ext.define('OfidiaDashboard.store.Average', {
    extend: 'Ext.data.Store',
    alias: 'store.average',

    model: 'OfidiaDashboard.model.Average',

    proxy: {
        type: 'memory',
        reader: 'array',

        data: [
			[0,"06/07/2016",220,110,90,80],
			[1,"07/07/2016",320,110,90,80],
			[2,"08/07/2016",220,110,90,80],
			[3,"09/07/2016",420,110,90,80],
			[4,"10/07/2016",220,110,90,80],
			[5,"11/07/2016",120,110,90,80]
        ]
    }
});
