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
  sayHello : function(aEvent) {
    var stringBundle = document.getElementById("worktimetracker-string-bundle");
    var message = stringBundle.getString("worktimetracker.greeting.label");

    window.alert(message);
  },

  showSettings : function(aEvent) {
      window.open("chrome://worktimetracker/content/settingsDialogue.xul",
          "worktimetracker-settings-dialogue", "chrome,centerscreen");
  }
};