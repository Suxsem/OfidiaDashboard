/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('OfidiaDashboard.Application', {
    extend: 'Ext.app.Application',
    
    name: 'OfidiaDashboard',
	
    // The tab we want to activate if there is no "#tag" in the URL.
    defaultToken: '!kpi/ta',

    stores: [
        // TODO: add global / shared stores here
    ],
    
    views: [
        'OfidiaDashboard.view.login.Login',
        'OfidiaDashboard.view.main.Main'
    ],
	
    launch: function () {

        // It's important to note that this type of application could use
        // any type of storage, i.e., Cookies, LocalStorage, etc.
        var loggedIn;

        // Check to see the current value of the localStorage key
        loggedIn = localStorage.getItem("OfidiaDashboardLoggedIn");

        // This ternary operator determines the value of the TutorialLoggedIn key.
        // If TutorialLoggedIn isn't true, we display the login window,
        // otherwise, we display the main view
        Ext.create({
            xtype: loggedIn ? 'app-main' : 'login'
        });
		
        // Let's add a CSS class to body if flex box wrap is not implemented or broken
        // http://flexboxlayouts.com/flexboxlayout_tricks.html
        if (Ext.browser.is.Gecko && Ext.browser.version.major < 28) {
            Ext.getBody().addCls('x-flex-wrap-broken');
        }

    },
	
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
