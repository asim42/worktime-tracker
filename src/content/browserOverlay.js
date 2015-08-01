/**
 * WorkTimeTrackerChrome namespace.
 */
if ("undefined" == typeof(WorkTimeTrackerChrome)) {
  var WorkTimeTrackerChrome = {};
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
WorkTimeTrackerChrome.BrowserOverlay = {
  /**
   * Says 'Hello' to the user.
   */
  sayHello : function() {
    var stringBundle = document.getElementById("worktimetracker-string-bundle");
    var message = stringBundle.getString("worktimetracker.greeting.label");

    window.alert(message);
  },

  showSettings : function(aEvent) {
      window.open("chrome://worktimetracker/content/settingsDialogue.xul",
          "worktimetracker-settings-dialogue", "chrome,centerscreen");
  },
  switchOn : function() {
      var stringBundle = document.getElementById("worktimetracker-string-bundle");
      var title = stringBundle.getString("worktimetracker.switch.notification.title");
      var message = stringBundle.getString("worktimetracker.switch.on.notification.message");
      notify(title, message);
  },
  switchOff : function() {
    var stringBundle = document.getElementById("worktimetracker-string-bundle");
    var title = stringBundle.getString("worktimetracker.switch.notification.title");
    var message = stringBundle.getString("worktimetracker.switch.off.notification.message");
    notify(title, message);
  }
};

function notify(title, message) {
    try {
        var img = "chrome://worktimetracker/skin/icon.png";
        Components.classes['@mozilla.org/alerts-service;1']
            .getService(Components.interfaces.nsIAlertsService)
            .showAlertNotification(img, title, message, true, '', null);
    }catch (e) {

    }
}