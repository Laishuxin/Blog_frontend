export interface BlogNavItem {
  name: string
  children?: BlogNavItem[]
  path?: string
}

export type BlogNavList = BlogNavItem[]

