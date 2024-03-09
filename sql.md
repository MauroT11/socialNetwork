create table feed (
    post_id serial primary key,
    feedTitle text,
    content text,
    likes int,
    uploaded text,
    userid references users(user_id)
)

create table users (
    user_id serial primary key,
    username text,
    location text,
    bio text,
    followers int,
    following int
)