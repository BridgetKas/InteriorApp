import styles from"./Blog.module.css"


function Blog(props) {

  const {blogTitle,name,date,image,className} = props
  return (
    <div className={` ${className}`}>
      <div className={styles.blogContainer}>
        <div className={styles.blogImageContainer}>
          <img src={image} className={styles.bgImage}/>
        </div>
        <div className={styles.bgContainer}>
          <p className={styles.bgTitle}>{blogTitle}</p>
          <p className={styles.bgInfo}> <span className={styles.span}>by </span >{name} <span className={styles.span}>on</span> {date}</p>
        </div>
      </div>
    </div>
  )
}

export default Blog