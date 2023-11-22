/**
 * AppController class containing route handlers for the app.
 *
 * Handles the "/" homepage route by responding with a
 * status 200 and "Hello Holberton School!" message.
 */

class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
