export default {
  categories: async (parent, args, { Moltin }) => {
    try {
      const { data: categories } = await Moltin.Categories.All()

      return categories
    } catch (e) {
      return e
    }
  },

  category: async (parent, { id }, { Moltin }) => {
    try {
      const { data: category } = await Moltin.Categories.Get(id)

      return category
    } catch (e) {
      return e
    }
  },
}
