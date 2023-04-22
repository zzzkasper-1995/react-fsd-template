export const appRoutes = {
  empty: () => '/',
  main: () => '/main',
  auth: () => '/auth',
}

export const appRoutePaths: Record<keyof typeof appRoutes, string> = {
  empty: appRoutes.empty(),
  main: appRoutes.main(),
  auth: appRoutes.auth(),
}

export const defaultRoute = appRoutePaths.main
