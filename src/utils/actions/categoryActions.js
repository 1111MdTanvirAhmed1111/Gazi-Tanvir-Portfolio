import {prisma} from '@/utils/Prisma'
// Create a new category
export async function createCategory(name, description) {
  if (!name) {
    throw new Error("Category name is required.");
  }

  try {
    const newCategory = await prisma.category.create({
      data: {
        name,
        description,
      },
    });
    return newCategory;
  } catch (error) {
    throw new Error("Failed to create category.");
  }
}

// Delete a category by ID
export async function deleteCategory(id) {
  if (!id) {
    throw new Error("Category ID is required.");
  }

  try {
    const deletedCategory = await prisma.category.delete({
      where: { id },
    });
    return deletedCategory;
  } catch (error) {
    throw new Error("Failed to delete category.");
  }
}

// Get all categories
export async function getAllCategories() {
  try {
    const categories = await prisma.category.findMany();
    return categories;
  } catch (error) {
    throw new Error("Failed to retrieve categories.");
  }
}

// Get categories by a search query
export async function searchCategories(query) {
  try {
    const categories = await prisma.category.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive", // Optional: case insensitive search
        },
      },
    });
    return categories;
  } catch (error) {
    throw new Error("Failed to search categories.");
  }
}
