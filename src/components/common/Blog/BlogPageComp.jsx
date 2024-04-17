import React from 'react'
import styles from"./Blog.module.css"
import image1 from "../../../assets/home/post-1.jpg"
import image2 from "../../../assets/home/post-2.jpg"
import image3 from "../../../assets/home/post-3.jpg"


const blogs = [
  {
    imageSrc:image1,
    bTitle:"First Time Home Owner Ideas",
    name:"Kristin Watson ",
    date:"Dec 19, 2021",
  },
  {
    imageSrc:image2,
    bTitle:"How To Keep Your Furniture Clean",
    name:"Robert Fox ",
    date:"Dec 15, 2021",
  },
  {
    imageSrc:image3,
    bTitle:"Small Space Furniture Apartment Ideas",
    name:"Kristin Watson ",
    date:"Dec 12, 2021",
  },
  {
    imageSrc:image1,
    bTitle:"First Time Home Owner Ideas",
    name:"Kristin Watson ",
    date:"Dec 19, 2021",
  },
  {
    imageSrc:image2,
    bTitle:"How To Keep Your Furniture Clean",
    name:"Robert Fox ",
    date:"Dec 15, 2021",
  },
  {
    imageSrc:image3,
    bTitle:"Small Space Furniture Apartment Ideas",
    name:"Kristin Watson ",
    date:"Dec 12, 2021",
  },
   {
    imageSrc:image1,
    bTitle:"First Time Home Owner Ideas",
    name:"Kristin Watson ",
    date:"Dec 19, 2021",
  },
  {
    imageSrc:image2,
    bTitle:"How To Keep Your Furniture Clean",
    name:"Robert Fox ",
    date:"Dec 15, 2021",
  },
  {
    imageSrc:image3,
    bTitle:"Small Space Furniture Apartment Ideas",
    name:"Kristin Watson ",
    date:"Dec 12, 2021",
  },

]

function BlogComp() {

  return (
    <div className={` ${styles.mainBlogContainer}`}>
      {blogs.map((blog,index) => {
        return  <div key={index}className={styles.blogContainer}>
                    <div className={styles.blogImageContainer}>
                      <img src={blog.imageSrc} className={styles.bgImage}/>
                    </div>
                    <div className={styles.bgContainer}>
                      <p className={styles.bgTitle}>{blog.bTitle}</p>
                      <p className={styles.bgInfo}> <span className={styles.span}>by </span >{blog.name} <span className={styles.span}>on</span> {blog.date}</p>
                    </div>
                </div>
      })}
    </div>
  )
}

export default BlogComp