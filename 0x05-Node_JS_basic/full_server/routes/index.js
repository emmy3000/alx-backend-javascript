/**
 * Router configuration for application routes.
 *
 * @module routes/index
 * @param {Object} Router - Express Router object.
 * @returns {Object} Configured router with defined routes.
 */

import { Router } from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const router = Router();

router.get('/', AppController.getHomepage);
router.get('/students', StudentsController.getAllStudents);
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
