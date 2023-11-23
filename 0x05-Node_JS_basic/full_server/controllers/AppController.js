/**
 * AppController class containing route handlers for the app.
 *
 * @class
 * @classdesc Contains route handlers for the application.
 */

class AppController {
  // Handles the homepage route and sends a greeting message
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
