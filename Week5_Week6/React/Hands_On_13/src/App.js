import './App.css';

function App() {
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2021' }
  ];

  const books = [
    { name: 'Master React', price: 670 },
    { name: 'Deep Dive into Angular 11', price: 800 },
    { name: 'Mongo Essentials', price: 450 }
  ];

  const blogs = [
    {
      title: 'React Learning',
      author: 'Stephen Biz',
      content: 'Welcome to learning React!'
    },
    {
      title: 'Installation',
      author: 'Schwzdenier',
      content: 'You can install React from npm.'
    }
  ];

  return (
    <div className="container">

      <div className="column">
        <h1>Course Details</h1>

        {courses.map((course, index) => (
          <div key={index}>
            <h2>{course.name}</h2>
            <p>{course.date}</p>
          </div>
        ))}
      </div>

      <div className="column">
        <h1>Book Details</h1>

        {books.map((book, index) => (
          <div key={index}>
            <h3>{book.name}</h3>
            <p>{book.price}</p>
          </div>
        ))}
      </div>

      <div className="column">
        <h1>Blog Details</h1>

        {blogs.map((blog, index) => (
          <div key={index}>
            <h2>{blog.title}</h2>
            <h4>{blog.author}</h4>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;