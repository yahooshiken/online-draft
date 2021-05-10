# online-draft

Online draft tools. (Work in progress)

## Develop

1. **Start your mongo db.**

   ```shell
   # For MacOS installation.
   brew tap mongodb/brew
   brew install mongodb-community@4.4
   brew services start mongodb-community@4.4

   # For other OS, please refer to the Official website.
   # https://docs.mongodb.com/manual/installation/
   ```

2. **Start server side apps.**

   ```shell
   # In /server directory
   yarn run dev

   # Also watch mode
   yarn run dev:watch
   ```

3. **Start client side apps.**

   ```shell
   # In /client directory
   yarn start
   ```

4. **Access localhost:1844.**

   Access `http://localhost:1844` from your browser.
   In baseball, "18.44" is a special number that represents the distance from the pitcher's mound to home base (exactly 60 feet 60 inches = 18.44 meters).
