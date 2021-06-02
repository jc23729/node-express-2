BUG #1
User cannot update their own info. Caused by requireAdmin middleware. Fixed by removing requireAdmin since that's being checked in the conditional.

Bug #2
Non-admins can set themselves as admins. Test was passing because Bug #1 was preventing user from updating their info altogether.


Bug #3
The getAll() method on the User class had unncessary paramaters for username and password.

Models/user.js


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

