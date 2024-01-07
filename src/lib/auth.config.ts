// @ts-nocheck

export const authConfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks: {
      // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
      jwt: async ({ token, user }) => {
        // this jwt callback is called whenever a JSON Web Token is created (i.e. at sign in) or updated (i.e. at every request to the server).
        // We can use this callback to add additional properties to the token.
        // In this case we are adding the user id and isAdmin property to the token.
        // If we don't add these properties here, we won't be able to access them in the session callback.
        if (user) {
          token.id = user.id;
          token.isAdmin = user.isAdmin;
        }
        return token;
      },
      session: async ({ session, token }) => {
        // this session callback is called whenever a session is checked.
        // We can use this callback to add additional properties to the session.
        // In this case we are adding the user id and isAdmin property to the session.
        // If we don't add these properties here, we won't be able to access them in the useSession hook.
        if (token) {
          session.user.id = token.id;
          session.user.isAdmin = token.isAdmin;
        }
        return session;
      },
      authorized: async ({ auth, request }) => {
        const user = auth?.user;
        console.log({
          "Hello From authorized callback": user,
        })
        const pathName = request.nextUrl?.pathname;
        const isOnAdminPanel = pathName.startsWith("/admin");
        const isOnBlogPage = pathName.startsWith("/blog");
        const isOnLoginPage = pathName.startsWith("/login");
  
        // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
        if (isOnAdminPanel && !user?.isAdmin) {
          return false;
        }
  
        // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
        if (isOnBlogPage && !user) {
          return false;
        }
  
        // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
        if (isOnLoginPage && user) {
          return Response.redirect(new URL("/", request.nextUrl));
        }
  
        return true
      },
    },
  };