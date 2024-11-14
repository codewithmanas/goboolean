// Mock data for blog posts
export interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  authorAvatar: string;
  date: string;
  category: string;
  readTime: string;
  coverImage: string;
  tags: string[];
  likes: number;
  comments: {
    id: number;
    author: string;
    content: string;
    date: string;
  }[];
  slug: string;
  content: string;
}


export const blogPosts: BlogPost[] = [
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
  },
  {
    id: 2,
    title: "Building RESTful APIs with Node.js and Express",
    description:
      "A comprehensive guide to creating robust and scalable RESTful APIs using Node.js and Express.",
    author: "John Smith",
    authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    date: "2024-03-10",
    category: "Backend",
    readTime: "8 min read",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    tags: ["nodejs", "express", "backend"],
    likes: 55,
    comments: [
      { id: 1, author: "Emily Chen", content: "This guide helped me a lot, thanks!", date: "2024-03-11" },
    ],
    slug: "building-restful-apis-with-nodejs-and-express",
    content: `
  <p>RESTful APIs are a cornerstone of modern web development, allowing client-server communication through HTTP protocols. In this guide, we’ll cover the basics of REST architecture and how to build robust APIs using Node.js and Express.</p>

  <h2>Setting Up Node.js and Express</h2>
  <p>First, you need to install Node.js and initialize a new project:</p>
  <pre><code>
  mkdir api-project
  cd api-project
  npm init -y
  npm install express
  </code></pre>

  <h2>Creating Your First Route</h2>
  <p>Express makes it easy to define routes for different HTTP methods. Here’s an example:</p>
  <pre><code>
  const express = require('express');
  const app = express();

  app.get('/api/users', (req, res) => {
    res.json({ message: 'Fetching users...' });
  });

  app.listen(3000, () => console.log('Server running on port 3000'));
  </code></pre>

  <h2>Building CRUD Operations</h2>
  <p>To handle common operations, we’ll create endpoints for Create, Read, Update, and Delete actions:</p>
  <ul>
    <li><strong>POST</strong> - Create a new resource</li>
    <li><strong>GET</strong> - Retrieve resources</li>
    <li><strong>PUT</strong> - Update a resource</li>
    <li><strong>DELETE</strong> - Remove a resource</li>
  </ul>

  <h2>Using Middleware</h2>
  <p>Middleware functions in Express allow you to handle requests before they reach the route handler. For example, you might add middleware for parsing JSON data:</p>
  <pre><code>
  app.use(express.json());
  </code></pre>

  <h2>Conclusion</h2>
  <p>Node.js and Express are powerful tools for building RESTful APIs quickly and efficiently. With this knowledge, you’re ready to create scalable backends for your applications.</p>
  `,
  },
  {
    id: 3,
    title: "CSS Grid: A Complete Guide",
    description:
      "Master CSS Grid layout with this in-depth tutorial covering all the essential concepts and techniques.",
    author: "Emily Chen",
    authorAvatar: "https://images.unsplash.com/photo-1532074205216-df532f8a0b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    date: "2024-03-05",
    category: "CSS",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1587031177660-975f9ccbd902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    tags: ["css", "css grid", "layout"],
    likes: 88,
    comments: [
      { id: 1, author: "Michael Johnson", content: "CSS Grid makes layouts so much easier!", date: "2024-03-05" },
      { id: 2, author: "Sarah Brown", content: "The examples were really helpful.", date: "2024-03-06" },
    ],
    slug: "css-grid-a-complete-guide",
    content: `
  <p>CSS Grid is a game-changer for layout design, allowing you to create complex, responsive grids with ease. This guide will walk you through the basics and advanced techniques of CSS Grid.</p>

  <h2>Understanding the Grid Container</h2>
  <p>To start using CSS Grid, set the container's display to grid:</p>
  <pre><code>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  </code></pre>

  <h2>Creating Rows and Columns</h2>
  <p>Define rows and columns to control the layout:</p>
  <pre><code>
  grid-template-rows: 200px 200px;
  grid-template-columns: 1fr 2fr;
  </code></pre>

  <h2>Grid Areas</h2>
  <p>Use grid areas to assign names to parts of your layout:</p>
  <pre><code>
  .grid-container {
    grid-template-areas: 
      "header header"
      "sidebar content";
  }
  </code></pre>

  <h2>Responsive Grids</h2>
  <p>CSS Grid is highly responsive and works well with media queries:</p>
  <pre><code>
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr;
    }
  }
  </code></pre>

  <h2>Conclusion</h2>
  <p>CSS Grid makes it easier to build responsive layouts and customize grid-based designs. Mastering these basics will give you a strong foundation for modern web layouts.</p>
`,
  },
  {
    id: 4,
    title: "Introduction to TypeScript",
    description:
      "Discover the benefits of TypeScript and learn how to integrate it into your JavaScript projects.",
    author: "Michael Johnson",
    authorAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    date: "2024-02-28",
    category: "TypeScript",
    readTime: "7 min read",
    coverImage: "https://images.unsplash.com/photo-1584697964154-5c63a975e8e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    tags: ["typescript", "javascript"],
    likes: 65,
    comments: [
      { id: 1, author: "Sarah Brown", content: "TypeScript has made my code so much more maintainable.", date: "2024-03-01" },
    ],
    slug: "introduction-to-typescript",
    content: `
  <p>TypeScript is a typed superset of JavaScript that adds optional static typing, making code more robust and easier to debug. This guide will introduce you to TypeScript basics and why you should consider it for your projects.</p>

  <h2>Getting Started with TypeScript</h2>
  <p>To start using TypeScript, install it in your project:</p>
  <pre><code>
  npm install -g typescript
  tsc --init
  </code></pre>

  <h2>Defining Types</h2>
  <p>TypeScript lets you define types for variables, making the code more predictable:</p>
  <pre><code>
  let username: string = 'John';
  let age: number = 25;
  </code></pre>

  <h2>Interfaces and Classes</h2>
  <p>TypeScript’s interfaces and classes provide structure for objects and allow for object-oriented programming:</p>
  <pre><code>
  interface Person {
    name: string;
    age: number;
  }

  class User implements Person {
    constructor(public name: string, public age: number) {}
  }
  </code></pre>

  <h2>TypeScript in React</h2>
  <p>TypeScript integrates seamlessly with React, enhancing component development with type safety:</p>
  <pre><code>
  interface Props {
    title: string;
  }

  const Header: React.FC<Props> = ({ title }) => <h1>{title}</h1>;
  </code></pre>

  <h2>Conclusion</h2>
  <p>TypeScript can help prevent errors and make code more maintainable. Whether you’re working on large projects or just getting started, TypeScript is a valuable addition to your toolkit.</p>
`,

  },
  {
    id: 5,
    title: "Optimizing React Performance",
    description:
      "Learn advanced techniques to improve the performance of your React applications.",
    author: "Sarah Brown",
    authorAvatar: "https://images.unsplash.com/photo-1507608869275-0f058b66c9d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    date: "2024-02-20",
    category: "React",
    readTime: "10 min read",
    coverImage: "https://images.unsplash.com/photo-1604881990386-1288ed8f28ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    tags: ["react", "performance", "optimization"],
    likes: 99,
    comments: [
      { id: 1, author: "Jane Doe", content: "Great tips! Helped me optimize my app.", date: "2024-02-21" },
      { id: 2, author: "John Smith", content: "Very insightful, thanks for sharing.", date: "2024-02-22" },
    ],
    slug: "optimizing-react-performance",
    content: `
  <p>As applications grow, performance becomes critical. React offers various ways to optimize performance. This guide explores best practices for creating efficient React apps.</p>

  <h2>React.memo</h2>
  <p>React.memo is a higher-order component that helps prevent unnecessary re-renders. Wrap components that don’t need to re-render with React.memo:</p>
  <pre><code>
  import React from 'react';

  const MemoizedComponent = React.memo(MyComponent);
  </code></pre>

  <h2>useMemo and useCallback</h2>
  <p>Use <code>useMemo</code> and <code>useCallback</code> to optimize expensive calculations and avoid function re-creation:</p>
  <pre><code>
  const expensiveCalculation = useMemo(() => calculateExpensiveValue(input),
   [input]);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);
  </code></pre>

  <h2>Lazy Loading</h2>
  <p>Load components only when needed using React.lazy:</p>
  <pre><code>
  const LazyComponent = React.lazy(() => import('./LazyComponent'));
  </code></pre>

  <h2>Using the React Profiler</h2>
  <p>The React Profiler tool helps identify performance bottlenecks in your application. Use it to gain insights on component rendering behavior:</p>

  <h2>Conclusion</h2>
  <p>Optimizing performance in React is essential for providing a smooth user experience. Using tools and techniques like memoization and lazy loading can make a significant difference.</p>
`,

  },
];
