export interface Author {
  id: string
  createdAt: Date
  updatedAt: Date
  publishedAt: Date
  revisedAt: Date
  name: string
  icon: Icon
  description: string
  url1: string
}

export interface Icon {
  url: string
  height: number
  width: number
}
