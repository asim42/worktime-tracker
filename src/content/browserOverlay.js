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
    let stringBundle = document.getElementById("worktimetracker-string-bundle");
    let message = stringBundle.getString("worktimetracker.greeting.label");

    window.alert(message);
  }
};
