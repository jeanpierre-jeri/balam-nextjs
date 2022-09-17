import { baseApi } from '../pages/api/baseApi'

export const getGenerals = async () => {
  try {
    const [{ data: options }, { data: polylang }] = await Promise.all([
      baseApi('/site-meta'),
      baseApi('/common?lang=en')
    ])
    return { options, polylang }
  } catch (error) {
    throw new Error(error.message)
  }
}
