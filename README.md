# imagescrape


Google Image Scrape

Task consist of 3 parts:

Google Image Scrape build using NodeJs, MongoDB, and various node modules which scrape images from Fetch images from google and save top 15 images after passing through a compression algorithm then through a black and white filter and saved to a local HDD location.

A page which lists all the keywords searched before by the user.

After clicking on any word on the listing page open up another page which will have all the images for that particular keyword.

To run this project first make sure you have MongoDB in your machine.

Next follow these steps.

git clone https://github.com/raoalok/imagescrape or download repository on your machine.

Then install all the node dependencies using npm install

Then install pm2 using  npm install pm2 -g   &  then run using  pm2 start server.js 

Open the server at http://localhost:3000

