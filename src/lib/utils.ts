export const getEventLink = () => {
  const link = window.location.href.replace(/.*\/events/g, '')
  if (!link) return undefined
  return link.slice(1)
}
