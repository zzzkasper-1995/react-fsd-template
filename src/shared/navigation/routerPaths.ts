export const appRoutes = {
  empty: () => '/',
  main: () => '/main',
  auth: () => '/auth',
  create: () => '/create',
}

export const appRoutePaths: Record<keyof typeof appRoutes, string> = {
  empty: appRoutes.empty(),
  main: appRoutes.main(),
  auth: appRoutes.auth(),
  create: appRoutes.create(),
}

export const defaultRoute = appRoutePaths.main
