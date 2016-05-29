Ext.define('OfidiaDashboard.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',

    onLoginClick: function() {

        // This would be the ideal location to verify the user's credentials via
        // a server-side lookup. We'll just move forward for the sake of this example.

        // Set the localStorage value to true
        localStorage.setItem("OfidiaDashboardLoggedIn", true);

        // Remove Login Window
        this.getView().destroy();

        window.location.reload();

    }
});