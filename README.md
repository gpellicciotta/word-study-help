# Word Study Help

A web-site helping to understand and learn words in a foreign language.

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

## What works, and what doesn't

- Once opened, tabs/windows will get re-used
- No language selection yet: it is hardcoded to Italian for now
- No image search yet
- Pronunciation link works by linking to https://forvo.com
- Dictionary link works by linking to https://www.thefreedictionary.org
- Use links work by linking to https://context.reverso.net