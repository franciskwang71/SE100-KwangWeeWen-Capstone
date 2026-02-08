Capstone Project Feb 2026 
Kwang Wee Wen 966Z

How to run project locally?

- using vite + node to scaffold the project
- using npm run dev to create a web server instance at http://localhost:5173

Bugs or Challenges

- primary challenge was getting the free / demo api key from [https://www.alphavantage.co/] to work
- used free api key from https://www.marketdata.app/api/ instead.
- attempted to change CSS to have the pages more adaptive and responsible to size changes but ended up looking bad. Did not have time to pursue more.
- did not have time to explore vitest nor create the test file
- could not deploy to git.pages because of the nested folder resulting from the instructions in Assignment 7. Had to manually migrate the files to a new repository. 

Improvements Beyond Baseline

- For StockForm 
    - Added a pop down message for validation outcome
    - Refocus cursor to the appropriate input upon invalid entry
    - Added clear input field upon successful adding of stock or invalid entry
- For StockList
    - Used a table format for the stocklist
    - Added sorting
    - Added visual indicator for gains / loss
    - Added [x] button to delete stock from list
    - Added a total row