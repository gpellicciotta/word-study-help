# Word Study Help

A web-site helping to understand and learn of words in a foreign language.

The intention is to make it super-simple to search for a word in a specific language, 
and then get all the following (from freely available sources on the internet):

- (Always)   The meaning of the word, as described by the language's dictionary
- (If found) The pronunciation of the word
- (Always)   Sample sentences using the word
- (Always)   Any images associated with the word

## Simple UI

The interface will simply be a web-page with:
- A drop-down, allowing to select the language of interest (the choice will be remembered locally)
- A text-box allowing to enter a word 

The output will then be links to the information found

## Architecture

The whole will be a single-page application with no back-end (except the internet as a whole acting as data).
No logging in, but also no remembering of words previously searched (beyond possibly on a specific device).
