/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 */
Ext.define('OfidiaDashboard.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
		'Ext.plugin.Viewport',
        'OfidiaDashboard.view.*'
    ],

    controller: 'main',

    viewModel: {
        type: 'main'
    },

	plugins: 'viewport',
	
    ui: 'navigation',
    cls: 'exec-menu-navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        iconCls: 'exec-header-icon',
        title: {
            text: 'Ofidia',
            textAlign: 'center',
            flex: 0,
            minWidth: 160
        },
        tools: [{
            type: 'gear',
            plugins: 'responsive',
            width: 120,
            margin: '0 0 0 0',
            handler: 'onSwitchTool',
            responsiveConfig: {
                'width < 768 && tall': {
                    visible: true
                },
                'width >= 768': {
                    visible: false
                }
            }
        }]
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    listeners: {
        tabchange: 'onTabChange'
    },

    defaults: {
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left',
                    flex: 0
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    flex: 1
                },
                'width < 768 && tall': {
                    visible: false
                },
                'width >= 768': {
                    visible: true
                }
            }
        }
    },

    items: [{
        // This page has a hidden tab so we can only get here during initialization. This
        // allows us to avoid rendering an initial activeTab only to change it immediately
        // by routing
        xtype: 'component',
        tabConfig: {
            hidden: true
        }
    },{
        xtype: 'kpi',
        title: 'Dashboard',
        iconCls: 'exec-kpi-icon'
    },{
        xtype: 'component',
        title: 'Info',
        iconCls: 'exec-news-icon'
    },{
        xtype: 'logout',
        title: 'LOGOUT'
    }],

    // This object is a config for the popup menu we present on very small form factors.
    // It is used by our controller (MainController).
    assistiveMenu: {
        items: [{
            text: 'Dashboard',
            height: 50,
            iconCls: 'exec-kpi-icon'
        },{
            text: 'Info',
            height: 50,
            iconCls: 'exec-news-icon'
        },{
            text: 'LOGOUT',
            height: 50
        }],
        listeners: {
            click: 'onMenuClick'
        }
    }
});
