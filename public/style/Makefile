all: layout.css index.css

%.css: %.sass
	sass $< $@

clean:
	rm -rf *.css

.PHONY: all clean
