create table feed (
    id serial primary key,
    feedTitle varchar(50),
    content text,
    likes int,
    uploaded text,
    userID references users(id)
)

create table users (
    id serial primary key,
    userId text,
    location text,
    bio text,
    followers int,
    following int
)