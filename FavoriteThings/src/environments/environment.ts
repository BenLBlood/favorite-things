// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDhU56xdvYlarikzQsAjVu1uN7UFp0z9vQ",
    authDomain: "bloodb-favorite-things.firebaseapp.com",
    databaseURL: "https://bloodb-favorite-things.firebaseio.com",
    projectId: "bloodb-favorite-things",
    storageBucket: "bloodb-favorite-things.appspot.com",
    messagingSenderId: "543039501988"
  },
};
