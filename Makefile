# The name of the extension.
extension_name := worktimetracker

# The UUID of the extension.
extension_uuid := {8d17b3a9-9c21-4c32-a713-a3b7f0ea92c2}

# The name of the profile dir where the extension can be installed.
profile_dir := worktimetracker-dev

# The zip application to be used.
ZIP := zip

# The target location of the build and build files.
bin_dir := ../bin/

# The target XPI file.
xpi_file := $(bin_dir)$(extension_name).xpi

# The type of operating system this make command is running on.
os_type := $(patsubst darwin%,darwin,$(shell echo $(OSTYPE)))

# The location of the extension profile.
ifeq ($(os_type), darwin)
  profile_location := \
    ~/Library/Application\ Support/Firefox/Profiles/$(profile_dir)/extensions/\{$(extension_uuid)\}
else
  ifeq ($(os_type), linux-gnu)
    profile_location := \
      ~/.mozilla/firefox/$(profile_dir)/extensions/\{$(extension_uuid)\}
  else
    profile_location := \
      "$(subst \,\\,$(APPDATA))\\Mozilla\\Firefox\\Profiles\\$(profile_dir)\\extensions\\{$(extension_uuid)}"
  endif
endif

# The temporary location where the extension tree will be copied and built.
build_dir := $(bin_dir)build

# This builds the extension XPI file.
.PHONY: all
all:
	@$(MAKE) -C src all

# This cleans all temporary files and directories created by 'make'.
.PHONY: clean
clean:
	@$(MAKE) -C src clean

# The sources for the XPI file.
xpi_built := install.rdf \
             chrome.manifest \
             $(wildcard content/*.js) \
             $(wildcard content/*.xul) \
             $(wildcard content/*.xml) \
             $(wildcard content/*.css) \
             $(wildcard skin/*.css) \
             $(wildcard skin/*.png) \
             $(wildcard locale/*/*.dtd) \
             $(wildcard locale/*/*.properties)

# This builds everything except for the actual XPI, and then it copies it to the
# specified profile directory, allowing a quick update that requires no install.
.PHONY: install
install:
	@$(MAKE) -C src install


$(xpi_file):
	@$(MAKE) -C src
