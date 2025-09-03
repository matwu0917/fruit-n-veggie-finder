# Fruit Colour Finder

A simple single-file website that tells you the typical colours of fruits when asked. The project uses only HTML, CSS, and JavaScript – no frameworks or build tools.

## Quick Start

1. Copy the code from `index.html` into your text editor.
2. Save it as `index.html`.
3. Double-click the file or open it in your browser.
4. Type a fruit name and press **Enter** to see its colours.

## Features

* **Search any fruit**: Type in a fruit name and get a list of its typical colours.
* **Colour swatches**: Results are displayed with colour chips showing each colour visually.
* **Handles typos**: Includes fuzzy matching to suggest fruits even if slightly misspelled (e.g., `strawbery` → `strawberry`).
* **Synonyms supported**: Recognises alternate names (e.g., `aubergine` = `eggplant`).
* **Custom fruits**: Add or edit fruits and their colours. Custom entries are stored in your browser’s local storage.
* **Keyboard shortcuts**: Press `/` to focus the search input, then `Enter` to search.

## Adding New Fruits

* Expand the **Add or edit a fruit** section.
* Enter the fruit name and its colours (comma-separated).
* Click **Save**.
* The new fruit will be stored in your browser and available for future searches.

## Example Searches

* `apple` → red, green, yellow
* `banana` → yellow, green
* `dragonfruit` → pink, white, red, yellow, green
* `aubergine` → purple, white, green

## File Structure

* `index.html`: Contains everything (HTML markup, CSS styles, and JavaScript logic). No external dependencies.

## Development Process

I started with the idea of making a simple tool that helps identify fruit colours in a fun, visual way. The initial dataset was built by listing common fruits and their typical colours. Once the basics worked, I added fuzzy matching to handle typos and an option for users to add custom fruits.

### Use of AI Tools

AI tools (like ChatGPT) were used for:

* **Brainstorming**: Generating ideas for additional features such as fuzzy search and colour swatches.
* **Code generation**: Writing the first version of the HTML/CSS/JavaScript in a single file.
* **Debugging**: Refining event handling and ensuring cross-browser compatibility.

I reviewed and tested all generated code to ensure I understood how it works and could explain the design choices.

## Reflection

Through this project, I learned how to:

* Combine HTML, CSS, and JavaScript into one file for a fully self-contained project.
* Implement fuzzy matching (edit distance) to improve user experience.
* Use local storage to persist user-defined data.

### Challenges Faced

* Designing a clean and responsive UI with just CSS.
* Balancing simplicity with flexibility (e.g., keeping it one file while still feature-rich).
* Ensuring the fuzzy matching logic wasn’t too aggressive or too strict.

## Browser Support

Tested on recent versions of Chrome, Firefox, Edge, and Safari. Because it’s pure HTML/JS, it should work on most modern browsers.

## License

This project is released under the MIT License. Feel free to copy, modify, and use it as you wish.
