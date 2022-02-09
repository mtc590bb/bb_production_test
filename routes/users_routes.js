// Routes
const router=require("express").Router();
const usersController=require("../controllers/users_ctrls");

router.post('/add',usersController.postAddUser);
router.get("/auth",usersController.getAuth);
router.get("/:id",usersController.getUser);
router.get("/",usersController.getUsers);

module.exports=router;