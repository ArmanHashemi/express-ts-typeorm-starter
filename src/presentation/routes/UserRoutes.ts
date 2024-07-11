import { Router } from 'express';
import { container } from "@config/container";
import {USER_CONTROLLER, UserController} from '@presentation/controllers/UserController';

const userController = container.get<UserController>(USER_CONTROLLER);

const router = Router();

router.get('/', (req, res) => userController.getUsers(req, res));
router.post('/', (req, res) => userController.createUser(req, res));

export default router;
