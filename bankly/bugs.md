BUG #0 Setup
Not neccessarily a bug, but I kept getting an error with the starter code saying "Secret key or public key must be provided." when testing the routes. jwt. verify takes in two arguments, one is the token and the other is the secret key.

BUG #1
User cannot update their own info. Caused by requireAdmin middleware. Fixed by removing requireAdmin since its being checked in the conditional

// Tests Bug #1
test("should patch data if right user", async function() {
const response = await request(app)
.patch("/users/u1")
.send({ \_token: tokens.u1, first_name: "new-fn1" }); // right user
expect(response.statusCode).toBe(200);
expect(response.body.user).toEqual({
username: "u1",
first_name: "new-fn1",
last_name: "ln1",
email: "email1",
phone: "phone1",
admin: false,
password: expect.any(String)
});
});

Bug #2
Non-admins can set themselves as admins. Test was passing because Bug #1 was preventing user from updating their info altogether.

// Modify test to make sure Bug #2 fix doesn't prevent admins from updating
test("should patch data if admin and allow admin to update admin field", async function () {
const response = await request(app)
.patch("/users/u1")
.send({ \_token: tokens.u3, first_name: "new-fn1", admin: true }); // u3 is admin admin: true
expect(response.statusCode).toBe(200);
expect(response.body.user).toEqual({
username: "u1",
first_name: "new-fn1",
last_name: "ln1",
email: "email1",
phone: "phone1",
admin: true,
password: expect.any(String),
});
});

Bug #3
The getAll() method on the User class had unncessary paramaters for username and password, you wouldn't want to be able to get a persons sensitive information.

Models/user.js

static async getAll() {
// Bug #3 - Remove username, password from params
const result = await db.query(
`SELECT username, first_name, last_name, email, phone FROM users ORDER BY username`
);
return result.rows;
}

Bug #4

The get "/" route for all users returns email and phone when it should only return username, first, and last names.

routes/users.js

router.get('/', authUser, requireLogin, async function(req, res, next) {
try {
// Bug #4 - map over return data to exclude phone and email
let users = await User.getAll();
users = users.map((user) => ({
username: user.username,
first_name: user.first_name,
last_name: user.last_name
}))
return res.json({ users });
} catch (err) {
return next(err);
}
}); // end

Bug #5

The authUser function in auth middleware only decodes the token. It should be verifying it to ensure it hasn't been tampered with.
Also when we change it to jwt.verify must pass two parameters, the token as well as the secret key.

middleware/auth.js

function authUser(req, res, next) {
try {
const token = req.body.\_token || req.query.\_token;
if (token) {
let payload = jwt.verify(token); // Bug #5 - change .decode to .verify
req.curr_username = payload.username;
req.curr_admin = payload.admin;
}
return next();
} catch (err) {
err.status = 401;
return next(err);
}
} // end

Bug #6

The patch route for updating a user allowed username and password to be changed when that should not be allowed.

routes/users.js

    // Bug #6 - Add conditional to throw error if user tries to update username or password
      if (req.body.username || req.body.password) {
        throw new ExpressError(
          "Updating username or password not allowed.",
          401
        );
      }
