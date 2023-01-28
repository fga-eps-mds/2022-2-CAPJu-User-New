import { Router } from "express";
import UserController from "./controllers/UserController.js";
import { protect, authRole } from "./middleware/authMiddleware.js";
import { ROLE } from "./schemas/role.js";

const routes = Router();


routes.get('/', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Up and running',
  });
});

// TODO:
routes.get(
	"/allUser",
	protect,
	authRole([ROLE.ADMINISTRADOR, ROLE.DIRETOR, ROLE.SERVIDOR]),
	UserController.allUser,
);

// TODO:
routes.post(
  "/newUser",
  UserController.store
);

// FIXME: endpoint igual ao alluser qual tevemos manter ? o vitor que criou esse endpoint posso excluir ?
routes.get(
  "/users",
  UserController.index
);

// TODO:
routes.post(
  "/login",
  UserController.login
);

// TODO:
routes.put(
  "/updateUser/:id",
  UserController.updateUser
);

// TODO:
routes.post(
  "/updateUserPassword/:id",
  UserController.editPassword
);

// TODO:
routes.delete(
  "/deleteUser/:id",
  UserController.deleteByParam
);

// TODO:
routes.post(
  "/acceptRequest/:id",
  protect,
  UserController.acceptRequest
);

// TODO:
routes.delete(
  "/deleteRequest/:id",
  protect,
  UserController.deleteRequest
);

// TODO:
routes.put(
  "/updateUserRole",
  UserController.updateRole);

// TODO:
routes.get(
  "/user/:id",
  UserController.getByIdParam
);

export default routes;
