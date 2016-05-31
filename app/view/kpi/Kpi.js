/**
 * This view is the primary, KPI (Key Performance Indicators) view.
 */
Ext.define('OfidiaDashboard.view.kpi.Kpi', {
	extend: 'Ext.panel.Panel',
	xtype: 'kpi',
	itemId: 'kpi', // for setActiveTab(id)

	cls: 'kpi-main',
	
	requires: [
		'Ext.ux.GMapPanel',
		'OfidiaDashboard.store.Statistics',
		'OfidiaDashboard.store.Indicator',
		'Ext.chart.axis.Numeric',
		'Ext.chart.axis.Category',
		'Ext.chart.series.Area',
		'Ext.chart.series.Pie',
		'Ext.chart.interactions.PanZoom',
		'Ext.chart.interactions.Rotate'
	],

	config: {
		activeState: null,
		defaultActiveState: 'clicks'
	},

	controller: 'kpi',

	viewModel: {
		type: 'kpi'
	},

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	scrollable: 'y',

	minWidth: 600,

	items: [{
		xtype: 'dataview',
		cls: 'kpi-tiles',
		height: 100,
		itemSelector: 'div.indicator',

		tpl: [
			'<div class="kpi-meta">',
			'<tpl for=".">',
			'<span>',
			'<div class="indicator">{value}</div> {description}',
			'</span>',
			'</tpl>',
			'</div>'
		],
		
		store: {
			type: 'indicator',
			autoLoad: true
		}

	}, {
		xtype: 'gmappanel',
		cls: 'kpi-main-map',
		gmapType: 'map',
		minHeight: 500,

		tbar: {
			cls: 'kpi-toolbar',

			items: [{
				xtype: 'container',
				cls: 'kpi-chart-title',
				html: 'SITUAZIONE SENSORI IN TEMPO REALE'
			}]
		},

		center: {
			geoCodeAddr: "221B Baker Street",
			marker: {
				title: 'Holmes Home'
			}
		},
		mapOptions: {
			scrollwheel: false,
			scaleControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
	}, {
		cls: 'kpi-meta-charts',
		height: 300,

		layout: {
			type: 'hbox',
			align: 'stretch'
		},

		items: [{
			
			layout: {
				type: 'hbox',
				align: 'stretch'
			},

			width: 280,
			cls: 'kpi-donut-chart',

			tbar: {
				cls: 'kpi-toolbar',

				items: [{
					xtype: 'container',
					cls: 'kpi-chart-title',
					html: 'STATISTICHE'
				}]
			},
			
			items: [{
				xtype: 'polar',
				flex: 1,
				store: {
					type: 'statistics'
				},
				series: {
					type: 'pie',
					angleField: 'data1',
					label: {
						field: 'os'
					},
					highlight: true,
					donut: 30
				}

			}]
		}, {
			reference: 'mainChart',
			xtype: 'chart',
			flex: 1,
			interactions: [{
				type: 'panzoom',
				zoomOnPanGesture: false,
				axes: {
					left: {
						maxZoom: 1
					}
				}
			}],
			cls: 'kpi-main-chart',
			bind: '{kpiMain}',
			animation: false,

			tbar: {
				cls: 'kpi-toolbar',

				defaults: {
					toggleHandler: 'onToggleKpi'
				},

				items: [{
						xtype: 'container',
						cls: 'kpi-chart-title',
						html: 'MEDIE MENSILI'
					},
					'->', {
						ui: 'kpi',
						text: 'CLICKS',
						filter: 'clicks',
						toggleGroup: 'kpi',
						reference: 'clicks',
						allowDepress: false,
						dataIndex: 0
					}, {
						ui: 'kpi',
						text: 'WON',
						filter: 'redemption',
						reference: 'redemption',
						toggleGroup: 'kpi',
						allowDepress: false,
						dataIndex: 1
					}, {
						ui: 'kpi',
						text: 'SALES',
						filter: 'sales',
						reference: 'sales',
						toggleGroup: 'kpi',
						allowDepress: false,
						dataIndex: 2
					}, {
						ui: 'kpi',
						text: 'GOALS MET',
						filter: 'goalsmet',
						reference: 'goalsmet',
						margin: 0,
						toggleGroup: 'kpi',
						allowDepress: false,
						dataIndex: 1
					}
				]
			},

			axes: [{
				type: 'numeric',
				position: 'left',
				fields: ['data1'],
				fontSize: 12,
				grid: true,
				minimum: 0
			}, {
				type: 'category',
				position: 'bottom',
				fields: ['name']
			}],

			series: [{
				type: 'area',
				subStyle: {
					stroke: ['rgb(34,198,239)', 'rgb(241,73,91)'],
					fill: ['rgba(34,198,239,0.25)', 'rgba(241,73,91,0.25)'],
					'stroke-width': 3
				},
				xField: 'name',
				yField: ['data1', 'data2']
			}]
		}]
	}],

	validStates: {
		clicks: 1,
		redemption: 1,
		sales: 1,
		goalsmet: 1
	},

	isValidState: function(state) {
		return state in this.validStates;
	}
});