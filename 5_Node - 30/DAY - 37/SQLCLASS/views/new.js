<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Add New User</title>
  </head>
  <body>
    <form action="/user/new" method="POST">
      <input name="email" type="email" placeholder="enter email" />
      <input name="username" type="text" placeholder="enter usernmae" />
      <input name="password" type="password" placeholder="enter password" />
      <button>Submit</button>
    </form>
  </body>
</html>