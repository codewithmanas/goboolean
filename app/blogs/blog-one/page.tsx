"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Code2, Calendar, Clock, User, Share2, ThumbsUp, Linkedin, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/constants/blog-posts";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BlogPostPage() {
  const [comment, setComment] = useState("");
  const [likes, setLikes] = useState(blogPosts[0].likes || 0);
  const [isLiked, setIsLiked] = useState(false)

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission logic here
    console.log("Submitting comment:", comment);
    setComment("");
  };

  const handleLike = () => {
    if (isLiked) {
        setLikes(likes - 1)
        setIsLiked(false)
      } else {
        setLikes(likes + 1)
        setIsLiked(true)
      }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href
    let shareUrl = ''

    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(blogPosts[0].title)}`
        break
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(blogPosts[0].title)}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank')
    }
  }

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-blue-400" />
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            GoBoolean
          </span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {["Blogs", "Quizzes", "Projects", "Community"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-300 transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="container mx-auto py-12">
        <motion.article
          initial="initial"
          animate="animate"
          variants={stagger}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.h1
            className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            variants={fadeIn}
          >
            {blogPosts[0].title}
          </motion.h1>
          <motion.div
            variants={fadeIn}
            className="flex items-center justify-center space-x-4 text-blue-200"
          >
            <span className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />{" "}
              {new Date(blogPosts[0].date).toLocaleDateString()}
            </span>
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" /> {blogPosts[0].readTime}
            </span>
            <span className="flex items-center">
              <User className="mr-1 h-4 w-4" /> {blogPosts[0].author}
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPosts[0].content }}
          />
          <motion.div
            variants={fadeIn}
            className="flex justify-between items-center"
          >
            <Button
              variant="outline"
              className={`text-blue-300 ${isLiked ? 'bg-blue-500/20' : ''}`} 
              onClick={handleLike}
            >
              <ThumbsUp className={`mr-2 h-4 w-4 ${isLiked ? 'fill-current' : ''}`} /> {likes} Likes
            </Button>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="text-blue-300">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-40 bg-blue-900 border-blue-700">
                <div className="flex flex-col space-y-2">
                  <Button variant="ghost" className="text-blue-300 justify-start" onClick={() => handleShare('twitter')}>
                    <Twitter className="mr-2 h-4 w-4" /> Twitter
                  </Button>
                  <Button variant="ghost" className="text-blue-300 justify-start" onClick={() => handleShare('facebook')}>
                    <Facebook className="mr-2 h-4 w-4" /> Facebook
                  </Button>
                  <Button variant="ghost" className="text-blue-300 justify-start" onClick={() => handleShare('linkedin')}>
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </motion.div>
        </motion.article>

        <motion.section variants={fadeIn} className="max-w-3xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Comments
          </h2>
          {blogPosts[0].comments?.map((comment) => (
            <Card key={comment.id} className="mb-4 bg-white/10 border-white/20">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarFallback>{comment.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-blue-300">
                      {comment.author}
                    </CardTitle>
                    <CardDescription className="text-blue-200">
                      {new Date(comment.date).toLocaleDateString()}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100">{comment.content}</p>
              </CardContent>
            </Card>
          ))}
          <form onSubmit={handleCommentSubmit} className="mt-6 space-y-4">
            <Textarea
              placeholder="Leave a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600">
              Post Comment
            </Button>
          </form>
        </motion.section>
      </main>

      <footer className="bg-blue-950/50 py-10 mt-12">
        <div className="container mx-auto text-center text-sm text-blue-300">
          © {new Date().getFullYear()} goboolean.in All rights reserved.
        </div>
      </footer>
    </div>
  );
}
