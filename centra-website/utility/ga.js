export const GTM_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}