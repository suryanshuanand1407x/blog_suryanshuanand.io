import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  fullContent?: string;
  image: string;
}

const BlogPost = ({ title, date, excerpt, fullContent, image }: BlogPostProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleReadMore = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const formatContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p key={index} className="mb-4" 
        dangerouslySetInnerHTML={{
          __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        }}
      />
    ));
  };

  return (
    <>
      <article className={`flex flex-col md:flex-row gap-8 group transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex-1 space-y-4">
          <div className="space-y-2">
            <time className="text-sm text-gray-500 transition-colors group-hover:text-gray-700">{date}</time>
            <h2 className="text-2xl font-semibold text-gray-900 leading-tight transition-colors group-hover:text-gray-700">{title}</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">{excerpt}</p>
          {fullContent && (
            <button 
              onClick={handleReadMore}
              className="read-more-link text-sm font-medium text-gray-900 transition-colors"
            >
              Read more →
            </button>
          )}
        </div>
        <div className="md:w-[300px] h-[200px] overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105 group-hover:brightness-90"
          />
        </div>
      </article>

      {isModalOpen && fullContent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto transform transition-all duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white p-4 border-b border-gray-100 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              <time className="text-sm text-gray-500 block mb-4">{date}</time>
              <div className="prose prose-gray max-w-none">
                {formatContent(fullContent)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BlogPost;