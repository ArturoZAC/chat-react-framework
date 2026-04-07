import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  ...prefix("auth", [
    layout("layouts/AuthLayout.tsx", [
      route("login", "routes/auth/LoginPage.tsx"),
      route("register", "routes/auth/RegistePage.tsx"),
      route("testing", "routes/auth/TestingPage.tsx"),
      route("testing-args/:id/:name/:age", "routes/auth/TestingArgsPage.tsx"),

      //actions
      route("logout", "auth/actions/logout.action.ts"),
    ]),
  ]),

  ...prefix("chat", [
    layout("layouts/ChatLayout.tsx", [
      index("routes/chat/NotChatSelectedPage.tsx"),
      route("client/:id", "routes/chat/ClientChatPage.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
