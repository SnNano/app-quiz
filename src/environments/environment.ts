// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUser: 'https://randomuser.me/api/?inc=login&seed=blabla',
  TRIVIA_URL : 'https://opentdb.com/api.php?amount=8&difficulty=easy&type=multiple&encode=base64',
  CATEGORY_URL :"https://opentdb.com/api_category.php",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
