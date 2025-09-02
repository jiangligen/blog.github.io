export const navbarData = {
  homeTitle: "HanHan's Blog",
}

export const footerData = {
  author: 'HanHan',
  aboutAuthor:
    'Hi! 我是憨憨, 这是一个测试博客, 如果你发现了bug，说明这个博客还在测试中。',
  authorInterest:
    "I have a fair amount of knowledge of Javascript, Typescript, VueJs, and Nuxt. If you have an interesting idea, either open source or paid let's connect.",
  aboutTheSite:
    "This is a personal blog site built with Nuxt3, TailwindCSS, NuxtContent, Nuxt Icon. Currently it's deployed in Vercel.",
}

export const homePage = {
  title: '欢迎访问我的博客',
  description:
    'Get Web Development, Javascript, Typescript, NodeJs, Vue, and Nuxt, Related Articles, Tips, Learning resources and more.',
}

export const blogsPage = {
  title: '所有文章',
  description: 'Here you will find all the blog posts I have written & published on this site.',
}

export const categoryPage = {
  title: '分类',
  description:
    'Blow this category is generated from all the tags are mentioned in the different blog post',
}

export const aboutPage = {
  title: 'Al Asad Nur Riyad',
  description: 'Software Engineer, Problem Solver, Web Enthusiast.',
  aboutMe:
    "Hello, fellow human! I'm a software wizard who spends most of his day crafting code spells at @FieldNation in the Workplace Operation team. When I'm not crafting code, you can find me summoning solutions to problems on online judges. Just don't ask me to cast any love spells, my magic only works on machines!",
}

export const seoData = {
  title: `HanHan's Blog`,
  ogTitle: `Let's learn Javascript, Typescript, Vue, Nuxt, & Problem Solving - HanHan's Blog`,
  description: `Hi I am Riyad. A Software Engineer at FieldNation, with over 3.5+ years experience in software development. - Riyads Blog | Riyad's Blog`,
  twitterDescription: `Riyad's Blog, where I play around with Nuxt, Vue, and more and showcase my blog, resources, etc - Riyads Blog | Riyad's Blog`,
  image:
    'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://blog-nurriyad.vercel.app',
  twitterHandle: '@qdnvubp',
  mailAddress: 'asadnurriyad@gmail.com',
}

export const socialLinks = {
  githubLink: 'https://github.com/nurRiyad',
  linkedinLink: 'https://www.linkedin.com/in/nur-riyad/',
  twitterLink: 'https://twitter.com/qdnvubp',
  stackoverflowLink: 'https://stackoverflow.com/users/16781395/nur-riyad',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
