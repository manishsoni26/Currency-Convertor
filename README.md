# Currency Converter
A simple and efficient currency converter application built using React and Tailwind CSS. It fetches live currency exchange rates from [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json) to provide accurate conversions.

## Features
- Convert between various currencies in real-time.
- Responsive and user-friendly interface styled with Tailwind CSS.
- Fetches exchange rates dynamically from the Currency API.

## Installation
Follow these steps to set up and run the project locally:
1 **Clone the repository**
```bash
git clone <repository-url>
cd <repository-directory>
```
2 **Initialize the project**
Create a package.json file:
```bash
npm init -y
```
3 **Install dependencies**
Install the required dependencies:
```bash
npm install
```

## Usage

1. Select the base currency from the dropdown.

2. Enter the amount to convert.

3. View the converted amounts for other currencies.

# API Details

This project uses the API 
```bash
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```
 where:

{currency} represents the base currency name (e.g., usd, eur, etc.).

The API returns an object with currency names as keys and their corresponding exchange rates as values.

**Example:**
*For USD:*
```bash
{
  "eur": 0.84,
  "gbp": 0.76,
  "inr": 74.39
}
```
# Technologies Used

- *React*: For building the user interface.

- *Tailwind CSS*: For styling the application.

- *Currency API*: For fetching real-time exchange rates.