WORK TIME TRACKER

Organize the time spent with your machine (on Firefox). Work Time Tracker would keep telling you to get back to work until you have spent least amount of time (working while) away from certain blacklisted websites.

BUILD

- *NIX:

 $ cd /path/to/worktimetracker/src

 $ zip -r worktimetracker.xpi content/ locale/ skin/ chrome.manifest install.rdf

- WINDOWS

Just compress the following files found in `src/` into a ZIP file and change its extension to `.xpi` :
 - content/
 - locale/
 - skin/
 - chrome.manifest
 - install.rdf

INSTALL

1. Tools -> Add-ons
2. Find the setting menu icon to the left of search box	and select "Install Add-on from file..."
3. Select the .xpi file
4. Click Install Now & then Restart Now

CONTRIBUTE

To contribute, you must know:
 - Git (Can be learnt in no more than a day)
 - HTML/CSS
 - JavaScript
 - XUL (not mandatory, can be learnt quickly)

1. PULL

$ git pull https://github.com/asim42/worktime-tracker master

2. DO MAGIC
You do that better!

3. PUSH

$ git pull https://github.com/asim42/worktime-tracker master

READINGS

https://help.github.com/categories/bootcamp

https://help.github.com/categories/setup

https://help.github.com/categories/using-git

If you are good with Git already then start reading about extension development from here: https://developer.mozilla.org/en-US/Add-ons/Overlay_Extensions/XUL_School/Getting_Started_with_Firefox_Extensions
