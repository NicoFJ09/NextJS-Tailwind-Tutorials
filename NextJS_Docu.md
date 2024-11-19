# 🚀 Next.JS Full Course

## 📚 Preliminary Info
> Next.js renders before sending info to the server while React renders directly in the client. This makes Next.js faster because things are instantly rendered when they reach the client side. It feels faster because the load time is continuous at first and then fluid, whereas in React it might take time rendering specific sections one by one.

### Key Differences with React:
- 🎯 **Server-Side Rendering**: Faster initial load
- 📁 **File-based Routing**: Easier navigation
- 🛠️ **Built-in API Support**: No server infrastructure needed
- 📦 **Optimized Loading**: Resource-efficient page loading
- ⚡ **React Foundation**: Built on React fundamentals
- 🚫 **No need to specify React imports**: Simplified code

---

## 📋 Course Content

### Sections:
1. 🏗️ [**Creating Next Project**](#🏗️-creating-next-project)
2. 📥 [**Data Fetching**](#📥-data-fetching)
3. 🔌 [**API Endpoints**](#🔌-api-endpoints)
4. 🎯 [**SEO and Metadata**](#🎯-seo-and-metadata)
5. 📝 [**Promptopia From Scratch**](#📝-promptopia-from-scratch)
6. ⚙️ [**Promptopia Setup and Dependencies**](#⚙️-promptopia-setup-and-dependencies)
7. 🖥️ [**Promptopia Development Main Pages**](#🖥️-promptopia-development-main-pages)
8. 🔗 [**Promptopia NavBar and Links Functionalities**](#🔗promptopia-navbar-and-links-functionalities)
9. 🌐 [**API Management**](#🌐-api-management)
10. ✏️ [**Create Prompt**](#✏️-create-prompt)
11. 📰 [**Display Feed**](#📰-dislay-feed)
12. 👤 [**Profile Page**](#👤-profile-page) 
13. 🔄 [**Next API Routes**](#🔄-next-api-routes)
14. 📝[**Special Assignment**](#📝-special-assignment)
15. 🚀 [**Deployment**](#🚀-deployment)
16. 📄 [**NextJS and Tailwind Documentation Review**](#📄-nextjs-and-tailwind-documentation-review)

---

## ℹ️ **Information**
### 🏗️ Creating Next Project
- npx create-next-app@latest ./
- say no to most things beside the recommended one and tailwind use
- I can control general structure throught he layout.js file
- Then we have page that controls the home page, the base one
- Lastly you have globals that just control styles in this case with tailwind
- If I wanted to change the predetermined server side rendering to client side rendering I would have to specify at the top of the page.js "use client"
- when we use hooks like useState or useEffect I must declare "use client" since these operations are done on client side.
- When I create new files that are part of routes these are called page.js, these may have components called differently but to be part of the route they are called page in separate folders.
- I can separate routes by ID using [] equivalent to : for paths when defining files.
- One can create new layout.js files for specific folders to control general rules for said folder.
- Then loading.js would create a custom loader for a specific section in a folder. 
-We can create an error.js file to handle errors, it automatically takes you there (use client is necessary)

---
### 📥 **Data Fetching**
- Server side rendering: we already know this one, on each request it is fetched.
- Static Site Generation, it automatically fetches data and caches it (saves to display said data instead of just updating, it saves it separately, remove "no cache).
- Incremental Static Generation: After a certain amount of time of having cached it it refreshes it to have clear data on the latest updates, not infinetly stacking.
### 🔌 **API Endpoints**
- HTTP requests can be handled through the same routing system as for all frontend uses, here is an express example, all parsing and middleware requirements are syntesized into a single file
- Normally it would look like this:
``` javascript
const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
    // Handle GET request for /api/users
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
    ];

    // Send the users as a response
    res.json(users);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

```
We could create and manage route.js files within the folder they are used in but this would not be recommended, managing route through an api folder is a better option to call services, the endpoints would be kept there.

- These are the HTTP methods available in Next.js that I would establish in route.js
1. **GET**: Retrieves data or resources from the server.
2. **POST**: Submits data to the server to create a new resource.
3. **PUT**: Updates or replaces an existing resource on the server.
4. **PATCH**: Partially updates an existing resource on the server.
5. **DELETE**: Removes a specific resource from the server.
6. **HEAD**: Retrieves the headers of a resource without fetching its body.
7. **OPTIONS**: Retrieves the supported HTTP methods and other communication options for a resource.

**Use example:** 
``` javascript
// http://localhost:3000/api/users
export async function GET(request) {
    // Handle GET request for /api/users
    // Retrieve users from the database or any data source
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' }
    ];

    // Send the users as a response
    return new Response(JSON.stringify(users))
}
```
### 🎯 **SEO and Metadata**

- The purpose of metadata is to help search engines have specific tags or values to search for and create context.

- When exporting from a component I can export Metadata, which could be as simple as a title:'Home', the output would be a head element with the title of Home. That would be static since that value does not change.
- Regarding the dynamic Metadata, based on parameters like id I would be able to export the title component for that one so the export would change for those purposes.
### 📝 **Promptopia From Scratch**
- It is a tool that helps to find creative prompts to pass on to AIs that give better results, `Fullstack nextjs 13 react app`.
### ⚙️ **Promptopia setup and dependencies**
- install dependencies for the other ones"npm install react@18 react-dom@18"
- Install the ones I will use: "npm install bcrypt mongodb mongoose next-auth" (all 4)
- Delete the app folder and create a new one, along with components (js frontend) and models files (for mongodb and mongoose models).
- Delete public folder and create a new one, along with styles (css frontend), utils (functions not specific to components), .env (keys) and assets.
- We will work with tailwind.config (font family and colors added), assets in public (some icons/images) and styles (globals.css) from the tutorial repo.
- We create a our page.jsx (just rafce for now) and layout.jsx
- To fix all warnings add the .vscode file with the content it has inside
### 🖥️ **Promptopia Development Main Pages**
- **Layout.css structure**
``` javascript
import '@styles/globals.css'
export const metadata = {
    title : "Promptopia",
    description : "Discover and share AI Prompts",
}

const RootLayout = ({children}) => {
  return (
    <html lang= "en">
        <body>
        <div className="main">
            <div className="gradient"/>
        </div>

        <main className="app">
            {children}
        </main>
        </body>
    </html>
  )
}

export default RootLayout
```
- Also after removing the / next to the @ the globals.css module can be accesed from layout: 
``` javascript
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

- When working with page.jsx we already begin using tailwind, by adding predetermined classNames with already existing styles, basically we can make components have styles directly from html just by using titles, of course custom css can come in handy but this does most of it, read documentation afterwards and watch full Tailwind CSS on your own time.
- To indicate our own stling we use _ while the native Tailwind ones use -, all is applied in globals if it will constantly be used, if not I agree with having custom css files component
- We still use normal react structure in the sense that I input components the same, add styles normally and separate modules to simplify.
### 🔗 **Promptopia NavBar and Links Functionalities**

- We import link and image directly from next for our navbar, we also use the next-auth library and some of its methods 
- At start the webpage is for desktop so not everything is responsive, which is fine, later will work on responsive.
### 🌐 **API Management**
- For this part we manually go to cloud for the OAuth credentials and MongoDB atlas aswell
mongopassword: Nico_*1966

- We use this path structure to create our route.js file to manage paths between sections.
`app/api/auth/[...nextauth]/route.js`
- This is our structure for the google authentication API, adding local app domain would not work, important to consider.

``` javascript
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: '',
            clientSecret: '',
        })
    ],
    async session({session}){

    },
    async signIn({profile}){

    }
});

export {handler as GET, handler as POST}
```

- Connect MongoDB aswell, all is retrieved from .env, this file contains the keys in this format KEY=13231 no spacing or "", all caps, _ to divide text.
``` javascript
import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('MongoDB connection error:', error);
    }
}
```
- Check database file in utils to compare how to setup, all info for the .env comes from mongo atlas and google cloud stuff I established (no sirve para gente externa, no pueden ver mi .env en mi git jaja, ver alrededor de 1:20:00 del tutorial Next.js en links sino)

- We create a user model to have requirements with sign in:
``` javascript
import {Schema, model, models} from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists'],
        required: [true, 'Email is required'],
    }, 
    username: {
        type: String,
        required: [true, 'Username is required!'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
      },

    image: {
        type: String
    }

    });

    const User= models.User || model('User', UserSchema);

    export default User;
```

- After connecting all, this is what it looks like, considering some extra verifications for the user:
``` javascript
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import User from '@models/user';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();

        // check if user already exists
        const userExists = await User.findOne({ email: profile.email });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }

        return true
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }
```
- We could add these parameters and later change them for deployment, for purposes of this tutorial, will not do: 
``` javascript
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=8rx1lxnzVgPVoIctatxhpstCEUPIlwmwd5mh+7vjPSM=
```
-This is important to include in next config if you want your google profile picture here too
``` javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```
### ✏️ **Create Prompt**
- href='/create-prompt' in the nav file is enough so that the moment that I create a create-prompt folder and add a page.jsx within the path to said page works instantly.
-Here I can manage all requests and posts directly through create prompt, no external resources like express.js needed.
- Here we finally use the mongo-API to save this information, here is the implementation code:
``` javascript
import {connectToDB} from '@utils/database'
import Prompt from '@models/prompt';

export const POST = async (req) =>{
    const {userId, prompt, tag} = await req.json();
    try{
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        })

        await newPrompt.save();
        
        return new Response(JSON.stringify(newPrompt), {
            statur:201
        })
    } catch (error){
        return new Response("Failed to create a new prompt", {status: 500})
    }
}
```
### 📰 **Display Feed**
- Check in your mongoDB cluster the collections section and share_prompt to see your post and user registered.
- we access our database again and retrieve from the user and profile pic to the content itself and we create a copy functionality for each prompt card, pretty cool overall
### 👤 **Profile Page**
- Para este punto vemos que mayoría de los procesos se hacen de la misma forma, son server side, hace displays bonitos con tailwind, hay un par the on click events para botones específicos, las rutas son automatizadas por llamar elementos "page", y acceden a API para obtener datos/ aprovechamos funcionalidades de frontend nativas para hacer gets y fetchear datos particulares con funciones normales de http.
### **🔄 Next API Routes**
- Here we manage the routing to be able to use the delete and update prompt through the mongo API, basically I take what I had made for create-prompt and adapt some parts to change functionality but ultimately change the content in the database.
- Because of version updates syntax changed and I had to adapt my mongo access cde in the api route files `using this from the next library import { NextResponse } from 'next/server';`
### **📝Special Assignment**
- Last Functionalities are tasks of the remaining components of the page
- Implement Search, Implement Click on tag and Implement View other profiles.
### **🚀 Deployment**
- Using vercel you link up github, you add new repo if it is public, we can add environment variables post deployment, it builds and it gets run on a vercel hosted url.
- To be able to have all functionalities we update our .env url, regarding NEXTAUTH URL AND NEXTAUTH INTERNAL, SECRET, MONGO URI, GOOGLE CLINET ID, SECRET, etc.
- we have to update our ip addresses in mongo, our url for cloud, it might take sometime for the user auth to allow sign in, if there are issues redeployment is an option too.
### **📄 NextJS and Tailwind Documentation Review**
- Besides the files I used, these are the other routing files available: 
```
layout	.js .jsx .tsx	Layout

page	.js .jsx .tsx	Page

loading	.js .jsx .tsx	Loading UI

not-found	.js .jsx .tsx	Not found UI

error	.js .jsx .tsx	Error UI

global-error	.js .jsx .tsx	Global error UI

route	.js .ts	API endpoint

template	.js .jsx .tsx	Re-rendered layout

default	.js .jsx .tsx	Parallel route fallback page
```

```
@folder	Named slot
(.)folder	Intercept same level
(..)folder	Intercept one level above
(..)(..)folder	Intercept two levels above
(...)folder	Intercept from root
```

- All routing conditions are in project structure, to manage dinamic routes, check that syntax.

- Regarding Tailwind:

`First link is mostly setup, nothing too impactful`

- The basis of tailwind is that it deletes the need of custom css but this is not a forced practice, in fact, it can be beneficial to combine these:
```
Adding custom stylesheets: Simply link a separate CSS file where you add custom styles for elements or components.
Custom utility classes: You can extend Tailwind's utilities by adding new ones. This is great for specific branding requirements, such as adding custom colors or animations.
Component classes: Tailwind is useful for base styling, but custom CSS is helpful for unique components or those requiring complex pseudoselectors.
```

- The combination depends on me, generally in order to not saturate the use of these we create components if we know the use of styles will be repeated.
- When focusing on the next tailwind tutorial look for the important stuff, handling responsiveness easily, annotating general syntax structures that are usually seen and bringing the versatility of custom css to combine with tailwind and get the best of 2 worlds (even external components from pages like Uiverse)

## 🔗 Useful Links

### 📺 Video Tutorials
- [Next.js Full Tutorial](https://www.youtube.com/watch?v=wm5gMKuwSYk)
- [Tailwind Full Tutorial](https://www.youtube.com/watch?v=tS7upsfuxmo)

### 📄 Documentation
- [Next.js Setup Documentation](https://nextjs.org/learn/dashboard-app/getting-started)
- [When to Use Server and Client Components](https://nextjs.org/learn/react-foundations/server-and-client-components)
- [Next.js Project Structure Documentation](https://nextjs.org/learn/dashboard-app/getting-started)
- [Tailwind Setup Documentation](https://tailwindcss.com/docs/installation)
- [Tailwind First Fundamentals Documentation](https://tailwindcss.com/docs/utility-first)
- [NextAuth Documentation](https://next-auth.js.org/)
- [MongoDB Documentation](https://www.mongodb.com/docs/)