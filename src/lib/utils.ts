export const getSubLink = (main: string) => {
  const link = window.location.href.replace(new RegExp(`.*/${main}`, 'g'), '')
  if (!link) return undefined
  return link.slice(1)
}
