export const blogQuery = `
*[_type == "blogPost" && defined(publishDate) && publishDate <= now()] | order(publishDate desc) {
  _id,
  title,
  "slug": slug.current,
  description,
  publishDate,
  mainImage
}
`;

