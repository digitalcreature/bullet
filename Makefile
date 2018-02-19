
all: html css

html:
	$(MAKE) -C public

css:
	$(MAKE) -C public/style

clean: clean-html clean-css

clean-html:
	$(MAKE) clean -C public

clean-css:
	$(MAKE) clean -C public/style


.PHONY: all html css clean clean-html clean-css
