
// Mock data for blog posts
export const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React Hooks",
      description:
        "Learn how to use React Hooks to manage state and side effects in your functional components.",
      author: "Jane Doe",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      date: "2024-03-15",
      category: "React",
      readTime: "5 min read",
      coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      tags: ["react", "hooks", "javascript"],
      likes: 42,
      comments: [
        { id: 1, author: "John Doe", content: "Great article! Very helpful for beginners.", date: "2024-03-15" },
        { id: 2, author: "Jane Smith", content: "I've been using hooks for a while now, and this article explains them really well.", date: "2024-03-16" },
      ],
      slug: "getting-started-with-react-hooks",
      content: `
        <p>React Hooks have revolutionized the way we write React components. In this comprehensive guide, we'll explore the most commonly used hooks and how they can simplify your React code.</p>

        <h2>useState</h2>
        <p>The useState hook allows you to add state to functional components. Here's a simple example:</p>
        <pre><code>
        const [count, setCount] = useState(0);

        return (
        &lt;div&gt;
            &lt;p&gt;You clicked {count} times&lt;/p&gt;
            &lt;button onClick={() => setCount(count + 1)}&gt;
            Click me
            &lt;/button&gt;
        &lt;/div&gt;
        );
        </code></pre>

        <h2>useEffect</h2>
        <p>useEffect lets you perform side effects in functional components. It's similar to componentDidMount, componentDidUpdate, and componentWillUnmount combined.</p>
        <pre><code>
        useEffect(() => {
        document.title = \`You clicked {count} times\`;
        }, [count]);
        </code></pre>

        <h2>useContext</h2>
        <p>useContext provides a way to pass data through the component tree without having to pass props down manually at every level.</p>

        <h2>Conclusion</h2>
        <p>React Hooks provide a more straightforward way to use state and other React features without writing a class. As you become more comfortable with hooks, you'll find that they can significantly simplify your React code.</p>
    `,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    
    },
    {
      id: 2,
      title: "Building RESTful APIs with Node.js and Express",
      description:
        "A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.",
      author: "John Smith",
      date: "2024-03-10",
      category: "Backend",
      readTime: "8 min read",
      slug: "building-restful-apis-with-nodejs-and-express",
    },
    {
      id: 3,
      title: "CSS Grid: A Complete Guide",
      description:
        "Master CSS Grid layout with this in-depth tutorial covering all the essential concepts and techniques.",
      author: "Emily Chen",
      date: "2024-03-05",
      category: "CSS",
      readTime: "6 min read",
      slug: "css-grid-a-complete-guide",
    },
    {
      id: 4,
      title: "Introduction to TypeScript",
      description:
        "Discover the benefits of TypeScript and learn how to integrate it into your JavaScript projects.",
      author: "Michael Johnson",
      date: "2024-02-28",
      category: "TypeScript",
      readTime: "7 min read",
      slug: "introduction-to-typescript",
    },
    {
      id: 5,
      title: "Optimizing React Performance",
      description:
        "Learn advanced techniques to improve the performance of your React applications.",
      author: "Sarah Brown",
      date: "2024-02-20",
      category: "React",
      readTime: "10 min read",
      slug: "optimizing-react-performance",
    },
  ];