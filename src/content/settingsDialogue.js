/**
 * WorkTimeTrackerChrome namespace.
 */
if ("undefined" == typeof(WorkTimeTrackerChrome)) {
  var WorkTimeTrackerChrome = {};
};

/**
 * Controls the browser overlay for the Hello World extension.
 */
WorkTimeTrackerChrome.settingsDialog = {
  /**
   * Says 'Hello' to the user.
   */
  accept : function(aEvent) {
    var stringBundle = document.getElementById("worktimetracker-string-bundle");
    var message = stringBundle.getString("worktimetracker.greeting.label");

    window.alert(message);
  },

  cancel : function(aEvent) {
      window.close();
  }
};