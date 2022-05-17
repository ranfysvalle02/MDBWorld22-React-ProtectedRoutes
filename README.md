# MDB-React-Protected-Routes-ContextAPI
## _Realm App Services + React = MAGIC_

# LIVE DEMO 
https://application-0-blkhf.mongodbstitch.com/

# Inspired by 
Blog Post: https://www.jeffedmondson.dev/blog/react-protected-routes/

This project is meant to be a good starting point for everything from a hackathon, to a production-ready project. Most templates or starter kits are very opinionated, and force you to do things in their pre-determined structure. This template seeks to do the opposite. 

The projects goes for a minimalistic approach - providing only the absolute minimum to make things usable. This gives you the power to add ANYTHING to the project. You have the ability to quickly adjust, without having to re-code the main parts of the application. Routing/Secure Navigation, Authentication, and the UI/UX. 

The project includes bits of functionality that I've struggled in the past integrating into a React application. My hope is that by sharing this - other people can skip the headaches, and get to building cool things on the MongoDB Application Data platform!

# Project Goals
- Quickly empower developers to build cool features
- Flexibility to style/design the UI/UX as desired
- No need to re-code, worry about Authentication and securing routes
- Avatar Generation 

## Getting Started

What you will need:
- Realm App (Realm App Id) with Email/Pwd Auth enabled (demo@demo.com as the username/pwd)
- Realm App properly configured with 'Custom Data', 'Functions', and 'HTTPS Endpoints'. 

First, make sure you enable the Email/Password Authentication Provider as well as Custom Data.

https://www.mongodb.com/docs/realm/users/enable-custom-user-data/
https://www.mongodb.com/docs/realm/authentication/email-password/#std-label-email-password-authentication

The functions you will need are in the 'functions' folder. 

The HTTPS endpoints you will need are in the 'http_endpoints' folder. 

Once you are ready, do the following:
```sh
git clone https://github.com/ranfysvalle02/MDBWorld22-React-ProtectedRoutes.git
cd MDBWorld22-React-ProtectedRoutes\web\
npm i
```

From here, you need to do a find and replace for the following (src/hooks/useAuth.tsx)

```sh
"__YOUR__APP__ID__" should be replaced with your app id
```

After you have made the changes in the source code, you are now ready to begin.
```sh
npm run start
```

