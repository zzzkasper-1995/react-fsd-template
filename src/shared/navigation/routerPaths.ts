export const appRoutes = {
  main: () => '/',
}

export const appRoutePaths: Record<keyof typeof appRoutes, string> = {
  main: appRoutes.main(),
}
