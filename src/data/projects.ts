export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: '电商管理平台',
    description: '基于React和Node.js构建的企业级电商管理系统，支持订单管理、商品管理、数据分析等功能。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=modern%20e-commerce%20dashboard%20interface%20with%20charts%20and%20data%20visualization%20dark%20theme&image_size=landscape_16_9',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    link: 'https://github.com',
  },
  {
    id: 2,
    name: '任务管理应用',
    description: '一款简洁高效的任务管理工具，支持看板视图、日历视图和团队协作功能。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=task%20management%20app%20interface%20with%20kanban%20board%20dark%20theme&image_size=landscape_16_9',
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
    link: 'https://github.com',
  },
  {
    id: 3,
    name: '在线代码编辑器',
    description: '支持多种编程语言的在线代码编辑器，实时预览和语法高亮功能。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=online%20code%20editor%20interface%20with%20syntax%20highlighting%20dark%20theme&image_size=landscape_16_9',
    technologies: ['React', 'Monaco Editor', 'Express', 'WebSockets'],
    link: 'https://github.com',
  },
  {
    id: 4,
    name: '数据可视化平台',
    description: '企业级数据可视化解决方案，支持多种图表类型和实时数据更新。',
    image: 'https://neeko-copilot.bytedance.net/api/text_to_image?prompt=data%20visualization%20platform%20with%20various%20charts%20and%20graphs%20dark%20theme&image_size=landscape_16_9',
    technologies: ['React', 'D3.js', 'PostgreSQL', 'Redis'],
    link: 'https://github.com',
  },
];
