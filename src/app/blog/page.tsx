'use client';

import Link from 'next/link';
import Image from 'next/image';

const samplePosts = [
  {
    id: 'post-1',
    title: 'The Importance of Coding Education in Schools',
    excerpt: 'Discover why coding skills are essential for students and how Taughtlevel Technologies can help your school integrate coding into the curriculum.',
    image: '/blog/coding-education.jpg',
    slug: '/blog/coding-education',
  },
  {
    id: 'post-2',
    title: 'Robotics: Sparking Innovation in Young Minds',
    excerpt: 'Learn how hands-on robotics projects boost creativity and problem-solving skills among students.',
    image: '/blog/robotics-innovation.jpg',
    slug: '/blog/robotics-innovation',
  },
  {
    id: 'post-3',
    title: 'UI/UX Design for Beginners: A School Curriculum Guide',
    excerpt: 'An introductory guide to teaching UI/UX principles in schools, with project ideas and resources.',
    image: '/blog/ui-ux-guide.jpg',
    slug: '/blog/ui-ux-guide',
  },
];

const BlogPage = () => {
  return (
    <main className="bg-white py-16">
      {/* Hero */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Latest insights, tips, and stories on technology education, coding, robotics,
            and more, brought to you by Taughtlevel Technologies.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {samplePosts.map((post) => (
          <article
            key={post.id}
            className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            <Image
              src={post.image}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={post.slug} className="hover:text-primary transition">
                  {post.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <Link
                href={post.slug}
                className="text-primary font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default BlogPage;
