Ext.define('OfidiaDashboard.view.logout.Logout', {
    extend: 'Ext.panel.Panel',
    xtype: 'logout',
    itemId: 'logout', // for setActiveTab(id)

    controller: 'logout',

	layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    
    items: [{
		frame: true,
		title: 'Sei sicuro di voler uscire?',
		margin: '50 100 0 100',
		items: [{
			margin: '30 30 30 30',
			xtype: 'button',
			text: 'Logout',
			handler: 'onClickButton'
		}]
	}]
	
});
