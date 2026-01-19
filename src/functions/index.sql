-- Get all users and related posts (one-to-many)
select * from users u join post p on u.user_id = p.post_id where u.user_id = 1;
