function BlogDetails() {
  const blogs = [
    { id: 1, title: "React Hooks" },
    { id: 2, title: "Conditional Rendering" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;