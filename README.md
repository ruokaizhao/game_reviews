Welcome to Games and Reviews project!

This is a full-stack project using React to build the frontend and Ruby with Sinatra to build the backend.

The data used in this project is about various games and their respective user reviews.

## Installation

Fork and clone this repo, cd into the sinatra-backend fold and run:

```bash
bundle install
```

to install all the dependencies, then run:

```bash
rake server
```

to start the server.

Next, cd into the react-frontend fold and run:

```bash
npm install
npm start
```

to install all the dependencies and start the application.

Upon loading, the user will see the homepage with a list of various games with titles, the company who made this game and the price of the game. Those data is fecthed using GET request from the Web API running by Sinatra backend.

Clicking on one of the game name, will change the URL in the browser's address bar and thus allowing browser's built-in Back and Forward functionalities.

Once clicked, an card like box with more information (game introduction and image) about the game will be shown. Below the game's introduction, there is the users' review section. All the reveiws about this game will be shown from the earliest to the latest, along with the user's name of thom created the review.

Move the mouse around the review section, once the mouse is hovering the reveiw left by the user who is seeing the review, two icons (pen icon and trash can icon) will show up, allowing the user to edit or delete his/her review. Clicking on the pen icon will bring an input area for the user to edit the review, once finished editing, the user can click on the Send button to update the review. Click the trash can icon will remove the review both from database and webpage. Those actions will trigger a PATCH and DELETE request to the backend. One thing to note is that, in order to avoid accidently clicking on the trash can button, when it is clicked, a popup window will show up asking user to type in their name to confirm the deletion.

On the bottom of this card like box is the input area for adding a new review for the game. The user can type in their thoughts, and click on the Submit button. The action will trigger a PATCH request to the backend that will preserve the changes.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)