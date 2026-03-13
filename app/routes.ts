import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  ...prefix("auth", [
    layout("layouts/AuthLayout.tsx", [
      route("login", "routes/auth/LoginPage.tsx"),
      route("register", "routes/auth/RegistePage.tsx"),
    ]),
  ]),

  ...prefix("chat", [
    layout("layouts/ChatLayout.tsx", [
      index("routes/chat/NotChatSelectedPage.tsx"),
      route("ABC", "routes/chat/ClientChatPage.tsx"),
    ]),
  ]),
] satisfies RouteConfig;
