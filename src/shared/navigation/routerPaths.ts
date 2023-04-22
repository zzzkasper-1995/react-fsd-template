export const appRoutes = {
  empty: () => '/',
  main: () => '/main',
}

export const appRoutePaths: Record<keyof typeof appRoutes, string> = {
  empty: appRoutes.empty(),
  main: appRoutes.main(),
}

export const defaultRoute = appRoutePaths.main
