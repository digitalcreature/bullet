all: index.html

%.html: %.pug
	pug --pretty $<

clean:
	rm -rf *.html

.PHONY: all clean
