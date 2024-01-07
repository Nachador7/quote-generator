# Quote Generator

This is a simple web application that generates and displays random quotes. Users can enjoy a variety of quotes along with the author's name and share them on Twitter.

## Features

- Fetches quotes from an external API.
- Dynamically displays quotes and authors on the webpage.
- Adjusts styling based on the length of the quote.
- Allows users to generate new quotes.
- Provides the option to share quotes on Twitter.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/quote-generator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd quote-generator
    ```

3. Open the `index.html` file in your preferred web browser.

4. Explore and enjoy random quotes!

## Usage

- Click the "New Quote" button to generate and display a new quote.
- Click the Twitter icon to share the displayed quote on Twitter.

## Dependencies

- Font Awesome 6.5.1 (CSS)
- Roboto Font (from Google Fonts)

## How It Works

1. The script fetches quotes from an external API defined in the `API_URL` constant.

2. The `getQuotes` function is responsible for fetching quotes from the API and updating the webpage with a new quote.

3. Users can click the "New Quote" button to trigger the `newQuote` function, which selects a random quote from the fetched quotes and displays it on the webpage.

4. The length of the quote is checked, and styling is adjusted if the quote is longer than 120 characters.

5. The `tweetQuote` function constructs a tweetable URL and opens a new browser window for users to share the quote on Twitter.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).
