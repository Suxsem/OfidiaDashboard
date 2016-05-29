Ext.define('OfidiaDashboard.view.logout.LogoutController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.logout',

    onClickButton: function () {
        // Remove the localStorage key/value
        localStorage.removeItem('OfidiaDashboardLoggedIn');

        // Remove Main View
        this.getView().destroy();

        window.location.reload();

    }
	
});
