# todoNumeroUno

This is my shameless first attempt at react and front-end development in general.

Before installing this on your machine you'll need to first install node.

After you've done that, you can clone the respository and install the dependencies

```sh
git clone https://github.com/OsamaAdam98/todoNumeroUno
cd todoNumeroUno
npm install
```

If you'd like to run the front end by itself you can do

```sh
npm start
```

To run the react app and backend server concurrently

```sh
npm run dev
```

The backend is simply an api for saving and fetching the data.
It saves the state of Main.js "todos" into a JSON file which isn't the optimal way to do this but anything else is probably overkill for such an application and I don't know any better yet tbh.
