import * as DataLoader from 'dataloader'

import { Moltin } from '..'

const brandLoader = new DataLoader(async brandIds => {
  return brandIds.map(async id => {
    const { data } = await Moltin.Brands.Get(id)

    return data
  })
})

const productLoader = new DataLoader(async productIds => {
  return productIds.map(async id => {
    const { data } = await Moltin.Products.Get(id)

    return data
  })
})

const mainImageLoader = new DataLoader(async imageIds => {
  return imageIds.map(async id => {
    const {
      data: { link, ...rest },
    } = await Moltin.Files.Get(id)

    return {
      href: link.href,
      ...rest,
    }
  })
})

const categoryLoader = new DataLoader(async categoryIds => {
  return categoryIds.map(async id => {
    const { data } = await Moltin.Categories.Get(id)
    return data
  })
})

const collectionLoader = new DataLoader(async collectionIds => {
  return collectionIds.map(async id => {
    const { data } = await Moltin.Collections.Get(id)
    return data
  })
})

export default {
  brandLoader,
  mainImageLoader,
  productLoader,
  categoryLoader,
  collectionLoader,
}
