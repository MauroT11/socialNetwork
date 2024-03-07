create table feed (
    id serial primary key,
    feedTitle varchar(50),
    content text,
    likes int,
    uploaded text,
    userid references users(clerkId)
)

create table users (
    clerkId primary key,
    username text,
    location text,
    bio text,
    followers int,
    following int
)