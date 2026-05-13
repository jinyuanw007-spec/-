import React from 'react';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-8 bg-dark-900 border-t border-dark-700"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-gray-400">© {currentYear} </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
              monkey
            </span>
            <span className="text-gray-400">. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="#hero"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              首页
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              关于我
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              项目
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              联系
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
