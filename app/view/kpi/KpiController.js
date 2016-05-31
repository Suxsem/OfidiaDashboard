Ext.define('OfidiaDashboard.view.kpi.KpiController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kpi',

    init: function (view) {
        // We provide the updater for the activeState config of our View.
        view.updateActiveState = this.updateActiveState.bind(this);
    },

    onToggleAverage: function(button) {
        if (button.pressed) {
            var view = this.getView();
            view.setActiveState(button.reference);
        }
    },

    updateActiveState: function (activeState) {
        var refs = this.getReferences();
        var viewModel = this.getViewModel();
		
		console.log(activeState);
		refs[activeState].setPressed(true);
		refs['averageChart'].getSeries()[0].setYField(activeState);
		console.log(refs['averageChart'].getSeries()[0]);
		console.log(refs['averageChart']);
		refs['averageChart'].redraw();

        this.fireEvent('changeroute', this, 'kpi/' + activeState);
    }
});
