export type MenuItem = {
  label: string
  icon: (arg: { isSelected?: boolean }) => JSX.Element
  path: string
  onCallback?: () => void
}
