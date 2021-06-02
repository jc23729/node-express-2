BUG #1
User cannot update their own info. Caused by requireAdmin middleware. Fixed by removing requireAdmin since that's being checked in the conditional.